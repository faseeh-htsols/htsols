"use client";

import Image from "next/image";
import React, { useRef } from "react";
import HeadingTwo from "@/components/ui/heading-two";
import Button from "@/components/ui/Button";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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

export default function WorkPortfolioSectionTwo() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Mobile pin trigger (only cards area)
  const cardsPinRef = useRef<HTMLDivElement | null>(null);

  // Shared viewport/track
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cardsPin = cardsPinRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!section || !viewport || !track || !cardsPin) return;

      const getScrollAmount = () => {
        const amount = track.scrollWidth - viewport.clientWidth;
        return amount > 0 ? amount : 0;
      };

      const buildHorizontal = (triggerEl: Element) => {
        gsap.set(track, { x: 0 });

        const tween = gsap.to(track, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top top",
            // never allow 0 length, otherwise pin can be flaky
            end: () => `+=${Math.max(1, getScrollAmount())}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // helps on phones / some layouts
            pinType: ScrollTrigger.isTouch ? "transform" : "fixed",
            // markers: true, // <- enable temporarily to debug
          },
        });

        const ro = new ResizeObserver(() => ScrollTrigger.refresh());
        ro.observe(viewport);
        ro.observe(track);

        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad);

        requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => {
          window.removeEventListener("load", onLoad);
          ro.disconnect();
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      };

      const mm = gsap.matchMedia();

      // LG+: pin the whole section (left stays visible)
      mm.add("(min-width: 1024px)", () => buildHorizontal(section));

      // Mobile/Tablet: pin only the cards area
      mm.add("(max-width: 1023px)", () => buildHorizontal(cardsPin));

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#050505] lg:min-h-screen py-24 relative -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%]
      [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)]
      md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)]
      lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
    >
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
        bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] animate-pulse"
      />

      <div className="flex h-full flex-col lg:flex-row relative justify-end items-center gap-10 lg:gap-0 lg:min-h-[650px]">
        {/* LEFT SIDE (same behavior: normal on mobile, absolute on lg) */}
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

        {/* RIGHT SIDE (pinned on mobile, section pinned on lg) */}
        <div
          ref={cardsPinRef}
          className="relative w-full lg:w-[55%] px-2 lg:px-0"
        >
          <div ref={viewportRef} className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex lg:h-auto h-screen gap-8 md:gap-10 lg:gap-12 pr-10 will-change-transform"
            >
              {portfolioSlides.map((slide, idx) => (
                <article
                  key={idx}
                  className="flex-shrink-0 rounded-[26px] bg-[#111] border border-white/10 p-6 shadow-lg flex flex-col gap-6
                  w-[85vw] sm:w-[70vw] md:w-[52vw] lg:w-[420px] 2xl:w-[480px]"
                >
                  <div className="bg-black rounded-[22px] p-4 shadow">
                    <div className="relative h-[280px] md:h-[300px] rounded-xl overflow-hidden border border-black">
                      <Image
                        src={slide.image}
                        alt={slide.label}
                        className="w-full h-full object-contain"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-primary text-white font-semibold leading-snug">
                      {slide.title}
                    </h3>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-8">
                    {slide.description}
                  </p>

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
                          className="w-5 h-5 fill-white group-hover:fill-[#075B65]"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.45514 21.8225C5.94598 21.3134 5.94597 20.4878 6.45514 19.9787L19.9769 6.45695C20.486 5.94779 21.3116 5.94779 21.8207 6.45695C22.3299 6.9661 22.3299 7.79166 21.8207 8.30082L8.29901 21.8225C7.78984 22.3317 6.96429 22.3317 6.45514 21.8225Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.53123 7.37574C8.53124 6.65565 9.115 6.07188 9.83509 6.07187L20.8983 6.07185C21.6183 6.07191 22.2021 6.65568 22.2021 7.37571L22.2021 18.4389C22.2021 19.159 21.6183 19.7427 20.8983 19.7428C20.1783 19.7427 19.5945 19.159 19.5944 18.4389L19.5945 8.67951L9.83504 8.67955C9.11502 8.67949 8.53129 8.09576 8.53123 7.37574Z"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
