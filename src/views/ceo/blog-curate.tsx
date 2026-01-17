import HeadingTwo from "@/components/ui/heading-two";
import Container from "@/components/ui/container";
import { BOLG_CURATE_CEO } from "@/constants";
import Image from "next/image";
import Button from "@/components/ui/Button";

const BlogCurate = () => {
  return (
    <div className=" bg-tertiary relative  -mt-[9%] sm:-mt-[5%] md:-mt-[5%] lg:-mt-[4%] xl:-mt-[3%] [clip-path:polygon(0_1%,100%_0,100%_99%,0_100%)] md:[clip-path:polygon(0_2%,100%_0,100%_98%,0_100%)] lg:[clip-path:polygon(0_3%,100%_-5px,100%_97%,0_100%)]">
      <div
        className="pointer-events-none absolute z-2 top-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "></div>
      <div className="py-20">
        <Container>
          <HeadingTwo className="text-center mb-10">A blog I curate</HeadingTwo>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7  ">
            {BOLG_CURATE_CEO.map((item, index) => (
              <div key={index} className="relative overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="h-[470px] w-full"
                />
                <div className="absolute inset-0 w-full h-full">
                  <div className="p-5 flex flex-col h-full justify-between">
                    <button className="w-10 ms-auto relative z-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white transition-all duration-300  group-hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] group-hover:border-[#075B65]">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-secondary h-6 w-6 transition-all duration-150 ">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.32725 18.4846C4.90706 18.027 4.93743 17.3153 5.3951 16.8951L17.5493 5.736C18.007 5.31581 18.7187 5.34619 19.1389 5.80386C19.5591 6.26152 19.5287 6.97321 19.071 7.3934L6.91679 18.5525C6.45912 18.9727 5.74744 18.9423 5.32725 18.4846Z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.64913 6.10673C7.67563 5.48597 8.20036 5.0042 8.82112 5.0307L18.3584 5.43778C18.9791 5.46433 19.4608 5.98906 19.4344 6.60978L19.0273 16.147C19.0007 16.7678 18.476 17.2495 17.8553 17.2231C17.2346 17.1965 16.7528 16.6718 16.7793 16.0511L17.1384 7.63779L8.72512 7.27869C8.10441 7.25215 7.62268 6.72745 7.64913 6.10673Z"
                        />
                      </svg>
                    </button>
                    <h3 className="font-primary uppercase font-semibold">
                      {item.name}
                    </h3>
                  </div>{" "}
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-10 justify-center">
            <Button href="/">View All Blog</Button>
          </div>
        </Container>
      </div>
      <div
        className="pointer-events-none absolute z-2 bottom-0 left-0 h-[1%] sm:h-[1%] md:h-[2%] lg:h-[3%] -rotate-3 sm:-rotate-1 w-full
           bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)]
          "></div>
    </div>
  );
};

export default BlogCurate;
