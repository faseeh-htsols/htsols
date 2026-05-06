"use client";

import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import { useEffect, useMemo, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

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

function generateAutoStats(post: LinkedInPost) {
    const seedString = `${post.id}-${post.text}`;
    let hash = 0;

    for (let i = 0; i < seedString.length; i++) {
        hash = (hash * 31 + seedString.charCodeAt(i)) >>> 0;
    }

    return {
        likes: 80 + (hash % 900),
        comments: 5 + (hash % 120),
        reposts: 2 + (hash % 40),
    };
}

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

function truncate(text: string, max = 80) {
    return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

function PostCard({ post }: { post: LinkedInPost }) {
    const [expanded, setExpanded] = useState(false);
    const needsTruncation = post.text.length > 80;

    return (
        <div className="h-full w-full rounded-[10px] bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] p-px shadow-[0_0_2px_0.5px_#00A1A5] overflow-hidden">
            <div className="flex h-full min-h-[280px] flex-col rounded-[10px] bg-tertiary p-5 backdrop-blur-sm md:p-6 w-full">
                <div className="mb-4 flex items-start gap-3">
                    <div className="flex items-start gap-4">
                        <div className="flex h-15 w-15 shrink-0 rounded-full bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] p-px">
                            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-black">
                                <Image
                                    src="/ceo/ceo-linkedin.webp"
                                    alt="LinkedIn"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:min-w-[250px] flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-primary text-white w-full">
                                    Muhammad Faseeh Ullah
                                </h3>
                                <div className="flex flex-col">
                                    <p className="w-full text-[12px]">CEO at HTSol Inc. | Helping Dentists & Dental Practices Grow & Get New Patients</p>
                                    {post.publishedAt && (
                                        <span className="text-[12px] text-white/45">
                                            {timeAgo(post.publishedAt)}
                                        </span>
                                    )}
                                    <Link href="/services" className=" text-[12px]">
                                        <span className="bg-linear-to-r from-[#075B65] to-[#00838A] bg-clip-text text-transparent underline">
                                            View My Services
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-8 w-8 shrink-0">
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                            <Image
                                src="/ceo/linkedIn-img.svg"
                                alt="LinkedIn"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {post.text ? (
                    <div className="min-h-0 flex-1 text-sm leading-relaxed text-white/85">
                        <p className="whitespace-pre-line">
                            <span>
                                {expanded || !needsTruncation ? post.text : truncate(post.text)}
                            </span>
                            {needsTruncation && (
                                <button
                                    type="button"
                                    className="mt-2 font-primary text-xs font-semibold hover:cursor-pointer tracking-wide text-[#787878] hover:underline"
                                    onClick={() => setExpanded((v) => !v)}>
                                    {expanded ? " less" : " more"}
                                </button>
                            )}
                        </p>
                    </div>
                ) : null}

                {post.image ? (
                    <div className="mt-4 -mx-5 md:-mx-6 overflow-hidden">
                        <Image
                            src={post.image}
                            alt=""
                            width={1200}
                            height={800}
                            unoptimized
                            quality={100}
                            className="h-[360px] w-full object-cover"
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
                            <Image
                                src={post.article.image}
                                alt=""
                                width={56}
                                height={56}
                                unoptimized
                                className="h-14 w-14 shrink-0 rounded-lg object-cover"
                            />
                        ) : null}
                        <span className="line-clamp-3 text-left text-xs font-medium text-white/90">
                            {post.article.title}
                        </span>
                    </a>
                ) : null}

                <div className="mt-4">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                <div className="flex h-6 w-6 md:h-7 md:w-7 shrink-0 z-1">
                                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-black">
                                        <Image
                                            src="/ceo/like.svg"
                                            alt="LinkedIn"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex h-6 w-6 md:h-7 md:w-7 shrink-0 -ml-2 z-3">
                                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-black">
                                        <Image
                                            src="/ceo/insight.svg"
                                            alt="LinkedIn"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex h-6 w-6 md:h-7 md:w-7 shrink-0 rounded-full bg-[#FF6171] p-2 -ml-2 z-3">
                                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                                        <Image
                                            src="/ceo/heart.svg"
                                            alt="LinkedIn"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="text-[16px] text-white">{post.likes.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-[16px] text-white">{post.comments.toLocaleString()} comment</p>
                            <p className="text-[16px] text-white">•</p>
                            <p className="text-[16px] text-white">{post.reposts.toLocaleString()} reposts</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs text-white/50">
                    <div className="flex h-6 w-6 shrink-0 z-1">
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden ">
                            <Image
                                src="/ceo/thumb.svg"
                                alt="LinkedIn"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 -ml-2 z-3">
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                            <Image
                                src="/ceo/comment.svg"
                                alt="LinkedIn"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 -ml-2 z-3">
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                            <Image
                                src="/ceo/repost.svg"
                                alt="LinkedIn"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 -ml-2 z-3">
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                            <Image
                                src="/ceo/share.svg"
                                alt="LinkedIn"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                // if (!cancelled) setPosts(data.posts ?? []);

                const updatedPosts = (data.posts ?? []).map((post) => {
                    const autoStats = generateAutoStats(post);

                    return {
                        ...post,
                        likes: autoStats.likes,
                        comments: autoStats.comments,
                        reposts: autoStats.reposts,
                    };
                });

                if (!cancelled) setPosts(updatedPosts);
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

    const swiperModules = useMemo(() => [Autoplay], []);

    return (
        <DoubleCurves up className="-mt-[2.3%] sm:-mt-[3%] md:-mt-[3%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_-10px,100%_100%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_3%,100%_-5px,100%_100%,0_100%)]">
            <section className="bg-black pb-20 pt-20 md:pt-30">
                {/* <Container> */}
                <div className="max-w-8xl mx-auto px-5">
                    {/* <p
                        className={`mb-3 text-center font-primary text-sm font-semibold uppercase tracking-[0.2em] ${gradientBtn} bg-clip-text text-transparent`}>
                        LinkedIn post
                    </p> */}
                    <HeadingTwo className="mb-10 text-center" >
                        Latest From LinkedIn
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
                        <div className="ceo-linkedin-swiper mx-auto w-full max-w-none">
                            <Swiper
                                modules={swiperModules}
                                slidesPerView={1}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 1,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                    },
                                    1280: {
                                        slidesPerView: 3,
                                    },
                                }}
                                spaceBetween={40}
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
                                // pagination={{ clickable: true }}
                                className="">
                                {posts.map((post) => (
                                    <SwiperSlide key={post.id} className="h-auto!">
                                        <a
                                            href={post.url || ""}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Open post on LinkedIn"><PostCard post={post} /></a>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}
                    {/* </Container> */}
                </div>

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
