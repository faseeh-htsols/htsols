import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import LottiePlayer from "@/components/ui/lottie-player";
import Image from "next/image";

interface WebDesignServiceItem {
    icon: string;
    heading: string;
    para: string;
}

interface WebDesignServiceEndCard {
    heading: string;
    para: string;
    btnText: string;
    btnLink: string;
}

interface WebDesignServicesData {
    data: {
        title: string;
        highlight: string;
        services: WebDesignServiceItem[];
        endServices: WebDesignServiceEndCard;
    }
}

const WebDesignServices = ({ data }: WebDesignServicesData) => {
    return (
        <DoubleCurves
            up
            className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
        >
            <Container>
                <div className="bg-black py-20 lg:py-40">
                    <div className="flex flex-col justify-center items-center gap-8 ">
                        <HeadingTwo className="text-center max-w-4xl">
                            {data.title} {" "}
                            <span className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">{data.highlight}</span>
                        </HeadingTwo>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-10 mt-8 md:mt-12">
                        {data.services.map((item, index) => (
                            <div
                                key={item.heading}
                                className="relative group lg:w-[calc(33.33%-27px)] bg-tertiary rounded-lg px-4 py-9 hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
                            >
                                <div className="p-3 absolute right-0 top-0 text-xl rounded-bl-2xl font-primary bg-black">
                                    0 {index + 1}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="p-4 border border-[#075B65] group-hover:bg-white w-fit rounded-full group-hover:[&_svg_path]:fill-black!">
                                        <Image
                                            width={27}
                                            height={34}
                                            src={item.icon}
                                            alt={item.heading}
                                            className="w-8 h-8"
                                        />
                                    </div>

                                    <h3 className="font-primary font-semibold text-[18px] uppercase">{item.heading}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: item.para }}></p>
                                </div>
                            </div>
                        ))}

                        <div className="relative flex items-center justify-center lg:w-[calc(33.33%-27px)] rounded-lg bg-transparent px-4 py-9 text-center">
                            <div className="flex flex-col items-center gap-5 w-full lg:max-w-[300px]">
                                <h3 className="font-primary text-[18px] uppercase font-semibold">
                                    {data.endServices.heading}
                                </h3>

                                <p dangerouslySetInnerHTML={{ __html: data.endServices.para }}></p>

                                <Button variant="white" href={data.endServices.btnLink}>
                                    {data.endServices.btnText}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </DoubleCurves>
    );
};

export default WebDesignServices;
