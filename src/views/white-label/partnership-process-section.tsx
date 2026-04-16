"use client";

import React, { useId, useState } from "react";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";

type Step = {
  number: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "INITIAL PARTNER CONVERSATION",
    description:
      "We start with a no-pressure conversation about what your agency does, what capacity gaps you are trying to fill, and what a working relationship would realistically look like. We explain our process, our pricing model, our delivery timelines, and how we protect your client relationships. You ask the hard questions. We give you straight answers.",
  },
  {
    number: "02",
    title: "NDA AND PARTNER AGREEMENT",
    description:
      "If there is a fit, we put the relationship on paper. We sign an NDA, confirm working boundaries, define how communication should happen, and make sure your client confidentiality and agency ownership are protected before any project work begins.",
  },
  {
    number: "03",
    title: "FIRST PROJECT BRIEFING",
    description:
      "You send us the first live opportunity or project brief. We review scope, timelines, deliverables, brand requirements, and any client sensitivities so we can confirm exactly what success looks like before execution starts.",
  },
  {
    number: "04",
    title: "EXECUTION AND CHECK-INS",
    description:
      "Once approved, our team gets to work. We build, write, optimize, or launch according to the agreed brief while keeping you updated through the communication style you prefer. You stay informed without having to micromanage.",
  },
  {
    number: "05",
    title: "DELIVERY AND HANDOVER",
    description:
      "Completed work comes back to you branded for your agency and ready for client review, launch, or presentation. We do not bypass you. Everything is routed through your team so the client experience stays fully under your control.",
  },
  {
    number: "06",
    title: "ONGOING PARTNERSHIP",
    description:
      "After the first successful project, the process gets faster and smoother. We learn your expectations, your brand standards, and your delivery rhythm, so future projects can move with less back-and-forth and more confidence.",
  },
];

const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PartnershipProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const baseId = useId();

  return (
    <DoubleCurves
      up
      className="bg-black -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
    >
      <Container>
        <section className="relative py-20 lg:py-40">
          <div className="text-center">
            <p className="inline-block bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text font-primary text-[16px] font-semibold uppercase leading-8 tracking-[0] text-transparent sm:text-[18px] lg:text-[20px]">
              Simple To Start. Built To Last.
            </p>

            <h2 className="mx-auto mt-4 max-w-[860px] font-primary text-[31px] font-semibold uppercase leading-[1.04] tracking-[-0.04em] text-white sm:text-[38px] lg:text-[48px] lg:leading-[0.96]">
              How A White Label Partnership With HTSOL Works
            </h2>

            <p className="mx-auto mt-8 mb-9 max-w-[960px] text-white text-base leading-[1.6] sm:text-lg">
              Starting a white label partnership does not need to be
              complicated. Here is exactly what happens from your first
              conversation with us to your first delivered project and how the
              relationship evolves from there.
            </p>

            <div className="mt-6 h-px w-full bg-white" />
          </div>

          <div>
            {STEPS.map((step, idx) => {
              const isOpen = idx === activeIndex;
              const panelId = `${baseId}-panel-${idx}`;
              const buttonId = `${baseId}-button-${idx}`;

              return (
                <div
                  key={step.number}
                  className={`border-b ${isOpen ? "border-white" : "border-white/14"}`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setActiveIndex(idx)}
                    className="w-full cursor-pointer py-5 text-left"
                  >
                    <div className="grid grid-cols-[52px_1fr_24px] items-center gap-4">
                      <div
                        className={`font-primary text-xl uppercase ${isOpen ? "text-white" : "text-white/60"}`}
                      >
                        {step.number}
                      </div>

                      <div
                        className={`font-primary text-xl uppercase ${isOpen ? "text-white" : "text-white/60"}`}
                      >
                        {step.title}
                      </div>

                      <div className="flex justify-end text-white/60">
                        <ChevronDown
                          className={`${isOpen ? "rotate-180 text-white" : "text-white/60"}`}
                        />
                      </div>
                    </div>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid grid-cols-[52px_1fr_24px] gap-4 overflow-hidden transition-all duration-300 ${
                        isOpen ? "mt-5 max-h-[260px] opacity-100" : "mt-0 max-h-0 opacity-0"
                      }`}
                    >
                      <div />
                      <p className="pr-4 text-white/92">{step.description}</p>
                      <div />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </DoubleCurves>
  );
};

export default PartnershipProcessSection;
