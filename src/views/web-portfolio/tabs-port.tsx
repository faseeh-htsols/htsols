"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import { GlowButton } from "@/components/ui/GlowButton";
import PopUpYoutube from "@/components/ui/popup-youtube";
const TABS = [
  "Website Design",
  "Website Development",
  "CGI Adds",
  "Digital Marketing",
] as const;

type TabName = (typeof TABS)[number];
interface DesignCard {
  image: string;
  category: string;
  label: string;
}

const designCards: DesignCard[] = [
  {
    image: "/web-design-1.png",
    category: "Website Design",
    label: "Dental",
  },
  {
    image: "/web-design-2.png",
    category: "Website Design",
    label: "THERAPIST",
  },
  {
    image: "/web-design-3.png",
    category: "Website Design",
    label: "DENTIST",
  },
  {
    image: "/web-design-6.png",
    category: "Website Design",
    label: "DENTIST",
  },
  {
    image: "/web-design-4.png",
    category: "Website Design",
    label: "LOGISTICS",
  },
  {
    image: "/web-design-5.png",
    category: "Website Design",
    label: "SMART HOME",
  },
  {
    image: "/web-design-1.png",
    category: "Website Design",
    label: "DENTAL",
  },
  {
    image: "/web-design-1.png",
    category: "Website Design",
    label: "DIGITAL MARKETING",
  },
  {
    image: "/web-design-9.png",
    category: "Website Design",
    label: "DENTAL",
  },
   {
    image: "/web-design-1.png",
    category: "Website Design",
    label: "DENTAL",
  },
];
const devCards: DesignCard[] = [
  {
    image: "/web-dev-1.png",
    category: "Website Development",
    label: "SMILEFAST",
  },
  {
    image: "/services/web-one.webp",
    category: "Website Development",
    label: "DENTAL",
  },
  {
    image: "/services/web-two.webp",
    category: "Website Development",
    label: "NUYU DENTAL",
  },
  {
    image: "/services/web-one.webp",
    category: "Website Development",
    label: "DENTIST",
  },
  {
    image: "/web-dev-2.png",
    category: "Website Development",
    label: "BRITISH ACADEMY",
  },
  {
    image: "/services/web-one.webp",
    category: "Website Development",
    label: "DENTAL MARKETING AGENCY",
  },
  {
    image: "/services/web-two.webp",
    category: "Website Development",
    label: "DENTAL",
  },
  {
    image: "/services/web-one.webp",
    category: "Website Development",
    label: "DENTAL SOLUTIONS",
  },
  {
    image: "/services/web-two.webp",
    category: "Website Development",
    label: "SPORTS DENTAL THERAPIST",
  },
  {
    image: "/services/web-one.webp",
    category: "Website Development",
    label: "DENTIST",
  },
];
interface CgiVideo {
  thumbnail: string;
  title: string;
  subtitle: string;
  url: string;
}

