"use client";

import HeadingTwo from "@/components/ui/heading-two";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do You Have Specific Pricing Plans to Show?",
    answer:
      "We don’t use one-size-fits-all pricing. Every package is customized based on your goals, market, and scope of work. After a short consultation, we provide a clear, transparent proposal with deliverables and timelines.",
  },
  {
    question: "Do You Work With Businesses in Different Industries?",
    answer:
      "Yes. We’ve worked across multiple industries and tailor our strategies to fit each client’s audience, competition, and business objectives but we have a our forte in Healthcare from past 5 years.",
  },
  {
    question: "Are You a Canadian Registered Company?",
    answer:
      "Yes, we are a Canadian registered company, operating in full compliance with local regulations. We work with clients across Canada and internationally, delivering transparent, reliable, and professional marketing services.",
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const [customQuestion, setCustomQuestion] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Question submitted:", customQuestion);
  };

  return (
    <section className="bg-[url(/get-in-touch-bg.jpg)] py-24 bg-cover relative   -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      {/* Top accent line */}
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <HeadingTwo className="text-center">
            FREQUENTLY ASKED QUESTIONS
          </HeadingTwo>
          <p className="text-white/60 text-sm">
            Providing answers to your questions
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          <Accordion type="single" className="space-y-4 mb-12" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                className="
    border border-white border-b! px-4 bg-transparent rounded-lg transition-all
    data-[state=open]:border-tertiary
    data-[state=open]:bg-tertiary
  "
                value={String(index)}
              >
                <AccordionTrigger className="text-white font-secondary text-lg uppercase hover:no-underline cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
