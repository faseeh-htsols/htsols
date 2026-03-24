"use client";

import React, { useId, useState } from "react";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import DoubleCurves from "@/components/ui/double-curves";

type Step = {
    number: string;
    title: string;
    description: string;
};

const STEPS: Step[] = [
    {
        number: "01",
        title: "Data-Driven Strategies",
        description:
            "Every campaign begins with research and analytics. This ensures marketing decisions are based on measurable insights.",
    },
    {
        number: "02",
        title: "Experienced Digital Marketing Specialists",
        description:
            "Our team stays informed about search engine updates, marketing technology, and industry trends so your strategy remains current.",
    },
    {
        number: "03",
        title: "Custom Marketing Plans",
        description:
            "We develop bespoke marketing strategies based on your industry, your audience, and your business goals.",
    },
    {
        number: "04",
        title: "Transparent Reporting",
        description:
            "You receive clear performance reports that explain how campaigns are progressing and where improvements can be made.",
    },
    {
        number: "05",
        title: "Scalable Solutions",
        description:
            "As your business grows, your marketing strategy can evolve alongside it.",
    },
];

const ChevronDown = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true">
        <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CloseIcon = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true">
        <path
            d="M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const WhyBusinessChoose = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const baseId = useId();

    return (
        <DoubleCurves up className="bg-tertiary -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
            <Container>
                <div className="relative py-20">
                    {/* Header */}
                    <div className="text-center">
                        <HeadingTwo className="text-center">
                            Why Businesses Choose HTSOL Digital Marketing Agency
                        </HeadingTwo>
                        <p className="mt-8 mb-9 text-white text-lg">
                            Businesses choose <b>HTSOL Inc. Digital Marketing Agency</b> because our work focuses on meaningful outcomes rather than activity alone.
                            <br />
                            Our team combines technical expertise, strategic thinking, and creative marketing solutions to support long-term digital growth.
                            <br />
                            When you work with <b>HTSOL Inc</b>., you gain access to:
                        </p>

                        <div className="mt-6 h-px w-full bg-white" />
                    </div>

                    {/* Accordion */}
                    <div className="">
                        {STEPS.map((step, idx) => {
                            const isOpen = idx === activeIndex;
                            const panelId = `${baseId}-panel-${idx}`;
                            const buttonId = `${baseId}-button-${idx}`;

                            return (
                                <div
                                    key={step.number}
                                    className={`border-b last:border-b-0 ${isOpen ? "border-white" : "border-white/70"}`}>
                                    <button
                                        id={buttonId}
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => setActiveIndex(idx)}
                                        className="w-full text-left py-5 cursor-pointer">
                                        <div className="grid grid-cols-[52px_1fr_24px] items-center gap-4">
                                            {/* number */}
                                            <div
                                                className={`font-primary text-xl uppercase  ${isOpen ? "text-white" : "text-white/70"}`}>
                                                {step.number}
                                            </div>

                                            {/* title */}
                                            <div
                                                className={`uppercase font-primary text-xl  ${isOpen ? "text-white" : "text-white/75"
                                                    }`}>
                                                {step.title}
                                            </div>

                                            {/* icon */}
                                            <div className="flex justify-end text-white/60">
                                                <ChevronDown
                                                    className={`text-white/70 ${isOpen ? "rotate-180 text-white" : ""}`}
                                                />
                                            </div>
                                        </div>

                                        {/* Open content (animated) */}
                                        <div
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={buttonId}
                                            className={`grid grid-cols-[52px_1fr_24px] gap-4 transition-all duration-300 ${isOpen
                                                ? "mt-5 max-h-40 opacity-100"
                                                : "mt-0 max-h-0 opacity-0"
                                                } overflow-hidden`}>
                                            <div />
                                            <p className="text-white pr-4">{step.description}</p>
                                            <div />
                                        </div>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </DoubleCurves>
    );
};

export default WhyBusinessChoose;
