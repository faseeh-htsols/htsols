"use client";

import React, { useState } from "react";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { WEBSITE_PLANNING } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const OurProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = WEBSITE_PLANNING[activeIndex];

  return (
    <div className="py-32 bg-tertiary relative  -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>
      <Container>
        <HeadingTwo className="text-center">Our process</HeadingTwo>

        <div className="mt-10 flex flex-col lg:flex-row gap-10  lg:justify-between">
          {/* LEFT */}
          <div className="w-[452px] max-w-full">
            <p className="text-white/70">
              Katalyst Studio offers a range of design services that are
              tailored to meet the unique needs of each client Katalyst Studio
              offers a range of design services.
            </p>

            <div className="flex flex-col gap-4 mt-6">
              {WEBSITE_PLANNING.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div key={item.name}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`border cursor-pointer pr-4 rounded-full w-full flex items-center justify-between transition ${
                        isActive
                          ? "border-white/60 bg-white/5"
                          : "border-white/20 hover:border-white/40"
                      }`}
                    >
                      <div className="flex gap-3 p-4 items-center">
                        <p
                          className="text-2xl font-primary font-medium"
                          style={{
                            background:
                              "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          0{index + 1}
                        </p>

                        <h3
                          className={`text-[22px] uppercase font-primary transition ${
                            isActive ? "text-white" : "text-white/40"
                          }`}
                        >
                          {item.name}
                        </h3>
                      </div>

                      <svg
                        width="25"
                        height="15"
                        viewBox="0 0 25 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[25px] h-[15px]"
                      >
                        <path
                          d="M24.7071 8.07088C25.0976 7.68035 25.0976 7.04719 24.7071 6.65666L18.3431 0.292702C17.9526 -0.0978227 17.3195 -0.0978227 16.9289 0.292702C16.5384 0.683226 16.5384 1.31639 16.9289 1.70692L22.5858 7.36377L16.9289 13.0206C16.5384 13.4111 16.5384 14.0443 16.9289 14.4348C17.3195 14.8254 17.9526 14.8254 18.3431 14.4348L24.7071 8.07088ZM0 7.36377V8.36377H24V7.36377V6.36377H0V7.36377Z"
                          fill={isActive ? "#FFFFFF" : "#444444"}
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT (tab content) */}
          <div className="flex flex-col lg:flex-row gap-6 lg:justify-end w-full">
            {/* Big image */}
            <div className="relative w-full lg:w-[60%] min-h-[300px] h-full lg:min-h-[360px] rounded-[22px] overflow-hidden">
              <Image
                src={active.image}
                alt={active.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Small card */}
            <div className="w-full p-3 flex flex-col lg:w-[260px] rounded-[22px] overflow-hidden bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] border border-white/10">
              <div className=" grow relative w-full min-h-[170px] rounded-[22px] overflow-hidden">
                <Image
                  src={active.imageSingle}
                  alt={`${active.name} preview`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="py-4 flex flex-col gap-4">
                <p className="text-white/80 text-sm">{active.para}</p>

                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-white font-primary uppercase text-sm">
                    {active.heading}
                  </h4>

                  <Link
                    href={active.href}
                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:bg-white/15 transition"
                    aria-label="Meet our expert"
                  >
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.9835 5.38286C23.1979 4.58266 22.723 3.76015 21.9228 3.54574L8.88284 0.051683C8.08264 -0.16273 7.26013 0.312144 7.04572 1.11234C6.83131 1.91254 7.30618 2.73505 8.10638 2.94946L19.6975 6.05529L16.5917 17.6464C16.3773 18.4466 16.8521 19.2691 17.6523 19.4835C18.4525 19.6979 19.275 19.2231 19.4894 18.4229L22.9835 5.38286ZM0.75 16.9946L1.5 18.2937L22.2846 6.29367L21.5346 4.99463L20.7846 3.69559L0 15.6956L0.75 16.9946Z"
                        fill="url(#paint0_linear_1160_1253)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1160_1253"
                          x1="1"
                          y1="17.4276"
                          x2="21.7846"
                          y2="5.42764"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#075B65" />
                          <stop offset="0.370192" stop-color="#00838A" />
                          <stop offset="0.8125" stop-color="#328A99" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProcess;
