"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";

interface IFaq {
  question: string;
  answer: string;
}

interface FaqsSimpleProps {
  data: IFaq[];
}

const FaqsSimple: React.FC<FaqsSimpleProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="bg-[url(/get-in-touch-bg.jpg)] py-24 bg-cover relative -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      {/* Top accent line */}
      <div className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"></div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-white text-4xl md:text-5xl font-bold uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-white/60 text-sm">
            Providing answers to your questions
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" className="space-y-4 mb-12" collapsible>
          {data.map((faq, index) => (
            <AccordionItem
              key={index}
              className="border border-white border-b! px-4 bg-transparent rounded-lg transition-all data-[state=open]:border-tertiary data-[state=open]:bg-tertiary"
              value={String(index)}>
              <AccordionTrigger className="text-white font-secondary text-lg uppercase hover:no-underline cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FaqsSimple;
