"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import LottiePlayer from "@/components/ui/lottie-player";
import { WEB_DEV_SERVICES_WE_OFFER } from "@/constants";
import Image from "next/image";

const ServicesWeOfferCanada = () => {
  return (
    <DoubleCurves up className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <Container>
        <div className="py-20">
          <HeadingTwo className="text-center mb-8">
            Web Development Services We Offer in Canada
          </HeadingTwo>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {WEB_DEV_SERVICES_WE_OFFER.map((item, index) => (
              <div
                key={item.heading}
                className="relative group bg-tertiary rounded-lg px-4 py-6 hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
              >
                <div className="p-3 absolute right-0 top-0 text-xl rounded-bl-2xl font-primary bg-black">
                  0 {index + 1}
                </div>
                <div className="flex flex-col gap-4">
                  <div className="p-4 border border-[#075B65] group-hover:bg-white w-fit rounded-full min-w-[77px] min-h-[77px] flex items-center justify-center group-hover:[&_svg_path]:fill-black!">
                    {item.icon ? (
                      <Image
                        width={27}
                        height={34}
                        src={item.icon}
                        alt={item.heading}
                        className="w-[45px] h-[45px]"
                      />
                      // <LottiePlayer
                      //   className="w-[45px] h-[45px]"
                      //   src={item.icon}
                      //   autoplay
                      //   loop
                      // />
                    ) : (
                      <span className="font-primary text-sm text-white group-hover:text-black">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  <h3 className="font-primary uppercase">{item.heading}</h3>
                  <p>{item.para}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex relative mt-8 grow flex-col gap-6 bg-[url(/website/cta-bg.webp)] bg-cover bg-center bg-no-repeat rounded-2xl p-5">
            <div className="absolute top-0 right-0 w-[25%] h-full bg-[url(/website/cta-circle.webp)] bg-cover bg-center bg-no-repeat"></div>
            <h3 className="uppercase font-primary text-[22px] relative font-medium ">
              Looking for <br /> Professional Growth?
            </h3>
            <p className="relative">
              We&apos;re always open to connecting with driven designers, developers,
              marketers, and strategists who want to do meaningful work with a
              supportive team.
            </p>
            <div className="flex relative">
              <Button href="/">Get Started</Button>
            </div>
          </div>
        </div>
      </Container>
    </DoubleCurves>
  );
};

export default ServicesWeOfferCanada;
