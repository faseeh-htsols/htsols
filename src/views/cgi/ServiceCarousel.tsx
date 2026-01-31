// components/ServiceCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Service {
  id: number;
  title: string;
  description: string;
  type: "hardware" | "software" | "innovation";
}

const services: Service[] = [
  {
    id: 1,
    title: "Service Name Here",
    description:
      "Our Hardware Solution service provides top-notch hardware tailored to your business needs. We offer installation, and support for a wide range of equipment.",
    type: "hardware",
  },
  {
    id: 2,
    title: "Service Name Here",
    description:
      "Our Software Solution service offers custom, high-quality software to meet your business needs, enhancing efficiency and driving growth.",
    type: "software",
  },
  {
    id: 3,
    title: "Service Name Here",
    description:
      "Our Innovative Solutions service offers creative and cutting-edge strategies to solve complex business challenges.",
    type: "innovation",
  },
  {
    id: 4,
    title: "Service Name Here",
    description:
      "Our Hardware Solution service provides top-notch hardware tailored to your business needs. We offer installation, and support for a wide range of equipment.",
    type: "hardware",
  },
  {
    id: 5,
    title: "Service Name Here",
    description:
      "Our Software Solution service offers custom, high-quality software to meet your business needs, enhancing efficiency and driving growth.",
    type: "software",
  },
  {
    id: 6,
    title: "Service Name Here",
    description:
      "Our Innovative Solutions service offers creative and cutting-edge strategies to solve complex business challenges.",
    type: "innovation",
  },
];

// Wireframe Sphere Component
const WireframeSphere = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full animate-pulse-slow"
      style={{ filter: "drop-shadow(0 0 20px rgba(100, 200, 200, 0.5))" }}
    >
      <defs>
        <linearGradient id="sphereGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0d9488" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Main sphere outline */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="url(#sphereGradient)"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Horizontal lines */}
      {[30, 50, 70, 90].map((r, i) => (
        <ellipse
          key={`h-${i}`}
          cx="100"
          cy="100"
          rx={Math.sqrt(6400 - (100 - r) * (100 - r))}
          ry={r * 0.3}
          fill="none"
          stroke="#5eead4"
          strokeWidth="0.5"
          opacity="0.4"
        />
      ))}

      {/* Vertical arcs */}
      {[30, 50, 70, 90, 110, 130, 150, 170].map((x, i) => (
        <ellipse
          key={`v-${i}`}
          cx="100"
          cy="100"
          rx="15"
          ry="80"
          fill="none"
          stroke="#5eead4"
          strokeWidth="0.5"
          opacity="0.3"
          transform={`rotate(${x - 100} 100 100)`}
        />
      ))}

      {/* Inner glow */}
      <circle
        cx="100"
        cy="100"
        r="40"
        fill="url(#sphereGradient)"
        opacity="0.1"
      />
    </svg>
  </div>
);

// Custom Navigation Buttons
const NavButton = ({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full 
      bg-white/5 backdrop-blur-sm border border-white/10 
      flex items-center justify-center
      transition-all duration-300 hover:bg-white/10 hover:border-white/20
      group ${direction === "prev" ? "left-4 lg:left-8" : "right-4 lg:right-8"}`}
  >
    <svg
      className={`w-5 h-5 text-white/60 group-hover:text-white transition-colors ${
        direction === "next" ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center py-20">
      {/* Background Grid Floor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, transparent 0%, #0a0a0a 50%),
            linear-gradient(90deg, rgba(94, 234, 212, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(94, 234, 212, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
          transform:
            "perspective(500px) rotateX(60deg) translateY(-100px) scale(2)",
          transformOrigin: "center top",
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none" />

      {/* Title */}
      <div className="relative z-10 text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide uppercase">
          Comprehensive Service
          <br />
          Offerings
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl px-4">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="!overflow-visible"
        >
          {services.map((service, index) => (
            <SwiperSlide
              key={service.id}
              className="!w-[320px] md:!w-[380px] lg:!w-[420px]"
            >
              {({ isActive }) => (
                <div
                  className={`relative h-[480px] rounded-3xl p-8 transition-all duration-500
                    ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"}
                  `}
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(20, 20, 20, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isActive
                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px -15px rgba(94, 234, 212, 0.15)"
                      : "0 20px 40px -12px rgba(0, 0, 0, 0.6)",
                    transform: isActive ? "translateZ(50px)" : "translateZ(0)",
                  }}
                >
                  {/* Card Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>

                    {/* Learn More Button - Only on active card */}
                    {isActive && (
                      <button
                        className="self-start group flex items-center gap-2 px-6 py-3 
                        rounded-full border border-white/20 text-white text-sm font-medium
                        transition-all duration-300 hover:bg-white/5 hover:border-white/30"
                      >
                        Learn more
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Wireframe Sphere Decoration */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-48 md:h-48 pointer-events-none">
                    <WireframeSphere />
                  </div>

                  {/* Subtle glow effect */}
                  <div
                    className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-32 
                      bg-teal-500/20 rounded-full blur-3xl pointer-events-none"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="hidden md:block">
          <div className="swiper-button-prev-custom">
            <NavButton direction="prev" onClick={() => {}} />
          </div>
          <div className="swiper-button-next-custom">
            <NavButton direction="next" onClick={() => {}} />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {services.map((_, index) => (
            <button
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-white"
                  : "w-4 bg-white/20 hover:bg-white/40"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
