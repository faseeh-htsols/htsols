import React from "react";
import Banner from "./banner";
import WannaStart from "./wanna-start";
import FillForm from "./fill-form";
import NoLimitations from "./no-limitations";
import OurClients from "./our-clients";

const CgiMain = () => {
  return (
    <>
      <Banner />
      <NoLimitations />
      <OurClients />
      <WannaStart />
      <FillForm />
    </>
  );
};

export default CgiMain;
