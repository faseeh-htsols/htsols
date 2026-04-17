import React from "react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import DoubleCurves from "@/components/ui/double-curves";
import ArrowLinkButton from "@/components/ui/arrow-link-button";
import HeadingTwo from "@/components/ui/heading-two";

const FUNDAMENTALS = [
    "Consent-friendly analytics and cookie setups when required",
    "Privacy basics aligned with Canadian expectations, including PIPEDA considerations",
    "Accessibility best practices aligned with WCAG, and AODA considerations for Ontario-based organizations",
    "Security basics like SSL, updates, and form protection",
];

const ExpertSupport = () => {
    return (
        <section className="relative bg-[url(/staff-augmentation/expert-bg.png)] bg-cover bg-center overflow-hidden bg-no-repeat">
            <Container>
                <div className="relative z-10 flex flex-col justify-start items-start gap-6 py-16 lg:py-24 max-w-2xl">
                    <HeadingTwo className="">
                        NEED AN EXTRA PAIR OF HANDS — OR AN ENTIRE CAPABILITY YOU DO NOT HAVE YET?
                    </HeadingTwo>
                    <p className="text-white leading-relaxed">
                        Tell us what you need, what your timeline looks like, and what a successful engagement means for your business. We will match you with the right talent and get you started fast — no lengthy procurement process, no enterprise contract, no unnecessary complexity.
                    </p>
                    <div className="flex justify-start">
                        <ArrowLinkButton
                            href="#white-label-form"
                            variant="teal"
                            className="h-[60px] w-fit px-4 text-[13px] tracking-[0.05em] md:min-w-[220px] md:text-[18px]"
                        >
                            Tell Us What You Need
                        </ArrowLinkButton>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ExpertSupport;
