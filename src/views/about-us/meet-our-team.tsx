import Button from "@/components/ui/Button";
import HeadingTwo from "@/components/ui/heading-two";
import Wrapper from "@/components/ui/wrapper";
import { TEAM } from "@/constants";
import Image from "next/image";
import React from "react";

const MeetOurTeam = () => {
  return (
    <div className="py-10">
      <Wrapper>
        <div className="flex gap-28 items-center">
          <div>
            <div>
              <p>Meet our team</p>
            </div>
            <HeadingTwo>The Minds Behind</HeadingTwo>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium. (Focus on modernizing and scaling business
              processes.)
            </p>
            <div className="flex">
              <Button href="/contact-us">Get A Free Consultation</Button>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-5 flex-wrap">
            {TEAM.map((member, index) => (
              <div
                className={`w-[48%] h-fit ${
                  index === 1 ? "mt-8" : index === 2 ? "-mt-8" : ""
                } border border-[#5C5C5C] overflow-hidden rounded-lg`}
                key={member.name}
              >
                <div className="p-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    className="w-full h-[350px] object-cover rouned-lg"
                    height={500}
                  />
                </div>
                <div className="mt-5 relative  p-4">
                  <div className="absolute top-0 left-0 h-full w-full bg-[url(/about-us/ball-team.png)]"></div>
                  <h3 className="text-2xl relative text-center font-primary uppercase">
                    {member.name}
                  </h3>
                  <p className="text-center relative">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default MeetOurTeam;
