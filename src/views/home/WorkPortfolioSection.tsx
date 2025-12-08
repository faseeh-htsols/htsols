"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadingTwo from "@/components/ui/heading-two";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

interface PortfolioSlide {
  label: string;
  title: string;
  description: string;
  stats: string[];
  image: string;
}

const portfolioSlides: PortfolioSlide[] = [
  {
    label: "AERO SCULPT",
    title: "WEB DEVELOPMENT",
    description:
      "High-performing teams that plug seamlessly into your workflows so you can scale faster.High-performing teams that plug",
    stats: ["UI/UX", "E-COMMERCE", "PERFORMANCE"],
    image: "/web-dev.png",
  },
  {
    label: "VERTEX DASH",
    title: "DIGITAL PRODUCTS",
    description:
      "High-performing teams that plug seamlessly into your workflows so you can scale faster.High-performing teams that plug",
    stats: ["PRODUCT DESIGN", "SAAS", "MOBILE"],
    image: "/web-dev.png",
  },
  {
    label: "NOVA GRID",
    title: "STAFF AUGMENTATION",
    description:
      "High-performing teams that plug seamlessly into your workflows so you can scale faster.High-performing teams that plug",
    stats: ["DEDICATED TEAMS", "STRATEGY", "DELIVERY"],
    image: "/web-dev.png",
  },
  {
    label: "AERO SCULPT",
    title: "WEB DEVELOPMENT",
    description:
      "High-performing teams that plug seamlessly into your workflows so you can scale faster.High-performing teams that plug",
    stats: ["UI/UX", "E-COMMERCE", "PERFORMANCE"],
    image: "/web-dev.png",
  },
  {
    label: "VERTEX DASH",
    title: "DIGITAL PRODUCTS",
    description:
      "High-performing teams that plug seamlessly into your workflows so you can scale faster.High-performing teams that plug",
    stats: ["PRODUCT DESIGN", "SAAS", "MOBILE"],
    image: "/web-dev.png",
  },
  {
    label: "NOVA GRID",
    title: "STAFF AUGMENTATION",
    description:
      "High-performing teams that plug seamlessly into your workflows so you can scale faster.High-performing teams that plug",
    stats: ["DEDICATED TEAMS", "STRATEGY", "DELIVERY"],
    image: "/web-dev.png",
  },
];

const AUTOPLAY_DELAY = 5000;

export default function WorkPortfolioSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0–100
  const swiperRef = useRef<SwiperType | null>(null);

  // progress animation tied to active slide + play/pause
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
    <section className="bg-[#050505] py-24 relative overflow-hidden">
      <div className="flex relative justify-end items-center">
        {/* LEFT SIDE (fixed to the container width calc) */}
        <div className="absolute top-0 left-0 w-full flex items-center h-full">
          <div className="w-[calc(100%-((100vw-1600px)/2)+(50px/2)+(15px/2))] mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="space-y-6">
              <HeadingTwo>
                OUR WORK <br /> PORTFOLIO
              </HeadingTwo>

              <p className="text-white/60 text-base leading-relaxed max-w-md">
                Since our establishment we have successfully served hundreds of
                clients. Our primary skills are in web designing and mobile
                application development.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition"
              >
                GET A FREE CONSULTATION →
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – CAROUSEL (Swiper) */}
        <div className="relative w-[55%]">
          <Swiper
            modules={[Autoplay]}
            className="portfolio-swiper"
            loop
            slidesPerView={2.8}
            slidesPerGroup={1}
            spaceBetween={48}
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
            }}
          >
            {portfolioSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <article className="rounded-[26px] bg-[#111] border border-white/10 p-6 shadow-lg flex flex-col gap-6">
                  {/* IMAGE CARD */}
                  <div className="bg-black rounded-[22px] p-4 shadow">
                    <div className="relative h-[300px] rounded-xl overflow-hidden border border-black">
                      <Image
                        src={slide.image}
                        alt={slide.label}
                        className="w-full h-full object-contain"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>

                  {/* TEXT AREA */}
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-white/50 mb-1">
                      Case Study
                    </p>
                    <h3 className="text-xl text-white font-semibold leading-snug">
                      {slide.title}
                    </h3>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {slide.stats.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] uppercase tracking-widest text-white/60 border border-white/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <button className="text-white text-[12px] uppercase tracking-widest hover:text-primary transition flex items-center gap-2 pt-2">
                    View Service →
                  </button>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM CONTROLS: pause + progress + dots */}
          <div className="mt-8 flex items-center gap-4">
            {/* Pause / Play button */}
            <button
              type="button"
              onClick={handleTogglePlay}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition"
            >
              {isPlaying ? (
                // pause icon
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="2" y="2" width="3" height="10" fill="currentColor" />
                  <rect x="9" y="2" width="3" height="10" fill="currentColor" />
                </svg>
              ) : (
                // play icon
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 2.5V11.5L11 7L3 2.5Z" fill="currentColor" />
                </svg>
              )}
            </button>

            {/* Progress + dots */}
            <div className="flex items-center gap-2">
              {portfolioSlides.map((_, i) => {
                const isActive = i === selectedIndex;

                if (isActive) {
                  // active segment with progress fill
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleDotClick(i)}
                      className="relative h-[4px] w-16 rounded-full bg-white/15 overflow-hidden"
                    >
                      <span
                        className="absolute inset-y-0 left-0 bg-white"
                        style={{ width: `${progress}%` }}
                      />
                    </button>
                  );
                }

                // inactive segments
                return (
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
      </div>
    </section>
  );
}
