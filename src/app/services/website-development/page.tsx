import WebDevMain from "@/views/web-dev/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Web Development Company in Canada | HTSOL Inc.",
  description: "Bespoke, SEO-ready websites for Canadian businesses. HTSOL Inc. builds fast, secure sites that boost visibility, trust, and leads. Book a free consultation today.",
  alternates: {
    canonical: "https://www.htsol.ca/services/website-development",
  },
  openGraph: {
    title: "Web Development Company in Canada | HTSOL Inc.",
    description: "Bespoke, SEO-ready websites for Canadian businesses. HTSOL Inc. builds fast, secure sites that boost visibility, trust, and leads. Book a free consultation today.",
    url: "https://www.htsol.ca/services/website-development",
    images: ["/htsol-ball-favicon.svg"],
  },
};

const WebDevPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to hire a Web Development Company in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Costs vary based on pages, features, content work, and integrations. A good quote should break down scope clearly so you know what you are paying for and what you are not.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical website build take from kickoff to launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timelines usually depend on approvals and how quickly content is ready. A clear project plan with milestones helps you avoid slowdowns and last-minute surprises.",
        },
      },
      {
        "@type": "Question",
        name: "Will I own my domain, hosting, and website when the project is finished?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should. Make sure your business controls the domain registrar account and has admin access to hosting, CMS, and key logins so you are never locked out later.",
        },
      },
      {
        "@type": "Question",
        name: "Can a redesign hurt my rankings even if the new site looks better?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it can if URLs, content, internal links, or tracking change without a plan. A proper migration approach protects key pages, redirects, and measurement so you can recover faster.",
        },
      },
      {
        "@type": "Question",
        name: "Why is my current site slow even though it is not big?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common causes are heavy images, too many scripts, poorly built themes or plugins, and weak hosting. A performance audit can identify the biggest bottleneck instead of guessing.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to write all the website copy myself before we start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. Many businesses start with existing pages, notes, and competitor examples, then refine messaging during the project so the final copy sounds clear and credible.",
        },
      },
      {
        "@type": "Question",
        name: "What ongoing costs should I expect after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most sites still need hosting, renewals, updates, and occasional fixes. A simple maintenance plan can prevent security issues and unexpected downtime when something breaks.",
        },
      },
      {
        "@type": "Question",
        name: "Should I choose Shopify, WooCommerce, or a bespoke e-commerce build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on how you manage products, payments, shipping, and reporting. The right choice is the one your team can run reliably without constant developer help.",
        },
      },
      {
        "@type": "Question",
        name: "Will a new website automatically bring in more leads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A new site helps, but results usually come from matching the site to intent, improving offer clarity, and tracking what visitors do. Without measurement, it is hard to know what is working.",
        },
      },
      {
        "@type": "Question",
        name: "For ads, should I send people to my homepage or a dedicated landing page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For many campaigns, a focused landing page converts better because it removes distractions and matches the ad. In trust-heavy services, you may still want easy access to proof pages from that landing page.",
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
      <WebDevMain />
    </>
  );
};

export default WebDevPage;
