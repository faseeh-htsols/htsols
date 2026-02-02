"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// module-level singleton prevents double init across re-mounts
let lenisSingleton: Lenis | null = null;

export default function useLenisScroll() {
  useEffect(() => {
    // ✅ prevents multiple Lenis instances (big source of “jerk”)
    if (lenisSingleton) return;

    const lenis = new Lenis({
      // your “too late” feeling is mostly low lerp — raise it
      lerp: 0.1, // try 0.22–0.35
      smoothWheel: true,
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 1.15,
    });

    lenisSingleton = lenis;

    // ✅ official pattern: update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // ✅ run Lenis in GSAP ticker, and prioritize it to reduce reflow/jitter
    const raf = (time: number) => {
      lenis.raf(time * 1000); // gsap time is seconds → lenis wants ms
    };
    gsap.ticker.add(raf, false, true); // <-- prioritize=true (key)
    gsap.ticker.lagSmoothing(0);

    // refresh once layout is stable
    const refresh = () => ScrollTrigger.refresh(true);
    requestAnimationFrame(refresh);
    window.addEventListener("load", refresh, { once: true });

    // optional: refresh after fonts

    document.fonts?.ready?.then(refresh).catch(() => {});

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(raf);

      lenis.off?.("scroll", ScrollTrigger.update);
      lenis.destroy();
      lenisSingleton = null;
    };
  }, []);
}
