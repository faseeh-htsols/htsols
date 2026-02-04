// app/components/MetroTabs.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import Wrapper from "@/components/ui/container";
import React from "react";
import Image from "next/image";
import HeadingTwo from "@/components/ui/heading-two";
import PopUp from "@/components/ui/popup";

gsap.registerPlugin(Flip);

type Work = {
  id: number;
  title: string;
  img: string;
  year: string;
  video: string;
  categories: Array<
    | "LOGO & BRAND DESIGN"
    | "PRINT"
    | "SOCIAL MEDIA"
    | "WEBSITE DEVELOPMENT"
    | "PHOTOGRAPHY & VIDEOGRAPHY"
  >;
  w?: number;
  h?: number;
  small?: boolean;
};

const WORKS: Work[] = [
  {
    id: 1,
    title: "Burger O Clock",
    img: "/cgi/burger-o-clockp.png",
    video: "/cgi1.mp4",
    year: "2025",
    categories: ["LOGO & BRAND DESIGN"],
    w: 2,
    h: 2,
  },
  {
    id: 2,
    title: "DOG CHOW",
    img: "/cgi/piza-hits.png",
    video: "/cgi2.mp4",
    year: "2025",
    categories: ["PHOTOGRAPHY & VIDEOGRAPHY", "WEBSITE DEVELOPMENT"],
    small: true,
  },
  {
    id: 3,
    title: "OPEN RUN",
    img: "/cgi/burger-o-clockp.png",
    video: "/cgi1.mp4",
    year: "2025",
    categories: ["PRINT"],
    w: 2,
    small: true,
  },
  {
    id: 4,
    title: "AUDI RS",
    year: "2025",
    img: "/cgi/piza-hits.png",
    video: "/cgi2.mp4",
    categories: ["SOCIAL MEDIA"],
    h: 2,
  },
  {
    id: 5,
    title: "MEN FASHION",
    img: "/cgi/burger-o-clockp.png",
    video: "/cgi1.mp4",
    year: "2025",
    categories: ["WEBSITE DEVELOPMENT"],
  },
  {
    id: 6,
    title: "VISIONAID",
    img: "/cgi/piza-hits.png",
    video: "/cgi2.mp4",
    year: "2025",
    categories: ["PRINT", "LOGO & BRAND DESIGN"],
    small: true,
  },
];

const TABS = [
  "All",
  "LOGO & BRAND DESIGN",
  "PRINT",
  "SOCIAL MEDIA",
  "WEBSITE DEVELOPMENT",
  "PHOTOGRAPHY & VIDEOGRAPHY",
] as const;
type Tab = (typeof TABS)[number];

