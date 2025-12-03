"use client";

import React from "react";
import Image from "next/image";

interface ServiceCard {
  number: string;
  title: string;
  description: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    number: "01",
    title: "WEBSITE DEVELOPMENT SERVICES",
    description:
      "Enim ad minim veniam quis nostrud exercitation.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
  },
  {
    number: "02",
    title: "SEO SERVICES",
    description:
      "Enim adipisicing ipsum fugit labore ipsum.",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=300&fit=crop",
  },
  {
    number: "03",
    title: "CGI SERVICES",
    description:
      "Enim adipisicing ipsum fugit labore ipsum.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
  },
  {
    number: "04",
    title: "STAFF AUGMENTATION",
    description:
      "Enim ad minim veniam quis nostrud exercitation.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
  },
  {
    number: "05",
    title: "DIGITAL TRANSFORMATION",
    description:
      "Enim adipisicing ipsum fugit labore ipsum.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
  },
  {
    number: "06",
    title: "DIGITAL MARKETING",
    description:
      "Enim adipisicing ipsum fugit labore ipsum.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-20 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            WHAT WE <span className="gradient-text">OFFER</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              {/* Number Label */}
              <div className="absolute top-4 left-4 z-10 bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-primary text-sm font-medium">
                  {service.number}
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-white font-bold text-sm md:text-base tracking-wide">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow Icon */}
                <div className="pt-2">
                  <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
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

