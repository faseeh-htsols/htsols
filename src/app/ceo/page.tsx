import CeoMain from "@/views/ceo/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Faseeh Khan — Digital Growth Strategist & CEO | HTSOL",
  description:
    "Meet Faseeh Khan, CEO of HTSOL Inc. — a digital growth strategist and full-stack builder helping dental practices, healthcare businesses, and agencies grow online. Based in Mississauga, ON.",
  keywords: [
    "Faseeh Khan",
    "CEO HTSOL Inc.",
    "digital growth strategist Canada",
    "dental marketing expert Mississauga",
  ],
  alternates: {
    canonical: "https://www.htsol.ca/ceo",
  },
  openGraph: {
    title: "Faseeh Khan — Digital Growth Strategist & CEO | HTSOL",
    description:
      "Meet Faseeh Khan, CEO of HTSOL Inc. — a digital growth strategist and full-stack builder helping dental practices, healthcare businesses, and agencies grow online. Based in Mississauga, ON.",
    url: "https://www.htsol.ca/ceo",
    images: ["/htsol-ball-favicon.svg"],
  },
};
const CeoPage = () => {
  return (
    <>
      <CeoMain />
    </>
  );
};

export default CeoPage;
