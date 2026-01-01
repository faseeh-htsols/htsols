import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { INDUSTRIES_I_SERVE_CEO } from "@/constants";
import Image from "next/image";
import React from "react";

const IndustriesServe = () => {
  return (
    <div className="bg-[url(/ceo/industries-serve.png)] bg-cover py-20">
      <Container>
        <HeadingTwo className="text-center mb-7">Industries I Serve</HeadingTwo>

        {/* Make this relative so absolute dividers can be placed inside */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7">
          {/* Vertical separators (only on lg when it's 5 columns) */}
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
  );
};

export default IndustriesServe;
