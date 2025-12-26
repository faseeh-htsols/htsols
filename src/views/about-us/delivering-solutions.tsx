import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { DELIVERING_SOLUTIONS } from "@/constants";
import Image from "next/image";
import React from "react";

const DeliveringSolutions = () => {
  return (
    <div className="text-white py-24">
      <Container>
        <div>
          <HeadingTwo className="text-center" span="EXCELLENCE">
            DELIVERING DIGITAL SOLUTIONS WITH STRATEGY AND
          </HeadingTwo>
        </div>
        <div className="grid grid-cols-3">
          {DELIVERING_SOLUTIONS.map((solution, index) => (
            <div key={solution.name} className="relative px-3">
              <div
                className={`absolute top-0 right-0 h-full w-1 ${
                  DELIVERING_SOLUTIONS.length - 1 !== index ? "bg-white" : ""
                }`}
              ></div>
              <div className="max-w-[340px] mx-auto flex flex-col gap-5">
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
