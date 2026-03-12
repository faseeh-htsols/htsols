"use client";

import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";

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

const Services = () => {
    return (
        <DoubleCurves
            up
            className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
        >
            <section className="relative bg-black py-20">
                <Container>
                    <div className="text-center mb-10 lg:mb-12 max-w-[860px] mx-auto">
                        <p className="uppercase tracking-widest mb-5 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block font-primary text-xs sm:text-sm">
                            SEO Services From HTSOL Inc.
                        </p>

                        <HeadingTwo className="text-center">
                            Increase Rankings, Build Trust, Convert Traffic
                        </HeadingTwo>

                        <p className="mt-5 text-white text-center leading-relaxed">
                            Every business operates in a different market. We build a bespoke strategy focused on what will move the needle for you.
                        </p>
                    </div>

                    <div className="rounded-[10px] p-px bg-[linear-gradient(90deg,rgba(7,91,101,0.9)_0%,rgba(0,131,138,0.9)_37.02%,rgba(50,138,153,0.9)_81.25%)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px lg:gap-0 bg-[#0a4f57] lg:bg-black rounded-[10px] overflow-hidden">
                            {TOP_CARDS.map((item, index) => (
                                <div
                                    key={item.heading}
                                    className={`bg-black px-4 sm:px-5 py-5 min-h-[150px] flex flex-col
      lg:border-b lg:border-[#0a4f57]
      ${index % 3 === 0 ? "lg:border-r lg:border-[#0a4f57]" : ""}
    `}
                                >
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

                                    <p className="text-white leading-normal">
                                        {item.para}
                                    </p>
                                </div>
                            ))}

                            <div className="bg-black px-4 sm:px-5 py-5 min-h-[150px] flex flex-col lg:border-r lg:border-[#0a4f57]">
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

                                <h3 className="font-primary font-semibold uppercase text-[18px] tracking-wide mb-2">
                                    {BOTTOM_LEFT_CARD.heading}
                                </h3>

                                <p className="text-white leading-normal">
                                    {BOTTOM_LEFT_CARD.para}
                                </p>
                            </div>

                            <div className="relative min-h-[150px] bg-black overflow-hidden md:col-span-2 lg:col-span-2">
                                <div className="grid grid-cols-2 h-full">
                                    <div className="relative min-h-[150px] overflow-hidden col-span-2">
                                        <Image
                                            src="/seo-service-img.png"
                                            alt="SEO visual"
                                            fill
                                            className="object-cover"
                                        />
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