"use client";

import React from "react";
import Image from "next/image";

interface Client {
  name: string;
  logo?: string;
  isPlaceholder?: boolean;
}

const clients: Client[] = [
  { name: "Client 1", isPlaceholder: true },
  { name: "Rachel White", logo: "/logos/rachel-white.png" },
  { name: "Client 3", isPlaceholder: true },
  { name: "Client 4", isPlaceholder: true },
  { name: "Rachel White", logo: "/logos/rachel-white.png" },
  { name: "Client 6", isPlaceholder: true },
  { name: "Client 7", isPlaceholder: true },
  { name: "Rachel White", logo: "/logos/rachel-white.png" },
  { name: "Client 9", isPlaceholder: true },
  { name: "Client 10", isPlaceholder: true },
  { name: "Rachel White", logo: "/logos/rachel-white.png" },
  { name: "Client 12", isPlaceholder: true },
];

const marqueeClients = Array(8).fill("HTSOL INC.");

export const ClientsSection: React.FC = () => {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wider">
            OUR CLIENTS
          </h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 border-l border-t border-white/10">
          {clients.map((client, index) => (
            <div
              key={index}
              className="aspect-[4/3] flex items-center justify-center border-r border-b border-white/10 p-8 hover:bg-white/5 transition-colors duration-300"
            >
              {client.isPlaceholder ? (
                <span className="text-white/40 text-2xl md:text-3xl font-bold tracking-wider">
                  LOGO
                </span>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">R</span>
                  </div>
                  <div>
                    <div className="text-white text-lg font-bold tracking-wide">RACHEL</div>
                    <div className="text-white/70 text-xs tracking-[0.3em]">WHITE</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="mt-16 overflow-hidden bg-black/50 py-6 border-t border-white/10">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {/* First set */}
            {marqueeClients.map((client, index) => (
              <div key={`set1-${index}`} className="inline-flex items-center gap-3 px-8">
                <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="8" cy="8" r="2" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium tracking-wider whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {marqueeClients.map((client, index) => (
              <div key={`set2-${index}`} className="inline-flex items-center gap-3 px-8">
                <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="8" cy="8" r="2" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium tracking-wider whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

