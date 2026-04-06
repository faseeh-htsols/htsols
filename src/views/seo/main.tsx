import React from "react";
import Banner from "./banner";
import ShowingUp from "./showing-up";
import ClearStrategy from "./clear-strategy";
import ToolsAndReporting from "./tools-and-reporting";
import Services from "./services";
import SeoWorks from "./seo-works";
import SeoMethodology from "./seo-methodology";
import ReadyToGrow from "./ready-to-grow";
import FAQSection from "../home/FAQSection";
import { SEO_FAQS } from "@/constants";
import ClientsSection from "../home/ClientsSection";
import LogosMarquee from "../home/logos-marquee";
import ContactForm from "./contact-form";
const SeoMain = () => {
  return (
    <>
      <Banner />
      <ShowingUp />
      <ClearStrategy />
      <ToolsAndReporting />
      <Services />
      <SeoWorks />
      <SeoMethodology />
      <ReadyToGrow />
      <FAQSection bgColor="#0F0F0F" faqs={SEO_FAQS} heading={true} accordionbgtransparent />
      {/* <ClientsSection /> */}
      <div id="contact-form">
        <ContactForm />
      </div>
      <LogosMarquee />
    </>
  );
};

export default SeoMain;
