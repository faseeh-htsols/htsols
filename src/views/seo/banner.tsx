import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import Button from "@/components/ui/Button";

const SEO_TOPICS = [
  "On-Page SEO",
  "Keyword Research & Strategy",
  "Content Strategy & Copywriting",
  "Link Building & Authority Growth",
  "Local SEO & Maps",
];

const tealGradient =
  "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)";

const Banner = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden pt-14 sm:pt-20 pb-0">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1 flex items-center justify-center lg:justify-start">
            <div className="relative w-full">
              <Image
                src="/seo-banner.png"
                alt="SEO growth metrics and Page 1 Rankings"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-white/70 text-xs sm:text-sm uppercase tracking-widest mb-3">
              Search Engine Optimization Services
            </p>
            <h1 className="font-primary font-semibold text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-4">
              SEO Solutions Built to Solve Real{" "}
              <span className="text-white">Growth Problems</span>
            </h1>
            <div
              className="inline-block px-4 py-2 rounded-lg text-white text-xs sm:text-sm font-medium uppercase tracking-wide mb-6"
              style={{ background: tealGradient }}>
              Focused on Growing Qualified Traffic, Leads, and Revenue
            </div>
            <div className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                When people in Canada search for your services, you want to
                appear first. If your business is missing from Google results,
                most users will choose a competitor who shows up ahead of you.
              </p>
              <p>
                HTSOL Inc. helps Canadian businesses increase search visibility,
                build trust, and turn organic traffic into steady leads. We
                start by fixing the fundamentals, then improve performance month
                after month.
              </p>
              <p>
                Our approach combines technical SEO, content strategy, and
                performance reporting. The goal is simple. Help you rank for the
                keywords that matter, in the markets that matter, across Canada.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/">Get a Free SEO Review</Button>
              <Button href="/" variant="outline">
                Talk to an SEO Expert
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom: SEO topics bar */}
      <div className="mt-10 lg:mt-12">
        <Container>
          <div className="rounded-xl bg-white/5 border border-white/10 px-4 sm:px-6 py-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {SEO_TOPICS.map((topic, i) => (
              <React.Fragment key={topic}>
                {i > 0 && (
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: tealGradient }}
                    aria-hidden
                  />
                )}
                <span className="text-white/90 text-xs sm:text-sm uppercase tracking-wide">
                  {topic}
                </span>
              </React.Fragment>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
