"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  title: string;
  company?: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
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
    title: "Marketing Director",
    content:
      "The team's attention to detail and commitment to excellence is unmatched. Our new website has significantly improved our conversion rates and user engagement. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "MICHAEL CHEN",
    title: "CTO",
    content:
      "Exceptional technical expertise combined with creative vision. HtSolutions delivered a robust, scalable solution that perfectly aligns with our business goals and user needs.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "EMILY RODRIGUEZ",
    title: "Founder",
    content:
      "From discovery to launch, the process was seamless. The team was professional, responsive, and genuinely invested in our success. The results speak for themselves!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "DAVID THOMPSON",
    title: "Product Manager",
    content:
      "Working with HtSolutions transformed our digital presence. Their strategic approach and design expertise helped us stand out in a competitive market. Outstanding work!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary to-transparent" />
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary to-transparent" />

      {/* Vertical "Testimonials" text on left */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <span className="text-white/20 text-sm uppercase tracking-[0.8em] font-medium">
          Testimonials
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            TESTIMONIALS THAT <br className="hidden md:block" />
            SPEAK TO OUR{" "}
            <span className="relative inline-block">
              RESULTS
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></span>
            </span>
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Read through our testimonials to see why our clients love working
            with us and how we can help you achieve your business goals through
            creative and effective design.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-embla" ref={emblaRef}>
          <div className="testimonials-embla__container">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonials-embla__slide">
                <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-8 h-full flex flex-col relative">
                  {/* Quotation mark */}
                  <svg
                    width="40"
                    height="32"
                    viewBox="0 0 40 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary mb-6"
                  >
                    <path
                      d="M0 17.92C0 11.52 1.6 6.4 4.8 2.56C8.05333 0.853333 11.3067 0 14.56 0C15.7333 0 16.6933 0.213333 17.44 0.64C18.24 1.01333 18.64 1.76 18.64 2.88C18.64 4 18.24 4.77333 17.44 5.2C16.6933 5.62667 15.7333 5.84 14.56 5.84C11.7867 5.84 9.30667 6.53333 7.12 7.92C4.98667 9.30667 3.92 11.52 3.92 14.56H7.84C10.5067 14.56 12.6133 15.3067 14.16 16.8C15.76 18.24 16.56 20.2667 16.56 22.88C16.56 25.4933 15.76 27.5733 14.16 29.12C12.6133 30.6133 10.5067 31.36 7.84 31.36C5.17333 31.36 3.04 30.6133 1.44 29.12C-0.106667 27.5733 -0.533333 25.4933 -0.533333 22.88L0 17.92ZM23.44 17.92C23.44 11.52 25.04 6.4 28.24 2.56C31.4933 0.853333 34.7467 0 38 0C39.1733 0 40.1333 0.213333 40.88 0.64C41.68 1.01333 42.08 1.76 42.08 2.88C42.08 4 41.68 4.77333 40.88 5.2C40.1333 5.62667 39.1733 5.84 38 5.84C35.2267 5.84 32.7467 6.53333 30.56 7.92C28.4267 9.30667 27.36 11.52 27.36 14.56H31.28C33.9467 14.56 36.0533 15.3067 37.6 16.8C39.2 18.24 40 20.2667 40 22.88C40 25.4933 39.2 27.5733 37.6 29.12C36.0533 30.6133 33.9467 31.36 31.28 31.36C28.6133 31.36 26.48 30.6133 24.88 29.12C23.3333 27.5733 22.9067 25.4933 22.9067 22.88L23.44 17.92Z"
                      fill="currentColor"
                      opacity="0.3"
                    />
                  </svg>

                  {/* Content */}
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 grow">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wider">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/50 text-xs uppercase tracking-wider">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L6 10L12 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4L14 10L8 16"
                stroke="currentColor"
                strokeWidth="2"
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
