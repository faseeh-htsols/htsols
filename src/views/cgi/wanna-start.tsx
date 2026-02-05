import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
const WannaStart = () => {
  return (
    <div className="py-20 rounded-t-4xl bg-[url('/cgi/new-lines.png'),linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-cover                                       ">
      <Container>
        <div className="flex flex-col gap-20">
          <HeadingTwo className="text-center">
            Wanna start right now?
          </HeadingTwo>
          <div className="max-w-[1080px] mx-auto grid md:grid-cols-3 w-full gap-3">
            <div className="bg-white py-7 rounded-3xl flex flex-col gap-5">
              <div className="flex justify-center">
                <Image
                  src={"/cgi/email.svg"}
                  width={80}
                  height={80}
                  className="w-20 h-20"
                  alt="image"
                />
              </div>
              <h3 className="font-primary uppercase text-[20px] text-black font-medium text-center">
                book a free consultation
              </h3>
              <p className="text-[20px] font-sans text-center text-black">
                <a
                  href="https://calendly.com/faseehkhan-htsol/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  book
                </a>
              </p>
            </div>
            <div className="bg-white py-7 rounded-3xl flex flex-col gap-5">
              <div className="flex justify-center">
                <Image
                  src={"/cgi/email.svg"}
                  width={80}
                  height={80}
                  className="w-20 h-20"
                  alt="image"
                />
              </div>
              <h3 className="font-primary uppercase text-[20px] text-black font-medium text-center">
                EMAIL US NOW
              </h3>
              <p className="text-[20px] font-sans text-center text-black">
                <a href="mailto:hello@htsol.ca">hello@htsol.ca</a>
              </p>
            </div>
            <div className="bg-white py-7 rounded-3xl flex flex-col gap-5">
              <div className="flex justify-center">
                <Image
                  src={"/cgi/tel.svg"}
                  width={80}
                  height={80}
                  className="w-20 h-20"
                  alt="image"
                />
              </div>
              <h3 className="font-primary uppercase text-[20px] text-black font-medium text-center">
                CALL US NOW
              </h3>
              <p className="text-[20px] font-sans text-center text-black">
                <a href="tel:(+1) 437-937-1235">(+1) 437-937-1235</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WannaStart;
