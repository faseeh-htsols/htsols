import AboutUsMain from "@/views/about-us/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About HTSOL Inc. Digital Marketing Agency",
  description:
    "HTSOL Inc. is a Canada-based digital marketing agency delivering strategy-led marketing, high-performing websites, and measurable growth for businesses.",
  alternates: {
    canonical: "https://www.htsol.ca/about-us",
  },
};
const page = () => {
  return (
    <>
      <AboutUsMain />
    </>
  );
};

export default page;
