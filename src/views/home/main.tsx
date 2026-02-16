import AboutSection from "./AboutSection";
import ClientsSection from "./ClientsSection";
import ContactForm from "./contact-form";
import EngagementPricing from "./engagement-pricing";
import EverythingDigitalWorking from "./everything-digital-working";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import LogosMarquee from "./logos-marquee";
import PlanNextStep from "./plan-next-step";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import WhatHappensAfterLaunch from "./what-happens-after-launch";
import WhoWeHelp from "./who-we-help";
import WhyBuisnessChoose from "./why-buisness-choose";
import WorkPortfolioSection from "./WorkPortfolioSection";
import WorkPortfolioSectionTwo from "./WorkPortfolioSectionTwo";
import WorkProcessSection from "./WorkProcessSection";
import YourCompleteTeam from "./your-complete-team";

const Main = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <YourCompleteTeam />
      <WorkPortfolioSectionTwo />
      <EverythingDigitalWorking />
      <WhoWeHelp />
      <WorkProcessSection />
      <TestimonialsSection />
      <WhatHappensAfterLaunch />
      <EngagementPricing />
      <WhyBuisnessChoose />
      <PlanNextStep />
      <ContactForm />
      <FAQSection />
      <ClientsSection />
      <LogosMarquee />
    </>
  );
};

export default Main;
