import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import Image from "next/image";

const DigitalTransformationHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#04070A] pb-16 pt-32 lg:min-h-screen lg:pb-24 lg:pt-40">
      <Image
        src="/digital-transformation/banner-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] bg-black/45" />

      <div className="absolute left-0 top-20 z-[2]">
        <Image
          src="/left-gradient.webp"
          width={500}
          height={500}
          className="h-[350px] w-[350px]"
          alt="left gradient"
        />
      </div>
      <div className="absolute right-0 top-20 z-[2]">
        <Image
          src="/right-gradient.webp"
          width={500}
          height={500}
          className="h-[350px] w-[350px]"
          alt="right gradient"
        />
      </div>

      <Container>
        <div className="relative z-10">
        <div className="relative overflow-hidden">
          <div className="max-w-[1080px]">

            <div className="mb-6 md:mb-8 inline-flex h-12 not-odd:w-fit items-center gap-2.5 rounded-full border border-[#00A1A5] px-3 py-2.5 sm:h-[53px] sm:px-3.5 [&>span:first-child]:hidden">
              <span className="mr-3 text-[#00A1A5]">•</span>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#00A1A5]" />
              <span className="inline-flex h-[33px] min-w-0 flex-1 items-center whitespace-nowrap font-sans text-[11px] font-light leading-none tracking-[0.02em] text-white sm:text-[16px] lg:text-[18px]">
                Digital Transformation Consulting for Service Businesses
              </span>
            </div>

            <h1 className="font-primary text-[34px] font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl sm:tracking-[-0.045em] lg:text-[56px] xl:text-[64px]">Your Business Deserves
              {" "}
              <span className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">
                More Than
              </span>{" "}
              Referrals and Luck
            </h1>

            <p className="mt-6 leading-relaxed text-white md:mt-8">
              You are good at what you do. Your clients trust you. Your patients leave satisfied. Referrals come in. But when someone searches for your services online, they find someone else first.
              <br /><br />
              That does not happen because your business is less capable. It happens because your digital presence was never built properly. No strong brand. No high-performing website. No search visibility. No connected systems. Just a listing, a few scattered tools, and hope.
              <br /><br />
              That is where HTSOL comes in. Our digital transformation consulting helps service businesses build the right foundation from the ground up. We combine digital transformation services, branding, website strategy, SEO, marketing, business process automation, and system improvements into one clear path. The result is a business that looks more credible, gets found more often, and turns more visitors into real enquiries month after month.
            </p>

            <div className="mt-6 md:mt-8 flex justify-center sm:mt-10 sm:justify-start">
              <Button variant="white" href="/contact-us">
                Book a free consultation
              </Button>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
};

export default DigitalTransformationHero;
