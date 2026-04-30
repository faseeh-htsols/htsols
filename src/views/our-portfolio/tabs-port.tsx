"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import PopUpYoutube from "@/components/ui/popup-youtube";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  OUR_PORTFOLIO_CASE_STUDIES,
  OUR_PORTFOLIO_CGI_VIDEOS,
  OUR_PORTFOLIO_CUSTOM_DEV_CARDS,
  OUR_PORTFOLIO_DESIGN_CARDS,
  OUR_PORTFOLIO_DEV_CARDS,
  OUR_PORTFOLIO_SEO_CARDS,
  OUR_PORTFOLIO_TABS,
} from "@/constants";
import type {
  OurPortfolioCaseStudy,
  OurPortfolioCgiVideo,
  OurPortfolioDesignCard,
} from "@/constants";
type TabName = (typeof OUR_PORTFOLIO_TABS)[number];
type DesignCard = OurPortfolioDesignCard;
type CgiVideo = OurPortfolioCgiVideo;
type CaseStudy = OurPortfolioCaseStudy;
export default function TabsPort() {
  const [activeTab, setActiveTab] = useState<TabName>("Digital Transformation");
  const [popupSrc, setPopupSrc] = useState<string | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const tabsOuterRef = useRef<HTMLDivElement | null>(null);

  const [tabsMode, setTabsMode] = useState<"normal" | "fixed" | "bottom">("normal");
  const [tabsStyle, setTabsStyle] = useState<React.CSSProperties>({});
  const [tabsHeight, setTabsHeight] = useState(0);

  const openVideo = useCallback((url: string) => {
    setPopupSrc(url);
    setPopupOpen(true);
  }, []);

  const closeVideo = useCallback(() => {
    setPopupOpen(false);
    setPopupSrc(null);
  }, []);

  const scrollToSectionTop = () => {
    if (!tabsOuterRef.current) return;

    const headerOffset = 96;
    const extraGap = tabsHeight + 20;

    const top =
      window.scrollY +
      tabsOuterRef.current.getBoundingClientRect().top -
      headerOffset -
      extraGap;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const updateTabsPosition = () => {
      const section = sectionRef.current;
      const tabs = tabsOuterRef.current;

      if (!section || !tabs) return;

      const headerOffset = 96;
      const sectionRect = section.getBoundingClientRect();
      const tabsRect = tabs.getBoundingClientRect();

      const tabsCurrentHeight = tabsRect.height;
      setTabsHeight(tabsCurrentHeight);

      const containerWidth = tabs.offsetWidth;
      const containerLeft = tabsRect.left;

      const sectionTopReached = sectionRect.top <= headerOffset;
      const sectionBottomReached =
        sectionRect.bottom <= headerOffset + tabsCurrentHeight;

      if (!sectionTopReached) {
        setTabsMode("normal");
        setTabsStyle({});
        return;
      }

      if (sectionTopReached && !sectionBottomReached) {
        const isMobile = window.innerWidth < 768;
        setTabsMode("fixed");
        setTabsStyle({
          position: "fixed",
          top: isMobile ? "76px" : `${headerOffset}px`,
          left: isMobile ? "16px" : `${containerLeft}px`,
          right: isMobile ? "16px" : undefined,
          width: isMobile ? "auto" : `${containerWidth}px`,
          zIndex: 80,
        });
        return;
      }

      setTabsMode("bottom");
      setTabsStyle({
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        zIndex: 80,
      });
    };

    updateTabsPosition();

    window.addEventListener("scroll", updateTabsPosition, { passive: true });
    window.addEventListener("resize", updateTabsPosition);

    return () => {
      window.removeEventListener("scroll", updateTabsPosition);
      window.removeEventListener("resize", updateTabsPosition);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20">
      <Container>
        {/* ── TAB BAR ── */}
        <div
          className="relative mb-14"
          style={{ height: tabsMode === "fixed" ? `${tabsHeight}px` : "auto" }}
        >
          {/* normal/original tabs always mounted */}
          <div
            ref={tabsOuterRef}
            className={tabsMode === "fixed" ? "invisible pointer-events-none" : ""}
          >
            <div className="flex flex-wrap justify-center gap-3 bg-tertiary rounded-[10px] p-4">
              {OUR_PORTFOLIO_TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider  cursor-pointer whitespace-nowrap bg-[#010101] rounded-xl font-primary w-fit
                    ${isActive
                        ? "text-white border border-[#00838A] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
                        : "text-[#636363] hover:text-white border border-tertiary"}
                    `}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* fixed floating tabs */}
          {tabsMode === "fixed" && (
            <div style={tabsStyle}>
              <div className="flex items-center gap-2 bg-[#111111] rounded-2xl p-2 shadow-lg md:gap-3 md:rounded-[20px] md:p-4">
                <button
                  type="button"
                  onClick={scrollToSectionTop}
                  className="shrink-0 h-10 w-10 rounded-xl bg-[#05070d] text-white flex items-center justify-center text-xl hover:cursor-pointer md:h-12 md:w-12 md:rounded-[14px] md:text-2xl"
                >
                  ↑
                </button>

                <div className="flex-1 min-w-0 flex gap-2 overflow-x-auto overscroll-x-contain md:flex-wrap md:justify-center md:gap-3">
                  {OUR_PORTFOLIO_TABS.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
                  relative shrink-0 px-4 py-2.5 text-[10px] sm:text-xs md:px-6 md:py-3 md:text-sm font-semibold uppercase tracking-wider
                  transition-all duration-300 cursor-pointer whitespace-nowrap bg-[#010101] rounded-xl font-primary
                  ${isActive
                            ? "text-white bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
                            : "text-[#636363] hover:text-white"}
                `}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </div>

              </div>
            </div>
          )}

        </div>

        {/* ── TAB CONTENT ── */}
        <div className="min-h-[400px]">
          {/* All Cards */}
          {activeTab === "Digital Transformation" && (
            <div className="space-y-10">
              <PortfolioGrid cards={OUR_PORTFOLIO_DESIGN_CARDS} />
              <PortfolioGrid cards={OUR_PORTFOLIO_DEV_CARDS} />
              <MarketingCaseStudies studies={OUR_PORTFOLIO_CASE_STUDIES} />
              <MarketingCaseStudies studies={OUR_PORTFOLIO_CUSTOM_DEV_CARDS} />
              <MarketingCaseStudies studies={OUR_PORTFOLIO_SEO_CARDS} />
              <CgiGrid videos={OUR_PORTFOLIO_CGI_VIDEOS} onPlay={openVideo} />
            </div>
          )}

          {/* Website Design */}
          {activeTab === "Website Design" && (
            <PortfolioGrid cards={OUR_PORTFOLIO_DESIGN_CARDS} />
          )}

          {/* Website Development */}
          {activeTab === "Website Development" && (
            <PortfolioGrid cards={OUR_PORTFOLIO_DEV_CARDS} />
          )}

          {/* CGI Ads */}
          {activeTab === "CGI Ads" && (
            <CgiGrid videos={OUR_PORTFOLIO_CGI_VIDEOS} onPlay={openVideo} />
          )}

          {/* Digital Marketing */}
          {activeTab === "Digital Marketing" && (
            <MarketingCaseStudies studies={OUR_PORTFOLIO_CASE_STUDIES} />
          )}

          {/* Search Engine Optimization */}
          {activeTab === "Search Engine Optimization" && (
            <MarketingCaseStudies studies={OUR_PORTFOLIO_SEO_CARDS} />
          )}

          {/* Custom Software Dev */}
          {activeTab === "Custom Software Dev" && (
            <MarketingCaseStudies studies={OUR_PORTFOLIO_CUSTOM_DEV_CARDS} />
          )}
        </div>
      </Container>

      {/* YouTube Popup */}
      <PopUpYoutube open={popupOpen} src={popupSrc} onClose={closeVideo} />
    </section>
  );
}

