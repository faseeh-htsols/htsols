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

gsap.registerPlugin(ScrollTrigger);

const CGI_CASE_STUDIES = [
  {
    id: "pizzahut",
    title: "Pizza Hut - Hut Hits 10",
    videoSrc: "/pizzahut.mp4",
    youtubeUrl: "https://www.youtube.com/shorts/nvr9g1-7S8s",
    description:
      "We created an explosive CGI campaign celebrating Pizza Hut's 10th branch launch in Pakistan. Our 3D animations featured pizzas erupting from iconic Pakistani landmarks, blending local culture with global brand energy. The campaign showcased their signature menu items in gravity-defying, hyperrealistic scenarios that captured the excitement of expansion. Through dynamic motion graphics and photorealistic renders, we transformed a simple branch opening into a viral moment, generating massive social media buzz and driving foot traffic to all locations across the country.",
  },
  {
    id: "kiwai",
    title: "Kiwai Skincare",
    videoSrc: "/kiwai.mp4",
    youtubeUrl: "https://www.youtube.com/shorts/nn4cC3qRik0",
    description:
      "For Kiwai, an international herbal skincare brand, we developed a stunning CGI series that brought their natural ingredients to life. Our 3D animations visualized botanical extracts transforming into luxurious products, with organic textures flowing seamlessly through ethereal environments. The photorealistic renders highlighted the purity and premium quality of their skin and hair care line while maintaining an elegant, spa-like aesthetic. This campaign elevated their brand positioning in competitive markets, communicating both efficacy and natural beauty through captivating visual storytelling that resonated globally.",
  },
  {
    id: "redbull",
    title: "Red Bull - CGI Gives You Wings",
    videoSrc: "/redbull.mp4",
    youtubeUrl: "https://www.youtube.com/shorts/t105qp6q2fY",
    description:
      "An unofficial passion project that reimagines Red Bull's iconic 'Gives You Wings' tagline through the lens of limitless CGI creativity. We crafted explosive 3D animations featuring Red Bull cans soaring through impossible dimensions, breaking gravity, and defying physics in ways traditional photography never could. From cans erupting with energetic liquid wings to extreme sports scenarios rendered in hyperrealistic detail, this campaign demonstrates how CGI truly gives brands wings—unlimited creative freedom. The project showcases vibrant motion graphics, dynamic camera movements, and photorealistic product renders that capture Red Bull's high-energy essence while proving that in the world of CGI, the only limit is imagination.",
  },
  {
    id: "nayza",
    title: "Nayza Apparel",
    videoSrc: "/nayza.mp4",
    youtubeUrl: "https://www.youtube.com/shorts/BDOPnNwhHpU",
    description:
      "For Burger O'Clock's multi-branch expansion into a new city, we created a mouthwatering CGI campaign that made their burgers impossible to resist. Our 3D artists crafted hyperrealistic renders featuring their signature burgers in explosive, vibrant scenarios—from ingredients flying through the air to gravity-defying stack compositions. Each animation was optimized for social media virality, combining appetizing visuals with dynamic motion that stopped scrolls instantly. The campaign generated millions of impressions organically, building massive anticipation and ensuring packed locations from day one of the new launches.",
  },
  {
    id: "boc",
    title: "BOC",
    videoSrc: "/boc.mp4",
    youtubeUrl: "https://www.youtube.com/shorts/BDOPnNwhHpU",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, neque? Fugiat recusandae laboriosam assumenda ipsa, dolorum amet quo soluta eligendi provident commodi ducimus voluptatum eum velit, culpa quis praesentium unde.",
  },
  {
    id: "enviro",
    title: "Enviro",
    videoSrc: "/enviro.mp4",
    youtubeUrl: "https://www.youtube.com/shorts/BDOPnNwhHpU",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, neque? Fugiat recusandae laboriosam assumenda ipsa, dolorum amet quo soluta eligendi provident commodi ducimus voluptatum eum velit, culpa quis praesentium unde.",
  },
  {
    id: "kaybees",
    title: "Kaybees",
    videoSrc: "/kaybees.mp4",
    youtubeUrl: "https://www.youtube.com/shorts/BDOPnNwhHpU",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, neque? Fugiat recusandae laboriosam assumenda ipsa, dolorum amet quo soluta eligendi provident commodi ducimus voluptatum eum velit, culpa quis praesentium unde.",
  },
] as const;

/** Wait after slide is shown before playing video — avoids decode/layout fighting the Swiper transition */
const MOBILE_SLIDE_VIDEO_DELAY_MS = 450;

const NoLimitations = () => {
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

  return (
    <div
      ref={mainRef}
      className="py-24 lg:py-10 [clip-path:polygon(0_0,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_97%,0_100%)]"
    >
      <Container>
        <div className="">
          <div className="flex flex-col lg:flex-row gap-6 pb-6 border-b border-white">
            <HeadingTwo className="grow" ref={headingRef}>
              CGI Creates Viral Moments
            </HeadingTwo>
            <div className="lg:w-[40%]">
              <p ref={paraRef}>
                We’ve generated 20+ million organic views, turning brands into
                viral sensations overnight.
              </p>
            </div>
          </div>
          <div
            className="flex lg:flex-row flex-col pt-8 gap-14 justify-between"
            ref={containerRef}
          >
            <div className="lg:w-[48%]">
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
                  {CGI_CASE_STUDIES.map((item) => (
                    <SwiperSlide key={item.id} className="h-auto!">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-[20px] uppercase font-primary">
                          {item.title}
                        </h3>
                        <video
                          src={item.videoSrc}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="h-[300px] w-full rounded-2xl object-cover"
                        />
                        <p>{item.description}</p>
                        <div>
                          <button
                            type="button"
                            onClick={() => openPopup(item.youtubeUrl)}
                            className="flex cursor-pointer items-center gap-2 px-6 py-3 text-sm font-sans font-semibold uppercase rounded-full tracking-wider transition-all duration-300 border bg-transparent border-white/30 text-white hover:border-white hover:bg-white hover:text-black"
                          >
                            Watch Full video
                            <Image
                              src="/right-arrow-btn.webp"
                              alt=""
                              width={30}
                              height={30}
                              className="h-[30px] w-[30px]"
                            />
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="hidden flex-col gap-8 lg:flex">
                {CGI_CASE_STUDIES.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center gap-4 lg:h-screen"
                  >
                    <h3 className="text-[20px] uppercase font-primary">
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                    <div>
                      <button
                        type="button"
                        onClick={() => openPopup(item.youtubeUrl)}
                        className="flex cursor-pointer items-center gap-2 px-6 py-3 text-sm font-sans font-semibold uppercase rounded-full tracking-wider transition-all duration-300 border bg-transparent border-white/30 text-white hover:border-white hover:bg-white hover:text-black"
                      >
                        Watch Full video
                        <Image
                          src="/right-arrow-btn.webp"
                          alt=""
                          width={30}
                          height={30}
                          className="h-[30px] w-[30px]"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="relative lg:w-1/2 lg:h-screen grow hidden lg:flex items-center"
              ref={rightRef}
            >
              <div className="relative w-[40vw] h-[30vw] overflow-hidden rounded-lg">
                {CGI_CASE_STUDIES.map((item) => (
                  <div
                    key={item.id}
                    className="photos absolute inset-0 h-full w-full"
                  >
                    <video
                      src={item.videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full min-w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <PopUp open={open} src={activeSrc} onClose={closePopup} />

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
    </div>
  );
};

export default NoLimitations;
