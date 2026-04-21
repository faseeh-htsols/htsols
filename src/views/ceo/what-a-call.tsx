import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import Image from "next/image";

interface Buttons {
    text: string;
    link: string;
};

interface WhatACallData {
    title: string;
    para: string;
    image: string;
    buttons: Buttons[];
    className?: string;
};

interface WhatACallProps {
    data: WhatACallData;
};

const WhatACall = ({ data }: WhatACallProps) => {
    return (
        <DoubleCurves up className="-mt-[2.3%] sm:-mt-[3%] md:-mt-[3%] lg:-mt-[2%] xl:-mt-[2%] [clip-path:polygon(0_1%,100%_-10px,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_-5px,100%_97%,0_100%)]">
            <div className="py-20 lg:py-40">
                <Container>
                    <div className="border border-[#5C5C5C] rounded-lg px-5 flex lg:flex-row flex-col gap-0 lg:gap-4 relative text-white mb-20 bg-[linear-gradient(90deg,#075B65_0%,#00838A_50%,#328A99_100%)]">
                        {/* top right bg image */}
                        <div className="pointer-events-none absolute right-0 top-0 h-[380px] w-[260px] bg-[url('/top-effect.webp')] bg-contain bg-no-repeat" />

                        {/* bottom left bg image */}
                        <div className="pointer-events-none absolute bottom-0 left-0 h-[180px] w-[180px] bg-[url('/bottom-effect.webp')] bg-contain bg-no-repeat" />

                        <div className="lg:w-[56%] py-8 flex flex-col gap-4 z-10">
                            <h2 className="font-primary uppercase text-2xl">
                                {data.title}
                            </h2>
                            <p className="text-xl">
                                {data.para}
                            </p>
                            <div className="mt-4 flex flex-col items-center justify-start gap-3 sm:flex-row">
                                <Button variant="white" href={data.buttons[0].link}>
                                    {data.buttons[0].text}
                                </Button>

                                {data.buttons[1] && (
                                    <Button variant="outline" href={data.buttons[1].link}>
                                        {data.buttons[1].text}
                                    </Button>
                                )}
                            </div>
                        </div>
                        <div className="lg:w-[37%] lg:absolute lg:-top-10 lg:right-0 z-10">
                            <Image
                                src={data.image}
                                alt="Call back from us"
                                width={700}
                                height={700}
                                className={`w-full h-[300px] lg:h-[380px] object-contain ${data.className}`}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </DoubleCurves>
    );
};

export default WhatACall;
