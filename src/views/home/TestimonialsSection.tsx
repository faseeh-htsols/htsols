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
      "Exceptional technical expertise combined with creative vision. HtSol Inc. delivered a robust, scalable solution perfectly aligned with our business needs.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "ALAN BAKER",
    title: "CEO",
    content:
      "Working with HtSol Inc. has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!<br/><br/>Working with HtSol Inc. has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations",
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
      "Exceptional technical expertise combined with creative vision. HtSol Inc. delivered a robust, scalable solution perfectly aligned with our business needs.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "ALAN BAKER",
    title: "CEO",
    content:
      "Working with HtSol Inc. has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!",
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
    <section className="relative bg-[#050505] py-24   -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>
      {/* vertical label on the left */}
      <div className="hidden lg:block absolute left-0 top-[27%] -translate-y-1/2">
        <div className="flex">
          {/* teal strip */}
          {/* <div className="w-[3px] bg-[#00A1A5]" /> */}
          {/* label */}
          <div className="h-[130px] w-[36px] bg-[#333333] border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.7)]">
            <span className=" text-white [writing-mode:vertical-rl] rotate-180">
              Testimonials
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

          <p className="mt-5  text-[#DBDBDB] max-w-[700px] mx-auto leading-relaxed">
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
              slidesPerView: 2.1,
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
                <div className="flex justify-between gap-2 mb-4">
                  <div className="flex gap-3 items-center">
                    <div className="w-16 h-15 bg-[#E5E7EC] rounded-full"></div>
                    <div>
                      <h3 className="font-primary text-white uppercase">
                        {t.name}
                      </h3>
                      <p className="uppercase text-[#DDDDDD]">{t.title}</p>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={"/quoteup.svg"}
                      className="w-[45px] h-[45px]"
                      width={45}
                      height={45}
                      alt="qoute icon"
                    />
                  </div>
                </div>

                <p
                  dangerouslySetInnerHTML={{ __html: t.content }}
                  className="text-white/80 text-[12px] leading-relaxed mb-9"
                ></p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation buttons (exactly like design) */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button className="testi-prev w-10 h-10 rounded-full border border-white/55 flex items-center justify-center text-white hover:border-[#00A1A5] hover:text-[#00A1A5] transition-colors">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24"
                cy="24"
                r="23.5"
                transform="matrix(-1 0 0 1 48 0)"
                stroke="white"
              />
              <path
                d="M11.2929 24.7071C10.9024 24.3166 10.9024 23.6834 11.2929 23.2929L17.6569 16.9289C18.0474 16.5384 18.6805 16.5384 19.0711 16.9289C19.4616 17.3195 19.4616 17.9526 19.0711 18.3431L13.4142 24L19.0711 29.6569C19.4616 30.0474 19.4616 30.6805 19.0711 31.0711C18.6805 31.4616 18.0474 31.4616 17.6569 31.0711L11.2929 24.7071ZM36 24V25H12V24V23H36V24Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="testi-next w-10 h-10 rounded-full border border-white/55 flex items-center justify-center text-white hover:border-[#00A1A5] hover:text-[#00A1A5] transition-colors">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="23.5" stroke="white" />
              <path
                d="M36.7071 24.7071C37.0976 24.3166 37.0976 23.6834 36.7071 23.2929L30.3431 16.9289C29.9526 16.5384 29.3195 16.5384 28.9289 16.9289C28.5384 17.3195 28.5384 17.9526 28.9289 18.3431L34.5858 24L28.9289 29.6569C28.5384 30.0474 28.5384 30.6805 28.9289 31.0711C29.3195 31.4616 29.9526 31.4616 30.3431 31.0711L36.7071 24.7071ZM12 24V25H36V24V23H12V24Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
