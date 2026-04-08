"use client";

import React, { useRef } from "react";
import Image from "next/image";
import HeadingTwo from "@/components/ui/heading-two";
import Container from "@/components/ui/container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import DoubleCurves from "@/components/ui/double-curves";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: ServiceCard[] = [
  {
    title: "WEBSITE DEVELOPMENT SERVICES",
    description:
      "Design and development that turns visitors into leads with speed, clarity, and clean UX.",
    image: "/web-dev-ser-home.png",
    link: "/services/website-development",
  },
  {
    title: "SEO SERVICES",
    description:
      "Smart SEO, content, and campaigns that get you seen in Google, ChatGPT, and where buyers search.",
    image: "/seo-srevices.png",
    link: "/services/seo-services",
  },
  {
    title: "CGI SERVICES",
    description:
      "Scroll-stopping CGI and 3D visuals that make your product look premium and earn attention fast.",
    image: "/cgi-ser-home.webp",
    link: "/services/cgi",
  },
  {
    title: "STAFF AUGMENTATION",
    description:
      "Add vetted developers and designers to your team, without the hiring delays or overhead.",
    image: "/staff.png",
    link: "/services/staff-augmentation",
  },
  {
    title: "DIGITAL TRANSFORMATION",
    description:
      "Strategy and execution that modernises your business without disrupting day-to-day delivery.",
    image: "/digital-transformation.png",
    link: "/services/digital-transformation",
  },
  {
    title: "DIGITAL MARKETING",
    description:
      "Performance marketing that drives qualified traffic, better leads, and stronger ROI across channels.",
    image: "/marketing.png",
    link: "/services/digital-marketing",
  },
];

