"use client";

import React from "react";
import Image from "next/image";
import HeadingTwo from "@/components/ui/heading-two";

export const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-black py-20  [clip-path:polygon(0_0,100%_0,100%_97%,0_100%)]">
      {/* Top accent line */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" /> */}
      {/* <div
        className="pointer-events-none absolute bottom-0 left-0 h-[3%] w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
           [clip-path:polygon(0_0,100%_0,100%_97%,0_100%)]
           opacity-90"
      ></div> */}

      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex lg:flex-row flex-col gap-12">
          {/* Left Content */}
          <div className="space-y-6 grow">
            {/* Heading */}
            <HeadingTwo className="">About Htsolutions</HeadingTwo>

            {/* Description paragraphs */}
            <div className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
              <p>
                Since our establishment we have successfully served hundreds of
                clients world wide. Our primary skills are around web designing
                and mobile application development. We have a team of 40+
                dedicated professionals for all kinds of tasks.
              </p>
              <p>
                Since our establishment we have successfully served hundreds of
                clients world wide. Our primary skills are around web designing
                and mobile application development. We have a team of 40+
                dedicated professionals for all kinds of tasks.
              </p>
            </div>

            {/* Images container */}
            <div className="relative mt-8 flex gap-4">
              {/* First image - Team meeting */}
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden border-2 border-primary/30">
                <Image
                  src="/about-htsols.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Decorative Star */}
          <div className="lg:w-[40%] justify-end items-start relative">
            <div className="absolute -top-[25px] lg:-top-[50px] -right-[25px] lg:-right-[50px] z-1">
              <Image
                src={"/star.svg"}
                alt="decorative star"
                width={150}
                height={150}
                className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]"
              />
            </div>
            <div className="w-full relative h-full min-h-[300px]">
              <Image
                src={"/about-two.png"}
                alt="image"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
