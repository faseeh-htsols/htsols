import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";

const ViewOnInstgram = () => {
  const instaPosts = [
    { image: "/ceo/cgi-cgiadds.webp", alt: "Instagram post 1" },
    { image: "/ceo/cgi-burger.webp", alt: "Instagram post 2" },
    { image: "/ceo/cgi-watch.webp", alt: "Instagram post 3" },
    { image: "/ceo/cgi-hoodie.webp", alt: "Instagram post 4" },
  ];

  return (
    <DoubleCurves
      up
      className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_-5px,100%_97%,0_100%)]">
      <div className="bg-tertiary">
        <Container>
          <div className="py-20 lg:py-40 -mb-5">
            <div className="flex flex-col items-center text-center">
              <Image
                alt="insta"
                src={"/ceo/insta.svg"}
                width={68}
                height={68}
                className="w-[68px] h-[68px] object-contain"
                priority
              />

              <HeadingTwo className="mt-4">view more on instagram</HeadingTwo>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mx-auto">
              {instaPosts.map((item, index) => (
                <div key={index} className="overflow-hidden rounded-md">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={520}
                    height={650}
                    className="w-full h-[420px] lg:h-[380px] object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button href="/">View All On Instagram</Button>
            </div>
          </div>
        </Container>
      </div>
    </DoubleCurves>
  );
};

export default ViewOnInstgram;
