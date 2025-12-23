"use client";

import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    id: "01",
    title: "Planning",
    description:
      "We define goals, requirements, and the right path to deliver a clear outcome.",
    image: "/website-development-services.png",
  },
  {
    id: "02",
    title: "Design",
    description:
      "We craft the experience, visuals, and layout to match the brand direction.",
    image: "/seo-services.png",
  },
  {
    id: "03",
    title: "Development",
    description:
      "We build responsive, performant interfaces and solid backend workflows.",
    image: "/digital-transformations.png",
  },
  {
    id: "04",
    title: "Testing",
    description:
      "We validate quality, accessibility, and performance before launch.",
    image: "/digital-marketing.png",
  },
];

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-tertiary py-20  -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
      ></div>
      <Container>
        <div className="mb-12 text-center">
          <HeadingTwo>OUR PROCESS</HeadingTwo>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr_0.8fr] items-center">
          <div className="space-y-6">
            <p className="text-white/60 text-sm sm:text-base">
              {steps[activeIndex].description}
            </p>

            <div className="space-y-5">
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group process-step flex w-full items-center justify-between rounded-full border px-7 py-5 text-left transition-all ${
                      isActive
                        ? "border-white/50 bg-white/5"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    <span className="flex items-center gap-5">
                      <span
                        className={`process-step-number text-base sm:text-lg lg:text-xl font-primary ${
                          isActive ? "gradient-text-blue" : "text-white/40"
                        }`}
                      >
                        {step.id}
                      </span>
                      <span
                        className={`text-base sm:text-lg lg:text-xl font-primary font-semibold uppercase tracking-wide ${
                          isActive ? "text-white" : "text-white/50"
                        }`}
                      >
                        {step.title}
                      </span>
                    </span>
                    <span
                      className={`transition-all ${
                        isActive ? "text-white" : "text-white/40"
                      } group-hover:text-white`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 10H16M16 10L12 6M16 10L12 14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[320px] sm:h-[380px] lg:h-[440px] rounded-3xl overflow-hidden border border-white/10">
              {steps.map((step, index) => (
                <Image
                  key={step.image}
                  src={step.image}
                  alt={`${step.title} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    index === activeIndex
                      ? "opacity-100 scale-100 blur-0"
                      : "opacity-0 scale-105 blur-sm"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-[#0f7b84] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] p-5 h-[320px] sm:h-[380px] lg:h-[440px] flex flex-col">
              <div className="relative h-[160px] sm:h-[200px] lg:h-[230px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/about-htsols.jpg"
                  alt="Expert preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-white/80 text-sm leading-relaxed flex-1">
                Looking for design experts who can bring your vision to life?
              </p>
              <div className="mt-4 flex items-center gap-4">
                <h3 className="text-white font-primary uppercase text-xl sm:text-2xl">
                  Meet Our Expert
                </h3>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-transparent hover:bg-white hover:text-[#00838A]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L13 5M13 5H6.5M13 5V11.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
