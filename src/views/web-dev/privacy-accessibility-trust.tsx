import React from "react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/Button";

const FUNDAMENTALS = [
  "Consent-friendly analytics and cookie setups when required",
  "Privacy basics aligned with Canadian expectations, including PIPEDA considerations",
  "Accessibility best practices aligned with WCAG, and AODA considerations for Ontario-based organizations",
  "Security basics like SSL, updates, and form protection",
];

const PrivacyAccessibilityTrust = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] bg-[url(/design-web-dev.webp)] bg-cover bg-right overflow-hidden">
      <Container>
        <div className="relative z-10 flex py-16 lg:py-24">
          <div className="">
            <div className="max-w-xl rounded-2xl bg-[#1a1a1a]/95 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl">
              <h2 className="font-primary font-medium text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-wide mb-4">
                Privacy, Accessibility, and Trust
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                Canadian users expect clear, respectful handling of their data,
                and a site that works well for everyone. We build with practical
                standards in mind, and we help you make smart choices based on
                your industry and audience.
              </p>
              <p className="text-[#00838A] font-medium text-sm sm:text-base mb-4">
                We support practical website fundamentals such as:
              </p>
              <ul className="space-y-2 mb-8 text-white/90 text-sm sm:text-base">
                {FUNDAMENTALS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#00838A] shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="w-fit">
                <Button href="/" variant="primary">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyAccessibilityTrust;
