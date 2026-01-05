import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-black relative pb-20 pt-36 [clip-path:polygon(0_0,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_97%,0_100%)]">
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
          <h1 className="text-6xl font-primary mb-8 font-semibold text-white text-center uppercase">
            Websites that convert clicks into consultations
          </h1>
        </div>

        <p className="text-lg text-center mb-8">
          Your website is the digital front door to your practice it’s where
          trust begins. At Dentopia, we build fast, elegant, and
          conversion-driven websites that reflect your brand, perform
          beautifully on every device, and turn patient interest into bookings.
          Every line of code and every pixel is designed to grow your practice,
          not just decorate it. 
        </p>
        <div>
          <Image
            src={"/website/website-banner.png"}
            alt=""
            className="w-full h-[500px] object-contain"
            width={1000}
            height={1000}
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
