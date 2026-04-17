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

const DigitalAgency = () => {
    return (
        <DoubleCurves
            up
            className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
            <section className="relative bg-black py-20 lg:py-40 overflow-hidden">
                <Container>
                    <div className="">
                        <div className="mb-10 flex flex-col justify-center items-center gap-4">
                            <HeadingTwo className="text-center mb-3">
                                Loved by Digital Agencies across Canada and the US!
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
                                    src="/staff-augmentation/blur-overlay.png"
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
                                <p className="text-white text-center leading-[1.35]">
                                    Working with HtSolutions has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!
                                    <br /><br />
                                    Working with HtSolutions has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col items-center justify-center gap-4 mt-4 lg:mt-10">
                                <p className="uppercase tracking-widest text-[#00A1A5] font-primary text-[18px] md:text-[22px]">
                                    Alan Baker
                                </p>
                                <p className="text-[#DDDDDD] uppercase text-[18px] leading-[1.35] text-center">
                                    CEO
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </DoubleCurves>
    );
};

export default DigitalAgency;
