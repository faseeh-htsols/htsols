import LogosMarquee from "../home/logos-marquee";
import AgencyGrowthSection from "./agency-growth-section";
import CapacitySection from "./capacity-section";
import ExecutionSection from "./execution-section";
import FAQSection from "./faq-section";
import Hero from "./hero";
import PartnerSection from "./partner-section";
import PartnershipProcessSection from "./partnership-process-section";
import PortfolioExamplesSection from "./portfolio-examples-section";
import ProjectTalkSection from "./project-talk-section";
import ProtectionSection from "./protection-section";
import ServicesSection from "./services-section";
import TestimonialSection from "./testimonial-section";
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
      <PartnerSection />
      <PartnershipProcessSection />
      <TestimonialSection />
      <PortfolioExamplesSection />
      <AgencyGrowthSection />
      <ProjectTalkSection />
      <FAQSection />
      <LogosMarquee />
    </>
  );
};

export default WhiteLabelMain;
