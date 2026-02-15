import React from "react";
import DeliveringSolutions from "./delivering-solutions";
import ImaginationMeetsStrategy from "./imagination-meets-strategy";
import MeetOurTeam from "./meet-our-team";
import Banner from "./banner";
import ProjectToDiscuss from "../services/project-to-discuss";
import HtsolCoreValue from "./htsol-core-value";
import OurStory from "./our-story";
import ClearProcess from "./clear-process";
import RelationshipAndResults from "./relationship-and-results";
import StrategyFirstResult from "./strategy-first-result";

const AboutUsMain = () => {
  return (
    <>
      <Banner />
      <DeliveringSolutions />
      <RelationshipAndResults />
      <ClearProcess />
      <StrategyFirstResult />
      <HtsolCoreValue />
      <OurStory />
      <ImaginationMeetsStrategy />
      <MeetOurTeam />
      <ProjectToDiscuss />
    </>
  );
};

export default AboutUsMain;