const cgiVideos: CgiVideo[] = [
  {
    thumbnail: "https://img.youtube.com/vi/t105qp6q2fY/maxresdefault.jpg",
    title: "CGI gives you Wings",
    subtitle: "2025",
    url: "https://youtube.com/shorts/t105qp6q2fY?si=n5JlWqpeaAD_o__J",
  },
  {
    thumbnail: "https://img.youtube.com/vi/nn4cC3qRik0/maxresdefault.jpg",
    title: "Kiwai X HtSol",
    subtitle: "2025",
    url: "https://youtube.com/shorts/nn4cC3qRik0?si=QkdFbM2hX1TCF06T",
  },
  {
    thumbnail: "https://img.youtube.com/vi/nvr9g1-7S8s/maxresdefault.jpg",
    title: "PizzahutCGO X HTSol",
    subtitle: "2025",
    url: "https://youtube.com/shorts/nvr9g1-7S8s?si=L1wAjm231YJVl3Px",
  },
  {
    thumbnail: "https://img.youtube.com/vi/ifVhc0U0ZFg/maxresdefault.jpg",
    title: "HTSol Showreel",
    subtitle: "2025",
    url: "https://youtube.com/shorts/ifVhc0U0ZFg?si=ye4Eavv3VqkQ9rzn",
  },
  {
    thumbnail: "https://img.youtube.com/vi/1UwBM6PiivM/maxresdefault.jpg",
    title: "A Tribute to Arshad Nadeem",
    subtitle: "2025",
    url: "https://youtube.com/shorts/1UwBM6PiivM?si=Ohxot4MUOjNzcRe3",
  },
  {
    thumbnail: "https://img.youtube.com/vi/BDOPnNwhHpU/maxresdefault.jpg",
    title: "Nayza Borjan Hoodie Mixed reality 3D Animated and CGI Video Ad",
    subtitle: "2025",
    url: "https://youtube.com/shorts/BDOPnNwhHpU?si=TnAu5Ylqrj147N9L",
  },
  {
    thumbnail: "https://img.youtube.com/vi/f_ZA1O9rpM0/maxresdefault.jpg",
    title: "Nayza Borjan Jacket CGI Video",
    subtitle: "2025",
    url: "https://youtube.com/shorts/f_ZA1O9rpM0?si=lc3NrBZH5ddKbaq5",
  },
  {
    thumbnail: "https://img.youtube.com/vi/oS7-CxFz5a8/maxresdefault.jpg",
    title: "HTSolutions x Burger O'Clock CGI Video Series",
    subtitle: "2025",
    url: "https://youtube.com/shorts/oS7-CxFz5a8?si=nlvbUknshGvUepqY",
  },
  {
    thumbnail: "https://img.youtube.com/vi/_1Tg5jmvg38/maxresdefault.jpg",
    title: "HTSolutions x Burger O'Clock CGI Series Continued",
    subtitle: "2025",
    url: "https://youtube.com/shorts/_1Tg5jmvg38?si=WjmHziDOHj4jANQx",
  },
  {
    thumbnail: "https://img.youtube.com/vi/USNe095vuBI/maxresdefault.jpg",
    title: "Burger O'Clock CGI video Ad x HTSol",
    subtitle: "2025",
    url: "https://youtube.com/shorts/USNe095vuBI?si=IFdeL8mL-Mtvrmh9",
  },
  {
    thumbnail: "https://img.youtube.com/vi/MZgfp3s3cgg/maxresdefault.jpg",
    title: "CGI Video for a hoodie product.",
    subtitle: "2025",
    url: "https://youtube.com/shorts/MZgfp3s3cgg?si=Ttti2LlytbgHqrcf",
  },
  {
    thumbnail: "https://img.youtube.com/vi/4OLkrYvz_to/maxresdefault.jpg",
    title: "Rolling Smart Watches CGI in Lahore By HTSolutions",
    subtitle: "2025",
    url: "https://youtube.com/shorts/4OLkrYvz_to?si=yyiimYgaLotipQHs",
  },
  {
    thumbnail: "https://img.youtube.com/vi/gA0lss9gxZo/maxresdefault.jpg",
    title: "CGI for a Hair Saloon By HTSolutions",
    subtitle: "2025",
    url: "https://youtube.com/shorts/gA0lss9gxZo?si=mUuNLdnPwM7Cehp6",
  },
  {
    thumbnail: "https://img.youtube.com/vi/RmU91oIoSpk/maxresdefault.jpg",
    title: "CGI Commercial",
    subtitle: "2025",
    url: "https://youtube.com/shorts/RmU91oIoSpk?si=Lxnh_XYCip9wKOYy",
  },
];
interface CaseStudy {
  logo: string;
  company: string;
  heading: string;
  description: string;
  services: string[];
  images: string[];
  accent: string;
}

