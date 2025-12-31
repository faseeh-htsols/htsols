import AboutMe from "./about-me";
import Achievements from "./achievements";
import BlogCurate from "./blog-curate";
import ClientsAboutMe from "./clients-about-me";
import IndustriesServe from "./industries-serve";
import Skills from "./skills";
import ViewOnInstgram from "./view-on-instgram";
import WhyHireMe from "./why-hire-me";

const CeoMain = () => {
  return (
    <>
      <Skills />
      <AboutMe />
      <Achievements />
      <WhyHireMe />
      <IndustriesServe />
      <ClientsAboutMe />
      <BlogCurate />
      <ViewOnInstgram />
    </>
  );
};

export default CeoMain;
