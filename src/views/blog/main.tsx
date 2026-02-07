import React from "react";
import Banner from "./banner";
import LogosMarquee from "../home/logos-marquee";
import ContactForm from "../home/contact-form";
import Blog from "./blog";

function Main() {
  return (
    <div>
      <Banner />
      <Blog />
      <ContactForm />
      <LogosMarquee />
    </div>
  );
}

export default Main;
