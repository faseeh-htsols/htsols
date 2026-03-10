import Banner from "./banner";
import NeedsBuisness from "./needs-buisness";
import WhyChoose from "./why-choose";
import OurProcess from "./our-process";
import WhatsIncluded from "./whats-included";
import ClientsSection from "../home/ClientsSection";
import ContactForm from "../home/contact-form";
import CallBackFromUs from "./call-back-from-us";
import Benefits from "./benefits";
import SeoReadyWebsite from "./seo-ready-website";
import PrivacyAccessibilityTrust from "./privacy-accessibility-trust";
import WhatToExpect from "./what-to-expect";
import ServicesWeOfferCanada from "./services-we-offer-canada";
import WebDesignSolutions from "./web-design-solutions";
import WhyChooseHtsol from "./why-choose-htsol";

const WebDevMain = () => {
  return (
    <>
      <Banner />
      <NeedsBuisness />
      <WhyChoose />
      <WebDesignSolutions />
      <Benefits />
      <SeoReadyWebsite />
      <PrivacyAccessibilityTrust />
      <WhatToExpect />
      <ServicesWeOfferCanada />
      <WhyChooseHtsol />
      {/* <OurProcess />            */}
      <CallBackFromUs />
      {/* <WhatsIncluded /> */}
      <ClientsSection />
      <ContactForm />
    </>
  );
};

export default WebDevMain;