const caseStudies: CaseStudy[] = [
  {
    logo: "/logo.webp",
    company: "Dentopia Marketing",
    heading: "HIGH-IMPACT UX FOR\nDENTAL PROFESSIONALS",
    description:
      "With over a decade of clinical expertise, this international consultancy needed a digital ecosystem that matched their authority. We delivered a conversion-focused, award-nominated platform that turns professional trust into measurable practice growth.",
    services: [
      "Web Design & Development",
      "Content Creation",
      "CMS Management",
      "Social Media Management",
      "Branding & Design",
      "Performance SEO",
    ],
    images: ["/mockup.png"],
    accent: "/marketing-1.png",
  },
  {
    logo: "/logo.webp",
    company: "Imogen Johnson",
    heading: "ELEVATING ATHLETE\nORAL PERFORMANCE",
    description:
      "As a leader in the UK Sports Dentistry Association, Imogen Johnson required a digital platform that bridged elite sports science with patient-centered care. We built a high-performance, calm-centric interface that showcases her clinical research and advanced aesthetic treatments for the modern athlete.",
    services: [
      "Web Design & Development",
      "Content Creation",
      "Branding & Design",
      "Social Media Management",
      "Performance SEO",
    ],
    images: ["/services/web-two.webp", "/services/web-one.webp"],
    accent: "/marketing-2.webp",
  },
  {
    logo: "/logo.webp",
    company: "Imogen Johnson",
    heading: "ELEVATING ATHLETE\nORAL PERFORMANCE",
    description:
      "As a leader in the UK Sports Dentistry Association, Imogen Johnson required a digital platform that bridged elite sports science with patient-centered care. We built a high-performance, calm-centric interface that showcases her clinical research and advanced aesthetic treatments for the modern athlete.",
    services: [
      "Web Design & Development",
      "Content Creation",
      "Branding & Design",
      "Social Media Management",
      "Performance SEO",
    ],
    images: ["/mockup 3.png"],
    accent: "/marketing-3.webp",
  },
];
export default function TabsPort() {
  const [activeTab, setActiveTab] = useState<TabName>("Website Design");
  const [popupSrc, setPopupSrc] = useState<string | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);

  const openVideo = useCallback((url: string) => {
    setPopupSrc(url);
    setPopupOpen(true);
  }, []);

  const closeVideo = useCallback(() => {
    setPopupOpen(false);
    setPopupSrc(null);
  }, []);

  return (
    <section className="relative py-20 lg:py-32">
      <Container>
        {/* ── TAB BAR ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider
                  transition-all duration-300 cursor-pointer whitespace-nowrap
                  ${
                    isActive
                      ? "gradient-box text-white shadow-[0_0_24px_rgba(0,131,138,0.35)]"
                      : " text-white border border-white hover:border-white hover:text-white"
                  }
                `}>
                {tab}
              </button>
            );
          })}
        </div>

        {/* ── TAB CONTENT ── */}
        <div className="min-h-[400px]">
          {/* Website Design */}
          {activeTab === "Website Design" && (
            <PortfolioGrid cards={designCards} />
          )}

          {/* Website Development */}
          {activeTab === "Website Development" && (
            <PortfolioGrid cards={devCards} />
          )}

          {/* CGI Adds */}
          {activeTab === "CGI Adds" && (
            <CgiGrid videos={cgiVideos} onPlay={openVideo} />
          )}

          {/* Digital Marketing */}
          {activeTab === "Digital Marketing" && (
            <MarketingCaseStudies studies={caseStudies} />
          )}
        </div>
      </Container>

      {/* YouTube Popup */}
      <PopUpYoutube open={popupOpen} src={popupSrc} onClose={closeVideo} />
    </section>
  );
}
function PortfolioGrid({ cards }: { cards: DesignCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <div
          key={`${card.label}-${i}`}
          className="group relative rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/6 transition-all duration-300 hover:border-[#00A1A5]/30 hover:shadow-[0_0_30px_rgba(0,161,165,0.12)]">
          {/* Image */}
          <div className="relative  overflow-hidden">
            <Image
              src={card.image}
              alt={card.label}
              width={500}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-500 "
            />
          </div>
          <div className="absolute bottom-2 left-5 right-5 px-5 rounded-full bg-white text-black border-b-2 border-[#00A1A5]  flex items-center justify-between py-3">
            <div className="flex items-center justify-between gap-3 w-full">
              <span className="text-xs font-semibold uppercase tracking-wide">
                {card.category}
              </span>
              <span className="w-px h-4 bg-white/15" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                {card.label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CgiGrid({
  videos,
  onPlay,
}: {
  videos: CgiVideo[];
  onPlay: (url: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, i) => (
        <button
          key={`${video.title}-${i}`}
          onClick={() => onPlay(video.url)}
          className="group relative rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/6 text-left transition-all duration-300 hover:border-[#00A1A5]/30 hover:shadow-[0_0_30px_rgba(0,161,165,0.12)] cursor-pointer">
          {/* Thumbnail */}
          <div className="relative aspect-[9/14] overflow-hidden">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover transition-transform duration-500 "
            />

            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/10">
              <Image
                src="/play-button.svg"
                alt="Play"
                width={72}
                height={72}
                className=""
              />
            </div>
          </div>
          <div className="px-5 py-4">
            <h3 className="font-primary text-sm font-bold uppercase text-white tracking-wide">
              {video.title}
            </h3>
            <p className="text-xs text-white/40 uppercase mt-1">
              {video.subtitle}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
function MarketingCaseStudies({ studies }: { studies: CaseStudy[] }) {
  return (
    <div className="flex flex-col gap-8">
      {studies.map((study, i) => (
        <div
          key={`${study.company}-${i}`}
          className={`relative rounded-3xl overflow-hidden border border-white/8 bg-cover bg-center p-8 md:p-10 lg:py-14 lg:pl-14 lg:pr-0`}
          style={{ backgroundImage: `url(${study.accent})` }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 rounded-full overflow-hidden border border-white/15">
                  <Image
                    src={study.logo}
                    alt={study.company}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-medium text-white/60 tracking-wider uppercase">
                  {study.company}
                </span>
              </div>

              {/* Heading */}
              <h3 className="font-primary text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-white leading-tight whitespace-pre-line">
                {study.heading}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/60 max-w-lg">
                {study.description}
              </p>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
                {study.services.map((svc) => (
                  <div key={svc} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00A1A5]" />
                    <span className="text-xs text-white/50 font-medium">
                      {svc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Images */}
            <div className="relative flex items-center justify-end lg:-mr-8 xl:-mr-12">
              {/* Main laptop image */}
              <div className="relative ml-auto w-[112%] max-w-none aspect-[4/3]">
                <Image
                  src={study.images[0]}
                  alt={`${study.heading} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-right"
                />
              </div>
              {/* Secondary phone/tablet image */}
              {study.images[1] && (
                <div className="hidden sm:block absolute -bottom-4 right-0 lg:right-2 xl:right-4 w-[40%] aspect-[3/4] rounded-xl overflow-hidden border-2 border-black/40 shadow-2xl">
                  <Image
                    src={study.images[1]}
                    alt={`${study.heading} mobile preview`}
                    fill
                    sizes="200px"
                    className="object-cover object-right"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
