"use client";

import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";


interface WebDesignAgencyCards {
    id: string;
    heading?: string;
    para?: string;
    mainImage?: string;
    imageAlt?: string;
    icon?: string;
    fullWidth?: boolean;
    hideOnMobile?: boolean;
}

interface WebDesignAgencyData {
    data: {
        title: string;
        para: string;
        cards: WebDesignAgencyCards[];
    }
}

const MOBILE_AUTOPLAY_DELAY = 5000;

// ── Dot geometry constants ────────────────────────────────────────────────────
const DOT_ACTIVE_W = 40;
const DOT_INACTIVE_W = 20;
const DOT_H = 4;
const DOT_GAP = 4;
const VISIBLE = 10;

const WINDOW_W = VISIBLE * DOT_INACTIVE_W + (VISIBLE - 1) * DOT_GAP;

const getTranslate = (activeIdx: number, total: number): number => {
    const centers: number[] = [];
    let x = 0;

    for (let i = 0; i < total; i++) {
        const w = i === activeIdx ? DOT_ACTIVE_W : DOT_INACTIVE_W;
        centers.push(x + w / 2);
        x += w + DOT_GAP;
    }

    const windowCenter = WINDOW_W / 2;
    return windowCenter - centers[activeIdx];
};

const WebDesignAgency = ({ data }: WebDesignAgencyData) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const mobileCards = useMemo(
        () => data.cards.filter((card) => !card.hideOnMobile),
        []
    );

    useEffect(() => {
        if (!isPlaying) return;

        let frameId: number;
        const start = performance.now();

        const tick = (now: number) => {
            const pct = Math.min(
                ((now - start) / MOBILE_AUTOPLAY_DELAY) * 100,
                100
            );
            setProgress(pct);

            if (pct < 100 && isPlaying) {
                frameId = requestAnimationFrame(tick);
            }
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
            return;
        }

        swiper.autoplay.start();
        setIsPlaying(true);
        setProgress(0);
    };

    const handleDotClick = (index: number) => {
        swiperRef.current?.slideToLoop(index);
    };

    const translate = getTranslate(selectedIndex, mobileCards.length);

    const renderCardContent = (item: WebDesignAgencyCards, isMobile = false) => {
        if (item.mainImage) {
            return (
                <div
                    className={`relative w-full overflow-hidden ${isMobile ? "min-h-[210px] rounded-xl" : "min-h-[150px] h-full"
                        }`}
                >
                    <Image
                        src={item.mainImage}
                        alt={item.imageAlt || item.heading || "Card image"}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.22)_100%)]" />
                </div>
            );
        }

        return (
            <>
                <div className="mb-3">
                    <Image
                        src={item.icon || "/icon-1.svg"}
                        alt=""
                        width={40}
                        height={40}
                        className="object-contain"
                        aria-hidden="true"
                    />
                </div>

                {item.heading && (
                    <h3 className="mb-2 font-primary text-[18px] font-semibold uppercase tracking-wide text-white">
                        {item.heading}
                    </h3>
                )}

                {item.para && (
                    <div
                        className="text-white leading-normal"
                        dangerouslySetInnerHTML={{ __html: item.para }}
                    />
                )}
            </>
        );
    };

    return (
        <DoubleCurves
            up
            className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
        >
            <section className="relative bg-black py-20 lg:py-40">
                <Container>
                    <div className="mx-auto mb-10 max-w-6xl text-center lg:mb-12">
                        <HeadingTwo className="mb-3 text-center">
                            {data.title}
                        </HeadingTwo>

                        <p className="mt-5 text-center leading-relaxed text-white">
                            {data.para}
                        </p>
                    </div>

                    <div className="rounded-[10px] bg-[linear-gradient(90deg,rgba(7,91,101,0.9)_0%,rgba(0,131,138,0.9)_37.02%,rgba(50,138,153,0.9)_81.25%)] p-px">
                        {/* Mobile */}
                        <div className="overflow-hidden rounded-[10px] bg-black p-3 md:hidden">
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
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                onSlideChange={(swiper) => {
                                    setSelectedIndex(swiper.realIndex);
                                    setProgress(0);
                                }}
                            >
                                {mobileCards.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div
                                            className={`flex min-h-[210px] flex-col rounded-xl bg-black ${item.mainImage ? "p-0" : "px-4 py-5 sm:px-5"
                                                }`}
                                        >
                                            {renderCardContent(item, true)}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="mt-5 flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={handleTogglePlay}
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10"
                                    aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
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

                                <div
                                    style={{ width: WINDOW_W, height: DOT_H + 8 }}
                                    className="relative flex items-center overflow-hidden"
                                >
                                    <div
                                        className="absolute left-0 flex items-center"
                                        style={{
                                            gap: DOT_GAP,
                                            transform: `translateX(${translate}px)`,
                                            transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
                                            height: DOT_H,
                                        }}
                                    >
                                        {mobileCards.map((_, i) => {
                                            const isActive = i === selectedIndex;

                                            if (isActive) {
                                                return (
                                                    <button
                                                        key={i}
                                                        type="button"
                                                        onClick={() => handleDotClick(i)}
                                                        className="relative shrink-0 overflow-hidden rounded-full bg-white/15"
                                                        style={{ width: DOT_ACTIVE_W, height: DOT_H }}
                                                        aria-label={`Go to slide ${i + 1}`}
                                                    >
                                                        <span
                                                            className="absolute inset-y-0 left-0 rounded-full bg-white"
                                                            style={{ width: `${progress}%` }}
                                                        />
                                                    </button>
                                                );
                                            }

                                            return (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    onClick={() => handleDotClick(i)}
                                                    className="shrink-0 rounded-full bg-white/25 transition-colors hover:bg-white/50"
                                                    style={{ width: DOT_INACTIVE_W, height: DOT_H }}
                                                    aria-label={`Go to slide ${i + 1}`}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop */}
                        <div className="hidden grid-cols-1 gap-px overflow-hidden rounded-[10px] bg-[#0a4f57] md:grid md:grid-cols-3 lg:grid-cols-3 lg:gap-0 lg:bg-black">
                            {data.cards.map((item, index) => {
                                const isImageCard = Boolean(item.mainImage);
                                const isFullWidth = Boolean(item.fullWidth);

                                return (
                                    <div
                                        key={item.id}
                                        className={[
                                            "bg-black flex flex-col min-h-[150px] lg:border-b lg:border-[#0a4f57]",
                                            isFullWidth ? "col-span-3 px-4 py-5 sm:px-5" : "",
                                            !isFullWidth && isImageCard ? "px-0 py-0" : "",
                                            !isFullWidth && !isImageCard ? "px-4 py-5 sm:px-5" : "",
                                            !isFullWidth && (index + 1) % 3 !== 0
                                                ? "lg:border-r lg:border-[#0a4f57]"
                                                : "",
                                        ].join(" ")}
                                    >
                                        {isFullWidth ? (
                                            <div
                                                className="text-center text-white leading-normal"
                                                dangerouslySetInnerHTML={{ __html: item.para || "" }}
                                            />
                                        ) : (
                                            renderCardContent(item)
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>
        </DoubleCurves>
    );
};

export default WebDesignAgency;