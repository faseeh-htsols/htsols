"use client";

import React, { useId, useState } from "react";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import DoubleCurves from "@/components/ui/double-curves";

interface AccordionItem {
    number: string;
    title: string;
    description: string;
}

interface HowWorksData {
    data: {
        title: string;
        para: string;
        bgColor?: string;
        accordion: AccordionItem[];
    }
}



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

const HowWorks = ({ data }: HowWorksData) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const baseId = useId();

    return (
        <DoubleCurves up className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_-10px,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
            <div className="relative py-20 lg:py-40"
                style={{ backgroundColor: data.bgColor || "#000000" }}>
                <Container>
                    {/* Header */}
                    <div className="text-center w-full">
                        <HeadingTwo className="text-center w-full">
                            {data.title}
                        </HeadingTwo>
                        <p className="mt-8 mb-9 text-white text-center w-full md:w-[85%] mx-auto">
                            {data.para}
                        </p>

                        <div className="mt-6 h-px w-full bg-white" />
                    </div>

                    {/* Accordion */}
                    <div className="">
                        {data.accordion.map((step, idx) => {
                            const isOpen = idx === activeIndex;
                            const panelId = `${baseId}-panel-${idx}`;
                            const buttonId = `${baseId}-button-${idx}`;

                            return (
                                <div
                                    key={step.number}
                                    className={`border-b last:border-b-0  ${isOpen ? "border-white" : "border-white/60"}`}>
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
                                                className={`font-primary text-xl uppercase  ${isOpen ? "text-white" : "text-white/60"}`}>
                                                {step.number}
                                            </div>

                                            {/* title */}
                                            <div
                                                className={`uppercase font-primary text-xl  ${isOpen ? "text-white" : "text-white/60"
                                                    }`}>
                                                {step.title}
                                            </div>

                                            {/* icon */}
                                            <div className="flex justify-end text-white/60">
                                                <ChevronDown
                                                    className={`text-white/60 ${isOpen ? "rotate-180 text-white" : ""}`}
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
                                            <p className="text-white pr-4" dangerouslySetInnerHTML={{ __html: step.description }}></p>
                                            <div />
                                        </div>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </div>
        </DoubleCurves >
    );
};

export default HowWorks;
