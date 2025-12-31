import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import Image from "next/image";
import React from "react";

const ViewOnInstgram = () => {
  return (
    <div>
      <Container>
        <div>
          <div>
            <Image
              alt="insta"
              src={"/ceo/insta.svg"}
              width={68}
              className="w-[68px] h-[68opx]"
              height={68}
            />
          </div>
          <HeadingTwo>view more on instagram</HeadingTwo>
        </div>
      </Container>
    </div>
  );
};

export default ViewOnInstgram;
