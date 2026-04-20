import WebPortfolioMain from "@/views/our-portfolio/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.htsol.ca/our-portfolio",
  },
};
export default function WebPortfolioPage() {
  return <WebPortfolioMain />;
}
