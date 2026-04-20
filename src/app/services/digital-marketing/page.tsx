import DigitalMarketingMain from "@/views/digital-marketing/main";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Marketing Services Canada | HTSOL Inc.",
  description: "Drive growth with data-driven digital marketing services in Canada. HTSOL Inc. delivers SEO, PPC, social media, and strategy to generate leads and scale your business.",
  alternates: {
    canonical: "https://www.htsol.ca/services/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing Services Canada | HTSOL Inc.",
    description: "Drive growth with data-driven digital marketing services in Canada. HTSOL Inc. delivers SEO, PPC, social media, and strategy to generate leads and scale your business.",
    url: "https://www.htsol.ca/services/digital-marketing",
    images: ["/htsol-ball-favicon.svg"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why am I getting website traffic but no enquiries or calls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This usually means the issue is not traffic volume but conversion friction. Review your offer clarity, contact form length, page speed, and call-to-action placement, and ensure the traffic matches the service you want to sell."
      }
    },
    {
      "@type": "Question",
      "name": "How long should I wait before deciding a digital marketing campaign is not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avoid judging too early, especially while tracking and targeting are still being refined. Wait until enough data is collected, then evaluate lead quality, conversion rates, and cost per lead rather than focusing only on clicks."
      }
    },
    {
      "@type": "Question",
      "name": "Should I fix my website first or start ads first if I need leads quickly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your website is difficult to use, paid ads may send traffic to a page that does not convert well. A practical approach is to run ads to a strong landing page while improving the rest of the website gradually."
      }
    },
    {
      "@type": "Question",
      "name": "Why are my Google Ads getting clicks, but the leads are poor quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Poor lead quality often results from broad targeting, weak keyword intent, or unclear ad messaging. Improve targeting, add negative keywords, and clearly communicate pricing, service areas, and audience on the landing page."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my agency is actually helping revenue, not just generating reports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ask for reports tied to real business outcomes such as qualified leads, booked calls, sales opportunities, and revenue impact. Reports that only show impressions and clicks may not reflect true performance."
      }
    },
    {
      "@type": "Question",
      "name": "I serve multiple Canadian cities, should I use one page or separate pages for each area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If each city has unique demand or services, separate pages usually perform better. Each page should include useful local information rather than duplicated content with only the city name changed."
      }
    },
    {
      "@type": "Question",
      "name": "Can I switch digital marketing agencies without losing my ad data or accounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, as long as your accounts are under your business ownership. Ensure you maintain admin access to Google Ads, Analytics, Search Console, Meta accounts, and your website before switching agencies."
      }
    },
    {
      "@type": "Question",
      "name": "I have a limited budget, should I split it across SEO, PPC, and social media right away?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually it is better to focus on one or two channels first. Smaller budgets tend to perform better when concentrated on the most effective channels before expanding to additional platforms."
      }
    },
    {
      "@type": "Question",
      "name": "Why did my local ad leads suddenly drop after changes to my business profile or account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lead volume may drop due to verification issues, mismatched business information, or account compliance changes. Review your Google Business Profile and advertising account settings to ensure everything is accurate and active."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need separate English and French landing pages for Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always, but bilingual landing pages can improve trust and conversions in certain regions. Start with your most important markets and expand based on traffic and lead performance data."
      }
    }
  ]
};

const DigitalMarketingPage = () => {

  return (
    <>
      <Script
        id="digital-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <DigitalMarketingMain />
    </>
  );
};

export default DigitalMarketingPage;
