"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import HeadingTwo from "@/components/ui/heading-two";

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
      "Since our establishment we have successfully served hundreds of clients worldwide. Our primary skills are around web designing and mobile application development.",
    stats: ["UI/UX", "E-COMMERCE", "PERFORMANCE"],
    image: "/web-dev.png",
  },
  {
    label: "VERTEX DASH",
    title: "DIGITAL PRODUCTS",
    description:
      "We deliver conversion-focused product experiences that blend aesthetics with functionality.",
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
      "Since our establishment we have successfully served hundreds of clients worldwide. Our primary skills are around web designing and mobile application development.",
    stats: ["UI/UX", "E-COMMERCE", "PERFORMANCE"],
    image: "/web-dev.png",
  },
  {
    label: "VERTEX DASH",
    title: "DIGITAL PRODUCTS",
    description:
      "We deliver conversion-focused product experiences that blend aesthetics with functionality.",
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

export default function WorkPortfolioSection() {
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplayPlugin.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#050505] py-24 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[minmax(590px,420px)_1fr] gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <HeadingTwo className="">
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

          {/* RIGHT SIDE – CAROUSEL */}
          <div className="bg-[#0C0C0C]/90 rounded-[32px] p-6 border border-white/10 shadow-xl relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-12">
                {portfolioSlides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`min-w-[430px] flex-[0_0_15%] grow-0 ${
                      idx === portfolioSlides.length - 1 ? "mr-12" : ""
                    }`}
                  >
                    <article className="rounded-[26px] bg-[#111] border border-white/10 p-6 shadow-lg flex flex-col gap-6">
                      {/* IMAGE CARD */}
                      <div className="bg-black rounded-[22px] p-4 shadow">
                        <div className="relative h-[300px] w-full rounded-xl overflow-hidden border border-black">
                          <Image
                            src={slide.image}
                            alt=""
                            fill
                            className="object-contain"
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
                  </div>
                ))}
              </div>
            </div>

            {/* DOTS */}
            <div className="mt-8 flex gap-2">
              {portfolioSlides.map((_, i) => (
                <button
                  key={i}
                  className={`h-[6px] rounded-full transition-all ${
                    i === selectedIndex ? "w-8 bg-white" : "w-5 bg-white/30"
                  }`}
                  onClick={() => emblaApi?.scrollTo(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
