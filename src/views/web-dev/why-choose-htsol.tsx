"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import gsap from "gsap";
const WHY_CHOOSE_ITEMS = [
  {
    heading: "ONE TEAM FOR DEVELOPMENT AND MARKETING",
    description:
      "Your website should work with your SEO, ads, and content strategy. We build with your full digital ecosystem in mind.",
    image: "/rectangle.png",
  },
  {
    heading: "PERFORMANCE-FIRST BUILDS",
    description:
      "Speed, stability, and mobile usability are treated as requirements, not optional extras. This supports better user experience and more reliable Core Web Vitals.",
    image: "/rectangle.png",
  },
  {
    heading: "CLEAR, TRANSPARENT PROCESS",
    description:
      "You get clear milestones, practical guidance, and a build process that stays organized.",
    image: "/rectangle.png",
  },
  {
    heading: "DESIGNED FOR TRUST",
    description:
      "We help you present your services clearly, build credibility, and reduce friction for users who are ready to contact you.",
    image: "/rectangle.png",
  },
  {
    heading: "BUILT TO SCALE",
    description:
      "Your site should support new services, new locations, and future campaigns without needing a rebuild every year.",
    image: "/rectangle.png",
  },
];

const WhyChooseHtsol = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null,
  );
  const activeItem = WHY_CHOOSE_ITEMS[activeIndex];
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
    <section className="py-20 bg-tertiary">
      <Container>
        <HeadingTwo className="text-center pb-4 border-b border-white mb-10">
          Why Choose HTSOL Inc. for Web Development
        </HeadingTwo>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
          <div className="flex flex-col gap-20">
            {WHY_CHOOSE_ITEMS.map((item, index) => (
              <button
                key={item.heading}
                type="button"
                onClick={() => handleSelect(index)}
                className="text-left transition-colors px-1">
                <h3
                  className={`font-primary font-medium uppercase text-sm sm:text-base md:text-lg tracking-wide ${
                    activeIndex === index ? "text-white" : "text-white/80"
                  }`}>
                  {item.heading}
                </h3>
                <p
                  className={`mt-2 text-xs sm:text-sm leading-relaxed max-w-xl ${
                    activeIndex === index ? "text-white" : "text-white/70"
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
  );
};

export default WhyChooseHtsol;
