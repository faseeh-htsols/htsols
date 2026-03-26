import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
const data = [
  {
    image: "/dental/the-reality.svg",
    heading: "The Reality",
    para: "In today’s digital age, 62% of people will ignore a business that lacks an online presence.",
  },
  {
    image: "/dental/local-search.svg",
    heading: "Local Search",
    para: "86% of consumers check Google Maps before visiting a dental clinic.",
  },
  {
    image: "/dental/first-impressions.svg",
    heading: "First Impressions",
    para: "Nearly 39% of patients judge the quality of your clinical care based on your website's appearance.",
  },
  {
    image: "/dental/the-risk.svg",
    heading: "The Risk",
    para: "57% of people will not recommend a business if their mobile website is poorly designed.",
  },
];
export default function WhyOnlinePresenceMatters() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <HeadingTwo className="!text-black mb-24 text-center">
          Why Online Presence Matters
        </HeadingTwo>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-18 gap-x-8">
          {/* Card 1 */}
          {data.map((item) => (
            <div
              key={item.heading}
              className=" bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] p-px rounded-sm"
            >
              <div className="flex flex-col gap-4 text-black px-3 py-10 bg-white rounded-sm h-full">
                <div className="mx-auto -mt-[90px]">
                  <Image
                    src={item.image}
                    height={110}
                    alt={item.heading}
                    width={110}
                    className="w-[100px] h-[100px]"
                  />
                </div>
                <h3 className="font-primary text-[20px] text-center">
                  {item.heading}
                </h3>
                <p className="text-center">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
