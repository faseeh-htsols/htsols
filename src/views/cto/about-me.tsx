import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="py-20">
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
              src={"/ceo/about-me.png"}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <Image
                src={"/ceo/signature.png"}
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
