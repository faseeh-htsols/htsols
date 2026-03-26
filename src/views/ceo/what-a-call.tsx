import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import Image from "next/image";

const WhatACall = () => {
    return (
        <DoubleCurves up className="-mt-[2%] sm:-mt-[3%] md:-mt-[3%] lg:-mt-[2%] xl:-mt-[1%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_-5px,100%_97%,0_100%)]">
            <div className="py-20 lg:py-40">
                <Container>
                    <div className="border border-[#5C5C5C] rounded-lg px-4 flex lg:flex-row flex-col gap-0 lg:gap-4 relative text-white mb-20">
                        <div className="lg:w-[56%] py-8 flex flex-col gap-4">
                            <h2 className="font-primary uppercase text-2xl">
                                Want A Call back from us ?
                            </h2>
                            <p className="text-xl">
                                HT-Solutions provides you Website Designing, Web Development, SEO Services, Graphic Designing.
                            </p>
                            <div className="flex">
                                <Button variant="outline" href="/contact-us">Schedule A call Back </Button>
                            </div>
                        </div>
                        <div className="lg:w-[37%] lg:absolute lg:-top-10 lg:right-0">
                            <Image
                                src={"/call-back-from-us.webp"}
                                alt="Call back from us"
                                width={700}
                                height={700}
                                className="w-full h-[300px] lg:h-[380px] object-contain"
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </DoubleCurves>
    );
};

export default WhatACall;
