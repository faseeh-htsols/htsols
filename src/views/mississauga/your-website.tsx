import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import Container from "@/components/ui/container";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface YourWebsiteData {
    data: {
        title: string;
        highLight: string;
        para: string;
        cardIcon: string;
        cardHeading: string;
        cardPara: string;
    }
}

const YourWebsite = ({ data }: YourWebsiteData) => {
    return (
        <section className="relative bg-black py-20 overflow-hidden">
            <Container>
                <div className="">
                    <div className="text-center mb-10">
                        <HeadingTwo className="text-center mb-3">
                            {data.title} {" "}
                            <span className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">{data.highLight}</span>
                        </HeadingTwo>
                        <p className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed mb-8"
                            dangerouslySetInnerHTML={{ __html: data.para }}>
                        </p>
                    </div>
                    <div>
                        <div className="w-full rounded-[12px] p-px bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] shadow-[0_0_30px_rgba(0,131,138,0.16)]">
                            <div className="rounded-[12px] bg-black p-2">
                                <div className="relative rounded-[10px] bg-tertiary h-full px-5 sm:px-8 md:px-14 py-8 md:py-10 overflow-hidden flex flex-col items-center justify-center text-center gap-6">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,131,138,0.08),transparent_60%)]" />

                                    <div className="relative z-2 w-full mx-auto flex flex-col gap-10 md:gap-12">
                                        <div className="flex flex-col  gap-5 w-full">
                                            <div className="flex justify-end items-end w-full">
                                                <Image
                                                    src={data.cardIcon}
                                                    alt="quote"
                                                    width={44}
                                                    height={44}
                                                    className="w-11 h-11"
                                                />
                                            </div>
                                            <div className="flex flex-col items-start justify-start gap-6 w-full md:max-w-[90%]">
                                                <p className="text-white uppercase font-primary font-semibold md:text-[18px] leading-[1.35] text-start">
                                                    {data.cardHeading}
                                                </p>
                                                <p className=" uppercase tracking-widest bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block font-primary font-semibold">
                                                    {data.cardPara}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default YourWebsite;
