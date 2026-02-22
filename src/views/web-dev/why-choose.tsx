import Container from "@/components/ui/container";
import Image from "next/image";
import HeadingTwo from "@/components/ui/heading-two";
import Button from "@/components/ui/Button";
export const WHY_CHOOSE_WEB_DEV = [
  "Clear navigation and intuitive user flow",
  "Strong visual hierarchy and modern design",
  "Concise, evergreen content that answers real questions",
  "Mobile responsiveness across current devices",
  "Fast performance and stable Core Web Vitals",
  "Clean, scalable code and a reliable CMS",
  "Trust signals, privacy basics, and security best practices",
];
const WhyChoose = () => {
  return (
    <div className="py-20 relative  -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[2%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>
      <Container>
        <div className="grid grid-cols-2 gap-5 pb-8 border-b border-white mb-12">
          <HeadingTwo className="lg:!text-[33px]">
            Why Professional Web Development Matters in Canada
          </HeadingTwo>
          <p>
            Your website is your strongest owned channel. Ads stop the moment
            you stop paying. Social posts fade quickly. A well-built website
            keeps working every day, as long as the foundations are solid.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="relative py-10 lg:py-0 shrink-0">
            <Image
              src={"/website/choose-us.png"}
              alt="why choose us"
              width={800}
              height={800}
              className="w-[80%] mx-auto h-[400px] lg:h-[650px] rounded-2xl object-cover"
            />
            {/* <div className="absolute left-0 -bottom-0 lg:bottom-[20%] rounded-full border border-[#328A99]">
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
            </div> */}
            <div className="absolute left-0 -bottom-0 lg:bottom-[20%] rounded-full border border-[#328A99]">
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
            <div className="ps-5 relative mt-9 flex flex-col gap-10">
              <div className="absolute top-0 left-0 bg-white/20 w-1 h-full"></div>
              {WHY_CHOOSE_WEB_DEV.map((item, index) => (
                <div key={index} className="relative group flex flex-col gap-2">
                  <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 -left-7 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] rounded-full"></div>
                  <p className="text-xl ps-2">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 border-white pt-8 border-t">
              <p className="mb-6 ">
                If any one of these breaks, users bounce, leads drop, and
                marketing costs rise.
              </p>
              <div className="flex ">
                <Button href="/">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChoose;
