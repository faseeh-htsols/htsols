"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import Button from "../../components/ui/Button";
import CircularText from "../../components/ui/CircularText";
import Container from "@/components/ui/container";

interface Slide {
  headline: string[];
  outlineWord: string;
  subHeading?: string;
  description: string;
  btn: string;
  href: string;
}

const slides: Slide[] = [
  {
    headline: ["Website and Custom Software Development"],
    outlineWord: "Canada",
    subHeading: "A Website Designed To Guide Your Visitors Clearly",
    description:
      "At HTSOL Inc., we build websites and web applications based on how your customers use them and what your business needs to achieve. Whether you need a custom website, SaaS platform, headless CMS, API integrations, or full stack development, our team focuses on clarity, performance, and long term scalability.<br/><br/>You receive a fast and reliable platform built for search visibility, usability, and steady growth from the start.",
    btn: "Schedule a consultation",
    href: "/",
  },
  {
    headline: ["Website Redesign and Branding "],
    outlineWord: "Services",
    subHeading:
      "Design That Communicates Clearly and Feels Consistent &Trustworthy",
    description:
      "Good design should make things easier to understand, not just look appealing. HTSOL Inc. creates thoughtful UI/UX and branding that helps people recognise your business and feel confident using your website and materials.<br/><br/>From brand identity and redesigns to ongoing creative support, we ensure every visual touchpoint works together and represents your business accurately.",
    btn: "Learn more",
    href: "/",
  },
  {
    headline: ["Your Business Needs To Be Understood, Not "],
    outlineWord: "Only Indexed",
    description:
      "Search engines and AI systems now evaluate meaning, credibility, and usefulness before showing results. HTSOL Inc. prepares your website for modern discovery, including traditional rankings and AI generated answers.<br/><br/>Through technical SEO, structured content, and authority development, we help your business appear where customers are already searching and asking questions.<br/><br/>Our focus is to help your content be recognised as relevant and dependable over time.",
    btn: "Improve your search visibility",
    href: "/",
  },
  {
    headline: ["CGI THAT BREAKS THE INTERNET NOT YOUR "],
    outlineWord: "BUDGET",
    subHeading: "Your Business Now Needs To Be Understood, Not Just Indexed",
    description:
      "We create scroll-stopping CGI and 3D animations that consistently hit 10+ million organic views. From photorealistic product renders to mind-bending mixed reality videos—we turn brands into viral sensations. Stop blending in. Start trendings",
    btn: "Go Viral",
    href: "/",
  },
];

