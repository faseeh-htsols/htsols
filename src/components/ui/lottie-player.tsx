// components/lottie-player.tsx
"use client";
import React, { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";

type LottiePlayerProps = {
  src: string; // public path to JSON
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  onReady?: (anim: AnimationItem) => void; // parent can control playback
};

export default function LottiePlayer({
  src,
  loop = false,
  autoplay = false,
  className,
  onReady,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animation: AnimationItem | null = null;
    let cancelled = false;
    let observer: IntersectionObserver | null = null;

    const loadAnimation = async () => {
      const prefersReduced =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const { default: lottie } = await import("lottie-web");
      if (cancelled) return;

      animation = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop,
        autoplay: prefersReduced ? false : autoplay,
        path: src,
        rendererSettings: {
          progressiveLoad: true,
          preserveAspectRatio: "xMidYMid meet",
          className: "w-full h-full",
        },
      });

      onReady?.(animation);
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;
          observer?.disconnect();
          observer = null;
          void loadAnimation();
        },
        { rootMargin: "200px" },
      );
      observer.observe(container);
    } else {
      void loadAnimation();
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      animation?.destroy();
    };
  }, [src, loop, autoplay, onReady]);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
