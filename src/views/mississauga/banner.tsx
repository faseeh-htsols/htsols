"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import Button from "../../components/ui/Button";
import GlowButton from "../../components/ui/GlowButton";
import CircularText from "../../components/ui/CircularText";
import Container from "@/components/ui/container";





export const Banner: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const handleDotClick = (index: number) => {
        swiperRef.current?.slideToLoop(index);
    };

    return (
        <section
            className="relative lg:min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat py-20 mt-20"
            style={{ backgroundImage: "url('/location-banner.png')" }}>
            <Container >
                <div className="h-full flex flex-col justify-center w-full md:max-w-[65%] lg:max-w-[55%] bg-white/5 border border-white/10 rounded-[12px] p-4">
                    <p className=" uppercase tracking-widest mb-3 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block font-primary font-semibold">
                        Premier Mississauga Digital Agency
                    </p>
                    <h1 className="font-primary font-semibold text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-4">
                        Web Design Mississauga — Built to Convert, Not Just to Impress
                    </h1>
                    <div className="space-y-4 text-white/80 leading-relaxed mb-8">
                        <p>
                            Mississauga businesses move fast. Your website should keep up. HTSOL Inc. designs and builds custom websites for local businesses — fast to launch, built for search, and designed to turn visitors into enquiries.
                        </p>
                        <p>
                            We're based right here in Mississauga. We know the market, we know the competition, and we know what it takes for a local business to stand out online in the GTA.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="white" href="/contact-us">Book A Free Consultation</Button>
                        <Button href="/" variant="outline">
                            View Our Work
                        </Button>
                    </div>
                </div>
            </Container>

        </section>
    );
};

export default Banner;
