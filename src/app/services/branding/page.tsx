import type { Metadata } from "next";
import BrandingMain from "@/views/branding/main";
import { BRANDING_FAQS } from "@/constants";

export const metadata: Metadata = {
  title: "Branding & Visual Identity Services Canada | HTSOL Inc.",
  description:
    "HTSOL Inc. creates professional brand identities for Canadian businesses - logo design, brand guidelines, colour systems, and visual identity that builds trust from the first impression.",
  alternates: {
    canonical: "https://www.htsol.ca/services/branding",
  },
  openGraph: {
    title: "Branding & Visual Identity Services Canada | HTSOL Inc.",
    description:
      "HTSOL Inc. creates professional brand identities for Canadian businesses - logo design, brand guidelines, colour systems, and visual identity that builds trust from the first impression.",
    url: "https://www.htsol.ca/services/branding",
    images: ["/htsol-ball-favicon.svg"],
  },
};

const BrandingPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BRANDING_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BrandingMain />
    </>
  );
};

export default BrandingPage;
