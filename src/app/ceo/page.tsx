import CeoMain from "@/views/ceo/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.htsol.ca/ceo",
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
