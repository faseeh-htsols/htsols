"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import gsap from "gsap";
import DoubleCurves from "@/components/ui/double-curves";

interface WhyChooseItem {
  heading: string;
  description: string;
  image: string;
}

interface WhyChooseData {
  data: {
    highlight: string;
    title: string;
    accordion: WhyChooseItem[];
  }
}



const WhyChooseHtsol = ({ data }: WhyChooseData) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null,
  );
  const activeItem = data.accordion[activeIndex];
  const imageRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setSlideDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!slideDirection || !imageRef.current) return;

    const fromX = slideDirection === "right" ? 100 : -100;

    gsap.fromTo(
      imageRef.current,
      { xPercent: fromX, autoAlpha: 0.6 },
      {
        xPercent: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => setSlideDirection(null),
      },
    );
  }, [activeIndex, slideDirection]);

  return (
    <DoubleCurves up className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <section className="py-20 lg:py-40 bg-tertiary">
        <Container>
          <div className="flex flex-col justify-center items-center w-full pb-8 border-b border-white mb-16">
            <p className=" uppercase tracking-widest mb-3 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block font-primary font-semibold">
              {data.highlight}
            </p>
            <HeadingTwo className="text-center md:max-w-[80%] ">
              {data.title}
            </HeadingTwo>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
            <div className="flex flex-col gap-20">
              {data.accordion.map((item, index) => (
                <button
                  key={item.heading}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className="text-left transition-colors px-1">
                  <h3
                    className={`font-primary font-medium uppercase text-sm sm:text-base md:text-lg tracking-wide ${activeIndex === index ? "text-white" : "text-white/80"
                      }`}>
                    {item.heading}
                  </h3>
                  <p
                    className={`mt-2 text-xs sm:text-sm leading-relaxed max-w-xl ${activeIndex === index ? "text-white" : "text-white/70"
                      }`}>
                    {item.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Right: image that changes with selection */}
            <div className="relative w-full aspect-4/3 lg:aspect-5/4 rounded-2xl bg-[#191919] overflow-hidden border border-white/10">
              <div ref={imageRef} className="absolute inset-0">
                <Image
                  src={activeItem.image}
                  alt={activeItem.heading}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </DoubleCurves>
  );
};

export default WhyChooseHtsol;
