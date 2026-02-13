import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";
const lists = [
  "Monitor performance",
  "Provide reporting and insights",
  "Recommend improvements",
  "Deliver technical support",
  "Support scaling as your business grows",
];
const WhatHappensAfterLaunch = () => {
  return (
    <div className="py-24 bg-[url(/what-happens-after-launch.jpg)] bg-cover">
      <Container>
        <div>
          <HeadingTwo className="text-center mb-10" span="Launch">
            What Happens After{" "}
          </HeadingTwo>
          <div className="flex gap-8">
            <div className="w-[40%] flex flex-col gap-4">
              <p className="text-[#DBDBDB]">
                Many businesses worry that support ends once a project goes
                live. That may be common in the industry, but it is not our
                approach.
              </p>
              <p className="font-semibold">
                After launch, we remain actively involved. We continue to:
              </p>
              <div className="border-[#5C5C5C] rounded-2xl bg-[url(/happens-after-bg.png)] bg-bottom bg-no-repeat border-2 py-10 px-3">
                <div className="flex flex-col gap-3 pb-6 border-b border-white">
                  {lists.map((list, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Image
                        src={"/star-home.svg"}
                        alt="image"
                        width={20}
                        height={20}
                        className="w-[18px] h-[18px]"
                      />
                      <p>{list}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                  <p className="text-[#DBDBDB] text-lg">
                    Your platform stays current rather than gradually becoming
                    outdated. We also help you prioritise improvements so effort
                    and budget are focused on what delivers measurable impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="grow">
              <Image
                src={"/happens-after.png"}
                alt="image"
                className="w-full min-h-[300px] rounded-3xl h-full object-cover"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatHappensAfterLaunch;
