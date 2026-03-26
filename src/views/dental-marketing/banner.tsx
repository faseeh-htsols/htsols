"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[url(/dental/banner-bgs.webp)] bg-center bg-cover pb-36 ">
        {/* Background overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0" /> */}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5  pt-30 pb-24 md:pb-24 md:pt-34 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
              Grow Your Dental Practice <br />
              with Premium Digital <br />
              Marketing Solutions
            </h1>

            <p className="mt-6 max-w-xl text-white/80 text-base lg:text-lg">
              We are a Mississauga-based agency serving dentists across Canada.
              Our mission is simple: helping your dental practice attract and
              retain more patients through industry-specific digital strategies.
            </p>

            <Link href="#contact-us" className="mt-8 inline-flex items-center gap-3 bg-white text-black pl-6 pr-3 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              <span>Book a Free Discovery Call</span>
              <span className="w-8 h-8 rounded-full bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] flex items-center justify-center">
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.9736 9.24778C14.019 9.2188 14.0565 9.17882 14.0824 9.13155C14.1083 9.08428 14.1219 9.03124 14.1219 8.97732C14.1219 8.92341 14.1083 8.87037 14.0824 8.8231C14.0565 8.77582 14.019 8.73585 13.9736 8.70687L0.370647 0.0343148C0.328172 0.00747582 0.277847 -0.00415531 0.227902 0.00132384C0.177958 0.00680299 0.131352 0.0290681 0.095706 0.0644773C0.0600603 0.0998866 0.0374853 0.146344 0.0316738 0.19625C0.0258622 0.246157 0.0371582 0.296558 0.0637138 0.339211L5.30673 8.68479C5.36178 8.77243 5.39099 8.87382 5.39099 8.97731C5.39099 9.08081 5.36178 9.1822 5.30673 9.26983L0.050701 17.6361C-0.101012 17.8776 0.119476 18.0805 0.295505 17.9682L13.9736 9.24778Z" fill="white" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/dental/banner.webp"
              alt="Dental website mockup"
              width={500}
              height={500}
              className="w-full h-[600px] object-contain"
            />
          </div>
        </div>

        {/* Bottom Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64 C240,128 480,0 720,16 960,32 1200,96 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </section>
    </div>
  );
}
