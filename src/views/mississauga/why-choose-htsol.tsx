"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import gsap from "gsap";
import DoubleCurves from "@/components/ui/double-curves";

interface WhyChooseItem {
  heading: string;
  description: string;
  image: string;
}

interface WhyChooseData {
  data: {
    highlight: string;
    title: string;
    accordion: WhyChooseItem[];
  };
}

type StickyMode = "static" | "fixed" | "bottom";

const STICKY_TOP = 100;

const WhyChooseHtsol = ({ data }: WhyChooseData) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null,
  );

  const [stickyMode, setStickyMode] = useState<StickyMode>("static");
  const [stickyBox, setStickyBox] = useState({
    left: 0,
    width: 0,
    height: 0,
  });

  const activeItem = data.accordion[activeIndex];

  const imageRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    let rafId = 0;

    const updateSticky = () => {
      cancelAnimationFrame(rafId);

      rafId = window.requestAnimationFrame(() => {
        if (!rightColRef.current || !imageRef.current) return;

        const isDesktop = window.innerWidth >= 1024;
        const parentRect = rightColRef.current.getBoundingClientRect();
        const cardHeight = imageRef.current.offsetHeight;

        setStickyBox((prev) => {
          const next = {
            left: parentRect.left,
            width: parentRect.width,
            height: cardHeight,
          };

          if (
            prev.left === next.left &&
            prev.width === next.width &&
            prev.height === next.height
          ) {
            return prev;
          }

          return next;
        });

        if (!isDesktop) {
          setStickyMode((prev) => (prev === "static" ? prev : "static"));
          return;
        }

        let nextMode: StickyMode = "static";

        if (parentRect.top <= STICKY_TOP) {
          if (parentRect.bottom - STICKY_TOP <= cardHeight) {
            nextMode = "bottom";
          } else {
            nextMode = "fixed";
          }
        }

        setStickyMode((prev) => (prev === nextMode ? prev : nextMode));
      });
    };

    updateSticky();

    window.addEventListener("scroll", updateSticky, { passive: true });
    window.addEventListener("resize", updateSticky);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updateSticky);
      window.removeEventListener("resize", updateSticky);
    };
  }, []);

  const imageStyles: React.CSSProperties =
    stickyMode === "fixed"
      ? {
        position: "fixed",
        top: `${STICKY_TOP}px`,
        left: `${stickyBox.left}px`,
        width: `${stickyBox.width}px`,
        zIndex: 30,
      }
      : stickyMode === "bottom"
        ? {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        }
        : {
          position: "relative",
          width: "100%",
        };

  return (
    <DoubleCurves
      up
      className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
    >
      <section className="py-20 lg:py-40 bg-tertiary">
        <Container>
          <div className="flex flex-col justify-center items-center w-full pb-8 border-b border-white mb-16">
            <p className="uppercase tracking-widest mb-3 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block font-primary font-semibold">
              {data.highlight}
            </p>
            <HeadingTwo className="text-center md:max-w-[80%] ">
              {data.title}
            </HeadingTwo>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
            <div className="flex flex-col gap-20">
              {data.accordion.map((item, index) => (
                <button
                  key={item.heading}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className="text-left transition-colors px-1"
                >
                  <h3
                    className={`font-primary font-medium uppercase text-sm sm:text-base md:text-lg tracking-wide ${activeIndex === index ? "text-white" : "text-white/80"
                      }`}
                  >
                    {item.heading}
                  </h3>
                  <p
                    className={`mt-2 text-xs sm:text-sm leading-relaxed max-w-xl ${activeIndex === index ? "text-white" : "text-white/70"
                      }`}
                  >
                    {item.description}
                  </p>
                </button>
              ))}
            </div>

            <div ref={rightColRef} className="relative w-full self-stretch">
              {stickyMode !== "static" && stickyBox.height > 0 && (
                <div style={{ height: `${stickyBox.height}px` }} />
              )}

              <div
                style={imageStyles}
                className="aspect-4/3 lg:aspect-5/4 rounded-2xl bg-[#191919] overflow-hidden border border-white/10"
              >
                <div ref={imageRef} className="absolute inset-0">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </DoubleCurves>
  );
};

export default WhyChooseHtsol;