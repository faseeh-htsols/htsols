"use client";

import React from "react";
import Image from "next/image";
import HeadingTwo from "@/components/ui/heading-two";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "Client 1", logo: "/client-sections/logo.png" },
  { name: "Rachel White", logo: "/client-sections/rachel.png" },
  { name: "Client 3", logo: "/client-sections/logo.png" },
  { name: "Client 4", logo: "/client-sections/rachel.png" },
  { name: "Rachel White", logo: "/client-sections/logo.png" },
  { name: "Client 6", logo: "/client-sections/rachel.png" },
  { name: "Client 7", logo: "/client-sections/logo.png" },
  { name: "Rachel White", logo: "/client-sections/rachel.png" },
  { name: "Client 9", logo: "/client-sections/logo.png" },
  { name: "Client 10", logo: "/client-sections/rachel.png" },
  { name: "Rachel White", logo: "/client-sections/logo.png" },
  { name: "Client 12", logo: "/client-sections/rachel.png" },
];
const rows: Client[][] = Array.from(
  { length: Math.ceil(clients.length / 3) },
  (_, i) => clients.slice(i * 3, i * 3 + 3)
);

const marqueeClients = Array(8).fill("HTSOL INC.");

export const ClientsSection: React.FC = () => {
  return (
    <>
      <section className="relative bg-black py-20   -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
        <div
          className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
        ></div>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <HeadingTwo className=" text-white tracking-wider">
              OUR CLIENTS
            </HeadingTwo>
          </div>
          <div className="relative w-full max-w-[1100px] mx-auto">
            {/* === Vertical Lines (Y-Axis) === */}
            <div
              className="hidden lg:block absolute top-0 bottom-0 left-1/3 w-px "
              style={{
                background: "linear-gradient(180deg, #00A1A5 0%, #1A2626 100%)",
              }}
            ></div>
            <div
              className="hidden lg:block  absolute top-0 bottom-0 left-2/3 w-px "
              style={{
                background: "linear-gradient(180deg, #00A1A5 0%, #1A2626 100%)",
              }}
            ></div>

            {/* === Horizontal Lines (X-Axis) === */}
            <div
              className="hidden lg:block absolute left-0 right-0 top-1/4 h-px "
              style={{
                background: "linear-gradient(90deg, #00A1A5 0%, #1A2626 100%)",
              }}
            ></div>
            <div
              className="hidden lg:block absolute left-0 right-0 top-2/4 h-px "
              style={{
                background: "linear-gradient(90deg, #00A1A5 0%, #1A2626 100%)",
              }}
            ></div>
            <div
              className="hidden lg:block absolute left-0 right-0 top-3/4 h-px"
              style={{
                background: "linear-gradient(90deg, #00A1A5 0%, #1A2626 100%)",
              }}
            ></div>

            {/* === Grid Content === */}
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center py-12"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={60}
                    className="object-contain w-[80%] h-[70px] sm:w-[140px] sm:h-[60px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scrolling Marquee */}
      </section>
    </>
  );
};

export default ClientsSection;
