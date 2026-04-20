import SeoMain from "@/views/seo/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Engine Optimization Services | HTSOL Inc.",
  description: "Grow traffic and leads with HTSOL Inc.’s SEO services across Canada. Technical SEO, content strategy, and clear reporting focused on measurable monthly ROI.",
  alternates: {
    canonical: "https://www.htsol.ca/services/seo-services",
  },
  openGraph: {
    title: "Search Engine Optimization Services | HTSOL Inc.",
    description: "Grow traffic and leads with HTSOL Inc.’s SEO services across Canada. Technical SEO, content strategy, and clear reporting focused on measurable monthly ROI.",
    url: "https://www.htsol.ca/services/seo-services",
    images: ["/htsol-ball-favicon.svg"],
  },
};
const SeoPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why does my website show on Google sometimes but disappear other days?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Search rankings fluctuate due to algorithm updates, competitors updating content, or indexing changes. If your site lacks authority or consistent optimisation, it can temporarily rank and then drop. A stable SEO strategy helps maintain consistent visibility instead of short spikes.",
        },
      },
      {
        "@type": "Question",
        name: "I get website traffic but no calls or leads. What's going wrong?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traffic alone does not guarantee conversions. Often the keywords attract the wrong audience or the page does not answer the visitor's intent clearly. Improving content relevance, layout, and calls-to-action usually fixes this issue.",
        },
      },
      {
        "@type": "Question",
        name: "My competitors rank higher even though their website looks worse than mine. Why?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google ranks relevance and trust, not design quality. Older domains, stronger backlinks, and better keyword targeting often outweigh visual appearance. SEO focuses on credibility signals search engines can measure.",
        },
      },
      {
        "@type": "Question",
        name: "Does changing my website design hurt my Google rankings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It can if URLs, content structure, or internal links change without proper redirects. Many redesigns accidentally remove SEO value built over years. Careful migration planning protects rankings during updates.",
        },
      },
      {
        "@type": "Question",
        name: "Why is my Google Business Profile visible in one city but not nearby towns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local rankings depend on proximity, relevance, and local signals like reviews and location pages. Without targeted optimisation for each service area, Google limits visibility outside your immediate location.",
        },
      },
      {
        "@type": "Question",
        name: "Can negative reviews affect my search ranking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, indirectly. Poor reviews reduce trust and lower engagement rates, which can impact local visibility. Responding professionally and improving review volume often improves both reputation and rankings.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to recover from a ranking drop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Recovery depends on the cause. Technical issues may take weeks after fixes, while authority losses can take months. Consistent optimisation and monitoring help prevent repeated drops.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my paid advertising work but SEO doesn't?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paid ads appear instantly because you pay for placement. SEO requires proving relevance and trust over time. Once established, organic traffic continues without ongoing ad spend.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need different pages for different Canadian cities I serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually yes. Google prefers location-specific pages that clearly explain services for each area. A single generic page rarely ranks across multiple cities competitively.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI tools write all my website content for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI can help draft content, but search engines still prioritise expertise, accuracy, and usefulness. Human editing, local relevance, and experience-based information are needed for reliable rankings.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SeoMain />
    </>
  );
};

export default SeoPage;
