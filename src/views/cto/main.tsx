import CTA from "@/components/ui/cta";
import LogosMarquee from "../home/logos-marquee";
import AboutMe from "./about-me";
import Achievements from "./achievements";
import Banner from "./banner";
import ClientsAboutMe from "./clients-about-me";
import IndustriesServe from "./industries-serve";
import Skills from "./skills";
import ViewOnInstgram from "./view-on-instgram";
import WhyHireMe from "./why-hire-me";
import Services from "./services";
import HowWorks from "../mississauga/how-works";
import { CTO_FAQS, CTO_CONVERSATION } from "@/constants";
import FAQSection from "../home/FAQSection";
import { fetchCmsBlogs, getBlogDate, safeTime } from "@/lib/cms/blog";
import BlogCurate from "../ceo/blog-curate";

const CtoMain = async () => {
  const posts = (await fetchCmsBlogs()) ?? [];
  const sorted = [...posts].sort(
    (a, b) => safeTime(getBlogDate(b)) - safeTime(getBlogDate(a)),
  );
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
      <BlogCurate posts={sorted} />
      <FAQSection faqs={CTO_FAQS} />
      <LogosMarquee />
    </>
  );
};

export default CtoMain;
