import HeadingTwo from "@/components/ui/heading-two";
import Container from "@/components/ui/container";
import { BOLG_CURATE_CEO } from "@/constants";
import Image from "next/image";

const BlogCurate = () => {
  return (
    <div>
      <Container>
        <HeadingTwo>A blog I curate</HeadingTwo>
        <div className="grid grid-cols-3 gap-7 ">
          {BOLG_CURATE_CEO.map((item, index) => (
            <div key={index} className="relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="h-[470px] w-full"
              />
              <div className="absolute inset-0 w-full h-full">
                <div className="p-5 flex flex-col h-full justify-between">
                  <button className="w-10 ms-auto relative z-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white transition-all duration-300  hover:bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] hover:border-[#075B65]">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-secondary h-6 w-6 transition-all duration-150 group-hover:fill-[#328A99]"
                    >
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
        <div></div>
      </Container>
    </div>
  );
};

export default BlogCurate;
