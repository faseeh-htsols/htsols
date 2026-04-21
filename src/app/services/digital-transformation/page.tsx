import type { Metadata } from "next";
import DigitalTransformationMain from "@/views/digital-transformation/main";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Transformation Consulting for Service Businesses | HTSOL",
  description:
    "HTSOL provides digital transformation consulting for service businesses, including websites, SEO, automation, CRM integration, and software modernization.",
  alternates: {
    canonical: "https://www.htsol.ca/services/digital-transformation",
  },
  openGraph: {
    title: "Digital Transformation Consulting for Service Businesses | HTSOL",
    description:
      "HTSOL provides digital transformation consulting for service businesses, including websites, SEO, automation, CRM integration, and software modernization.",
    url: "https://www.htsol.ca/services/digital-transformation",
    images: ["/htsol-ball-favicon.svg"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "I have a Google Business listing and I get referrals — do I really need a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Google Business listing helps people who already know what they are looking for. A website helps you win trust, explain your services clearly, rank for more searches, and convert more visitors into enquiries. It also gives you an asset you fully control. A listing alone is not a complete digital strategy."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a complete digital transformation cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your starting point and what your business needs. Some businesses need branding, a new website, local SEO, and light automation. Others also need business process automation, CRM setup, or software modernization consulting. We scope projects based on your goals, current position, and priorities, then give you a clear breakdown of cost and deliverables."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take before I start getting clients from my website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That depends on the channels involved. Google Ads can generate enquiries quickly after launch. SEO usually takes longer to build, but its value compounds over time. Automation and system improvements may not directly bring in leads, but they improve follow-up, response speed, and conversion efficiency once leads start coming in."
      }
    },
    {
      "@type": "Question",
      "name": "Can I start with just a website and add marketing later?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. That is a common starting point. We often begin with brand and website work, then add local SEO, paid campaigns, content, and operational improvements over time. The key is planning it properly from the start so each stage connects to the next."
      }
    },
    {
      "@type": "Question",
      "name": "I am a dentist / physio / lawyer — do you understand my industry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work with trust-based service businesses where credibility, clarity, and local visibility matter. That includes healthcare, legal, and professional services. We understand how clients search, what information they need before contacting you, and how to structure a digital presence that supports those decisions. This also makes us a strong fit for digital transformation for healthcare clinics and other service-led businesses."
      }
    },
    {
      "@type": "Question",
      "name": "Will I need to be heavily involved in the process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not heavily. We involve you in the decisions that need your input, such as brand direction, design approval, service details, and business priorities. We handle the strategy, writing, development, implementation, and optimisation work so you can stay focused on running the business."
      }
    },
    {
      "@type": "Question",
      "name": "What if I already have a website but it is not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That is common. Sometimes the issue is poor messaging, weak SEO, slow performance, bad structure, or missing conversion paths. In other cases, the problem is that the website is not connected properly to your lead handling, reporting, or internal systems. We audit what is there, identify the real bottlenecks, and recommend the most practical fix."
      }
    },
    {
      "@type": "Question",
      "name": "Do you write the website copy or do I need to provide it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We write it. You give us the core information about your services, service areas, differentiators, and business goals. We turn that into clear, persuasive, SEO-friendly copy that speaks to your audience naturally and supports conversions."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to everything you build if I stop working with HTSOL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It stays yours. Your website, content, accounts, domain, and digital assets remain under your control. If we build connected systems, dashboards, or automation flows, we structure them so your business is not locked out of what it paid for."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if digital transformation is actually working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We measure it. That includes traffic, rankings, calls, form submissions, lead quality, campaign data, and operational improvements where relevant. If your project includes workflow automation consulting, reporting automation, or system changes, we also track how those improvements support faster response times, cleaner workflows, and better efficiency."
      }
    }
  ]
};

const DigitalTransformationPage = () => {
  return (
    <>
      <Script
        id="digital-transformation-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <DigitalTransformationMain />
    </>
  );
};

export default DigitalTransformationPage;
