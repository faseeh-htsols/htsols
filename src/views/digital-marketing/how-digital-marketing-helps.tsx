import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Button from "@/components/ui/Button";
import DoubleCurves from "@/components/ui/double-curves";

const FEATURES = [
    {
        para: "Reach customers searching for your services online",
    },
    {
        para: "Build trust and authority within your industry",
    },
    {
        para: "Generate steady website traffic and qualified leads",
    },
    {
        para: "Track marketing performance in real time",
    },
    {
        para: "Expand beyond local geographic limits",
    },
    {
        para: "Improve engagement across multiple digital channels",
    },
];

const HowDigitalMarketingHelps = () => {
    return (
        <DoubleCurves up className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_100%,0_100%)]">
            <section className="relative overflow-hidden bg-[url('/website/seo-ready.webp')] bg-cover bg-center bg-no-repeat py-20">
                <Container>
                    <div className="relative ">
                        <div className="mx-auto max-w-6xl p-px bg-linear-to-b from-[#075B65] to-black rounded-2xl">
                            <div className="mx-auto max-w-6xl rounded-2xl bg-black backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.7)] overflow-hidden px-6 py-10 sm:px-10 sm:pt-12 lg:px-14 lg:pt-14">
                                {/* subtle inner gradient */}
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_40%,rgba(0,0,0,0.35)_100%)]" />

                                <div className="relative mx-auto max-w-6xl text-center">
                                    <HeadingTwo className="text-center">
                                        How Digital Marketing Helps Businesses Grow
                                    </HeadingTwo>

                                    <p className="mt-4  text-white ">
                                        Digital marketing allows businesses to reach customers where they already spend their time online. When the strategy is well planned, it helps your business connect with people who are actively looking for your services.
                                        <br /><br />
                                        A strong digital marketing strategy can help your business:
                                    </p>

                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                                        {FEATURES.map((item, index) => {
                                            const isLastOddCard =
                                                FEATURES.length % 2 === 1 &&
                                                index === FEATURES.length - 1;

                                            return (
                                                <div
                                                    key={item.para}
                                                    className={`flex flex-col items-start gap-3 rounded-[5px] bg-[#191919] px-5 py-3 text-left border-l-2 border-[#075B65] ${isLastOddCard
                                                        ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[calc(50%-0.5rem)]"
                                                        : ""
                                                        }`}>

                                                    <p className="font-primary uppercase text-white  font-semibold leading-normal">
                                                        {item.para}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <p className="mt-4  text-white text-center">
                                        At <b>HTSOL Inc</b>., we focus on campaigns that support your business objectives. Every strategy is guided by measurable insights so you can clearly understand how your marketing is performing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </DoubleCurves>
    );
};

export default HowDigitalMarketingHelps;
