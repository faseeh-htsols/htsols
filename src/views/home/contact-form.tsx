import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[url(/contact-form-bg.jpg)] bg-cover relative">
      {/* <div className="pointer-events-none h-full w-full absolute inset-x-0 top-0 flex justify-center">
        <div className="w-full h-full  max-w-[1600px] bg-gradient-to-r from-transparent via-[#00A1A5] to-transparent" />
      </div> */}
      <Container>
        <div className="relative py-10 flex gap-4 flex-col max-w-5xl mx-auto">
          <div className="flex justify-center">
            <Image
              src={"/chat.svg"}
              alt="chat icon"
              className="w-[52px] h-[52px]"
              width={54}
              height={54}
            />
          </div>

          <HeadingTwo className="text-center">Let’s have a chat</HeadingTwo>
          <p className="text-white text-[20px] text-center">
            HT-Solutions provides you Website Designing, Web Development, SEO
            Services, Graphic Designing, Mobile Application Development Video
            Production, Voice Over, Digital Marketing and Network Solutions in
            Lahore, Pakistan.
          </p>
        </div>
        <div className="relative mt-10">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white text-white"
                placeholder="First Name"
              />
            </div>
            <div>
              <input type="text" className="" placeholder="Last Name" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <input type="text" className="" placeholder="Contact No" />
            </div>
            <div>
              <input type="text" className="" placeholder="Email Address" />
            </div>
          </div>
          <div>
            <select name="" id="">
              <option value="">web dev</option>
              <option value=""> cgi / vfx /3d animations </option>
              <option value=""> staff augmentation </option>
              <option value=""> Complete digital transformation </option>
            </select>
          </div>
          <div>
            <textarea name="" placeholder="Enquiry  details" id=""></textarea>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
