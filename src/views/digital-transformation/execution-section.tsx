import ArrowLinkButton from "@/components/ui/arrow-link-button";
import Button from "@/components/ui/Button";
import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";
import { Layers3, Tag, type LucideIcon } from "lucide-react";
import HeadingTwo from "@/components/ui/heading-two";
import Container from "@/components/ui/container";
import { DIGITAL_TRANSFORMATION_ACHIEVEMENTS } from "@/constants";

const serviceRows = [
  [
    "Brand Identity & Logo",
    "Professional Website Design",
    "Website Development",
    "Local SEO & Google Maps",
    "Google Ads & Paid Search",
    "Social Media Marketing",
    "Content Marketing",
    "Reputation & Review Strategy",
    "Patient & Client Booking Systems",
    "Email Marketing & Automation",
    "Analytics & Reporting",
    "Custom CRM & Software",
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
    // para: `From confirmed engagement to day one — no lengthy procurement process`,
    iconSrc: "/staff-augmentation/friction-icon-1.svg",
  },
  {
    lines: ["FULL DIGITAL", "STACK"],
    // para: `Developers, designers, SEO, ads, content, and project managers — one partner`,
    iconSrc: "/staff-augmentation/friction-icon-2.svg",
  },
  {
    lines: ["YOU DIRECT", "THE WORK"],
    // para: `Your tools, your hours, your standups — they are an extension of your team`,
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
            Build the Foundation Your Expertise Deserves
          </HeadingTwo>

          <div className="mx-auto mt-8 space-y-6 leading-relaxed text-white">
            <p>
              Hiring takes months. Freelancers are unreliable. Agencies charge for work you cannot control. And your business still needs the work done — right now, to a real standard, by someone who actually shows up.
            </p>
            <p>
              HTSOL Inc. gives startups, agencies, and growing businesses access to senior digital talent across the full stack — without the six-month hiring process, the employer taxes, the benefits package, or the risk of a permanent hire you are not sure about yet.
            </p>
          </div>

          <div className="mt-10 flex justify-center lg:mt-12">
            <ArrowLinkButton
              href="/contact-us"
              variant="teal"
              className="h-[60px] w-fit px-7 text-[13px] tracking-[0.05em] md:min-w-[220px] sm:text-[18px]"
            >
              BOOK A free consultation
            </ArrowLinkButton>
          </div>

          <div className="relative mx-auto mt-10  sm:mt-16">

            <div className="grid grid-cols-1 lg:grid-cols-3 bg-tertiary rounded-lg border border-[#075B65]">
              {DIGITAL_TRANSFORMATION_ACHIEVEMENTS.map((item, index) => (
                <div key={item.name} className="py-5 px-2 relative">
                  {/* Desktop (right side) */}
                  <div
                    className={`hidden lg:block ${DIGITAL_TRANSFORMATION_ACHIEVEMENTS.length - 1 === index
                      ? ""
                      : "absolute top-0 right-0 h-full w-px bg-[#075B65] bg-cover shadow-[0_0_10px_#075B65]"
                      }`}></div>
                  <div
                    className={`hidden lg:block ${DIGITAL_TRANSFORMATION_ACHIEVEMENTS.length - 1 === index
                      ? ""
                      : "absolute top-[37%] -right-[5px] h-2.5 rounded-full  w-2.5 bg-[#075B65] bg-cover shadow-[0_0_10px_#075B65]"
                      }`}></div>
                  <div
                    className={`hidden lg:block ${DIGITAL_TRANSFORMATION_ACHIEVEMENTS.length - 1 === index
                      ? ""
                      : "absolute top-[73%] -right-[5px] h-2.5 rounded-full  w-2.5 bg-[#075B65] bg-cover shadow-[0_0_10px_#075B65]"
                      }`}></div>
                  <div
                    className={`block lg:hidden ${DIGITAL_TRANSFORMATION_ACHIEVEMENTS.length - 1 === index ? "hidden" : ""
                      }`}>
                    <div className="absolute left-0 bottom-0 w-full h-px bg-[#075B65] bg-cover shadow-[0_0_10px_#075B65]" />
                    <div className="absolute bottom-[-5px] left-[27%] h-2.5 w-2.5 rounded-full bg-[#075B65] bg-cover shadow-[0_0_10px_#075B65]" />
                    <div className="absolute bottom-[-5px] left-[63%] h-2.5 w-2.5 rounded-full bg-[#075B65] bg-cover shadow-[0_0_10px_#075B65]" />
                  </div>

                  <div className="flex flex-col items-center gap-3 max-w-[313px] mx-auto">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-black ">
                      <Image
                        src={item.img}
                        alt=""
                        width={18}
                        height={18}
                        className="h-9 w-9"
                      />
                    </div>
                    <div className="flex gap-2 flex-col">
                      <h4 className="text-[20px] md:max-w-[65%] mx-auto uppercase text-center font-primary font-semibold">
                        {item.name}
                      </h4>
                      <p className="text-center text-[#FFFFFF99]">{item.para}</p>
                    </div>
                  </div>
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
