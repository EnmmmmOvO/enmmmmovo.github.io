"use client";

import React, { useState, useEffect, useRef } from 'react';

const MouseTracker = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: -100, y: -100 });
  const [isMouseDevice, setIsMouseDevice] = useState(false);
  const circleRequestRef = useRef<any>(null);
  const dotRequestRef = useRef<any>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      if (el.closest("button, a, [data-cursor='hover']")) setHover(true);
    };
    const onOut = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      if (el.closest("button, a, [data-cursor='hover']")) setHover(false);
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [setHover]);

  useEffect(() => {
    setIsMouseDevice(window.matchMedia('(pointer: fine)').matches);
    const handleMouseMove = (event: MouseEvent) => setTargetPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const animateCircle = () => {
    setCirclePosition((prevPosition) => {
      const dx = targetPosition.x - prevPosition.x;
      const dy = targetPosition.y - prevPosition.y;
      return { x: prevPosition.x + dx * 0.1, y: prevPosition.y + dy * 0.1 };
    });

    circleRequestRef.current = requestAnimationFrame(animateCircle);
  };

  const animateDot = () => {
    const t = hover ? 1 : 0.4;
    setDotPosition((prevPosition) => {
      const dx = targetPosition.x - prevPosition.x;
      const dy = targetPosition.y - prevPosition.y;
      return { x: prevPosition.x + dx * t, y: prevPosition.y + dy * t };
    });

    dotRequestRef.current = requestAnimationFrame(animateDot);
  };

  useEffect(() => {
    circleRequestRef.current = requestAnimationFrame(animateCircle);
    dotRequestRef.current = requestAnimationFrame(animateDot);
    return () => {
      cancelAnimationFrame(circleRequestRef.current);
      cancelAnimationFrame(dotRequestRef.current);
    };
  }, [animateCircle, animateDot, targetPosition]);

  if (!isMouseDevice) return <></>;

  return (
    <div>
      {hover || (
        <div
          style={{ position: 'fixed', top: circlePosition.y - 20, left: circlePosition.x - 20 }}
          className="pointer-events-circle"
        />
      )}
      <div
        style={{
          top: dotPosition.y,
          left: dotPosition.x,
          width: hover ? 50 : 5,
          height: hover ? 50 : 5,
          backgroundColor: hover ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 1)',
        }}
        className="pointer-events-dot"
      />
    </div>
  );

};

export default MouseTracker;