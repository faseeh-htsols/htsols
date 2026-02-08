import React from "react";
import Banner from "./banner";
import WhyOnlinePresenceMatters from "./why-online-precense";
import OurSpecializedServices from "./over-specialized-services";
import WhyChooseAgency from "./why-choose-agency";
import CaseStudiesPrevious from "./case-studies-previous";
import OurClients from "./our-clients";
import LetsHaveAChat from "./lets-have-a-chat";
import FAQSection from "./faq-section";
import ContactDetails from "./contact-details";
import ClientsSay from "./clients-say";

const DentalMain = () => {
  return (
    <>
      <Banner />
      <WhyOnlinePresenceMatters />
      <OurSpecializedServices />
      <WhyChooseAgency />
      <ClientsSay />
      <FAQSection />
      <CaseStudiesPrevious />
      <LetsHaveAChat />
      <OurClients />
      <ContactDetails />
    </>
  );
};

export default DentalMain;
