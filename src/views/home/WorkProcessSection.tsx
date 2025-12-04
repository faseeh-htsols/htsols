"use client";

import React from "react";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "DISCOVERY & CONSULTATION",
    description: "We understand your goals, requirements, and project scope.",
  },
  {
    number: 2,
    title: "STRATEGY & PLANNING",
    description: "We create a clear strategy, timeline, and roadmap.",
  },
  {
    number: 3,
    title: "EXECUTION & IMPLEMENTATION",
    description: "We implement the plan using the right tools and expertise.",
  },
  {
    number: 4,
    title: "FINALIZE & OPTIMIZE",
    description: "We deliver, review performance, and refine for continuous improvement.",
  },
];

export const WorkProcessSection: React.FC = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,420px)_1fr] gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              OUR WORK <br />
              PROCESS
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              Since our establishment we have successfully served hundreds of clients world wide. Our primary skills are
              around web designing and mobile application development. We have a team of...
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50 bg-primary/10 text-primary uppercase tracking-wider text-xs hover:bg-primary hover:text-black transition-all duration-300"
            >
              GET A FREE CONSULTATION
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Right Column - Process Flow */}
          <div className="relative min-h-[600px]">
            {/* SVG Path connecting the steps */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M 100 150 Q 300 100, 400 250 Q 500 400, 650 350 Q 750 320, 800 150"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Process Steps */}
            <div className="relative grid grid-cols-2 gap-x-12 gap-y-16">
              {/* Step 1 - Bottom Left */}
              <div className="pt-40 lg:pt-60">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <span className="text-primary text-2xl font-bold">{processSteps[0].number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{processSteps[0].title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{processSteps[0].description}</p>
                  </div>
                </div>
              </div>

              {/* Step 4 - Top Right */}
              <div className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <span className="text-primary text-2xl font-bold">{processSteps[3].number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{processSteps[3].title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{processSteps[3].description}</p>
                  </div>
                </div>
              </div>

              {/* Step 2 - Middle Left */}
              <div className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <span className="text-primary text-2xl font-bold">{processSteps[1].number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{processSteps[1].title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{processSteps[1].description}</p>
                  </div>
                </div>
              </div>

              {/* Step 3 - Middle Right */}
              <div className="pt-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <span className="text-primary text-2xl font-bold">{processSteps[2].number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{processSteps[2].title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{processSteps[2].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;

