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
    <div className="py-24 bg-tertiary">
      <Container>
        <div className="flex flex-col gap-10 ">
          <HeadingTwo className="text-center">OUR CLIENTS</HeadingTwo>
          <div className="grid grid-cols-4 gap-8">
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
