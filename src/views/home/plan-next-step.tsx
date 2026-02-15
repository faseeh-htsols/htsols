import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";

const PlanNextStep = () => {
  return (
    <div className="bg-black py-20">
      <Container>
        <div className="bg-[url(/next-step.png)] bg-cover rounded-2xl overflow-hidden">
          <div className="flex relative">
            <div className="max-w-[980px] py-10 px-4 flex flex-col gap-5">
              <HeadingTwo className="relative text-white z-1">
                Let’s Plan Your Next Step
              </HeadingTwo>
              <p className="relative text-white z-1">
                If you have an idea, a challenge, or a growth target, we are
                ready to talk <br /> it through with you.
              </p>
              <p className="font-primary relative z-1">
                Book a free consultation with HTSOL Inc., and we will explore{" "}
                <br />
                the most practical way to move forward together.
              </p>
              <div className="flex relative z-1">
                <Button href="/">Get In Touch With us</Button>
              </div>
            </div>
            <div className="absolute  h-full w-[40%] right-0">
              <Image
                src={"/right-next-step.png"}
                alt="image"
                width={100}
                height={100}
                className="w-full h-full opacity-70 object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PlanNextStep;
