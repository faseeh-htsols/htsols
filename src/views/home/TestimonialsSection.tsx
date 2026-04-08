"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import HeadingTwo from "@/components/ui/heading-two";
import DoubleCurves from "@/components/ui/double-curves";

interface Testimonial {
  name: string;
  title: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "SAM",
    title: "CO-FOUNDER, MEIIDZ",
    content:
      "Really great experience working together. Faseeh did an excellent job improving and polishing our frontend, with a strong focus on UI quality, performance optimization, and responsive behavior. They worked confidently with React.js and Next.js, translated designs and wireframes into clean, interactive components, and integrated everything smoothly with our RESTful APIs. Load times and overall responsiveness improved noticeably, and everything works consistently across browsers. Solid communication and delivery — would definitely work with them again.",
    image: "/quoteup.svg",
  },
  {
    name: "MUKHLIS",
    title: "TECHAGENCY BANGLA",
    content:
      "Really great experience working together. Faseeh did an excellent job improving and polishing our frontend, with a strong focus on UI quality, performance optimization, and responsive behavior. Load times and overall responsiveness improved noticeably, and everything works consistently across browsers.",
    image: "/quoteup.svg",
  },
  {
    name: "MARISS N.",
    title: "FOUNDER / CEO, SAME DAY BUILDERS, USA",
    content:
      "I engaged Faseeh for marketing initiatives at Same Day Builders, a company specializing in handyman services. Faseeh and his team at HtSol demonstrated remarkable flexibility by accommodating my ever-changing schedule, which is par for the course as a business owner. Moreover, during our initial proposal meeting, Faseeh adeptly addressed all of my questions and objectives. This instilled a level of comfort and confidence in me, affirming that I had made the right decision in partnering with him for our marketing needs. Given the positive experience and results, I've decided to extend my collaboration with HtSol to Meiidz, another venture of mine that offers semi-national house cleaning services. The professionalism and effectiveness Faseeh has shown make me optimistic about the marketing prospect.",
    image: "/quoteup.svg",
  },
  {
    name: "JAMES ASUNA",
    title: "PRINCIPAL DENTIST AND FOUNDER",
    content:
      "Our Account Manager at HtSol was very punctual and very communicative when it came to the campaign. I appreciate his will to understand what the client wants and overall the company to deliver.",
    image: "/quoteup.svg",
  },
  {
    name: "ASIF N.",
    title: "FOUNDER, MARKETING AGENCY, UK",
    content:
      `I was immediately impressed by their prompt and clear communication. They took the time to understand the nuances of my project and asked insightful questions that demonstrated their expertise in the field. This level of professionalism instantly put me at ease and assured me that I was in capable hands.

      Great campaign and managed all aspects of it - really happy with the support and guidance to make it a collaborative approach as it just took a lot of the stress away from me on an area I don't know much about.

      Perfectly executed and really happy with the communication throughout.
      `,
    image: "/quoteup.svg",
  },
  {
    name: "MUSA",
    title: "FOUNDER, TRAVEL AGENCY, BANGLADESH",
    content:
      "Project title: IT Consultation. Had a very engaging and productive meeting session. Good advice. They listened to the problem, tried to see the problem from a broader perspective to give a proper solution / advice. Anyone can can talk to them for IT advice. Best of luck !",
    image: "/quoteup.svg",
  },
  {
    name: "JAEYOON",
    title: "SOUTH KOREA",
    content:
      `It was great to work with HtSol. They very keen to do all the details and ask / noted unclear parts thoroughly. I would Love and already planning to do another Software for healthcare industry with them.
      Helped me a lot with great product!
      `,
    image: "/quoteup.svg",
  },
  {
    name: "YANIS",
    title: "FOUNDER, YOGA STUDIO, FRANCE",
    content:
      "Good and fast never disappointed with HtSol. They work quickly and take time to understand your business and business logic.",
    image: "/quoteup.svg",
  },
];

const TestimonialsSection = () => {
  return (
    <DoubleCurves
      up
      className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_2%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
      innerClassName="-rotate-3 top-3 sm:-rotate-1 md:-rotate-2 md:top-0 xl:-rotate-1 xl:top-0">
      <section className="relative bg-[#050505] py-24 lg:py-40">
        {/* <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] animate-pulse
          "
      ></div> */}
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
              with us and how we can help you achieve your business goals
              through creative and effective design.
            </p>
          </div>

          {/* slider */}
        </div>
        <div className=" mt-6 relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop
            centeredSlides
            spaceBetween={32}
            slidesPerGroup={1}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
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
            className="testimonials-swiper">
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="relative testimonial-card h-full bg-[#111111] rounded-[24px] px-10 py-10 flex flex-col border border-white/6 shadow-[0_28px_80px_rgba(0,0,0,0.8)]">
                  {/* quote icon */}
                  <div className="flex justify-between gap-2 mb-4">
                    <div className="flex gap-3 items-center">
                      <div className="flex h-15 w-15 shrink-0 rounded-full">
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full ">
                          <Image
                            src={"/ceo/user-icon.png"}
                            alt="qoute icon"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-primary text-white uppercase text-[14px] md:text-[16px]">
                          {t.name}
                        </h3>
                        <p className="uppercase text-[#DDDDDD] text-[14px] md:text-[16px]">{t.title}</p>
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
                    className="text-white/80 text-[12px] leading-relaxed mb-9"></p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* navigation buttons (exactly like design) */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button className="testi-prev w-10 h-10 rounded-full border border-white/55 flex items-center justify-center text-white hover:border-[#00A1A5] hover:text-[#00A1A5] transition-colors hover:cursor-pointer">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
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
            <button className="testi-next w-10 h-10 rounded-full border border-white/55 flex items-center justify-center text-white hover:border-[#00A1A5] hover:text-[#00A1A5] transition-colors hover:cursor-pointer">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
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
    </DoubleCurves>
  );
};

export default TestimonialsSection;
