"use client";

import Image from "next/image";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";


interface OurWorkData {
    data: {
        title: string;
        para: string;
        image: string;
    }
}

const WhatAWebsiteDeliver = ({ data }: OurWorkData) => {

    return (
        <section className="relative overflow-hidden pt-20 md:py-20">
            <Image
                src="/what-deliver-bg.webp"
                alt=""
                fill
                sizes="100vw"
                className="absolute inset-0 z-0 object-cover object-center"
                aria-hidden="true"
            />
            <Container>
                <div className="relative z-10 text-center max-w-5xl mx-auto space-y-6">
                    <HeadingTwo className="text-center">
                        <span dangerouslySetInnerHTML={{ __html: data.title }}></span>
                    </HeadingTwo>
                    <p className="text-center w-full md:w-[90%]" dangerouslySetInnerHTML={{ __html: data.para }}></p>
                </div>
                <div className="relative z-10 mt-0 md:mt-12">
                    <div className="relative w-full h-[300px] md:h-[500px]">
                        <Image
                            src={data.image}
                            alt="Delivery-image"
                            quality={100}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WhatAWebsiteDeliver;
