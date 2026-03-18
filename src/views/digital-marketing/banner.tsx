"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import Button from "@/components/ui/Button";

const Banner = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden py-20 md:py-28">
      {/* Corner gradient glows */}
      <div className="absolute top-0 left-0 pointer-events-none">
        <Image
          src="/left-gradient.webp"
          width={500}
          height={500}
          className="w-[350px] h-[350px] opacity-80"
          alt=""
          aria-hidden
        />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <Image
          src="/right-gradient.webp"
          width={500}
          height={500}
          className="w-[350px] h-[350px] opacity-80"
          alt=""
          aria-hidden
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/5] max-h-[500px] lg:max-h-[560px]">
              <Image
                src="/digital-marketing.webp"
                alt="Business professional reviewing data-driven marketing strategies"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <p className="text-[#00A1A5] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Digital Marketing Services
            </p>
            <h1 className="font-primary font-semibold text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-6">
              Grow Your Business with Data-Driven Digital Marketing Strategies
            </h1>
            <div className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                In today&apos;s digital landscape, a website alone isn&apos;t
                enough. Your business needs a cohesive strategy that builds trust
                and guides the right audience toward becoming loyal customers.
              </p>
              <p>
                HTSOL Inc. helps Canadian businesses scale through data-driven
                marketing, combining advanced analytics with creative growth
                frameworks to turn digital interactions into measurable
                progress. From startups to established brands, our services focus
                on enhancing visibility, generating qualified leads, and
                supporting long-term, sustainable revenue growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact-us" variant="primary">
                Start Growing Today
              </Button>
              <Button href="/services" variant="outline">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
