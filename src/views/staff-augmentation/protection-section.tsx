import ArrowLinkButton from "@/components/ui/arrow-link-button";
import Container from "@/components/ui/container";
import Wrapper from "@/components/ui/wrapper";

const WhiteLabelProtectionSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-black bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-28"
      style={{
        backgroundImage: "url('/services/protection-bg.png')",
      }}
    >

      <Container>
        <div className="relative z-10 ">
          <p className="font-primary text-[18px] font-semibold uppercase leading-[1.12] tracking-[-0.03em] text-white sm:text-[22px] lg:text-[23px]">
            HTSOL Talent Works for You — Under Your Direction, in Your Tools, on Your Schedule. They Are an Extension of Your Team, Not a Vendor You Manage at Arm's Length.
          </p>

          <div className="mt-8 h-[3px] w-24 bg-[#00A1A5]" />

          <p className="mt-8 font-primary text-[18px] font-semibold uppercase leading-[1.16] tracking-[-0.028em] text-[#FFFFFF99] sm:text-[22px] lg:text-[23px]">
            You Set the Priorities. You Run the Standups. You Own the Output. We Provide the Person — Screened, Skilled, and Ready to Contribute from Week One.
          </p>

          <div className="mt-12 flex flex-col gap-4 md:flex-row">
            <ArrowLinkButton
              href="#white-label-form"
              variant="teal"
              className="h-[70px] w-full px-7 text-[15px] tracking-[0.04em] sm:text-[16px] md:w-fit lg:text-[18px]"
            >
              tell us what you need
            </ArrowLinkButton>
            <ArrowLinkButton
              href="#white-label-services"
              variant="outline"
              className="h-[70px] w-full px-7 text-[15px] tracking-[0.04em] sm:text-[16px] md:w-fit lg:text-[16px]"
            >
              talk to a talent specialist
            </ArrowLinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhiteLabelProtectionSection;
