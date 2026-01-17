import CircularText from "@/components/ui/CircularText";
import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import { WEBSITE_NEEDS_BUISNESS } from "@/constants";
import Image from "next/image";

const NeedsBuisness = () => {
  return (
    <div className="bg-tertiary py-32 relative">
      <Container>
        <div className="flex flex-col gap-12">
          <HeadingTwo className="text-center">
            Why Your business needs a <br /> website?
          </HeadingTwo>
          <div>
            <p className="text-center">
              In today’s digital world, a strong online presence isn’t optional
              — it’s how patients find, compare, and choose their dentist.
              Without a professional, easy-to-navigate website, even the best
              clinics risk being overlooked. A great dental website builds
              credibility, showcases your expertise, and makes it effortless for
              patients to get in touch or book an appointment. It’s your 24/7
              receptionist, treatment showcase, and marketing engine — all in
              one place.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {WEBSITE_NEEDS_BUISNESS.map((item) => (
              <div
                key={item.heading}
                className="rounded-[20px] group p-px bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]"
              >
                <div className="p-2 rounded-[20px] bg-tertiary">
                  <div className="flex rounded-[20px] flex-col gap-5 py-10 items-center bg-black transition-all duration-200 group-hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] ">
                    <div className="w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center">
                      <Image
                        width={27}
                        height={34}
                        src={item.image}
                        alt={item.heading}
                        className="w-10 h-10"
                      />
                    </div>
                    <h3
                      className="uppercase text-center font-primary text-[20px]"
                      dangerouslySetInnerHTML={{ __html: item.heading }}
                    ></h3>
                    <p className="text-center">{item.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <CircularText />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NeedsBuisness;
