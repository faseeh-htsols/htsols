"use client";
import React, { useRef } from "react";
import { IRelatedBlog } from "./main";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import type { Swiper as SwiperInstance } from "swiper";
import Container from "@/components/ui/container";

// Move Card component outside
const Card = ({ post }: { post: IRelatedBlog }) => {
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
    <div className="p-1.5 rounded-lg bg-secondary h-full flex flex-col">
      <div className="mb-3">
        <img
          src={post.pictureUrl}
          alt={post.title}
          className="rounded-md w-full h-[250px] object-cover"
        />
      </div>
      <div className="px-1 pb-3 flex flex-col flex-1">
        <p className="text-primary uppercase mb-1">
          {formatDate(post.scheduledDate)}
        </p>
        <h2 className="text-[22px] mb-3 line-clamp-2">{post.title}</h2>
        <div className="mt-auto">
          <Link
            href={`/blog/${post.slug}`}
            className="w-full bg-primary text-center text-secondary uppercase px-4 py-2 rounded-lg inline-block">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

// Move Heading component outside
const Heading = () => (
  <h2 className="text-center uppercase text-[40px] text-secondary font-bold mb-8 tracking-wide">
    Further reading
  </h2>
);

const RelatedBlogs = ({ posts }: { posts?: IRelatedBlog[] }) => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  if (!posts || posts.length === 0) return null;

  const count = posts.length;

  if (count === 1) {
    return (
      <div className="py-10 bg-assistant">
        <Container>
          <Heading />
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <Card post={posts[0]} />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  // 2 posts – two-up
  if (count === 2) {
    return (
      <div className="py-10 bg-assistant">
        <Container>
          <Heading />
          <div className="flex gap-6 flex-wrap justify-center">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="w-full lg:w-[calc(50%-12px)] max-w-[480px]">
                <Card post={post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  // 3 posts – three-up
  if (count === 3) {
    return (
      <div className="py-10 bg-assistant">
        <Container>
          <Heading />
          <div className="flex gap-6 flex-wrap">
            {posts.map((post) => (
              <div key={post.slug} className="w-full md:w-[calc(33%-13px)]">
                <Card post={post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  // 4+ posts – Swiper with *manual* custom nav buttons (no default arrows)
  return (
    <div className="py-10 bg-assistant">
      <Container>
        <Heading />
        <div className="relative">
          {/* LEFT custom button */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="cursor-pointer border border-secondary h-[40px] w-[40px] flex justify-center items-center rounded-full"
              aria-label="Previous">
              <Image
                src={"/left-arrow-blog.svg"}
                alt="arrow"
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
              />
            </button>
          </div>

          {/* Swiper */}
          <div className="px-[50px]">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="px-6 md:px-10">
              {posts.map((post) => (
                <SwiperSlide key={post.slug}>
                  <Card post={post} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT custom button */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-pointer border border-secondary h-[40px] w-[40px] flex justify-center items-center rounded-full"
              aria-label="Next">
              <Image
                src={"/right-arrow-blog.svg"}
                alt="arrow"
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
              />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RelatedBlogs;
