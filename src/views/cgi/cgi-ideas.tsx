"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import PopUp from "@/components/ui/popup";

const TRENDING_ITEMS = [
  {
    title: "Burger O Clock",
    img: "/cgi/burger-o-clockp.webp",
    video: "/cgi1.mp4",
  },
  {
    title: "DOG CHOW",
    img: "/cgi/piza-hits.webp",
    video: "/cgi2.mp4",
  },
  {
    title: "Burger O Clock",
    img: "/cgi/burger-o-clockp.webp",
    video: "/cgi1.mp4",
  },
  {
    title: "DOG CHOW",
    img: "/cgi/piza-hits.webp",
    video: "/cgi2.mp4",
  },
];

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
    <section className="bg-black py-20 lg:py-40">
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
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="absolute inset-0 z-10 object-cover"
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
