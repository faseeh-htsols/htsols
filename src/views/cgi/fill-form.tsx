import Container from "@/components/ui/container";
import HeadingTwo from "@/components/ui/heading-two";
import React from "react";

const FillForm = () => {
  return (
    <div>
      <Container>
        <div className="flex">
          <div className="">
            <HeadingTwo>FILL THE FORM to get a CALL BACK FROM US</HeadingTwo>
            <p>
              Katalyst Studio offers a range of design services that are
              tailored to meet the unique needs of each client Katalyst Studio
              offers a range of design services.
            </p>
          </div>
          <div>
            <form action="">
              <div className="grid grid-cols-2 gap-4"></div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FillForm;
