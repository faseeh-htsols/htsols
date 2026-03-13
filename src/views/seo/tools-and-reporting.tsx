"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const WHY_CHOOSE_ITEMS = [
    {
        heading: "SEO Health Check",
        description:
            "Technical and on-page diagnostics identifying crawl errors, indexing issues, speed gaps, and missed opportunities.",
        image: "/seo-bannerr.webp",
    },
    {
        heading: "Keyword & Content Map",
        description:
            "A plan connecting keywords to pages so your content matches real search intent, not assumptions.",
        image: "/seo-service-img.webp",
    },
    {
        heading: "Local Visibility Tracker",
        description:
            "Monitor map rankings and location-based searches across Canadian cities and service areas.",
        image: "/seo-services.webp",
    },
    {
        heading: "Performance Dashboard & Monthly Reporting",
        description:
            "Track rankings, traffic, conversions, and lead quality with clear explanations of what changed and what comes next.",
        image: "/seo-ball.webp",
    },
];

const ToolsAndReporting = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
        null,
    );
    const activeItem = WHY_CHOOSE_ITEMS[activeIndex];
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

    return (
        <section className="py-20 bg-tertiary">
            <Container>
                <div className="text-center mb-10 pb-5 border-b border-white">
                    <p className="uppercase tracking-widest mb-5 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block  font-primary">
                        Tools and Reporting That Keep SEO Accountable
                    </p>

                    <HeadingTwo className="text-center">
                        Make Better Marketing Decisions With Real Data
                    </HeadingTwo>

                    <p className="mt-5 text-white max-w-5xl mx-auto">
                        SEO works best when structured and measurable. We follow a practical workflow supported by reliable tools. Depending on your needs, your campaign may include:
                    </p>
                </div>

                <div className="md:hidden">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={16}
                        pagination={{ clickable: true }}
                        className="seo-tools-mobile-swiper [&_.swiper-pagination]:!static [&_.swiper-pagination]:!mt-4"
                    >
                        {WHY_CHOOSE_ITEMS.map((item) => (
                            <SwiperSlide key={item.heading}>
                                <div className="rounded-2xl bg-[#191919] border border-white/10 overflow-hidden">
                                    <div className="p-5 pb-4">
                                        <h3 className="font-primary font-medium uppercase text-base tracking-wide text-white">
                                            {item.heading}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-white/80">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="relative w-full aspect-4/3 border-t border-white/10">
                                        <Image
                                            src={item.image}
                                            alt={item.heading}
                                            fill
                                            className="object-cover"
                                            sizes="100vw"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="mt-6 flex justify-center">
                        <Button href="/contact-us" variant="outline">
                            LEARN HOW OUR SEO REPORTING WORKS
                        </Button>
                    </div>
                </div>

                <div className="hidden md:grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
                    <div className="flex flex-col gap-10">
                        {WHY_CHOOSE_ITEMS.map((item, index) => (
                            <button
                                key={item.heading}
                                type="button"
                                onClick={() => handleSelect(index)}
                                className="text-left transition-colors px-1">
                                <h3
                                    className={`font-primary font-medium uppercase text-sm sm:text-base md:text-lg tracking-wide ${activeIndex === index ? "text-white" : "text-white/80"
                                        }`}>
                                    {item.heading}
                                </h3>
                                <p
                                    className={`mt-2 text-xs sm:text-sm leading-relaxed max-w-xl ${activeIndex === index ? "text-white" : "text-white/70"
                                        }`}>
                                    {item.description}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* Right: image that changes with selection + CTA */}
                    <div>
                        <div className="relative w-full aspect-4/3 lg:aspect-5/4 rounded-2xl bg-[#191919] overflow-hidden border border-white/10">
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
                        <div className="mt-6 flex justify-center lg:justify-start">
                            <Button href="/contact-us" variant="outline">
                                LEARN HOW OUR SEO REPORTING WORKS
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ToolsAndReporting;
