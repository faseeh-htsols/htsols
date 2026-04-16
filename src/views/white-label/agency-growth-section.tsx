import ArrowLinkButton from "@/components/ui/arrow-link-button";
import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";

const growthPoints = [
  "Say yes to more projects without increasing your payroll",
  "Offer a complete service stack without building every capability in-house",
  "Protect existing client relationships by solving problems you previously referred out",
  "Scale your revenue without scaling your headcount at the same rate",
  "Build an agency model that is more profitable, more resilient, and less dependent on any single team member",
] as const;

const AgencyGrowthSection = () => {
  return (
    <section className="bg-black py-24 sm:py-28 lg:py-32">
      <Wrapper>
        <div className="mx-auto max-w-[1380px]">
          <div className="mx-auto max-w-[1370px] text-center">
            <h2 className="font-primary text-[31px] font-semibold uppercase leading-[1.04] tracking-[-0.045em] text-white sm:text-[30px] lg:text-[40px] lg:leading-[0.96]">
              <span className="block">
                A White Label Partner Is The Most Efficient
              </span>
              <span className="block">Way To Grow An Agency</span>
            </h2>

            <div className="mx-auto mt-8 max-w-[1380px] space-y-7 text-[16px] leading-[1.65] text-white/78 sm:text-[17px] lg:text-[18px]">
              <p>
                The agencies that grow fastest are not the ones with the
                biggest teams. They are the ones who have built the right
                partnerships. A reliable white label execution partner is not a
                cost - it is a revenue multiplier. Every project you can say
                yes to, every service you can offer without hiring, every
                client you retain because you solved a problem outside your core
                - that is your white label partner paying for itself.
              </p>

              <p>
                The alternative is what most agencies do: stay small, turn down
                work, hire and fire with project cycles, or stretch their team
                until quality drops. None of those scale. A trusted white label
                partner does.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <ArrowLinkButton
                href="#white-label-form"
                variant="teal"
                className="min-w-[270px] px-8 py-4 text-[12px] tracking-[0.08em] sm:min-w-[320px] sm:px-10 sm:py-5 sm:text-[18px]"
              >
                Start A Partner Conversation
              </ArrowLinkButton>
            </div>
          </div>

          <div className="mt-14 grid items-start gap-12 lg:mt-16 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="relative w-[83%] overflow-hidden rounded-[18px] bg-[#151515] shadow-[0_22px_60px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-[420/470]">
                  <Image
                    src="/services/approach-2.webp"
                    alt="White label agency collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 430px"
                  />
                </div>
              </div>

              <div className="absolute right-0 top-[-6%] w-[43%] overflow-hidden rounded-[14px] border border-white/10 bg-[#191919] shadow-[0_18px_50px_rgba(0,0,0,0.42)]">
                <div className="relative aspect-[220/170]">
                  <Image
                    src="/services/service-img.webp"
                    alt="Delivery visibility preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 43vw, 220px"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:pt-6">
              {growthPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-[14px] border border-[#2A3C40] bg-[#141414] px-5 py-5 sm:px-6 sm:py-6"
                >
                  <Image
                    src="/services/circle-tick.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                  />
                  <p className="text-[18px] leading-[1.5] text-white/90 sm:text-[19px] lg:text-[18px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AgencyGrowthSection;
