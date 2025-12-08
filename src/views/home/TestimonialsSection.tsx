"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import HeadingTwo from "@/components/ui/heading-two";

interface Testimonial {
  name: string;
  title: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "MICHAEL CHEN",
    title: "CTO",
    content:
      "Exceptional technical expertise combined with creative vision. HtSolutions delivered a robust, scalable solution perfectly aligned with our business needs.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "ALAN BAKER",
    title: "CEO",
    content:
      "Working with HtSolutions has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "SARAH JOHNSON",
    title: "MARKETING DIRECTOR",
    content:
      "The team's attention to detail and commitment to excellence is unmatched. Our new website has significantly improved our conversion rates and user engagement.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "MICHAEL CHEN",
    title: "CTO",
    content:
      "Exceptional technical expertise combined with creative vision. HtSolutions delivered a robust, scalable solution perfectly aligned with our business needs.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "ALAN BAKER",
    title: "CEO",
    content:
      "Working with HtSolutions has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "SARAH JOHNSON",
    title: "MARKETING DIRECTOR",
    content:
      "The team's attention to detail and commitment to excellence is unmatched. Our new website has significantly improved our conversion rates and user engagement.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative bg-[#050505] py-24 overflow-hidden">
      {/* top teal line (same as Figma) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-[2px] w-full max-w-[1600px] bg-gradient-to-r from-transparent via-[#00A1A5] to-transparent" />
      </div>
      {/* bottom teal line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <div className="h-[2px] w-full max-w-[1600px] bg-gradient-to-r from-transparent via-[#00A1A5] to-transparent" />
      </div>

      {/* vertical label on the left */}
      <div className="hidden lg:block absolute left-16 top-1/2 -translate-y-1/2">
        <div className="flex">
          {/* teal strip */}
          <div className="w-[3px] bg-[#00A1A5]" />
          {/* label */}
          <div className="h-[120px] w-[36px] bg-[#181818] border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.7)]">
            <span className="text-[10px] tracking-[0.35em] text-white/70 [writing-mode:vertical-rl] rotate-180">
              TESTIMONIALS
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        {/* heading */}
        <div className="text-center mb-16">
          <HeadingTwo span=" RESULTS">
            TESTIMONIALS THAT
            <br />
            SPEAK TO OUR{" "}
            <span className="relative inline-block">
              <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-[#00A1A5]" />
            </span>
          </HeadingTwo>

          <p className="mt-5  text-[#DBDBDB] max-w-2xl mx-auto leading-relaxed">
            Read through our testimonials to see why our clients love working
            with us and how we can help you achieve your business goals through
            creative and effective design.
          </p>
        </div>

        {/* slider */}
      </div>
      <div className=" mt-6 relative">
        <Swiper
          modules={[Navigation]}
          loop
          centeredSlides
          spaceBetween={32}
          slidesPerGroup={1}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: ".testi-next",
            prevEl: ".testi-prev",
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="relative testimonial-card h-full bg-[#111111] rounded-[24px] px-10 py-10 flex flex-col border border-white/6 shadow-[0_28px_80px_rgba(0,0,0,0.8)]">
                {/* quote icon */}
                <svg
                  width="32"
                  height="26"
                  viewBox="0 0 40 32"
                  fill="none"
                  className="text-[#00A1A5] mb-7"
                >
                  <path
                    d="M0 17.92C0 11.52 1.6 6.4 4.8 2.56C8.05333 0.853333 11.3067 0 14.56 0C15.7333 0 16.6933 0.213333 17.44 0.64C18.24 1.01333 18.64 1.76 18.64 2.88C18.64 4 18.24 4.77333 17.44 5.2C16.6933 5.62667 15.7333 5.84 14.56 5.84C11.7867 5.84 9.30667 6.53333 7.12 7.92C4.98667 9.30667 3.92 11.52 3.92 14.56H7.84C10.5067 14.56 12.6133 15.3067 14.16 16.8C15.76 18.24 16.56 20.2667 16.56 22.88C16.56 25.4933 15.76 27.5733 14.16 29.12C12.6133 30.6133 10.5067 31.36 7.84 31.36C5.17333 31.36 3.04 30.6133 1.44 29.12C-0.106667 27.5733 -0.533333 25.4933 -0.533333 22.88L0 17.92Z"
                    fill="currentColor"
                    opacity="0.5"
                  />
                </svg>

                <p className="text-white/80 text-[12px] leading-relaxed mb-9">
                  {t.content}
                </p>

                {/* author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#00A1A5]/40">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white text-[12px] font-semibold tracking-[0.18em] uppercase">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-white/45 uppercase">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation buttons (exactly like design) */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button className="testi-prev w-10 h-10 rounded-full border border-white/55 flex items-center justify-center text-white hover:border-[#00A1A5] hover:text-[#00A1A5] transition-colors">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M12 4L6 10L12 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="testi-next w-10 h-10 rounded-full border border-white/55 flex items-center justify-center text-white hover:border-[#00A1A5] hover:text-[#00A1A5] transition-colors">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M8 4L14 10L8 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
