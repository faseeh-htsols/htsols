import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { DELIVERING_SOLUTIONS } from "@/constants";
import Image from "next/image";
import React from "react";

const DeliveringSolutions = () => {
  return (
    <div>
      <Container>
        <div>
          <HeadingTwo span="EXCELLENCE">
            DELIVERING DIGITAL SOLUTIONS WITH STRATEGY AND
          </HeadingTwo>
        </div>
        <div className="grid grid-cols-3">
          {DELIVERING_SOLUTIONS.map((solution) => (
            <div key={solution.name}>
              <div>
                <Image
                  src={solution.image}
                  alt={solution.name}
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px]"
                />
              </div>
              <h3>{solution.name}</h3>
              <p>{solution.para}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DeliveringSolutions;
