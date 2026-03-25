"use client";

import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const TOP_CARDS = [
    {
        heading: "Keyword Research & Strategy",
        para: "We analyse real search behaviour, evaluate competition, and create a realistic plan for long-term visibility.",
    },
    {
        heading: "Technical SEO",
        para: "We resolve crawlability issues, improve speed, optimise Core Web Vitals, fix broken links, and strengthen site structure. These improvements help search engines access your pages and give visitors a smoother experience.",
    },
    {
        heading: "On-Page SEO",
        para: "We improve headings, internal linking, metadata, and content structure so pages rank better and convert more visitors.",
    },
    {
        heading: "Local SEO",
        para: "We strengthen visibility within your service areas through Google Business Profile optimisation, local pages, citations, and review strategy.",
    },
    {
        heading: "Content Strategy & Copywriting",
        para: "We create and improve service and location pages designed to rank and drive action.",
    },
    {
        heading: "Link Building & Authority Growth",
        para: "We earn quality links through outreach and useful content. We avoid risky tactics that cause long-term damage.",
    },
    {
        heading: "Ecommerce SEO",
        para: "Optimised collection, product pages, and internal linking to grow organic sales.",
    },
    {
        heading: "Shopify SEO",
        para: "Technical cleanup, structure improvements, and conversion-focused optimisation for Shopify stores.",
    },
    {
        heading: "Franchise & Multi-Location SEO",
        para: "Scalable systems that maintain consistent branding while tracking performance per location.",
    },
];

const BOTTOM_LEFT_CARD = {
    heading: "AI Search Readiness",
    para: "We structure your content to remain discoverable across emerging AI-driven search experiences while maintaining strong Google fundamentals.",
};

const MOBILE_AUTOPLAY_DELAY = 5000;
const MOBILE_CARDS = [...TOP_CARDS, BOTTOM_LEFT_CARD];

// ── Dot geometry constants ────────────────────────────────────────────────────
const DOT_ACTIVE_W  = 40;  // px — active dot width
const DOT_INACTIVE_W = 20; // px — inactive dot width
const DOT_H          = 4;  // px
const DOT_GAP        = 4;  // px — gap between dots
const VISIBLE        = 10;  // how many dots show in the window

// Total width of the clipping window (always 5 slots, using inactive width)
const WINDOW_W = VISIBLE * DOT_INACTIVE_W + (VISIBLE - 1) * DOT_GAP;

// Compute translateX so the active dot is centered in the window
const getTranslate = (activeIdx: number, total: number): number => {
    // x-position of center of each dot
    const centers: number[] = [];
    let x = 0;
    for (let i = 0; i < total; i++) {
        const w = i === activeIdx ? DOT_ACTIVE_W : DOT_INACTIVE_W;
        centers.push(x + w / 2);
        x += w + DOT_GAP;
    }
    // shift so activeIdx center aligns with window center
    const windowCenter = WINDOW_W / 2;
    return windowCenter - centers[activeIdx];
};

