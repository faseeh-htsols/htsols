import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { WHATS_INCLUDED_WEBDEV } from "@/constants";
import Image from "next/image";

const WhatsIncluded = () => {
  return (
    <div className="py-32 bg-tertiary">
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
