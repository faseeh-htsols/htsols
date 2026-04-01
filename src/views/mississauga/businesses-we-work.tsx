import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import LottiePlayer from "@/components/ui/lottie-player";
import Image from "next/image";

interface BusinessesWeWorkItem {
    icon: string;
    para: string;
}

interface BusinessesWeWorkData {
    data: {
        title: string;
        highlight: string;
        para: string;
        services: BusinessesWeWorkItem[];
    }
}

const BusinessesWeWork = ({ data }: BusinessesWeWorkData) => {
    return (
        <section>

            <Container>
                <div className="bg-black py-20">
                    <div className="flex flex-col justify-center items-center gap-8 text-center max-w-5xl mx-auto">
                        <HeadingTwo className="text-center">
                            <span className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">{data.highlight}</span>
                            {" "} {data.title}
                        </HeadingTwo>
                        <p className="text-center w-full md:w-[90%]" dangerouslySetInnerHTML={{ __html: data.para }}></p>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-6 mt-8 md:mt-12">
                        {data.services.map((item, index) => (
                            <div
                                key={item.para + index}
                                className="relative group w-full lg:flex-[0_0_calc((100%-15rem)/7)] bg-[#FFFFFF1A] px-6 py-4 border border-white/80 rounded-xl"
                            >

                                <div className="flex flex-col gap-4 items-center justify-center">
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <Image
                                            width={27}
                                            height={34}
                                            src={item.icon}
                                            alt={item.para}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>
                                    <p
                                        className="text-center text-white"
                                        dangerouslySetInnerHTML={{ __html: item.para }}
                                    ></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BusinessesWeWork;
