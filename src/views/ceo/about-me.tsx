import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";

interface AboutMeData {
  title: string;
  para: string;
  image: string;
  signImage: string;
};

interface AboutMeProps {
  data: AboutMeData;
};

const AboutMe = ({ data }: AboutMeProps) => {
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
              src={data.image}
              width={600}
              height={600}
              className="relative"
              alt="Faseeh"
            />
          </div>
          <div className="grow">
            <HeadingTwo className="mb-10">{data.title}</HeadingTwo>
            <div className="mb-5">
              <p dangerouslySetInnerHTML={{ __html: data.para }} />
            </div>
            <div>
              <Image
                src={data.signImage}
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
