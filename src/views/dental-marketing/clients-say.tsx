"use client";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
const data = [
  {
    image: "/dental/dr-jd.png",
    para: "Our patient flow improved and we even lowered our marketing spend while getting better results. It was a game-changer for our practice.",
    name: "Dr. J.D.,",
    position: "Dental Practice Partner",
  },
  {
    image: "/dental/dr-jd.png",
    para: "Our patient flow improved and we even lowered our marketing spend while getting better results. It was a game-changer for our practice.",
    name: "Dr. J.D.,",
    position: "Dental Practice Partner",
  },
  {
    image: "/dental/dr-jd.png",
    para: "Our patient flow improved and we even lowered our marketing spend while getting better results. It was a game-changer for our practice.",
    name: "Dr. J.D.,",
    position: "Dental Practice Partner",
  },
  {
    image: "/dental/dr-jd.png",
    para: "Our patient flow improved and we even lowered our marketing spend while getting better results. It was a game-changer for our practice.",
    name: "Dr. J.D.,",
    position: "Dental Practice Partner",
  },
  {
    image: "/dental/dr-jd.png",
    para: "Our patient flow improved and we even lowered our marketing spend while getting better results. It was a game-changer for our practice.",
    name: "Dr. J.D.,",
    position: "Dental Practice Partner",
  },
];
const ClientsSay = () => {
  return (
    <div className="bg-white py-20">
      <Container>
        <div>
          <HeadingTwo className="!text-black text-center mb-8">
            What our clients say
          </HeadingTwo>
        </div>
        <div className="max-w-[780px] text-black mx-auto overflow-hidden">
          <Swiper className="mySwiper">
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
                  <h3 className="font-primary text-xl text-center">
                    {item.name}
                  </h3>
                  <p className="text-center">{item.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default ClientsSay;
