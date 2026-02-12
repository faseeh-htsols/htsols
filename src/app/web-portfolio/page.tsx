import WebPortfolioMain from "@/views/web-portfolio/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.htsol.ca/services/web-portfolio",
  },
};
export default function WebPortfolioPage() {
  return <WebPortfolioMain />;
}
