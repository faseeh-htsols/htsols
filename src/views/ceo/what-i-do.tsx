import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import LottiePlayer from "@/components/ui/lottie-player";
import { WHAT_I_DO_CEO } from "@/constants";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

interface Cards {
    icon: string;
    heading: string;
    para: string;
};

interface WhatIDoData {
    title: string;
    para: string;
    cards: Cards[];
};

interface WhatIDoProps {
    data: WhatIDoData;
};

const WhatIDo = ({ data }: WhatIDoProps) => {
    return (
        <DoubleCurves
            up
            className="-mt-[3%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[4%] [clip-path:polygon(0_1%,100%_-10px,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_-5px,100%_97%,0_100%)]"
            innerClassName="-rotate-3! top-6! h-[0.5%]! sm:h-[1%]! md:top-0! md:-rotate-2! xl:h-[2.4%]!">
            {/* <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div> */}
            <div className="bg-black py-24 lg:py-40 relative">
                <Container>
                    <div>
                        <div className="max-w-[1124px] mx-auto flex flex-col gap-5 mb-8">
                            <HeadingTwo className="text-center">{data.title}</HeadingTwo>
                            <p className="text-center" dangerouslySetInnerHTML={{ __html: data.para }} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-6">
                        {data.cards.map((item, index) => (
                            <div
                                key={item.heading}
                                className="relative group  bg-[#051315] rounded-4xl px-8 py-8 border border-[#FFFFFF1A] hover:border-[#00A1A5]"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative p-2 border border-[#00A1A526] group-hover:border-[#00A1A5] bg-[#00A1A526] w-fit rounded-2xl ">
                                            {/* {parse(item.svg)} */}
                                            <Image
                                                width={27}
                                                height={34}
                                                src={item.icon}
                                                alt={item.heading}
                                                className="w-[45px] h-[45px]"
                                            />
                                            {/* <LottiePlayer
                      className="w-[45px] h-[45px]"
                      src={item.icon}
                      autoplay
                      loop
                    /> */}
                                        </div>
                                        <h3 className="font-primary uppercase font-semibold">{item.heading}</h3>
                                    </div>
                                    <p>{item.para}</p>
                                    <Link href="/contact-us" className="uppercase font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100">Get Service <Image src="/ceo/arrow.svg" alt="arrow-right" width={16} height={16} /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </DoubleCurves>
    );
};

export default WhatIDo;
