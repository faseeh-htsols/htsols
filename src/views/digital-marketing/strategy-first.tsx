"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import Image from "next/image";
import React from "react";

const HELP_POINTS = [
    "Market and competitor analysis",
    "Website and SEO audit",
    "Customer journey mapping",
    "Conversion tracking setup",
    "Channel-specific marketing strategy development",
];

const StrategyFirst = () => {
    return (
        <DoubleCurves
            up
            className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
        >
            <section className="relative bg-tertiary py-20 lg:py-40 text-white overflow-hidden">
                <Container>
                    <div className="max-w-[1100px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-10 lg:gap-16 items-stretch">
                            <div className="h-full max-w-none flex flex-col justify-center">
                                <h2 className="font-primary font-semibold uppercase text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.02] mb-5">
                                    A Strategy-First Digital Marketing Agency for Real Business Growth
                                </h2>

                                <div className="text-white leading-relaxed">
                                    <p>
                                        Many agencies focus only on running ads or posting content. At HTSOL Inc., we take a different approach. Everything begins with strategy.
                                        <br /><br />
                                        Before any campaign begins, our team studies your business carefully. We review your industry, your competitors, and how customers currently interact with your brand online. This research helps us build a <b>bespoke digital marketing strategy</b> that focuses on the channels most likely to produce meaningful results.
                                    </p>
                                </div>
                                <div className="flex mt-5">
                                    <Button href="/contact-us">
                                        Start Growing Today
                                    </Button>
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
                                            Our strategic planning process includes:
                                        </h3>

                                        <div className="ps-6 relative flex flex-col gap-6">
                                            <div className="absolute top-0 bottom-10 md:bottom-2 left-1 bg-white w-0.5"></div>

                                            {HELP_POINTS.map((item, index) => (
                                                <div key={index} className="relative group flex flex-col gap-2">
                                                    <div className="absolute top-0 w-5 h-5 -left-7.5 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] rounded-full"></div>
                                                    <p className="text-white ps-2 leading-relaxed">{item}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-white leading-relaxed mt-5">
                                            This structured approach ensures every campaign has a clear purpose. By combining data insights with thoughtful execution, we help businesses turn digital marketing into a reliable engine for sustainable growth.
                                        </p>
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

export default StrategyFirst;