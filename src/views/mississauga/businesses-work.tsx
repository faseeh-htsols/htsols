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
    bgImage?: string;
    btnText: string;
    btnLink: string;
}

interface WebDesignServicesData {
    data: {
        title: string;
        highlight?: string;
        para: string;
        services: WebDesignServiceItem[];
        endServices: WebDesignServiceEndCard;
    }
}

const BusinessesWork = ({ data }: WebDesignServicesData) => {
    return (
        <DoubleCurves
            up
            className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
        >
            <div className="bg-tertiary py-20 lg:py-40">
                <Container>
                    <div className="flex flex-col justify-center items-center gap-8 text-center max-w-5xl mx-auto">
                        <HeadingTwo className="text-center">
                            {data.title}
                        </HeadingTwo>
                        <p className="text-center w-full md:w-[90%]" dangerouslySetInnerHTML={{ __html: data.para }}></p>
                    </div>
                    <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-10 mt-8 md:mt-12">
                        {data.services.map((item, index) => (
                            <div
                                key={item.heading}
                                className="relative w-full lg:w-[calc(33.33%-27px)] rounded-[12px] group p-px bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
                            >

                                <div className="flex flex-col gap-4 p-2 rounded-[12px] bg-tertiary h-full">
                                    <div className="flex rounded-[12px] h-full flex-col gap-5 px-5  py-10 items-center bg-black transition-all duration-200 group-hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] ">
                                        <div className="p-4 border border-[#075B65] bg-white w-fit rounded-full group-hover:[&_svg_path]:fill-black!">
                                            <Image
                                                width={27}
                                                height={34}
                                                src={item.icon}
                                                alt={item.heading}
                                                className="w-8 h-8"
                                            />
                                        </div>

                                        <h3 className="font-primary font-semibold uppercase text-center">{item.heading}</h3>
                                        <p className="text-center" dangerouslySetInnerHTML={{ __html: item.para }}></p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div
                            className="relative flex items-center justify-center w-full lg:w-[calc(66.66%-14px)] rounded-[12px] bg-transparent px-5 py-10 text-center bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${data.endServices.bgImage})` }}
                        >
                            <div className="flex flex-col items-start justify-start gap-5 w-full">
                                <h3 className="font-primary  uppercase font-semibold text-start w-full lg:max-w-[500px]">
                                    {data.endServices.heading}
                                </h3>

                                <Button variant="white" href={data.endServices.btnLink}>
                                    {data.endServices.btnText}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </DoubleCurves>
    );
};

export default BusinessesWork;
