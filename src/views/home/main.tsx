import AboutSection from "./AboutSection";
import ClientsSection from "./ClientsSection";
import ContactForm from "./contact-form";
import EverythingDigitalWorking from "./everything-digital-working";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import LogosMarquee from "./logos-marquee";
import PlanNextStep from "./plan-next-step";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import WorkPortfolioSection from "./WorkPortfolioSection";
import WorkProcessSection from "./WorkProcessSection";
import YourCompleteTeam from "./your-complete-team";

const Main = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <YourCompleteTeam />
      <WorkPortfolioSection />
      <EverythingDigitalWorking />
      <WorkProcessSection />
      <TestimonialsSection />
      <PlanNextStep />
      <ClientsSection />
      <FAQSection />
      <ContactForm />
      <LogosMarquee />
    </>
  );
};

export default Main;
