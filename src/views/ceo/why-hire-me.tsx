import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { WHY_HIRE_ME_CEO } from "@/constants";
import parse from "html-react-parser";
const WhyHireMe = () => {
  return (
    <div className="bg-tertiary py-20 relative">
      <Container>
        <div>
          <div className="max-w-[1124px] mx-auto flex flex-col gap-5 mb-4">
            <HeadingTwo className="text-center">Why hire me</HeadingTwo>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 mb-6">
          {WHY_HIRE_ME_CEO.map((item, index) => (
            <div
              key={item.heading}
              className="relative group  bg-black rounded-lg px-4 py-6 hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
            >
              <div className="p-3 absolute right-0 top-0 text-xl rounded-bl-2xl font-primary bg-tertiary">
                {index + 1}
              </div>
              <div className="flex flex-col gap-4">
                <div className="p-4 border border-[#075B65] group-hover:bg-white w-fit rounded-full">
                  {parse(item.svg)}
                </div>
                <h3 className="font-primary uppercase">{item.heading}</h3>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button href="/">Let’s discuss your project</Button>
        </div>
      </Container>
    </div>
  );
};

export default WhyHireMe;
