import ContactUsMain from "@/views/contact-us/main";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.htsol.ca/contact-us",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What information should I provide on the contact form?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To better understand your needs, kindly share your name, email, business details, and a brief description of what you're seeking. The more information you provide, the better equipped we are to assist you."
      }
    },
    {
      "@type": "Question",
      "name": "How long will it take to get a response after I submit the contact form?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We strive to respond within 1-2 business days. Our team will reach out to discuss your goals and explore how we can assist you."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to sign a contract before starting the project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First, we will schedule a call or meeting to discuss your requirements. After that, we provide a clear proposal and a contract is signed once you are ready to proceed."
      }
    },
    {
      "@type": "Question",
      "name": "Can I schedule a call with your team before submitting the form?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can reach out to us directly to schedule a call. Our team is available to discuss your needs at a convenient time."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of businesses do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with businesses of all sizes across different industries, from startups to established enterprises that need digital marketing and web development services."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer free consultations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer a free initial consultation to understand your goals and challenges. During this session, we provide guidance and discuss possible strategies."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if your services are right for my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We take a personalized approach. After understanding your business and objectives, we recommend the most suitable services and create a tailored plan."
      }
    },
    {
      "@type": "Question",
      "name": "Will I be involved in the campaign strategy process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we believe in collaboration. You will be involved throughout the strategy planning and execution process to ensure the campaign aligns with your goals."
      }
    },
    {
      "@type": "Question",
      "name": "How do you track the success of your campaigns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use data-driven tools to monitor, analyze, and optimize campaign performance. Regular reports are shared so you can track progress and results."
      }
    },
    {
      "@type": "Question",
      "name": "Can I reach you outside of regular business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team is primarily available during standard business hours, but you can always send us an email. We will respond as soon as possible and prioritize urgent requests."
      }
    }
  ]
};

const ContactUsPage = () => {
  return (
    <>
      <Script
        id="contact-us-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ContactUsMain />
    </>
  );
};

export default ContactUsPage;
