import Banner from "./banner";
import BrandShowcase from "./brand-showcase";
import CapacitySection from "../staff-augmentation/capacity-section";
import WhiteLabelProtectionSection from "../staff-augmentation/protection-section";
import WhyChooseHtsol from "../web-dev/why-choose-htsol";
import ServicesSection from "../staff-augmentation/services-section";
import WebDesignAgency from "../mississauga/web-design-agency";
import WhyBusinessChoose from "../digital-marketing/why-business-choose";
import SmartWay from "../staff-augmentation/smart-way";
import ReadyBrand from "./ready-brand";
import FAQSection from "../home/FAQSection";
import LogosMarquee from "../home/logos-marquee";
import {
  BRANDING_FAQS,
  BRANDING_GROWTH,
  BRANDING_PROTECTION,
  BRANDING_EVERYTHING,
  BRANDING_WHAT,
  BRANDING_WHY,
  BRANDING_PROCESS,
  BRANDING_SYSTEM,
  BRANDING_CTA,
} from "@/constants";

const BrandingMain = () => {
  return (
    <>
      <Banner />
      <BrandShowcase />
      <CapacitySection data={BRANDING_GROWTH} />
      <WhiteLabelProtectionSection data={BRANDING_PROTECTION} />
      <WhyChooseHtsol data={BRANDING_EVERYTHING} />
      <ServicesSection data={BRANDING_WHAT} />
      <WebDesignAgency data={BRANDING_WHY} />
      <WhyBusinessChoose data={BRANDING_PROCESS} />
      <SmartWay data={BRANDING_SYSTEM} />
      <ReadyBrand data={BRANDING_CTA} />
      <FAQSection
        bgColor="black"
        faqs={BRANDING_FAQS}
        heading={true}
        accordionbgtransparent
        curveLine={false}
        className="py-20! lg:py-20!"
      />
      <LogosMarquee />
    </>
  );
};

export default BrandingMain;
