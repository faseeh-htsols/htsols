import Container from "@/components/ui/container";
import Image from "next/image";
import HeadingTwo from "@/components/ui/heading-two";
import Button from "@/components/ui/Button";
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
const YourCompleteTeam = () => {
  return (
    <div className="py-20 relative  -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[2%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>
      <Container>
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="relative lg:w-[43%] py-10 lg:py-0 shrink-0">
            <Image
              src={"/website/choose-us.png"}
              alt="why choose us"
              width={800}
              height={800}
              className="w-[80%] mx-auto h-[400px] lg:h-[650px] rounded-2xl object-cover"
            />
            <div className="absolute left-0 -bottom-0 lg:bottom-[20%] rounded-full border border-[#328A99]">
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
            <div className="absolute right-0 -top-4 lg:top-[20%] rounded-full border border-[#328A99]">
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
            <div className="border-b pb-9 border-white">
              <HeadingTwo>Why Choose Us</HeadingTwo>
            </div>
            <div className="ps-5 relative mt-9 flex flex-col gap-10">
              {/* <div className="absolute top-0 left-0 bg-white/20 w-1 h-full"></div> */}
              <div className="flex flex-col gap-5">
                <p>
                  At HTSOL Inc., we support Canadian businesses at every stage
                  of their digital growth. Whether you’re launching a new
                  platform, improving an existing system, or looking for more
                  predictable online performance, we step in as your complete
                  digital team.
                </p>
                <p>
                  We manage development, design, marketing, and ongoing
                  technical oversight in one coordinated structure. You won’t
                  need to juggle freelancers, manage multiple vendors, or decide
                  what to prioritise next. We handle the execution so you can
                  stay focused on running your business. Our team includes
                  designers, web and software developers, digital marketers, and
                  AI specialists working together as one unit. Instead of
                  separate providers pulling in different directions, you work
                  with a single Canadian-led partner who keeps every initiative
                  aligned with your goals. We plan thoroughly. We communicate
                  clearly. And we move forward at a steady, accountable pace.
                  This reduces delays, prevents misalignment, and helps control
                  costs.
                </p>
                <p>
                  We typically work with growing businesses, startups,
                  professional firms, and organisations across Canada that need
                  dependable digital support without building an internal
                  department.
                  <br />
                  Tell us where you want to go. We’ll map the path and build it
                  with you.
                </p>
                <div className="flex">
                  <Button href="/">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default YourCompleteTeam;
