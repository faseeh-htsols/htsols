"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const portfolioBannerImage = "/portfolio-banner.webp";
  const portfolioPlayButtonImage = "/play-button.svg";
  const portfolioVideo = "/portfolio-video.mp4";

  return (
    <section className=" relative">
      <div className="absolute top-20 left-0">
        <Image
          src={"/left-gradient.webp"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <div className="absolute top-20 right-0">
        <Image
          src={"/right-gradient.webp"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <Container>
        <div className="flex flex-col items-center gap-8 pt-30 md:pt-40">
          <h1 className="font-primary font-semibold text-4xl sm:text-5xl lg:text-6xl uppercase leading-tight mb-2 text-center">
            OUR PORTFOLIO
          </h1>
          {/* <div
            className="group relative w-full max-w-[1080px] h-[240px] sm:h-[340px] md:h-[420px] rounded-xl border border-white/20 overflow-hidden cursor-pointer"
            onClick={() => setIsOpen(true)}>
            <Image
              src={portfolioBannerImage}
              alt="Portfolio preview"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={portfolioPlayButtonImage}
                alt="Play"
                width={72}
                height={72}
                className="w-16 h-16 sm:w-[72px] sm:h-[72px]"
              />
            </div>
          </div> */}
          {/* {isOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-md animate-[fadeIn_0.25s_ease]"
              onClick={() => setIsOpen(false)}>
              <div
                className="relative w-[90vw] max-w-4xl rounded-xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] animate-[scaleUp_0.3s_cubic-bezier(0.34,1.56,0.64,1)]"
                onClick={(e) => e.stopPropagation()}>


                <button
                  className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white text-sm hover:bg-white/25 hover:rotate-90 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close video">
                  ✕
                </button>

                <video
                  src={portfolioVideo}
                  controls
                  autoPlay
                  className="w-full h-auto aspect-video bg-black block"
                />
              </div>
            </div>
          )} */}
        </div>
      </Container>
    </section>
  );
}
