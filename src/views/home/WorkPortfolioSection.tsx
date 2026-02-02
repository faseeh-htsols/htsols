"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadingTwo from "@/components/ui/heading-two";
import Button from "@/components/ui/Button";

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
    <section className="bg-[#050505] py-24 relative   -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>

      <div className="flex flex-col lg:gap-0 gap-9 lg:flex-row relative justify-end items-center">
        {/* LEFT SIDE (fixed to the container width calc) */}
        <div className="relative lg:absolute top-0 left-0 w-full flex items-center h-full">
          <div className="w-[calc(100%-((100vw-1600px)/2)+(50px/2)+(15px/2))] mx-auto max-w-[1600px] px-5">
            <div className="space-y-6">
              <HeadingTwo>
                OUR WORK <br /> PORTFOLIO
              </HeadingTwo>

              <p className="text-white/60 text-base leading-relaxed max-w-md">
                Since our establishment we have successfully served hundreds of
                clients. Our primary skills are in web designing and mobile
                application development.
              </p>
              <div className="flex">
                <Button href="/" variant="outline">
                  Get A Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – CAROUSEL (Swiper) */}
        <div className="relative px-2 lg:px-0 w-full overflow-hidden lg:w-[55%]">
          <Swiper
            modules={[Autoplay]}
            className="portfolio-swiper"
            loop
            // slidesPerView={2.8}
            slidesPerGroup={1}
            spaceBetween={48}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 1.5,
              },
              1624: {
                slidesPerView: 2.5,
              },
            }}
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
                    <h3 className="text-xl font-primary text-white font-semibold leading-snug">
                      {slide.title}
                    </h3>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-8">
                    {slide.description}
                  </p>

                  {/* BUTTON */}
                  <div className="flex">
                    <button className="text-white group text-[12px] relative uppercase tracking-widest hover:text-[#075B65] transition flex items-center gap-2 py-2 ps-4 pr-8 border-t border-b border-white hover:border-[#075B65]">
                      View Service
                      <span className="absolute bottom-1 right-0">
                        <svg
                          width="29"
                          height="29"
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5  fill-white group-hover:fill-[#075B65]"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.45514 21.8225C5.94598 21.3134 5.94597 20.4878 6.45514 19.9787L19.9769 6.45695C20.486 5.94779 21.3116 5.94779 21.8207 6.45695C22.3299 6.9661 22.3299 7.79166 21.8207 8.30082L8.29901 21.8225C7.78984 22.3317 6.96429 22.3317 6.45514 21.8225Z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.53123 7.37574C8.53124 6.65565 9.115 6.07188 9.83509 6.07187L20.8983 6.07185C21.6183 6.07191 22.2021 6.65568 22.2021 7.37571L22.2021 18.4389C22.2021 19.159 21.6183 19.7427 20.8983 19.7428C20.1783 19.7427 19.5945 19.159 19.5944 18.4389L19.5945 8.67951L9.83504 8.67955C9.11502 8.67949 8.53129 8.09576 8.53123 7.37574Z"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
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
