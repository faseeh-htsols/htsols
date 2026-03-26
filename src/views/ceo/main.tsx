import LogosMarquee from "../home/logos-marquee";
import AboutMe from "./about-me";
import Achievements from "./achievements";
import Banner from "./banner";
import BlogCurate from "./blog-curate";
import ClientsAboutMe from "./clients-about-me";
import IndustriesServe from "./industries-serve";
// import LinkedInPosts from "./linkedin-posts";
import Skills from "./skills";
import ViewOnInstgram from "./view-on-instgram";
import WhatACall from "./what-a-call";
import WhyHireMe from "./why-hire-me";

const CeoMain = () => {
  return (
    <>
      <Banner />
      <Skills />
      <AboutMe />
      <Achievements />
      <WhyHireMe />
      <IndustriesServe />
      <ClientsAboutMe />
      <WhatACall />
      <BlogCurate />
      {/* <LinkedInPosts /> */}
      <ViewOnInstgram />
      <LogosMarquee />
    </>
  );
};

export default CeoMain;
