import React from "react";
import Banner from "./banner";
import WhyOnlinePresenceMatters from "./why-online-precense";
import OurSpecializedServices from "./over-specialized-services";
import WhyChooseAgency from "./why-choose-agency";
import CaseStudiesPrevious from "./case-studies-previous";
import OurClients from "./our-clients";
import LetsHaveAChat from "./lets-have-a-chat";
import FAQSection from "./faq-section";

const DentalMain = () => {
  return (
    <>
      <Banner />
      <WhyOnlinePresenceMatters />
      <OurSpecializedServices />
      <WhyChooseAgency />
      <CaseStudiesPrevious />
      <OurClients />
      <FAQSection />
      <LetsHaveAChat />
    </>
  );
};

export default DentalMain;
