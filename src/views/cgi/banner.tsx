import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[url(/cgi/banner.png)] h-screen bg-center flex items-center relative pb-36 bg-cover  ">
      <div className="absolute top-20 left-0">
        <Image
          src={"/left-gradient.png"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <div className="absolute top-20 right-0">
        <Image
          src={"/right-gradient.png"}
          width={500}
          height={500}
          className="w-[350px] h-[350px]"
          alt="left gradient"
        />
      </div>
      <Container>
        <div>
          <h1 className="text-6xl font-primary -mt-20 font-semibold text-white text-center uppercase">
            Brands go viral with wild CGI videos
          </h1>
        </div>
        <div></div>
      </Container>
    </div>
  );
};

export default Banner;
