"use client";

import React from "react";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";

type Step = {
  step: string;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    step: "STEP 01",
    title: "DISCOVERY",
    desc: "goals, positioning, audience, and performance review",
  },
  {
    step: "STEP 02",
    title: "STRATEGY",
    desc: "channel plan, messaging, priorities, and milestones",
  },
  {
    step: "STEP 03",
    title: "BUILD & LAUNCH",
    desc: "creative, content, development, and campaigns",
  },
  {
    step: "STEP 04",
    title: "OPTIMIZATION",
    desc: "reporting, testing, improvement, and scaling",
  },
];

function StepPill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] px-3 py-1 text-[12px] font-semibold tracking-[0.12em] text-white/90">
        {label}
      </span>
      <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/5">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="opacity-90"
        >
          <path
            d="M5 12h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}

function GradientConnector() {
  return (
    <div className="hidden flex-1 items-center justify-center lg:flex">
      <svg
        width="93"
        height="15"
        viewBox="0 0 93 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-95"
      >
        <path
          d="M92.7071 8.07087C93.0976 7.68034 93.0976 7.04718 92.7071 6.65665L86.3431 0.292694C85.9526 -0.0978302 85.3195 -0.0978301 84.9289 0.292694C84.5384 0.683219 84.5384 1.31638 84.9289 1.70691L90.5858 7.36376L84.9289 13.0206C84.5384 13.4111 84.5384 14.0443 84.9289 14.4348C85.3195 14.8254 85.9526 14.8254 86.3431 14.4348L92.7071 8.07087ZM0 7.36377L8.74228e-08 8.36377L1.91667 8.36377L1.91667 7.36377L1.91667 6.36377L-8.74228e-08 6.36377L0 7.36377ZM5.75 7.36377L5.75 8.36377L9.58333 8.36377L9.58333 7.36377L9.58333 6.36377L5.75 6.36377L5.75 7.36377ZM13.4167 7.36377L13.4167 8.36377L17.25 8.36377L17.25 7.36377L17.25 6.36377L13.4167 6.36377L13.4167 7.36377ZM21.0833 7.36377L21.0833 8.36377L24.9167 8.36377L24.9167 7.36377L24.9167 6.36377L21.0833 6.36377L21.0833 7.36377ZM28.75 7.36377L28.75 8.36377L32.5833 8.36377L32.5833 7.36377L32.5833 6.36377L28.75 6.36377L28.75 7.36377ZM36.4167 7.36377L36.4167 8.36377L40.25 8.36377L40.25 7.36377L40.25 6.36377L36.4167 6.36377L36.4167 7.36377ZM44.0833 7.36377L44.0833 8.36377L47.9167 8.36377L47.9167 7.36377L47.9167 6.36377L44.0833 6.36377L44.0833 7.36377ZM51.75 7.36377L51.75 8.36377L55.5833 8.36376L55.5833 7.36376L55.5833 6.36376L51.75 6.36377L51.75 7.36377ZM59.4167 7.36376L59.4167 8.36376L63.25 8.36376L63.25 7.36376L63.25 6.36376L59.4167 6.36376L59.4167 7.36376ZM67.0833 7.36376L67.0833 8.36376L70.9167 8.36376L70.9167 7.36376L70.9167 6.36376L67.0833 6.36376L67.0833 7.36376ZM74.75 7.36376L74.75 8.36376L78.5833 8.36376L78.5833 7.36376L78.5833 6.36376L74.75 6.36376L74.75 7.36376ZM82.4167 7.36376L82.4167 8.36376L86.25 8.36376L86.25 7.36376L86.25 6.36376L82.4167 6.36376L82.4167 7.36376ZM90.0833 7.36376L90.0833 8.36376L92 8.36376L92 7.36376L92 6.36376L90.0833 6.36376L90.0833 7.36376ZM92.7071 8.07087C93.0976 7.68034 93.0976 7.04718 92.7071 6.65665L86.3431 0.292694C85.9526 -0.0978302 85.3195 -0.0978301 84.9289 0.292694C84.5384 0.683219 84.5384 1.31638 84.9289 1.70691L90.5858 7.36376L84.9289 13.0206C84.5384 13.4111 84.5384 14.0443 84.9289 14.4348C85.3195 14.8254 85.9526 14.8254 86.3431 14.4348L92.7071 8.07087ZM0 7.36377L8.74228e-08 8.36377L1.91667 8.36377L1.91667 7.36377L1.91667 6.36377L-8.74228e-08 6.36377L0 7.36377ZM5.75 7.36377L5.75 8.36377L9.58333 8.36377L9.58333 7.36377L9.58333 6.36377L5.75 6.36377L5.75 7.36377ZM13.4167 7.36377L13.4167 8.36377L17.25 8.36377L17.25 7.36377L17.25 6.36377L13.4167 6.36377L13.4167 7.36377ZM21.0833 7.36377L21.0833 8.36377L24.9167 8.36377L24.9167 7.36377L24.9167 6.36377L21.0833 6.36377L21.0833 7.36377ZM28.75 7.36377L28.75 8.36377L32.5833 8.36377L32.5833 7.36377L32.5833 6.36377L28.75 6.36377L28.75 7.36377ZM36.4167 7.36377L36.4167 8.36377L40.25 8.36377L40.25 7.36377L40.25 6.36377L36.4167 6.36377L36.4167 7.36377ZM44.0833 7.36377L44.0833 8.36377L47.9167 8.36377L47.9167 7.36377L47.9167 6.36377L44.0833 6.36377L44.0833 7.36377ZM51.75 7.36377L51.75 8.36377L55.5833 8.36376L55.5833 7.36376L55.5833 6.36376L51.75 6.36377L51.75 7.36377ZM59.4167 7.36376L59.4167 8.36376L63.25 8.36376L63.25 7.36376L63.25 6.36376L59.4167 6.36376L59.4167 7.36376ZM67.0833 7.36376L67.0833 8.36376L70.9167 8.36376L70.9167 7.36376L70.9167 6.36376L67.0833 6.36376L67.0833 7.36376ZM74.75 7.36376L74.75 8.36376L78.5833 8.36376L78.5833 7.36376L78.5833 6.36376L74.75 6.36376L74.75 7.36376ZM82.4167 7.36376L82.4167 8.36376L86.25 8.36376L86.25 7.36376L86.25 6.36376L82.4167 6.36376L82.4167 7.36376ZM90.0833 7.36376L90.0833 8.36376L92 8.36376L92 7.36376L92 6.36376L90.0833 6.36376L90.0833 7.36376Z"
          fill="url(#paint0_linear_1856_1355)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1856_1355"
            x1="4.37114e-08"
            y1="7.86377"
            x2="92"
            y2="7.86376"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#075B65" />
            <stop offset="0.370192" stopColor="#00838A" />
            <stop offset="0.8125" stopColor="#328A99" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
export default function ClearProcess() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <Container>
        <div className="text-center">
          <p className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent font-primary font-semibold text-[22px]">
            HOW WE WORK
          </p>

          <HeadingTwo className="mt-5 text-white">
            A CLEAR PROCESS THAT KEEPS EVERYTHING MOVING
          </HeadingTwo>

          <p className="mx-auto mt-4 max-w-3xl  leading-relaxed text-white">
            We follow a structured process to keep work moving forward without
            confusion. It also helps everyone stay aligned, even when there are
            multiple moving parts.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="h-px w-full bg-white" />
        </div>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:flex lg:items-start lg:gap-0">
          {STEPS.map((s, idx) => (
            <React.Fragment key={s.title}>
              <div className="lg:w-[25%]">
                <div className="flex flex-col items-center text-center">
                  <StepPill label={s.step} />
                  <h3 className="mt-5 text-[19px] font-primary text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[260px] leading-relaxed text-white">
                    {s.desc}
                  </p>
                </div>
              </div>

              {idx !== STEPS.length - 1 && <GradientConnector />}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
