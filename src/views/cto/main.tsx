import CTA from "@/components/ui/cta";
import LogosMarquee from "../home/logos-marquee";
import AboutMe from "./about-me";
import Achievements from "./achievements";
import Banner from "./banner";
import BlogCurate from "./blog-curate";
import ClientsAboutMe from "./clients-about-me";
import IndustriesServe from "./industries-serve";
import Skills from "./skills";
import ViewOnInstgram from "./view-on-instgram";
import WhyHireMe from "./why-hire-me";
import Services from "./services";
import HowWorks from "../mississauga/how-works";
import { CEO_FAQS, CTO_CONVERSATION } from "@/constants";

const CtoMain = () => {
  return (
    <>
      <Banner />
      <Skills />
      <AboutMe />
      <Achievements />
      <Services />
      <HowWorks data={CTO_CONVERSATION} />
      <WhyHireMe />
      <IndustriesServe />
      <ClientsAboutMe />
      {/* <BlogCurate /> */}
      {/* <ViewOnInstgram /> */}
      <CTA />
      <LogosMarquee />
    </>
  );
};

export default CtoMain;
