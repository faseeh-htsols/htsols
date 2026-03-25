"use client";

import React from "react";
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
    title: "DISCOVER",
    description: "Understand goals, services, and customers",
  },
  {
    number: "02",
    title: "AUDIT",
    description: "Analyse technical health, content gaps, and competition",
  },
  {
    number: "03",
    title: "STRATEGISE",
    description: "Build a prioritised roadmap",
  },
  {
    number: "04",
    title: "EXECUTE",
    description: "Implement fixes and improvements",
  },
  {
    number: "05",
    title: "MEASURE",
    description: "Track rankings, traffic, and leads",
  },
  {
    number: "06",
    title: "REPORT AND SUPPORT",
    description: "Share insights and next steps monthly",
  },
  {
    number: "07",
    title: "IMPROVE",
    description: "Refine continuously based on data and updates",
  },
];

const SeoMethodology = () => {
  return (
    <DoubleCurves
      up
      className="bg-tertiary -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div className="relative py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="mb-5 inline-block bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text font-primary font-semibold uppercase tracking-[0.18em] text-transparent">
              A System Designed to Build Momentum
              </p>

              <HeadingTwo className="text-center text-white uppercase">
               
                Our SEO Methodology
              </HeadingTwo>

              <p className="mt-5 text-white">
                We follow a structured process so you always know where things
                stand.
              </p>
            </div>

            <div className="mt-8 border-t border-white">
              {STEPS.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[42px_auto_1fr_auto] items-center gap-3 border-b border-white last:border-b-0 py-10 md:grid-cols-[56px_auto_1fr_auto] md:gap-5">
                  <h3 className="font-primary uppercase text-white/50 text-2xl font-semibold mb-2">
                    {step.number}
                  </h3>

                  {/* Title */}
                  <h3 className="font-primary uppercase text-white text-2xl font-semibold">
                    {step.title}
                  </h3>

                  {/* Middle line */}
                  <div className="w-full border-t border-dashed border-white/50" />

                  {/* Description */}
                  <p className="text-right text-white">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </DoubleCurves>
  );
};

export default SeoMethodology;
