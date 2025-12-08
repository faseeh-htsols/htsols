"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import Button from "../../components/ui/Button";
import CircularText from "../../components/ui/CircularText";

interface Slide {
  headline: string[];
  outlineWord: string;
  description: string;
}

const slides: Slide[] = [
  {
    headline: ["DESIGNING", "CLARITY", "FOR MODERN"],
    outlineWord: "BRANDS",
    description:
      "HT-Solutions provides you Website Designing, Web Development, SEO Services, Graphic Designing, Mobile Application Development Video Production, Voice Over, Digital Marketing and Network Solutions in Lahore, Pakistan.",
  },
  {
    headline: ["CREATING", "DIGITAL", "SOLUTIONS FOR"],
    outlineWord: "GROWTH",
    description:
      "Transform your business with cutting-edge digital solutions. We specialize in creating powerful web applications, mobile apps, and marketing strategies that drive results.",
  },
  {
    headline: ["BUILDING", "FUTURE", "READY"],
    outlineWord: "BRANDS",
    description:
      "Partner with us to build a strong digital presence. From branding to development, we deliver comprehensive solutions tailored to your unique business needs.",
  },
];

export const HeroSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleDotClick = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Background with 3D terrain effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a1a1a]" />
        {/* Terrain overlay effect */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 120% 80% at 70% 80%, rgba(0,161,165,0.15) 0%, transparent 50%),
              linear-gradient(180deg, transparent 40%, rgba(0,161,165,0.08) 100%)
            `,
          }}
        />
        {/* Grid/mesh effect for terrain */}
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
      </div>

      {/* 3D Polyhedron Shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 pointer-events-none">
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
      </div>

      {/* Carousel (Swiper) */}
      <Swiper
        modules={[Autoplay]}
        className="relative z-10 min-h-screen"
        loop
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
          <SwiperSlide key={index} className="min-h-screen flex items-center">
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 pb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                    {slide.headline.map((line, i) => (
                      <span key={i} className="block text-white">
                        {line}
                      </span>
                    ))}
                    <span
                      className="block text-transparent bg-clip-text"
                      style={{
                        WebkitTextStroke: "1px var(--color-primary)",
                      }}
                    >
                      {slide.outlineWord}
                    </span>
                  </h1>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button variant="primary" href="#contact">
                      Start Your Project
                    </Button>
                    <Button variant="outline" href="#services">
                      View All Services
                    </Button>
                  </div>
                </div>

                {/* Right Content - Description */}
                <div className="lg:pl-12">
                  <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md ml-auto">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Carousel Dots (unchanged visually, now control Swiper) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-primary w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Circular Text Badge */}
      <div className="absolute bottom-12 right-12 z-20 hidden lg:block">
        <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center">
          <CircularText />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
