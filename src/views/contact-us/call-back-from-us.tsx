import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import Image from "next/image";

const CallBackFromUs = () => {
  return (
    <div className="bg-black relative py-20  -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_100%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>
      <Container>
        <div className="mb-4">
          <Image
            src={"/map-contact.png"}
            alt="map"
            width={900}
            height={900}
            className="w-full h-[300px] lg:h-[600px] object-contain object-center"
          />
        </div>
      </Container>
      <div className="py-18">
        <Container>
          <div className="border border-[#5C5C5C] rounded-lg px-4 flex lg:flex-row flex-col gap-4 relative text-white">
            <div className="lg:w-[56%] py-8 flex flex-col gap-4">
              <h2 className="font-primary uppercase text-2xl">
                Want A Call back from us ?
              </h2>
              <p className="text-xl">
                HT-Solutions provides you Website Designing, Web Development,
                SEO Services, Graphic Designing.
              </p>
              <div>
                <Button href="/">Schedule A call Back</Button>
              </div>
            </div>
            <div className="lg:w-[37%] lg:absolute lg:-top-10 lg:right-0">
              <Image
                src={"/call-back-from-us.png"}
                alt="Call back from us"
                width={700}
                height={700}
                className="w-full h-[380px] object-contain"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CallBackFromUs;
