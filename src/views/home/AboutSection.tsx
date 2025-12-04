"use client";

import React from "react";
import Image from "next/image";
import HeadingTwo from "@/components/ui/heading-two";

export const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-20 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex gap-12">
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
          <div className="w-[40%] justify-end items-start relative">
            <div className="absolute -top-[50px] -right-[50px] z-1">
              <Image
                src={"/star.svg"}
                alt="decorative star"
                width={150}
                height={150}
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-full h-full">
              <Image src={"/about-two.png"} alt="image" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