// ─── Card stack visual states (index 0 = front/active) ─────────────────────
// Each successive card is offset right, rotated clockwise, and scaled down
const STACK_STATES = [
  { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
  { x: 12, y: 8, rotation: 5, scale: 0.97, opacity: 0.85 },
  { x: 22, y: 14, rotation: 9, scale: 0.94, opacity: 0.7 },
  { x: 30, y: 18, rotation: 13, scale: 0.91, opacity: 0.55 },
];
const VISIBLE_DEPTH = STACK_STATES.length;

export const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const methodsRef = useRef<(HTMLDivElement | null)[]>([]);

  // ── mobile card stack refs ────────────────────────────────────────────────
  const stackPinRef = useRef<HTMLDivElement | null>(null);
  const stackCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ── existing heading + desktop card animations (UNTOUCHED) ────────────────
  useGSAP(
    () => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      methodsRef.current.forEach((method, i) => {
        if (method) {
          gsap.from(method, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: method,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    },
    { scope: containerRef },
  );

  // ── mobile card stack animation (mobile only via matchMedia) ──────────────
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        const pinEl = stackPinRef.current;
        if (!pinEl) return;

        const cardEls = stackCardRefs.current.filter(
          Boolean,
        ) as HTMLDivElement[];
        const numCards = cardEls.length;
        const numExits = numCards - 1; // last card never exits

        // Set initial fan positions
        cardEls.forEach((card, i) => {
          const stateIdx = Math.min(i, VISIBLE_DEPTH - 1);
          const state = STACK_STATES[stateIdx];
          gsap.set(card, {
            x: state.x,
            y: state.y,
            rotation: state.rotation,
            scale: state.scale,
            opacity: i < VISIBLE_DEPTH ? state.opacity : 0,
            zIndex: numCards - i,
            transformOrigin: "bottom center",
          });
        });

        const PX_PER_STACK_UNIT = 650;
        // Extra timeline + scroll after last card before unpin (feels like a short pause)
        const HOLD_AFTER_LAST_UNITS = 0.75;

        // Build scroll-driven timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinEl,
            start: "top top",
            end: `+=${(numExits + HOLD_AFTER_LAST_UNITS) * PX_PER_STACK_UNIT}`,
            pin: true,
            pinSpacing: true,
            scrub: 1.2,
            anticipatePin: 1,
          },
        });

        for (let step = 0; step < numExits; step++) {
          // Exit front card: slide left + fade + slight counter-rotation
          tl.to(
            cardEls[step],
            {
              x: "-115%",
              opacity: 0,
              rotation: -10,
              duration: 1,
              ease: "power2.inOut",
            },
            step, // timeline label = step index
          );

          // Promote all remaining cards one slot forward simultaneously
          for (let j = step + 1; j < numCards; j++) {
            const newPos = j - step - 1;
            const stateIdx = Math.min(newPos, VISIBLE_DEPTH - 1);
            const target = STACK_STATES[stateIdx];

            tl.to(
              cardEls[j],
              {
                x: target.x,
                y: target.y,
                rotation: target.rotation,
                scale: target.scale,
                opacity: newPos < VISIBLE_DEPTH ? target.opacity : 0,
                duration: 1,
                ease: "power2.inOut",
              },
              step, // same position → simultaneous with exit
            );
          }
        }

        // Hold final frame: no visual change, only consumes scroll time before unpin
        tl.to(
          pinEl,
          { opacity: 1, duration: HOLD_AFTER_LAST_UNITS, ease: "none" },
          numExits,
        );

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <DoubleCurves
      up
      className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_4%,100%_0,100%_97%,0_100%)]"
      innerClassName="-rotate-6 md:-rotate-3 lg:-rotate-3 xl:-rotate-2">
      <section
        ref={containerRef}
        className="bg-tertiary relative pt-6 pb-20 lg:py-30">
        <Container>
          {/* Section Heading — desktop only, mobile heading lives inside the pin */}
          <div className="hidden md:block text-center mb-16">
            <HeadingTwo span="OFFER" ref={headingRef}>
              {" "}
              WHAT WE
            </HeadingTwo>
          </div>

          {/* ── MOBILE: card stack ─────────────────────────────────────────
               stackPinRef wraps heading + cards so BOTH stay visible
               while the pin is active. Pin triggers when this div hits
               the top of the viewport.
          ─────────────────────────────────────────────────────────────── */}
          <div className="md:hidden">
            <div
              ref={stackPinRef}
              className="relative flex flex-col items-center min-h-[100dvh]">
              {/* Top padding when pinned (flush to viewport top) — centers the block visually */}
              <div className="shrink-0 w-full pt-16 pb-5 text-center px-2 sm:pt-20">
                <HeadingTwo span="OFFER"> WHAT WE</HeadingTwo>
              </div>

              {/* Stack vertically + horizontally centered in remaining space */}
              <div className="relative flex-1 w-full flex items-center justify-center px-2 pb-6 min-h-0">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    ref={(el) => {
                      stackCardRefs.current[index] = el;
                    }}
                    className="absolute w-[85vw] sm:w-[70vw] bg-black rounded-2xl overflow-hidden border border-white/10"
                    style={{ willChange: "transform, opacity" }}>
                    <Link
                      href={service.link}
                      aria-label={service.title}
                      className="absolute inset-0 z-10"
                    />

                    {/* Number */}
                    <div className="px-7 pt-7 pb-3">
                      <span className="text-secondary font-primary font-medium text-[20px]">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="px-7 mb-4">
                      <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#111] via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-10 pb-10">
                      <h3 className="text-white mb-3 font-primary font-bold text-sm tracking-wide">
                        {service.title}
                      </h3>
                      <div className="flex gap-3 items-center justify-between">
                        <p className="text-white/50 text-sm leading-relaxed w-[65%]">
                          {service.description}
                        </p>
                        <button className="w-10 h-10 shrink-0 rounded-full border border-white/20 flex items-center justify-center">
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-secondary">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.32725 18.4846C4.90706 18.027 4.93743 17.3153 5.3951 16.8951L17.5493 5.736C18.007 5.31581 18.7187 5.34619 19.1389 5.80386C19.5591 6.26152 19.5287 6.97321 19.071 7.3934L6.91679 18.5525C6.45912 18.9727 5.74744 18.9423 5.32725 18.4846Z"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.64913 6.10673C7.67563 5.48597 8.20036 5.0042 8.82112 5.0307L18.3584 5.43778C18.9791 5.46433 19.4608 5.98906 19.4344 6.60978L19.0273 16.147C19.0007 16.7678 18.476 17.2495 17.8553 17.2231C17.2346 17.1965 16.7528 16.6718 16.7793 16.0511L17.1384 7.63779L8.72512 7.27869C8.10441 7.25215 7.62268 6.72745 7.64913 6.10673Z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── DESKTOP: original grid (COMPLETELY UNTOUCHED) ─────────────── */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                ref={(el) => {
                  methodsRef.current[index] = el;
                }}
                key={index}
                className="group relative bg-black py-7 pl-7 group hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300">
                <Link
                  href={service.link}
                  aria-label={service.title}
                  className="absolute inset-0 z-10"
                />

                {/* Number Label */}
                <div className=" text-[20px] mb-3">
                  <span className="text-secondary font-primary font-medium">
                    0{index + 1}
                  </span>
                </div>

                {/* Image */}
                <div className="pr-7 mb-4">
                  <div className="relative w-full h-[250px] rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#111] via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="pr-7">
                  <h3 className="text-white mb-4 font-primary font-bold text-sm md:text-base tracking-wide">
                    {service.title}
                  </h3>
                  <div className="flex gap-3 items-center justify-between">
                    <p className="text-white/50 text-sm leading-relaxed w-[60%]">
                      {service.description}
                    </p>

                    {/* Arrow Icon */}
                    <div className="pt-2">
                      <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60  group-hover:border-white group-hover:text-primary transition-all duration-300 group-hover:bg-white">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-secondary transition-all duration-150 group-hover:fill-[#328A99]">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.32725 18.4846C4.90706 18.027 4.93743 17.3153 5.3951 16.8951L17.5493 5.736C18.007 5.31581 18.7187 5.34619 19.1389 5.80386C19.5591 6.26152 19.5287 6.97321 19.071 7.3934L6.91679 18.5525C6.45912 18.9727 5.74744 18.9423 5.32725 18.4846Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.64913 6.10673C7.67563 5.48597 8.20036 5.0042 8.82112 5.0307L18.3584 5.43778C18.9791 5.46433 19.4608 5.98906 19.4344 6.60978L19.0273 16.147C19.0007 16.7678 18.476 17.2495 17.8553 17.2231C17.2346 17.1965 16.7528 16.6718 16.7793 16.0511L17.1384 7.63779L8.72512 7.27869C8.10441 7.25215 7.62268 6.72745 7.64913 6.10673Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </DoubleCurves>
  );
};

export default ServicesSection;
