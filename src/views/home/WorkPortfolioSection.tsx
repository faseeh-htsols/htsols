"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

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
      "Since our establishment we have successfully served hundreds of clients world wide. Our primary skills are around web designing and mobile app development.",
    stats: ["UI/UX", "E-COMMERCE", "PERFORMANCE"],
    image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?w=600&h=800&fit=crop",
  },
  {
    label: "VERTEX DASH",
    title: "DIGITAL PRODUCTS",
    description:
      "We deliver conversion-focused product experiences that blend aesthetics with functionality, ensuring every interaction feels purposeful and premium.",
    stats: ["PRODUCT DESIGN", "SAAS", "MOBILE"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=800&fit=crop",
  },
  {
    label: "NOVA GRID",
    title: "STAFF AUGMENTATION",
    description:
      "Embedded, high-performing teams that plug seamlessly into your workflows so you can scale faster without compromising on quality or speed.",
    stats: ["DEDICATED TEAMS", "STRATEGY", "DELIVERY"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop",
  },
  {
    label: "LUMEN EDGE",
    title: "DIGITAL MARKETING",
    description:
      "Full funnel strategies that build awareness, drive demand, and nurture loyal communities around your products and services.",
    stats: ["SEO", "SOCIAL", "AUTOMATION"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=800&fit=crop",
  },
];

export const WorkPortfolioSection: React.FC = () => {
  const autoplayPlugin = useRef(
    Autoplay(
      {
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      },
      (emblaRoot) => emblaRoot?.parentElement
    )
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [autoplayPlugin.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      autoplayPlugin.current?.reset();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    if (isPlaying) {
      autoplayPlugin.current?.stop();
      setIsPlaying(false);
    } else {
      autoplayPlugin.current?.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const progressPercentage = ((selectedIndex + 1) / portfolioSlides.length) * 100;

  return (
    <section id="portfolio" className="relative bg-[#050505] py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent translate-y-1" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent -translate-y-1" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,420px)_1fr] gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-primary/70">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              OUR WORK <br />
              PORTFOLIO
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              Since our establishment we have successfully served hundreds of clients world wide. Our primary skills are
              around web designing and mobile application development. We have a team of 40+ dedicated professionals for
              all kinds of tasks.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-black transition-colors duration-300"
            >
              GET A FREE CONSULTATION
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Right Column - Carousel */}
          <div className="bg-[#080808]/90 rounded-[32px] p-6 lg:p-8 border border-white/10 relative shadow-[0_0_60px_rgba(0,0,0,0.7)]">
            <div className="portfolio-embla" ref={emblaRef}>
              <div className="portfolio-embla__container">
                {portfolioSlides.map((slide, index) => (
                  <div className="portfolio-embla__slide" key={`${slide.label}-${index}`}>
                    <article className="h-full flex flex-col gap-6 rounded-[28px] border border-white/5 bg-gradient-to-b from-[#151515] via-[#0d0d0d] to-[#050505] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                      <div className="relative bg-white rounded-[26px] p-4">
                        <div className="text-[10px] font-semibold tracking-[0.4em] text-black/50 uppercase mb-3">
                          {slide.label}
                        </div>
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-black/5">
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover transition-transform duration-700"
                            sizes="(min-width: 1024px) 460px, 80vw"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-1">Case Study</p>
                          <h3 className="text-white text-2xl font-semibold tracking-tight">{slide.title}</h3>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">{slide.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {slide.stats.map((stat) => (
                            <span
                              key={stat}
                              className="px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-white/50 border border-white/10 rounded-full"
                            >
                              {stat}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <button className="inline-flex items-center gap-2 text-white text-sm tracking-[0.4em] uppercase px-4 py-2 rounded-full border border-white/15 hover:bg-primary hover:border-primary hover:text-black transition-all duration-300">
                          View Service
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3 8H13M13 8L9 4M13 8L9 12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleAutoplay}
                  className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:text-primary hover:border-primary transition-colors duration-300"
                  aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
                >
                  {isPlaying ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="3" width="3" height="10" rx="1.5" fill="currentColor" />
                      <rect x="9" y="3" width="3" height="10" rx="1.5" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.5 3.5V12.5C4.5 13.0523 5.14088 13.3633 5.58579 13.0858L12.0858 9.08579C12.549 8.79727 12.549 8.20273 12.0858 7.91421L5.58579 3.91421C5.14088 3.63672 4.5 3.94771 4.5 4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </button>

                <div className="flex-1 h-px bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>

                <span className="text-[11px] uppercase tracking-[0.4em] text-white/40">
                  {String(selectedIndex + 1).padStart(2, "0")} / {String(portfolioSlides.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {portfolioSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === selectedIndex ? "w-10 bg-primary" : "w-6 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPortfolioSection;

