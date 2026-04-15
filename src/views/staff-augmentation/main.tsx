import CapacitySection from "./capacity-section";
import ExecutionSection from "./execution-section";
import Hero from "./hero";
import ProtectionSection from "./protection-section";
import ServicesSection from "./services-section";
import WorkflowSection from "./workflow-section";

const WhiteLabelMain = () => {
  return (
    <>
      <Hero />
      <ExecutionSection />
      <CapacitySection />
      <ProtectionSection />
      <WorkflowSection />
      <ServicesSection />
    </>
  );
};

export default WhiteLabelMain;
