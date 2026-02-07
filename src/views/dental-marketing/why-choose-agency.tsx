"use client";

import Image from "next/image";

export default function WhyChooseAgency() {
  return (
    <section className="relative py-24 bg-[#2f3438] overflow-hidden">
      {/* subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="bg-black/85 rounded-xl p-10 lg:p-12 text-white max-w-xl">
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-10">
            <span className="border-b-4 border-[#6fa8b8] pb-1 inline-block">
              Why Choose Our Dental
            </span>
            <br />
            Marketing Agency?
          </h2>

          {/* Item 1 */}
          <div className="mb-8">
            <h3 className="text-[#6fa8b8] font-semibold mb-2">
              • 100% Dental Focus
            </h3>
            <p className="text-sm text-white/75 leading-relaxed">
              We work exclusively with dental practices. We understand patient
              behavior and regulations, turning “dental anxiety” into “patient
              trust” through industry-specific strategies.
            </p>
          </div>

          {/* Item 2 */}
          <div className="mb-8">
            <h3 className="text-[#6fa8b8] font-semibold mb-2">
              • Conversion-First Strategy
            </h3>
            <p className="text-sm text-white/75 leading-relaxed">
              We prioritize results over aesthetics. By using data-driven CTAs
              and lightning-fast site speeds, we optimize every element to boost
              your conversion rates by up to 35%.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <h3 className="text-[#6fa8b8] font-semibold mb-2">
              • Premium White-Glove Support
            </h3>
            <p className="text-sm text-white/75 leading-relaxed">
              Receive high-end design that reflects clinical excellence. We
              provide personalized, end-to-end support—delivering big-agency
              results with a dedicated, small-agency touch.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* <Image
            src="/mnt/data/fb72d8fe-34a6-47dc-b9ce-379449422265.png"
            alt="Agency laptop showcase"
            className="w-full h-auto object-contain"
            priority
          /> */}
        </div>
      </div>
    </section>
  );
}
