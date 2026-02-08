"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const IMAGES_CLIENTS_CGI = [
  { image: "/cgi/burgeroclock.webp", alt: "Burger O Clock" },
  { image: "/cgi/avlinc.webp", alt: "Avlinc" },
  { image: "/cgi/borjan.webp", alt: "Borjan" },
  { image: "/cgi/dentopia.webp", alt: "Dentopia" },
  { image: "/cgi/kaybees.webp", alt: "Kaybees" },
  { image: "/cgi/meiidz.webp", alt: "Meiidz" },
  { image: "/cgi/nayza.webp", alt: "Nayza" },
  { image: "/cgi/pizzahutt.webp", alt: "Pizza Hut" },
  { image: "/cgi/skincare.webp", alt: "Skincare" },
  { image: "/cgi/skinwhite.webp", alt: "Skinwhite" },
];

export default function ClientsMarquee() {
  const swiperRef = useRef<SwiperType | null>(null);

  // duplicate for seamless loop
  const items = [...IMAGES_CLIENTS_CGI, ...IMAGES_CLIENTS_CGI];

  return (
    <div className="relative w-full overflow-hidden py-14">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(s) => (swiperRef.current = s)}
        slidesPerView="auto"
        spaceBetween={24}
        loop
        speed={9000} // bigger = slower
        allowTouchMove={false}
        autoplay={{
          delay: 1, // ✅ CRITICAL (Safari-safe)
          disableOnInteraction: false,
        }}
        className="marquee-swiper"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={`${item.image}-${idx}`} className="!w-auto">
            <div className="flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.alt}
                width={140}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* force linear motion */}
      <style jsx global>{`
        .marquee-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
}
