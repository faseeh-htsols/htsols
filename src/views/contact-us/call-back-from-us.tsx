import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import Image from "next/image";

const CallBackFromUs = () => {
  return (
    <div>
      <Container>
        <div className="mb-4">
          <Image
            src={"/map-contact.png"}
            alt="map"
            width={900}
            height={900}
            className="w-full h-[600px] object-contain object-center"
          />
        </div>
      </Container>
      <div>
        <Container>
          <div className="border border-[#5C5C5C] rounded-lg px-4 flex gap-4 relative">
            <div className="grow w-[60%] py-8 flex flex-col gap-3">
              <h2 className="font-primary uppercase text-2xl">
                Want A Call back from us ?
              </h2>
              <p>
                HT-Solutions provides you Website Designing, Web Development,
                SEO Services, Graphic Designing.
              </p>
              <div>
                <Button href="/">Schedule A call Back</Button>
              </div>
            </div>
            <div className="w-[40%] absolute -top-10 right-0">
              <Image
                src={"/call-back-from-us.png"}
                alt="Call back from us"
                width={700}
                height={700}
                className="w-full h-[330px] object-contain"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CallBackFromUs;