const Services = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isPlaying, setIsPlaying]         = useState(true);
    const [progress, setProgress]           = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    // Progress bar animation
    useEffect(() => {
        if (!isPlaying) return;
        let frameId: number;
        const start = performance.now();
        const tick = (now: number) => {
            const pct = Math.min(((now - start) / MOBILE_AUTOPLAY_DELAY) * 100, 100);
            setProgress(pct);
            if (pct < 100 && isPlaying) frameId = requestAnimationFrame(tick);
        };
        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, [selectedIndex, isPlaying]);

    const handleTogglePlay = () => {
        const swiper = swiperRef.current;
        if (!swiper) return;
        if (isPlaying) {
            swiper.autoplay.stop();
            setIsPlaying(false);
        } else {
            swiper.autoplay.start();
            setIsPlaying(true);
            setProgress(0);
        }
    };

    const handleDotClick = (index: number) => {
        swiperRef.current?.slideToLoop(index);
    };

    const translate = getTranslate(selectedIndex, MOBILE_CARDS.length);

    return (
        <DoubleCurves
            up
            className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
        >
            <section className="relative bg-black py-20">
                <Container>
                    <div className="text-center mb-10 lg:mb-12 max-w-[860px] mx-auto">
                    <p className="uppercase tracking-widest mb-5 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block font-primary text-xs sm:text-sm">
                            Increase Rankings, Build Trust, Convert Traffic
                        </p>
                        <HeadingTwo className="text-center ">
                        SEO Services From HTSOL Inc.
                        </HeadingTwo>
                       
                        <p className="mt-5 text-white text-center leading-relaxed">
                            Every business operates in a different market. We build a bespoke strategy focused on what will move the needle for you.
                        </p>
                    </div>

                    <div className="rounded-[10px] p-px bg-[linear-gradient(90deg,rgba(7,91,101,0.9)_0%,rgba(0,131,138,0.9)_37.02%,rgba(50,138,153,0.9)_81.25%)]">
                        {/* ── MOBILE swiper ─────────────────────────────────── */}
                        <div className="md:hidden bg-black rounded-[10px] overflow-hidden p-3">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={1}
                                spaceBetween={16}
                                loop
                                autoplay={{
                                    delay: MOBILE_AUTOPLAY_DELAY,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                                onSlideChange={(swiper) => {
                                    setSelectedIndex(swiper.realIndex);
                                    setProgress(0);
                                }}
                            >
                                {MOBILE_CARDS.map((item) => (
                                    <SwiperSlide key={item.heading}>
                                        <div className="bg-black px-4 sm:px-5 py-5 min-h-[210px] flex flex-col rounded-[8px]">
                                            <div className="mb-3">
                                                <Image
                                                    src="/icon-1.svg"
                                                    alt="icon"
                                                    width={40}
                                                    height={40}
                                                    className="object-contain"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <h3 className="font-primary uppercase text-white text-[18px] tracking-wide font-semibold mb-2">
                                                {item.heading}
                                            </h3>
                                            <p className="text-white leading-normal">{item.para}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* ── Custom pagination ─────────────────────────── */}
                            <div className="mt-5 flex items-center gap-3">
                                {/* Play / Pause */}
                                <button
                                    type="button"
                                    onClick={handleTogglePlay}
                                    className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition"
                                >
                                    {isPlaying ? (
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <rect x="2" y="2" width="3" height="10" fill="currentColor" />
                                            <rect x="9" y="2" width="3" height="10" fill="currentColor" />
                                        </svg>
                                    ) : (
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M3 2.5V11.5L11 7L3 2.5Z" fill="currentColor" />
                                        </svg>
                                    )}
                                </button>

                                {/* Sliding dot window — fixed width, overflow hidden */}
                                <div
                                    style={{ width: WINDOW_W, height: DOT_H + 8 }}
                                    className="relative overflow-hidden flex items-center"
                                >
                                    {/* Inner rail slides via transform — active always centered */}
                                    <div
                                        className="flex items-center absolute left-0"
                                        style={{
                                            gap: DOT_GAP,
                                            transform: `translateX(${translate}px)`,
                                            transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
                                            height: DOT_H,
                                        }}
                                    >
                                        {MOBILE_CARDS.map((_, i) => {
                                            const isActive = i === selectedIndex;
                                            return isActive ? (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    onClick={() => handleDotClick(i)}
                                                    className="relative rounded-full bg-white/15 overflow-hidden shrink-0"
                                                    style={{ width: DOT_ACTIVE_W, height: DOT_H }}
                                                >
                                                    <span
                                                        className="absolute inset-y-0 left-0 bg-white rounded-full"
                                                        style={{ width: `${progress}%` }}
                                                    />
                                                </button>
                                            ) : (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    onClick={() => handleDotClick(i)}
                                                    className="rounded-full bg-white/25 hover:bg-white/50 transition-colors shrink-0"
                                                    style={{ width: DOT_INACTIVE_W, height: DOT_H }}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── DESKTOP grid (UNTOUCHED) ──────────────────────── */}
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px lg:gap-0 bg-[#0a4f57] lg:bg-black rounded-[10px] overflow-hidden">
                            {TOP_CARDS.map((item, index) => (
                                <div
                                    key={item.heading}
                                    className={`bg-black px-4 sm:px-5 py-5 min-h-[150px] flex flex-col lg:border-b lg:border-[#0a4f57] ${
                                        (index + 1) % 3 !== 0 ? "lg:border-r lg:border-[#0a4f57]" : ""
                                    }`}
                                >
                                    <div className="mb-3">
                                        <Image src="/icon-1.svg" alt="icon" width={40} height={40} className="object-contain" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-primary uppercase text-white text-[18px] tracking-wide font-semibold mb-2">
                                        {item.heading}
                                    </h3>
                                    <p className="text-white leading-normal">{item.para}</p>
                                </div>
                            ))}

                            <div className="bg-black px-4 sm:px-5 py-5 min-h-[150px] flex flex-col lg:border-r lg:border-[#0a4f57]">
                                <div className="mb-3">
                                    <Image src="/icon-1.svg" alt="icon" width={40} height={40} className="object-contain" aria-hidden="true" />
                                </div>
                                <h3 className="font-primary font-semibold uppercase text-[18px] tracking-wide mb-2">
                                    {BOTTOM_LEFT_CARD.heading}
                                </h3>
                                <p className="text-white leading-normal">{BOTTOM_LEFT_CARD.para}</p>
                            </div>

                            <div className="relative min-h-[150px] bg-black overflow-hidden md:col-span-2 lg:col-span-2">
                                <div className="grid grid-cols-2 h-full">
                                    <div className="relative min-h-[150px] overflow-hidden col-span-2">
                                        <Image src="/seo-service-img.webp" alt="SEO visual" fill className="object-cover" />
                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.2)_100%)]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </DoubleCurves>
    );
};

export default Services;