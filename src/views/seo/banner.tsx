"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import Button from "@/components/ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import HeadingTwo from "@/components/ui/heading-two";

const SEO_TOPICS = [
  "On-Page SEO",
  "Keyword Research & Strategy",
  "Content Strategy & Copywriting",
  "Link Building & Authority Growth",
  "Local SEO & Maps",
];

const tealGradient =
  "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)";

const Banner = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden pb-20 pt-30 md:pb-20 md:pt-40">
      <div className="absolute top-20 left-0">
        <Image
          src={"/left-gradient.webp"}
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
                src="/seo-bannerr.webp"
                alt="SEO growth metrics and Page 1 Rankings"
                fill
                className="object-cover rounded-[20px]"
              />

              <div className="absolute top-4 left-4 z-10">
                <Image
                  src="/range-icon.svg"
                  alt="icon"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-full flex flex-col justify-center">
            <p className=" uppercase tracking-widest mb-3 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block">
              Search Engine Optimization Services
            </p>
            <h1 className="font-primary font-semibold text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-4">
              SEO Solutions Built to Solve Real{" "}
              <span className="text-white">Growth Problems</span>
            </h1>
            <div style={{ background: tealGradient }}>
              <span className="inline-block px-4 py-2 rounded-lg text-white font-medium uppercase tracking-wide mb-6">
                Focused on Growing Qualified Traffic, Leads, and Revenue
              </span>
            </div>
            <div className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                When people in Canada search for your services, you want to
                appear first. If your business is missing from Google results,
                most users will choose a competitor who shows up ahead of you.
              </p>
              <p>
                HTSOL Inc. helps Canadian businesses increase search visibility,
                build trust, and turn organic traffic into steady leads. We
                start by fixing the fundamentals, then improve performance month
                after month.
              </p>
              <p>
                Our approach combines technical SEO, content strategy, and
                performance reporting. The goal is simple. Help you rank for the
                keywords that matter, in the markets that matter, across Canada.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/">Get a Free SEO Review</Button>
              <Button href="/" variant="outline">
                Talk to an SEO Expert
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom: SEO topics bar */}
      <div className="mt-10 lg:mt-12">
        <Container>
          <div className="rounded-[10px] bg-[#151517A6] border border-[#075B65] px-4 sm:px-6 py-4 overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={12}
              loop={true}
              speed={6000}
              allowTouchMove={false}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              className="seo-topics-swiper">
              {[...SEO_TOPICS, ...SEO_TOPICS, ...SEO_TOPICS].map((topic, i) => (
                <SwiperSlide key={`${topic}-${i}`} className="w-auto!">
                  <div className="flex items-center gap-2">
                    {i > 0 && (
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: tealGradient }}
                        aria-hidden
                      />
                    )}
                    <span className="text-white  uppercase tracking-wide whitespace-nowrap">
                      {topic}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
