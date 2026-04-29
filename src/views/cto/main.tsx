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
  CTO_CTA,
} from "@/constants";
import FAQSection from "../home/FAQSection";
import Skills from "../ceo/skills";
import AboutMe from "../ceo/about-me";
import Achievements from "../ceo/achievements";
import WhatIDo from "../ceo/what-i-do";
import WhyHireMe from "../ceo/why-hire-me";
import IndustriesServe from "../ceo/industries-serve";
import ClientsAboutMe from "../ceo/clients-about-me";
import WhatACall from "../ceo/what-a-call";

const CtoMain = () => {
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
      <WhatACall data={CTO_CTA} />
      <FAQSection faqs={CTO_FAQS} heading={true} accordionbgtransparent />
      <LogosMarquee />
    </>
  );
};

export default CtoMain;
