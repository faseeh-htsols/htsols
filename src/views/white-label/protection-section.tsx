import ArrowLinkButton from "@/components/ui/arrow-link-button";
import Wrapper from "@/components/ui/wrapper";

const WhiteLabelProtectionSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-black bg-cover bg-center bg-no-repeat py-20 sm:py-24 lg:py-28"
      style={{
        backgroundImage: "url('/services/protection-bg.webp')",
      }}
    >

      <Wrapper>
        <div className="relative z-10 mx-auto max-w-[1280px]">
          <p className="font-primary text-[20px] font-semibold uppercase leading-[1.12] tracking-[-0.03em] text-white sm:text-[24px] lg:text-[23px]">
            We never communicate with your clients unless you explicitly
            authorise it. We never put our name on work we produce for you. We
            never compete for your accounts.
          </p>

          <div className="mt-8 h-[3px] w-[96px] bg-[#00A1A5]" />

          <p className="mt-8 max-w-[1280px] font-primary text-[18px] font-semibold uppercase leading-[1.16] tracking-[-0.028em] text-white/72 sm:text-[22px] lg:text-[23px]">
            Every engagement is protected by a signed NDA before work begins.
            Your client relationships are yours. Your reputation is ours to
            protect.
          </p>

          <div className="mt-12 flex flex-col gap-4 lg:flex-row">
            <ArrowLinkButton
              href="#white-label-form"
              variant="teal"
              className="h-[70px] w-full px-7 text-[15px] tracking-[0.04em] sm:text-[16px] lg:w-[455px] lg:text-[18px]"
            >
              Start A Partner Conversation
            </ArrowLinkButton>
            <ArrowLinkButton
              href="#white-label-services"
              variant="outline"
              className="h-[70px] w-full px-7 text-[15px] tracking-[0.04em] sm:text-[16px] lg:w-[465px] lg:text-[16px]"
            >
              Discuss Your Current Capacity Needs
            </ArrowLinkButton>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default WhiteLabelProtectionSection;
