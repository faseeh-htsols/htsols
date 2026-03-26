"use client";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const data = [
  {
    image: "/dental/dr-jd.webp",
    para: "Our patient flow improved and we even lowered our marketing spend while getting better results. It was a game-changer for our practice.",
    name: "Dr. J.D.,",
    position: "Dental Practice Partner",
  },
  {
    image: "/dental/dr-jd.webp",
    para: "Our patient flow improved and we even lowered our marketing spend while getting better results. It was a game-changer for our practice.",
    name: "Dr. J.D.,",
    position: "Dental Practice Partner",
  },
  {
    image: "/dental/dr-jd.webp",
    para: "Our patient flow improved and we even lowered our marketing spend while getting better results. It was a game-changer for our practice.",
    name: "Dr. J.D.,",
    position: "Dental Practice Partner",
  },
  {
    image: "/dental/dr-jd.webp",
    para: "Our patient flow improved and we even lowered our marketing spend while getting better results. It was a game-changer for our practice.",
    name: "Dr. J.D.,",
    position: "Dental Practice Partner",
  },
  {
    image: "/dental/dr-jd.webp",
    para: "Our patient flow improved and we even lowered our marketing spend while getting better results. It was a game-changer for our practice.",
    name: "Dr. J.D.,",
    position: "Dental Practice Partner",
  },
];
const ClientsSay = () => {
  return (
    <div className="bg-white py-20 lg:py-40">
      <Container>
        <div>
          <HeadingTwo className="text-black! text-center mb-8">
            What our clients say
          </HeadingTwo>
        </div>
        <div className="max-w-[780px] text-black mx-auto overflow-hidden clients-say-slider">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper pb-10!">
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-6 items-center">
                    <div className="h-0.5 grow bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"></div>
                    <div className="w-[50px]">
                      <Image
                        src={"/dental/qoute.svg"}
                        alt="image"
                        width={55}
                        height={64}
                        className="w-[50px] h-[58px]"
                      />
                    </div>
                    <div className="h-0.5 grow bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"></div>
                  </div>
                  <p className="text-center">{item.para}</p>
                  <div className="flex gap-6 items-center">
                    <div className="h-0.5 grow bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"></div>
                    <div className="w-[50px]">
                      <Image
                        src={"/dental/qoute.svg"}
                        alt="image"
                        width={55}
                        height={64}
                        className="w-[50px] h-[58px]"
                      />
                    </div>
                    <div className="h-0.5 grow bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"></div>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={70}
                      height={70}
                      className="w-[70px] h-[70px] rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-primary text-xl text-center">
                    {item.name}
                  </h3>
                  <p className="text-center">{item.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx global>{`
  .clients-say-slider .swiper {
    padding-bottom: 40px;
  }

  .clients-say-slider .swiper-pagination {
    bottom: 0 !important;
  }

  .clients-say-slider .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background: #ffffff;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .clients-say-slider .swiper-pagination-bullet-active {
    width: 18px;
    height: 18px;
    background: linear-gradient(90deg, #075b65 0%, #00838a 37.02%, #328a99 81.25%);
  }
`}</style>
      </Container>
    </div>
  );
};

export default ClientsSay;
