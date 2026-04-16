import React from "react";
import Banner from "./banner";
import StrategyFirst from "./strategy-first";
import HowDigitalMarketingHelps from "./how-digital-marketing-helps";
import OurServices from "./our-services";
import WhyBusinessChoose from "./why-business-choose";
import StartGrowing from "./start-growing";
import FAQSection from "../home/FAQSection";
import { DIGITAL_MARKETING_FAQS, DIGITAL_MARKETING_WHY_CHOOSE } from "@/constants";
import LogosMarquee from "../home/logos-marquee";

function DigitalMarketingMain() {
  return (
    <>
      <Banner />
      <StrategyFirst />
      <HowDigitalMarketingHelps />
      <OurServices />
      <WhyBusinessChoose data={DIGITAL_MARKETING_WHY_CHOOSE} />
      <StartGrowing />
      <FAQSection bgColor="black" faqs={DIGITAL_MARKETING_FAQS} heading={true} accordionbgtransparent curveLine={false} />
      <LogosMarquee />
    </>
  );
}

export default DigitalMarketingMain