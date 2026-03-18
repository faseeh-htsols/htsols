"use client";

import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import Container from "@/components/ui/container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SLIDES = [
  "HTSOL Inc. prioritises clarity, execution, and measurable outcomes. You should always know what we are doing, why it matters, and how it affects your growth.",
  "We keep SEO transparent. No vague promises. No black-box work. You receive a clear roadmap, steady progress, and reporting written in plain language.",
];

const ClearStrategy = () => {
  return (
    <DoubleCurves
      up
      className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <section className="relative bg-black pb-10 pt-16 md:py-20 overflow-hidden">
        <Container>
          <div className="">
            <div className="text-center mb-10">
              <p className="uppercase tracking-widest mb-5 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block  font-primary">
                A Canadian SEO Partner You Can Measure
              </p>

              <HeadingTwo className="text-center">
                Clear Strategy.
                <br />
                Real Results.
              </HeadingTwo>
            </div>

            <div className="">
              <div className="w-full rounded-[12px] p-px bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] shadow-[0_0_30px_rgba(0,131,138,0.16)]">
                <div className="rounded-[12px] bg-black p-2">
                  <div className="relative rounded-[10px] bg-tertiary h-full px-5 sm:px-8 md:px-14 py-8 md:py-10 overflow-hidden flex flex-col items-center justify-center text-center gap-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,131,138,0.08),transparent_60%)]" />

                    <div className="relative z-2 w-full max-w-[980px] mx-auto">
                      <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        loop={SLIDES.length > 1}
                        autoplay={
                          SLIDES.length > 1
                            ? { delay: 4500, disableOnInteraction: false }
                            : false
                        }
                        pagination={{ clickable: true }}
                        className="[&_.swiper-pagination-bullet]:bg-white/40 [&_.swiper-pagination-bullet-active]:bg-[#00A1A5]! [&_.swiper-pagination]:bottom-0! overflow-hidden!">
                        {SLIDES.map((text) => (
                          <SwiperSlide key={text}>
                            <div className="flex flex-col items-center gap-5 pb-8">
                              <Image
                                src="/seo-test.svg"
                                alt="quote"
                                width={44}
                                height={44}
                                className="w-11 h-11"
                              />
                              <p className="text-white uppercase font-primary font-semibold text-[18px] md:text-[22px] leading-[1.35]">
                                {text}
                              </p>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-4 lg:mt-10">
                <Button href="/">GET A FREE SEO REVIEW</Button>
                <Button href="/" variant="outline">
                  TALK TO AN SEO EXPERT
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </DoubleCurves>
  );
};

export default ClearStrategy;
