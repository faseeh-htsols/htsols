"use client";

import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";

interface ProcessStep {
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    title: "DISCOVERY & <br/> CONSULTATION",
    description: "We understand your goals, requirements, and project scope.",
  },
  {
    title: "STRATEGY & <br/> PLANNING",
    description: "We create a clear strategy, timeline, and roadmap.",
  },
  {
    title: "EXECUTION & <br/> IMPLEMENTATION",
    description: "We implement the plan using the right tools and expertise.",
  },
  {
    title: "FINALIZE & OPTIMIZE",
    description:
      "We deliver, review performance, and refine for continuous improvement.",
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
        <div className="">
          {/* Left Column */}
          <div className="space-y-6">
            <HeadingTwo>OUR WORK PROCESS</HeadingTwo>
            <p className="text-white/60 text-base leading-relaxed max-w-lg">
              Since our establishment we have successfully served hundreds of
              clients world wide. Our primary skills are around web designing
              and mobile application development. We have a team of...
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50 bg-primary/10 text-primary uppercase tracking-wider text-xs hover:bg-primary hover:text-black transition-all duration-300"
            >
              GET A FREE CONSULTATION
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
        </div>
        <div className="-mt-[20%] relative">
          <Image
            src={"/svg-work-process.svg"}
            alt="curve"
            width={1000}
            height={1000}
            className="w-full h-[800px]"
          />
          {processSteps.map((item, index) => (
            <div
              key={item.title}
              className={`absolute ${
                index === 0
                  ? "left-0 top-[66%]"
                  : index === 1
                  ? "left-[33%] top-[60%]"
                  : index === 2
                  ? "left-[63%] top-[53%]"
                  : "right-0 top-[15%]"
              }`}
            >
              <div className="bg-white w-[65px] h-[65px] rounded-3xl flex justify-center items-center">
                <div className="gradient-box w-5 h-5 rounded-lg " />
              </div>
              <div className="mt-16 relative">
                <h3
                  className="font-primary "
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className="max-w-[250px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
