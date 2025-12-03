"use client";

import React, { useState } from "react";

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
    <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-wide">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-white/60 text-sm">Providing answers to your questions</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 md:px-8 py-5 text-left bg-transparent hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-white text-sm md:text-base font-medium tracking-wider uppercase pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-6 pt-2">
                  <p className="text-white/70 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Question Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-16">
          <div className="border border-white/20 rounded-lg overflow-hidden">
            <textarea
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              placeholder="Ask us what you want to know..."
              rows={6}
              className="w-full bg-transparent px-6 md:px-8 py-6 text-white placeholder:text-white/40 text-sm focus:outline-none resize-none"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-white/50 text-xs md:text-sm">
              We will answer your questions via <br className="md:hidden" />
              email within 48 hours.
            </p>

            <button
              type="submit"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white/30 text-white text-sm uppercase tracking-wider hover:bg-primary hover:border-primary hover:text-black transition-all duration-300"
            >
              Send Message
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FAQSection;

