import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { INDUSTRIES_I_SERVE_CEO } from "@/constants";
import Image from "next/image";
import React from "react";

const IndustriesServe = () => {
  return (
    <div className="relative -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] overflow-visible">
      <div className="[clip-path:polygon(0_1%,100%_-10px,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_-5px,100%_97%,0_100%)] overflow-visible">
        <div
          className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "></div>

        <div className="bg-[url(/ceo/industries-serve.png)] bg-cover py-24 bg-black">
          <Container>
            <HeadingTwo className="text-center mb-7">
              Industries I Serve
            </HeadingTwo>

            <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7">
              <div className="hidden lg:block absolute top-0 bottom-0 left-1/5 w-px bg-[linear-gradient(180deg,#00A1A5_0%,#1A2626_100%)]" />
              <div className="hidden lg:block absolute top-0 bottom-0 left-2/5 w-px bg-[linear-gradient(180deg,#00A1A5_0%,#1A2626_100%)]" />
              <div className="hidden lg:block absolute top-0 bottom-0 left-3/5 w-px bg-[linear-gradient(180deg,#00A1A5_0%,#1A2626_100%)]" />
              <div className="hidden lg:block absolute top-0 bottom-0 left-4/5 w-px bg-[linear-gradient(180deg,#00A1A5_0%,#1A2626_100%)]" />
              <div className="hidden lg:block absolute left-0 bottom-0 w-full top-1/2 -translate-y-1/2 h-px bg-[linear-gradient(180deg,#00A1A5_0%,#1A2626_100%)]" />

              {INDUSTRIES_I_SERVE_CEO.map((item) => (
                <div key={item.name} className="relative z-10 py-5">
                  <div className="flex justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={89}
                      height={72}
                      className="w-20 h-[65px]"
                    />
                  </div>

                  <h3 className="font-primary text-center uppercase font-semibold">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
      <div
        className="pointer-events-none absolute z-12 bottom-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "></div>
    </div>
  );
};

export default IndustriesServe;
