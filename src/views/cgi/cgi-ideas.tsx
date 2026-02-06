"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import PopUp from "@/components/ui/popup";

const TRENDING_ITEMS = [
  {
    title: "Burger O Clock",
    img: "/cgi/burger-o-clockp.png",
    video: "/cgi1.mp4",
  },
  {
    title: "DOG CHOW",
    img: "/cgi/piza-hits.png",
    video: "/cgi2.mp4",
  },
  {
    title: "Burger O Clock",
    img: "/cgi/burger-o-clockp.png",
    video: "/cgi1.mp4",
  },
  {
    title: "DOG CHOW",
    img: "/cgi/piza-hits.png",
    video: "/cgi2.mp4",
  },
];

function PlayBadge() {
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-black/20 backdrop-blur-[2px]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M9 7.5v9l8-4.5-8-4.5Z" fill="white" fillOpacity="0.9" />
        </svg>
      </span>
    </span>
  );
}

export default function CgiIdeasSection() {
  const [open, setOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const openPopup = (src: string) => {
    setActiveSrc(src);
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
    setActiveSrc(null);
  };
  return (
    <section className="bg-black py-10">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <HeadingTwo>Get Your Brands CGI Idea Right away!</HeadingTwo>
        </div>

        {/* Filters */}
        <div className="mt-6 grid lg:grid-cols-3 gap-3 md:gap-4">
          {/* <div className="flex w-full md:w-auto gap-3 md:gap-4"></div> */}
          <select
            className="h-9 w-full bg-transparent text-white/90 text-sm px-3
                         border border-white/25 rounded-sm outline-none"
            defaultValue=""
          >
            <option value="" className="bg-black">
              lorem ipsum
            </option>
            <option value="1" className="bg-black">
              Option 1
            </option>
            <option value="2" className="bg-black">
              Option 2
            </option>
          </select>

          <select
            className="h-9 w-full  bg-transparent text-white/90 text-sm px-3
                         border border-white/25 rounded-sm outline-none"
            defaultValue=""
          >
            <option value="" className="bg-black">
              lorem ipsum
            </option>
            <option value="1" className="bg-black">
              Option 1
            </option>
            <option value="2" className="bg-black">
              Option 2
            </option>
          </select>

          <button
            type="button"
            className="h-9 w-full  rounded-sm text-xs font-semibold uppercase tracking-wide text-white
                       bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] hover:opacity-95 transition"
          >
            VIEW OUR CGI VIDEOS
          </button>
        </div>

        {/* Trending */}
        <div className="mt-6">
          <h3 className="text-white font-primary text-xl uppercase tracking-wider">
            TRENDING
          </h3>

          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRENDING_ITEMS.map((item, index) => (
              <article
                key={index}
                className={["card relative", "flex items-center", "group"].join(
                  " ",
                )}
              >
                {/* image */}
                <div className={`relative w-full `}>
                  <button
                    onClick={() => openPopup(item.video)}
                    className={`block relative w-full h-full  overflow-hidden `}
                  >
                    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className={`absolute inset-0 h-full w-full z-10 object-cover`}
                        loading="lazy"
                        // quality={100}
                      />
                      <div className="absolute top-1/2 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Image
                          src={"/cgi/play-button.svg"}
                          width={70}
                          height={70}
                          className="w-[70px] h-[70px] relative"
                          alt="image"
                        />
                      </div>
                    </div>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
      <PopUp open={open} src={activeSrc} onClose={closePopup} />
    </section>
  );
}
