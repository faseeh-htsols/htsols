"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IBlogtags } from "./main";
import Container from "@/components/ui/container";

gsap.registerPlugin(ScrollTrigger);
type BannerData = {
  title: string;
  image: string;
  description: string;
  authorName: string;
  authorImage: string;
  scheduledDate: string;
  tags?: IBlogtags[];
};
const BannerReuse = ({
  title,
  image,
  description,
  authorName,
  authorImage,
  scheduledDate,
  tags,
}: BannerData) => {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // useGSAP(() => {
  //   // Scroll-based fade and move up animation
  //   gsap.to(contentRef.current, {
  //     y: -100, // Move up by 100px
  //     opacity: 0, // Fade to transparent
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: bannerRef.current,
  //       start: "top top", // when banner hits top of viewport
  //       end: "40% top", // fade completes after 40% scroll
  //       scrub: true, // ties animation to scroll
  //       // onEnter: () => {
  //       //   ScrollTrigger.refresh();
  //       // },
  //     },
  //   });
  // }, []);
  // console.log(tags);
  return (
    <div
      ref={bannerRef}
      className="relative overflow-hidden pt-[120px] sm:pt-[140px] md:pt-[160px] lg:pt-[180px]">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full  bg-cover bg-center ">
        <img src={image} className="w-full h-full object-cover" alt={title} />
      </div>
      <div
        className="relative mt-96 py-6"
        style={{
          background:
            " linear-gradient(142.13deg, rgba(24, 19, 19, 0.493) 1.8%, rgba(24, 19, 19, 0.561) 99.75%)",
          backdropFilter: "blur(10.100000381469727px",
        }}>
        <Container>
          <div className="text-white " ref={contentRef}>
            <div className="">
              <div>
                <span className="text-white text-lg uppercase tracking-wider font-semibold bg-linear-to-r from-[#00A1A5]/50 to-[#00A1A5] px-4 py-1.5 rounded-full">
                  Category
                </span>
                <div className="">
                  <h1
                    className="uppercase mt-5 font-primary text-white  tracking-[2px] font-medium mb-[20px] text-[30px] leading-tight"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  {description && (
                    <p
                      className="  text-[19px]  mb-[20px] text-white"
                      dangerouslySetInnerHTML={{ __html: description }}></p>
                  )}
                </div>
                <div className="flex lg:flex-row flex-col gap-3 justify-between">
                  <div className="flex justify-center gap-6">
                    <div className="flex gap-2 items-center">
                      <div className="w-[70px] h-[70px] rounded-full flex justify-center items-center bg-primary">
                        <img
                          src={authorImage}
                          className="w-[60px] h-[60px] object-contain"
                          alt={authorName}
                        />
                      </div>
                      <h2>{authorName}</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="w-[70px] h-[70px] flex justify-center items-center">
                        <img
                          src="/blog-number.svg"
                          className="w-[70px] h-[70px] object-contain"
                          alt="published date"
                        />
                      </div>
                      <h2>
                        {" "}
                        {new Date(scheduledDate)
                          .toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                          .replace(" ", " ")
                          .replace(" ", ", ")}
                      </h2>
                    </div>
                  </div>
                  {tags?.length ? (
                    <div className="flex flex-wrap justify-center gap-2 self-center">
                      {tags!.map((bt) => (
                        <p
                          key={bt.id}
                          className="text-white inline-block p-2 border border-white rounded-full ">
                          #{bt.tag.name}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BannerReuse;
