import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";

const costItems = [
  "Revenue left on the table every time you decline a project outside your current capacity",
  "Clients who move on when you cannot deliver a service they need",
  "The overhead and risk of hiring full-time staff for fluctuating project demand",
  "Subcontractors who communicate directly with your clients and undermine your position",
  "Inconsistent quality when you cobble together freelancers project by project",
  "A business that cannot scale because its output is capped by its headcount",
] as const;

const WhiteLabelCapacitySection = () => {
  return (
    <section className="bg-black py-20 sm:py-24 lg:py-28">
      <Wrapper>
        <div className="mx-auto max-w-[1420px] text-center">
          <h2 className="mx-auto max-w-[1380px] font-primary uppercase text-[28px] font-medium leading-[1.15] tracking-[-0.03em] text-white sm:text-[34px] lg:text-[40px]">
            Turning down work because you do not have the capacity to deliver
            it is not a strategy
          </h2>

          <div className="mx-auto mt-8 max-w-[1330px] space-y-6 text-[15px] leading-[1.7] text-white sm:text-base lg:text-[17px]">
            <p>
              Most agencies and studios hit the same wall. A client wants a
              website and an SEO campaign. Or a new project comes in while your
              team is at full capacity. Or a client needs a service you do not
              offer in-house. And you face a choice: turn it down, hire someone,
              or scramble and deliver something that is not your best work.
            </p>
            <p>
              None of those are good options. Turning down work loses revenue
              and weakens client relationships. Hiring adds overhead and risk.
              Scrambling damages your reputation. There is a fourth option - a
              white label partner who makes it look like your team handled
              everything, because as far as your client is concerned, you did.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1240px] gap-12 lg:mt-20 lg:grid-cols-[minmax(0,620px)_568px] lg:items-start lg:gap-20">
          <div className="relative overflow-visible">
            <div className="relative z-10 overflow-hidden rounded-[20px] border border-white/10 bg-[#121212] shadow-[0_26px_70px_rgba(0,0,0,0.28)]">
              <div className="relative aspect-[604/470] w-full sm:aspect-[604/500] lg:aspect-[604/540]">
                <Image
                  src="/website/one-team.png"
                  alt="HTSOL white-label delivery team collaborating on client work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 620px"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.1)_38%,rgba(0,0,0,0.34)_100%)]" />
              </div>
            </div>

            <div className="absolute left-0 top-2 z-20 w-[210px] max-w-[calc(100%-12px)] rounded-[22px] bg-[#2C2A2A] px-4 py-5 text-center shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:left-0 sm:top-8 sm:w-[300px] sm:max-w-none sm:-translate-x-8 sm:px-6 sm:py-6 lg:left-[-146px] lg:translate-x-0 lg:w-[340px] lg:px-8 lg:py-7 xl:left-[-172px]">
              <p className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text font-sans text-[40px] font-semibold leading-none tracking-[-0.05em] text-transparent sm:text-[54px] lg:text-[68px]">
                100%
              </p>
              <p className="mx-auto mt-3 max-w-[178px] font-sans text-[16px] leading-[1.2] tracking-[-0.03em] text-white/96 sm:mt-4 sm:max-w-[220px] sm:text-[21px] lg:max-w-[240px] lg:text-[19px]">
                <span className="block">Confidential White-Label</span>
                <span className="mt-1 block sm:mt-2">
                  Integration Guaranteed.
                </span>
              </p>
            </div>
          </div>

          <div className="self-start text-left">
            <h3 className="max-w-[568px] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text font-primary text-[28px] font-semibold leading-[1.02] tracking-[-0.035em] text-transparent sm:text-[32px] lg:text-[34px]">
              The Cost of Not Having a White Label Partner:
            </h3>

            <div className="relative mt-7 pl-8 sm:pl-10">
              <div className="absolute bottom-2 left-[9px] top-[12px] w-px bg-white/28 sm:left-[11px]" />

              <div className="space-y-7">
                {costItems.map((item) => (
                  <div key={item} className="relative">
                    <span className="absolute left-[-32px] top-[10px] h-4 w-4 rounded-full bg-[#00A1A5] sm:left-[-38px] sm:top-[9px]" />
                    <p className="font-sans text-[17px] leading-[1.45] text-white/92 lg:text-[18px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default WhiteLabelCapacitySection;
