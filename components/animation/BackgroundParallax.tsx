"use client";
import { ElementType, useEffect, useRef } from "react";
import gsap from "gsap";
type HtmlTag = keyof HTMLElementTagNameMap;

type UkiyoBgProps<T extends HtmlTag = "div"> = {
  as?: T; // choose the tag; default "div"
  className?: string; // your class with background-image
  scale?: number; // default 1.2
  speed?: number; // default 1.5
  willChange?: boolean; // default true
  wrapperClass?: string; // optional ukiyo wrapper class
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

const BackgroundParallax = <T extends HtmlTag = "div">({
  as,
  className,
  scale = 1.2,
  speed = 1.5,
  willChange = true,
  wrapperClass,
  children,
  style
}: UkiyoBgProps<T>) => {
  const elRef = useRef<HTMLElement | null>(null);
  const Tag = (as ?? "div") as ElementType;
  useEffect(() => {
    if (!elRef.current) return;

    let instance: { animate: () => void; destroy: () => void } | null = null;
    let tick: (() => void) | null = null;
    let cancelled = false;

    const init = async () => {
      try {
        const { default: Ukiyo } = await import("ukiyojs");
        if (cancelled || !elRef.current) return;

        instance = new Ukiyo(elRef.current, {
          scale,
          speed,
          willChange,
          wrapperClass,
          externalRAF: true, // driven by GSAP’s ticker
        });
        tick = () => instance?.animate();
        gsap.ticker.add(tick);
      } catch (e) {
        // Fail silently so the background still renders even if parallax fails
        console.error("Ukiyo init failed", e);
      }
    };

    init();

    return () => {
      cancelled = true;
      if (tick) gsap.ticker.remove(tick);
      instance?.destroy();
    };
  }, [scale, speed, willChange, wrapperClass]);

  return (
    <Tag ref={elRef} className={className} style={style}>
      {children}
    </Tag>
  );
};

export default BackgroundParallax;
