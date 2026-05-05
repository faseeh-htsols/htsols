"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

type GsapModule = typeof import("gsap");
type ScrollTriggerModule = typeof import("gsap/ScrollTrigger");

let lenisSingleton: Lenis | null = null;

export default function useLenisScroll() {
  useEffect(() => {
    const shouldSkip =
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (shouldSkip || lenisSingleton) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const [{ default: LenisConstructor }, gsapModule, scrollTriggerModule] =
        await Promise.all([
          import("lenis"),
          import("gsap") as Promise<GsapModule>,
          import("gsap/ScrollTrigger") as Promise<ScrollTriggerModule>,
        ]);

      if (cancelled || lenisSingleton) return;

      const gsapInstance = gsapModule.gsap ?? gsapModule.default;
      const ScrollTrigger =
        scrollTriggerModule.ScrollTrigger ?? scrollTriggerModule.default;

      gsapInstance.registerPlugin(ScrollTrigger);

      const lenis = new LenisConstructor({
        lerp: 0.1,
        smoothWheel: true,
        gestureOrientation: "vertical",
        wheelMultiplier: 1,
        touchMultiplier: 1.15,
      });

      lenisSingleton = lenis;
      lenis.on("scroll", ScrollTrigger.update);

      const raf = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsapInstance.ticker.add(raf, false, true);
      gsapInstance.ticker.lagSmoothing(0);

      const refresh = () => ScrollTrigger.refresh(true);
      requestAnimationFrame(refresh);
      window.addEventListener("load", refresh, { once: true });
      document.fonts?.ready?.then(refresh).catch(() => {});

      cleanup = () => {
        window.removeEventListener("load", refresh);
        gsapInstance.ticker.remove(raf);
        lenis.off?.("scroll", ScrollTrigger.update);
        lenis.destroy();
        lenisSingleton = null;
      };
    })().catch(() => {
      lenisSingleton = null;
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);
}
