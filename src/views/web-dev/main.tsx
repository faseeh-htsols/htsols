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
import WhatToExpect from "./what-to-expect";
import ServicesWeOfferCanada from "./services-we-offer-canada";
import WebDesignSolutions from "./web-design-solutions";

const WebDevMain = () => {
  return (
    <>
      <Banner />
      <NeedsBuisness />
      <WhyChoose />
      <WebDesignSolutions />
      <Benefits />
      <SeoReadyWebsite />
      <WhatToExpect />
      <ServicesWeOfferCanada />
      {/* <OurProcess />            */}
      <CallBackFromUs />
      {/* <WhatsIncluded /> */}
      <ClientsSection />
      <ContactForm />
    </>
  );
};

export default WebDevMain;
