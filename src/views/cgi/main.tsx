import React from "react";
import Banner from "./banner";
import WannaStart from "./wanna-start";
import FillForm from "./fill-form";
import NoLimitations from "./no-limitations";
import OurClients from "./our-clients";
import ComprehensiveOfferings from "./services-card";
import ServiceCarousel from "./ServiceCarousel";
import RecentlyDoneProjects from "./recently-done-projects";

const CgiMain = () => {
  return (
    <>
      <Banner />
      <NoLimitations />
      <OurClients />
      <RecentlyDoneProjects />
      <ComprehensiveOfferings />
      <ServiceCarousel />
      <WannaStart />
      <FillForm />
    </>
  );
};

export default CgiMain;
