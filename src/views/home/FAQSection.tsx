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

interface FAQSectionProps {
  faqs?: FAQItem[];
  heading?: boolean;
  form?: boolean;
  bgColor?: boolean;
}

const defaultFAQs: FAQItem[] = [
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

export const FAQSection: React.FC<FAQSectionProps> = ({
  faqs = defaultFAQs,
  heading = false,
  bgColor = false,
  form = false,
}) => {
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
    <section className=" py-24 relative   -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
      style={{
        background: bgColor ? "black" : `url(/get-in-touch-bg.jpg)`,
        backgroundSize: "cover",
      }}>
      {/* Top accent line */}
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] animate-pulse
          "
      ></div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          {!heading ? (
            <HeadingTwo className="text-center">
              FREQUENTLY ASKED QUESTIONS
            </HeadingTwo>
          ) : (
            <HeadingTwo span="QUESTIONS" className="text-center">
              FREQUENTLY ASKED
            </HeadingTwo>
          )}
          <p className="text-white/60 text-sm">
            Providing answers to your questions
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`space-y-4 ${form ? "mb-4" : "mb-12"}`}>
          <Accordion type="single" className={`space-y-4 ${form ? "mb-0" : "mb-12"}`} collapsible>
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
        {form && (
          <div className="">
            <textarea
              name=""
              className="h-28 w-full relative outline-0 bg-transparent border border-white border-b! px-4 rounded-lg transition-all py-3 backdrop:backdrop-blur-2xl placeholder:text-white text-white"
              placeholder="Ask us what you want to know..."
              id=""
            ></textarea>
            <div className="flex flex-col-reverse items-center gap-8 md:gap-0 md:flex-row-reverse w-full md:w-1/2 mt-4 md:items-start justify-between">
              <button className="inline-flex items-center bg-transparent hover:bg-white gap-2 p-3 py-2 text-sm text-white hover:text-primary font-medium uppercase rounded-full tracking-wider transition-all duration-300 border">
                Send Message

                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-300"
                >
                  <g clipPath="url(#clip0_397_144)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.56991 23.5995C5.13058 23.1602 5.13057 22.4479 5.56991 22.0085L17.2372 10.3413C17.6765 9.90193 18.3888 9.90193 18.8282 10.3413C19.2675 10.7806 19.2675 11.4929 18.8282 11.9322L7.1609 23.5995C6.72156 24.0389 6.00923 24.0388 5.56991 23.5995Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.36147 11.1338C7.36147 10.5125 7.86518 10.0088 8.48651 10.0088L18.0324 10.0088C18.6537 10.0088 19.1574 10.5125 19.1575 11.1338L19.1575 20.6797C19.1574 21.301 18.6537 21.8047 18.0324 21.8048C17.4111 21.8047 16.9074 21.301 16.9074 20.6797L16.9074 12.2588L8.48647 12.2588C7.86519 12.2588 7.36151 11.7551 7.36147 11.1338Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_397_144">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 16.9706) rotate(-45)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              <p className="text-white/60 text-sm text-center md:text-start">
                We will answer your questions via<br className="hidden md:block" /> email within 48 hours.
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default FAQSection;
