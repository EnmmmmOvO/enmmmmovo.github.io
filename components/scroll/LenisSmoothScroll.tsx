"use client";
import ReactLenis, { useLenis } from "lenis/react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisSmoothScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    let refreshScheduled = false;
    const scheduleRefresh = () => {
      if (refreshScheduled) return;
      refreshScheduled = true;
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        refreshScheduled = false;
      });
    };

    // Create scrollerProxy for better ScrollTrigger integration
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      scrollLeft(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    // Ensure scrollbar is visible and working
    document.body.style.overflow = "auto";

    // Update ScrollTrigger when Lenis scrolls
    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    // Centralized refresh handler for all animations
    const handleRefresh = scheduleRefresh;

    // Handle window resize
    const handleResize = () => {
      handleRefresh();
    };

    // Listen for window resize only (avoid recursive refresh events)
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      lenis.off("scroll", onLenisScroll);
      // Revert scrollerProxy
      ScrollTrigger.scrollerProxy(document.body, {});
      // Reset body overflow
      document.body.style.overflow = "";
    };
  }, [lenis]);
  // return null for ios
  if (
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  ) {
    return null;
  }
  return <ReactLenis root />;
}
