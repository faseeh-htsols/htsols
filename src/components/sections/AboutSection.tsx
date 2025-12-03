"use client";

import React from "react";
import Image from "next/image";

export const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-20 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              ABOUT <span className="text-primary">HTSOLUTION</span>
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed max-w-xl">
              <p>
                Since our establishment we have successfully served hundreds of clients world wide. Our
                primary skills are around web designing and mobile application development. We have
                a team of 40+ dedicated professionals for all kinds of tasks.
              </p>
              <p>
                Since our establishment we have successfully served hundreds of clients world wide. Our
                primary skills are around web designing and mobile application development. We have
                a team of 40+ dedicated professionals for all kinds of tasks.
              </p>
            </div>

            {/* Images container */}
            <div className="relative mt-8 flex gap-4">
              {/* First image - Team meeting */}
              <div className="relative w-[55%] aspect-[4/3] rounded-lg overflow-hidden border-2 border-primary/30">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Second image - City/Building - overlapping */}
              <div className="relative w-[50%] aspect-[3/4] rounded-lg overflow-hidden border-2 border-primary/30 -ml-8 mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=600&fit=crop"
                  alt="Modern city architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Decorative Star */}
          <div className="hidden lg:flex justify-end items-start">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary opacity-80"
            >
              {/* 4-pointed star */}
              <path
                d="M60 0L63 50L60 60L57 50L60 0Z"
                fill="currentColor"
              />
              <path
                d="M60 120L63 70L60 60L57 70L60 120Z"
                fill="currentColor"
              />
              <path
                d="M0 60L50 63L60 60L50 57L0 60Z"
                fill="currentColor"
              />
              <path
                d="M120 60L70 63L60 60L70 57L120 60Z"
                fill="currentColor"
              />
              {/* Diagonal points */}
              <path
                d="M17 17L52 52L60 60L52 52L17 17Z"
                fill="currentColor"
                opacity="0.6"
              />
              <path
                d="M103 17L68 52L60 60L68 52L103 17Z"
                fill="currentColor"
                opacity="0.6"
              />
              <path
                d="M17 103L52 68L60 60L52 68L17 103Z"
                fill="currentColor"
                opacity="0.6"
              />
              <path
                d="M103 103L68 68L60 60L68 68L103 103Z"
                fill="currentColor"
                opacity="0.6"
              />
              {/* Center glow */}
              <circle cx="60" cy="60" r="4" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

