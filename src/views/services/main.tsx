import React from "react";
import Banner from "./banner";
import Logos from "./logos";
import WhatWeOffer from "./what-we-offer";
import Approach from "./approach";
import ProjectToDiscuss from "./project-to-discuss";
import ClientsSection from "./our-clients";

import FAQSection from "../home/FAQSection";
import LogosMarquee from "../home/logos-marquee";
import { SERVICES_FAQS } from "@/constants";
import DrivingBuisness from "./driving-business";
import WhyChoose from "./why-choose";

const ServicesMain = () => {
  return (
    <>
      <Banner />
      <DrivingBuisness />
      {/* <Logos /> */}
      <WhatWeOffer />
      <WhyChoose />
      <Approach />
      <FAQSection bgColor="black" faqs={SERVICES_FAQS} heading={true} />
      <LogosMarquee />
      {/* <ProjectToDiscuss /> */}
      {/* <ClientsSection /> */}
    </>
  );
};

export default ServicesMain;
