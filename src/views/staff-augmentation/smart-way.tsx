"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import ArrowLinkButton from "@/components/ui/arrow-link-button";

type SolutionItem = {
    title: string;
    image: string;
    alt: string;
};

const ITEMS: SolutionItem[] = [
    {
        title: "Senior talent available in days, not months",
        image: "/staff-augmentation/smart-way-img-1.png",
        alt: "Senior talent available in days, not months",
    },
    {
        title: "Pay for the hours and skills you actually need — nothing more",
        image: "/website/full-development.png",
        alt: "Pay for the hours and skills you actually need — nothing more",
    },
    {
        title: "Scale up and down as your workload demands without the hiring and firing cycle",
        image: "/website/conversion-focused.png",
        alt: "Scale up and down as your workload demands without the hiring and firing cycle",
    },
    {
        title: "Eliminate employer taxes, benefits, office costs, and equipment overhead",
        image: "/website/technical-seo.png",
        alt: "Eliminate employer taxes, benefits, office costs, and equipment overhead",
    },
    {
        title: "Test a role before you commit to making it permanent",
        image: "/website/analytics.png",
        alt: "Test a role before you commit to making it permanent",
    },
    {
        title: "Keep your core team lean and focused while augmented talent handles specific workloads",
        image: "/website/performance.png",
        alt: "Keep your core team lean and focused while augmented talent handles specific workloads",
    },
];

const SmartWay = () => {
    const [active, setActive] = useState(0);

    return (
        <section className="relative overflow-hidden bg-[url('/staff-augmentation/smart-way-bg.png')] bg-cover bg-center bg-no-repeat py-20 lg:py-40">
            {/* vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.9)_55%,rgba(0,0,0,1)_100%)]" />

            <Container>
                <div className="relative mb-9 ">
                    {/* Header */}
                    <div className="text-center flex flex-col gap-7">
                        <HeadingTwo className="text-center">
                            THE SMARTEST WAY TO SCALE YOUR TEAM WITHOUT SCALING YOUR RISK
                        </HeadingTwo>

                        <p className="">
                            The traditional hiring model is built for a different era. Permanent headcount, six-month hiring cycles, expensive onboarding, and the constant risk that your new hire does not work out — none of that is suited to the speed at which businesses need to move today.
                            <br /><br />
                            Staff augmentation is the modern alternative. You get the talent when you need it, at the level you need it, for as long as you need it. Then you scale back when the project ends or the workload changes — without a restructure, without a redundancy, without any of the legal and emotional complexity that comes with letting people go.
                        </p>
                        <div className="flex justify-center">
                            <ArrowLinkButton
                                href="#white-label-form"
                                variant="teal"
                                className="h-[73px] w-fit px-7 text-[13px] tracking-[0.05em] md:min-w-[220px] sm:text-[19px]"
                            >
                                Tell Us What You Need
                            </ArrowLinkButton>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

                        {/* Left image */}
                        <div className="relative overflow-hidden rounded-2xl min-h-[460px] md:min-h-[720px] lg:min-h-[620px] h-full">
                            <div className="absolute inset-0">
                                <Image
                                    key={ITEMS[active].image} // re-mount for instant swap
                                    src={ITEMS[active].image}
                                    alt={ITEMS[active].alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                />
                            </div>
                        </div>

                        {/* Right list */}
                        <div className="flex h-full flex-col gap-3">
                            {ITEMS.map((item, idx) => {
                                const isActive = idx === active;

                                return (
                                    <button
                                        key={item.title}
                                        type="button"
                                        onClick={() => setActive(idx)}
                                        aria-pressed={isActive}
                                        className={`flex-1 w-full rounded-[12px] border px-4 cursor-pointer  py-4 text-left transition bg-tertiary border-[#334155] `}>
                                        <div className="flex items-center justify-start gap-4">
                                            <span
                                                className={`shrink-0 ${isActive ? "text-[#0B6F7A]" : "text-white/45"
                                                    }`}>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_4777_9369)">
                                                        <path d="M14.6663 7.38723V8.00056C14.6655 9.43818 14.2 10.837 13.3392 11.9884C12.4785 13.1399 11.2685 13.9822 9.88991 14.3898C8.51129 14.7974 7.03785 14.7485 5.68932 14.2503C4.3408 13.7521 3.18944 12.8313 2.40698 11.6253C1.62452 10.4193 1.25287 8.9926 1.34746 7.5581C1.44205 6.1236 1.99781 4.75811 2.93186 3.66528C3.86591 2.57244 5.1282 1.81082 6.53047 1.49399C7.93274 1.17717 9.39985 1.32212 10.713 1.90723" stroke="#00A1A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M14.6667 2.66699L8 9.34033L6 7.34033" stroke="#00A1A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_4777_9369">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>

                                            <span
                                                className={`${isActive ? "text-white" : "text-[#D1D5DB]"
                                                    }`}>
                                                {item.title}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SmartWay;
