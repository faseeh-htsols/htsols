import CircularText from "@/components/ui/CircularText";
import Container from "@/components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-two";
import { SERVICES_SERVICES_OFFERED_ACCORDION } from "@/constants";
import parse from "html-react-parser";
import LottiePlayer from "@/components/ui/lottie-player";
import Image from "next/image";
import Link from "next/link";

const WhatWeOffer = () => {
  return (
    <div className="bg-tertiary py-20 lg:py-40">
      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-5">
          <div className="lg:w-[250px] shrink-0 lg:pr-5 lg:border-r border-white">
            <div className="text-white flex flex-col gap-8 pt-0 lg:sticky lg:top-24">
              <h2 className="uppercase text-xl md:text-2xl font-semibold font-primary">
                Top Digital Marketing & Web Development Services in Canada
              </h2>

              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center">
                <CircularText />
              </div>
            </div>
          </div>

          <div className="grow pt-0">
            <Accordion type="single" className="space-y-4 mb-12" collapsible>
              {SERVICES_SERVICES_OFFERED_ACCORDION.map((item, index) => (
                <AccordionItem
                  key={item.title}
                  value={String(index)}
                  className="
                    border border-[#2C2C2C] border-b! px-4 bg-black rounded-lg transition-all
                    data-[state=open]:border-white data-[state=open]:bg-black
                    [&[data-state=closed]_.offer-icon_img]:opacity-80 
                    [&[data-state=open]_.offer-icon_img]:opacity-100
                    [&[data-state=closed]_h3]:opacity-80
                    [&[data-state=open]_h3]:opacity-100
                  "
                >
                  <AccordionTrigger
                    className="text-white font-secondary text-lg uppercase hover:no-underline cursor-pointer  [&[data-state=closed]_.offer-icon_svg]:fill-white/60
                  [&[data-state=open]_.offer-icon_svg]:fill-white"
                  >
                    <div className="flex gap-3 items-center justify-center">
                      <div className="offer-icon [&_svg]:w-12 [&_svg]:h-12">
                        {/* {parse(item.icons)} */}
                        <Image
                          width={27}
                          height={34}
                          src={item.icon}
                          alt={item.title}
                          className="w-8 h-8"
                        />
                        {/* <LottiePlayer
                          className="w-[45px] h-[45px]"
                          src={item.icon}
                          autoplay
                          loop
                        /> */}
                      </div>
                      <h3 className="transition-opacity text-[20px] font-primary">{item.title}</h3>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="text-white">
                    <div>
                      {item.images && (
                        <div className="grid grid-cols-2 gap-5">
                          {item.images.map((img, idx) => (
                            <div key={idx}>
                              <img src={img.src} alt={img.alt} />
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-col justify-start items-start gap-4">
                        {item.subHeading && (
                          <h3 className="text-[#00A1A5] text-[18px] font-poppins">{item.subHeading}</h3>
                        )}
                        <p dangerouslySetInnerHTML={{ __html: item.para }} />
                        {item.subHeading2 && (
                          <h3 className="text-[#00A1A5] text-[18px] font-poppins">{item.subHeading2}</h3>
                        )}
                        {item.lists && (
                          <ul className="list-disc pl-5 space-y-4 marker:text-[#00A1A5]">
                            {item.lists.map((listItem, index) => (
                              <li key={index}>
                                {listItem.title && (
                                  <h3 className="text-[#00A1A5] text-[18px] font-poppins">{listItem.title}</h3>
                                )}
                                <p dangerouslySetInnerHTML={{ __html: listItem.para }} />
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.botPara && (
                          <p dangerouslySetInnerHTML={{ __html: item.botPara }} />
                        )}
                        {item.lists2 && (
                          <ul className="list-disc pl-5 space-y-4 marker:text-[#00A1A5]">
                            {item.lists2.map((listItem, index) => (
                              <li key={index}>
                                {listItem.title && (
                                  <h3 className="text-[#00A1A5] text-[18px] font-poppins">{listItem.title}</h3>
                                )}
                                <p dangerouslySetInnerHTML={{ __html: listItem.para }} />
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="flex justify-center items-center gap-8">
                          <Link
                            href="/services/website-development"
                            className="inline-flex items-center gap-2 group"
                          >
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#075B65] via-[#00838A] to-[#328A99] font-semibold uppercase text-[18px]">
                              View Portfolio
                            </span>
                            <Image
                              src="/right-arrow.svg"
                              alt="Arrow Right"
                              width={25}
                              height={25}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </Link>
                          <Link
                            href="/services/website-development"
                            className="inline-flex items-center gap-2 group"
                          >
                            <span className="text-white font-semibold uppercase text-[18px] underline">
                              START YOUR PROJECT Today
                            </span>
                            <Image
                              src="/arrow.svg"
                              alt="Arrow Right"
                              width={20}
                              height={20}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeOffer;
