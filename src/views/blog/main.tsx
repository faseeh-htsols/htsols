import React from "react";
import Banner from "./banner";
import LogosMarquee from "../home/logos-marquee";
import ContactForm from "../home/contact-form";
import Blog from "./blog";
import { fetchCmsBlogs, getBlogDate, safeTime } from "@/lib/cms/blog";

async function Main() {
  const posts = await fetchCmsBlogs();
  const sorted = [...posts].sort(
    (a, b) => safeTime(getBlogDate(b)) - safeTime(getBlogDate(a)),
  );
  return (
    <div>
      <Banner />
      <Blog posts={sorted} />
      <ContactForm />
      <LogosMarquee />
    </div>
  );
}

export default Main;
