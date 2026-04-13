import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="py-20 lg:py-40">
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
              src={"/cto/about-cto.png"}
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
                I am a software architect, full-stack engineer, and AI systems builder with over six years of experience designing web applications, intelligent automation systems, and digital infrastructure. My engineering background — rooted in avionics and complex systems design — means I think about technology the way an engineer designs a control system: precision-first, failure-aware, built to perform under load. When I joined HTSOL Inc. as CTO, I brought that foundation to one focused purpose: building AI-driven digital systems that help dental practices and healthcare businesses grow online — high-performance websites, custom CRMs, intelligent SEO automation, and software that actually fits how a clinical team operates.
              </p>
              <p>
                Dental practices don't struggle because of bad dentistry. They struggle because their digital presence doesn't reflect the quality of care they deliver. My job is to close that gap — with websites engineered to perform from day one, AI-powered SEO systems that automate the discovery of high-intent dental searches, intelligent booking and CRM software that reduces front-desk administrative burden, and robotic process automation that handles the repetitive operational tasks that eat into a clinical team's time. I've helped practices across the UK turn underperforming websites into consistent patient acquisition engines. That's the standard I bring to every build.
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
