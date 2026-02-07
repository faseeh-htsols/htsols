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
    <div className="bg-black py-24 text-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <HeadingTwo className=" text-white tracking-wider">
            OUR CLIENTS
          </HeadingTwo>
        </div>
        <div className="relative w-full max-w-[1100px] mx-auto">
          {/* === Vertical Lines (Y-Axis) === */}
          <div
            className="hidden lg:block absolute top-0 bottom-0 left-1/3 w-px "
            style={{
              background: "linear-gradient(180deg, #00A1A5 0%, #1A2626 100%)",
            }}
          ></div>
          <div
            className="hidden lg:block  absolute top-0 bottom-0 left-2/3 w-px "
            style={{
              background: "linear-gradient(180deg, #00A1A5 0%, #1A2626 100%)",
            }}
          ></div>

          {/* === Horizontal Lines (X-Axis) === */}
          <div
            className="hidden lg:block absolute left-0 right-0 top-[33.33%] h-px "
            style={{
              background: "linear-gradient(90deg, #00A1A5 0%, #1A2626 100%)",
            }}
          ></div>
          <div
            className="hidden lg:block absolute left-0 right-0 top-[66.66%] h-px "
            style={{
              background: "linear-gradient(90deg, #00A1A5 0%, #1A2626 100%)",
            }}
          ></div>
          {/* <div
            className="hidden lg:block absolute left-0 right-0 top-3/4 h-px"
            style={{
              background: "linear-gradient(90deg, #00A1A5 0%, #1A2626 100%)",
            }}
          ></div> */}

          {/* === Grid Content === */}
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3">
            {data.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center py-12"
              >
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
