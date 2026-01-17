import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";

const Approach = () => {
  return (
    <div className="text-white relative bg-tertiary py-20  -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>
      <Container>
        <div className="grid grid-cols-2 gap-24 items-center">
          <div className="">
            <div className="w-[45%]">
              <Image
                src={"/services/approach-1.png"}
                width={500}
                height={500}
                className="w-full h-[370px] rounded-lg object-cover"
                alt="graph"
              />
            </div>
            <div className="w-[68%] relative -mt-[150px] ms-auto">
              <Image
                src={"/services/approach-2.png"}
                width={500}
                className="w-full rounded-lg h-[300px] object-cover"
                height={500}
                alt="graph"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 ">
            <HeadingTwo>Approach</HeadingTwo>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium. (Focus on modernizing and scaling business
              processes.)
            </p>
            <div className="flex flex-row justify-between">
              <h3 className="text-[20px] font-semibold font-primary uppercase bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">
                Monitor
              </h3>
              <h3 className="text-[20px] font-semibold font-primary uppercase ">
                Analyze
              </h3>
              <h3 className="text-[20px] font-semibold font-primary uppercase ">
                Multipy
              </h3>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium. (Focus on modernizing and scaling business
              processes.)
            </p>
            <div className="flex">
              <Button href="/">Get Started</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Approach;
