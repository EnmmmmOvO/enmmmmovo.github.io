"use client";

// Dot-matrix rendering of the WillCode logo on a canvas, each dot taking the logo colour under it: dots gather
// from a scattered cloud when the component becomes active, twinkle, catch a periodic diagonal light sweep and
// move away from the pointer.

import { useEffect, useRef } from "react";
import { LOGO_SHAPES, LOGO_VIEWBOX, type LogoGradient } from "@/components/headers/Logo";

type LogoParticlesProps = {
  /**
   * Animates only while true, replaying the gather-in intro each time it turns on.
   * When omitted, animates while the canvas is on screen and plays the intro once.
   */
  active?: boolean;
  className?: string;
};

type Engine = { start: (replayIntro: boolean) => void; stop: () => void };

const TARGET_COLUMNS = 72;
const MIN_PITCH = 2.6;       // CSS px between dot centres
const MAX_PITCH = 6;
const DOT_RATIO = 0.55;      // dot size relative to the pitch
const MIN_COVERAGE = 0.4;    // share of a grid cell the artwork must cover to get a dot
const INTRO_SECONDS = 1.4;
const INTRO_STAGGER = 0.5;
const SWEEP_PERIOD = 7;
const SWEEP_DURATION = 2.4;
const SWEEP_WIDTH = 0.08;    // in logo-diagonal units
const REPEL_RADIUS = 0.14;   // in logo widths
const REPEL_PUSH = 0.06;     // in logo widths
const STRAY_COUNT = 18;
const COLOR_STEP = 8;        // per-channel quantisation of sampled colours
// Per dot: targetX, targetY, startX, startY, delay, phase, dispX, dispY, paletteIndex
const STRIDE = 9;

const rgba = (hex: string, alpha = 1) =>
  `rgba(${parseInt(hex.slice(1, 3), 16)}, ${parseInt(hex.slice(3, 5), 16)}, ${parseInt(hex.slice(5, 7), 16)}, ${alpha})`;

function createPaint(ctx: CanvasRenderingContext2D, gradient: LogoGradient) {
  const paint = gradient.type === "linear"
    ? ctx.createLinearGradient(gradient.x1, gradient.y1, gradient.x2, gradient.y2)
    : ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
  for (const [offset, color, opacity] of gradient.stops) paint.addColorStop(offset, rgba(color, opacity));
  return paint;
}

function drawLogo(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.save();
  ctx.scale(width / LOGO_VIEWBOX.width, height / LOGO_VIEWBOX.height);
  for (const { d, fills } of LOGO_SHAPES) {
    const path = new Path2D(d);
    for (const gradient of fills) {
      ctx.save();
      ctx.fillStyle = createPaint(ctx, gradient);
      if (gradient.type === "linear") {
        ctx.fill(path, "evenodd");
      } else {
        // Radial paints are defined in gradientTransform space, so the path is mapped into that space too.
        const local = new Path2D();
        local.addPath(path, new DOMMatrix(gradient.transform).inverse());
        ctx.transform(...gradient.transform);
        ctx.fill(local, "evenodd");
      }
      ctx.restore();
    }
  }
  ctx.restore();
}

const quantize = (channel: number) => Math.min(255, Math.round(channel / COLOR_STEP) * COLOR_STEP);

