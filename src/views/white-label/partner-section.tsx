"use client";

import Wrapper from "@/components/ui/wrapper";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PartnerReason = {
  title: string;
  description: string;
  image: string;
};

const partnerReasons: PartnerReason[] = [
  {
    title: "We Understand Agency Workflows",
    description:
      "We have worked inside agency relationships before. We understand how agencies sell, how they manage clients, and how they protect their positioning. We are not a freelancer who needs hand-holding. We are a professional execution partner who integrates cleanly into your operation and makes you look good.",
    image: "/website/choose-us.webp",
  },
  {
    title: "Full-Stack Capability Under One Roof",
    description:
      "Most white label options are specialists - they do SEO, or they do web design, or they do ads. HTSOL delivers all of it. That means your agency can offer a complete digital service to your clients without assembling a different partner for each discipline. One relationship. Full capability.",
    image: "/website/full-development.webp",
  },
  {
    title: "Quality That Protects Your Reputation",
    description:
      "We only produce work we would be comfortable putting our own name on, which means it is work you can comfortably put yours on. We do not cut corners to hit a price point. If a project requires more time to do it right, we communicate that early, not after we have delivered something substandard.",
    image: "/website/performance-first.webp",
  },
  {
    title: "Canada-Based Strategy, Global Delivery",
    description:
      "HTSOL is based in Mississauga, Ontario. Our strategic oversight is Canadian - we understand Canadian clients, Canadian compliance, and the Canadian market. Our delivery team operates internationally, which gives us the capacity to scale with your agency's needs without inflating your costs.",
    image: "/location-agency.webp",
  },
  {
    title: "No Conflicts. Ever.",
    description:
      "We do not take on direct clients in the same markets as our agency partners without prior agreement. We do not approach your clients independently. We do not use the work we produce for you in our own portfolio without explicit permission. Your clients are your clients. That boundary is absolute.",
    image: "/website/clear-transparent.webp",
  },
];

const PartnerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null,
  );
  const imageRef = useRef<HTMLDivElement | null>(null);
  const activeReason = partnerReasons[activeIndex];

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
        duration: 0.42,
        ease: "power2.out",
        onComplete: () => setSlideDirection(null),
      },
    );
  }, [activeIndex, slideDirection]);

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-[-1%] top-[2px] z-10 h-[8px] w-[102%] origin-left -rotate-[0.55deg] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] animate-pulse sm:h-[9px] lg:h-[10px]"
        aria-hidden
      />

      <section className="bg-black py-20 sm:py-24 lg:py-28">
        <Wrapper>
          <div className="mx-auto max-w-[1280px]">
            <div className="mx-auto max-w-[975px] text-center">
              <p className="inline-block bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text font-primary text-[16px] font-semibold uppercase leading-8 tracking-[0] text-transparent sm:text-[18px] lg:text-[20px]">
                Quality You Can Stand Behind. Reliability You Can Count On.
              </p>

              <h2 className="mx-auto mt-4 max-w-[975px] font-primary text-[31px] font-semibold uppercase leading-[1.04] tracking-[-0.04em] text-white sm:text-[38px] lg:text-[48px] lg:leading-[0.96]">
                Why Agencies Choose HTSOL Inc. As Their White Label Partner
              </h2>
            </div>

            <div className="mt-10 h-[1px] w-full bg-white lg:mt-12" />

            <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-[minmax(0,470px)_minmax(460px,1fr)] lg:justify-between lg:gap-16">
              <div className="order-2 flex max-w-[470px] flex-col gap-10 lg:order-1 lg:gap-11">
                {partnerReasons.map((reason, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={reason.title}
                      type="button"
                      onClick={() => handleSelect(index)}
                      className="cursor-pointer text-left transition-colors"
                    >
                      <h3
                        className={`font-primary text-[18px] font-semibold uppercase leading-[1.08] tracking-[-0.02em] sm:text-[19px] lg:text-[21px] ${
                          isActive ? "text-white" : "text-white/48"
                        }`}
                      >
                        {reason.title}
                      </h3>

                      <p
                        className={`mt-3 max-w-[430px] text-[13px] leading-[1.58] sm:text-[14px] lg:text-[14px] ${
                          isActive ? "text-white/76" : "text-white/40"
                        }`}
                      >
                        {reason.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="order-1 lg:order-2 lg:sticky lg:top-28">
                <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[22px] bg-[#191919]">
                  <div ref={imageRef} className="relative aspect-[560/410]">
                    <Image
                      src={activeReason.image}
                      alt={activeReason.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default PartnerSection;
