"use client";
import { useState } from "react";
import PopUp from "@/components/ui/popup";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import Button from "@/components/ui/Button";
const data = [
  {
    heading: "1: Service Businesses",
    smallHeading: "Service Providers Going Next-Level",
    para: "Salons, gyms, restaurants, clinics—turn boring before/afters into scroll-stopping CGI ads that get shared and remembered.",
    href: "/cgi1.mp4",
  },
  {
    heading: "2: Product Businesses",
    smallHeading: "Product Brands Wanting Viral Impact",
    para: "Showcase products in impossible scenarios. CGI creates hyperrealistic, gravity-defying content that drives conversions.",
    href: "/cgi1.mp4",
  },
  {
    heading: "3: Location Showcases",
    smallHeading: "Businesses Showcasing Locations",
    para: "Real estate, hotels, retail chains—bring locations to life with cinematic CGI reveals that drive foot traffic.",
    href: "/cgi1.mp4",
  },
  {
    heading: "4: New Launches",
    smallHeading: "New Product/Service Launches",
    para: "Launching something new? Create viral CGI commercials that position your brand as innovative and get millions of views.",
    href: "/cgi1.mp4",
  },
];
const RecentlyDoneProjects = () => {
  const [open, setOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const openPopup = (src: string) => {
    setActiveSrc(src);
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
    setActiveSrc(null);
  };
  return (
    <div className="py-24 relative -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[1%] [clip-path:polygon(0_1%,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_100%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>
      <Container>
        <div className="mb-10">
          <HeadingTwo className="text-center">
            Is CGI / 3D Right for Your Business?
          </HeadingTwo>{" "}
        </div>
      </Container>
      <div className="bg-[url(/cgi/reccently-done-bg.png)] bg-center">
        <Container>
          <div className="max-w-[300px] mx-auto">
            {/* <Image
              width={300}
              height={1000}
              src={"/cgi/reccently-done.png"}
              alt="image"
              className="w-full h-[450px] object-contain object-center"
            /> */}
          </div>
        </Container>
      </div>
      <video
        src="/cgi/ball-animation.mp4"
        autoPlay
        muted
        loop
        className="w-full h-[563px] object-cover"
      ></video>
      <Container>
        <div className="grid -mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 gap-x-4 mb-8">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#5C5C5C_99.52%)] p-0.5 rounded-lg"
            >
              <div className="bg-black h-full relative p-4 flex flex-col gap-3 rounded-lg ">
                <div
                  className="ms-auto -mt-10 cursor-pointer"
                  onClick={() => openPopup(item.href)}
                >
                  <Image
                    src={"/cgi/play-btn.svg"}
                    alt="images"
                    width={48}
                    height={48}
                    className="w-[45px] h-[45px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-primary">{item.heading}</h3>
                  <h4 className="font-semibold">{item.smallHeading}</h4>
                  <p>{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button href="/">Book 1:1 Consultation With Us</Button>
        </div>
      </Container>
      <PopUp open={open} src={activeSrc} onClose={closePopup} />
    </div>
  );
};

export default RecentlyDoneProjects;
