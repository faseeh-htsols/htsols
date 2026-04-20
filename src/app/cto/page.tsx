import CtoMain from "@/views/cto/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Qamar Rafique, CTO & Technical Architect | HTSOL Inc.",
  description: "Meet Qamar Rafique, CTO at HTSOL Inc. Explore his expertise in software architecture, AI systems, custom CRM development, technical SEO, and web performance.",
  alternates: {
    canonical: "https://www.htsol.ca/cto",
  },
  openGraph: {
    title: "Qamar Rafique, CTO & Technical Architect | HTSOL Inc.",
    description: "Meet Qamar Rafique, CTO at HTSOL Inc. Explore his expertise in software architecture, AI systems, custom CRM development, technical SEO, and web performance.",
    url: "https://www.htsol.ca/cto",
    images: ["/htsol-ball-favicon.svg"],
  },
};
function Page() {
  return (
    <div>
      <CtoMain />
    </div>
  );
}

export default Page;
