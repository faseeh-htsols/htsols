import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";
import React from "react";
const data = [
  {
    src: "/dental/case1.png",
    alt: "image",
  },
  {
    src: "/dental/case2.png",
    alt: "image",
  },
  {
    src: "/dental/case3.png",
    alt: "image",
  },
  {
    src: "/dental/case4.png",
    alt: "image",
  },
  {
    src: "/dental/case5.png",
    alt: "image",
  },
];
const CaseStudiesPrevious = () => {
  return (
    <div className="bg-white py-24">
      <Wrapper>
        <div className="flex flex-row flex-wrap justify-center">
          {data.map((item, index) => (
            <div className="w-[33.33%]" key={index}>
              <Image src={item.src} width={400} height={600} alt={item.alt} />
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default CaseStudiesPrevious;
