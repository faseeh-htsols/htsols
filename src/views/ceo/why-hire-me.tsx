import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import LottiePlayer from "@/components/ui/lottie-player";
import { WHY_HIRE_ME_CEO } from "@/constants";
import parse from "html-react-parser";
import Image from "next/image";

interface whyCard {
  icon: string;
  hoverIcon: string;
  heading: string;
  para: string;
};

interface WhyHireMeData {
  title: string;
  para: string;
  btnText: string;
  btnLink: string;
  cards: whyCard[];
};

interface WhyHireMeProps {
  data: WhyHireMeData;
};

const WhyHireMe = ({ data }: WhyHireMeProps) => {
  return (
    <DoubleCurves
      up
      className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
    >
      {/* <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div> */}
      <div className="bg-tertiary py-24 lg:py-40 relative">
        <Container>
          <div>
            <div className="max-w-[1124px] mx-auto flex flex-col gap-5 mb-4 md:mb-8">
              <HeadingTwo className="text-center">{data.title}</HeadingTwo>
              <p className="text-center" dangerouslySetInnerHTML={{ __html: data.para }} />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-6">
            {data.cards.map((item, index) => (
              <div
                key={item.heading}
                className="relative group  bg-black rounded-lg px-4 py-6 hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
              >
                <div className="p-3 absolute right-0 top-0 text-xl rounded-bl-2xl font-primary bg-tertiary">
                  0 {index + 1}
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative p-4 border border-[#075B65] group-hover:bg-white w-fit rounded-full group-hover:[&_svg_path]:fill-black!">
                    {/* {parse(item.svg)} */}
                    <Image
                      width={27}
                      height={34}
                      src={item.icon}
                      alt={item.heading}
                      className="w-[45px] h-[45px] transition-opacity group-hover:opacity-0"
                    />

                    <Image
                      width={27}
                      height={34}
                      src={item.hoverIcon}
                      alt={item.heading}
                      className="w-[45px] h-[45px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    {/* <LottiePlayer
                      className="w-[45px] h-[45px]"
                      src={item.icon}
                      autoplay
                      loop
                    /> */}
                  </div>
                  <h3 className="font-primary uppercase">{item.heading}</h3>
                  <p>{item.para}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button href={data.btnLink}>{data.btnText}</Button>
          </div>
        </Container>
      </div>
    </DoubleCurves>
  );
};

export default WhyHireMe;
