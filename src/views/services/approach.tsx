import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";

const Approach = () => {
  return (
    <div className="text-white">
      <Container>
        <div className="grid grid-cols-2 gap-10 items-center">
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
          <div>
            <HeadingTwo>Approach</HeadingTwo>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium. (Focus on modernizing and scaling business
              processes.)
            </p>
            <div className="flex flex-row justify-between">
              <h3>Monitor</h3>
              <h3>Analyze</h3>
              <h3>Multipy</h3>
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
