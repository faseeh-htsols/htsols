import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="relative  pt-32 py-10">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <h1 className="text-4xl  lg:text-5xl font-primary font-semibold text-white uppercase leading-15">
            INSIGHTS IDEAS <br /> & INNOVATION
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-xl">
            HT-Solutions provides you Website Designing, Web Development, SEO
            Services, Graphic Designing, Mobile Application Development.
          </p>
        </div>
        <div className="mt-10 h-px w-full bg-white/30" />
      </Container>
    </section>
  );
};

export default Banner;
