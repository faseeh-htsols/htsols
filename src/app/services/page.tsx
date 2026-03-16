import ServicesMain from "@/views/services/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.htsol.ca/services",
  },
};

const ServicesPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know which digital marketing service my business actually needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We begin by having a discovery conversation with you and reviewing your current performance. From there, we recommend the channels that best align with your goals, budget, and timeline. We won't push services you don't need.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to see results from SEO in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generally, businesses start seeing measurable results within 3 to 6 months. However, this can vary depending on factors like local competition, your website's health, and demand in your industry.",
        },
      },
      {
        "@type": "Question",
        name: "Can you work with our in-house marketing or development team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We often collaborate with internal teams, acting as an extension of your staff. Whether it is strategy, technical support, or specialized expertise, we integrate smoothly with your existing team.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between hiring staff augmentation and outsourcing a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With staff augmentation, our professionals work alongside your internal team, helping fill skill gaps while you maintain control. Outsourcing means we manage the entire project from planning to delivery.",
        },
      },
      {
        "@type": "Question",
        name: "Do small businesses benefit from digital transformation, or is it only for large companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small and mid-sized businesses often see the biggest benefits. Automation, improved workflows, and digital tools help reduce costs, save time, and improve the overall customer experience.",
        },
      },
      {
        "@type": "Question",
        name: "How can CGI help my business generate more sales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CGI allows customers to visualize products, spaces, or concepts before purchasing. This increases buyer confidence, speeds up decision-making, and can improve conversion rates, especially in industries like real estate, manufacturing, and eCommerce.",
        },
      },
      {
        "@type": "Question",
        name: "Will switching to a new website affect my Google rankings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When handled properly, a website redesign can maintain or even improve your rankings. We implement proper redirects, technical SEO, and structured migrations to protect your existing search traffic.",
        },
      },
      {
        "@type": "Question",
        name: "How do you measure whether marketing campaigns are actually working?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We track important performance indicators such as qualified leads, cost per acquisition, conversion rates, and revenue growth rather than focusing only on impressions or clicks. Regular reports provide clear insight into campaign performance.",
        },
      },
      {
        "@type": "Question",
        name: "Can you support businesses operating in multiple cities or provinces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we create region-specific marketing strategies while maintaining a consistent brand identity. This approach works well for franchises and businesses operating across multiple cities or provinces in Canada.",
        },
      },
      {
        "@type": "Question",
        name: "What budget should a business realistically start with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Budgets depend on your goals, industry competition, and growth targets. We help prioritize the most impactful actions first and then scale the strategy as performance data and results grow.",
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
      <ServicesMain />
    </>
  );
};

export default ServicesPage;
