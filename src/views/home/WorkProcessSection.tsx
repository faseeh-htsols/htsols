"use client";

import Button from "@/components/ui/Button";
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
    title: "FINALIZE &<br/> OPTIMIZE",
    description:
      "We deliver, review performance, and refine for continuous improvement.",
  },
];
// ${
//                 index === 0
//                   ? "left-0 top-[66%]"
//                   : index === 1
//                   ? "left-[33%] top-[60%]"
//                   : index === 2
//                   ? "left-[63%] top-[53%]"
//                   : "right-0 top-[15%]"
//               }
export const WorkProcessSection: React.FC = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-24   -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      {/* Top accent line */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" /> */}
      {/* Bottom accent line */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" /> */}
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>

      <div className=" container-for-work-process mx-auto px-5  relative z-10">
        <div className="">
          {/* Left Column */}
          <div className="space-y-6">
            <HeadingTwo>OUR WORK PROCESS</HeadingTwo>
            <p className="text-white/60 text-base leading-relaxed max-w-lg">
              Since our establishment we have successfully served hundreds of
              clients world wide. Our primary skills are around web designing
              and mobile application development. We have a team of...
            </p>
            <div className="flex">
              <Button href="/" variant="outline">
                Get A Free Consultation
              </Button>
            </div>
          </div>
        </div>
        <div className="-mt-[20%] svg-curve relative">
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
              className={`absolute ${`item-${index}`} text-white `}
            >
              <div className="bg-white w-[65px] h-[65px] rounded-3xl flex justify-center items-center">
                <div className="gradient-box w-5 h-5 rounded-lg " />
              </div>
              <div className="mt-16 relative">
                <h3
                  className="font-primary text-2xl mb-4"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className="max-w-[250px]">{item.description}</p>
                <div className="absolute right-0 -top-5 text-9xl opacity-25 font-tertiary font-semibold">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ipad-settings mt-7 relative grid sm:grid-cols-2 gap-10">
          <div className="hidden sm:block absolute top-0 h-full w-1 bg-white left-1/2 -translate-x-1/2"></div>
          <div className="hidden sm:block absolute top-1/2 h-1 w-full bg-white left-0 -translate-y-1/2"></div>
          {processSteps.map((item, index) => (
            <div
              key={item.title}
              className={`relative  ${`item-${index}`} text-white `}
            >
              <div className=" absolute -bottom-5 h-1 w-full bg-white sm:hidden"></div>
              <div className="bg-white w-[65px] h-[65px] rounded-3xl flex justify-center items-center">
                <div className="gradient-box w-5 h-5 rounded-lg " />
              </div>
              <div className="mt-8 sm:mt-16 relative">
                <h3
                  className="font-primary text-2xl mb-4"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className="max-w-[250px]">{item.description}</p>
                <div className="absolute right-0 -top-5 font-primary text-9xl opacity-25">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
