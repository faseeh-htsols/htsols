// components/lottie-player.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";

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
  const [anim, setAnim] = useState<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop,
      autoplay: prefersReduced ? false : autoplay,
      path: src,
      rendererSettings: {
        progressiveLoad: true, // faster SVG render
        preserveAspectRatio: "xMidYMid meet",
        className: "w-full h-full",
      },
    });

    setAnim(animation);
    onReady?.(animation);

    return () => {
      animation.destroy();
    };
  }, [src, loop, autoplay, onReady]);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
