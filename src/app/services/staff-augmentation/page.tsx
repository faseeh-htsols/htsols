import type { Metadata } from "next";
import StaffAugmentationMain from "@/views/staff-augmentation/main";

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

const WhiteLabelPage = () => {
  return <StaffAugmentationMain />;
};

export default WhiteLabelPage;
