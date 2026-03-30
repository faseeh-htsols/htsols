import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import Container from "@/components/ui/container";
import Button from "@/components/ui/Button";
import Image from "next/image";
const YourWebsite = () => {
    return (
        <section className="relative bg-black py-20 overflow-hidden">
            <Container>
                <div className="">
                    <div className="text-center mb-10">
                        <HeadingTwo className="text-center mb-3">
                            Your Website Is Your Hardest-Working Employee — <span className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">Is It Pulling Its Weight?</span>
                        </HeadingTwo>
                        <p className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed mb-8">
                            When a potential customer in Mississauga searches for your service, they're going to land somewhere. If that somewhere isn't a fast, clear, trustworthy website, they'll click away and hire the competitor who showed up better.
                            <br /><br />
                            A professionally built website doesn't just look good — it works. It loads in seconds, answers the right questions immediately, guides visitors to take action, and supports every other piece of your marketing. SEO, paid ads, social media — all of it performs better when the website underneath is solid.
                            <br /><br />
                            That's exactly what we build.
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
                                                    src="/location-quote.svg"
                                                    alt="quote"
                                                    width={44}
                                                    height={44}
                                                    className="w-11 h-11"
                                                />
                                            </div>
                                            <div className="flex flex-col items-start justify-start gap-6 w-full md:max-w-[90%]">
                                                <p className="text-white uppercase font-primary font-semibold md:text-[18px] leading-[1.35] text-start">
                                                    "A website that looks pretty but doesn't rank is just a digital business card in a drawer. We build tools that actually grow businesses."
                                                </p>
                                                <p className=" uppercase tracking-widest bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block font-primary font-semibold">
                                                    — HTSOL Strategy Team
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
