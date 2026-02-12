import DentalMain from "@/views/dental-marketing/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.htsol.ca/dental-marketing",
  },
};
const DentalMarketingPage = () => {
  return (
    <>
      <DentalMain />
    </>
  );
};

export default DentalMarketingPage;
