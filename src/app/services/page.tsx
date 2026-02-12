import ServicesMain from "@/views/services/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.htsol.ca/services",
  },
};

const ServicesPage = () => {
  return (
    <>
      <ServicesMain />
    </>
  );
};

export default ServicesPage;