function ScrollScaleCard({
  children,
  i,
}: {
  children: React.ReactNode;
  i: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.9 1", "0.35 1"],
  });

  const startScale = i % 2 === 0 ? 0.7 : 0.6;

  const scale = useTransform(scrollYProgress, [0, 1], [1, startScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div ref={ref} className="w-full h-full">
      <motion.div
        style={{ scale, opacity, y, transformOrigin: "center center" }}
        className="w-full h-full will-change-transform origin-center *:w-full *:h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

function PortfolioGrid({ cards }: { cards: DesignCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <ScrollScaleCard key={`${card.label}-${i}`} i={i}>
          <div
            className="group relative rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/6 transition-all duration-300 hover:border-[#00A1A5]/30 hover:shadow-[0_0_30px_rgba(0,161,165,0.12)] hover:cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden ">
              <Image
                src={card.image}
                alt={card.label}
                width={500}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-500"
              />
            </div>

            {/* Fade color overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(180deg,rgba(7,91,101,0.18)_0%,rgba(0,131,138,0.42)_100%)] shadow-[0_0_24px_rgba(0,131,138,0.35)]" />

            {/* Middle category text */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="px-5 py-2 rounded-full text-white text-sm sm:text-base font-semibold uppercase tracking-wider backdrop-blur-[2px]">
                {card.label}
              </span>
            </div>

            {/* Bottom label bar */}
            <div className="absolute bottom-2 left-5 right-5 px-5 rounded-full bg-white text-black border-b-2 border-[#00A1A5] flex items-center justify-between py-3 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-3">
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
        </ScrollScaleCard>
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
        <ScrollScaleCard key={`${video.title}-${i}`} i={i}>
          <button
            onClick={() => onPlay(video.url)}
            className="group relative rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/6 text-left transition-all duration-300 hover:border-[#00A1A5]/30 hover:shadow-[0_0_30px_rgba(0,161,165,0.12)] cursor-pointer">
            {/* Thumbnail */}
            <div className="relative aspect-9/14 overflow-hidden">
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
        </ScrollScaleCard>
      ))}
    </div>
  );
}
function MarketingCaseStudies({ studies }: { studies: CaseStudy[] }) {
  const serviceDotColors = ["#FFB053", "#BCA1FF"];

  return (
    <div className="flex flex-col gap-8">
      {studies.map((study, i) => (
        <ScrollScaleCard key={`${study.company}-${i}`} i={i}>
          <div
            className={`relative rounded-3xl overflow-hidden border border-white/8 bg-cover bg-center p-8 md:p-10 lg:pl-14 lg:pr-0 ${
              study.imageLayout === "monitor"
                ? "lg:min-h-[480px] lg:py-16"
                : study.imageLayout === "seo"
                  ? "lg:min-h-[390px] lg:py-12"
                  : study.imageLayout === "watch"
                    ? "lg:min-h-[430px] lg:py-14"
                : "lg:py-14"
            }`}
            style={{ backgroundImage: `url(${study.accent})` }}>
            <div
              className={`grid grid-cols-1 gap-10 lg:gap-6 ${
                study.imageLayout === "monitor"
                  ? "lg:grid-cols-[0.92fr_1.08fr] lg:items-start"
                  : study.imageLayout === "seo"
                    ? "lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
                    : study.imageLayout === "watch"
                      ? "lg:grid-cols-[0.58fr_0.42fr] lg:items-center"
                  : "lg:grid-cols-2 items-center"
              }`}>
              <div className={`space-y-6 ${study.imageLayout === "monitor" ? "lg:pt-1" : ""}`}>
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
                  {study.services.map((svc, serviceIndex) => (
                    <div key={svc} className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-[#00A1A5]"
                        style={{
                          backgroundColor: serviceDotColors[serviceIndex],
                        }}
                      />
                      <span className="text-xs text-white/50 font-medium">
                        {svc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Images */}
              <div
                className={
                  study.imageLayout === "monitor"
                    ? "relative flex items-end justify-end lg:absolute lg:inset-y-0 lg:right-0 lg:w-[51%] xl:w-[52%]"
                    : study.imageLayout === "seo"
                      ? "relative flex items-end justify-end lg:absolute lg:inset-y-0 lg:right-0 lg:w-[45%] xl:w-[46%]"
                      : study.imageLayout === "watch"
                        ? "relative flex items-center justify-end lg:absolute lg:right-[4%] lg:top-[-54px] lg:bottom-[-54px] lg:w-[55%] xl:right-[5%] xl:w-[52%]"
                    : "relative flex items-center justify-end lg:-mr-8 xl:-mr-12"
                }>
                {/* Main laptop image */}
                <div
                  className={
                    study.imageLayout === "monitor"
                      ? "relative ml-auto w-full max-w-none aspect-[756/515] lg:w-[110%] xl:w-[108%] lg:translate-x-[2%]"
                      : study.imageLayout === "seo"
                        ? "relative ml-auto w-full max-w-none aspect-[636/462] lg:w-full lg:translate-x-[1%] lg:translate-y-[6%]"
                        : study.imageLayout === "watch"
                          ? "relative ml-auto h-full w-full max-w-none lg:translate-x-[8%]"
                      : "relative ml-auto w-[112%] max-w-none aspect-4/3"
                  }>
                  <Image
                    src={study.images[0]}
                    alt={`${study.heading} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={
                      study.imageLayout === "monitor" ||
                      study.imageLayout === "seo" ||
                      study.imageLayout === "watch"
                        ? "object-contain object-[right_bottom]"
                        : "object-contain object-right"
                    }
                  />
                </div>
                {/* Secondary phone/tablet image */}
                {study.images[1] && (
                  <div className="hidden sm:block absolute -bottom-4 right-0 lg:right-2 xl:right-4 w-[40%] aspect-3/4 rounded-xl overflow-hidden border-2 border-black/40 shadow-2xl">
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
        </ScrollScaleCard>
      ))}
    </div>
  );
}
