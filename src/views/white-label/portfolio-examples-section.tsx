import Button from "@/components/ui/Button";
import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";

const portfolioExamples = [
  {
    src: "/services/Home.png",
    alt: "White label website example one",
  },
  {
    src: "/services/Home (1).png",
    alt: "White label website example two",
  },
  {
    src: "/services/Home (2).png",
    alt: "White label website example three",
  },
  {
    src: "/services/Home.png",
    alt: "White label website example four",
  },
  {
    src: "/services/Home (1).png",
    alt: "White label website example five",
  },
  {
    src: "/services/Home (2).png",
    alt: "White label website example six",
  },
] as const;

const PortfolioExamplesSection = () => {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-[-1%] top-[2px] z-10 h-[8px] w-[102%] origin-left -rotate-[0.55deg] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] sm:h-[9px] lg:h-[10px]"
        aria-hidden
      />

      <section className="overflow-hidden bg-black py-24 sm:py-28 lg:py-32">
        <Wrapper>
          <div className="mx-auto max-w-[960px] text-center">
            <h2 className="font-primary text-[32px] font-semibold uppercase leading-[1.02] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[44px]">
              <span className="block">Our Work - White Label Website</span>
              <span className="block">Design Examples</span>
            </h2>
          </div>
        </Wrapper>

        <div
          className="relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-hidden [--portfolio-card-height:620px] [--portfolio-card-width:260px] [--portfolio-duration:34s] [--portfolio-gap:24px] [--portfolio-offset:70px] [--portfolio-sequence-width:1704px] sm:mt-14 sm:[--portfolio-card-height:700px] sm:[--portfolio-card-width:300px] sm:[--portfolio-duration:36s] sm:[--portfolio-gap:32px] sm:[--portfolio-offset:120px] sm:[--portfolio-sequence-width:1992px] lg:mt-16 lg:[--portfolio-card-height:795px] lg:[--portfolio-card-width:344px] lg:[--portfolio-duration:40s] lg:[--portfolio-gap:47px] lg:[--portfolio-offset:190px] lg:[--portfolio-sequence-width:2346px]"
          aria-label="White label website design examples"
        >
          <div className="marquee-wrapper">
            <div className="portfolio-marquee-track portfolio-marquee-track--always-run">
              {[0, 1].map((groupIndex) => (
                <div
                  key={`portfolio-group-${groupIndex}`}
                  className="flex flex-none gap-[var(--portfolio-gap)] pr-[var(--portfolio-gap)]"
                  aria-hidden={groupIndex === 1}
                >
                  {portfolioExamples.map((example, index) => (
                    <div
                      key={`${example.src}-${groupIndex}-${index}`}
                      className="relative h-[var(--portfolio-card-height)] w-[var(--portfolio-card-width)] overflow-hidden rounded-[10px] bg-[#111111]"
                    >
                      <Image
                        src={example.src}
                        alt={example.alt}
                        fill
                        sizes="(min-width: 1024px) 344px, (min-width: 640px) 300px, 260px"
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Wrapper>
          <div className="mt-12 flex justify-center sm:mt-14 lg:mt-16">
            <Button
              href="/our-portfolio"
              variant="white"
              className="min-w-[250px] justify-center px-8 py-4 text-[12px] tracking-[0.08em] sm:min-w-[288px] sm:px-10 sm:py-5 sm:text-[13px]"
            >
              View All Portfolio
            </Button>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default PortfolioExamplesSection;
