"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const IMAGES_CLIENTS_CGI = [
  { image: "/cgi/burgeroclock.webp", alt: "Gendwa design" },
  { image: "/cgi/avlinc.webp", alt: "virefori" },
  { image: "/cgi/borjan.webp", alt: "loka-oma" },
  { image: "/cgi/dentopia.webp", alt: "one-stup" },

  // (you had duplicates already — you can keep them OR remove them)
  { image: "/cgi/kaybees.webp", alt: "Gendwa design" },
  { image: "/cgi/meiidz.webp", alt: "virefori" },
  { image: "/cgi/nayza.webp", alt: "loka-oma" },
  { image: "/cgi/pizzahutt.webp", alt: "one-stup" },
  { image: "/cgi/skincare.webp", alt: "one-stup" },
  { image: "/cgi/skinwhite.webp", alt: "one-stup" },
];

export default function ClientsMarquee() {
  const swiperRef = useRef<SwiperType | null>(null);

  // ✅ SET YOUR VALUES HERE (your “version”)
  const speed = 9000; // bigger = slower
  const gap = 24;
  const reverse = false;
  const pauseOnHover = true;

  const onEnter = () => {
    if (!pauseOnHover) return;
    swiperRef.current?.autoplay?.stop();
  };

  const onLeave = () => {
    if (!pauseOnHover) return;
    swiperRef.current?.autoplay?.start();
  };

  // ✅ optional: extra smooth loop (even if you remove duplicates from array)
  const items = [...IMAGES_CLIENTS_CGI, ...IMAGES_CLIENTS_CGI];

  return (
    <div
      className="relative w-full overflow-hidden py-14"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* fade edges */}
      {/* <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" /> */}

      <Swiper
        modules={[Autoplay]}
        onSwiper={(s) => (swiperRef.current = s)}
        loop
        slidesPerView="auto"
        spaceBetween={gap}
        speed={speed}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: reverse,
          pauseOnMouseEnter: false, // we handle hover ourselves
        }}
        className="marquee-swiper"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={`${item.image}-${idx}`} className="!w-auto">
            <div className="flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.alt || "logo"}
                width={140}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .marquee-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
}
