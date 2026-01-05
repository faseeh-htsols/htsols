import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
const WannaStart = () => {
  return (
    <div className="py-20 bg-[url('/cgi/new-lines.png'),linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] bg-cover                                       ">
      <Container>
        <div>
          <HeadingTwo className="text-center">
            Wanna start right now?
          </HeadingTwo>
          <div className="max-w-[1080px] mx-auto">
            <div>
              <div>
                <Image
                  src={"/cgi/email.svg "}
                  width={80}
                  height={80}
                  className="w-20 h-20"
                  alt="image"
                />
              </div>
              <h3>EMAIL US NOW</h3>
              <p>abc@gmail.com</p>
            </div>
            <div>
              <div>
                <Image
                  src={"/cgi/tel.svg"}
                  width={80}
                  height={80}
                  className="w-20 h-20"
                  alt="image"
                />
              </div>
              <h3>CALL US NOW</h3>
              <p>123 456 789</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WannaStart;
