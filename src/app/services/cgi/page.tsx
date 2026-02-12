import CgiMain from "@/views/cgi/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.htsol.ca/services/cgi",
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
