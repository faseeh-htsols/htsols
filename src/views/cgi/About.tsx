import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-5 mb-18 ">
          <p className="text-xl font-primary uppercase bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">
            About
          </p>
          <h2 className="text-[28px] font-primary uppercase">
            Specialists in Creative Direction, CGI, VFX, 3D Modelling, and
            Motion Animation. We engineer viral visual moments that transform
            brands into trends.
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 lg:justify-between">
            <p className="text-xl bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">
              Based in Mississauga, <br className="lg:block hidden" /> Canada
            </p>
            <p>
              Our expert team is passionate about turning your vision into
              measurable success. Utilizing state-of
              <br className="lg:block hidden" />
              -the-art CGI tools and creative ingenuity, we craft animations
              that not only captivate audiences
              <br className="lg:block hidden" />
              but generate millions of impressions and drive conversions
            </p>
          </div>
        </div>
      </Container>
      <div>
        {/* <Image
          src={"/cgi/about.png"}
          alt="image"
          width={1000}
          height={1000}
          className="w-full h-[200px] lg:h-[500px] object-contain"
        /> */}
        <video
          src="/cgi/loop-export.mp4"
          className="w-full h-[150px] lg:h-[500px]"
          muted
          loop
          autoPlay
          webkit-playsinline="true"
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default About;
