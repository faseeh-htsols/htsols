"use client";
import Container from "@/components/ui/container";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";
import { useRef } from "react";
import Button from "@/components/ui/Button";
const Banner = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  useGSAP(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const split = new SplitType(headingRef.current!, {
      types: isMobile ? "words" : "words",
    });
    const targets = isMobile ? split.words : split.words;
    gsap.from(targets, {
      x: 100,
      duration: 1.8,
      opacity: 0,
      stagger: 0.06,
      ease: "power1.out",
    });
  });
  return (
    <div
      ref={containerRef}
      className="bg-[url(/cgi/banner.png)] h-screen bg-center flex items-center relative pb-36 bg-cover  "
    >
      <div className="absolute top-20 left-0">
        <Image
          src={"/left-gradient.png"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <div className="absolute top-20 right-0">
        <Image
          src={"/right-gradient.png"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <Container>
        <div>
          <h1
            ref={headingRef}
            className="text-4xl mb-8 lg:text-6xl font-primary -mt-20 font-semibold text-white text-center uppercase"
          >
            Brands go viral with wild CGI & 3D Animations
          </h1>
        </div>
        <div className="flex justify-center">
          <Button href="/">View PitchDeck</Button>
        </div>
      </Container>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12">
        <video
          src="/cgi/outputiii.webm"
          className="w-[290px] z-1 relative h-[200px] object-contain"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
};

export default Banner;
