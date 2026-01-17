import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url(/ceo/header-bg.png)] bg-cover bg-center pt-14 sm:pt-20">
      <Container>
        <div className="flex justify-center relative">
          <Image
            src={"/ceo/ceo.png"}
            className="
              w-[320px] h-[420px]
              sm:w-[420px] sm:h-[560px]
              md:w-[520px] md:h-[650px]
              lg:w-[600px] lg:h-[700px]
              relative object-contain
            "
            width={1000}
            height={1000}
            alt="ceo"
            priority
          />
          <div
            className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[92%] max-w-[700px]
              h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px]
              -z-1
            ">
            <div className="border-[#B7B8B8] border-4 sm:border-6 lg:border-8 absolute w-full h-full"></div>
          </div>
          <div
            className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[92%] max-w-[700px]
              h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px]
              flex flex-col justify-end
              px-3 sm:px-6
            ">
            <div className="flex flex-col justify-end gap-3 sm:gap-4 pb-2 sm:pb-4">
              <h1 className="uppercase relative z-3 font-primary text-3xl sm:text-4xl lg:text-5xl text-center leading-tight">
                meet Faseeh ullah
              </h1>

              <h2 className="font-sans font-semibold text-center">
                <span className="relative text-2xl sm:text-3xl lg:text-4xl inline-block">
                  <span className="relative z-2">CEO & FOUNDER</span>
                  <span
                    className="absolute bottom-2 sm:bottom-3 left-0 w-full h-2 sm:h-3 bg-primary"
                    style={{
                      background:
                        "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)",
                    }}></span>
                </span>
              </h2>

              <div className="flex gap-3 sm:gap-4 justify-center w-full">
                <a href="" className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src={"/ceo/instag.svg"}
                    alt="Faseeh Ullah"
                    width={16}
                    height={16}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </a>
                <a href="" className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src={"/ceo/linkedin.svg"}
                    alt="Faseeh Ullah"
                    width={16}
                    height={16}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </a>
                <a href="" className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src={"/ceo/facebook-svg.svg"}
                    alt="Faseeh Ullah"
                    width={16}
                    height={16}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </a>
                <a href="" className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src={"/ceo/twitter.svg"}
                    alt="Faseeh Ullah"
                    width={16}
                    height={16}
                    className="w-4 h-4 sm:w-5 sm:h-5"
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
