import Button from "@/components/ui/Button";
import CircularText from "@/components/ui/CircularText";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";

const Approach = () => {
  return (
    <DoubleCurves up className="-mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div className="text-white relative bg-tertiary py-20">
        {/* <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div> */}
        <Container>
          <div className="flex flex-col gap-8 mb-8">
            <HeadingTwo className="text-center">
              Get Started Today with HTSOL
            </HeadingTwo>
            <p className="max-w-[970px] text-center mx-auto">
              Ready to take the next step? We're here to listen to your goals and guide you toward success. Reach out to HTSOL Inc. to schedule your consultation today, and let’s discuss the best path forward for your business.
            </p>
            <div>
              <CircularText />
            </div>
          </div>
          <div className="relative">
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/services/play-btn.svg"}
              width={100}
              height={100}
              alt="play button"
            />
          </div> */}
            <Image
              src={"/services/service-img.webp"}
              alt="ball"
              width={1000}
              height={1000}
              quality={100}
              className="w-full h-[620x] object-cover rounded-lg"
            />
          </div>
        </Container>
      </div>
    </DoubleCurves>
  );
};

export default Approach;
