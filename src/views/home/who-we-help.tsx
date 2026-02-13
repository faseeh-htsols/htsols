import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { HOW_WE_HELP_HOME } from "@/constants";
import Image from "next/image";

const WhoWeHelp = () => {
  return (
    <div className="py-20 bg-[url(/how-we-help.png)] bg-cover">
      <Container>
        <div className="flex flex-col gap-6">
          <HeadingTwo className="text-center">Who We Help</HeadingTwo>
          <p className="text-center">
            We work with organisations where credibility, clarity, and
            reliability are essential. Businesses often come to us when they
            want <br /> consistent enquiries and a dependable online presence.
          </p>
          <p className="text-center font-semibold">Our experience includes:</p>
          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7">
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/5 w-px bg-[linear-gradient(180deg,#00A1A5_0%,#1A2626_100%)]" />
            <div className="hidden lg:block absolute top-0 bottom-0 left-2/5 w-px bg-[linear-gradient(180deg,#00A1A5_0%,#1A2626_100%)]" />
            <div className="hidden lg:block absolute top-0 bottom-0 left-3/5 w-px bg-[linear-gradient(180deg,#00A1A5_0%,#1A2626_100%)]" />
            <div className="hidden lg:block absolute top-0 bottom-0 left-4/5 w-px bg-[linear-gradient(180deg,#00A1A5_0%,#1A2626_100%)]" />
            <div className="hidden lg:block absolute left-0 bottom-0 w-full top-1/2 -translate-y-1/2 h-px bg-[linear-gradient(180deg,#00A1A5_0%,#1A2626_100%)]" />

            {HOW_WE_HELP_HOME.map((item) => (
              <div key={item.name} className="relative z-10 py-5">
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={89}
                    height={72}
                    className="w-20 h-[65px]"
                  />
                </div>

                <h3 className="font-primary text-center uppercase font-semibold">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhoWeHelp;
