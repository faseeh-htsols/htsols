import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-black relative py-10 pt-32 [clip-path:polygon(0_0,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_97%,0_100%)]">
      <div className="absolute top-20 left-0">
        <Image
          src={"/left-gradient.webp"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <div className="absolute top-20 right-0">
        <Image
          src={"/right-gradient.webp"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <Container>
        <div>
          <h1 className="text-5xl lg:text-8xl font-primary font-semibold text-white text-center uppercase">
            <span className="flex uppercase items-center font-primary gap-3">
              <span className="border-b-2 border-white">Digital</span>
              <Image
                src={"/services-header.webp"}
                width={200}
                height={200}
                alt="services header"
                className="lg:w-[400px] w-[120px] object-contain h-[100px] lg:h-[186px]"
              />
            </span>
            <span className="border-b-2 border-white">Growth Services</span>
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
