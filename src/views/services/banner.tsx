import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-black relative py-10 mt-10">
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
          <h1 className="text-8xl font-primary">
            <span>Digital</span>
            <Image
              src={"/services-header.png"}
              width={200}
              height={200}
              alt="services header"
            />
            <span>Growth Services</span>
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
