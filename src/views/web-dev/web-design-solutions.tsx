"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";

type SolutionItem = {
  title: string;
  image: string;
  alt: string;
};

const ITEMS: SolutionItem[] = [
  {
    title: "UI AND UX DESIGN, PLUS WIREFRAMES",
    image: "/design-web-dev.webp",
    alt: "UI/UX design and wireframes",
  },
  {
    title: "FULL DEVELOPMENT AND CMS SETUP",
    image: "/website-development-services.webp",
    alt: "Full development and CMS setup",
  },
  {
    title: "CONVERSION-FOCUSED LAYOUTS AND FORMS",
    image: "/services/web-one.webp",
    alt: "Conversion-focused layouts and forms",
  },
  {
    title: "TECHNICAL SEO FOUNDATIONS",
    image: "/website/seo-ready.webp",
    alt: "Technical SEO foundations",
  },
  {
    title: "ANALYTICS AND TRACKING SETUP",
    image: "/seo-bannerr.webp",
    alt: "Analytics and tracking setup",
  },
  {
    title: "PERFORMANCE OPTIMIZATION",
    image: "/web-dev-ser-home.webp",
    alt: "Performance optimization",
  },
  {
    title: "LAUNCH SUPPORT AND TRAINING",
    image: "/what-happens-after-launch.webp",
    alt: "Launch support and training",
  },
];

const WebDesignSolutions = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-tertiary py-16 sm:py-20 lg:py-24">
      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.9)_55%,rgba(0,0,0,1)_100%)]" />

      <Container>
        <div className="relative mb-9 ">
          {/* Header */}
          <div className="text-center flex flex-col gap-7">
            <HeadingTwo className="text-center">
              WEB DESIGN AND DEVELOPMENT SOLUTIONS
            </HeadingTwo>

            <p className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent font-primary font-semibold text-[22px]">
              SMART DESIGN, SOLID CODE, MEASURABLE OUTCOMES
            </p>

            <p className="">
              HTSOL Inc. builds responsive, search-optimized websites using
              modern frameworks and clean development practices. From simple
              brochure sites to complex builds, we focus on speed, usability,
              and scalability so your site stays competitive as your business
              grows.
            </p>
          </div>

          {/* Content */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left list */}
            <div className="space-y-3">
              {ITEMS.map((item, idx) => {
                const isActive = idx === active;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-pressed={isActive}
                    className={`w-full rounded-lg border px-4 cursor-pointer  py-4 text-left transition ${
                      isActive
                        ? "border-[#2C2C2C] bg-black"
                        : "border-white/10 bg-black hover:bg-white/[0.05]"
                    }`}>
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`uppercase text-lg font-primary  ${
                          isActive ? "text-white" : "text-white/60"
                        }`}>
                        {item.title}
                      </span>

                      <span
                        className={`shrink-0 ${
                          isActive ? "text-[#0B6F7A]" : "text-white/45"
                        }`}>
                        <svg
                          width="18"
                          height="32"
                          viewBox="0 0 18 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[24px] h-[18px]">
                          <path
                            d="M17.5406 14.7836C18.1531 15.4431 18.1531 16.5422 17.5406 17.2017L4.33837 31.4907C3.65784 32.1502 2.63705 32.1502 2.02457 31.4907L0.459356 29.8054C-0.15312 29.1459 -0.15312 28.0467 0.459356 27.3139L10.9395 16.0293L0.459356 4.67138C-0.15312 3.93861 -0.15312 2.83946 0.459356 2.17997L2.02457 0.494598C2.63705 -0.164894 3.65784 -0.164894 4.33837 0.494598L17.5406 14.7836Z"
                            fill={isActive ? "#075B65" : "white"}
                            fill-opacity={isActive ? "1" : "0.5"}
                          />
                        </svg>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right image */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] min-h-[360px] sm:min-h-[420px] lg:min-h-[520px] h-full">
              <div className="absolute inset-0">
                <Image
                  key={ITEMS[active].image} // re-mount for instant swap
                  src={ITEMS[active].image}
                  alt={ITEMS[active].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* subtle dark overlay like the mock */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* optional label (remove if you want only image) */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex rounded-full border border-white/15 bg-black/50 px-4 py-2 backdrop-blur">
                  <span className="text-white/80 text-[11px] sm:text-xs uppercase tracking-wide font-semibold">
                    {ITEMS[active].title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WebDesignSolutions;
