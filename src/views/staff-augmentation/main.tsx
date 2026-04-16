import { STAFF_AUGMENTATION_WHY_CHOOSE, STAFF_AUGMENTATION_WHY_CHOOSE_Accordion } from "@/constants";
import CapacitySection from "./capacity-section";
import ExecutionSection from "./execution-section";
import Hero from "./hero";
import ProtectionSection from "./protection-section";
import ServicesSection from "./services-section";
import WorkflowSection from "./workflow-section";
import WhyChooseHtsol from "../web-dev/why-choose-htsol";
import WhyBusinessChoose from "../digital-marketing/why-business-choose";

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
    </>
  );
};

export default WhiteLabelMain;
