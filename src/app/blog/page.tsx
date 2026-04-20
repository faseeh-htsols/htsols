import Main from "@/views/blog/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "HTSOL Blog | SEO, Web Development & Digital Marketing Insights",
  description: "Read the HTSOL blog for practical insights on SEO, web development, digital marketing, and online growth strategies for Canadian businesses.",
  alternates: {
    canonical: "https://www.htsol.ca/blog",
  },
  openGraph: {
    title: "HTSOL Blog | SEO, Web Development & Digital Marketing Insights",
    description: "Read the HTSOL blog for practical insights on SEO, web development, digital marketing, and online growth strategies for Canadian businesses.",
    url: "https://www.htsol.ca/blog",
    images: ["/htsol-ball-favicon.svg"],
  },
};

function Page() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default Page;
