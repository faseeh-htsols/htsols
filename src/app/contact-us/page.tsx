import ContactUsMain from "@/views/contact-us/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.htsol.ca/contact-us",
  },
};
const ContactUsPage = () => {
  return (
    <>
      <ContactUsMain />
    </>
  );
};

export default ContactUsPage;
