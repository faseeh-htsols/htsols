import Image from "next/image";
import Wrapper from "@/components/ui/wrapper";

type ServiceCard = {
  titleLines: string[];
  description: string;
  iconSrc: string;
  tone: "muted" | "base";
};

const serviceCards: ServiceCard[] = [
  {
    titleLines: ["White Label Web", "Design & Development"],
    description:
      "Custom website design and development delivered under your agency's brand. From wireframes through to a live, tested, and fully optimised website. We follow your design brief, your brand standards, and your client's requirements and hand over a finished product that reflects the quality your agency is known for.",
    iconSrc: "/services/Frame(0).svg",
    tone: "muted",
  },
  {
    titleLines: ["White Label SEO", "Delivery"],
    description:
      "Full-service SEO delivered as your agency's work. Technical audits, on-page optimisation, content creation, local SEO, link building, and monthly reporting are all produced under your brand. We follow your reporting format, your client communication style, and your timelines.",
    iconSrc: "/services/Frame%20(1).svg",
    tone: "base",
  },
  {
    titleLines: ["White Label Google", "Ads & PPC"],
    description:
      "Campaign setup, management, optimisation, and branded reporting for Google Ads, Meta Ads, and other paid channels are all delivered under your agency's name. We manage the complexity. You take the credit.",
    iconSrc: "/services/Frame%20(2).svg",
    tone: "muted",
  },
  {
    titleLines: ["White Label Social", "Media Management"],
    description:
      "Content creation, scheduling, community management, and performance reporting for your clients' social channels are delivered as your agency's service. Strategy, captions, graphics, and monthly reports all stay branded to you.",
    iconSrc: "/services/Frame%20(3).svg",
    tone: "base",
  },
  {
    titleLines: ["White Label Content", "Marketing"],
    description:
      "Blog posts, service pages, location pages, email sequences, and content strategies are written for your clients and delivered under your agency's brand. We research, write, optimise, and hand over work in your voice, your format, and ready to publish.",
    iconSrc: "/services/Frame%20(4).svg",
    tone: "muted",
  },
  {
    titleLines: ["White Label Branding", "& Visual Identity"],
    description:
      "Logo design, brand guidelines, colour systems, typography, and visual identity are created for your clients and delivered as your agency's creative output. We execute to your brief and your client's vision.",
    iconSrc: "/services/Frame%20(5).svg",
    tone: "base",
  },
  {
    titleLines: ["White Label Email", "Marketing"],
    description:
      "Email campaigns, automation sequences, newsletter design, list management, and performance reporting are all produced for your clients and branded under your agency. We handle the strategy, the copy, the design, and the technical setup.",
    iconSrc: "/services/Frame%20(6).svg",
    tone: "muted",
  },
  {
    titleLines: ["White Label", "Reporting & Analytics"],
    description:
      "Branded monthly performance reports, Google Analytics configuration, conversion tracking, and dashboard setup are delivered under your agency's name. We produce reports that look like your team wrote them.",
    iconSrc: "/services/Frame%20(7).svg",
    tone: "base",
  },
  {
    titleLines: ["White Label Custom", "Development"],
    description:
      "Custom web applications, CRMs, client portals, booking systems, and bespoke software are built for your clients and delivered as your agency's development capability. If your client needs something built, we build it.",
    iconSrc: "/services/Frame%20(8).svg",
    tone: "muted",
  },
];

const ServicesSection = () => {
  return (
    <div
      id="white-label-services"
      className="relative -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%]"
    >
      <div
        className="pointer-events-none absolute left-[-1%] top-[2px] z-10 h-[8px] w-[102%] origin-left -rotate-[0.55deg] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] animate-pulse sm:h-[9px] lg:h-[10px]"
        aria-hidden
      />

      <section className="relative overflow-hidden bg-tertiary py-20  md:py-28 xl:pb-44 xl:pt-28 [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
        <Wrapper>
          <div className="mx-auto max-w-[1280px]">
            <div className="mx-auto max-w-[1120px] text-center">
              <h2 className="font-primary text-[34px] font-semibold uppercase leading-[1.02] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[56px]">
                White Label Services From HTSOL Inc.
              </h2>

              <p className="mt-6 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text font-sans text-[16px] font-semibold leading-[1.35] tracking-[-0.02em] text-transparent sm:text-[20px] lg:text-[22px]">
                Everything Your Clients Need. All Delivered Under Your Brand.
              </p>

              <p className="mx-auto mt-8 max-w-[1120px] text-[16px] leading-[1.6] text-white/76 sm:text-[19px]">
                We deliver the full range of digital services your agency needs
                individually or as a complete package. Every service is
                available white label, under NDA, to agencies and studios of
                any size.
              </p>
            </div>

            <div className="mt-14 grid gap-px bg-[#1E1E1E] lg:mt-16 lg:grid-cols-3">
              {serviceCards.map(({ titleLines, description, iconSrc, tone }) => (
                <article
                  key={titleLines.join(" ")}
                  className={`flex min-h-[280px] flex-col items-center px-6 py-10 text-center sm:px-10 lg:min-h-[315px] lg:px-8 lg:py-11 ${tone === "muted" ? "bg-[#262626]" : "bg-[#111111]"
                    }`}
                >
                  <Image
                    src={iconSrc}
                    alt=""
                    width={48}
                    height={48}
                    className="h-11 w-11 lg:h-12 lg:w-12"
                  />

                  <h3 className="mt-6 font-primary text-[20px] font-semibold uppercase leading-[1.02] tracking-[-0.035em] text-white sm:text-[22px]">
                    {titleLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>

                  <p className="mt-6 max-w-[320px] text-[15px] leading-[1.58] text-white/76 sm:text-[16px]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default ServicesSection;
