"use client";
import React, { useEffect, useRef, useState } from "react";
import type { IBlogCta } from "./main";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/container";
import Link from "next/link";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

type Section = {
  heading?: string;
  content: string;
};

type Author = {
  name: string;
  pictureUrl: string;
  bio: string;
  scheduledDate: string;
};

function ContentSections({
  sections,
  ctas = [],
  blogTitle,
  author,
  scheduledDate,
}: {
  sections: Section[];
  ctas?: IBlogCta[];
  blogTitle: string;
  author: Author;
  scheduledDate: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const headingRefs = useRef<Record<string, HTMLElement | null>>({});
  const sectionRef = useRef<HTMLElement | null>(null);
  const tocRef = useRef<HTMLDivElement | null>(null);

  const generateId = (text: string | undefined) =>
    text ? text.toLowerCase().replace(/\s+/g, "-") : "";

  useGSAP(
    () => {
      if (!sectionRef.current || !tocRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top+=60",
          end: () => {
            const tocHeight = tocRef.current!.offsetHeight;
            const viewportHeight = window.innerHeight;
            const overflow = Math.max(0, tocHeight - viewportHeight + 100);
            return `bottom-=${overflow}px bottom`;
          },
          pin: tocRef.current,
          invalidateOnRefresh: true,
        });
      });
    },
    { dependencies: [] },
  );

  useEffect(() => {
    const headingElements = Object.values(headingRefs.current);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -40% 0px",
        threshold: 0,
      },
    );

    headingElements.forEach((el) => el && observer.observe(el));

    return () => {
      headingElements.forEach((el) => el && observer.unobserve(el));
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pathname = usePathname();
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ht-solutions.com";
  const shareUrl = `${baseUrl}${pathname}`;
  const shareText = `${blogTitle}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);

  const formatDate = (dateStr: string) =>
    new Date(dateStr)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(" ", " ")
      .replace(" ", ", ");

  return (
    <section
      className="pt-10 pb-20 bg-black text-white relative"
      ref={sectionRef}>
      <div className="hidden xl:block fixed left-6 top-24 z-50">
        <div className="flex flex-col gap-4  p-2 rounded-full">
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-black hover:bg-[#1877F2] flex items-center justify-center transition-all"
            title="Share on Facebook">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </Link>

          {/* Twitter/X */}
          <Link
            href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-black hover:bg-[#1DA1F2] flex items-center justify-center transition-all"
            title="Share on Twitter">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-black hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] flex items-center justify-center transition-all"
            title="Follow on Instagram">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-black hover:bg-[#0A66C2] flex items-center justify-center transition-all"
            title="Share on LinkedIn">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </div>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* MAIN CONTENT */}
          <div className="grow">
            {sections.map((sec, idx) => {
              const id = generateId(sec.heading);
              const sectionCtas = ctas.filter(
                (cta) => cta.sectionIndex === idx,
              );

              return (
                <article key={idx} className="mb-10 last:mb-0">
                  {sec.heading && (
                    <h2
                      id={id}
                      ref={(el) => {
                        if (id) headingRefs.current[id] = el;
                      }}
                      className="scroll-mt-[100px] text-white uppercase font-bold leading-tight mb-4 text-2xl md:text-3xl tracking-wide">
                      {sec.heading}
                    </h2>
                  )}

                  <div
                    className="leading-relaxed text-gray-300 mb-6 [&_p]:mb-4 [&_ul]:list-none [&_ul]:ml-0 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4 [&_li]:relative [&_li]:pl-6 [&_li]:mb-2 [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-2 [&_li]:before:w-2 [&_li]:before:h-2 [&_li]:before:rounded-full [&_li]:before:bg-[#00A1A5] [&_h3]:text-2xl [&_h3]:text-white [&_h3]:font-bold [&_h3]:my-4 [&_h3]:uppercase [&_h4]:text-xl [&_h4]:text-white [&_h4]:font-bold [&_h4]:my-3 [&_h4]:uppercase [&_h5]:text-lg [&_h5]:text-white [&_h5]:font-bold [&_h5]:my-3 [&_h6]:text-base [&_h6]:text-white [&_h6]:font-bold [&_h6]:my-3 [&_a]:text-[#00A1A5] [&_a]:underline [&_strong]:text-white [&_strong]:font-semibold [&_img]:rounded-lg [&_img]:my-4"
                    dangerouslySetInnerHTML={{ __html: sec.content }}
                  />

                  {/* CTAs */}
                  {sectionCtas.map((item) => {
                    const heading = item.cta.heading?.trim() ?? "";
                    const paragraph = item.cta.paragraph?.trim() ?? "";
                    const buttonText = item.cta.buttonText?.trim() ?? "";
                    const buttonHref = item.cta.buttonHref?.trim() ?? "";
                    const imageUrl = item.cta.imageUrl?.trim() ?? "";

                    const hasImage = Boolean(imageUrl);

                    return (
                      <div
                        key={item.id}
                        className="my-8 rounded-2xl relative w-full border border-[#00A1A5]">
                        <div className="flex flex-col md:flex-row">
                          {/* TEXT CONTENT */}
                          <div className=" p-8 flex flex-col justify-center w-full lg:w-[60%]">
                            {heading && (
                              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">
                                {heading}
                              </h3>
                            )}

                            {paragraph && (
                              <p className="text-gray-300 mb-6 leading-relaxed">
                                {paragraph}
                              </p>
                            )}

                            <div className="w-fit">
                              <Button variant="outline" href={buttonHref}>
                                {buttonText || "Learn More"}
                              </Button>
                            </div>
                          </div>
                          {hasImage && (
                            <div className="absolute -right-10 top-1/2 -translate-y-1/2 pointer-events-none">
                              <Image
                                src={imageUrl}
                                alt={heading || "CTA image"}
                                width={400}
                                height={300}
                                quality={100}
                                className="w-[520px] h-full"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </article>
              );
            })}

            {/* AUTHOR DETAILS SECTION */}
            <div className="mt-16 mb-12 border-t border-b border-white  p-8">
              <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-6">
                {/* Author Image */}
                <div className="relative w-40 h-40 p-1 shrink-0">
                  <Image
                    src={author.pictureUrl || "/user-placeholder.webp"}
                    alt={author.name || "Author"}
                    width={128}
                    height={128}
                    unoptimized
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Author Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-white font-primary text-xl font-bold mb-2">
                    {author.name}
                  </h3>

                  {author.bio && (
                    <p className="text-gray-300 leading-relaxed mb-3">
                      {author.bio}
                    </p>
                  )}

                  {scheduledDate && (
                    <div className="flex items-center gap-2 justify-center md:justify-start text-gray-400">
                      <svg
                        className="w-5 h-5 text-[#00A1A5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm">
                        Published on {formatDate(scheduledDate)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* SHARE SECTION - BOTTOM (KEPT AS IS) */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h2 className="text-white text-xl font-bold uppercase mb-6 tracking-wide">
                Share Blog
              </h2>

              <div className="flex flex-wrap gap-4">
                {/* WhatsApp */}
                <Link
                  href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] hover:from-[#25D366]/20 hover:to-[#25D366]/5 border border-gray-800 hover:border-[#25D366] text-white rounded-full transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <span className="font-medium">WhatsApp</span>
                </Link>

                {/* Facebook */}
                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] hover:from-[#1877F2]/20 hover:to-[#1877F2]/5 border border-gray-800 hover:border-[#1877F2] text-white rounded-full transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span className="font-medium">Facebook</span>
                </Link>

                {/* LinkedIn */}
                <Link
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] hover:from-[#0A66C2]/20 hover:to-[#0A66C2]/5 border border-gray-800 hover:border-[#0A66C2] text-white rounded-full transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </Link>

                {/* Twitter/X */}
                <Link
                  href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] hover:from-[#1DA1F2]/20 hover:to-[#1DA1F2]/5 border border-gray-800 hover:border-[#1DA1F2] text-white rounded-full transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <span className="font-medium">Twitter</span>
                </Link>
              </div>
            </div>
          </div>

          {/* TABLE OF CONTENTS - SIDEBAR */}
          <aside className="lg:w-[280px] shrink-0">
            <div
              className="sticky top-24 border border-white rounded-xl p-6"
              ref={tocRef}>
              <h2 className="text-white text-lg font-bold uppercase mb-6 pb-3 border-b border-white tracking-wide">
                Table Of Contents
              </h2>

              <div className="space-y-3">
                {sections
                  .filter((s) => s.heading)
                  .map((item) => {
                    const id = generateId(item.heading);

                    return (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`block w-full text-left text-sm transition-all py-2 px-3 rounded-lg my-2 ${
                          activeId === id
                            ? "bg-linear-to-r from-[#00A1A5]/50 to-[#00A1A5] text-white font-semibold"
                            : "text-gray-400 hover:text-white border border-white hover:bg-white/5"
                        }`}>
                        {item.heading}
                      </button>
                    );
                  })}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export default ContentSections;
