"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import Container from "@/components/ui/container";
import Button from "@/components/ui/Button";

interface Testimonial {
    content: string;
}

const testimonials: Testimonial[] = [
    {
        content:
            "We keep SEO transparent. No vague promises. No black-box work. You receive a clear roadmap, steady progress, and reporting written in plain language.",
    },
    {
        content:
            "Exceptional technical expertise combined with creative vision. HtSol Inc. delivered a robust, scalable solution perfectly aligned with our business needs.",
    },
    {
        content:
            "Working with HtSol Inc. has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
    },
    {
        content:
            "The team's attention to detail and commitment to excellence is unmatched. Our new website has significantly improved our conversion rates and user engagement.",
    },
    {
        content:
            "Exceptional technical expertise combined with creative vision. HtSol Inc. delivered a robust, scalable solution perfectly aligned with our business needs.",
    },
    {
        content:
            "Working with HtSol Inc. has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
    },
    {
        content:
            "The team's attention to detail and commitment to excellence is unmatched. Our new website has significantly improved our conversion rates and user engagement.",
    },
];

const ClearStrategy = () => {
    return (
        <DoubleCurves
            up
            className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
        >
            <section className="relative bg-black pb-10 pt-16 md:py-20 overflow-hidden">
                <Container>
                    <div className="">
                        <div className="text-center mb-10">
                            <p className="uppercase tracking-widest mb-5 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block  font-primary">
                                A Canadian SEO Partner You Can Measure
                            </p>

                            <HeadingTwo className="text-center">
                                Clear Strategy.
                                <br />
                                Real Results.
                            </HeadingTwo>

                            <p className="mt-5 text-white max-w-5xl mx-auto">
                                HTSOL Inc. prioritises clarity, execution, and measurable outcomes.
                                You should always know what we are doing, why it matters, and how
                                it affects your growth.
                            </p>
                        </div>

                        <div className="">
                            <Swiper
                                modules={[Autoplay]}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }}
                                centeredSlides={false}
                                slidesPerView={1}
                                slidesPerGroup={1}
                                spaceBetween={500}
                                className="clear-strategy-swiper w-full overflow-hidden"
                            >
                                {testimonials.map((t, i) => (
                                    <SwiperSlide key={i} className="w-full!">
                                        <div className="w-full rounded-[12px] p-px bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] shadow-[0_0_30px_rgba(0,131,138,0.16)]">
                                            <div className="rounded-[12px] bg-black p-2">
                                                <div className="relative rounded-[10px] bg-tertiary h-full px-5 sm:px-8 md:px-14 py-8 md:py-10 overflow-hidden flex flex-col items-center justify-center text-center">
                                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,131,138,0.08),transparent_60%)]" />

                                                    <div className="relative z-2 mb-4">
                                                        <svg
                                                            width="42"
                                                            height="24"
                                                            viewBox="0 0 42 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M1 23V10.5C1 4.70101 5.70101 0 11.5 0H16L12 8H16V23H1Z"
                                                                stroke="#00838A"
                                                                strokeWidth="1.5"
                                                            />
                                                            <path
                                                                d="M26 23V10.5C26 4.70101 30.701 0 36.5 0H41L37 8H41V23H26Z"
                                                                stroke="#00838A"
                                                                strokeWidth="1.5"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <p
                                                        dangerouslySetInnerHTML={{ __html: t.content }}
                                                        className="relative z-2 text-white uppercase font-primary font-semibold text-[18px] md:text-[22px] leading-[1.35] max-w-[980px] mx-auto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="flex flex-wrap items-center justify-center gap-4 mt-4 lg:mt-10">
                                <Button href="/">GET A FREE SEO REVIEW</Button>
                                <Button href="/" variant="outline">TALK TO AN SEO EXPERT</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </DoubleCurves>
    );
};

export default ClearStrategy;