import Button from "@/components/ui/Button";
import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";
import {
  ArrowUpRight,
  Layers3,
  Tag,
  type LucideIcon,
} from "lucide-react";

const serviceRows = [
  [
    "White Label Web Development",
    "White Label SEO Delivery",
    "White Label Google Ads Management",
    "White Label Social Media Management",
    "White Label Branding & Identity",
  ],
  [
    "White Label Email Marketing",
    "White Label CRO & Landing Pages",
    "White Label Reporting & Analytics",
    "White Label Custom Development",
    "White Label Content Production",
  ],
] as const;

type TrustItem = {
  lines: [string, string];
  icon?: LucideIcon;
  iconSrc?: string;
};

const trustItems: TrustItem[] = [
  {
    lines: ["Full NDA", "Protection"],
    iconSrc: "/services/Frame.svg",
  },
  {
    lines: ["Full-Stack", "Delivery"],
    icon: Layers3,
  },
  {
    lines: ["Your Brand,", "Our Work"],
    icon: Tag,
  },
];

const chipClasses =
  "inline-flex min-h-[50px] shrink-0 items-center gap-3 rounded-full border border-[#00A1A5] bg-[rgba(5,13,16,0.9)] px-5 py-3 text-center font-sans text-[15px] font-normal leading-none text-white sm:min-h-[56px] sm:px-6 sm:text-[17px] lg:px-7 lg:text-[18px]";

const outlineButtonClasses =
  "group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/35 bg-transparent px-6 py-3 text-center font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:w-auto sm:text-sm sm:tracking-wider";

const ctaSizingClasses =
  "w-full justify-center px-8 py-4 text-[12px] tracking-[0.08em] sm:w-[390px] sm:min-w-[390px] sm:px-8 sm:py-5 sm:text-[15px] sm:tracking-[0.06em]";

const WhiteLabelExecutionSection = () => {
  return (
    <section
      id="white-label-services"
      className="bg-black pb-20 pt-4 sm:pb-24 lg:pb-28"
    >
      <div
        id="white-label-capabilities"
        className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div className="flex flex-col gap-4">
          {serviceRows.map((row, rowIndex) => (
            <div key={`service-row-${rowIndex}`} className="marquee-wrapper">
              <div
                className={`marquee-content marquee-content--always-run gap-4 ${rowIndex % 2 === 1 ? "marquee-content--reverse" : ""} [animation-duration:34s] sm:[animation-duration:38s] lg:[animation-duration:42s]`}
              >
                {[...row, ...row].map((service, index) => (
                  <div
                    key={`${service}-${index}`}
                    className={chipClasses}
                    aria-hidden={index >= row.length}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00A1A5]" />
                    <span className="whitespace-nowrap">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Wrapper>
        <div className="mx-auto mt-16 max-w-[1080px] text-center sm:mt-20">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-[#00A1A5]/70 sm:w-16" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#00A1A5] sm:text-sm">
              Since 2017
            </span>
          </div>

          <h2 className="mx-auto mt-6 flex max-w-[681px] flex-col items-center text-center font-primary text-[34px] font-semibold uppercase leading-[0.95] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px] lg:leading-[0.94]">
            <span className="inline-block sm:whitespace-nowrap">
              Your Agency&apos;s Reputation.
            </span>
            <span className="inline-block sm:whitespace-nowrap">
              Our Team&apos;s Execution.
            </span>
          </h2>

          <p className="mx-auto mt-6 flex max-w-[846px] flex-col items-center justify-center text-center font-sans text-[13px] font-semibold uppercase leading-[1.45] tracking-[0.08em] text-[#00A1A5] sm:min-h-[52px] sm:text-[15px]">
            <span className="block sm:whitespace-nowrap">
              We deliver agency-quality websites, SEO, and digital marketing
              under your brand
            </span>
            <span className="block sm:whitespace-nowrap">
              &mdash; and your clients never know we exist
            </span>
          </p>

          <div className="mx-auto mt-8 max-w-[1380px] space-y-6 text-sm leading-relaxed text-white sm:text-base">
            <p>
              You have the clients. You have the relationships. You have the
              strategy. What you need is a reliable execution partner who
              delivers work you would be proud to put your name on - on time,
              every time, with no trail leading back to us.
            </p>
            <p>
              HTSOL Inc. works as a silent white label partner for marketing
              agencies, design studios, freelancers, and PR firms across Canada
              and the United States. We build websites, deliver SEO, manage
              paid campaigns, produce content, and execute full digital projects
              - all branded as yours, protected under NDA, and delivered to
              your standards.
            </p>
            <p>
              No substandard work that damages your reputation. No communication
              with your clients without your permission. No competing for your
              accounts. Just consistent, high-quality delivery that makes your
              agency look excellent.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="white"
              href="#white-label-form"
              className={ctaSizingClasses}
            >
              Start A Partner Conversation
            </Button>
            <a
              href="#white-label-capabilities"
              className={`${outlineButtonClasses} ${ctaSizingClasses}`}
            >
              <span>See What We Deliver</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="relative mx-auto mt-16 max-w-[1480px] sm:mt-24">
            <div className="absolute left-[16.6667%] right-[16.6667%] top-[55px] hidden h-px bg-[#00A1A5] sm:block lg:top-[75px]" />

            <div className="grid gap-12 sm:grid-cols-3 sm:gap-6 lg:gap-10">
              {trustItems.map(({ lines, icon: Icon, iconSrc }) => (
                <div
                  key={lines.join("-")}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-[90px] w-[90px] items-center justify-center rounded-full border border-[#00A1A5] bg-[#011316] sm:h-[120px] sm:w-[120px] lg:h-[110px] lg:w-[110px]">
                    {iconSrc ? (
                      <Image
                        src={iconSrc}
                        alt=""
                        width={54}
                        height={54}
                        className="h-8 w-8 object-contain lg:h-12 lg:w-12"
                      />
                    ) : Icon ? (
                      <Icon
                        className="h-6 w-6 text-[#00A1A5] lg:h-12 lg:w-12"
                        strokeWidth={1.8}
                      />
                    ) : null}
                  </div>
                  <h3 className="mt-6 font-primary text-[28px] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:mt-8 sm:text-[32px] lg:text-[34px]">
                    <span className="block">{lines[0]}</span>
                    <span className="block">{lines[1]}</span>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default WhiteLabelExecutionSection;
