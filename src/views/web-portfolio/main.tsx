import Banner from "./banner";
import TabsPort from "./tabs-port";
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
      <TabsPort />
      <Contact pageName="Web Portfolio Page" />
      <LogosMarquee />
    </>
  );
};

export default WebPortfolioMain;
