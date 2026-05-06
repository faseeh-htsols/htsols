import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import Container from "@/components/ui/container";
import Button from "@/components/ui/Button";
import Image from "next/image";

const images = [
    "/staff-augmentation/star.svg",
    "/staff-augmentation/star.svg",
    "/staff-augmentation/star.svg",
    "/staff-augmentation/star.svg",
    "/staff-augmentation/star.svg",
];

interface DigitalAgencyData {
    title: string;
    para: string;
    highLight: string;
    bottomPara: string;
    bgImage?: string;
    curveLine?: boolean;
    className?: string;
};

interface DigitalAgencyProps {
    data: DigitalAgencyData;
};

const DigitalAgency = ({ data }: DigitalAgencyProps) => {

    const content = (
        <section className={`relative ${data.bgImage ? "bg-cover bg-center bg-no-repeat" : "bg-black"} py-20 lg:py-40 overflow-hidden ${data.className}`}
            style={data.bgImage ? { backgroundImage: `url(${data.bgImage})` } : {}}>
            <Container>
                <div className="">
                    <div className="mb-10 flex flex-col justify-center items-center gap-4">
                        <HeadingTwo className="text-center mb-3">
                            {data.title}
                        </HeadingTwo>
                        <div className="flex justify-center items-center gap-4">
                            {images.map((img, index) => (
                                <div key={index} >
                                    <Image
                                        src={img}
                                        alt="quote"
                                        width={44}
                                        height={44}
                                        className="w-11 h-11"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
                            <Image
                                src="/staff-augmentation/blur-overlay.webp"
                                width={500}
                                height={500}
                                className="h-[550px] w-[550px] object-contain"
                                alt="blur overlay"
                            />
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-5 w-full">
                            <Image
                                src="/staff-augmentation/quote.svg"
                                alt="quote"
                                width={44}
                                height={44}
                                className="w-11 h-11"
                            />
                            <p className="text-white text-center leading-[1.35]" dangerouslySetInnerHTML={{ __html: data.para }} />
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center gap-4 mt-4 lg:mt-10">
                            <p className="uppercase tracking-widest text-[#00A1A5] font-primary text-[18px] md:text-[22px]">
                                {data.highLight}
                            </p>
                            <p className="text-[#DDDDDD] uppercase text-[18px] leading-[1.35] text-center">
                                {data.bottomPara}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
    return data.curveLine ? (
        <DoubleCurves
            up
            className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
            innerClassName="-rotate-1! top-1! md:top-1! h-[1.5%]! md:-rotate-1! md:h-[1.3%]! lg:-rotate-1! lg:top-2! lg:h-[2.5%]! xl:-rotate-1! xl:top-3! xl:h-[2%]!">
            {content}
        </DoubleCurves>
    ) : (
        content
    );
};

export default DigitalAgency;
