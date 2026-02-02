"use client";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef, useState } from "react";
import PopUp from "@/components/ui/popup";
const NoLimitations = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const rightRef = useRef<null | HTMLDivElement>(null);
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
    { scope: containerRef },
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
    <div className="py-10 [clip-path:polygon(0_0,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_97%,0_100%)] ">
      <Container>
        <div className="">
          <div className="flex flex-col lg:flex-row gap-6 pb-6 border-b border-white">
            <HeadingTwo className="grow">No Limitations In CGI</HeadingTwo>
            <div className="lg:w-[40%]">
              <p>
                At our professional CGI agency, photographic skills and digital
                artistry are collaborative teamwork in action.
              </p>
            </div>
          </div>
          <div className="flex pt-8 gap-14 justify-between" ref={containerRef}>
            <div className="w-[48%]">
              <div className="flex h-screen justify-center flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Burger O Clock
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div>
                  <button
                    onClick={() => openPopup("/cgi1.mp4")}
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
              <div className="flex h-screen justify-center flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Burger O Clock
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex h-screen justify-center flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Burger O Clock
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex h-screen justify-center flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Burger O Clock
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex h-screen justify-center flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Burger O Clock
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div
              className="relative w-1/2 h-screen grow flex items-center"
              ref={rightRef}
            >
              <div className="relative w-[40vw] h-[30vw] overflow-hidden">
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
