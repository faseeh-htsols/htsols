import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";

const costItems = [
  "Months wasted on a hiring process for a role that might not need to be permanent",
  "Freelancers who take the brief, disappear for a week, and deliver something you did not ask for",
  "Agency retainers where you pay a premium to speak to a junior who changes every quarter",
  "Workload sitting undone while the people you need are tied up on other priorities",
  "Projects delayed, launches missed, and growth slowed — not from lack of strategy, but lack of hands",
  "Key person dependency when one team member carries too much and eventually burns out or leaves",
] as const;

interface CapacityData {
  title: string;
  para: string;
  img: string;
  highlight: string;
  list: string[];
};

interface CapacityProps {
  data: CapacityData;
};

const WhiteLabelCapacitySection = ({ data }: CapacityProps) => {
  return (
    <section className="bg-tertiary py-10 lg:py-20">
      <Container>
        <div className="mx-auto max-w-[1420px] text-center">
          <HeadingTwo className="text-center">
            {data.title}
          </HeadingTwo>

          <div className="mx-auto mt-8 max-w-[1330px] space-y-6 leading-[1.7] text-white">
            <p dangerouslySetInnerHTML={{ __html: data.para }} />
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1240px] gap-12 grid-cols-1 lg:mt-20 lg:grid-cols-[minmax(0,620px)_568px] lg:items-stretch xl:items-start xl:gap-20">
          <div className="relative overflow-visible">
            <div className="relative z-10 overflow-hidden rounded-[20px] border border-white/10 bg-[#121212] shadow-[0_26px_70px_rgba(0,0,0,0.28)] h-full">
              <div className="relative aspect-604/470 w-full h-full sm:aspect-604/500 lg:aspect-604/540">
                <Image
                  src={data.img}
                  alt="HTSOL white-label delivery team collaborating on client work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 620px"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.1)_38%,rgba(0,0,0,0.34)_100%)]" />
              </div>
            </div>

            <div className="absolute -left-20 -top-26 z-5">
              <Image
                src="/staff-augmentation/blur-overlay.png"
                width={500}
                height={500}
                className="h-[350px] w-[350px]"
                alt="left gradient"
              />
            </div>
          </div>

          <div className="self-start text-left">
            <h3 className="max-w-[568px] font-primary text-[28px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#00A1A5] sm:text-[32px] lg:text-[34px]">
              {data.highlight}
            </h3>

            <div className="relative mt-7 pl-8 sm:pl-10">
              <div className="absolute bottom-2 left-[7px] top-3 w-[3px] bg-[#FFFFFF33] md:left-[9px]" />

              <div className="space-y-7">
                {data.list.map((item) => (
                  <div key={item} className="relative">
                    <span className="absolute -left-8 top-2.5 h-4 w-4 rounded-full bg-[#00A1A5] sm:left-[-38px] sm:top-[9px]" />
                    <p className="leading-[1.45] text-white ">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhiteLabelCapacitySection;