export const HeroSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleDotClick = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <section className="relative lg:min-h-screen overflow-hidden bg-[url(/home-header.jpg)]">
      {/* Background with 3D terrain effect */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a1a1a]" />

        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 120% 80% at 70% 80%, rgba(0,161,165,0.15) 0%, transparent 50%),
              linear-gradient(180deg, transparent 40%, rgba(0,161,165,0.08) 100%)
            `,
          }}
        />

        <div
          className="absolute bottom-0 left-0 right-0 h-[60%] opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,161,165,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,161,165,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 40px",
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "bottom",
          }}
        />
      </div> */}

      {/* 3D Polyhedron Shape */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 pointer-events-none">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-80"
        >
          <g stroke="rgba(0,161,165,0.6)" strokeWidth="0.5">
            <polygon
              points="200,50 320,120 320,280 200,350 80,280 80,120"
              fill="rgba(0,161,165,0.05)"
            />
            <line x1="200" y1="50" x2="200" y2="200" />
            <line x1="320" y1="120" x2="200" y2="200" />
            <line x1="320" y1="280" x2="200" y2="200" />
            <line x1="200" y1="350" x2="200" y2="200" />
            <line x1="80" y1="280" x2="200" y2="200" />
            <line x1="80" y1="120" x2="200" y2="200" />
            <line x1="200" y1="50" x2="320" y2="120" />
            <line x1="320" y1="120" x2="320" y2="280" />
            <line x1="320" y1="280" x2="200" y2="350" />
            <line x1="200" y1="350" x2="80" y2="280" />
            <line x1="80" y1="280" x2="80" y2="120" />
            <line x1="80" y1="120" x2="200" y2="50" />
            <line x1="200" y1="50" x2="320" y2="280" />
            <line x1="200" y1="50" x2="80" y2="280" />
            <line x1="320" y1="120" x2="80" y2="280" />
            <line x1="320" y1="120" x2="200" y2="350" />
            <line x1="80" y1="120" x2="320" y2="280" />
            <line x1="80" y1="120" x2="200" y2="350" />
          </g>
          <g fill="rgba(0,161,165,0.8)">
            <circle cx="200" cy="50" r="3" />
            <circle cx="320" cy="120" r="3" />
            <circle cx="320" cy="280" r="3" />
            <circle cx="200" cy="350" r="3" />
            <circle cx="80" cy="280" r="3" />
            <circle cx="80" cy="120" r="3" />
            <circle cx="200" cy="200" r="4" />
          </g>
        </svg>
      </div> */}

      {/* Carousel (Swiper) */}
      <Swiper
        modules={[Autoplay]}
        className="relative z-10 lg:min-h-screen"
        loop
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          // realIndex = index in slides[] when loop is enabled
          setSelectedIndex(swiper.realIndex);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className=" relative lg:min-h-screen pt-36 lg:pt-0 flex! items-center"
          >
            {/* <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 pb-20"> */}
            <Container>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  {index === 0 ? (
                    <h1 className="text-4xl uppercase md:text-5xl font-primary lg:text-6xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
                      {slide.headline.map((line, i) => (
                        <span key={i} className="block text-white">
                          {line}
                        </span>
                      ))}

                      <span className="relative ">
                        <span
                          className="absolute bottom-3 left-0 w-full h-5 bg-primary "
                          style={{
                            background:
                              "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)",
                          }}
                        ></span>
                        <span className="relative text-white">
                          {slide.outlineWord}
                        </span>
                      </span>
                    </h1>
                  ) : (
                    <h2 className="text-4xl uppercase md:text-5xl font-primary lg:text-6xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
                      {slide.headline.map((line, i) => (
                        <span key={i} className="block text-white">
                          {line}
                        </span>
                      ))}

                      <span className="relative ">
                        <span
                          className="absolute bottom-3 left-0 w-full h-5 bg-primary "
                          style={{
                            background:
                              "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)",
                          }}
                        ></span>
                        <span className="relative text-white">
                          {slide.outlineWord}
                        </span>
                      </span>
                    </h2>
                  )}
                  <div className="flex">
                    <Button variant="primary" href="#contact">
                      Start Your Project
                    </Button>
                  </div>
                </div>

                {/* Right Content - Description */}
                <div className="lg:pl-12">
                  {slide.subHeading && (
                    <p className="uppercase font-primary text-xl  lg:max-w-md  ml-auto mb-3">
                      {slide.subHeading}
                    </p>
                  )}
                  <p
                    className="text-white/70 text-lg md:text-lg leading-relaxed lg:max-w-md  ml-auto"
                    dangerouslySetInnerHTML={{ __html: slide.description }}
                  ></p>
                </div>
              </div>
              {/* <div className="lg:absolute lg:bottom-[10%] flex flex-wrap gap-4 pt-4">
                <Button variant="primary" href="#contact">
                  Start Your Project
                </Button>
                <Button variant="outline" href="#services">
                  View All Services
                </Button>
              </div> */}
            </Container>
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Carousel Dots (unchanged visually, now control Swiper) */}
      <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-7 py-5 lg:py-0  flex-row lg:flex-col justify-center z-20 flex gap-2">
        {slides.map((_, index) => {
          const isActive = index === selectedIndex;
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`lg:w-2 w-8 h-2 lg:h-8 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-14 lg:w-2 lg:h-14" : ""
              }`}
              style={{
                background: isActive
                  ? "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)"
                  : "#ffffff",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>

      {/* Circular Text Badge */}
      <div className="absolute bottom-0 right-1 z-20 hidden lg:block">
        <div className="relative w-32 h-32 md:w-40 md:h-40  rounded-full flex items-center justify-center">
          <CircularText />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
