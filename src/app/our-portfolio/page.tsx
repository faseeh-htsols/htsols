import WebPortfolioMain from "@/views/our-portfolio/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Portfolio | HTSOL Inc.",
  description: "Explore HTSOL Inc.'s portfolio featuring website design, website development, CGI ads, digital marketing, SEO, and custom software projects across multiple industries.",
  alternates: {
    canonical: "https://www.htsol.ca/our-portfolio",
  },
  openGraph: {
    title: "Our Portfolio | HTSOL Inc.",
    description: "Explore HTSOL Inc.'s portfolio featuring website design, website development, CGI ads, digital marketing, SEO, and custom software projects across multiple industries.",
    url: "https://www.htsol.ca/our-portfolio",
    images: ["/htsol-ball-favicon.svg"],
  },
};
export default function WebPortfolioPage() {
  return <WebPortfolioMain />;
}
