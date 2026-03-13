import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import LottiePlayer from "@/components/ui/lottie-player";
import { WEB_DEV_SERVICES_WE_OFFER } from "@/constants";

const ServicesWeOfferCanada = () => {
  return (
    <DoubleCurves up className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <Container>
        <div className="py-20">
          <HeadingTwo className="text-center mb-8">
            Web Development Services We Offer in Canada
          </HeadingTwo>
          <div className="flex flex-row flex-wrap gap-10">
            {WEB_DEV_SERVICES_WE_OFFER.map((item, index) => (
              <div
                key={item.heading}
                className="relative group lg:w-[calc(33.33%-27px)] bg-tertiary rounded-lg px-4 py-6 hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]">
                <div className="p-3 absolute right-0 top-0 text-xl rounded-bl-2xl font-primary bg-black">
                  0 {index + 1}
                </div>
                <div className="flex flex-col gap-4">
                  <div className="p-4 border border-[#075B65] group-hover:bg-white w-fit rounded-full group-hover:[&_svg_path]:!fill-black">
                    {/* {parse(item.svg)} */}
                    <LottiePlayer
                      className="w-[45px] h-[45px]"
                      src={item.icon}
                      autoplay
                      loop
                    />
                  </div>
                  <h3 className="font-primary uppercase">{item.heading}</h3>
                  <p>{item.para}</p>
                </div>
              </div>
            ))}
            <div className="flex relative  grow flex-col gap-6 bg-[url(/website/cta-bg.webp)] bg-cover bg-center bg-no-repeat rounded-2xl p-5">
              <div className="absolute top-0 right-0 w-[25%] h-full bg-[url(/website/cta-circle.webp)] bg-cover bg-center bg-no-repeat"></div>
              <h3 className="uppercase font-primary text-[22px] relative font-medium ">
                Looking for <br /> Professional Growth?
              </h3>
              <p className="relative">
                We’re always open to connecting with driven designers, developers,
                marketers, and
                <br /> strategists who want to do meaningful work with a supportive
                team.
              </p>
              <div className="flex relative">
                <Button href="/">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </DoubleCurves>
  );
};

export default ServicesWeOfferCanada;
