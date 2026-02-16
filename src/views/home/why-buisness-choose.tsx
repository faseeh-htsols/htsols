"use client";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const lists = [
  "One accountable partner",
  "Consistent communication",
  "Predictable timelines",
  "Systems designed to scale with your growth",
  "Tailored solutions built around your processes",
];
export default function WhyBuisnessChoose() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(sectionRef.current, {
        clipPath: "inset(0 0 100% 0)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          scrub: true,
        },
      });
    },
    { scope: mainRef },
  );
  return (
    <section
      ref={mainRef}
      className="relative bg-[url(/dental/bg-why-choose.jpg)] bg-cover py-20 overflow-hidden  -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
    >
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[4%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-2 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] animate-pulse
          "
      ></div>
      {/* subtle gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" /> */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div
          className="bg-[#252528] overflow-hidden relative rounded-xl p-10 lg:p-12 text-white max-w-xl"
          ref={sectionRef}
        >
          <div className="absolute top-0 left-0 bg-[#00A1A5] h-14 w-24 rounded-full blur-2xl"></div>
          <h2 className="text-3xl uppercase lg:text-3xl font-semibold font-primary leading-tight mb-10">
            Why Businesses Choose HTSOL Inc.
          </h2>

          {/* Item 1 */}
          <div className="mb-8">
            <p className="text-sm text-white/75 leading-relaxed mb-4">
              You remain in control of direction and strategy while we manage
              the technical execution. We explain decisions in straightforward
              language and connect each step to your business objectives.
            </p>
            <h3 className="font-semibold mb-2">Working with us means:</h3>
            <ul className="flex flex-col gap-3 mb-4 list-disc ps-4 marker:text-[#00838A]">
              {lists.map((list, idx) => (
                <li
                  key={idx}
                  className="font-semibold text-[22px] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent"
                >
                  {list}
                </li>
              ))}
            </ul>
            <p>
              We do not deliver and step away. We stay engaged so your digital
              presence continues to evolve alongside your business.
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
