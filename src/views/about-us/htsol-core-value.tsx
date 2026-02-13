"use client";

import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import React from "react";

const GRAD = "linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)";

const VALUES = [
  {
    letter: "H",
    title: "HONESTY",
    desc: "We communicate clearly, set realistic expectations, and lead with integrity.",
  },
  {
    letter: "T",
    title: "TEAMWORK",
    desc: "We collaborate across strategy, design, development, and marketing to deliver better outcomes.",
  },
  {
    letter: "S",
    title: "SERVICE",
    desc: "We stay helpful, responsive, and proactive, because your goals come first.",
  },
  {
    letter: "O",
    title: "OWNERSHIP",
    desc: "We take responsibility, solve problems quickly, and treat your business like it matters, because it does.",
  },
  {
    letter: "L",
    title: "LEARNING",
    desc: "Digital changes fast. We improve continuously to keep our clients ahead of the curve.",
  },
];

const CoreValueBadge = ({ letter }: { letter: string }) => {
  return (
    <div className="relative">
      {/* subtle outer glow */}
      <div className="absolute inset-0 rounded-full bg-white/5 blur-[10px]" />

      {/* outer dark ring */}
      <div className="relative h-[123px] w-[123px] rounded-full bg-tertiary p-4 ">
        {/* gradient ring (border-image look) */}
        <div className="h-full w-full rounded-full p-[12px] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]">
          {/* inner fill */}
          <div className="flex h-full w-full items-center justify-center rounded-full bg-tertiary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
            <span className="text-4xl font-primary font-semibold text-white">
              {letter}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HtsolCoreValue = () => {
  return (
    <section className="relative overflow-hidden bg-black py-14">
      {/* soft background vignette */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(0,131,138,0.18)_0%,rgba(0,0,0,0)_60%)]" /> */}

      <Container>
        {/* Heading */}
        <div className="text-center">
          <HeadingTwo className="uppercase tracking-wide text-white">
            <span className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">
              HTSOL
            </span>{" "}
            CORE VALUES
          </HeadingTwo>

          <p className="mx-auto mt-2 max-w-xl text-xs text-white/55">
            Over the years, we’ve stayed committed to the principles that guide
            our work and our culture.
          </p>

          <div className="mx-auto mt-8 h-px w-full max-w-5xl bg-white/20" />
        </div>

        {/* Values */}
        <div className="relative mt-12">
          {/* dashed connector line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[160px] hidden border-t border-dashed border-white/25 lg:block" />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="flex flex-col items-center text-center"
              >
                <CoreValueBadge letter={v.letter} />

                {/* little triangle */}
                <div className="mt-4 h-0 w-0 border-l-[9px] border-r-[9px] border-t-[10px] border-l-transparent border-r-transparent border-t-white/80" />

                {/* dot */}
                <div className="relative z-10 mt-3 flex h-8 items-center justify-center">
                  <span className="h-3.5 w-3.5 rounded-full bg-[#0B6B76] ring-4 ring-black/40 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]" />
                </div>

                <h3 className="mt-3 text-sm font-semibold tracking-wide text-white">
                  {v.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-white/55">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HtsolCoreValue;
