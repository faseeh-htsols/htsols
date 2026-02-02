import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";

const InnovativeProblem = () => {
  return (
    <div className="py-24 bg-[url(/cgi/innovative-bg.png)]">
      <Container>
        <div>
          <HeadingTwo className="text-center mb-10">
            Innovative Problem-Solving <br /> for Your Business Needs
          </HeadingTwo>
          <div className="relative">
            <div className="flex justify-center">
              <Image
                src={"/cgi/inovative-logo.png"}
                alt="logo"
                width={200}
                height={200}
                className="w-[143px] z-1 relative h-[143px] object-contain"
              />
            </div>
            <div className="absolute top-[110px] w-3 left-1/2 -translate-x-1/2 h-[calc(100%-200px)]">
              {" "}
              <Image
                src={"/cgi/line3.svg"}
                alt="imge"
                width={1000}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div className="absolute hidden lg:block left-1/2 -translate-x-1/2 top-[10px] w-[70%]">
              <Image
                src={"/cgi/line.svg"}
                alt="imge"
                width={1000}
                height={100}
                className="w-full h-[240px]"
              />
            </div>
            <div className="flex mb-16 lg:mb-0 gap-16 lg:gap-0 flex-col lg:flex-row mt-14 justify-between">
              <div
                className="lg:w-[30%] p-4 relative"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)), linear-gradient(90deg, #0C0C0C -0.09%, #000000 99.91%), conic-gradient(from 181.06deg at 50% 50%, rgba(0,131,138,0.2) 0deg, rgba(0,0,0,0) 172.66deg, rgba(0,131,138,0.4) 281.25deg, rgba(0,131,138,0.2) 360deg)",
                }}
              >
                <div className="mx-auto mb-5 -mt-14 rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[linear-gradient(180deg,#00838A_0%,#00A1A5_100%)]">
                  <Image
                    width={40}
                    height={40}
                    alt="star"
                    className="w-[36px] h-[36px]"
                    src={"/cgi/bulb.svg"}
                  />
                </div>
                <div className="flex justify-between mb-2">
                  <Image
                    width={12}
                    height={12}
                    alt="star"
                    className="w-[12px] h-[12px]"
                    src={"/cgi/star.svg"}
                  />
                  <Image
                    width={12}
                    height={12}
                    alt="star"
                    className="w-[12px] h-[12px]"
                    src={"/cgi/star.svg"}
                  />
                </div>
                <h3 className="text-center font-primary text-2xl">
                  Developing tailored solutions
                </h3>{" "}
                <p className="text-center">
                  Next, our team of experts develops tailored solutions.
                </p>
              </div>
              <div className="lg:w-[30%] relative p-4  bg-innovative">
                <div className="mx-auto mb-5 -mt-14 rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[linear-gradient(180deg,#00838A_0%,#00A1A5_100%)]">
                  <Image
                    width={40}
                    height={40}
                    alt="star"
                    className="w-[36px] h-[36px]"
                    src={"/cgi/webhookslogo.svg"}
                  />
                </div>
                <div className="flex justify-between mb-2">
                  <Image
                    width={12}
                    height={12}
                    alt="star"
                    className="w-[12px] h-[12px]"
                    src={"/cgi/star.svg"}
                  />
                  <Image
                    width={12}
                    height={12}
                    alt="star"
                    className="w-[12px] h-[12px]"
                    src={"/cgi/star.svg"}
                  />
                </div>
                <h3 className="text-center font-primary text-2xl">
                  Implementing Technology
                </h3>{" "}
                <p className="text-center">
                  We leverage cutting-edge technology impolement seamlessly.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="lg:w-[30%] relative p-4  bg-innovative">
                <div className="mx-auto mb-5 -mt-14 rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[linear-gradient(180deg,#00838A_0%,#00A1A5_100%)]">
                  <Image
                    width={40}
                    height={40}
                    alt="star"
                    className="w-[36px] h-[36px]"
                    src={"/cgi/plane.svg"}
                  />
                </div>
                <div className="flex justify-between mb-2">
                  <Image
                    width={12}
                    height={12}
                    alt="star"
                    className="w-[12px] h-[12px]"
                    src={"/cgi/star.svg"}
                  />
                  <Image
                    width={12}
                    height={12}
                    alt="star"
                    className="w-[12px] h-[12px]"
                    src={"/cgi/star.svg"}
                  />
                </div>
                <h3 className="text-center font-primary text-2xl">
                  Understanding Your Business Goals
                </h3>{" "}
                <p className="text-center">
                  We start by gaining a deep understanding of your business
                  goals. We take the time to learn about your unique vision,
                  challenges, and objectives. This deep understanding allows us
                  to create tailored solutions that align perfectly with your
                  goals, ensuring maximum impact and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InnovativeProblem;
