"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";

type Service = { title: string; desc: string };

const SERVICES: Service[] = [
  {
    title: "Service Name Here",
    desc: "Our Hardware Solution service provides top-notch hardware tailored to your business needs.",
  },
  {
    title: "Service Name Here",
    desc: "Our Software Solution service offers custom, high-quality software to meet your business needs.",
  },
  {
    title: "Service Name Here",
    desc: "Our Innovative Solutions service offers creative and cutting-edge strategies to solve complex business challenges.",
  },
  {
    title: "Service Name Here",
    desc: "Another service card to show loop/drag behaviour with consistent visuals.",
  },
  {
    title: "Service Name Here",
    desc: "Another service card to show loop/drag behaviour with consistent visuals.",
  },
];

const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className={dir === "left" ? "rotate-180" : ""}
    >
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesCard3D() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  // If you still want to hide/disable arrows: with loop=true they are always possible.
  // Keeping state removed avoids React "setState in effect" warnings.
  const [, force] = useState(0); // optional: if you ever want to re-render on select

  const raf = useRef<number | null>(null);

  const apply3D = useCallback(() => {
    if (!emblaApi) return;

    if (raf.current) cancelAnimationFrame(raf.current);

    raf.current = requestAnimationFrame(() => {
      const engine = emblaApi.internalEngine();
      const slides = emblaApi.slideNodes(); // HTMLElements
      const snaps = emblaApi.scrollSnapList(); // numbers
      const progress = emblaApi.scrollProgress(); // 0..1
      const loopPoints = engine.options.loop
        ? engine.slideLooper.loopPoints
        : [];

      // ========= TUNE (already close to your reference) =========
      const X = 260; // horizontal spread
      const Z_STEP = 220; // depth step (higher = more 3D)
      const ROT = 72; // rotateY per step (higher = more "door flip")
      const SCALE_STEP = 0.06; // subtle scale
      const FADE = 0.22; // opacity falloff
      const BLUR = 1.0; // subtle blur
      // ==========================================================

      slides.forEach((slideEl, i) => {
        const card = slideEl.querySelector<HTMLElement>(".svcCard3d");
        if (!card) return;

        // diff to target snap, corrected for loop mode
        let diff = snaps[i] - progress;

        if (engine.options.loop) {
          loopPoints.forEach((lp) => {
            if (lp.index === i && lp.target() !== 0) {
              const sign = Math.sign(lp.target());
              if (sign === -1) diff = snaps[i] - (1 + progress);
              if (sign === 1) diff = snaps[i] + (1 - progress);
            }
          });
        }

        // convert to slide distance: ~ -1 prev, 0 active, +1 next
        const p = diff * snaps.length;

        // allow far cards to rotate past 90deg so BACK side appears
        const pc = clamp(p, -3.2, 3.2);
        const abs = Math.abs(pc);

        // hinge on inner edge
        card.style.transformOrigin = pc < 0 ? "100% 50%" : "0% 50%";

        const tx = pc * X;
        const tz = -abs * Z_STEP;

        // allow strong rotation (past 90)
        const ry = clamp(pc * -ROT, -160, 160);

        const sc = 1 - abs * SCALE_STEP;

        // keep far cards visible (not disappearing)
        const opacity = clamp(1 - abs * FADE, 0.3, 1);
        const blur = clamp(abs * BLUR, 0, 2);

        card.style.transform = `translate3d(${tx}px,0,${tz}px) rotateY(${ry}deg) scale(${sc})`;
        card.style.opacity = `${opacity}`;
        card.style.filter = `blur(${blur}px)`;

        // stacking so active is always above
        (slideEl as HTMLElement).style.zIndex =
          `${1000 - Math.round(abs * 120)}`;
      });
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onScroll = () => apply3D();
    const onSelect = () => {
      // optional if you want to re-render any UI tied to selected index
      force((v) => v + 1);
    };

    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("select", onSelect);

    const id = requestAnimationFrame(() => apply3D());

    return () => {
      cancelAnimationFrame(id);
      if (raf.current) cancelAnimationFrame(raf.current);
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, apply3D]);

  return (
    <section className="svcWrap">
      {/* Background like design: vignette + floor grid */}
      <div className="svcBg">
        <div className="svcVignette" />
        <div className="svcFade" />
        <div className="svcFloorGrid" />
      </div>

      <Container>
        <HeadingTwo className="svcTitle">
          COMPREHENSIVE SERVICE
          <br />
          OFFERINGS
        </HeadingTwo>

        <div className="svcStage">
          {/* circular arrows */}
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="svcNav svcNavLeft"
            aria-label="Previous"
          >
            <ArrowIcon dir="left" />
          </button>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="svcNav svcNavRight"
            aria-label="Next"
          >
            <ArrowIcon dir="right" />
          </button>

          {/* Embla */}
          <div className="emblaStage" ref={emblaRef}>
            <div className="emblaRow">
              {SERVICES.map((s, idx) => (
                <div className="emblaSlide" key={idx}>
                  <div className="svcCard3d">
                    {/* FRONT */}
                    <div className="svcFace svcFront">
                      <h3 className="svcH3">{s.title}</h3>

                      <p className="svcP">{s.desc}</p>

                      <button className="svcBtn" type="button">
                        Learn more <span className="svcBtnLine" />
                      </button>

                      <div className="sphereMark" />
                    </div>

                    {/* BACK (real back side, not mirrored) */}
                    <div className="svcFace svcBack">
                      <div className="svcBackInner">
                        <div className="svcBackTitle">SERVICE NAME HERE</div>
                        <div className="svcBackText">
                          Another service card to show loop/drag behaviour with
                          consistent visuals.
                        </div>

                        <div className="svcBackPill">
                          <span>Learn more</span>
                          <span className="svcBtnLine" />
                        </div>
                      </div>

                      <div className="sphereMark" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* bottom pill indicator like Figma */}
          <div className="svcIndicator" />
        </div>
      </Container>
    </section>
  );
}