const PortfolioGrid = () => {
  const [active, setActive] = useState<Tab>("All");
  const gridRef = useRef<HTMLDivElement>(null);
  // 1) add this ref
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const openPopup = (src: string) => {
    setActiveSrc(src);
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
    setActiveSrc(null);
  };
  const filteredIds = useMemo(() => {
    if (active === "All") return new Set(WORKS.map((w) => w.id));
    return new Set(
      WORKS.filter((w) => w.categories.includes(active)).map((w) => w.id),
    );
  }, [active]);

  useEffect(() => {
    const grid = gridRef.current;
    const holder = containerRef.current;
    if (!grid || !holder) return;

    // Measure BEFORE
    const prevH = grid.offsetHeight;

    // Capture current positions
    const state = Flip.getState(grid.querySelectorAll(".card"));

    // Apply filter (show/hide)
    grid.querySelectorAll<HTMLElement>(".card").forEach((el) => {
      const id = Number(el.dataset.id);
      el.classList.toggle("hidden", !filteredIds.has(id));
    });

    // Force reflow & measure AFTER
    // (reading offsetHeight forces layout so `nextH` is correct)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    grid.offsetHeight;
    const nextH = grid.offsetHeight;

    // Lock container height (pixel) so Lenis has a stable doc height
    holder.style.height = `${prevH}px`;

    // Run the FLIP
    Flip.from(state, {
      duration: 0.7,
      ease: "power2.inOut",
      absolute: true,
      stagger: 0.05,
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
        ),
      onLeave: (els) =>
        gsap.to(els, {
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          ease: "power1.in",
        }),
      onComplete: () => {
        // release the lock
        holder.style.height = "";
        // nudge scroll systems
        // If you have a Lenis instance, call lenis.resize()
        // fallback:
        requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
      },
    });

    // Animate container height to the new value in sync
    gsap.to(holder, {
      height: nextH,
      duration: 0.7,
      ease: "power2.inOut",
      // to avoid a jump if something else repaints
      overwrite: true,
    });
  }, [active, filteredIds]);
  // Place this in the component (besides your Flip useEffect)
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Only run on precise pointers (skip touch)
    const precise = window.matchMedia?.("(pointer: fine)")?.matches ?? true;
    if (!precise) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".card"));
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const caption = card.querySelector<HTMLElement>(".caption");
      if (!caption) return;

      // Smooth x/y setters
      const setX = gsap.quickTo(caption, "x", {
        duration: 0.35,
        ease: "power3.out",
      });
      const setY = gsap.quickTo(caption, "y", {
        duration: 0.35,
        ease: "power3.out",
      });

      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const cx = e.clientX - rect.left;
        const cy = e.clientY - rect.top;

        // Normalize to [-1, 1]
        const nx = (cx / rect.width - 0.5) * 2;
        const ny = (cy / rect.height - 0.5) * 2;

        // Movement range (px) — scales a bit with card size, clamped
        const max = Math.max(
          16,
          Math.min(48, Math.min(rect.width, rect.height) * 0.08),
        );

        setX(nx * max);
        setY(ny * max);
      };

      const onLeave = () => {
        gsap.to(caption, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);

      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [active]); // rebind when the visible set changes

  return (
    <div className="bg-assistant text-white">
      <Wrapper>
        {/* Heading block */}
        <div className="pt-16">
          <HeadingTwo className="text-center">OUR WORK Gallery</HeadingTwo>

          {/* Divider */}
          {/* <div className="mt-6 h-px w-full bg-white/10" /> */}

          {/* Tabs row (slash-separated) */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 py-6">
            {TABS.map((t, i) => {
              const isActive = active === t;
              return (
                <div key={t} className="flex items-center">
                  <button
                    onClick={() => setActive(t)}
                    className={[
                      "uppercase text-[14px] tracking-[0.2em] transition-colors",
                      "focus:outline-none font-primary cursor-pointer focus-visible:ring-1 py-2 px-3 focus-visible:ring-white/40",
                      isActive
                        ? "text-white bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
                        : "text-white/60 hover:text-secondary border border-white",
                    ].join(" ")}
                    aria-pressed={isActive}
                  >
                    {t}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <section className="pb-20">
          <div ref={containerRef}>
            <div
              ref={gridRef}
              className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {WORKS.map((w, i) => {
                const colSpan = w.w ? `col-span-${Math.min(w.w, 4)}` : "";
                const rowSpan = w.h ? `row-span-${Math.min(w.h, 4)}` : "";
                return (
                  <article
                    key={w.id}
                    data-id={w.id}
                    className={[
                      "card relative",
                      "flex items-center",
                      "group",
                    ].join(" ")}
                  >
                    {/* image */}
                    <div className={`relative w-full `}>
                      <button
                        onClick={() => openPopup(w.video)}
                        className={`block relative w-full h-full  overflow-hidden `}
                      >
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                          <img
                            src={w.img}
                            alt={w.title}
                            className={`absolute inset-0 h-full w-full z-10 object-cover`}
                            loading="lazy"
                            // quality={100}
                          />
                          <div className="absolute top-1/2 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Image
                              src={"/cgi/play-button.svg"}
                              width={70}
                              height={70}
                              className="w-[70px] h-[70px] relative"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="text-white pt-5 flex flex-col gap-1">
                          <h3 className="text-xl font-primary text-center uppercase">
                            {w.title}
                          </h3>
                          <p className="text-center">{w.year}</p>
                        </div>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </Wrapper>

      <PopUp open={open} src={activeSrc} onClose={closePopup} />
    </div>
  );
};

export default PortfolioGrid;
