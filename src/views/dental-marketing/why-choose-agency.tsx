"use client";

import Image from "next/image";

export default function WhyChooseAgency() {
  return (
    <section className="relative bg-[url(/dental/bg-why-choose.jpg)] bg-cover py-10 overflow-hidden">
      {/* subtle gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" /> */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="bg-[#252528] overflow-hidden relative rounded-xl p-10 lg:p-12 text-white max-w-xl">
          <div className="absolute top-0 left-0 bg-[#00A1A5] h-14 w-24 rounded-full blur-2xl"></div>
          <h2 className="text-3xl lg:text-3xl font-semibold font-primary leading-tight mb-10">
            Why Choose Our Dental
            <br />
            Marketing Agency?
          </h2>

          {/* Item 1 */}
          <div className="mb-8">
            <h3 className="font-primary bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent font-semibold mb-2">
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
            <h3 className="font-primary bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent font-semibold mb-2">
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
            <h3 className="font-primary bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent font-semibold mb-2">
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
        <div className="relative ">
          {/* <Image
            src="/dental/macbook-air.jpg"
            alt="Agency laptop showcase"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
            priority
          /> */}
        </div>
      </div>
    </section>
  );
}
