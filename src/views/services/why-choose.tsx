import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import LottiePlayer from "@/components/ui/lottie-player";
import { SERVICES_WHY } from "@/constants";
import Image from "next/image";

const WhyChoose = () => {
    return (
        <Container>
            <div className="bg-black py-20 lg:py-40">
                <div className="flex flex-col justify-center items-center gap-8 ">
                    <HeadingTwo className="text-center">
                        Why Choose HTSOL as Your Digital Marketing Partner in Canada?
                    </HeadingTwo>
                    {/* <p dangerouslySetInnerHTML={{ __html: item.para }} /> */}
                    <p className="text-center">
                        Choosing HTSOL Inc. means choosing a partner who takes the time to understand your business, goals, and daily operations.
                        Whether you're a small local business or a large corporation, we focus on practical improvements, clear communication, and proven results.
                    </p>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
                    {SERVICES_WHY.map((item, index) => (
                        <div
                            key={item.heading}
                            className="relative group lg:w-[calc(33.33%-27px)] bg-tertiary rounded-lg px-4 py-6 hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
                        >
                            <div className="p-3 absolute right-0 top-0 text-xl rounded-bl-2xl font-primary bg-black">
                                0 {index + 1}
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="p-4 border border-[#075B65] group-hover:bg-white w-fit rounded-full group-hover:[&_svg_path]:fill-black!">
                                    {/* {parse(item.svg)} */}
                                    <Image
                                        width={27}
                                        height={34}
                                        src={item.icon}
                                        alt={item.heading}
                                        className="w-8 h-8"
                                    />
                                    {/* <LottiePlayer
                                        className="w-[45px] h-[45px]"
                                        src={item.icon}
                                        autoplay
                                        loop
                                    /> */}
                                </div>
                                <h3 className="font-primary text-[18px] uppercase">{item.heading}</h3>
                                <p>{item.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default WhyChoose;
