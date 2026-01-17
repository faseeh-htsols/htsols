import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { DELIVERING_SOLUTIONS } from "@/constants";
import Image from "next/image";
import React from "react";

const DeliveringSolutions = () => {
  return (
    <div className="text-white relative py-32 bg-tertiary -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>
      <Container>
        <div>
          <HeadingTwo className="text-center mb-24" span="EXCELLENCE">
            DELIVERING DIGITAL SOLUTIONS WITH STRATEGY AND
          </HeadingTwo>
        </div>
        <div className="grid gap-6 lg:gap-0 lg:grid-cols-3">
          {DELIVERING_SOLUTIONS.map((solution, index) => (
            <div key={solution.name} className="relative py-6 lg:py-0 lg:px-3">
              <div
                className={`absolute lg:top-0 bottom-0 right-0 lg:h-full w-full h-1 lg:w-1 ${
                  DELIVERING_SOLUTIONS.length - 1 !== index ? "bg-white" : ""
                }`}
              ></div>
              <div className="max-w-[310px] mx-auto flex flex-col gap-5">
                <div className="flex justify-center">
                  <Image
                    src={solution.image}
                    alt={solution.name}
                    width={70}
                    height={70}
                    className="w-[70px] h-[70px]"
                  />
                </div>
                <h3 className="text-2xl text-center font-primary">
                  {solution.name}
                </h3>
                <p className="text-center">{solution.para}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DeliveringSolutions;
