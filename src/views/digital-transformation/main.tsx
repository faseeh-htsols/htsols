import ExecutionSection from "./execution-section";
import Hero from "./hero";
import WhyChooseHtsol from "../web-dev/why-choose-htsol";
import WhyBusinessChoose from "../digital-marketing/why-business-choose";
import FAQSection from "../home/FAQSection";
import LogosMarquee from "../home/logos-marquee";
import CapacitySection from "../staff-augmentation/capacity-section";
import WhiteLabelProtectionSection from "../staff-augmentation/protection-section";
import ServicesSection from "../staff-augmentation/services-section";
import WebDesignAgency from "../mississauga/web-design-agency";
import {
  DIGITAL_TRANSFORMATION_GROWTH,
  DIGITAL_TRANSFORMATION_PROTECTION,
  DIGITAL_TRANSFORMATION_EVERYTHING,
  DIGITAL_TRANSFORMATION_WHAT,
  DIGITAL_TRANSFORMATION_WHY,
  DIGITAL_TRANSFORMATION_Accordion,
  DIGITAL_TRANSFORMATION_DIGITAL_PRESENCE,
  DIGITAL_TRANSFORMATION_DIGITAL_SHIFT,
  DIGITAL_TRANSFORMATION_READY,
  DIGITAL_TRANSFORMATION_FAQS,
} from "@/constants";
import SmartWay from "../staff-augmentation/smart-way";
import DigitalAgency from "../staff-augmentation/digital-agency";
import ExpertSupport from "../staff-augmentation/expert-support";

const WhiteLabelMain = () => {
  return (
    <>
      <Hero />
      <ExecutionSection />
      <CapacitySection data={DIGITAL_TRANSFORMATION_GROWTH} />
      <WhiteLabelProtectionSection data={DIGITAL_TRANSFORMATION_PROTECTION} />
      <WhyChooseHtsol data={DIGITAL_TRANSFORMATION_EVERYTHING} />
      <ServicesSection data={DIGITAL_TRANSFORMATION_WHAT} />
      <WebDesignAgency data={DIGITAL_TRANSFORMATION_WHY} />
      <WhyBusinessChoose data={DIGITAL_TRANSFORMATION_Accordion} />
      <SmartWay data={DIGITAL_TRANSFORMATION_DIGITAL_PRESENCE} />
      <DigitalAgency data={DIGITAL_TRANSFORMATION_DIGITAL_SHIFT} />
      <ExpertSupport data={DIGITAL_TRANSFORMATION_READY} />
      <FAQSection bgColor="black" faqs={DIGITAL_TRANSFORMATION_FAQS} heading={true} accordionbgtransparent curveLine={false} className="py-20! lg:py-20!" />
      <LogosMarquee />
    </>
  );
};

export default WhiteLabelMain;
