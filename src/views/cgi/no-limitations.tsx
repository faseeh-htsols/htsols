import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";

const NoLimitations = () => {
  return (
    <div>
      <Container>
        <div>
          <HeadingTwo>No Limitations In CGI</HeadingTwo>
          <div>
            <p>
              At our professional CGI agency, photographic skills and digital
              artistry are collaborative teamwork in action.
            </p>
            <p>
              Perfectly captured product photography is married with specialist
              post production techniques to create images that transport your
              audience to a different world.
            </p>
            <p>
              We’re a CGI agency that turns expertly lit and styled studio shots
              into stunning visual creations.
            </p>
          </div>
          <div className="flex">
            <div className="">
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Burger O Clock
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Burger O Clock
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Burger O Clock
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Burger O Clock
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] uppercase font-primary">
                  Burger O Clock
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={"/cgi/burger-o-clock.png"}
                width={800}
                height={800}
                className="w-full h-[500px] object-cover"
                alt="image"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NoLimitations;
