import Main from "@/views/home/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "HTSOL Digital Marketing Agency | Web Design & Growth",
  description:
    "Canadian digital partner for web design, UI/UX, CGI, AI SEO, and performance marketing - helping businesses build, improve, and scale online.",
  alternates: {
    canonical: "https://www.htsol.ca",
  },
  openGraph: {
    title: "HTSOL Digital Marketing Agency | Web Design & Growth",
    description: "Canadian digital partner for web design, UI/UX, CGI, AI SEO, and performance marketing - helping businesses build, improve, and scale online.",
    url: "https://www.htsol.ca",
    images: ["/htsol-ball-favicon.svg"],
  },
};
export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it usually take to build a custom business website in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most standard business websites take 2 to 4 weeks depending on features, content readiness, and feedback speed. Larger web applications or integrations may take longer, but we provide a clear timeline before work begins.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to provide design ideas before starting UI/UX work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not at all. We guide you through a discovery process and create a bespoke design based on your brand, audience, and goals. Your feedback simply helps refine direction.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between SEO and AI SEO Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional SEO focuses on ranking pages in search engines, while AI SEO Services also optimise content for AI search tools and answer engines. This helps your business appear in modern search results, not just standard listings.",
        },
      },
      {
        "@type": "Question",
        name: "Can you work with our existing website instead of rebuilding it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If your current platform is stable, we can improve performance, redesign sections, or optimise structure. A rebuild is only recommended when the system limits growth.",
        },
      },
      {
        "@type": "Question",
        name: "Is staff augmentation suitable for small businesses or only large companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It works well for both. Small businesses use it to access skills without hiring full-time staff, while larger companies use it to scale teams quickly for projects.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know which marketing service my business actually needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We review your goals, audience, and current traffic sources first. Then we recommend only the channels that realistically support growth rather than spreading effort everywhere.",
        },
      },
      {
        "@type": "Question",
        name: "Will SEO or PPC bring faster results for a new business in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PPC usually brings traffic quickly, while SEO builds steady long-term visibility. Many businesses start with both so they get immediate leads while organic presence grows.",
        },
      },
      {
        "@type": "Question",
        name: "Can CGI or visual production help sell services, not just products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Visual explanations make complex services easier to understand. They help visitors quickly grasp value, which improves engagement and enquiries.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after my website or app launches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We monitor performance, fix issues, and suggest improvements based on user behaviour. Most clients keep ongoing support so the platform continues evolving with their business.",
        },
      },
      {
        "@type": "Question",
        name: "Do you integrate CRM or booking systems into websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We regularly connect websites with CRM platforms, booking tools, and internal systems so information flows automatically and reduces manual work. We can also create a custom AI-powered CRM, CMS, or software tailored to your business.",
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
      <Main />
    </>
  );
}
