"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

interface SlidesItem {
    company: string;
    heading: string;
    description: string;
    services: string[];
    images: string[];
    accent: string;
}

interface OurWorkData {
    data: {
        topic: string;
        title: string;
        slides: SlidesItem[];
    }
}

const OurWork = ({ data }: OurWorkData) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="relative overflow-hidden bg-[url('/what-happens-after-launch.webp')] bg-cover bg-center bg-no-repeat py-20">
            <Container>
                <div className="relative text-center">
                    <p className="mb-3 font-primary font-semibold uppercase tracking-widest text-white">
                        {data.topic}
                    </p>
                    <HeadingTwo className="text-center">
                        <span dangerouslySetInnerHTML={{ __html: data.title }}></span>
                    </HeadingTwo>
                </div>

                <div className="relative mt-8 md:mt-12">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        spaceBetween={1000}
                        loop
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={700}
                        observer
                        observeParents
                        onSwiper={(swiper: SwiperType) => {
                            swiperRef.current = swiper;
                        }}
                        className="our-work-swiper"
                    >
                        {data.slides.map((study, i) => (
                            <SwiperSlide key={i} className="h-auto!">
                                <div
                                    className="relative overflow-hidden rounded-3xl border border-white/8 bg-cover bg-center p-8 md:p-10 lg:py-14 lg:pl-14 lg:pr-0"
                                    style={{ backgroundImage: `url(${study.accent})` }}
                                >
                                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-6">
                                        <div className="space-y-6">
                                            <div className="flex">
                                                <span className="rounded-full bg-white p-3 text-xs font-medium uppercase tracking-wider text-[#020202]">
                                                    {study.company}
                                                </span>
                                            </div>

                                            <h3 className="font-primary text-2xl font-bold uppercase leading-tight whitespace-pre-line text-white sm:text-3xl lg:text-4xl">
                                                {study.heading}
                                            </h3>

                                            <p className="max-w-2xl leading-relaxed text-white/80">
                                                {study.description}
                                            </p>

                                            <div className="flex flex-wrap gap-x-5 gap-y-5 pt-2">
                                                {study.services.map((svc, idx) => (
                                                    <div
                                                        key={`${svc}-${idx}`}
                                                        className="flex items-center gap-2 w-full lg:w-[calc(35.50%-27px)]"
                                                    >
                                                        <span className="w-full rounded-full border-[0.5px] border-white/80 bg-[#FFFFFF0D] px-2 py-2 text-center text-white/80 text-nowrap">
                                                            {svc}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="relative flex items-center justify-end lg:-mr-8 xl:-mr-12">
                                            <div className="relative ml-auto aspect-4/3 w-[112%] max-w-none">
                                                <Image
                                                    src={study.images[0]}
                                                    alt={`${study.heading} preview`}
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                    className="object-contain object-right"
                                                />
                                            </div>

                                            {study.images[1] && (
                                                <div className="absolute -bottom-4 right-0 hidden aspect-3/4 w-[40%] overflow-hidden rounded-xl border-2 border-black/40 shadow-2xl sm:block lg:right-2 xl:right-4">
                                                    <Image
                                                        src={study.images[1]}
                                                        alt={`${study.heading} mobile preview`}
                                                        fill
                                                        sizes="200px"
                                                        className="object-cover object-right"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="mt-8 flex items-center justify-center gap-5 md:pointer-events-none xl:absolute  xl:-left-8 xl:-right-8 xl:top-1/2 xl:z-20 xl:mt-0 xl:-translate-y-1/2 xl:justify-between">
                        <button
                            ref={prevRef}
                            type="button"
                            onClick={() => swiperRef.current?.slidePrev()}
                            aria-label="Previous slide"
                            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/55 text-white transition-colors hover:cursor-pointer hover:border-[#00A1A5] hover:text-[#00A1A5] md:-translate-x-5"
                        >
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="24"
                                    cy="24"
                                    r="23.5"
                                    transform="matrix(-1 0 0 1 48 0)"
                                    stroke="white"
                                />
                                <path
                                    d="M11.2929 24.7071C10.9024 24.3166 10.9024 23.6834 11.2929 23.2929L17.6569 16.9289C18.0474 16.5384 18.6805 16.5384 19.0711 16.9289C19.4616 17.3195 19.4616 17.9526 19.0711 18.3431L13.4142 24L19.0711 29.6569C19.4616 30.0474 19.4616 30.6805 19.0711 31.0711C18.6805 31.4616 18.0474 31.4616 17.6569 31.0711L11.2929 24.7071ZM36 24V25H12V24V23H36V24Z"
                                    fill="white"
                                />
                            </svg>
                        </button>

                        <button
                            ref={nextRef}
                            onClick={() => swiperRef.current?.slideNext()}
                            type="button"
                            aria-label="Next slide"
                            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/55 text-white transition-colors hover:cursor-pointer hover:border-[#00A1A5] hover:text-[#00A1A5] md:translate-x-5"
                        >
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="24" cy="24" r="23.5" stroke="white" />
                                <path
                                    d="M36.7071 24.7071C37.0976 24.3166 37.0976 23.6834 36.7071 23.2929L30.3431 16.9289C29.9526 16.5384 29.3195 16.5384 28.9289 16.9289C28.5384 17.3195 28.5384 17.9526 28.9289 18.3431L34.5858 24L28.9289 29.6569C28.5384 30.0474 28.5384 30.6805 28.9289 31.0711C29.3195 31.4616 29.9526 31.4616 30.3431 31.0711L36.7071 24.7071ZM12 24V25H36V24V23H12V24Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OurWork;