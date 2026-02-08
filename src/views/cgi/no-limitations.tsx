"use client";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import PopUp from "@/components/ui/popup-youtube";
gsap.registerPlugin(ScrollTrigger);
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
  return (
    <div
      ref={mainRef}
      className="py-10 [clip-path:polygon(0_0,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_97%,0_100%)]"
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
            <div className="lg:w-[48%] lg:block flex flex-col gap-8">
              <div className="flex lg:h-screen justify-center flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Pizza Hut - Hut Hits 10
                </h3>
                <p>
                  We created an explosive CGI campaign celebrating Pizza
                  Hut&apos;s 10th branch launch in Pakistan. Our 3D animations
                  featured pizzas erupting from iconic Pakistani landmarks,
                  blending local culture with global brand energy. The campaign
                  showcased their signature menu items in gravity-defying,
                  hyperrealistic scenarios that captured the excitement of
                  expansion. Through dynamic motion graphics and photorealistic
                  renders, we transformed a simple branch opening into a viral
                  moment, generating massive social media buzz and driving foot
                  traffic to all locations across the country.
                </p>
                <div>
                  <button
                    onClick={() =>
                      openPopup("https://www.youtube.com/shorts/nvr9g1-7S8s")
                    }
                    className="flex cursor-pointer items-center gap-2 px-6 py-3 text-sm font-sans font-semibold uppercase rounded-full tracking-wider transition-all duration-300 border bg-transparent border-white/30 text-white hover:border-white hover:bg-white hover:text-black"
                  >
                    Watch Full video
                    <Image
                      src={"/right-arrow-btn.png"}
                      alt="aroow"
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                    />
                  </button>
                </div>
              </div>
              <div className="flex lg:h-screen justify-center flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Kiwai Skincare
                </h3>
                <p>
                  For Kiwai, an international herbal skincare brand, we
                  developed a stunning CGI series that brought their natural
                  ingredients to life. Our 3D animations visualized botanical
                  extracts transforming into luxurious products, with organic
                  textures flowing seamlessly through ethereal environments. The
                  photorealistic renders highlighted the purity and premium
                  quality of their skin and hair care line while maintaining an
                  elegant, spa-like aesthetic. This campaign elevated their
                  brand positioning in competitive markets, communicating both
                  efficacy and natural beauty through captivating visual
                  storytelling that resonated globally.
                </p>
                <div>
                  <button
                    onClick={() =>
                      openPopup("https://www.youtube.com/shorts/nn4cC3qRik0")
                    }
                    className="flex cursor-pointer items-center gap-2 px-6 py-3 text-sm font-sans font-semibold uppercase rounded-full tracking-wider transition-all duration-300 border bg-transparent border-white/30 text-white hover:border-white hover:bg-white hover:text-black"
                  >
                    Watch Full video
                    <Image
                      src={"/right-arrow-btn.png"}
                      alt="aroow"
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                    />
                  </button>
                </div>
              </div>
              <div className="flex lg:h-screen justify-center flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Red Bull - CGI Gives You Wings
                </h3>
                <p>
                  An unofficial passion project that reimagines Red Bull&apos;s
                  iconic &apos;Gives You Wings&apos; tagline through the lens of
                  limitless CGI creativity. We crafted explosive 3D animations
                  featuring Red Bull cans soaring through impossible dimensions,
                  breaking gravity, and defying physics in ways traditional
                  photography never could. From cans erupting with energetic
                  liquid wings to extreme sports scenarios rendered in
                  hyperrealistic detail, this campaign demonstrates how CGI
                  truly gives brands wings—unlimited creative freedom. The
                  project showcases vibrant motion graphics, dynamic camera
                  movements, and photorealistic product renders that capture Red
                  Bull&apos;s high-energy essence while proving that in the
                  world of CGI, the only limit is imagination.
                </p>
                <div>
                  <button
                    onClick={() =>
                      openPopup("https://www.youtube.com/shorts/t105qp6q2fY")
                    }
                    className="flex cursor-pointer items-center gap-2 px-6 py-3 text-sm font-sans font-semibold uppercase rounded-full tracking-wider transition-all duration-300 border bg-transparent border-white/30 text-white hover:border-white hover:bg-white hover:text-black"
                  >
                    Watch Full video
                    <Image
                      src={"/right-arrow-btn.png"}
                      alt="aroow"
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                    />
                  </button>
                </div>
              </div>
              <div className="flex lg:h-screen justify-center flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Nayza Apparel
                </h3>
                <p>
                  For Burger O&apos;Clock&apos;s multi-branch expansion into a
                  new city, we created a mouthwatering CGI campaign that made
                  their burgers impossible to resist. Our 3D artists crafted
                  hyperrealistic renders featuring their signature burgers in
                  explosive, vibrant scenarios—from ingredients flying through
                  the air to gravity-defying stack compositions. Each animation
                  was optimized for social media virality, combining appetizing
                  visuals with dynamic motion that stopped scrolls instantly.
                  The campaign generated millions of impressions organically,
                  building massive anticipation and ensuring packed locations
                  from day one of the new launches.
                </p>
                <div>
                  <button
                    onClick={() =>
                      openPopup("https://www.youtube.com/shorts/BDOPnNwhHpU")
                    }
                    className="flex cursor-pointer items-center gap-2 px-6 py-3 text-sm font-sans font-semibold uppercase rounded-full tracking-wider transition-all duration-300 border bg-transparent border-white/30 text-white hover:border-white hover:bg-white hover:text-black"
                  >
                    Watch Full video
                    <Image
                      src={"/right-arrow-btn.png"}
                      alt="aroow"
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="relative lg:w-1/2 lg:h-screen grow hidden lg:flex items-center"
              ref={rightRef}
            >
              <div className="relative w-[40vw] h-[30vw] overflow-hidden rounded-lg">
                <div className="photos absolute inset-0 w-full h-full">
                  <video
                    src="/cgi/kaybees.mp4"
                    autoPlay
                    muted
                    loop
                    className="min-w-full h-full object-cover"
                  ></video>
                </div>
                <div className="photos absolute inset-0 w-full h-full">
                  <video
                    src="/cgi2.mp4"
                    autoPlay
                    muted
                    loop
                    className="min-w-full h-full object-cover"
                  ></video>
                </div>
                <div className="photos absolute inset-0 w-full h-full">
                  <video
                    src="/cgi1.mp4"
                    autoPlay
                    muted
                    loop
                    className="min-w-full h-full object-cover"
                  ></video>
                </div>
                <div className="photos absolute inset-0 w-full h-full">
                  <video
                    src="/cgi2.mp4"
                    autoPlay
                    muted
                    loop
                    className="min-w-full h-full object-cover"
                  ></video>
                </div>
                <div className="photos absolute inset-0 w-full h-full">
                  <video
                    src="/cgi1.mp4"
                    autoPlay
                    muted
                    loop
                    className="min-w-full h-full object-cover"
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <PopUp open={open} src={activeSrc} onClose={closePopup} />
    </div>
  );
};

export default NoLimitations;
