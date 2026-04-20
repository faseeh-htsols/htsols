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

interface ExpertSupportData {
    bgImage: string;
    title: string;
    para: string;
    btnText: string;
    btnLink: string;
    className?: string;
};

interface ExpertSupportProps {
    data: ExpertSupportData;
};

const ExpertSupport = ({ data }: ExpertSupportProps) => {
    return (
        <section className="relative bg-cover bg-center overflow-hidden bg-no-repeat"
            style={{ backgroundImage: `url(${data.bgImage})` }}
        >
            <Container>
                <div className={`relative z-10 flex flex-col justify-start items-start gap-6 py-16 lg:py-24 max-w-2xl ${data.className}`}>
                    <HeadingTwo className="">
                        {data.title}
                    </HeadingTwo>
                    <p className="text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: data.para }} />
                    <div className="flex justify-start">
                        <ArrowLinkButton
                            href={data.btnLink}
                            variant="teal"
                            className="h-[60px] w-fit px-4 text-[13px] tracking-[0.05em] md:min-w-[220px] md:text-[18px]"
                        >
                            {data.btnText}
                        </ArrowLinkButton>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ExpertSupport;
