import Container from "@/components/ui/container";
import Image from "next/image";
import HeadingTwo from "@/components/ui/heading-two";
export const WHY_CHOOSE_WEB_DEV = [
  {
    heading: "Lorem ipsum dolor sit",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    heading: "Lorem ipsum dolor sit",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    heading: "Lorem ipsum dolor sit",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    heading: "Lorem ipsum dolor sit",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];
const WhyChoose = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="flex gap-10">
          <div className="relative w-[43%] shrink-0">
            <Image
              src={"/website/choose-us.png"}
              alt="why choose us"
              width={800}
              height={800}
              className="w-[80%] mx-auto h-[650px] object-contain"
            />
            <div className="absolute left-0 bottom-[20%] p-0.5 rounded-full bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]">
              <div
                className="p-3 bg-[linear-gradient(90deg,rgba(217,217,217,0.6)_0%,rgba(115,115,115,0.7)_100%)] rounded-full
"
              >
                <div className="p-1 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] rounded-full">
                  <div className="bg-black flex items-center gap-4 py-2 px-3 rounded-full">
                    <div className="bg-[linear-gradient(270deg,#F4EAE3_0%,#C48A66_100%)] rounded-full w-10 h-10 flex justify-center items-center">
                      <Image
                        src={"/website/service-provider.svg"}
                        alt="image"
                        width={27}
                        height={27}
                        className="w-[23px] h-[23px]"
                      />
                    </div>
                    <h3 className="font-medium">
                      Number #1 <br /> Service Provider
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-[20%] p-0.5 rounded-full bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]">
              <div className="rounded-full p-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(153,153,153,0.5)_100%)]">
                <div className="rounded-full bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] p-3">
                  <div className="rounded-full p-5 aspect-square flex justify-center items-center bg-black">
                    <h3 className="font-medium text-center">
                      GROWTH <br />
                      90%
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-b pb-4 border-white">
              <HeadingTwo>Why Choose Us</HeadingTwo>
            </div>
            <div className="ps-5 relative my-4 flex flex-col gap-7">
              <div className="absolute top-0 left-0 bg-white/20 w-1 h-full"></div>
              {WHY_CHOOSE_WEB_DEV.map((item, index) => (
                <div key={index} className="relative group flex flex-col gap-2">
                  <div className="absolute w-1 h-full -left-5  group-hover:bg-[#075B65]"></div>
                  <h3 className="font-primary uppercase text-lg">
                    {item.heading}
                  </h3>
                  <p>{item.para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChoose;
