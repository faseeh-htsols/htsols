"use client";

import React, { useRef } from "react";
import Container from "@/components/ui/container";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeadingTwo from "@/components/ui/heading-two";

gsap.registerPlugin(ScrollTrigger);

type Offering = {
  title: string;
  desc: string;
  cta?: string;
};

const OFFERINGS: Offering[] = [
  {
    title: "CGI / VFX Mixed Reality Videos",
    desc: "Blend reality with CGI magic. Our mixed reality videos combine live footage with stunning VFX, creating viral content that captivates audiences.",
  },
  {
    title: "3D Animation Videos",
    desc: "Captivating 3D animations that bring your brand to life. From product reveals to explainers, we create scroll-stopping content that converts.",
    cta: "Learn more",
  },
  {
    title: "Immersive 3D Billboard Videos",
    desc: "Dominate outdoor advertising with jaw-dropping 3D billboard content in up to 8K. Create viral street moments that turn passersby into amplifiers.",
  },
  {
    title: "CGI / VFX Mixed Reality Videos",
    desc: "Blend reality with CGI magic. Our mixed reality videos combine live footage with stunning VFX, creating viral content that captivates audiences.",
  },
  {
    title: "3D Animation Videos",
    desc: "Captivating 3D animations that bring your brand to life. From product reveals to explainers, we create scroll-stopping content that converts.",
    cta: "Learn more",
  },
  {
    title: "Immersive 3D Billboard Videos",
    desc: "Dominate outdoor advertising with jaw-dropping 3D billboard content in up to 8K. Create viral street moments that turn passersby into amplifiers.",
  },
];

export default function OfferingsPinnedEllipse() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current || !stageRef.current) return;

      const count = OFFERINGS.length;
      const step = 360 / count;

      // ellipse radii (tuned to screenshot style)
      const radii = { x: 520, z: 300 };

      const setRadii = () => {
        const w = stageRef.current!.getBoundingClientRect().width;
        const isMobile = w < 768;
        radii.x = isMobile ? 320 : 520; // width
        radii.z = isMobile ? 190 : 300; // depth
      };

      const render = (rotDeg: number) => {
        const rx = radii.x;
        const rz = radii.z;

        for (let i = 0; i < cardRefs.current.length; i++) {
          const el = cardRefs.current[i];
          if (!el) continue;

          const angleDeg = i * step + rotDeg;
          const angleRad = (angleDeg * Math.PI) / 180;

          // ellipse position
          const x = Math.sin(angleRad) * rx;
          const z = Math.cos(angleRad) * rz;

          // depth 0..1 (front=1, back=0)
          const depth = (z + rz) / (2 * rz);

          // ✅ front 3 stronger, back fades
          const opacity = 0.18 + Math.pow(depth, 1.55) * 0.82;
          const scale = 0.92 + depth * 0.1;

          // ✅ FIX your red-line issue:
          // back cards were visually "higher" -> push back DOWN a bit
          const y = (1 - depth) * 22; // back gets +22px, front gets 0px

          // ✅ card tilt like screenshot (not fully facing out)
          const tilt = angleDeg * 0.85;

          el.style.opacity = String(opacity);
          el.style.zIndex = String(Math.round(depth * 1000));
          el.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) rotateY(${tilt}deg) scale(${scale})`;

          // optional: subtle brightness for front
          el.style.filter = `brightness(${0.7 + depth * 0.35})`;
        }
      };

      const rot = { deg: 0 };

      setRadii();
      render(rot.deg);

      const onResize = () => {
        setRadii();
        render(rot.deg);
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", onResize);

      // ✅ PIN + ROTATE ON SCROLL (no carousel buttons)
      const tween = gsap.to(rot, {
        deg: -360, // one full rotation across the pin
        ease: "none",
        onUpdate: () => render(rot.deg),
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1600", // pin length (increase/decrease)
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        window.removeEventListener("resize", onResize);
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-[50px] bg-black"
    >
      {/* background vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,131,138,0.18)_0%,rgba(0,0,0,0.88)_60%,rgba(0,0,0,1)_100%)]" />

      {/* floor grid */}
      <div
        className="pointer-events-none absolute bottom-[-18%] left-1/2 h-[65%] w-[140%] -translate-x-1/2 opacity-60"
        style={{
          transform: "perspective(900px) rotateX(72deg)",
          transformOrigin: "center top",
          backgroundImage:
            "linear-gradient(rgba(0,131,138,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,131,138,0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container>
        <div className="py-16">
          <HeadingTwo className="text-center relative">
            Our Creative Services
          </HeadingTwo>

          {/* stage */}
          <div
            ref={stageRef}
            className="relative mx-auto mt-10 h-[440px] w-full max-w-[1100px]"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "50% 45%",
            }}
          >
            {OFFERINGS.map((item, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) cardRefs.current[i] = el;
                }}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: "340px",
                  height: "340px",
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity, filter",
                  transformOrigin: "50% 65%", // helps keep top edge visually consistent
                }}
              >
                {/* card wrapper */}
                <div
                  className="relative h-full w-full rounded-2xl border border-white/10 bg-[rgba(0,0,0,0.55)] backdrop-blur-sm"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* FRONT */}
                  <div
                    className="absolute inset-0 rounded-2xl p-7"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {/* ✅ smaller text */}
                    <h3 className="whitespace-pre-line text-2xl font-semibold leading-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[70%] text-sm leading-relaxed text-white/70">
                      {item.desc}
                    </p>

                    {item.cta && (
                      <button className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:border-white/40 transition">
                        {item.cta}
                        <span className="inline-flex h-7 w-10 items-center justify-center rounded-full border border-white/20">
                          →
                        </span>
                      </button>
                    )}

                    {/* sphere (replace with your real asset path) */}
                    <div className="pointer-events-none absolute bottom-0 right-0">
                      <Image
                        src="/cgi/half-ball.png"
                        width={140}
                        height={140}
                        className="w-[140px] h-[150px] object-contain object-bottom-right opacity-95"
                        alt="sphere"
                      />
                    </div>
                  </div>

                  {/* BACK (PLAIN) */}
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.92) 100%)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
