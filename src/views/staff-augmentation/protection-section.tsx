import ArrowLinkButton from "@/components/ui/arrow-link-button";
import Container from "@/components/ui/container";
import Wrapper from "@/components/ui/wrapper";

interface ProtectionData {
  bgImg: string;
  text1: string;
  text2: string;
  btnText1: string;
  btnLink1: string;
  btnText2: string;
  btnLink2: string;
};

interface ProtectionProps {
  data: ProtectionData;
};

const WhiteLabelProtectionSection = ({ data }: ProtectionProps) => {
  return (
    <section
      className="relative overflow-hidden bg-black bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-28"
      style={{
        backgroundImage: `url(${data.bgImg})`,
      }}
    >

      <Container>
        <div className="relative z-10 ">
          <p className="font-primary text-[18px] font-semibold uppercase leading-[1.12] tracking-[-0.03em] text-white sm:text-[22px] lg:text-[23px]">
            {data.text1}
          </p>

          <div className="mt-8 h-[3px] w-24 bg-[#00A1A5]" />

          <p className="mt-8 font-primary text-[18px] font-semibold uppercase leading-[1.16] tracking-[-0.028em] text-[#FFFFFF99] sm:text-[22px] lg:text-[23px]">
            {data.text2}
          </p>

          <div className="mt-12 flex flex-col gap-4 md:flex-row">
            <ArrowLinkButton
              href={data.btnLink1}
              variant="teal"
              className="h-[70px] w-full px-7 text-[15px] tracking-[0.04em] sm:text-[16px] md:w-fit lg:text-[18px]"
            >
              {data.btnText1}
            </ArrowLinkButton>
            <ArrowLinkButton
              href={data.btnLink2}
              variant="outline"
              className="h-[70px] w-full px-7 text-[15px] tracking-[0.04em] sm:text-[16px] md:w-fit lg:text-[16px]"
            >
              {data.btnText2}
            </ArrowLinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhiteLabelProtectionSection;
