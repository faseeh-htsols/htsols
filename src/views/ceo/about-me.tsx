import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="pb-20 lg:pt-0">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-[40%] shrink-0 p-4 pr-0 relative">
            <div
              className="absolute left-0 top-0 h-full  w-[40%] rounded-lg border-3 border-[#075B65]"
            // style={{
            //   border: " 5px solid",

            //   borderImageSource:
            //     "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)",
            // }}
            ></div>
            <Image
              src={"/ceo/about-me.webp"}
              width={600}
              height={600}
              className="relative"
              alt="Faseeh"
            />
          </div>
          <div className="grow">
            <HeadingTwo className="mb-10">About Me</HeadingTwo>
            <div className="mb-5">
              <p className="mb-5">
                I started as a developer. Over 8 years I built websites,
                platforms, and software for businesses across 5 countries — and
                somewhere along the way I noticed something that bothered me:
                technically excellent work failing because the strategy behind
                it was wrong. Great code sitting on a website nobody could find.
                Beautiful designs that didn&apos;t convert. Platforms launched
                without any plan for growth.
              </p>
              <p>
                That&apos;s why I built HTSOL Inc. the way I did — with design,
                development, and marketing operating as one coordinated unit,
                not three separate vendors pulling in different directions.
                Today I work with healthcare practices, dental clinics, mental
                health providers, and marketing agencies who need more than
                execution. They need someone who understands the full picture:
                what to build, how to market it, and how to make it grow.
                That&apos;s what I do.
              </p>
            </div>
            <div>
              <Image
                src={"/ceo/signature.webp"}
                width={165}
                height={100}
                className="w-40 h-[100px] object-contain"
                alt="Faseeh Signature"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
