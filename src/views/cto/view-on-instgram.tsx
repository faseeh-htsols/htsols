import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";

const ViewOnInstgram = () => {
  const instaPosts = [
    { image: "/ceo/cgi-cgiadds.png", alt: "Instagram post 1" },
    { image: "/ceo/cgi-burger.png", alt: "Instagram post 2" },
    { image: "/ceo/cgi-watch.png", alt: "Instagram post 3" },
    { image: "/ceo/cgi-hoodie.png", alt: "Instagram post 4" },
  ];

  return (
    <div className="bg-tertiary -mt-5">
      <Container>
        <div className="py-20">
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
  );
};

export default ViewOnInstgram;
