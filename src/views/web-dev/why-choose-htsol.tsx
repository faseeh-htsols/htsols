"use client";

import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";
import PopUp from "@/components/ui/popup-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import DoubleCurves from "@/components/ui/double-curves";

interface whyChooseCards {
  id: string;
  heading: string;
  description: string;
  image: string;
};

interface WhyChooseData {
  highLight?: string;
  bgColor?: boolean;
  title: string;
  cards: whyChooseCards[];
  curveLine?: boolean;
};

interface WhyChooseProps {
  data: WhyChooseData;
};

gsap.registerPlugin(ScrollTrigger);


const MOBILE_SLIDE_VIDEO_DELAY_MS = 450;

const WhyChooseHtsol = ({ data }: WhyChooseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null,
  );
  const activeItem = data.cards[activeIndex];
  const imageRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setSlideDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!slideDirection || !imageRef.current) return;

    const fromX = slideDirection === "right" ? 100 : -100;

    gsap.fromTo(
      imageRef.current,
      { xPercent: fromX, autoAlpha: 0.6 },
      {
        xPercent: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => setSlideDirection(null),
      },
    );
  }, [activeIndex, slideDirection]);


  const mainRef = useRef<null | HTMLDivElement>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const rightRef = useRef<null | HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLHeadingElement | null>(null);
  // useGSAP(() => {
  //   const photos = gsap.utils.toArray(".photos:not(:first-child)");
  //   gsap.set(photos, { yPercent: 100 });
  //   const animation = gsap.to(photos, {
  //     yPercent: 0,
  //     duration: 1,
  //     stagger: 1,
  //   });
  //   ScrollTrigger.create({
  //     trigger: containerRef.current,
  //     start: "top top",
  //     end: "bottom bottom",
  //     pin: rightRef.current,
  //     animation: animation,
  //     scrub: true,
  //   });
  // });
  useGSAP(
    () => {
      const photos = gsap.utils.toArray<HTMLElement>(".photos");
      const mm = gsap.matchMedia();
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const split = new SplitType(headingRef.current!, {
        types: isMobile ? "words" : "words",
      });
      const targets = isMobile ? split.words : split.chars;
      const splitPara = new SplitType(paraRef.current!, {
        types: isMobile ? "words" : "words",
      });
      const targetsPara = isMobile ? splitPara.words : splitPara.chars;
      gsap.from(targets, {
        x: 2,
        duration: 1.8,
        opacity: 0,
        stagger: 0.06,
        ease: "power1.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 100%",
          end: "bottom bottom",
        },
      });
      gsap.from(targetsPara, {
        x: -2,
        opacity: 0,
        stagger: 0.006,
        duration: 1.2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 100%",
          end: "bottom bottom",
          // markers: true,
        },
      });
      // Tailwind lg = 1024px by default
      mm.add("(min-width: 1024px)", () => {
        // base states
        gsap.set(photos, { opacity: 1 });
        gsap.set(photos.slice(1), { yPercent: 100 });

        const tl = gsap.timeline({ defaults: { ease: "none" } });

        // step-by-step: bring next in + dim previous
        for (let i = 1; i < photos.length; i++) {
          tl.to(
            photos[i - 1],
            { opacity: 0.3, duration: 1 },
            `step${i}`, // same label as next animation
          ).to(photos[i], { yPercent: 0, duration: 1 }, `step${i}`);
        }

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: rightRef.current,
          animation: tl,
          scrub: true,
          // invalidateOnRefresh: true,
          pinSpacing: false,
        });
      });
    },
    { scope: mainRef },
  );
  const [open, setOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const openPopup = (src: string) => {
    setActiveSrc(src);
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
    setActiveSrc(null);
  };

  const mobileVideoPlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const syncMobileSliderVideos = useCallback((swiper: SwiperInstance) => {
    if (mobileVideoPlayTimerRef.current !== null) {
      clearTimeout(mobileVideoPlayTimerRef.current);
      mobileVideoPlayTimerRef.current = null;
    }

    swiper.slides.forEach((slideEl) => {
      const video = slideEl.querySelector<HTMLVideoElement>("video");
      if (!video) return;
      if (!slideEl.classList.contains("swiper-slide-active")) {
        video.pause();
      }
    });

    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeVideo =
      activeSlide?.querySelector<HTMLVideoElement>("video") ?? null;
    if (activeVideo) {
      mobileVideoPlayTimerRef.current = setTimeout(() => {
        mobileVideoPlayTimerRef.current = null;
        void activeVideo.play();
      }, MOBILE_SLIDE_VIDEO_DELAY_MS);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (mobileVideoPlayTimerRef.current !== null) {
        clearTimeout(mobileVideoPlayTimerRef.current);
      }
    };
  }, []);

  const content = (
    <section ref={mainRef} className={`py-10 ${data.curveLine ? "lg:pt-30" : "lg:pt-10"} lg:pb-0 ${data.bgColor ? "bg-black" : "bg-tertiary"}`}>
      <Container>
        {data.highLight && (
          <p className=" uppercase tracking-widest mb-6 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent text-[18px] text-center">
            {data.highLight}
          </p>
        )}
        <HeadingTwo className="text-center pb-4 border-b border-white mb-10 lg:mb-0" ref={headingRef}>
          {data.title}
        </HeadingTwo>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start" ref={containerRef}>

          <div className="">
            <div className="no-limitations-mob-slider overflow-hidden lg:hidden">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={24}
                rewind
                roundLengths
                speed={480}
                autoHeight
                autoplay={{
                  delay: 5500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  waitForTransition: true,
                }}
                onSwiper={syncMobileSliderVideos}
                onSlideChangeTransitionEnd={syncMobileSliderVideos}
                className="pb-10!"
              >
                {data.cards.map((item) => (
                  <SwiperSlide key={item.id} className="h-auto!">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[20px] uppercase font-primary">
                        {item.heading}
                      </h3>
                      <Image
                        src={item.image}
                        alt={item.heading}
                        width={300}
                        height={300}
                        className="h-[300px] w-full rounded-2xl object-cover"
                      />
                      <p >{item.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="hidden flex-col gap-8 lg:flex">
              {data.cards.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center gap-4 lg:h-screen"
                >
                  <h3 className="text-[20px] uppercase font-primary">
                    {item.heading}
                  </h3>
                  <p className=" leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative lg:h-screen grow hidden lg:flex items-center"
            ref={rightRef}
          >
            <div className="relative w-[40vw] h-[30vw]  rounded-2xl bg-[#191919] overflow-hidden border border-white/10">
              {data.cards.map((item) => (
                <div
                  key={item.id}
                  className="photos absolute inset-0 h-full w-full"
                >
                  <Image
                    src={item.image}
                    alt={item.heading}
                    fill
                    className="object-cover h-full min-w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <style jsx global>{`
        .no-limitations-mob-slider .swiper-wrapper {
          align-items: flex-start;
        }
        .no-limitations-mob-slider .swiper-slide {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .no-limitations-mob-slider .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.45);
        }
        .no-limitations-mob-slider .swiper-pagination-bullet-active {
          background: #00a1a5;
          opacity: 1;
        }
      `}</style>
    </section>
  );

  return data.curveLine ? (
    <DoubleCurves
      up
      className="-mt-[12%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[6%] xl:-mt-[8%] [clip-path:polygon(0_1.5%,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)]"
      innerClassName="-rotate-2! top-2! md:top-1! lg:md:top-0! h-[1.5%]! md:-rotate-1! md:h-[1.5%]! lg:-rotate-3! lg:h-[1.5%]! xl:-rotate-3! xl:h-[1.5%]!">
      {content}
    </DoubleCurves>
  ) : (
    content
  );
};

export default WhyChooseHtsol;
