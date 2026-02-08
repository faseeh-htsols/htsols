"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[url(/dental/banner-bgs.jpg)] bg-center bg-cover pb-36 ">
        {/* Background overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0" /> */}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
              Grow Your Dental Practice <br />
              with Premium Digital <br />
              Marketing Solutions
            </h1>

            <p className="mt-6 max-w-xl text-white/80 text-base lg:text-lg">
              We are a Mississauga-based agency serving dentists across Canada.
              Our mission is simple: helping your dental practice attract and
              retain more patients through industry-specific digital strategies.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              Book a Free Discovery Call
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                →
              </span>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/dental/banner.png"
              alt="Dental website mockup"
              width={500}
              height={500}
              className="w-full h-[600px] object-contain"
            />
          </div>
        </div>

        {/* Bottom Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64 C240,128 480,0 720,16 960,32 1200,96 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </section>
    </div>
  );
}
