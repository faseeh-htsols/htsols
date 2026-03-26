import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import LottiePlayer from "@/components/ui/lottie-player";
import { WEB_DEV_BENEFITS } from "@/constants";

const Benefits = () => {
  return (
    <DoubleCurves up className="bg-tertiary -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <Container>
        <div className="py-20 lg:py-40">
          <HeadingTwo className="text-center mb-8">
            How Website Development Benefits Your Business
          </HeadingTwo>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 relative gap-x-7 gap-y-14 ">
            <div className="absolute hidden lg:block top-[46%] -translate-y-1/2 bg-white h-px w-full left-0"></div>
            <div className="absolute hidden lg:block top-0 left-[33.33%] bg-white h-full w-px"></div>
            <div className="absolute hidden lg:block top-0 left-[66.66%] bg-white h-full w-px"></div>
            {WEB_DEV_BENEFITS.map((benefit, index) => (
              <div key={benefit.name} className="flex flex-col gap-6 ">
                <div className="flex justify-center">
                  <LottiePlayer
                    className="w-[70px] h-[70px]"
                    src={benefit.image}
                    autoplay
                    loop
                  />
                </div>{" "}
                <h3
                  dangerouslySetInnerHTML={{ __html: benefit.name }}
                  className="text-2xl uppercase text-center font-primary"></h3>
                <p className="text-center w-[80%] mx-auto">{benefit.para}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </DoubleCurves>
  );
};

export default Benefits;
