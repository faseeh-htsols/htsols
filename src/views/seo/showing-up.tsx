"use client";

import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";

const TOP_ITEMS = [
    {
        title: "KEYWORD RESEARCH",
        icon: "/icon-bg.svg",
        centerIcon: "/icon-1.svg",
    },
    {
        title: "CLEAR REPORTING",
        icon: "/icon-bg.svg",
        centerIcon: "/icon-1.svg",
    },
    {
        title: "RANK GROWTH",
        icon: "/icon-bg.svg",
        centerIcon: "/icon-1.svg",
    },
];

const HELP_POINTS = [
    "Increase qualified traffic without paying for every click",
    "Generate leads around the clock, including evenings and weekends",
    "Build brand credibility through consistent ranking",
    "Reduce reliance on paid advertising over time",
];

const ShowingUp = () => {
    return (
        <DoubleCurves
            up
            className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
        >
            <section className="relative bg-tertiary py-20 lg:py-40 text-white overflow-hidden">
                <Container>
                    <div className="max-w-[1100px] mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 justify-items-center mb-10 lg:mb-12">
                            {TOP_ITEMS.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex flex-col items-center text-center gap-4"
                                >
                                    <div className="relative flex items-center justify-center w-[90px] h-[68px] rounded-full">
                                        <div className="absolute inset-1.5 rounded-full" />

                                        <div className="relative z-1">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={80}
                                                height={80}
                                                className="object-contain"
                                            />
                                        </div>

                                        <div className="absolute inset-0 z-2 flex items-center justify-center">
                                            <Image
                                                src={item.centerIcon}
                                                alt={item.title}
                                                width={24}
                                                height={24}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="font-primary font-semibold text-[18px] uppercase tracking-wide">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        <div className="h-px w-full bg-white mb-10 lg:mb-12" />

                        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-10 lg:gap-16 items-stretch">
                            <div className="h-full max-w-none flex flex-col justify-center">
                                <HeadingTwo className="font-primary font-semibold uppercase text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.02] mb-5">
                                    Are You Showing Up Where Your Customers Are Searching?
                                </HeadingTwo>

                                <div className="text-white leading-relaxed">
                                    <p>
                                        If your core services rarely appear on page one, you may be
                                        losing high-intent customers every day. This does not mean
                                        your business lacks quality. It often means search engines
                                        cannot properly understand or trust your website yet.
                                        <br /><br />
                                        SEO is not a trend. It is a long-term acquisition channel
                                        that grows stronger over time when handled correctly.
                                    </p>
                                </div>
                            </div>

                            <div className="relative h-full rounded-[20px] p-px bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] shadow-[0_0_25px_rgba(0,131,138,0.18)]">
                                <div className="relative h-full rounded-[20px] bg-[#071014] px-5 sm:px-6 py-6 overflow-hidden min-h-[220px] flex flex-col justify-center">
                                    <div
                                        className="absolute inset-0 bg-[url('/seo-ball.webp')] bg-cover bg-center bg-no-repeat opacity-40"
                                        aria-hidden
                                    />

                                    <div className="relative z-2">
                                        <h3 className="font-primary font-semibold uppercase text-[18px] mb-5">
                                            A Solid SEO Foundation Helps You:
                                        </h3>

                                        <div className="space-y-3">
                                            {HELP_POINTS.map((point) => (
                                                <div key={point} className="flex items-center gap-3">
                                                    <Image
                                                        src="/list-icon.svg"
                                                        alt=""
                                                        width={20}
                                                        height={20}
                                                        className="mt-0.5 shrink-0 object-contain"
                                                        aria-hidden="true"
                                                    />
                                                    <p className="text-white leading-relaxed">
                                                        {point}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
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

export default ShowingUp;