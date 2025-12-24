import CircularText from "@/components/ui/CircularText";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";

const ProjectToDiscuss = () => {
  return (
    <div>
      <Container>
        <div>
          <HeadingTwo>have a project to discuss ?</HeadingTwo>
          <p className="max-w-[970px] mx-auto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium. Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
          <div>
            <CircularText />
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/services/play-btn.svg"}
              width={100}
              height={100}
              alt="play button"
            />
          </div>
          <Image
            src={"/services/ball.png"}
            alt="ball"
            width={1000}
            height={1000}
            quality={100}
            className="w-full h-[656px] object-cover rounded-lg"
          />
        </div>
      </Container>
    </div>
  );
};

export default ProjectToDiscuss;
