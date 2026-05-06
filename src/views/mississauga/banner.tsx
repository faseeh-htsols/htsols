import Button from "../../components/ui/Button";
import Image from "next/image";


interface BannerData {
    data: {
        highLight: string;
        title: string;
        para: string;
        firstBtnText: string;
        firstBtnLink: string;
        secondBtnText: string;
        secondBtnLink: string;
    }
}


export const Banner = ({ data }: BannerData) => {

    return (
        <div className="mx-3 mt-26 lg:mt-29 xl:mt-26 rounded-[20px] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] p-px md:mx-4 lg:mx-5">
            <section className="relative overflow-hidden rounded-[20px] py-20 lg:min-h-screen">
                <Image
                    src="/location-banner.webp"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="absolute inset-0 z-0 object-cover object-center xl:object-right"
                    aria-hidden="true"
                />
                {/* <Container > */}
                <div className="relative z-10 max-w-8xl px-5 mx-auto">
                    <div className="h-full flex flex-col justify-center w-full md:max-w-[65%] lg:max-w-[55%] bg-white/5 border border-white/10 rounded-[12px] p-4">
                        <p className=" uppercase tracking-widest mb-3 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent inline-block font-primary font-semibold">
                            {data.highLight}
                        </p>
                        <h1 className="font-primary font-semibold text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-4">
                            {data.title}
                        </h1>
                        <div className="text-white/80 leading-relaxed mb-8">
                            <p dangerouslySetInnerHTML={{ __html: data.para }}></p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button variant="white" href={data.firstBtnLink}>{data.firstBtnText}</Button>
                            <Button href={data.secondBtnLink} variant="outline">
                                {data.secondBtnText}
                            </Button>
                        </div>
                    </div>
                </div>
                {/* </Container> */}
            </section>
        </div>
    );
};

export default Banner;
