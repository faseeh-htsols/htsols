import CTA from "@/components/ui/cta";
import LogosMarquee from "../home/logos-marquee";
import Banner from "./banner";
import HowWorks from "../mississauga/how-works";
import {
  CTO_SKILLS,
  CTO_ABOUT_ME,
  CTO_ACHIEVEMENTS,
  CTO_CONVERSATION,
  CTO_FAQS,
  CTO_SERVICES,
  WHY_HIRE_ME_CTO,
  INDUSTRIES_I_SERVE_CTO,
  CLIENT_SAY_ABOUT_CTO,
  CEO_CTA,
  CTO_CTA,
} from "@/constants";
import FAQSection from "../home/FAQSection";
import { fetchCmsBlogs, getBlogDate, safeTime } from "@/lib/cms/blog";
import BlogCurate from "../ceo/blog-curate";
import Skills from "../ceo/skills";
import AboutMe from "../ceo/about-me";
import Achievements from "../ceo/achievements";
import WhatIDo from "../ceo/what-i-do";
import WhyHireMe from "../ceo/why-hire-me";
import IndustriesServe from "../ceo/industries-serve";
import ClientsAboutMe from "../ceo/clients-about-me";
import WhatACall from "../ceo/what-a-call";

const CtoMain = async () => {
  const posts = (await fetchCmsBlogs()) ?? [];
  const sorted = [...posts].sort(
    (a, b) => safeTime(getBlogDate(b)) - safeTime(getBlogDate(a)),
  );
  return (
    <>
      <Banner />
      <Skills data={CTO_SKILLS} />
      <AboutMe data={CTO_ABOUT_ME} />
      <Achievements data={CTO_ACHIEVEMENTS} />
      <WhatIDo data={CTO_SERVICES} />
      <HowWorks data={CTO_CONVERSATION} />
      <WhyHireMe data={WHY_HIRE_ME_CTO} />
      <IndustriesServe data={INDUSTRIES_I_SERVE_CTO} />
      <ClientsAboutMe data={CLIENT_SAY_ABOUT_CTO} />
      {/* <BlogCurate /> */}
      {/* <ViewOnInstgram /> */}
      {/* <CTA /> */}
      <WhatACall data={CTO_CTA} />
      <BlogCurate posts={sorted} />
      <FAQSection faqs={CTO_FAQS} heading={true} accordionbgtransparent />
      <LogosMarquee />
    </>
  );
};

export default CtoMain;
