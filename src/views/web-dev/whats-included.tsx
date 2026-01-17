import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { WHATS_INCLUDED_WEBDEV } from "@/constants";
import Image from "next/image";

const WhatsIncluded = () => {
  return (
    <div className="py-32 bg-tertiary relative  -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>
      <Container>
        <div className="pb-10 border-b border-white mb-10">
          <HeadingTwo className="text-center">What’s included</HeadingTwo>
        </div>
        <div className="grid grid-cols-2 gap-9">
          {WHATS_INCLUDED_WEBDEV.map((item, index) => (
            <div
              key={index}
              className="p-0.5 bg-[linear-gradient(90deg,#00A1A5_0%,#1A2626_100%)] rounded-lg"
            >
              <div className="flex justify-between bg-black rounded-lg items-center p-7">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] flex justify-center items-center border border-white rounded-sm">
                    <Image
                      src={item.image}
                      width={40}
                      height={40}
                      className="w-8 h-8"
                      alt={item.para}
                    />
                  </div>
                  <p className="text-[20px]">{item.para}</p>
                </div>
                <p className="text-[24px] font-primary">0{index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhatsIncluded;
