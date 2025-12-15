import FAQSection from "../home/FAQSection";
import LogosMarquee from "../home/logos-marquee";
import Banner from "./banner";
import CallBackFromUs from "./call-back-from-us";
import ContactUsDetails from "./contact-us-details";

const ContactUsMain = () => {
  return (
    <>
      <Banner />
      <ContactUsDetails />
      <FAQSection />
      <CallBackFromUs />
      <LogosMarquee />
    </>
  );
};

export default ContactUsMain;
