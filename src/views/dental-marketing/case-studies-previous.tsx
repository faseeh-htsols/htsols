"use client";

import HeadingTwo from "@/components/ui/heading-two";
import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import Container from "@/components/ui/container";

const data = [
  {
    src: "/dental/case1.webp",
    alt: "image",
  },
  {
    src: "/dental/case2.webp",
    alt: "image",
  },
  {
    src: "/dental/case3.webp",
    alt: "image",
  },
  {
    src: "/dental/case4.webp",
    alt: "image",
  },
  {
    src: "/dental/case5.webp",
    alt: "image",
  },
];

const CaseStudiesPrevious = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-white py-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="w-full">
            <HeadingTwo className="text-black! mb-6">
              Case Studies And Previous Work
            </HeadingTwo>

            <p className="text-black mb-8 font-open-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <button className="border border-[#0F8B8D] rounded-full pl-6 pr-2 py-2 flex items-center gap-4 text-black font-medium text-sm hover:bg-[#f7f7f7] transition">
              <span>Book a Free Discovery Call</span>
              <span className="w-8 h-8 rounded-full bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] flex items-center justify-center">
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.9736 9.24778C14.019 9.2188 14.0565 9.17882 14.0824 9.13155C14.1083 9.08428 14.1219 9.03124 14.1219 8.97732C14.1219 8.92341 14.1083 8.87037 14.0824 8.8231C14.0565 8.77582 14.019 8.73585 13.9736 8.70687L0.370647 0.0343148C0.328172 0.00747582 0.277847 -0.00415531 0.227902 0.00132384C0.177958 0.00680299 0.131352 0.0290681 0.095706 0.0644773C0.0600603 0.0998866 0.0374853 0.146344 0.0316738 0.19625C0.0258622 0.246157 0.0371582 0.296558 0.0637138 0.339211L5.30673 8.68479C5.36178 8.77243 5.39099 8.87382 5.39099 8.97731C5.39099 9.08081 5.36178 9.1822 5.30673 9.26983L0.050701 17.6361C-0.101012 17.8776 0.119476 18.0805 0.295505 17.9682L13.9736 9.24778Z" fill="white" />
                </svg>

              </span>
            </button>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-[360px] overflow-hidden">
              <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                spaceBetween={0}
                allowTouchMove={true}
                loop={true}
                className="case-studies-swiper w-full overflow-hidden"
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index} className="w-full!">
                    <div className="flex justify-center w-full overflow-hidden">
                      <Image
                        src={item.src}
                        width={360}
                        height={430}
                        alt={item.alt}
                        className="w-full h-auto object-cover max-h-[280px] block"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Custom Buttons */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 rounded-full border border-[#020202] flex items-center justify-center bg-white group hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] hover:border-0 hover:cursor-pointer"
              >
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  className="fill-current text-[#020202] group-hover:text-white transition"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.147512 9.24778C0.102052 9.2188 0.0646305 9.17882 0.0387068 9.13155C0.0127831 9.08428 -0.000806808 9.03124 -0.000806808 8.97732C-0.000806808 8.92341 0.0127831 8.87037 0.0387068 8.8231C0.0646305 8.77582 0.102052 8.73585 0.147512 8.70687L13.7504 0.0343148C13.7929 0.00747582 13.8432 -0.00415531 13.8932 0.00132384C13.9431 0.00680299 13.9897 0.0290681 14.0254 0.0644773C14.061 0.0998866 14.0836 0.146344 14.0894 0.19625C14.0952 0.246157 14.0839 0.296558 14.0574 0.339211L8.81437 8.68479C8.75931 8.77243 8.73011 8.87382 8.73011 8.97731C8.73011 9.08081 8.75931 9.1822 8.81437 9.26983L14.0704 17.6361C14.2221 17.8776 14.0016 18.0805 13.8256 17.9682L0.147512 9.24778Z" />
                </svg>

              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[#020202] hover:border-0 bg-white hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] group hover:cursor-pointer"
              >
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  className="fill-current text-[#202020] group-hover:text-white transition"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9736 9.24778C14.019 9.2188 14.0565 9.17882 14.0824 9.13155C14.1083 9.08428 14.1219 9.03124 14.1219 8.97732C14.1219 8.92341 14.1083 8.87037 14.0824 8.8231C14.0565 8.77582 14.019 8.73585 13.9736 8.70687L0.370647 0.0343148C0.328172 0.00747582 0.277847 -0.00415531 0.227902 0.00132384C0.177958 0.00680299 0.131352 0.0290681 0.095706 0.0644773C0.0600603 0.0998866 0.0374853 0.146344 0.0316738 0.19625C0.0258622 0.246157 0.0371582 0.296558 0.0637138 0.339211L5.30673 8.68479C5.36178 8.77243 5.39099 8.87382 5.39099 8.97731C5.39099 9.08081 5.36178 9.1822 5.30673 9.26983L0.050701 17.6361C-0.101012 17.8776 0.119476 18.0805 0.295505 17.9682L13.9736 9.24778Z"
                  />
                </svg>

              </button>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default CaseStudiesPrevious;