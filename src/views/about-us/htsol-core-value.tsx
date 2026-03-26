"use client";

import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const AUTOPLAY_DELAY = 5000;

const VALUES = [
  {
    letter: "H",
    title: "HONESTY",
    desc: "We communicate clearly, set realistic expectations, and lead with integrity.",
  },
  {
    letter: "T",
    title: "TEAMWORK",
    desc: "We collaborate across strategy, design, development, and marketing to deliver better outcomes.",
  },
  {
    letter: "S",
    title: "SERVICE",
    desc: "We stay helpful, responsive, and proactive, because your goals come first.",
  },
  {
    letter: "O",
    title: "OWNERSHIP",
    desc: "We take responsibility, solve problems quickly, and treat your business like it matters, because it does.",
  },
  {
    letter: "L",
    title: "LEARNING",
    desc: "Digital changes fast. We improve continuously to keep our clients ahead of the curve.",
  },
];

const CoreValueBadge = ({ letter }: { letter: string }) => (
  <div className="relative">
    <div className="absolute inset-0 rounded-full bg-white/5 blur-[10px]" />
    <div className="relative h-[123px] w-[123px] rounded-full bg-tertiary p-4">
      <div className="h-full w-full rounded-full p-[12px] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-tertiary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
          <span className="text-4xl font-primary font-semibold text-white">
            {letter}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const HtsolCoreValue = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (!isPlaying) return;

    let frameId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / AUTOPLAY_DELAY) * 100, 100);
      setProgress(pct);

      if (pct < 100 && isPlaying) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [selectedIndex, isPlaying]);

  const handleTogglePlay = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (isPlaying) {
      swiper.autoplay.stop();
      setIsPlaying(false);
    } else {
      swiper.autoplay.start();
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const handleDotClick = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <section className="relative overflow-hidden bg-black py-20">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <HeadingTwo className="uppercase tracking-wide text-white">
            <span className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">
              HTSOL
            </span>{" "}
            CORE VALUES
          </HeadingTwo>
          <p className="mx-auto mt-2 max-w-xl text-xs text-white/55">
            Over the years, we&apos;ve stayed committed to the principles that
            guide our work and our culture.
          </p>
          <div className="mx-auto mt-8 h-px w-full max-w-5xl bg-white" />
        </div>

        {/* Values */}
        <div className="relative mt-12">
          {/* dashed connector line (desktop only) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[180px] hidden border-t border-dashed border-white lg:block" />

          {/* ── MOBILE: swiper + custom pagination ──────────────────────── */}
          <div className="md:hidden">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={16}
              loop
              autoplay={{
                delay: AUTOPLAY_DELAY,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setSelectedIndex(swiper.realIndex);
                setProgress(0); // restart progress for new slide
              }}>
              {VALUES.map((v) => (
                <SwiperSlide key={v.title}>
                  <div className="flex flex-col items-center text-center py-2">
                    <CoreValueBadge letter={v.letter} />
                    <div className="mt-4 h-0 w-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-white" />
                    <div className="relative z-10 mt-3 flex h-8 items-center justify-center">
                      <span className="h-3.5 w-3.5 rounded-full bg-[#0B6B76] ring-8 ring-tertiary shadow-[0_0_0_1px_rgba(255,255,255,0.10)]" />
                    </div>
                    <h3 className="mt-3 font-primary text-xl text-white">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-white">{v.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom pagination */}
            <div className="mt-6 flex items-center gap-4">
              {/* Play / Pause */}
              <button
                type="button"
                onClick={handleTogglePlay}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition">
                {isPlaying ? (
                  // pause icon
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="3"
                      height="10"
                      fill="currentColor"
                    />
                    <rect
                      x="9"
                      y="2"
                      width="3"
                      height="10"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  // play icon
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 2.5V11.5L11 7L3 2.5Z" fill="currentColor" />
                  </svg>
                )}
              </button>

              {/* Progress dots */}
              <div className="flex items-center gap-2">
                {VALUES.map((_, i) => {
                  const isActive = i === selectedIndex;
                  return isActive ? (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleDotClick(i)}
                      className="relative h-[4px] w-16 rounded-full bg-white/15 overflow-hidden">
                      <span
                        className="absolute inset-y-0 left-0 bg-white"
                        style={{ width: `${progress}%` }}
                      />
                    </button>
                  ) : (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleDotClick(i)}
                      className="h-[4px] w-8 rounded-full bg-white/25 hover:bg-white/50 transition-colors"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── DESKTOP: original 5-column grid (UNTOUCHED) ─────────────── */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 lg:grid-cols-5 lg:gap-10">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="flex flex-col items-center text-center">
                <CoreValueBadge letter={v.letter} />
                <div className="mt-4 h-0 w-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-white" />
                <div className="relative z-10 mt-3 flex h-8 items-center justify-center">
                  <span className="h-3.5 w-3.5 rounded-full bg-[#0B6B76] ring-8 ring-tertiary shadow-[0_0_0_1px_rgba(255,255,255,0.10)]" />
                </div>
                <h3 className="mt-3 font-primary text-xl text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-white">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HtsolCoreValue;
