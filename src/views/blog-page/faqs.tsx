"use client";

import Wrapper from "@/components/wrapper";
import { IAccordion } from "@/types";
import React, { useState } from "react";

const Faqs = ({ data }: { data: IAccordion[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-primary py-14">
      <Wrapper>
        <h2 className="text-center uppercase text-[40px] text-secondary font-bold mb-8 tracking-wide">
          Frequently Asked Questions
        </h2>

        <div className=" space-y-4">
          {data.map((faq, i) => {
            const open = openIndex === i;

            return (
              <div
                key={i}
                className={[
                  "rounded-md transition-colors",
                  open ? "bg-secondary" : "bg-transparent",
                ].join(" ")}
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  className={[
                    "w-full flex items-center justify-between gap-4 cursor-pointer px-6 py-4",
                    "uppercase font-semibold tracking-wide",
                    open ? "text-[#0E1F1F]" : "text-white",
                    open
                      ? "border border-transparent"
                      : "border border-white/40 hover:border-white/70",
                    "rounded-md",
                  ].join(" ")}
                >
                  <span className="text-left">{faq.question}</span>

                  {/* circular arrow button */}
                  <span
                    className={[
                      "inline-flex shrink-0 h-8 w-8 items-center justify-center rounded-full border transition-colors",
                      open
                        ? "bg-[#0E1F1F]/10 border-[#0E1F1F]/30"
                        : "bg-transparent border-white/60",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <svg
                      className={[
                        "h-4 w-4 transition-transform duration-300",
                        open
                          ? "rotate-180 text-[#0E1F1F]"
                          : "rotate-0 text-white",
                      ].join(" ")}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {/* Panel */}
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={[
                    "px-6 overflow-hidden",
                    "transition-[max-height] duration-500 ease-in-out",
                    open ? "max-h-40" : "max-h-0", // adjust height if some answers are longer
                  ].join(" ")}
                >
                  <div
                    className={[
                      "pb-5 leading-relaxed",
                      "transition-opacity duration-300 ease-in-out",
                      open
                        ? "opacity-100 text-[#0E1F1F]"
                        : "opacity-0 text-transparent",
                    ].join(" ")}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default Faqs;
