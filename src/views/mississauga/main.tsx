import Banner from "./banner";
import WebDesignAgency from "./web-design-agency";
import WebDesignServices from "./web-desing-services";
import YourWebsite from "./your-website";
import OurWork from "./our-work";
import BusinessesWeWork from "./businesses-we-work";
import BusinessesWork from "./businesses-work";
import HowWorks from "./how-works";
import WhatAWebsiteDeliver from "./what-a-website-deliver";
import WhyChooseHtsol from "./why-choose-htsol";
import FAQSection from "../home/FAQSection";
import Cta from "./cta";

import {
  MISSISSAUGA_BANNER,
  MISSISSAUGA_WEBSITE,
  MISSISSAUGA_AGENCY,
  MISSISSAUGA_OUR_WORK,
  MISSISSAUGA_SERVICES,
  MISSISSAUGA_BUSINESSES,
  MISSISSAUGA_WORK,
  MISSISSAUGA_Accordion,
  MISSISSAUGA_WHAT_DELIVER,
  MISSISSAUGA_WHY_CHOOSE,
  MISSISSAUGA_CTA,
  MISSISSAUGA_FAQS,
} from "@/constants";

const Main = () => {
  return (
    <>
      <Banner data={MISSISSAUGA_BANNER} />
      <YourWebsite data={MISSISSAUGA_WEBSITE} />
      <WebDesignAgency data={MISSISSAUGA_AGENCY} />
      <WebDesignServices data={MISSISSAUGA_SERVICES} />
      <OurWork data={MISSISSAUGA_OUR_WORK} />
      <BusinessesWeWork data={MISSISSAUGA_BUSINESSES} />
      <BusinessesWork data={MISSISSAUGA_WORK} />
      <HowWorks data={MISSISSAUGA_Accordion} />
      <WhatAWebsiteDeliver data={MISSISSAUGA_WHAT_DELIVER} />
      <WhyChooseHtsol data={MISSISSAUGA_WHY_CHOOSE} />
      <Cta data={MISSISSAUGA_CTA} />
      <FAQSection
        bgColor="#000000"
        faqs={MISSISSAUGA_FAQS}
        heading={true}
        accordionbgtransparent
        curveLine={false}
      />
    </>
  );
};

export default Main;
