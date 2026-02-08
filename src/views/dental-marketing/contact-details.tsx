import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const ContactDetails = () => {
  return (
    <div className="bg-black py-24">
      <Container>
        <div className="flex mb-10 justify-center">
          <Image
            className="w-[150px] md:w-[250px] h-[50px] object-contain"
            src={"/footer-logo.png"}
            width={300}
            height={100}
            alt="logo"
          />
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-tertiary py-10 text-white flex flex-col gap-4 border border-white rounded-2xl">
            <div className="flex justify-center">
              <Image
                src={"/dental/email-icon.svg"}
                width={70}
                height={70}
                alt="image"
              />
            </div>
            <h3 className="uppercase text-center text-xl font-primary">
              EMAIL US NOW
            </h3>
            <p className="text-center">
              <a href="mailto: hello@htsol.ca"> hello@htsol.ca</a>
            </p>
          </div>
          <div className="bg-tertiary py-10 text-white flex flex-col gap-4 border border-white rounded-2xl">
            <div className="flex justify-center">
              <Image
                src={"/dental/call-icon.svg"}
                width={70}
                height={70}
                alt="image"
              />
            </div>
            <h3 className="uppercase text-center text-xl font-primary">
              EMAIL US NOW
            </h3>
            <p className="text-center">
              <a href="tel:(+1) 437-937-1235">(+1) 437-937-1235</a>
            </p>
          </div>
          <div className="bg-tertiary py-10 text-white flex flex-col gap-4 border border-white rounded-2xl">
            <div className="flex justify-center">
              <Image
                src={"/dental/email-icon.svg"}
                width={70}
                height={70}
                alt="image"
              />
            </div>
            <h3 className="uppercase text-center text-xl font-primary">
              book a free consultation
            </h3>
            <p className="text-center">
              <a
                href="https://calendly.com/faseehkhan-htsol/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactDetails;
