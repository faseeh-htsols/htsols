import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkPortfolioSection from "@/components/sections/WorkPortfolioSection";
import WorkProcessSection from "@/components/sections/WorkProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ClientsSection from "@/components/sections/ClientsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkPortfolioSection />
        <WorkProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ClientsSection />
      </main>
      <Footer />
    </>
  );
}
