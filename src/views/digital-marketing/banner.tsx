"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import Button from "@/components/ui/Button";

const Banner = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden py-20 lg:py-40">
      {/* Corner gradient glows */}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div className="relative order-2 lg:order-1 flex h-full items-center justify-center lg:justify-start">
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px]">
              <Image
                src="/marketing-banner.png"
                alt="SEO growth metrics and Page 1 Rankings"
                fill
                className="object-cover rounded-[20px]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 h-full flex flex-col justify-center">
            <p className=" uppercase tracking-widest mb-3 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block">
              Digital Marketing Services
            </p>
            <h1 className="font-primary font-semibold text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-4">
              Grow Your Business With Data-Driven Digital Marketing Strategies
            </h1>
            <div className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                In today’s competitive digital landscape, simply having a website is no longer enough. Your business needs a clear strategy that helps the right people find you online, trust your brand, and take the next step.
                <br />
                Digital marketing works best when every channel supports a larger plan. From search engines to social platforms, each interaction with your business should guide visitors toward becoming customers.
              </p>
              <p>
                At <b>HTSOL Inc. Digital Marketing Agency,</b> we help businesses across Canada grow through intelligent, data-driven marketing strategies. Our team combines advanced analytics, thoughtful creative work, and proven growth frameworks to support measurable business progress.
                <br />
                Whether you are launching a startup, expanding a local company, or managing an established brand, our <b>digital marketing services</b> focus on improving visibility, generating qualified leads, and supporting steady, long-term revenue growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact-us" variant="white">Start growing today</Button>
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
