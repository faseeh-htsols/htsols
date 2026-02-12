"use client";

import React from "react";
import Image from "next/image";
import HeadingTwo from "@/components/ui/heading-two";
import Container from "@/components/ui/container";

export const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-black py-25  [clip-path:polygon(0_0,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_97%,0_100%)]">
      {/* Top accent line */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" /> */}
      {/* <div
        className="pointer-events-none absolute bottom-0 left-0 h-[3%] w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
           [clip-path:polygon(0_0,100%_0,100%_97%,0_100%)]
           opacity-90"
      ></div> */}

      <Container>
        <div className="flex lg:flex-row-reverse flex-col gap-12">
          {/* Right Content - Decorative Star */}
          <div className="lg:w-[30%] shrink-0 justify-end items-start relative">
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
                className="object-cover rounded-lg"
                fill
              />
            </div>
          </div>
          {/* Left Content */}
          <div className="space-y-6 grow">
            {/* Heading */}
            <HeadingTwo className="">About HtSol Inc.</HeadingTwo>

            {/* Description paragraphs */}
            <div className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
              <p>
                HTSOL Inc. is a full-service digital solutions partner focused
                on practical, measurable growth for Canadian businesses. We
                bring together strategy, development, design, and marketing to
                help organisations build, refine, and scale their digital
                presence with clarity and control.
              </p>
              <p>
                We support organisations at every stage of growth, from startups
                launching their first platform to established companies
                strengthening complex systems. Our clients operate across Canada
                and internationally, where consistent visibility and dependable
                performance are essential to staying competitive.
              </p>
              <p>
                Rather than offering fixed packages, we adapt our involvement to
                match your needs. That may involve a complete digital build,
                ongoing optimisation, or additional technical capacity to
                support internal teams. We earn trust through steady results,
                transparent communication, and improvements you can clearly
                measure over time.
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
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
