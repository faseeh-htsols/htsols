"use client";

import React, { useId, useState } from "react";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import DoubleCurves from "@/components/ui/double-curves";

type Step = {
  number: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "DISCOVERY AND PLANNING",
    description:
      "We learn your goals, audience, services, competitors, and what success looks like. We map the site structure before development starts.",
  },
  {
    number: "02",
    title: "CONTENT AND WIREFRAMES",
    description:
      "We define page priorities, messaging, and layout. If you need copy support, we can help create or refine content for clarity and conversion.",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "We create a modern design system that fits your brand, then design key pages with mobile-first layouts.",
  },
  {
    number: "04",
    title: "DEVELOPMENT AND SEO SETUP",
    description:
      "We build using clean code and performance-first practices. Technical SEO foundations and tracking are set up during the build.",
  },
  {
    number: "05",
    title: "TESTING AND QUALITY CHECKS",
    description:
      "We test across devices and browsers, validate forms, check speed, and confirm basic accessibility and usability.",
  },
  {
    number: "06",
    title: "LAUNCH AND SUPPORT",
    description:
      "We launch smoothly, monitor performance, and support updates, improvements, and growth initiatives after go-live.",
  },
];

const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true">
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true">
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const WhatToExpect = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const baseId = useId();

  return (
    <DoubleCurves up className="bg-tertiary -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <Container>
        <div className="relative py-20 lg:py-40">
          {/* Header */}
          <div className="text-center">
            <HeadingTwo className="text-center">
              What to Expect When You Work With HTSOL Inc.
            </HeadingTwo>
            <p className="mt-8 mb-9 text-white text-lg">
              We keep the process simple and organized, with clear steps and
              consistent communication. You always know what is happening, what is
              next, and what we need from you.
            </p>

            <div className="mt-6 h-px w-full bg-white" />
          </div>

          {/* Accordion */}
          <div className="">
            {STEPS.map((step, idx) => {
              const isOpen = idx === activeIndex;
              const panelId = `${baseId}-panel-${idx}`;
              const buttonId = `${baseId}-button-${idx}`;

              return (
                <div
                  key={step.number}
                  className={`border-b  ${isOpen ? "border-white" : "border-white/70"}`}>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setActiveIndex(idx)}
                    className="w-full text-left py-5 cursor-pointer">
                    <div className="grid grid-cols-[52px_1fr_24px] items-center gap-4">
                      {/* number */}
                      <div
                        className={`font-primary text-xl uppercase  ${isOpen ? "text-white" : "text-white/70"}`}>
                        {step.number}
                      </div>

                      {/* title */}
                      <div
                        className={`uppercase font-primary text-xl  ${isOpen ? "text-white" : "text-white/75"
                          }`}>
                        {step.title}
                      </div>

                      {/* icon */}
                      <div className="flex justify-end text-white/60">
                        <ChevronDown
                          className={`text-white/70 ${isOpen ? "rotate-180 text-white" : ""}`}
                        />
                      </div>
                    </div>

                    {/* Open content (animated) */}
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid grid-cols-[52px_1fr_24px] gap-4 transition-all duration-300 ${isOpen
                        ? "mt-5 max-h-40 opacity-100"
                        : "mt-0 max-h-0 opacity-0"
                        } overflow-hidden`}>
                      <div />
                      <p className="text-white pr-4">{step.description}</p>
                      <div />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </DoubleCurves>
  );
};

export default WhatToExpect;
