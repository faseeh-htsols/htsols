import AboutSection from "./AboutSection";
import ClientsSection from "./ClientsSection";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import WorkPortfolioSection from "./WorkPortfolioSection";
import WorkProcessSection from "./WorkProcessSection";

const Main = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkPortfolioSection />
      <WorkProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ClientsSection />
    </>
  );
};

export default Main;
