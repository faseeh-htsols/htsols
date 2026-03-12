import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import LottiePlayer from "@/components/ui/lottie-player";
import Image from "next/image";

const WEB_DEV_SERVICES_WE_OFFER = [
    {
        icon: "/seo-icon.svg",
        heading: "Consistent lead flow",
    },
    {
        icon: "/seo-icon.svg",
        heading: "Lower acquisition costs over time",
    },
    {
        icon: "/seo-icon.svg",
        heading: "Stronger brand trust",
    },
    {
        icon: "/seo-icon.svg",
        heading: "Better performance across all channels",
    },
];

const ReadyToGrow = () => {
    return (
        <DoubleCurves
            up
            className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)] bg-black"
        >
            <section className="bg-black py-14 md:py-20">
                <Container>
                    <div className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[45%_50%] lg:gap-10">
                            {/* Left */}
                            <div className="flex h-full flex-col justify-between">
                                <div>
                                    <HeadingTwo className="text-start text-white uppercase lg:text-[40px]">
                                        SEO Is a Long-Term Marketing Investment
                                    </HeadingTwo>

                                    <p className="mt-4 text-white">
                                        Paid advertising stops the moment spending pauses. SEO continues working once a strong foundation is built and maintained.
                                        <br /><br />
                                        When your customers search, SEO helps you appear at the right moment with the right message.
                                    </p>
                                </div>

                                <div className="flex mt-4">
                                    <Button href="/">
                                        Get a free SEO review
                                    </Button>
                                </div>
                            </div>

                            {/* Right cards */}
                            <div className="flex h-full flex-col">
                                <h3 className="font-semibold font-primary text-[18px] uppercase text-white  leading-[1.3] text-left mb-5">
                                    A well-planned strategy creates:
                                </h3>
                                <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2">
                                    {WEB_DEV_SERVICES_WE_OFFER.map((item) => (
                                        <div
                                            key={item.heading}
                                            className="rounded-[5px] bg-[linear-gradient(90deg,#075B65,#00838A,#328A99)] p-px"
                                        >
                                            <div className="flex h-full min-h-[92px] flex-col items-center  justify-center md:justify-start rounded-[5px] bg-tertiary px-4 py-5 text-left">
                                                <div className="mb-3 flex h-10 items-center justify-center w-full">
                                                    <Image
                                                        src={item.icon}
                                                        alt={item.heading}
                                                        width={40}
                                                        height={40}
                                                        className="object-contain"
                                                        aria-hidden="true"
                                                    />
                                                </div>

                                                <p className="font-semibold text-[16px] uppercase text-white  leading-[1.3] text-center">
                                                    {item.heading}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="relative mt-10 overflow-hidden rounded-[10px] border border-white/25 bg-[linear-gradient(90deg,#075B65_0%,#00838A_50%,#328A99_100%)] px-5 py-10 md:px-10 md:py-12">
                            {/* top right bg image */}
                            <div className="pointer-events-none absolute right-0 top-0 h-[480px] w-[280px] bg-[url('/top-effect.png')] bg-contain bg-no-repeat" />

                            {/* bottom left bg image */}
                            <div className="pointer-events-none absolute bottom-0 left-0 h-[180px] w-[180px] bg-[url('/bottom-effect.png')] bg-contain bg-no-repeat" />

                            <div className="relative mx-auto max-w-[760px] text-center">
                                <h3 className="font-primary text-[28px] font-semibold uppercase leading-none text-white md:text-[42px]">
                                    Ready to grow with SEO?
                                </h3>

                                <p className="mx-auto mt-4 max-w-[660px] leading-[1.8] text-white">
                                    Tell us what you offer, where you operate in Canada, and what success looks like for your business. We will review your current visibility and share a clear path forward based on real findings.
                                </p>

                                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                    <Button href="/">Request an SEO consultation</Button>

                                    <Button href="/" variant="outline">
                                        Get my SEO roadmap
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </DoubleCurves>
    );
};

export default ReadyToGrow;