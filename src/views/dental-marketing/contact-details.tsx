import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const ContactDetails = () => {
  return (
    <div className="bg-black py-24 lg:py-40">
      <Container>
        <div className="flex mb-10 justify-center">
          <Image
            className="w-[150px] md:w-[250px] h-[50px] object-contain"
            src={"/footer-logo.webp"}
            width={300}
            height={100}
            alt="logo"
            fetchPriority="high"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          <div className="bg-tertiary py-8 px-4 text-white flex flex-col gap-4 border border-white rounded-2xl">
            <div className="flex justify-center">
              <Image
                src={"/dental/email-icon.svg"}
                width={70}
                height={70}
                alt="image"
              />
            </div>
            <h3 className="uppercase text-center text-xl font-primary leading-tight">
              EMAIL US NOW
            </h3>
            <p className="text-center break-words">
              <a href="mailto:hello@htsol.ca">hello@htsol.ca</a>
            </p>
          </div>
          <div className="bg-tertiary py-8 px-4 text-white flex flex-col gap-4 border border-white rounded-2xl">
            <div className="flex justify-center">
              <Image
                src={"/dental/call-icon.svg"}
                width={70}
                height={70}
                alt="image"
              />
            </div>
            <h3 className="uppercase text-center text-xl font-primary leading-tight">
              CALL US NOW
            </h3>
            <p className="text-center break-words">
              <a href="tel:+14379371235">(+1) 437-937-1235</a>
            </p>
          </div>
          <div className="bg-tertiary py-8 px-4 text-white flex flex-col gap-4 border border-white rounded-2xl">
            <div className="flex justify-center">
              <Image
                src={"/dental/email-icon.svg"}
                width={70}
                height={70}
                alt="image"
              />
            </div>
            <h3 className="uppercase text-center text-xl font-primary leading-tight">
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
