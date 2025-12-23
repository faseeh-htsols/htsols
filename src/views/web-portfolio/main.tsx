import Banner from "./banner";
import PortfolioSection from "./portfolio-section";
import ShowcaseSection from "./showcase-section";
import TestimonialsIntro from "./testimonials-intro";
import ProcessSection from "./process-section";
import Contact from "./contact";
import LogosMarquee from "../home/logos-marquee";

const WebPortfolioMain = () => {
  return (
    <>
      <Banner />
      <PortfolioSection />
      <ShowcaseSection />
      <TestimonialsIntro />
      <ProcessSection />
      <Contact />
      <LogosMarquee />
    </>
  );
};

export default WebPortfolioMain;