// Returns, for each grid cell the artwork covers, its centre (0..1 across the logo box) and the palette index of
// its average colour; dots are grouped by colour so the draw loop switches fillStyle once per run.
function sampleLogo(cols: number): { points: number[]; palette: string[] } {
  const S = 6;
  const rows = Math.round((cols * LOGO_VIEWBOX.height) / LOGO_VIEWBOX.width);
  const off = document.createElement("canvas");
  off.width = cols * S;
  off.height = rows * S;
  const octx = off.getContext("2d", { willReadFrequently: true });
  if (!octx) return { points: [], palette: [] };
  drawLogo(octx, off.width, off.height);
  const rgbaData = octx.getImageData(0, 0, off.width, off.height).data;
  const groups = new Map<string, number[]>();
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let a = 0, r = 0, g = 0, b = 0;
      for (let y = 0; y < S; y++) {
        const rowStart = ((j * S + y) * off.width + i * S) * 4;
        for (let x = 0; x < S; x++) {
          const p = rowStart + x * 4;
          const pa = rgbaData[p + 3];
          a += pa;
          r += rgbaData[p] * pa;
          g += rgbaData[p + 1] * pa;
          b += rgbaData[p + 2] * pa;
        }
      }
      if (a / (S * S * 255) <= MIN_COVERAGE) continue;
      const color = `rgb(${quantize(r / a)}, ${quantize(g / a)}, ${quantize(b / a)})`;
      const group = groups.get(color) ?? [];
      group.push((i + 0.5) / cols, (j + 0.5) / rows);
      groups.set(color, group);
    }
  }
  const palette = [...groups.keys()];
  const points: number[] = [];
  palette.forEach((color, c) => {
    const group = groups.get(color) ?? [];
    for (let k = 0; k < group.length; k += 2) points.push(group[k], group[k + 1], c);
  });
  return { points, palette };
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function LogoParticles({ active, className }: LogoParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<Engine | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0, height = 0;
    let logoX = 0, logoY = 0, logoW = 0, logoH = 0;
    let dotSize = 1;
    let palette: string[] = [];
    let dots = new Float32Array(0);
    let dotCount = 0;
    let strays = new Float32Array(0);
    let introStart = 0;
    let rafId = 0;
    let running = false;
    const pointer = { x: -1e5, y: -1e5 };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (!width || !height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Fit the logo box inside the canvas, keeping its aspect ratio.
      logoH = Math.min(height, (width * LOGO_VIEWBOX.height) / LOGO_VIEWBOX.width);
      logoW = (logoH * LOGO_VIEWBOX.width) / LOGO_VIEWBOX.height;
      logoX = (width - logoW) / 2;
      logoY = (height - logoH) / 2;
      const pitch = Math.min(MAX_PITCH, Math.max(MIN_PITCH, logoW / TARGET_COLUMNS));
      dotSize = pitch * DOT_RATIO;

      const sample = sampleLogo(Math.round(logoW / pitch));
      const points = sample.points;
      palette = sample.palette;
      dotCount = points.length / 3;
      dots = new Float32Array(dotCount * STRIDE);
      const spread = Math.min(width, height) * 0.5;
      for (let k = 0; k < dotCount; k++) {
        const o = k * STRIDE;
        const angle = Math.random() * Math.PI * 2;
        const radius = spread * Math.sqrt(Math.random());
        dots[o] = points[k * 3];
        dots[o + 1] = points[k * 3 + 1];
        dots[o + 2] = width / 2 + Math.cos(angle) * radius;
        dots[o + 3] = height / 2 + Math.sin(angle) * radius;
        dots[o + 4] = Math.random() * INTRO_STAGGER;
        dots[o + 5] = Math.random() * Math.PI * 2;
        dots[o + 8] = points[k * 3 + 2];
      }

      // Per stray: x, y, phase, size factor, paletteIndex
      strays = new Float32Array(STRAY_COUNT * 5);
      for (let k = 0; k < STRAY_COUNT; k++) {
        strays[k * 5] = Math.random() * width;
        strays[k * 5 + 1] = Math.random() * height;
        strays[k * 5 + 2] = Math.random() * Math.PI * 2;
        strays[k * 5 + 3] = 0.6 + Math.random() * 0.8;
        strays[k * 5 + 4] = Math.floor(Math.random() * palette.length);
      }
    };

    const draw = (now: number) => {
      const t = now / 1000;
      const introT = reduceMotion ? Infinity : (now - introStart) / 1000;
      const sweepT = (t % SWEEP_PERIOD) / SWEEP_DURATION;
      const sweepPos = sweepT <= 1 ? -0.2 + sweepT * 1.4 : Infinity;
      const repelRadius = logoW * REPEL_RADIUS;
      const repelPush = logoW * REPEL_PUSH;
      const rect = canvas.getBoundingClientRect();
      const pointerX = pointer.x - rect.left;
      const pointerY = pointer.y - rect.top;

      ctx.clearRect(0, 0, width, height);

      const strayCount = palette.length ? STRAY_COUNT : 0;
      for (let k = 0; k < strayCount; k++) {
        const o = k * 5;
        const pulse = reduceMotion ? 0.5 : 0.5 + 0.5 * Math.sin(t * 1.3 + strays[o + 2]);
        ctx.globalAlpha = 0.1 + 0.5 * pulse * pulse;
        ctx.fillStyle = palette[strays[o + 4]];
        const size = dotSize * strays[o + 3];
        ctx.fillRect(strays[o] - size / 2, strays[o + 1] - size / 2, size, size);
      }

      let paletteIndex = -1;
      for (let k = 0; k < dotCount; k++) {
        const o = k * STRIDE;
        if (dots[o + 8] !== paletteIndex) {
          paletteIndex = dots[o + 8];
          ctx.fillStyle = palette[paletteIndex];
        }
        let x = logoX + dots[o] * logoW;
        let y = logoY + dots[o + 1] * logoH;
        const p = Math.min(1, Math.max(0, (introT - dots[o + 4]) / INTRO_SECONDS));
        if (p < 1) {
          const e = easeOutCubic(p);
          x = dots[o + 2] + (x - dots[o + 2]) * e;
          y = dots[o + 3] + (y - dots[o + 3]) * e;
        }

        // Ease each dot's offset towards a push away from the pointer.
        let tx = 0, ty = 0;
        const dx = x - pointerX, dy = y - pointerY;
        const d2 = dx * dx + dy * dy;
        if (d2 < repelRadius * repelRadius && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const f = 1 - d / repelRadius;
          tx = (dx / d) * f * f * repelPush;
          ty = (dy / d) * f * f * repelPush;
        }
        dots[o + 6] += (tx - dots[o + 6]) * 0.16;
        dots[o + 7] += (ty - dots[o + 7]) * 0.16;

        const twinkle = reduceMotion ? 1 : 0.85 + 0.15 * Math.sin(t * 2.2 + dots[o + 5]);
        const diagonal = (dots[o] + dots[o + 1]) / 2 - sweepPos;
        const sweep = 0.45 * Math.exp(-(diagonal * diagonal) / (2 * SWEEP_WIDTH * SWEEP_WIDTH));
        ctx.globalAlpha = Math.min(1, 0.72 * twinkle + sweep);
        ctx.fillRect(x + dots[o + 6] - dotSize / 2, y + dots[o + 7] - dotSize / 2, dotSize, dotSize);
      }
      ctx.globalAlpha = 1;

      if (running && !reduceMotion) rafId = requestAnimationFrame(draw);
    };

    const start = (replayIntro: boolean) => {
      if (running) return;
      running = true;
      if (replayIntro) introStart = performance.now();
      rafId = requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    // Pointer is tracked in viewport coordinates so the canvas can sit behind other content.
    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const onPointerLeave = () => {
      pointer.x = -1e5;
      pointer.y = -1e5;
    };
    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") onPointerLeave();
    };

    build();
    const resizeObserver = new ResizeObserver(() => {
      build();
      if (running && reduceMotion) requestAnimationFrame(draw);
    });
    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerLeave);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    engineRef.current = { start, stop };

    return () => {
      stop();
      engineRef.current = null;
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerLeave);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  useEffect(() => {
    const engine = engineRef.current;
    const canvas = canvasRef.current;
    if (!engine || !canvas) return;
    if (active !== undefined) {
      if (active) engine.start(true);
      else engine.stop();
      return;
    }
    let introPlayed = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        engine.start(!introPlayed);
        introPlayed = true;
      } else {
        engine.stop();
      }
    });
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="WillCode logo"
      style={{ display: "block", width: "100%", height: "100%", touchAction: "pan-y" }}
    />
  );
}
