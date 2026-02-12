"use client";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { useTypewriterHeadings } from "@/components/ui/useTypewriterHeadings";
import Image from "next/image";
const InnovativeProblem = () => {
  const displayText = useTypewriterHeadings();
  return (
    <div className="py-24 bg-[url(/cgi/innovative-bg.png)] bg-cover">
      <Container>
        <div>
          <HeadingTwo className="text-center mb-10 h-[100px]">
            {displayText}
            <span className="inline-block ml-1 w-[4px] h-[1em] bg-[#00838A] align-[-0.15em] animate-pulse" />
          </HeadingTwo>
          <div className="relative">
            <div className="flex justify-center">
              {/* <Image
                src={"/cgi/inovative-logo.png"}
                alt="logo"
                width={200}
                height={200}
                className="w-[143px] z-1 relative h-[143px] object-contain"
              /> */}
              <video
                src="/cgi/outputiii.webm"
                className="w-[290px] z-1 relative h-[200px] object-contain"
                autoPlay
                muted
                loop
                webkit-playsinline="true"
                playsInline
              ></video>
            </div>
            <div className="absolute top-[110px] w-3 left-1/2 -translate-x-1/2 h-[calc(100%-200px)]">
              {" "}
              <Image
                src={"/cgi/line3.svg"}
                alt="imge"
                width={1000}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div className="absolute hidden lg:block left-1/2 -translate-x-1/2 top-[63px] w-[70%]">
              <Image
                src={"/cgi/line.svg"}
                alt="imge"
                width={1000}
                height={100}
                className="w-full h-[240px]"
              />
            </div>
            <div className="flex mb-16 lg:mb-0 gap-16 lg:gap-0 flex-col lg:flex-row mt-14 justify-between">
              <div className="lg:w-[30%] p-4 relative bg-center bg-[url(/cgi/innovative-problem-card.png)] bg-cover border-2 border-white/20 rounded-2xl">
                <div className="mx-auto mb-5 -mt-14 rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[linear-gradient(180deg,#00838A_0%,#00A1A5_100%)]">
                  <Image
                    width={40}
                    height={40}
                    alt="star"
                    className="w-[36px] h-[36px]"
                    src={"/cgi/bulb.svg"}
                  />
                </div>
                <div className="flex justify-between mb-2">
                  <Image
                    width={12}
                    height={12}
                    alt="star"
                    className="w-[12px] h-[12px]"
                    src={"/cgi/star.svg"}
                  />
                  <Image
                    width={12}
                    height={12}
                    alt="star"
                    className="w-[12px] h-[12px]"
                    src={"/cgi/star.svg"}
                  />
                </div>
                <h3 className="text-center font-primary mb-4 text-2xl">
                  Brand Control & Authenticity
                </h3>{" "}
                <p className="text-center">
                  AI videos look generic because they&apos;re trained on random
                  internet content. Custom CGI gives you complete creative
                  control—every color, angle, and movement perfectly matches
                  your brand identity. AI feels fake. Professional CGI builds
                  credibility and trust with your audience.
                </p>
              </div>
              <div className="lg:w-[30%] relative p-4 bg-center bg-[url(/cgi/innovative-problem-card.png)] bg-cover border-2 border-white/20 rounded-2xl">
                <div className="mx-auto mb-5 -mt-14 rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[linear-gradient(180deg,#00838A_0%,#00A1A5_100%)]">
                  <Image
                    width={40}
                    height={40}
                    alt="star"
                    className="w-[36px] h-[36px]"
                    src={"/cgi/webhookslogo.svg"}
                  />
                </div>
                <div className="flex justify-between mb-2">
                  <Image
                    width={12}
                    height={12}
                    alt="star"
                    className="w-[12px] h-[12px]"
                    src={"/cgi/star.svg"}
                  />
                  <Image
                    width={12}
                    height={12}
                    alt="star"
                    className="w-[12px] h-[12px]"
                    src={"/cgi/star.svg"}
                  />
                </div>
                <h3 className="text-center font-primary  mb-4 text-2xl">
                  Platform Performance & Virality
                </h3>{" "}
                <p className="text-center">
                  Social media algorithms penalize low-quality AI content,
                  limiting your reach. Custom CGI is optimized for each
                  platform&apos;s technical specs and audience preferences,
                  maximizing organic reach and shareability. While AI videos
                  struggle to hit 10K views, our professional CGI consistently
                  generates millions of organic impressions and actual business
                  results.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="lg:w-[30%] relative p-4 bg-[url(/cgi/innovative-problem-card.png)] bg-cover border-2 border-white/20 rounded-2xl">
                <div className="mx-auto mb-5 -mt-14 rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[linear-gradient(180deg,#00838A_0%,#00A1A5_100%)]">
                  <Image
                    width={40}
                    height={40}
                    alt="star"
                    className="w-[36px] h-[36px]"
                    src={"/cgi/plane.svg"}
                  />
                </div>
                <div className="flex justify-between mb-2">
                  <Image
                    width={12}
                    height={12}
                    alt="star"
                    className="w-[12px] h-[12px]"
                    src={"/cgi/star.svg"}
                  />
                  <Image
                    width={12}
                    height={12}
                    alt="star"
                    className="w-[12px] h-[12px]"
                    src={"/cgi/star.svg"}
                  />
                </div>
                <h3 className="text-center font-primary mb-4 text-2xl">
                  Photorealism & Quality That Converts
                </h3>{" "}
                <p className="text-center">
                  AI video tools create distorted, uncanny valley content with
                  warped objects, bizarre movements, and obvious artifacts that
                  hurt your brand. Custom CGI delivers photorealistic,
                  cinema-quality visuals that look indistinguishable from real
                  footage. Quality matters—our clients see 10M+ views because
                  professional CGI stops scrolls, while AI videos get skipped.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InnovativeProblem;
