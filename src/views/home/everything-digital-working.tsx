"use client";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import LottiePlayer from "@/components/ui/lottie-player";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const data = [
  {
    heading: "Build",
    image: "/everything1.json",
    lists: [
      "Website design and development",
      "Web applications and AI solutions",
      "Branding and visual production",
      "Video advertising and creative assets",
    ],
  },
  {
    heading: "Grow",
    image: "/everything2.json",
    lists: [
      "Digital marketing",
      "Search engine optimisation",
      "AI-assisted discovery improvements",
    ],
  },
  {
    heading: "Scale ",
    image: "/everything3.json",
    lists: [
      "Ongoing technical support",
      "Platform management",
      "Continuous performance improvements",
    ],
  },
];
const EverythingDigitalWorking = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const methodsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      methodsRef.current.forEach((method, i) => {
        if (method) {
          gsap.from(method, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: method,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className="py-20 relative bg-tertiary    -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[2%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]"
    >
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] animate-pulse
          "
      ></div>
      <Container>
        <div className="flex flex-col gap-6">
          <HeadingTwo ref={headingRef} className="text-center">
            Everything Digital <br />{" "}
            <span className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-clip-text text-transparent">
              Working Together
            </span>
          </HeadingTwo>
          <div className="max-w-[1041px] mx-auto flex flex-col gap-6">
            <p
              ref={(el) => {
                methodsRef.current[0] = el;
              }}
              className="text-center"
            >
              Many businesses struggle because their website, marketing, and
              internal systems are managed separately. When platforms don’t
              connect properly, performance becomes inconsistent and harder to
              measure. In many cases, fixing disconnected tools costs more than
              building the right foundation from the start.
            </p>
            <p
              ref={(el) => {
                methodsRef.current[1] = el;
              }}
              className="text-center font-semibold "
            >
              At HTSOL Inc., we keep everything under one coordinated structure
              so each decision supports the next.
            </p>
            <p
              ref={(el) => {
                methodsRef.current[2] = el;
              }}
              className="text-center"
            >
              We support the full digital lifecycle:
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {data.map((item) => (
              <div
                key={item.heading}
                className="rounded-[20px] group p-px bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
              >
                <div className="p-2 rounded-[20px] h-full bg-tertiary">
                  <div className="flex rounded-[20px] flex-col px-6 gap-5 py-10  h-full  bg-black transition-all duration-200 group-hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] ">
                    <div className="w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center">
                      {/* <Image
                        width={27}
                        height={34}
                        src={item.image}
                        alt={item.heading}
                        className="w-10 h-10"
                      /> */}
                      <LottiePlayer
                        className="w-14 h-14"
                        src={item.image}
                        autoplay
                        loop
                      />
                    </div>
                    <h3
                      className="uppercase font-primary text-[20px]"
                      dangerouslySetInnerHTML={{ __html: item.heading }}
                    ></h3>
                    <ul className="list-disc ps-5">
                      {item.lists.map((list, idx) => (
                        <li key={idx}>{list}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center">
            This integrated structure ensures your tools work together rather
            than competing for attention.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default EverythingDigitalWorking;
