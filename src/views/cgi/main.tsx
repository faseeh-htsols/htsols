import React from "react";
import Banner from "./banner";
import WannaStart from "./wanna-start";
import FillForm from "./fill-form";
import NoLimitations from "./no-limitations";
import OurClients from "./our-clients";
import RecentlyDoneProjects from "./recently-done-projects";
import InnovativeProblem from "./innovative-problem";
import About from "./About";
import TheWayWeWork from "./the-way-we-work";
import TestimonialCarousel from "./testimonial-carousel";
import PortfolioGrid from "./portfolio-grid";

const CgiMain = () => {
  return (
    <>
      <Banner />
      <NoLimitations />
      <OurClients />
      <TheWayWeWork />
      <TestimonialCarousel />
      <RecentlyDoneProjects />
      <PortfolioGrid />
      <About />
      <InnovativeProblem />
      <WannaStart />
      <FillForm />
    </>
  );
};

export default CgiMain;
