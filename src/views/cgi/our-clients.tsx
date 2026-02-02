import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
const IMAGES_CLIENTS_CGI = [
  {
    image: "/cgi/gendiwa-design.png",
    alt: "Gendwa design",
  },
  {
    image: "/cgi/virefori.png",
    alt: "virefori",
  },
  {
    image: "/cgi/loka-oma.png",
    alt: "loka-oma",
  },
  {
    image: "/cgi/one-stup.png",
    alt: "one-stup",
  },
  {
    image: "/cgi/gendiwa-design.png",
    alt: "Gendwa design",
  },
  {
    image: "/cgi/virefori.png",
    alt: "virefori",
  },
  {
    image: "/cgi/loka-oma.png",
    alt: "loka-oma",
  },
  {
    image: "/cgi/one-stup.png",
    alt: "one-stup",
  },
];
const OurClients = () => {
  return (
    <div className="py-24 relative bg-tertiary -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "
      ></div>

      <Container>
        <div className="flex flex-col gap-10 ">
          <HeadingTwo className="">OUR CLIENTS</HeadingTwo>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {IMAGES_CLIENTS_CGI.map((item, index) => (
              <div
                key={index}
                className="bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] rounded-lg p-0.5"
              >
                <div className="bg-black py-10 flex justify-center items-center rounded-lg">
                  <Image
                    src={item.image}
                    width={400}
                    height={400}
                    className="w-[75%] h-10 object-contain"
                    alt={item.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurClients;
