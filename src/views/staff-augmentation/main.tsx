import { STAFF_AUGMENTATION_FAQS, STAFF_AUGMENTATION_GROWTH, STAFF_AUGMENTATION_PROTECTION, STAFF_AUGMENTATION_SERVICES, STAFF_AUGMENTATION_WHY_CHOOSE, STAFF_AUGMENTATION_WHY_CHOOSE_Accordion, } from "@/constants";
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
      <CapacitySection data={STAFF_AUGMENTATION_GROWTH} />
      <ProtectionSection data={STAFF_AUGMENTATION_PROTECTION} />
      <WorkflowSection />
      <ServicesSection data={STAFF_AUGMENTATION_SERVICES} />
      <WhyChooseHtsol data={STAFF_AUGMENTATION_WHY_CHOOSE} />
      <WhyBusinessChoose data={STAFF_AUGMENTATION_WHY_CHOOSE_Accordion} />
      <DigitalAgency />
      <SmartWay />
      <ExpertSupport />
      <FAQSection bgColor="black" faqs={STAFF_AUGMENTATION_FAQS} heading={true} accordionbgtransparent curveLine={false} />
      <LogosMarquee />
    </>
  );
};

export default WhiteLabelMain;
