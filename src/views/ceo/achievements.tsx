import Container from "@/components/ui/container";
import { CEO_ACHIEVEMENTS } from "@/constants";
import React from "react";

const Achievements = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-3 bg-tertiary rounded-lg border border-[#075B65]">
          {CEO_ACHIEVEMENTS.map((item, index) => (
            <div key={item.name} className="py-5 px-2 relative">
              <div
                className={`${
                  CEO_ACHIEVEMENTS.length - 1 === index
                    ? ""
                    : "absolute top-0 right-0 h-full w-px bg-[#075B65] bg-cover shadow-[0_0_10px_#075B65]"
                }`}
              ></div>
              <div
                className={`${
                  CEO_ACHIEVEMENTS.length - 1 === index
                    ? ""
                    : "absolute top-[37%] -right-[5px] h-2.5 rounded-full  w-2.5 bg-[#075B65] bg-cover shadow-[0_0_10px_#075B65]"
                }`}
              ></div>
              <div
                className={`${
                  CEO_ACHIEVEMENTS.length - 1 === index
                    ? ""
                    : "absolute top-[73%] -right-[5px] h-2.5 rounded-full  w-2.5 bg-[#075B65] bg-cover shadow-[0_0_10px_#075B65]"
                }`}
              ></div>
              <div className="flex flex-col gap-3 max-w-[313px] mx-auto">
                <h3 className="text-[50px] font-bold text-center font-inter">
                  {item.number}
                </h3>
                <div className="flex gap-2 flex-col">
                  <h4 className="gradient-text font-secondary uppercase text-lg text-center font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-center">{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Achievements;
