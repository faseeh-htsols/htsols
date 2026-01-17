import Banner from "./banner";
import NeedsBuisness from "./needs-buisness";
import WhyChoose from "./why-choose";
import OurProcess from "./our-process";
import WhatsIncluded from "./whats-included";
import ClientsSection from "../home/ClientsSection";
import ContactForm from "../home/contact-form";
import CallBackFromUs from "./call-back-from-us";

const WebDevMain = () => {
  return (
    <>
      <Banner />
      <NeedsBuisness />
      <WhyChoose />
      <OurProcess />
      <CallBackFromUs />
      <WhatsIncluded />
      <ClientsSection />
      <ContactForm />
    </>
  );
};

export default WebDevMain;
