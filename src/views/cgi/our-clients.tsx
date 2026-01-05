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
    <div>
      <Container>
        <div>
          <HeadingTwo>OUR CLIENTS</HeadingTwo>
          <div>
            {IMAGES_CLIENTS_CGI.map((item, index) => (
              <div key={index}>
                <div>
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
