"use client";

import React from "react";
import Image from "next/image";
import HeadingTwo from "@/components/ui/heading-two";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    title: "WEBSITE DEVELOPMENT SERVICES",
    description: "Enim ad minim veniam quis nostrud exercitation.",
    image: "/website-development-services.png",
  },
  {
    title: "SEO SERVICES",
    description: "Enim adipisicing ipsum fugit labore ipsum.",
    image: "/seo-services.png",
  },
  {
    title: "CGI SERVICES",
    description: "Enim adipisicing ipsum fugit labore ipsum.",
    image: "/cgi-services.png",
  },
  {
    title: "STAFF AUGMENTATION",
    description: "Enim ad minim veniam quis nostrud exercitation.",
    image: "/staff-augmentation.png",
  },
  {
    title: "DIGITAL TRANSFORMATION",
    description: "Enim adipisicing ipsum fugit labore ipsum.",
    image: "/digital-transformations.png",
  },
  {
    title: "DIGITAL MARKETING",
    description: "Enim adipisicing ipsum fugit labore ipsum.",
    image: "/digital-marketing.png",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="relative bg-tertiary py-20 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-primary to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <HeadingTwo span="OFFER"> WHAT WE</HeadingTwo>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black py-7 pl-7 group hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              {/* Number Label */}
              <div className=" text-[20px] mb-3">
                <span className="text-secondary font-primary font-medium">
                  0{index + 1}
                </span>
              </div>

              {/* Image */}
              <div className="pr-7 mb-4">
                <div className="relative w-full h-[250px] rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#111] via-transparent to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="pr-7">
                <h3 className="text-white mb-4 font-primary font-bold text-sm md:text-base tracking-wide">
                  {service.title}
                </h3>
                <div className="flex gap-3 items-center justify-between">
                  <p className="text-white/50 text-sm leading-relaxed w-[60%]">
                    {service.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="pt-2">
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60  group-hover:border-white group-hover:text-primary transition-all duration-300 group-hover:bg-white">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-secondary transition-all duration-150 group-hover:fill-[#328A99]"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.32725 18.4846C4.90706 18.027 4.93743 17.3153 5.3951 16.8951L17.5493 5.736C18.007 5.31581 18.7187 5.34619 19.1389 5.80386C19.5591 6.26152 19.5287 6.97321 19.071 7.3934L6.91679 18.5525C6.45912 18.9727 5.74744 18.9423 5.32725 18.4846Z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.64913 6.10673C7.67563 5.48597 8.20036 5.0042 8.82112 5.0307L18.3584 5.43778C18.9791 5.46433 19.4608 5.98906 19.4344 6.60978L19.0273 16.147C19.0007 16.7678 18.476 17.2495 17.8553 17.2231C17.2346 17.1965 16.7528 16.6718 16.7793 16.0511L17.1384 7.63779L8.72512 7.27869C8.10441 7.25215 7.62268 6.72745 7.64913 6.10673Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
