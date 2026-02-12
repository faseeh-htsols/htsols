import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-black relative pb-32 pt-32 [clip-path:polygon(0_0,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_97%,0_100%)]">
      <div className="absolute top-20 left-0">
        <Image
          src={"/left-gradient.png"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <div className="absolute top-20 right-0">
        <Image
          src={"/right-gradient.png"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <Container>
        <div>
          <h1 className="text-4xl  lg:text-8xl font-primary font-semibold text-white text-center uppercase">
            <span className="flex uppercase items-center font-primary gap-3">
              <span className="border-b-2 border-white">About</span>
              <Image
                src={"/services-header.png"}
                width={200}
                height={200}
                alt="services header"
                className="lg:w-[400px] w-[170px] object-contain h-[110px] lg:h-[186px]"
              />
            </span>
            <span className="border-b-2 border-white">HtSol Inc.</span>
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col mt-20 gap-9 items-center">
          <div className="shrink-0">
            <Button href="/" variant="outline">
              START YOUR PROJECT
            </Button>
          </div>
          <p className="text-secondary text-2xl">
            We are bluo, bluo is a creative digital agency with serveral
            services which focused on quality and innovations for your company.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
