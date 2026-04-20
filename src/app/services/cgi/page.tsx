import CgiMain from "@/views/cgi/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "CGI Services & 3D Animation for Brands | HTSOL Inc.",
  description: "Create scroll-stopping CGI and 3D animation campaigns with HTSOL. Boost product launches, brand visibility, and viral reach with high-impact visual content.",
  alternates: {
    canonical: "https://www.htsol.ca/services/cgi",
  },
  openGraph: {
    title: "CGI Services & 3D Animation for Brands | HTSOL Inc.",
    description: "Create scroll-stopping CGI and 3D animation campaigns with HTSOL. Boost product launches, brand visibility, and viral reach with high-impact visual content.",
    url: "https://www.htsol.ca/services/cgi",
    images: ["/htsol-ball-favicon.svg"],
  },
};
const CgiPage = () => {
  return (
    <>
      <CgiMain />
    </>
  );
};

export default CgiPage;
