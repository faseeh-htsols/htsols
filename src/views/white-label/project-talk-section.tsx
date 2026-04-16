import ArrowLinkButton from "@/components/ui/arrow-link-button";
import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";

const ProjectTalkSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-black bg-cover bg-center bg-no-repeat py-24 sm:py-28 lg:py-32"
      style={{
        backgroundImage: "url('/services/protection-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[42%] bg-[radial-gradient(circle_at_28%_45%,rgba(0,131,138,0.16)_0%,rgba(0,131,138,0.08)_22%,rgba(0,0,0,0)_72%)]" />

      <Wrapper>
        <div className="relative z-10 mx-auto max-w-[1380px]">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,580px)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
            <div className="mx-auto w-full max-w-[580px]">
              <Image
                src="/services/project(1).png"
                alt="White label project execution preview"
                width={1160}
                height={1226}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </div>

            <div className="mx-auto w-full max-w-[840px] text-center lg:mx-0 lg:text-left">
              <h2 className="font-primary text-[31px] font-semibold uppercase leading-[1.04] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[35px] lg:leading-[0.96]">
                <span className="block">Have A Project That Needs</span>
                <span className="block">Execution? Let&apos;s Talk.</span>
              </h2>

              <p className="mt-8 text-[17px] leading-[1.65] text-white/84 sm:text-[18px]">
                Whether you have a client project ready to brief right now, or
                you want to explore what a white label partnership with HTSOL
                could look like for your agency - the first conversation is
                free, no-commitment, and confidential. We sign an NDA before we
                discuss anything sensitive.
              </p>

              <div className="mt-10 flex justify-center lg:justify-start">
                <ArrowLinkButton
                  href="#white-label-form"
                  variant="teal"
                  className="min-h-[70px] min-w-[270px] px-8 text-[13px] tracking-[0.08em] sm:min-w-[320px] sm:px-10 sm:text-[19px]"
                >
                  Book A Discovery Call
                </ArrowLinkButton>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ProjectTalkSection;
