import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import Wrapper from "@/components/ui/wrapper";
import {
  ChartNoAxesColumn,
  CodeXml,
  FileText,
  Mail,
  Monitor,
  Paintbrush,
  Search,
  SearchCode,
  Share2,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

export type ServiceCard = {
  titleLines: string[];
  description: string;
  icon: string;
  tone: "muted" | "base";
};

export type ServiceData = {
  title: string;
  highLight?: string;
  para: string;
  cards: ServiceCard[];
};

type ServiceProps = {
  data: ServiceData;
};

const ServicesSection = ({ data }: ServiceProps) => {
  return (
    <DoubleCurves
      up
      className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_100%,0_100%)]"
      innerClassName="-rotate-5! top-5! md:top-0! h-[0.5%]! md:-rotate-6! md:h-[1.3%]! lg:-rotate-3! lg:h-[2.5%]! xl:-rotate-2! xl:h-[2.5%]!">

      <section className="relative overflow-hidden bg-tertiary py-20  md:py-28 xl:pb-44 xl:pt-28">
        <Container>
          <div className="text-center">
            <HeadingTwo className="text-center">
              {data.title}
            </HeadingTwo>

            {data.highLight && (
              <p className=" uppercase tracking-widest mt-6 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent text-[18px] text-center">
                {data.highLight}
              </p>
            )}

            <p className="mt-8  leading-[1.6] text-[#FFFFFFCC]">
              {data.para}
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-[#1E1E1E] lg:mt-16 lg:grid-cols-3">
            {data.cards.map(({ titleLines, description, icon, tone }) => (
              <article
                key={titleLines.join(" ")}
                className={`flex min-h-[280px] flex-col items-center px-6 py-10 text-center sm:px-10 lg:min-h-[315px] lg:px-8 lg:py-11 ${tone === "muted" ? "bg-[#262626]" : "bg-[#111111]"
                  }`}
              >
                <div className="relative flex h-18 w-18 shrink-0 items-center justify-center ">
                  <Image
                    src={icon}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-6 font-primary font-semibold uppercase leading-[1.02] tracking-[-0.035em] text-white">
                  {titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                <p className="mt-6 max-w-[320px] leading-[1.58] text-[#FFFFFFCC] text-center">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </DoubleCurves>
  );
};

export default ServicesSection;
