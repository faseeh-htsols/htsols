"use client";

import React, { useRef } from "react";
import Image from "next/image";
import HeadingTwo from "@/components/ui/heading-two";
import Container from "@/components/ui/container";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const q = gsap.utils.selector(section);

      // main timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none", // animate once
        },
      });

      // left content
      tl.from(q("[data-anim='left']"), { autoAlpha: 0, y: 24, duration: 0.7 });

      // paragraphs stagger
      tl.from(
        q("[data-anim='p']"),
        { autoAlpha: 0, y: 16, duration: 0.55, stagger: 0.12 },
        "-=0.35",
      );

      // bottom image
      tl.from(
        q("[data-anim='bottom-img']"),
        { autoAlpha: 0, y: 18, duration: 0.6 },
        "-=0.35",
      );

      // right image + star
      tl.from(
        q("[data-anim='right']"),
        { autoAlpha: 0, x: 22, duration: 0.75 },
        "-=0.6",
      );

      tl.from(
        q("[data-anim='star']"),
        { autoAlpha: 0, scale: 0.6, rotate: -20, duration: 0.55 },
        "-=0.55",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-25 [clip-path:polygon(0_0,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_97%,0_100%)]"
    >
      <Container>
        <div className="flex lg:flex-row-reverse flex-col gap-12">
          {/* Right */}
          <div
            data-anim="right"
            className="lg:w-[30%] shrink-0 justify-end items-start relative"
          >
            <div
              data-anim="star"
              className="absolute -top-[25px] lg:-top-[50px] -right-[25px] lg:-right-[50px] z-1"
            >
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

          {/* Left */}
          <div data-anim="left" className="space-y-6 grow">
            <HeadingTwo className="">About HtSol Inc.</HeadingTwo>

            <div className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed">
              <p data-anim="p">
                HTSOL Inc. is a full-service digital solutions partner focused
                on practical, measurable growth for Canadian businesses. We
                bring together strategy, development, design, and marketing to
                help organisations build, refine, and scale their digital
                presence with clarity and control.
              </p>
              <p data-anim="p">
                We support organisations at every stage of growth, from startups
                launching their first platform to established companies
                strengthening complex systems. Our clients operate across Canada
                and internationally, where consistent visibility and dependable
                performance are essential to staying competitive.
              </p>
              <p data-anim="p">
                Rather than offering fixed packages, we adapt our involvement to
                match your needs. That may involve a complete digital build,
                ongoing optimisation, or additional technical capacity to
                support internal teams. We earn trust through steady results,
                transparent communication, and improvements you can clearly
                measure over time.
              </p>
            </div>

            <div className="relative mt-8 flex gap-4">
              <div
                data-anim="bottom-img"
                className="relative w-full h-[300px] rounded-lg overflow-hidden border-2 border-primary/30"
              >
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
