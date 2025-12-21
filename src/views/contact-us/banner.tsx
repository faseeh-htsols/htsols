import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-black relative py-10 pt-24 ">
      {/* <div className="pointer-events-none h-full w-full absolute inset-x-0 top-0 flex justify-center">
        <div className="w-full h-full  max-w-[1600px] bg-gradient-to-r from-transparent via-[#00A1A5] to-transparent" />
      </div> */}
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
        <div className="relative py-10 flex gap-8 flex-col max-w-5xl mx-auto">
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
        <div className="relative mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
            <div>
              <input
                type="text"
                className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
            <div>
              <input
                type="text"
                className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                placeholder="Contact No"
              />
            </div>
            <div>
              <input
                type="text"
                className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
            <div>
              <input
                type="text"
                className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
                placeholder="City/Area"
              />
            </div>
            <select
              name=""
              id=""
              className="h-10 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-sm px-4 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
            >
              <option value="" className="bg-black text-white">
                web dev
              </option>
              <option value="" className="bg-black text-white">
                {" "}
                cgi / vfx /3d animations{" "}
              </option>
              <option value="" className="bg-black text-white">
                {" "}
                staff augmentation{" "}
              </option>
              <option value="" className="bg-black text-white">
                {" "}
                Complete digital transformation{" "}
              </option>
            </select>
          </div>
          <div className="mb-3">
            <textarea
              name=""
              className="h-28 w-full relative outline-0 bg-[url(/input-bg.png)] bg-cover border-0 rounded-md px-4 py-3 backdrop:backdrop-blur-2xl placeholder:text-white/55 text-white"
              placeholder="Enquiry  details"
              id=""
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="inline-flex items-center bg-white gap-2 px-6 py-3 text-sm text-primary font-medium uppercase rounded-full tracking-wider transition-all duration-300 border">
              Send Message
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_397_144)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.56991 23.5995C5.13058 23.1602 5.13057 22.4479 5.56991 22.0085L17.2372 10.3413C17.6765 9.90193 18.3888 9.90193 18.8282 10.3413C19.2675 10.7806 19.2675 11.4929 18.8282 11.9322L7.1609 23.5995C6.72156 24.0389 6.00923 24.0388 5.56991 23.5995Z"
                    fill="#000"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.36147 11.1338C7.36147 10.5125 7.86518 10.0088 8.48651 10.0088L18.0324 10.0088C18.6537 10.0088 19.1574 10.5125 19.1575 11.1338L19.1575 20.6797C19.1574 21.301 18.6537 21.8047 18.0324 21.8048C17.4111 21.8047 16.9074 21.301 16.9074 20.6797L16.9074 12.2588L8.48647 12.2588C7.86519 12.2588 7.36151 11.7551 7.36147 11.1338Z"
                    fill="#000"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_397_144"
                    x1="5.56991"
                    y1="23.5995"
                    x2="18.8282"
                    y2="10.3413"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#075B65" />
                    <stop offset="0.370192" stop-color="#00838A" />
                    <stop offset="0.8125" stop-color="#328A99" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_397_144"
                    x1="12.464"
                    y1="16.7022"
                    x2="18.8279"
                    y2="10.3383"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#075B65" />
                    <stop offset="0.370192" stop-color="#00838A" />
                    <stop offset="0.8125" stop-color="#328A99" />
                  </linearGradient>
                  <clipPath id="clip0_397_144">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 16.9706) rotate(-45)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
