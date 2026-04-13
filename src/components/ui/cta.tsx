import React from "react";
import Container from "./container";
import Button from "./Button";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="py-20 lg:py-40">
      <Container>
        <div className="border border-[#5C5C5C] rounded-lg px-4 flex lg:flex-row flex-col gap-4 relative text-white">
          <div className="lg:w-[56%] py-8 flex flex-col gap-4">
            <h2 className="font-primary uppercase text-2xl">
              IS YOUR DENTAL WEBSITE UNDERPERFORMING TECHNICALLY?
            </h2>
            <p className="text-xl">
              If your website is slow, not ranking, difficult to update, or losing patients to competitors with better-performing sites — the problem is usually technical, not marketing. I offer a direct technical consultation where I review what you have, identify what is limiting performance, and tell you exactly what needs to be fixed and why. No pitch. No generic recommendation. Just a technical assessment from someone who builds this specifically for dental practices.
            </p>
            <div className="flex">
              <Button href="/contact-us">Book a Technical Consultation</Button>
            </div>
          </div>
          <div className="lg:w-[37%] lg:absolute lg:-top-10 lg:right-0">
            <Image
              src={"/call-back-from-us.webp"}
              alt="Call back from us"
              width={700}
              height={700}
              className="w-full h-[300px] lg:h-[580px] object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
