import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
const data = [
  {
    logo: "/dental/clients1.png",
    name: "image",
  },
  {
    logo: "/dental/clients2.png",
    name: "image",
  },
  {
    logo: "/dental/clients3.png",
    name: "image",
  },
  {
    logo: "/dental/clients4.png",
    name: "image",
  },
  {
    logo: "/dental/clients5.png",
    name: "image",
  },
  {
    logo: "/dental/clients6.png",
    name: "image",
  },
  {
    logo: "/dental/clients7.png",
    name: "image",
  },
  {
    logo: "/dental/clients8.png",
    name: "image",
  },
  {
    logo: "/dental/clients9.png",
    name: "image",
  },
];
const OurClients = () => {
  return (
    <div className="bg-[linear-gradient(99.4deg,#000000_0.35%,#0F272A_98.5%)] py-24 text-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <HeadingTwo className=" text-white tracking-wider">
            OUR CLIENTS
          </HeadingTwo>
        </div>
        <div className="relative w-full max-w-[1100px] mx-auto">
          {/* === Grid Content === */}
          <div className="grid grid-cols-1 lg:grid-cols-5 justify-center">
            {data.map((client, index) => (
              <div key={index} className="">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={60}
                  className="object-contain w-[80%] h-[70px] sm:w-[140px] sm:h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurClients;
