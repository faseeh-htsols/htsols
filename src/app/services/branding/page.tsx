import type { Metadata } from "next";
import BrandingMain from "@/views/branding/main";

export const metadata: Metadata = {
  title: "Branding & Visual Identity Services | HTSOL Inc.",
  description:
    "Build a sharper brand identity with HTSOL Inc. Branding, logo systems, guidelines, presentation assets, and visual design for Canadian businesses.",
  alternates: {
    canonical: "https://www.htsol.ca/services/branding",
  },
  openGraph: {
    title: "Branding & Visual Identity Services | HTSOL Inc.",
    description:
      "Build a sharper brand identity with HTSOL Inc. Branding, logo systems, guidelines, presentation assets, and visual design for Canadian businesses.",
    url: "https://www.htsol.ca/services/branding",
    images: ["/htsol-ball-favicon.svg"],
  },
};

const BrandingPage = () => {
  return <BrandingMain />;
};

export default BrandingPage;
