"use client";
import CircularText from "@/components/ui/CircularText";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { WEBSITE_NEEDS_BUISNESS } from "@/constants";
import Image from "next/image";
import React, { useRef } from "react";
import type { AnimationItem } from "lottie-web";
gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LottiePlayer from "@/components/ui/lottie-player";

const NeedsBuisness = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lottieRefs = useRef<(AnimationItem | null)[]>([]);
  const readyCount = useRef(0);
  const handleLottieReady = (index: number) => (anim: AnimationItem) => {
    lottieRefs.current[index] = anim;

    // Attach a ScrollTrigger to the card (reliable height)
    const triggerEl = cardsRef.current[index];
    if (triggerEl) {
      ScrollTrigger.create({
        trigger: triggerEl,
        start: "top 90%",
        onEnter: () => anim.goToAndPlay(0, true), // play full
        onLeaveBack: () => anim.goToAndStop(0, true), // reset when scrolling back
      });
    }

    // Once all lotties are ready, refresh positions once
    readyCount.current += 1;
    // if (readyCount.current === lottieRefs.current.length) {
    //   // small delay to ensure DOM & triggers are in place
    //   gsap.delayedCall(0.05, () => ScrollTrigger.refresh());
    // }
  };
  return (
    <div className="bg-tertiary py-32 relative  -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>
      <Container>
        <div className="flex flex-col gap-12">
          <HeadingTwo className="text-center">
            Why Your business needs a <br /> website?
          </HeadingTwo>
          <div>
            <p className="text-center">
              In today’s digital world, a strong online presence isn’t optional
              — it’s how patients find, compare, and choose their dentist.
              Without a professional, easy-to-navigate website, even the best
              clinics risk being overlooked. A great dental website builds
              credibility, showcases your expertise, and makes it effortless for
              patients to get in touch or book an appointment. It’s your 24/7
              receptionist, treatment showcase, and marketing engine — all in
              one place.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {WEBSITE_NEEDS_BUISNESS.map((item, index) => (
              <div
                key={item.heading}
                className="rounded-[20px] group p-px bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
              >
                <div className="p-2 rounded-[20px] bg-tertiary">
                  <div className="flex rounded-[20px] flex-col gap-5 py-10 items-center bg-black transition-all duration-200 group-hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] ">
                    <div className="w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center">
                      {/* <Image
                        width={27}
                        height={34}
                        src={item.image}
                        alt={item.heading}
                        className="w-10 h-10"
                      /> */}
                      <LottiePlayer
                        src={item.image} // e.g. "/search_17569494_edited.json"
                        loop={true}
                        autoplay={true}
                        className="w-13 h-13"
                        onReady={handleLottieReady(index)}
                      />
                    </div>
                    <h3
                      className="uppercase text-center font-primary text-[20px]"
                      dangerouslySetInnerHTML={{ __html: item.heading }}
                    ></h3>
                    <p className="text-center">{item.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:mt-0 mt-12">
            <CircularText />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NeedsBuisness;
