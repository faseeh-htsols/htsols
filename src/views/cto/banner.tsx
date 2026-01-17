import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url(/cto/cto-banner-back.png)] bg-cover bg-center pt-14 sm:pt-20">
      <Container>
        <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[520px] md:min-h-[560px]">
          <div className="relative z-10 w-[80%]">
            <div className="relative mb-6 sm:mb-8 flex items-center justify-center gap-6">
              <div className="h-px w-[80%] bg-white/25" />
              <div className="flex items-center gap-4 bg-transparent">
                <a href="" className="w-8 h-8 opacity-90 hover:opacity-100">
                  <Image
                    src={"/ceo/instag.svg"}
                    alt="Instagram"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
                <a href="" className="w-8 h-8 opacity-90 hover:opacity-100">
                  <Image
                    src={"/ceo/linkedin.svg"}
                    alt="LinkedIn"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
                <a href="" className="w-8 h-8 opacity-90 hover:opacity-100">
                  <Image
                    src={"/ceo/facebook-svg.svg"}
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
                <a href="" className="w-8 h-8 opacity-90 hover:opacity-100">
                  <Image
                    src={"/ceo/twitter.svg"}
                    alt="Twitter"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
              </div>
              <div className="h-px w-[80%] bg-white/25" />
            </div>
            <div
              className="
                relative w-full border-[6px] border-white/70 px-6 sm:px-10 py-8 sm:py-10 bg-black/20 backdrop-blur-[2px] lg:pr-[160px] text-center">
              <p className="font-primary text-center uppercase tracking-[0.22em] text-[#00838A] text-lg sm:text-3xl">
                Meet
              </p>
              <h1 className="uppercase font-primary text-center text-white leading-[0.95] mt-2 text-4xl sm:text-6xl lg:text-7xl">
                Qamar Rafique
              </h1>
              <h2 className="font-sans font-semibold text-center mt-5">
                <span className="relative text-2xl sm:text-3xl lg:text-4xl inline-block">
                  <span className="relative z-2">CEO & FOUNDER</span>
                  <span
                    className="absolute bottom-1.5 left-0 w-full h-2 sm:h-3 bg-primary"
                    style={{
                      background:
                        "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)",
                    }}></span>
                </span>
              </h2>
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 bottom-0 z-20">
            <Image
              src={"/cto/cto-banner.png"}
              className="w-[520px] h-[560px] object-contain"
              width={520}
              height={560}
              alt="ceo"
              priority
            />
          </div>
          <div className="relative z-10 mt-10 flex justify-center lg:hidden w-full">
            <Image
              src={"/cto/cto-banner.png"}
              className="w-[280px] sm:w-[340px] h-auto object-contain"
              width={700}
              height={900}
              alt="ceo"
              priority
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
