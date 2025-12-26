import Container from "@/components/ui/container";
import Image from "next/image";
const lists = [
  "Empowering Creativity",
  "Commitment Excellence",
  "Integrity in Action",
  "Collaborative Growth",
];
const MISSION_VISION = [
  {
    name: "Our vision",
    heading: "Inspiring excellence",
    para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. (Focus on modernizing",
  },
  {
    name: "Our mission",
    lists: [
      "We believe in innovation",
      "We believe in innovation",
      "Delivering top tier quality",
      "Fostering trust and transparency",
    ],
  },
];

const ImaginationMeetsStrategy = () => {
  return (
    <div className="text-white">
      <Container>
        <div className="flex gap-4">
          <div className="flex flex-col border border-[#5C5C5C] rounded-lg overflow-hidden justify-between w-[26%]">
            <div className="flex gap-3 p-4">
              <Image
                src={"/about-us/star.svg"}
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
                alt="star"
              />
              <h3>Our value</h3>
            </div>
            <div className=" bg-[url(/about-us/ball-background.png)] p-4">
              <h3 className="text-lg font-primary uppercase mb-3">
                Building trust, inspiring creativity
              </h3>
              <div className="flex flex-col gap-2">
                {lists.map((list, index) => (
                  <div key={index} className="flex gap-2">
                    <Image
                      src={"/about-us/star-white.svg"}
                      alt="star"
                      width={18}
                      height={18}
                    />
                    <p>{list}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[45%] shrink-0">
            <Image
              src={"/about-us/imagination.png"}
              width={1000}
              height={1000}
              className="w-full h-[500px] rounded-lg object-cover"
              alt="imagination"
            />
          </div>
          <div className="w-[26%] flex flex-col gap-4">
            {MISSION_VISION.map((item, index) => (
              <div
                key={index}
                className="border border-[#5C5C5C] flex flex-col p-4 rounded-lg justify-between gap-2 grow"
              >
                <div className=" flex gap-3">
                  <Image
                    src={"/about-us/star.svg"}
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px]"
                    alt="star"
                  />
                  <h3 className="uppercase">{item.name}</h3>
                </div>
                <div>
                  {item.heading && (
                    <h4 className="text-lg font-primary uppercase">
                      {item.heading}
                    </h4>
                  )}
                  {item.para && <p>{item.para}</p>}
                  {item.lists && (
                    <ul className="ps-4 list-disc">
                      {item.lists.map((list, idx) => (
                        <li key={idx}>{list}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImaginationMeetsStrategy;
