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
    <div>
      <Container>
        <div className="flex">
          <div>
            <div>
              <Image
                src={"/about-us/star.svg"}
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
                alt="star"
              />
              <h3>Our value</h3>
            </div>
            <div>
              <h3>Building trust, inspiring creativity</h3>
              {lists.map((list, index) => (
                <div key={index}>
                  <Image
                    src={"/about-us/star-white"}
                    alt="star"
                    width={18}
                    height={18}
                  />
                  <p>{list}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image src={"/imagination.png"} alt="imagination" />
          </div>
          <div>
            {MISSION_VISION.map((item, index) => (
              <div key={index}>
                <div>
                  <Image
                    src={"/about-us/star.svg"}
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px]"
                    alt="star"
                  />
                  <h3>{item.heading}</h3>
                </div>
                <div>
                  {item.heading && <h4>{item.heading}</h4>}
                  {item.para && <p>{item.para}</p>}
                  {item.lists && (
                    <ul>
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
