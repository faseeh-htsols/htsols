import CircularText from "@/components/ui/CircularText";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";
interface Client {
  name: string;
  logo: string;
}
const clients: Client[] = [
  { name: "Client 1", logo: "/client-sections/logo.png" },
  { name: "Rachel White", logo: "/client-sections/rachel.png" },
  { name: "Client 3", logo: "/client-sections/logo.png" },
  { name: "Client 4", logo: "/client-sections/rachel.png" },
  { name: "Rachel White", logo: "/client-sections/logo.png" },
  { name: "Client 6", logo: "/client-sections/rachel.png" },
  { name: "Client 7", logo: "/client-sections/logo.png" },
  { name: "Rachel White", logo: "/client-sections/rachel.png" },
  { name: "Client 9", logo: "/client-sections/logo.png" },
  { name: "Client 10", logo: "/client-sections/rachel.png" },
  { name: "Rachel White", logo: "/client-sections/logo.png" },
  { name: "Client 12", logo: "/client-sections/rachel.png" },
];
const ProjectToDiscuss = () => {
  return (
    <div className="relative py-20 -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_100%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>
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
        <div>
          <div className="text-center mb-16">
            <HeadingTwo className=" text-white tracking-wider">
              OUR CLIENTS
            </HeadingTwo>
          </div>
          <div className="relative w-full max-w-[1100px] mx-auto">
            {/* === Vertical Lines (Y-Axis) === */}
            <div
              className="hidden lg:block absolute top-0 bottom-0 left-1/3 w-px "
              style={{
                background: "linear-gradient(180deg, #00A1A5 0%, #1A2626 100%)",
              }}
            ></div>
            <div
              className="hidden lg:block  absolute top-0 bottom-0 left-2/3 w-px "
              style={{
                background: "linear-gradient(180deg, #00A1A5 0%, #1A2626 100%)",
              }}
            ></div>

            {/* === Horizontal Lines (X-Axis) === */}
            <div
              className="hidden lg:block absolute left-0 right-0 top-1/4 h-px "
              style={{
                background: "linear-gradient(90deg, #00A1A5 0%, #1A2626 100%)",
              }}
            ></div>
            <div
              className="hidden lg:block absolute left-0 right-0 top-2/4 h-px "
              style={{
                background: "linear-gradient(90deg, #00A1A5 0%, #1A2626 100%)",
              }}
            ></div>
            <div
              className="hidden lg:block absolute left-0 right-0 top-3/4 h-px"
              style={{
                background: "linear-gradient(90deg, #00A1A5 0%, #1A2626 100%)",
              }}
            ></div>

            {/* === Grid Content === */}
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center py-12"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={60}
                    className="object-contain w-[80%] h-[70px] sm:w-[140px] sm:h-[60px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectToDiscuss;
