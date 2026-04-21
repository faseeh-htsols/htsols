import type { Metadata } from "next";
import StaffAugmentationMain from "@/views/staff-augmentation/main";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Staff Augmentation Services Canada | HTSOL Inc.",
  description:
    "HTSOL Inc. provides on-demand digital talent for startups, agencies, and growing businesses across Canada. Developers, designers, marketers, and SEO specialists — dedicated to your team.",
  alternates: {
    canonical: "https://www.htsol.ca/services/staff-augmentation",
  },
  openGraph: {
    title: "Staff Augmentation Services Canada | HTSOL Inc.",
    description:
      "HTSOL Inc. provides on-demand digital talent for startups, agencies, and growing businesses across Canada. Developers, designers, marketers, and SEO specialists — dedicated to your team.",
    url: "https://www.htsol.ca/services/staff-augmentation",
    images: ["/htsol-ball-favicon.svg"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between staff augmentation and hiring a freelancer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A freelancer works for themselves on their schedule, across multiple clients, with their own tools, and with limited accountability to your process. A staff augmentation resource works for you inside your tools, on your hours, under your direct management, with full accountability to your team and your deliverables. The key difference is integration and dedication. A freelancer is a contractor you work with, while an augmented resource becomes part of your team for the duration of the engagement."
      }
    },
    {
      "@type": "Question",
      "name": "How is this different from using an agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you hire an agency, they own the work, assign available resources, and communication often goes through an account manager with limited visibility into execution. With staff augmentation, you get a named individual who works directly for you. You manage them, set priorities, and see output as it is produced without intermediaries or unnecessary overhead."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can someone start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, within five business days of confirming the engagement. The timeline depends on the specific role and experience level required. Specialist roles may take a few additional days to match correctly. The focus is on placing the right person quickly while meeting your timeline requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What roles can I hire through HTSOL staff augmentation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can hire full-stack, front-end, and back-end developers; UI/UX and graphic designers; SEO specialists; paid ads managers for Google and Meta; social media managers; content writers and strategists; email marketing specialists; and project managers. If you need a role not listed, you can inquire for availability."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to provide equipment or software licences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the role and your preference. Most resources work with their own hardware. For software licences, you can use your existing licences, have the provider source them, or receive guidance on the most cost-effective setup before the engagement begins."
      }
    },
    {
      "@type": "Question",
      "name": "Can I end an engagement early if it is not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Standard engagements include a two-week notice period for ending or adjusting scope. If the placement is not working, issues are addressed directly and replacements can be made if necessary."
      }
    },
    {
      "@type": "Question",
      "name": "Who manages the HTSOL resource — us or you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You manage the resource. You set priorities, assign tasks, run meetings, and provide feedback. The provider handles employment responsibilities such as compensation, compliance, and HR matters."
      }
    },
    {
      "@type": "Question",
      "name": "Can a staff augmentation arrangement become a permanent hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Staff augmentation can serve as a trial period before committing to a permanent hire. After a few months, you can convert the resource into a direct employee under agreed terms."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a minimum engagement length?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A minimum commitment of one month is required for full-time and part-time resources to ensure meaningful contribution. For project-based work, the minimum is the project scope. Short-term day rates or weekly arrangements are not offered."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure the person you place is actually as experienced as described?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each resource undergoes technical and professional evaluation, including skill assessments, portfolio reviews, and structured interviews. Matching also considers communication, working style, and remote capability to ensure the right fit."
      }
    }
  ]
};

const WhiteLabelPage = () => {
  return (
    <>
      <Script
        id="staff-augmentation-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <StaffAugmentationMain />
    </>
  );
};

export default WhiteLabelPage;
