"use client";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { CLIENT_SAY_ABOUT_CEO } from "@/constants";

const ClientsAboutMe = () => {
  return (
    <div>
      <Container>
        <HeadingTwo>What my clients say about me</HeadingTwo>
        <div className="flex justify-between">
          <div className="w-[200px] ">
            <Image
              src={"/ceo/left-qoute.svg"}
              className="w-[200px] h-40"
              width={200}
              height={200}
              alt="left Qoute"
            />
          </div>
          <div className="w-[60%]">
            <Swiper
              className="mySwiper"
              loop
              slidesPerView={1}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
            >
              {CLIENT_SAY_ABOUT_CEO.map((item, index) => (
                <SwiperSlide key={index}>
                  <p>{item.para}</p>
                  <div className="flex justify-center">
                    <div className="w-[45px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={45}
                        height={45}
                        className="w-[45px] relative h-[45px] object-cover"
                      />
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.designation}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-[200px] ">
            {" "}
            <Image
              src={"/ceo/right-qoute.svg"}
              className="w-[200px] h-40"
              width={200}
              height={200}
              alt="left Qoute"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClientsAboutMe;
