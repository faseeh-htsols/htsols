import { DIGITAL_TRANSFORMATION_GROWTH, STAFF_AUGMENTATION_FAQS, DIGITAL_TRANSFORMATION_PROTECTION, DIGITAL_TRANSFORMATION_EVERYTHING, STAFF_AUGMENTATION_WHY_CHOOSE_Accordion, STAFF_AUGMENTATION_SERVICES } from "@/constants";
import ExecutionSection from "./execution-section";
import Hero from "./hero";
import WhyChooseHtsol from "../web-dev/why-choose-htsol";
import WhyBusinessChoose from "../digital-marketing/why-business-choose";
import DigitalAgency from "./digital-agency";
import SmartWay from "./smart-way";
import ExpertSupport from "./expert-support";
import FAQSection from "../home/FAQSection";
import LogosMarquee from "../home/logos-marquee";
import CapacitySection from "../staff-augmentation/capacity-section";
import WhiteLabelProtectionSection from "../staff-augmentation/protection-section";
import ServicesSection from "../staff-augmentation/services-section";

const WhiteLabelMain = () => {
  return (
    <>
      <Hero />
      <ExecutionSection />
      <CapacitySection data={DIGITAL_TRANSFORMATION_GROWTH} />
      <WhiteLabelProtectionSection data={DIGITAL_TRANSFORMATION_PROTECTION} />
      <WhyChooseHtsol data={DIGITAL_TRANSFORMATION_EVERYTHING} />
      <ServicesSection data={STAFF_AUGMENTATION_SERVICES} />
      {/* <WhyBusinessChoose data={STAFF_AUGMENTATION_WHY_CHOOSE_Accordion} />
      <DigitalAgency />
      <SmartWay />
      <ExpertSupport />
      <FAQSection bgColor="black" faqs={STAFF_AUGMENTATION_FAQS} heading={true} accordionbgtransparent curveLine={false} /> */}
      <LogosMarquee />
    </>
  );
};

export default WhiteLabelMain;
