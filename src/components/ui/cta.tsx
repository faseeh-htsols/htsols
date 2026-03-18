import React from "react";
import Container from "./container";
import Button from "./Button";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="pt-24 pb-32">
      <Container>
        <div className="border border-[#5C5C5C] rounded-lg px-4 flex lg:flex-row flex-col gap-4 relative text-white">
          <div className="lg:w-[56%] py-8 flex flex-col gap-4">
            <h2 className="font-primary uppercase text-2xl">
              Want A Call back from us ?
            </h2>
            <p className="text-xl">
              HT-Solutions provides you Website Designing, Web Development, SEO
              Services, Graphic Designing.
            </p>
            <div className="flex">
              <Button href="/">Schedule A call Back</Button>
            </div>
          </div>
          <div className="lg:w-[37%] lg:absolute lg:-top-10 lg:right-0">
            <Image
              src={"/call-back-from-us.webp"}
              alt="Call back from us"
              width={700}
              height={700}
              className="w-full h-[380px] object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
