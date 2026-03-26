"use client";

import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import { useEffect, useMemo, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const gradientBtn =
  "bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]";

export type LinkedInPost = {
  id: string;
  text: string;
  publishedAt: string | null;
  url: string | null;
  likes: number;
  comments: number;
  reposts: number;
  image: string | null;
  article: { title: string; url: string; image: string | null } | null;
};

function timeAgo(dateStr: string | null): string {
  if (!dateStr) return "";
  const t = new Date(dateStr).getTime();
  if (Number.isNaN(t)) return "";
  const diff = Date.now() - t;
  const m = Math.floor(diff / 60_000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  return `${Math.floor(d / 30)}mo ago`;
}

function truncate(text: string, max = 240) {
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

function PostCard({ post }: { post: LinkedInPost }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = post.text.length > 240;

  return (
    <div className="flex h-full min-h-[280px] flex-col rounded-2xl border border-white/10 bg-black/60 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-6">
      <div className="mb-4 flex items-start gap-3 border-b border-white/10 pb-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold tracking-tight text-white ${gradientBtn}`}>
          in
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block rounded-full bg-white/10 px-2.5 py-0.5 font-primary text-[10px] font-semibold uppercase tracking-wider text-white/90">
              LinkedIn
            </span>
            {post.publishedAt && (
              <span className="text-xs text-white/45">
                {timeAgo(post.publishedAt)}
              </span>
            )}
          </div>
        </div>
        {post.url && (
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-white/40 transition hover:text-[#00A1A5]"
            aria-label="Open post on LinkedIn">
            <ExternalIcon className="h-4 w-4" />
          </a>
        )}
      </div>

      {post.text ? (
        <div className="min-h-0 flex-1 text-sm leading-relaxed text-white/85">
          <p className="whitespace-pre-line">
            {expanded || !needsTruncation ? post.text : truncate(post.text)}
          </p>
          {needsTruncation && (
            <button
              type="button"
              className="mt-2 font-primary text-xs font-semibold uppercase tracking-wide text-[#00A1A5] hover:underline"
              onClick={() => setExpanded((v) => !v)}>
              {expanded ? "Show less" : "See more"}
            </button>
          )}
        </div>
      ) : null}

      {post.image ? (
        <div className="mt-4 -mx-1 overflow-hidden rounded-xl border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt=""
            className="max-h-52 w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}

      {post.article ? (
        <a
          href={post.article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-[#00838A]/50 hover:bg-white/10">
          {post.article.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.article.image}
              alt=""
              className="h-14 w-14 shrink-0 rounded-lg object-cover"
              loading="lazy"
            />
          ) : null}
          <span className="line-clamp-3 text-left text-xs font-medium text-white/90">
            {post.article.title}
          </span>
        </a>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-xs text-white/50">
        <span>👍 {post.likes.toLocaleString()}</span>
        <span>💬 {post.comments.toLocaleString()}</span>
        <span>🔁 {post.reposts.toLocaleString()}</span>
      </div>
    </div>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function LinkedInPosts() {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/linkedin-posts");
        const data = (await res.json()) as {
          posts?: LinkedInPost[];
          error?: string;
        };
        if (!res.ok) {
          throw new Error(
            data.error ?? `Could not load posts (${res.status}).`,
          );
        }
        if (!cancelled) setPosts(data.posts ?? []);
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error ? e.message : "Could not load posts.",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const canLoop = posts.length > 1;

  const swiperModules = useMemo(() => [Pagination, Autoplay], []);

  return (
    <DoubleCurves
      up
      className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_-5px,100%_97%,0_100%)]">
      <section className="bg-tertiary py-20 lg:py-40">
        <Container>
          <p
            className={`mb-3 text-center font-primary text-sm font-semibold uppercase tracking-[0.2em] ${gradientBtn} bg-clip-text text-transparent`}>
            LinkedIn post
          </p>
          <HeadingTwo className="mb-10 text-center" span="Posts">
            Latest
          </HeadingTwo>

          {loading ? (
            <div className="mx-auto max-w-xl space-y-4 rounded-2xl border border-white/10 bg-black/40 p-8">
              <div className="h-4 w-1/3 animate-pulse rounded bg-white/10" />
              <div className="h-3 w-full animate-pulse rounded bg-white/10" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-white/10" />
              <div className="h-32 animate-pulse rounded-xl bg-white/5" />
            </div>
          ) : error ? (
            <p className="text-center text-sm text-white/50">{error}</p>
          ) : posts.length === 0 ? (
            <p className="text-center text-sm text-white/50">
              No LinkedIn posts to show yet.
            </p>
          ) : (
            <div className="ceo-linkedin-swiper mx-auto max-w-2xl">
              <Swiper
                modules={swiperModules}
                slidesPerView={1}
                spaceBetween={20}
                loop={canLoop}
                autoplay={
                  canLoop
                    ? {
                        delay: 5500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }
                    : false
                }
                pagination={{ clickable: true }}
                className="pb-12!">
                {posts.map((post) => (
                  <SwiperSlide key={post.id} className="h-auto!">
                    <PostCard post={post} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </Container>

        <style jsx global>{`
          .ceo-linkedin-swiper .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.35);
            opacity: 1;
          }
          .ceo-linkedin-swiper .swiper-pagination-bullet-active {
            background: #00a1a5;
            opacity: 1;
          }
        `}</style>
      </section>
    </DoubleCurves>
  );
}
