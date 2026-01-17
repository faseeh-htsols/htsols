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

const WhatWeOffer = () => {
  return (
    <div className="relative bg-black pb-32  [clip-path:polygon(0_0,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_97%,0_100%)]">
      <Container>
        <div className="flex flex-row gap-5">
          <div className="w-[250px] text-white flex flex-col gap-8 shrink-0 pr-5 border-r border-white pt-10">
            <h2 className="uppercase text-3xl font-semibold font-primary">
              What WE Offer
            </h2>
            <p className="text-[20px]">
              HT-Solutions provides you Website Designing, Web Development, SEO
              Services, Graphic Designing, Mobile Application Development Video
              Production, Voice Over, Digital Marketing and Network Solutions in
              Lahore, Pakistan.
            </p>

            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center">
              <CircularText />
            </div>
          </div>

          <div className="grow pt-10">
            <Accordion type="single" className="space-y-4 mb-12" collapsible>
              {SERVICES_SERVICES_OFFERED_ACCORDION.map((item, index) => (
                <AccordionItem
                  key={item.title}
                  value={String(index)}
                  className="
                    border border-[#2C2C2C] border-b! px-4 bg-transparent rounded-lg transition-all
                    data-[state=open]:border-transparent data-[state=open]:bg-tertiary
                    
                  "
                >
                  <AccordionTrigger
                    className="text-white font-secondary text-lg uppercase hover:no-underline cursor-pointer  [&[data-state=closed]_.offer-icon_svg]:fill-white/60
    [&[data-state=open]_.offer-icon_svg]:fill-white"
                  >
                    <div className="flex gap-3 items-center">
                      <div className="offer-icon [&_svg]:w-12 [&_svg]:h-12">
                        {parse(item.icons)}
                      </div>
                      <h3>{item.title}</h3>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="text-white">
                    <div>
                      <div className="grid grid-cols-2 gap-5">
                        {item.images.map((img, idx) => (
                          <div key={idx}>
                            <img src={img.src} alt={img.alt} />
                          </div>
                        ))}
                      </div>

                      <div>
                        <p>{item.para}</p>
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
