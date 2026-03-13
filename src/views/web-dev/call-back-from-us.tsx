import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import DoubleCurves from "@/components/ui/double-curves";
import Image from "next/image";

const CallBackFromUs = () => {
  return (
    <Container>
      <div className="py-20">
        <div className="border border-[#5C5C5C] rounded-lg px-4 flex lg:flex-row flex-col gap-0 lg:gap-4 relative text-white mb-20">
          <div className="lg:w-[56%] py-8 flex flex-col gap-4">
            <h2 className="font-primary uppercase text-2xl">
              Ready to Build a Website That Supports Growth?
            </h2>
            <p className="text-xl">
              If you want a website that looks modern, loads fast, supports SEO,
              and helps your marketing work harder, HTSOL Inc. can help.
            </p>
            <div className="flex">
              <Button href="/">Book a Free Consultation </Button>
            </div>
          </div>
          <div className="lg:w-[37%] lg:absolute lg:-top-10 lg:right-0">
            <Image
              src={"/call-back-from-us.webp"}
              alt="Call back from us"
              width={700}
              height={700}
              className="w-full h-[300px] lg:h-[380px] object-contain"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CallBackFromUs;
