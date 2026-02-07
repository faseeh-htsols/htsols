"use client";

import { useState } from "react";

export default function FAQSection() {
  const [leftOpen, setLeftOpen] = useState<number | null>(0);
  const [rightOpen, setRightOpen] = useState<number | null>(null);

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-center text-white text-3xl lg:text-4xl font-semibold mb-16">
          Frequently Asked Questions
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
          {/* vertical divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px border-l border-dashed border-[#4f8fa0]" />

          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {[
              {
                q: "Why does my dental practice need a new website?",
                a: "62% of patients ignore businesses without an online presence, and 39% judge your clinical quality based on your website’s design.",
              },
              {
                q: "Will my website work on mobile phones?",
                a: "Yes. All our websites are fully responsive and optimized for mobile, tablet, and desktop devices.",
              },
              {
                q: "Can you help with online bookings?",
                a: "Absolutely. We integrate seamless online booking systems that reduce friction and increase patient conversions.",
              },
              {
                q: "Do you only work with dentists?",
                a: "Yes. We specialize exclusively in dental practices, allowing us to apply industry-specific strategies.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-full border transition ${
                  leftOpen === index
                    ? "border-[#4f8fa0] bg-[#0f1a1f]"
                    : "border-white/20"
                }`}
              >
                <button
                  onClick={() => setLeftOpen(leftOpen === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-white text-sm"
                >
                  {item.q}
                  <span className="text-[#4f8fa0]">
                    {leftOpen === index ? "–" : "+"}
                  </span>
                </button>

                {leftOpen === index && (
                  <div className="px-6 pb-4 text-sm text-white/70">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {[
              {
                q: "How fast should my website load?",
                a: "Ideally, under 3 seconds. 40% of users abandon sites that take longer, and every extra second can cost you conversions.",
              },
              {
                q: "How does SEO help my clinic?",
                a: "SEO improves your visibility on Google so patients searching for local dentists find you first.",
              },
              {
                q: "Does branding really impact my revenue?",
                a: "Yes. Strong branding builds trust and credibility, directly influencing patient choice and long-term loyalty.",
              },
              {
                q: "How quickly can I see results?",
                a: "Website and conversion improvements are immediate, while SEO results typically appear within 60–90 days.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-full border transition ${
                  rightOpen === index
                    ? "border-[#4f8fa0] bg-[#0f1a1f]"
                    : "border-white/20"
                }`}
              >
                <button
                  onClick={() =>
                    setRightOpen(rightOpen === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-white text-sm"
                >
                  {item.q}
                  <span className="text-[#4f8fa0]">
                    {rightOpen === index ? "–" : "+"}
                  </span>
                </button>

                {rightOpen === index && (
                  <div className="px-6 pb-4 text-sm text-white/70">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
