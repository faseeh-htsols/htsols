import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";


const tealGradient =
  "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)";

const Banner = () => {
  return (
    <div className="bg-black relative pb-20 pt-40 lg:pb-40 [clip-path:polygon(0_0,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_97%,0_100%)]">
      <div className="absolute top-20 left-0">
        <Image
          src={"/left-gradient.webp"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <div className="absolute top-20 right-0">
        <Image
          src={"/right-gradient.webp"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <Wrapper>
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-[53px] font-primary mb-4 font-semibold text-white text-center uppercase">
            Web Development Company in Canada
          </h1>
          <div style={{ background: tealGradient }}>
            <HeadingTwo
              className="inline-block px-4 py-2 rounded-lg text-white font-medium uppercase tracking-wide text-center"
            >
              Websites Built For Speed, Search Visibility, And Real Business Growth
            </HeadingTwo>
          </div>
        </div>

        <p className="text-lg text-center mb-8">
          Your website is often the first place people meet your brand. It
          should load fast, look sharp, and make it easy for visitors to take
          the next step. That could be calling, booking, buying, or requesting a
          quote. HTSOL Inc. is a Canadian digital marketing and web development
          agency. We design and build modern websites that support your
          marketing, strengthen trust, and help you convert more of the right
          traffic. We keep things clear, practical, and focused on what your
          business actually needs.
        </p>
        <div className="flex gap-3 mb-8 justify-center">
          <Button href="/contact-us">BOOK A FREE CONSULTATION</Button>
          <Button href="#contact-form" variant="outline">
            Request a Proposal
          </Button>
        </div>
        <div>
          <Image
            src={"/website/website-banner.webp"}
            alt=""
            className="w-full h-[280px] lg:h-[500px] object-contain"
            width={1000}
            height={1000}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Banner;
