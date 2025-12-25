"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

type Point = { x: number; y: number };

const MouseTracker = () => {
  const [circlePosition, setCirclePosition] = useState<Point>({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState<Point>({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState<Point>({ x: -100, y: -100 });
  const [isMouseDevice, setIsMouseDevice] = useState(false);
  const [hover, setHover] = useState(false);

  const circleRafId = useRef<number | null>(null);
  const dotRafId = useRef<number | null>(null);

  const circleLoopRef = useRef<(() => void) | null>(null);
  const dotLoopRef = useRef<(() => void) | null>(null);

  /* hover detection */
  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.closest("button, a, [data-cursor='hover']")) setHover(true);
    };
    const onOut = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.closest("button, a, [data-cursor='hover']")) setHover(false);
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  /* mouse detection + position */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMouseDevice(window.matchMedia("(pointer: fine)").matches);

    const handleMouseMove = (e: MouseEvent) =>
      setTargetPosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* one-frame logic */
  const updateCircle = useCallback(() => {
    setCirclePosition(prev => {
      const dx = targetPosition.x - prev.x;
      const dy = targetPosition.y - prev.y;
      return { x: prev.x + dx * 0.1, y: prev.y + dy * 0.1 };
    });
  }, [targetPosition]);

  const updateDot = useCallback(() => {
    const t = hover ? 1 : 0.4;
    setDotPosition(prev => {
      const dx = targetPosition.x - prev.x;
      const dy = targetPosition.y - prev.y;
      return { x: prev.x + dx * t, y: prev.y + dy * t };
    });
  }, [targetPosition, hover]);

  /* RAF loops (ONLY place where RAF repeats itself) */
  useEffect(() => {
    circleLoopRef.current = () => {
      updateCircle();
      circleRafId.current = requestAnimationFrame(circleLoopRef.current!);
    };

    dotLoopRef.current = () => {
      updateDot();
      dotRafId.current = requestAnimationFrame(dotLoopRef.current!);
    };

    circleRafId.current = requestAnimationFrame(circleLoopRef.current);
    dotRafId.current = requestAnimationFrame(dotLoopRef.current);

    return () => {
      if (circleRafId.current !== null) cancelAnimationFrame(circleRafId.current);
      if (dotRafId.current !== null) cancelAnimationFrame(dotRafId.current);
    };
  }, [updateCircle, updateDot]);

  if (!isMouseDevice) return null;

  return (
    <div>
      {!hover && (
        <div
          className="pointer-events-circle"
          style={{
            position: "fixed",
            top: circlePosition.y - 20,
            left: circlePosition.x - 20,
          }}
        />
      )}
      <div
        className="pointer-events-dot"
        style={{
          top: dotPosition.y,
          left: dotPosition.x,
          width: hover ? 50 : 5,
          height: hover ? 50 : 5,
          backgroundColor: hover
            ? "rgba(0, 0, 0, 0.3)"
            : "rgba(0, 0, 0, 1)",
        }}
      />
    </div>
  );
};

export default MouseTracker;
