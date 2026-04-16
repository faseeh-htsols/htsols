import { DIGITAL_MARKETING_FAQS, STAFF_AUGMENTATION_WHY_CHOOSE, STAFF_AUGMENTATION_WHY_CHOOSE_Accordion } from "@/constants";
import CapacitySection from "./capacity-section";
import ExecutionSection from "./execution-section";
import Hero from "./hero";
import ProtectionSection from "./protection-section";
import ServicesSection from "./services-section";
import WorkflowSection from "./workflow-section";
import WhyChooseHtsol from "../web-dev/why-choose-htsol";
import WhyBusinessChoose from "../digital-marketing/why-business-choose";
import DigitalAgency from "./digital-agency";
import SmartWay from "./smart-way";
import ExpertSupport from "./expert-support";
import FAQSection from "../home/FAQSection";
import LogosMarquee from "../home/logos-marquee";

const WhiteLabelMain = () => {
  return (
    <>
      <Hero />
      <ExecutionSection />
      <CapacitySection />
      <ProtectionSection />
      <WorkflowSection />
      <ServicesSection />
      <WhyChooseHtsol data={STAFF_AUGMENTATION_WHY_CHOOSE} />
      <WhyBusinessChoose data={STAFF_AUGMENTATION_WHY_CHOOSE_Accordion} />
      <DigitalAgency />
      <SmartWay />
      <ExpertSupport />
      <FAQSection bgColor="black" faqs={DIGITAL_MARKETING_FAQS} heading={true} accordionbgtransparent curveLine={false} />
      <LogosMarquee />
    </>
  );
};

export default WhiteLabelMain;
