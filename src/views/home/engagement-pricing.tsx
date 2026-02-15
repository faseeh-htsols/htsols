"use client";

import Container from "@/components/ui/container";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";

type Tab = {
  name: string;
  header: string;
  para: string;
  lists: string[];
  botPara: string;
};

const TABS: Tab[] = [
  {
    name: "Engagement Models",
    header:
      "Every organisation operates differently, so we keep our engagement options flexible.",
    para: "You can work with HTSOL Inc. through:",
    lists: [
      "Project-based work for clearly defined initiatives",
      "Monthly retainers for continuous growth and optimisation",
      "Dedicated team support or staff augmentation when ongoing capacity is required",
    ],
    botPara:
      "This structure allows you to scale support without restructuring internally or committing to unnecessary overhead.",
  },
  {
    name: "Pricing Philosophy",
    header:
      "This structure allows you to scale support without restructuring internally or committing to unnecessary overhead.",
    para: "Each engagement is scoped based on:",
    lists: [
      "Project complexity",
      "Required timelines",
      "Level of ongoing involvement",
    ],
    botPara:
      "Our objective is to recommend the most practical solution, not the largest one. In many cases, targeted improvements deliver stronger returns than a full rebuild. We outline options clearly so you can make informed decisions with confidence.",
  },
];

const EngagementPricing = () => {
  const [active, setActive] = useState(0);

  const tab = useMemo(() => TABS[active], [active]);

  return (
    <section className="bg-tertiary  relative py-24   -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      {/* Top accent line */}
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] animate-pulse
          "
      ></div>
      <Container>
        {/* 2-col grid (tab panel on the right, like your screenshot) */}
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
          {/* Left column (leave empty or add your heading/content) */}
          <div>
            <div>
              <Image
                src={"/engagement-pricing1.png"}
                alt="image"
                width={400}
                height={400}
                className="w-[65%] h-[300px]"
              />
            </div>
            <div className="-mt-24">
              <Image
                src={"/engagement-pricing2.png"}
                alt="image"
                width={400}
                height={400}
                className="w-[65%] ms-auto h-[300px]"
              />
            </div>
          </div>

          {/* Right column: the tab card (2 rows: tabs row + content row) */}
          <div className="">
            <div className="grid gap-5">
              {/* Row 1: Tabs */}
              <div className="flex w-full rounded-lg border border-white/20 p-1">
                {TABS.map((t, idx) => {
                  const isActive = idx === active;
                  return (
                    <button
                      key={t.name}
                      type="button"
                      onClick={() => setActive(idx)}
                      aria-selected={isActive}
                      className={[
                        "flex-1 cursor-pointer font-primary rounded-md px-4 py-4 font-semibold  transition",
                        isActive
                          ? "bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] text-white"
                          : "text-white/80 hover:text-white",
                      ].join(" ")}
                    >
                      {t.name.toUpperCase()}
                    </button>
                  );
                })}
              </div>

              {/* Row 2: Content */}
              <div>
                <p className="text-white">{tab.header}</p>

                <p className="mt-4 text-sm font-semibold text-white">
                  {tab.para}
                </p>

                <div className="mt-3 ">
                  <ul className="space-y-3 list-disc ps-4 marker:text-[#00838A]">
                    {tab.lists.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-[#00A1A5]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-4 text-white">{tab.botPara}</p>

                <div className="mt-6 flex">
                  <Button href="/">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EngagementPricing;
