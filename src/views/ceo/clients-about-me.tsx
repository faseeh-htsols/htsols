"use client";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { CLIENT_SAY_ABOUT_CEO } from "@/constants";

const ClientsAboutMe = () => {
  return (
    <div className="bg-tertiary py-20">
      <Container>
        <HeadingTwo className="mb-8 text-center">
          What my clients say about me
        </HeadingTwo>

        <div className="flex justify-between">
          <div className="[50px] md:w-[120px] lg:w-[200px] ">
            <Image
              src={"/ceo/left-qoute.svg"}
              className="w-[50px] md:w-[120px] lg:w-[200px] h-40"
              width={200}
              height={200}
              alt="left Qoute"
            />
          </div>

          <div className="w-[calc(100%-120px)] md:w-[calc(100%-240px)] lg:w-[60%] overflow-hidden">
            <Swiper
              className=" ceo-pagination"
              loop
              slidesPerView={1}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
            >
              {CLIENT_SAY_ABOUT_CEO.map((item, index) => (
                <SwiperSlide key={index}>
                  <p className="text-center text-lg mb-6">{item.para}</p>
                  <div className="flex justify-center items-center gap-6">
                    <div className="w-[60px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={45}
                        height={45}
                        className="w-[60px] relative h-[60px] object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-primary">{item.name}</h3>
                      <p>{item.designation}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-[50px] md:w-[120px] lg:w-[200px] ">
            <Image
              src={"/ceo/right-qoute.svg"}
              className="w-[50px] md:w-[120px] lg:w-[200px] h-40"
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
