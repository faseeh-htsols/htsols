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
    question:
      "How long does it usually take to build a custom business website in Canada?",
    answer:
      "Most standard business websites take 2 to 4 weeks depending on features, content readiness, and feedback speed. Larger web applications or integrations may take longer, but we provide a clear timeline before work begins.",
  },
  {
    question: "Do I need to provide design ideas before starting UI/UX work?",
    answer:
      "Not at all. We guide you through a discovery process and create a bespoke design based on your brand, audience, and goals. Your feedback simply helps refine direction.",
  },
  {
    question: "What is the difference between SEO and AI SEO Services?",
    answer:
      "Traditional SEO focuses on ranking pages in search engines, while AI SEO Services also optimise content for AI search tools and answer engines. This helps your business appear in modern search results, not just standard listings.",
  },
  {
    question:
      "Can you work with our existing website instead of rebuilding it?",
    answer:
      "Yes. If your current platform is stable, we can improve performance, redesign sections, or optimise structure. A rebuild is only recommended when the system limits growth.",
  },
  {
    question:
      "Is staff augmentation suitable for small businesses or only large companies?",
    answer:
      "It works well for both. Small businesses use it to access skills without hiring full-time staff, while larger companies use it to scale teams quickly for projects.",
  },
  {
    question:
      "How do I know which marketing service my business actually needs?",
    answer:
      "We review your goals, audience, and current traffic sources first. Then we recommend only the channels that realistically support growth rather than spreading effort everywhere.",
  },
  {
    question:
      "Will SEO or PPC bring faster results for a new business in Canada?",
    answer:
      "PPC usually brings traffic quickly, while SEO builds steady long-term visibility. Many businesses start with both so they get immediate leads while organic presence grows.",
  },
  {
    question:
      "Can CGI or visual production help sell services, not just products?",
    answer:
      "Yes. Visual explanations make complex services easier to understand. They help visitors quickly grasp value, which improves engagement and enquiries.",
  },
  {
    question: "What happens after my website or app launches?",
    answer:
      "We monitor performance, fix issues, and suggest improvements based on user behaviour. Most clients keep ongoing support so the platform continues evolving with their business.",
  },
  {
    question: "Do you integrate CRM or booking systems into websites?",
    answer:
      "Yes. We regularly connect websites with CRM platforms, booking tools, and internal systems so information flows automatically and reduces manual work. We can also create a custom AI-powered CRM/CMS/Software tailor made for your business.",
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
    data-[state=open]:border-tertiary  data-[state=open]:shadow-[0_0_5px_#00838A] 
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
