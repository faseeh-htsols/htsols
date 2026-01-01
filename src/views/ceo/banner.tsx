import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url(/ceo/header-bg.png)] bg-cover pt-20">
      <Container>
        <div className="flex justify-center relative">
          <Image
            src={"/ceo/ceo.png"}
            className="w-[600px] relative h-[700px] object-contain"
            width={1000}
            height={1000}
            alt="ceo"
          />
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] -z-1 h-[400px] -translate-y-1/2">
            <div className="border-[#B7B8B8] border-8 absolute w-full h-full "></div>
          </div>
          <div className=" absolute top-1/2 flex flex-col justify-end left-1/2 -translate-x-1/2 w-[700px] h-[400px] -translate-y-1/2">
            <div className="flex flex-col justify-end gap-4">
              <h1 className="uppercase relative z-3 font-primary text-5xl text-center">
                meet Faseeh ullah
              </h1>
              <h2 className="font-sans font-semibold text-center">
                <span className="relative  text-4xl">
                  <span className="relative z-2">CEO & FOUNDER</span>
                  <span
                    className="absolute bottom-3 left-0 w-full h-3 bg-primary "
                    style={{
                      background:
                        "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)",
                    }}
                  ></span>
                </span>
              </h2>
              <div className="flex gap-4 justify-center w-full">
                <a href="">
                  <Image
                    src={"/ceo/instag.svg"}
                    alt="Faseeh Ullah"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
                <a href="">
                  <Image
                    src={"/ceo/linkedin.svg"}
                    alt="Faseeh Ullah"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
                <a href="">
                  <Image
                    src={"/ceo/facebook-svg.svg"}
                    alt="Faseeh Ullah"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
                <a href="">
                  <Image
                    src={"/ceo/twitter.svg"}
                    alt="Faseeh Ullah"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
