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

type ServiceCard = {
  titleLines: string[];
  description: string;
  icon: string;
  tone: "muted" | "base";
};

const serviceCards: ServiceCard[] = [
  {
    titleLines: ["Full-Stack Developer"],
    description:
      "A developer who can build across the front and back end — React, Next.js, Node.js, MERN stack. Whether you are building a new feature or accelerating a stalled roadmap, a full-stack developer moves things forward fast.",
    icon: "/staff-augmentation/role-icon-1.svg",
    tone: "muted",
  },
  {
    titleLines: ["Front-End Developer"],
    description:
      "Pixel-perfect implementation of your designs in React, Next.js, HTML, and CSS. Ideal for startups and agencies that have designs ready but need someone to build them properly — responsive, performant, and accessible.",
    icon: "/staff-augmentation/role-icon-2.svg",
    tone: "base",
  },
  {
    titleLines: ["Back-End Developer"],
    description:
      "API development, database architecture, server-side logic, third-party integrations, and performance optimisation. If your product has backend complexity your current team cannot handle at pace, a dedicated back-end developer changes that equation immediately.",
    icon: "/staff-augmentation/role-icon-3.svg",
    tone: "muted",
  },
  {
    titleLines: ["UI / UX Designer"],
    description:
      "User interface design, UX flows, wireframing, prototyping, and design systems — in Figma or your tool of choice. A dedicated designer ensures every product decision has a design perspective, and nothing ships looking like it was built by a developer in a hurry.",
    icon: "/staff-augmentation/role-icon-4.svg",
    tone: "base",
  },
  {
    titleLines: ["SEO Specialist"],
    description:
      "Technical SEO, on-page optimisation, local SEO, keyword strategy, content planning, and monthly reporting — executed by someone who works for you, not for an agency managing fifteen other clients at the same time.",
    icon: "/staff-augmentation/role-icon-5.svg",
    tone: "muted",
  },
  {
    titleLines: ["Paid Ads Manager"],
    description:
      "Google Ads, Meta Ads, and paid search campaign management — strategy, setup, ongoing optimisation, and clear reporting. A dedicated ads manager means campaigns get the consistent daily attention they need to perform.",
    icon: "/staff-augmentation/role-icon-6.svg",
    tone: "base",
  },
  {
    titleLines: ["Social Media Manager"],
    description:
      "Content creation, scheduling, community management, and performance tracking across your social channels. A dedicated social media manager who understands your brand, follows your voice guidelines, and treats your channels as their primary job — because they are.",
    icon: "/staff-augmentation/role-icon-7.svg",
    tone: "muted",
  },
  {
    titleLines: ["Content Writer & Strategist"],
    description:
      "Blog posts, website copy, email sequences, product descriptions, and content strategies — written by someone dedicated to your brand, knows your audience, and produces work that ranks and converts. Not a content mill. A genuine professional.",
    icon: "/staff-augmentation/role-icon-8.svg",
    tone: "base",
  },
  {
    titleLines: ["Project Manager"],
    description:
      "A dedicated project manager who owns your delivery process — running sprints, managing backlogs, coordinating between teams, tracking timelines, and keeping stakeholders aligned. Ideal for startups and agencies that need everything to ship on time.",
    icon: "/staff-augmentation/role-icon-9.svg",
    tone: "muted",
  },
];

const ServicesSection = () => {
  return (
    <DoubleCurves
      up
      className="-mt-[12%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_100%,0_100%)]"
      innerClassName="-rotate-5! top-5! md:top-0! h-[0.5%]! md:-rotate-6! md:h-[1.3%]! lg:-rotate-3! lg:h-[2.5%]! xl:-rotate-2! xl:h-[2.5%]!">

      <section className="relative overflow-hidden bg-tertiary py-20  md:py-28 ">
        <Container>
          <div className="text-center">
            <HeadingTwo className="text-center">
              Roles Available Through HTSOL Staff Augmentation
            </HeadingTwo>

            <p className="mt-8  leading-[1.6] text-[#FFFFFFCC]">
              Whether you need a single specialist or a small embedded team, HTSOL provides senior digital talent across every discipline your business relies on.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-[#1E1E1E] lg:mt-16 lg:grid-cols-3">
            {serviceCards.map(({ titleLines, description, icon, tone }) => (
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
