import type { Metadata } from "next";
import WhiteLabelMain from "@/views/white-label/main";

export const metadata: Metadata = {
  title: "White Label Agency Partner | HTSOL Inc.",
  description:
    "Scale your agency with a white label delivery partner for websites, SEO, and digital marketing under your brand.",
  alternates: {
    canonical: "https://www.htsol.ca/services/white-label",
  },
  openGraph: {
    title: "White Label Agency Partner | HTSOL Inc.",
    description:
      "Scale your agency with a white label delivery partner for websites, SEO, and digital marketing under your brand.",
    url: "https://www.htsol.ca/services/white-label",
    images: ["/htsol-ball-favicon.svg"],
  },
};

const WhiteLabelPage = () => {
  return <WhiteLabelMain />;
};

export default WhiteLabelPage;
