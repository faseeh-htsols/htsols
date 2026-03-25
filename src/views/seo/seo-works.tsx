import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Button from "@/components/ui/Button";
import DoubleCurves from "@/components/ui/double-curves";

const FEATURES = [
    {
        heading: "Transparent Reporting",
        para: "Clear monthly updates and next steps. No confusion.",
    },
    {
        heading: "White-Hat, Long-Term Approach",
        para: "Sustainable growth built on best practices.",
    },
    {
        heading: "Dedicated Strategy & Execution",
        para: "Continuous optimisation guided by measurable performance.",
    },
    {
        heading: "Conversion-Focused Optimisation",
        para: "Rankings matter, but leads matter more. We optimise for both.",
    },
    {
        heading: "Canada-Aware Compliance",
        para: "When outreach or email is involved, we follow CASL and Canadian privacy practices.",
    },
];

const SeoWorks = () => {
    return (
        <DoubleCurves up className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
            <section className="relative overflow-hidden pb-10">
                {/* Background */}
                <div className="">
                    <Image
                        src="/website/seo-ready.webp"
                        alt=""
                        className="w-full h-[400px] object-cover"
                        width={1000}
                        height={600}
                    />
                    {/* heavy dark overlay + vignette */}
                </div>

                <Container>
                    <div className="relative -mt-[200px]">
                        <div className="mx-auto max-w-6xl p-px bg-linear-to-b from-[#075B65] to-black rounded-2xl">
                            <div className="mx-auto max-w-6xl rounded-2xl bg-black backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.7)] overflow-hidden px-6 py-10 sm:px-10 sm:pt-12 lg:px-14 lg:pt-14">
                                {/* subtle inner gradient */}
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_40%,rgba(0,0,0,0.35)_100%)]" />

                                <div className="relative mx-auto max-w-6xl text-center">
                                    <p className="uppercase tracking-widest mb-5 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block  font-primary">
                                    Process, Quality, and Transparency
                                    </p>

                                    <HeadingTwo className="text-center">
                                        Why HTSOL SEO Works
                                    </HeadingTwo>

                                    <p className="mt-4  text-white ">
                                        Good SEO is consistent work guided by real data, not shortcuts.
                                    </p>

                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                                        {FEATURES.map((item, index) => {
                                            const isLastOddCard =
                                                FEATURES.length % 2 === 1 &&
                                                index === FEATURES.length - 1;

                                            return (
                                                <div
                                                    key={item.heading}
                                                    className={`flex flex-col items-start gap-3 rounded-[5px] bg-[#191919] px-5 py-3 text-left border-l-2 border-[#075B65] ${isLastOddCard
                                                        ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[calc(50%-0.5rem)]"
                                                        : ""
                                                        }`}>
                                                <h3 className="font-primary uppercase text-white  font-semibold mb-2">
                                                    {item.heading}
                                                </h3>

                                                <p className="text-white leading-normal">
                                                    {item.para}
                                                </p>
                                                </div>
                                            );
                                        })}
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

export default SeoWorks;
