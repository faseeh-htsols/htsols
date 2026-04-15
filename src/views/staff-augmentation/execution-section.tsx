import ArrowLinkButton from "@/components/ui/arrow-link-button";
import Button from "@/components/ui/Button";
import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";
import { Layers3, Tag, type LucideIcon } from "lucide-react";
import HeadingTwo from "@/components/ui/heading-two";
import Container from "@/components/ui/container";

const serviceRows = [
  [
    "Full-Stack Developers",
    "Front-End Developers",
    "Back-End Developers",
    "React & Next.js Developers",
    "UI / UX Designers",
    "Graphic Designers",
  ],
  [
    "SEO Specialists",
    "Paid Ads Managers",
    "Social Media Managers",
    "Content Writers & Strategists",
    "Email Marketing Specialists",
    "Project Managers",
  ],
] as const;

type TrustItem = {
  lines: [string, string];
  para?: string;
  icon?: LucideIcon;
  iconSrc?: string;
};

const trustItems: TrustItem[] = [
  {
    lines: ["START IN 5", "DAYS"],
    para: `From confirmed engagement to day one — no lengthy procurement process`,
    iconSrc: "/staff-augmentation/friction-icon-1.svg",
  },
  {
    lines: ["FULL DIGITAL", "STACK"],
    para: `Developers, designers, SEO, ads, content, and project managers — one partner`,
    iconSrc: "/staff-augmentation/friction-icon-2.svg",
  },
  {
    lines: ["YOU DIRECT", "THE WORK"],
    para: `Your tools, your hours, your standups — they are an extension of your team`,
    iconSrc: "/staff-augmentation/friction-icon-3.svg",
  },
];

const chipClasses =
  "inline-flex min-h-[50px] shrink-0 items-center gap-3 rounded-full border border-[#00A1A5] bg-[rgba(5,13,16,0.9)] px-5 py-3 text-center font-sans text-[15px] font-normal leading-none text-white sm:min-h-[56px] sm:px-6 sm:text-[17px] lg:px-7 lg:text-[18px]";

const ctaSizingClasses =
  "w-full justify-center px-8 py-4 text-[12px] tracking-[0.08em] sm:w-[390px] sm:min-w-[390px] sm:px-8 sm:py-5 sm:text-[15px] sm:tracking-[0.06em]";

const WhiteLabelExecutionSection = () => {
  return (
    <section
      id="white-label-services"
      className="bg-black py-10 lg:py-20"
    >
      <div
        id="white-label-capabilities"
        className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div className="flex flex-col gap-4">
          {serviceRows.map((row, rowIndex) => (
            <div key={`service-row-${rowIndex}`} className="marquee-wrapper">
              <div
                className={`marquee-content marquee-content--always-run gap-4 ${rowIndex % 2 === 1 ? "marquee-content--reverse" : ""} animation-duration-[34s] sm:animation-duration-[38s] lg:animation-duration-[42s]`}
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

      <Container>
        <div className="mx-auto mt-10 text-center md:mt-20">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-[#00A1A5]/70 sm:w-16" />
            <span className="font-sans font-semibold uppercase tracking-[0.18em] text-[#00A1A5]">
              Since 2017
            </span>
          </div>

          <HeadingTwo className="text-center mt-8">
            <span className="inline-block sm:whitespace-nowrap">
              Senior Talent, Zero Friction
            </span>
          </HeadingTwo>

          {/* <p className="mx-auto mt-6 flex max-w-[846px] flex-col items-center justify-center text-center font-sans text-[13px] font-semibold uppercase leading-[1.45] tracking-[0.08em] text-[#00A1A5] sm:min-h-[52px] sm:text-[15px]">
            <span className="block sm:whitespace-nowrap">
              We deliver agency-quality websites, SEO, and digital marketing
              under your brand
            </span>
            <span className="block sm:whitespace-nowrap">
              &mdash; and your clients never know we exist
            </span>
          </p> */}

          <div className="mx-auto mt-8 max-w-[1380px] space-y-6 leading-relaxed text-white">
            <p>
              Hiring takes months. Freelancers are unreliable. Agencies charge for work you cannot control. And your business still needs the work done — right now, to a real standard, by someone who actually shows up.
            </p>
            <p>
              HTSOL Inc. gives startups, agencies, and growing businesses access to senior digital talent across the full stack — without the six-month hiring process, the employer taxes, the benefits package, or the risk of a permanent hire you are not sure about yet.
            </p>
          </div>

          {/* <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="white"
              href="#white-label-form"
              className={ctaSizingClasses}
            >
              Start A Partner Conversation
            </Button>
            <ArrowLinkButton
              href="#white-label-capabilities"
              variant="outline"
              className={ctaSizingClasses}
            >
              See What We Deliver
            </ArrowLinkButton>
          </div> */}

          <div className="relative mx-auto mt-16 max-w-[1480px] sm:mt-24">
            <div className="absolute left-[16.6667%] right-[16.6667%] top-[55px] hidden h-px bg-[#00A1A5] sm:block " />

            <div className="grid gap-12 sm:grid-cols-3 sm:gap-6 lg:gap-10">
              {trustItems.map(({ lines, icon: Icon, iconSrc, para }) => (
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
                  <h3 className="mt-6 font-primary font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:mt-8 text-[28px]">
                    <span className="block">{lines[0]}</span>
                    <span className="block">{lines[1]}</span>
                  </h3>
                  {para && (
                    <p className="text-[#FFFFFF99] leading-relaxed mt-6 md:max-w-[80%] text-center w-full">
                      {para}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhiteLabelExecutionSection;
