import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import LottiePlayer from "@/components/ui/lottie-player";
import { WEB_DEV_BENEFITS } from "@/constants";

const Benefits = () => {
  return (
    <div className="py-20">
      <Container>
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
                className="text-2xl uppercase text-center font-primary"
              ></h3>
              <p className="text-center w-[80%] mx-auto">{benefit.para}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Benefits;
