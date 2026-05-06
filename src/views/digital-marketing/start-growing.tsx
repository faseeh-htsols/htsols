import React from "react";
import Container from "@/components/ui/container";
import Link from "next/link";
import DoubleCurves from "@/components/ui/double-curves";
import Image from "next/image";

const StartGrowing = () => {
    return (
        <DoubleCurves up className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_100%,0_100%)]">
            <section className="relative min-h-[600px] overflow-hidden lg:min-h-[700px]">
                <Image
                    src="/growing-bg.webp"
                    alt=""
                    fill
                    sizes="100vw"
                    className="absolute inset-0 z-0 object-cover object-center"
                    aria-hidden="true"
                />
                <Container>
                    <div className="relative z-10 flex py-16 lg:py-24">
                        <div className="">
                            <div className="max-w-2xl rounded-2xl bg-[#1a1a1a]/95 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl">
                                <h2 className="font-primary font-medium text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-wide mb-4">
                                    Start Growing Your Business With HTSOL
                                </h2>
                                <p className="text-white text-sm sm:text-base leading-relaxed mb-6">
                                    When digital marketing is planned strategically, it becomes one of the most powerful tools for business growth.
                                    <br /><br />
                                    At <b>HTSOL Inc. Digital Marketing Agency</b>, we help businesses transform their online presence into a reliable growth engine through thoughtful strategy, creative execution, and continuous performance optimization.
                                    <br /><br />
                                    If you are ready to attract more customers, strengthen your brand, and support your company’s growth, our team is here to help.
                                </p>
                                <p className="text-white text-sm sm:text-base leading-relaxed underline font-bold capitalize">
                                    <Link href={'/contact-us'}>
                                        Contact HTSOL Inc. today to discuss your digital marketing strategy.
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </DoubleCurves>
    );
};

export default StartGrowing;
