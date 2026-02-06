"use client";

import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const IMAGES_CLIENTS_CGI = [
  { image: "/cgi/gendiwa-design.png", alt: "Gendwa design" },
  { image: "/cgi/virefori.png", alt: "virefori" },
  { image: "/cgi/loka-oma.png", alt: "loka-oma" },
  { image: "/cgi/one-stup.png", alt: "one-stup" },
  { image: "/cgi/gendiwa-design.png", alt: "Gendwa design" },
  { image: "/cgi/virefori.png", alt: "virefori" },
  { image: "/cgi/loka-oma.png", alt: "loka-oma" },
  { image: "/cgi/one-stup.png", alt: "one-stup" },
];

const OurClients = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !headingRef.current) return;

      const isDev = process.env.NODE_ENV !== "production";
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) return;

      const q = gsap.utils.selector(containerRef);
      const cards = q("[data-client-card]");

      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      // Split heading once, and revert on cleanup
      const split = new SplitType(headingRef.current, {
        types: isMobile ? "words" : "chars",
      });
      const targets = isMobile ? split.words : split.chars;

      // Heading animation (single trigger)
      gsap.from(targets, {
        x: 16,
        opacity: 0,
        duration: 0.8,
        stagger: isMobile ? 0.05 : 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          end: "bottom 60%",
          // markers: isDev,
          once: true,
          invalidateOnRefresh: true,
        },
      });

      // Cards: batch = fewer triggers + faster
      ScrollTrigger.batch(cards, {
        start: "top 90%",
        end: "bottom 60%",
        // markers: isDev,
        once: true,
        onEnter: (batch) => {
          gsap.from(batch, {
            y: 24,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            overwrite: true,
          });
        },
      });

      // SplitType changes DOM -> refresh positions
      ScrollTrigger.refresh();

      // Cleanup (IMPORTANT)
      return () => {
        split.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="py-24 relative bg-tertiary -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
    >
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
        bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
      />

      <Container>
        <div className="flex flex-col gap-10">
          <HeadingTwo ref={headingRef} className="">
            OUR CLIENTS
          </HeadingTwo>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {IMAGES_CLIENTS_CGI.map((item, index) => (
              <div
                key={index}
                data-client-card
                className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] rounded-lg p-0.5"
              >
                <div className="bg-black py-10 flex justify-center items-center rounded-lg">
                  <Image
                    src={item.image}
                    width={400}
                    height={400}
                    className="w-[75%] h-10 object-contain"
                    alt={item.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurClients;
