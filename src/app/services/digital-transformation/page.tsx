import type { Metadata } from "next";
import DigitalTransformationMain from "@/views/digital-transformation/main";

export const metadata: Metadata = {
  title: "Digital Transformation Consulting for Service Businesses | HTSOL",
  description:
    "HTSOL provides digital transformation consulting for service businesses, including websites, SEO, automation, CRM integration, and software modernization.",
  alternates: {
    canonical: "https://www.htsol.ca/services/digital-transformation",
  },
};

const WhiteLabelPage = () => {
  return <DigitalTransformationMain />;
};

export default WhiteLabelPage;
