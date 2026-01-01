"use client";

import { useEffect, useRef } from "react";

export default function MasonryGrid({
  children,
  className = "",
  itemSelector = ".gallery__item",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  itemSelector?: string;
}) {
  const isotopContainer = useRef<HTMLDivElement | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    let timeoutId: number | null = null;
    let isotope: { destroy: () => void; layout: () => void } | null = null;
    let imagesLoadedInstance:
      | { on: (event: string, cb: () => void) => void; off?: (event: string, cb: () => void) => void }
      | null = null;

    // Prevent double init under React 18 strict mode
    if (initialized.current) return;
    initialized.current = true;

    const onImagesProgress = () => isotope?.layout();

    timeoutId = window.setTimeout(() => {
      const initIsotop = async () => {
        const Isotope = (await import("isotope-layout")).default;
        const imagesloaded = (await import("imagesloaded")).default;

        if (!isotopContainer.current) return;
        // Initialize Isotope in the mounted hook
        isotope = new Isotope(isotopContainer.current, {
          itemSelector: itemSelector,
          layoutMode: "masonry", // or 'fitRows', depending on your layout needs
        });
        imagesLoadedInstance = imagesloaded(isotopContainer.current);
        imagesLoadedInstance.on("progress", onImagesProgress);
      };
      initIsotop();
    }, 100);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (imagesLoadedInstance) {
        if (imagesLoadedInstance.off) {
          imagesLoadedInstance.off("progress", onImagesProgress);
        }
      }
      isotope?.destroy();
    };
  }, [itemSelector]);
  return (
    <div className={className} ref={isotopContainer} {...rest}>
      {children}
    </div>
  );
}
