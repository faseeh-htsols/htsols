import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Button from "@/components/ui/Button";
import DoubleCurves from "@/components/ui/double-curves";

const FEATURES = [
  "Clean site architecture and internal linking",
  "Core Web Vitals improvements",
  "Schema markup where it makes sense",
  "Image optimization and lazy loading",
  "Indexing and crawlability basics",
  "Metadata, headings, and on-page structure",
];

const SeoReadyWebsite = () => {
  return (
    <DoubleCurves up>
      <section className="relative overflow-hidden pb-10">
        {/* Background */}
        <div className="">
          <Image
            src="/website/seo-ready.jpg"
            alt=""
            className="w-full h-[400px] object-cover"
            width={1000}
            height={600}
          />
          {/* heavy dark overlay + vignette */}
        </div>

        <Container>
          <div className="relative -mt-[200px]">
            <div className="mx-auto max-w-5xl p-px bg-linear-to-b from-[#075B65] to-black rounded-2xl">
              <div className="mx-auto max-w-5xl rounded-2xl bg-black backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.7)] overflow-hidden px-6 py-10 sm:px-10 sm:pt-12 lg:px-14 lg:pt-14">
                {/* subtle inner gradient */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_40%,rgba(0,0,0,0.35)_100%)]" />

                <div className="relative mx-auto max-w-4xl text-center">
                  <HeadingTwo className="text-center">
                    SEO-Ready Websites Built for Performance
                  </HeadingTwo>

                  <p className="mt-4  text-white ">
                    Every HTSOL Inc. website is built with technical SEO
                    foundations baked in from the start, not added as an
                    afterthought. This matters because strong foundations make
                    it easier for search engines to understand your site, and
                    easier for customers to use it.
                  </p>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {FEATURES.map((text) => (
                      <div
                        key={text}
                        className="flex items-center gap-3 rounded-md bg-white/5 px-5 py-3 text-left">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
                        <p className="text-white/85 text-sm leading-snug">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-7 ">
                    This helps your site rank more consistently and makes your
                    paid traffic convert better too.
                  </p>

                  <div className="mt-6 flex justify-center">
                    <Button href="/">BOOK A FREE CONSULTATION</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </DoubleCurves>
  );
};

export default SeoReadyWebsite;
