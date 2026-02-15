import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";
const lists = [
  "Your goals",
  "Your audience",
  "What’s working today and what’s getting in the way",
  "The day-to-day realities of running your business",
];
const RelationshipAndResults = () => {
  return (
    <div className="py-24 bg-[url(/what-happens-after-launch.jpg)] bg-cover">
      <Container>
        <div className="flex flex-col gap-6">
          <HeadingTwo className="text-center mb-10" span="Results">
            We’re All About <br /> Relationships and
          </HeadingTwo>
          <div className="flex gap-8">
            <div className="w-[45%] flex flex-col gap-4">
              <p className="text-[#DBDBDB]">
                Good marketing isn’t about doing more. It’s about doing the
                right things, in the right order, for the right reasons. At
                HTSOL Inc., we believe the best results come from clarity,
                consistency, and true partnership.
              </p>
              <p className="font-semibold">We take the time to understand: </p>
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
                    From there, we build a practical, trackable plan designed to
                    build momentum over time.
                  </p>
                </div>
              </div>
            </div>
            <div className="grow">
              <Image
                src={"/happens-after.png"}
                alt="image"
                className="w-full min-h-[300px] rounded-3xl lg:h-full object-cover"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="bg-tertiary p-8 rounded-3xl">
            <p className="text-center ">
              {" "}
              We support startups, growing companies, and established businesses
              that want dependable help without juggling multiple vendors.
              Whether you’re launching a new brand, improving an existing
              website, or scaling lead generation, we bring structure,
              accountability, and a team that stays aligned from strategy to
              execution.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RelationshipAndResults;
