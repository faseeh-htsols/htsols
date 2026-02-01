import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-5">
          <p className="text-xl font-primary uppercase bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">
            About
          </p>
          <h2 className="text-[28px] font-primary uppercase">
            With expertise in Creative Direction, CGI, VFX, 3D Modelling, and
            Motion Animation, we create compelling visual experiences that
            elevate your brand.
          </h2>
          <div className="flex flex-row gap-12">
            <p className="text-xl bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">
              Based in London and Barcelona
            </p>
            <p>
              Our expert team is passionate about turning your vision into
              reality. Utilising state-of-the-art tools and creative ingenuity,
              we craft animations and graphics that not only attract attention
              but also foster deeper engagement with your brand.
            </p>
          </div>
        </div>
      </Container>
      <div>
        <Image
          src={"/cgi/about.png"}
          alt="image"
          width={1000}
          height={1000}
          className="w-full h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default About;
