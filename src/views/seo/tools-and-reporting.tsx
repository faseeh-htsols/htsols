"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const STACK_STATES = [
    { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
    { x: 12, y: 8, rotation: 5, scale: 0.97, opacity: 0.85 },
    { x: 22, y: 14, rotation: 9, scale: 0.94, opacity: 0.7 },
    { x: 30, y: 18, rotation: 13, scale: 0.91, opacity: 0.55 },
];
const VISIBLE_DEPTH = STACK_STATES.length;

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
    const stackPinRef = useRef<HTMLDivElement | null>(null);
    const stackCardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(max-width: 767px)", () => {
            const pinEl = stackPinRef.current;
            if (!pinEl) return;

            const cardEls = stackCardRefs.current.filter(Boolean) as HTMLDivElement[];
            const numCards = cardEls.length;
            if (numCards === 0) return;

            const numExits = numCards - 1;

            cardEls.forEach((card, i) => {
                const stateIdx = Math.min(i, VISIBLE_DEPTH - 1);
                const state = STACK_STATES[stateIdx];
                gsap.set(card, {
                    x: state.x,
                    y: state.y,
                    rotation: state.rotation,
                    scale: state.scale,
                    opacity: i < VISIBLE_DEPTH ? state.opacity : 0,
                    zIndex: numCards - i,
                    transformOrigin: "bottom center",
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinEl,
                    // Pin after cards are fully in view (accounts for fixed mobile header)
                    start: "top 96px",
                    end: `+=${Math.max(1, numExits) * 650}`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1.1,
                    anticipatePin: 1,
                },
            });

            for (let step = 0; step < numExits; step++) {
                tl.to(
                    cardEls[step],
                    {
                        x: "-115%",
                        opacity: 0,
                        rotation: -10,
                        duration: 1,
                        ease: "power2.inOut",
                    },
                    step,
                );

                for (let j = step + 1; j < numCards; j++) {
                    const newPos = j - step - 1;
                    const stateIdx = Math.min(newPos, VISIBLE_DEPTH - 1);
                    const target = STACK_STATES[stateIdx];

                    tl.to(
                        cardEls[j],
                        {
                            x: target.x,
                            y: target.y,
                            rotation: target.rotation,
                            scale: target.scale,
                            opacity: newPos < VISIBLE_DEPTH ? target.opacity : 0,
                            duration: 1,
                            ease: "power2.inOut",
                        },
                        step,
                    );
                }
            }

            return () => {
                tl.scrollTrigger?.kill();
                tl.kill();
            };
        });

        return () => mm.revert();
    }, []);

    return (
        <section className="py-20 bg-tertiary">
            <Container>
                <div className="text-center mb-10 pb-5 border-b border-white">
                <p className="uppercase tracking-widest mb-5 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block  font-primary">
                       Make Better Marketing Decisions With Real Data
                       </p>
                    <HeadingTwo className="text-center ">
                        Tools and Reporting That Keep SEO Accountable
                    </HeadingTwo>
                   
                    <p className="mt-5 text-white max-w-5xl mx-auto">
                        SEO works best when structured and measurable. We follow a practical workflow supported by reliable tools. Depending on your needs, your campaign may include:
                    </p>
                </div>

                <div className="md:hidden">
                    <div ref={stackPinRef} className="relative" style={{ height: "100svh", minHeight: "620px" }}>
                        <div className="relative h-full flex items-center justify-center pt-4">
                            {WHY_CHOOSE_ITEMS.map((item, index) => (
                                <div
                                    key={item.heading}
                                    ref={(el) => {
                                        stackCardRefs.current[index] = el;
                                    }}
                                    className="absolute w-[88vw] max-w-[430px] rounded-2xl bg-[#191919] border border-white/10 overflow-hidden"
                                    style={{ willChange: "transform, opacity" }}
                                >
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
                            ))}
                        </div>
                    </div>
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
                                className="text-left transition-colors px-1 cursor-pointer">
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
