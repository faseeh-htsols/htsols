"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Pause, Play } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import PopUp from "@/components/ui/popup";
export type TestimonialSlide = {
  id: string;
  mediaImage: string;
  mediaAlt?: string;
  watermark?: string; // big text on image like "MACCO"
  brandLogo?: string; // small logo at top
  brandName?: string;
  personName: string;
  personRole: string;
  quote: string;
  video: string;
};

const AUTOPLAY_DELAY = 5000;

export const TESTIMONIAL_CAROUSEL_DATA: TestimonialSlide[] = [
  {
    id: "t1",
    mediaImage: "/cgi/kaybees.png",
    video: "/cgi1.mp4",
    mediaAlt: "Kaybees",
    watermark: "MACCO",
    brandLogo: "/cgi/kaybees-logo.png",
    brandName: "Kaybees",
    personName: "ABRAHAM",
    personRole: "CEO | Tech Innovators",
    quote:
      "Working with Muhammad Faseeh Ullah has helped us a lot. Their AI solutions helped us automate the online customer support, which helped us focus on the other core business responsibilities.",
  },
  {
    id: "t2",
    mediaImage: "/testimonials/kaybees-2.webp",
    mediaAlt: "Kaybees",
    watermark: "MACCO",
    brandLogo: "/testimonials/kaybees-logo.webp",
    video: "/cgi1.mp4",
    brandName: "Kaybees",
    personName: "SOPHIA",
    personRole: "Marketing Lead | Food & Beverage",
    quote:
      "They improved our workflows and delivery speed. Communication was clear, and the output matched our expectations across design and execution.",
  },
  {
    id: "t3",
    video: "/cgi1.mp4",
    mediaImage: "/testimonials/kaybees-3.webp",
    mediaAlt: "Kaybees",
    watermark: "MACCO",
    brandLogo: "/testimonials/kaybees-logo.webp",
    brandName: "Kaybees",
    personName: "DANIEL",
    personRole: "Operations Manager",
    quote:
      "The system they delivered reduced manual work and improved response times. Solid team and very reliable delivery.",
  },
];

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

function ProgressSegments({
  count,
  active,
  progress, // 0..100
  onSelect,
}: {
  count: number;
  active: number;
  progress: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === active;

        // same feel as your reference:
        // active is longer + filled, inactive are smaller bars
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cx(
              "relative h-[4px] rounded-full overflow-hidden transition-colors",
              isActive
                ? "w-16 bg-white/15"
                : "w-8 bg-white/25 hover:bg-white/45",
            )}
          >
            {isActive ? (
              <span
                className="absolute inset-y-0 left-0 bg-white"
                style={{ width: `${progress}%` }}
              />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export default function TestimonialCarousel({
  data = TESTIMONIAL_CAROUSEL_DATA,
  className,
}: {
  data?: TestimonialSlide[];
  className?: string;
}) {
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0..100
  const [open, setOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const total = useMemo(() => data.length, [data.length]);

  // ✅ Smooth progress (same approach as your reference)
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

    return () => cancelAnimationFrame(frameId);
  }, [activeIndex, isPlaying]);
  const openPopup = (src: string) => {
    setActiveSrc(src);
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
    setActiveSrc(null);
  };
  const togglePlay = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (isPlaying) {
      swiper.autoplay?.stop();
      setIsPlaying(false);
    } else {
      swiper.autoplay?.start();
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const goTo = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <section className={cx("bg-black py-12", className)}>
      <Container>
        <div className=" overflow-hidden">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
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
              setActiveIndex(swiper.realIndex);
              setProgress(0);
            }}
            className="w-full"
          >
            {data.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] min-h-[520px]">
                  {/* LEFT: MEDIA */}
                  <div className="relative bg-black">
                    <div className="relative h-[320px] lg:h-full w-full overflow-hidden">
                      <Image
                        src={slide.mediaImage}
                        alt={slide.mediaAlt || "testimonial"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />

                      {/* Watermark */}
                      {slide.watermark ? (
                        <div className="pointer-events-none absolute left-6 bottom-8">
                          <p className="text-white/25 font-semibold tracking-[0.08em] text-[64px] sm:text-[80px] lg:text-[110px] leading-none select-none">
                            {slide.watermark}
                          </p>
                        </div>
                      ) : null}

                      {/* Play overlay */}
                      <button
                        type="button"
                        aria-label="Play"
                        className={cx(
                          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                          "w-14 h-14 rounded-full bg-white/85 text-black",
                          "flex items-center justify-center",
                          "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
                          "hover:scale-[1.03] active:scale-[0.98] transition-transform",
                        )}
                        onClick={() => {
                          // open video modal here if needed
                          openPopup(slide.video);
                        }}
                      >
                        <Play className="w-6 h-6 fill-black" />
                      </button>
                    </div>
                  </div>

                  {/* RIGHT: TESTIMONIAL */}
                  <div className="bg-black px-6 sm:px-10 py-8 lg:py-10 flex flex-col">
                    {/* Top row */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {slide.brandLogo ? (
                          <div className="relative w-[140px] h-18 shrink-0 rounded-md overflow-hidden  ">
                            <Image
                              src={slide.brandLogo}
                              alt={slide.brandName || "brand"}
                              fill
                              className="object-contain "
                              sizes="40px"
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10" />
                        )}

                        {/* <p className="text-xs tracking-[0.18em] uppercase text-white/70">
                          {slide.brandName || "Brand"}
                        </p> */}
                        <div className="pl-3 border-l border-white">
                          <h3 className="uppercase font-primary">
                            {slide.personName}
                          </h3>
                          <p>{slide.personRole}</p>
                        </div>
                      </div>

                      {/* <div className="text-right">
                        <p className="text-xs tracking-[0.18em] uppercase text-white font-semibold">
                          {slide.personName}
                        </p>
                        <p className="text-xs text-white/65">
                          {slide.personRole}
                        </p>
                      </div> */}
                    </div>

                    <div className="mt-5 h-px w-full bg-white/15" />

                    {/* Quote mark */}
                    <div className="mt-7 text-[#2CA6A6] text-[60px] leading-[1] font-bold select-none">
                      <Image
                        src={"/cgi/qoute.svg"}
                        width={200}
                        height={200}
                        className="w-[90px] h-[74px]"
                        alt="image"
                      />
                    </div>

                    {/* Quote text */}
                    <p className="mt-3 text-sm sm:text-[15px] leading-7 text-white/75 max-w-[520px]">
                      {slide.quote}
                    </p>

                    {/* <div className="flex-1" /> */}

                    <div className="mt-7 h-px w-full bg-white" />

                    {/* Controls */}
                    <div className="pt-5 flex items-center gap-4">
                      <button
                        type="button"
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause" : "Play"}
                        className={cx(
                          "w-10 h-10 rounded-full",
                          "bg-white/10 border border-white/15",
                          "flex items-center justify-center",
                          "hover:bg-white/15 transition-colors",
                        )}
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-white" />
                        ) : (
                          <Play className="w-5 h-5 text-white fill-white" />
                        )}
                      </button>

                      <ProgressSegments
                        count={total}
                        active={activeIndex}
                        progress={isPlaying ? progress : 0}
                        onSelect={(i) => {
                          setProgress(0);
                          goTo(i);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
      <PopUp open={open} src={activeSrc} onClose={closePopup} />
    </section>
  );
}
