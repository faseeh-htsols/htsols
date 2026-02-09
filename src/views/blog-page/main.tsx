import React from "react";
import Banner from "./banner";
import ContentSections from "./content-sections";
import AuthorCard from "./author-card";
import RelatedBlogs from "./related-blogs";
import FAQSection from "../home/FAQSection";
import FaqsSimple from "./faqs";
import ViewOnInstgram from "../ceo/view-on-instgram";
export type IRelatedBlog = {
  title: string;
  scheduledDate: string;
  pictureUrl: string;
  slug: string;
};
type Section = {
  heading?: string;
  content: string;
};
interface IFaq {
  question: string;
  answer: string;
}
type Author = {
  name: string;
  pictureUrl: string;
  bio: string;
  scheduledDate: string;
};
export type ITags = {
  id: number;
  name: string;
};
export type IBlogtags = {
  id: number;
  tag: ITags;
};
export type BlogPost = {
  title: string;
  description: string;
  pictureUrl: string;
  scheduledDate: string;
  sections: Section[];
  author: Author;
  faqs?: IFaq[];
  contentHtml: JSON;
  blogTags?: IBlogtags[];
  blogCTAs?: IBlogCta[];
  relatedBlogs?: IRelatedBlog[];
};
export type ICta = {
  id: number;
  imageUrl: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonHref: string;
};
export type IBlogCta = {
  id: number;
  sectionIndex: number;
  cta: ICta;
};
function Main({ data }: { data: BlogPost }) {
  return (
    <div>
      <Banner
        title={data.title}
        image={data.pictureUrl}
        description={data.description}
        authorName={data.author.name}
        authorImage={data.author.pictureUrl}
        scheduledDate={data.scheduledDate}
        tags={data.blogTags}
      />
      <ContentSections
        sections={data.sections}
        blogTitle={data.title}
        ctas={data.blogCTAs ?? []}
        author={data.author}
        scheduledDate={data.scheduledDate}
      />
      {data.faqs && data.faqs.length > 0 && <FaqsSimple data={data.faqs} />}
      <RelatedBlogs posts={data.relatedBlogs} />
      <ViewOnInstgram />
    </div>
  );
}

export default Main;
