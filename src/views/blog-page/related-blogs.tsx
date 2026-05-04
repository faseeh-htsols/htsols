"use client";
import React from "react";
import { IRelatedBlog } from "./main";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import DoubleCurves from "@/components/ui/double-curves";

const Card = ({ post }: { post: IRelatedBlog }) => {
  const tags = post.tags ?? [];
  const authorName = post.authorName ?? "";
  const authorImage = post.authorImage ?? "";
  const description = post.description ?? "";
  const scheduledDate = post.scheduledDate;
  const image = post.pictureUrl || "/blog-banner.webp";
  const title = post.title;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-2xl overflow-hidden transition-all block h-full">
      <div className="relative h-[200px] md:h-[250px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3 mb-3">
          {/* <span className="text-white text-xs uppercase tracking-wider font-semibold bg-linear-to-r from-[#00A1A5]/50 to-[#00A1A5] px-4 py-1.5 rounded-full">
            Category
          </span> */}

          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={`${post.slug}-${index}`}
                className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full border border-gray-700">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-white font-primary text-lg font-bold mb-2 leading-tight line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          {authorName && authorImage ? (
            <div className="flex items-center gap-2">
              <img
                src={authorImage}
                alt={authorName}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-[#00A1A5] text-xs font-medium">
                  {authorName}
                </p>
                <p className="text-gray-400 text-xs">
                  {new Date(scheduledDate || 0).toLocaleDateString()}
                </p>
              </div>
            </div>
          ) : (
            <div />
          )}

          <div className="w-10 h-10 bg-[#00A1A5] group-hover:bg-[#00A1A5]/80 rounded-full flex items-center justify-center transition-all">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Move Heading component outside
const Heading = () => (
  <HeadingTwo className="text-center mb-10">Related Blogs</HeadingTwo>
);

type RelatedBlogsProps = {
  /** Preferred prop name */
  posts?: IRelatedBlog[];
  /** Backwards-compatible prop name */
  post?: IRelatedBlog[];
};

const RelatedBlogs = ({ posts, post }: RelatedBlogsProps) => {
  const items = posts ?? post ?? [];
  const count = items.length;

  const renderShell = (children: React.ReactNode) => (
    <DoubleCurves
      up
      className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)] py-14 bg-black text-white">
      <Container>
        <Heading />
        {children}
      </Container>
    </DoubleCurves>
  );

  if (count === 0) {
    return renderShell(
      <div className="text-center text-white/70">
        Related posts will appear here.
      </div>,
    );
  }

  if (count === 1) {
    return renderShell(
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <Card post={items[0]} />
        </div>
      </div>,
    );
  }

  // 2 posts – two-up
  if (count === 2) {
    return renderShell(
      <div className="flex gap-6 flex-wrap justify-center">
        {items.map((post) => (
          <div
            key={post.slug}
            className="w-full lg:w-[calc(50%-12px)] max-w-[480px]">
            <Card post={post} />
          </div>
        ))}
      </div>,
    );
  }

  // 3+ posts - Swiper autoplay without custom side controls.
  return renderShell(
    <Swiper
      modules={[Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={items.length > 2}>
      {items.map((post) => (
        <SwiperSlide key={post.slug}>
          <Card post={post} />
        </SwiperSlide>
      ))}
    </Swiper>,
  );
};

export default RelatedBlogs;
