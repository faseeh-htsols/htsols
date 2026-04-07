import FAQSection from "../home/FAQSection";
import LogosMarquee from "../home/logos-marquee";
import AboutMe from "./about-me";
import Achievements from "./achievements";
import Banner from "./banner";
import BlogCurate from "./blog-curate";
import ClientsAboutMe from "./clients-about-me";
import IndustriesServe from "./industries-serve";
import LinkedInPosts from "./linkedin-posts";
import Skills from "./skills";
import ViewOnInstgram from "./view-on-instgram";
import WhatACall from "./what-a-call";
import WhyHireMe from "./why-hire-me";
import WhatIDo from "./what-i-do";
import HowWorks from "../mississauga/how-works";
import { CEO_FAQS, CEO_CONVERSATION } from "@/constants";
import Experties from "./experties";
import LinkedIn from "./linkedin";
import { fetchCmsBlogs, getBlogDate, safeTime } from "@/lib/cms/blog";

const CeoMain = async () => {
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
      <WhyHireMe />
      <WhatIDo />
      <HowWorks data={CEO_CONVERSATION} />
      <IndustriesServe />
      <ClientsAboutMe />
      <WhatACall />
      <BlogCurate posts={sorted} />
      {/* <LinkedInPosts /> */}
      {/* <ViewOnInstgram /> */}
      <LinkedIn />
      {/* <FAQSection faqs={CEO_FAQS} /> */}
      <LogosMarquee />
    </>
  );
};

export default CeoMain;
