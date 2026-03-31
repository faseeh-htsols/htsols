import Button from "../../components/ui/Button";
import Container from "@/components/ui/container";


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
        <section
            className="relative lg:min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat py-20 mt-20 mx-3 md:mx-4 lg:mx-5 rounded-[12px]"
            style={{ backgroundImage: "url('/location-banner.png')" }}
        >
            <Container >
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
            </Container>

        </section>
    );
};

export default Banner;
