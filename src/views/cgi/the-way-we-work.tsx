"use client";

import React, { useState } from "react";
import CircularText from "@/components/ui/CircularText";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { ChevronDown } from "lucide-react";

type WorkStep = {
  no: string;
  title: string;
  desc: string;
};

const STEPS: WorkStep[] = [
  {
    no: "01",
    title: "CREATIVE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    no: "02",
    title: "SHOOTING",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    no: "03",
    title: "3D SCENE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    no: "04",
    title: "ANIMATION",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    no: "05",
    title: "POST-PRODUCTION",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const cx = (...classes: Array<string | false | undefined | null>) =>
  classes.filter(Boolean).join(" ");

const TheWayWeWork = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#0B0B0B] text-white py-14 lg:py-20">
      <Container>
        <div className="flex items-start justify-between gap-10">
          {/* Left content */}
          <div className="w-full">
            {/* Title row + long line */}
            <div className="flex items-center gap-6">
              <HeadingTwo
                className={cx(
                  "uppercase tracking-[0.14em]",
                  "text-transparent",
                  "[-webkit-text-stroke:1px_rgba(255,255,255,0.85)]",
                )}
              >
                THE WAY WE WORK
              </HeadingTwo>

              {/* long line (like design) */}
              {/* <div className="hid   den lg:block h-px flex-1 bg-[#2F7AAE]/70" /> */}
            </div>

            {/* Mobile line (so it still looks correct on small screens) */}
            <div className="mt-4 lg:hidden h-px w-full bg-[#2F7AAE]/70" />

            {/* Accordion list */}
            <div className="mt-6 border-t border-white/15">
              {STEPS.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div key={item.no} className="border-b border-white/15">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(idx)}
                      aria-expanded={isOpen}
                      className={cx(
                        "w-full text-left cursor-pointer",
                        "grid grid-cols-[70px_1fr_28px]",
                        "py-6",
                      )}
                    >
                      <span
                        className={cx(
                          "text-xl  font-primary",
                          isOpen ? "text-white" : "text-white/60",
                        )}
                      >
                        {item.no}
                      </span>

                      <span
                        className={cx(
                          "text-sm md:text-xl font-primary  uppercase",
                          isOpen ? "text-white" : "text-white/60",
                        )}
                      >
                        {item.title}
                      </span>

                      <span className="flex items-center justify-end">
                        <ChevronDown
                          className={cx(
                            "h-4 w-4 transition-transform duration-300",
                            isOpen ? "rotate-180 text-white" : "text-white/55",
                          )}
                        />
                      </span>
                    </button>

                    {/* Animated content (no libraries, smooth + stable) */}
                    <div
                      className={cx(
                        "grid transition-[grid-template-rows,opacity] duration-300",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-10 pl-[70px] text-white text-sm leading-6 max-w-[880px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right circle */}
          <div className="hidden lg:flex shrink-0 self-center">
            <CircularText />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TheWayWeWork;
