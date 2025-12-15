"use client";

import HeadingTwo from "@/components/ui/heading-two";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "DO YOU HAVE SPECIFIC PRICING PLANS TO SHOW?",
    answer:
      "Donec rutrum, mauris et blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
  },
  {
    question: "HOW MANY YEARS OF EXPERIENCE DO YOU HAVE?",
    answer:
      "Donec rutrum, mauris et blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
  },
  {
    question: "DO YOU HAVE SPECIFIC PRICING PLANS TO SHOW?",
    answer:
      "Donec rutrum, mauris et blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
  },
  {
    question: "DO YOU HAVE SPECIFIC PRICING PLANS TO SHOW?",
    answer:
      "Donec rutrum, mauris et blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
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
    <section className="bg-[url(/get-in-touch-bg.jpg)] py-16 bg-cover relative">
      {/* Top accent line */}
      <div
        className="pointer-events-none absolute -top-5 left-0 h-10 w-[140%]
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
           [clip-path:polygon(0_63%,100%_0,100%_55%,0_100%)]
           opacity-90"
      ></div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
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
      </div>
    </section>
  );
};

export default FAQSection;
