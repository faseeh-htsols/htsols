import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    slug: "blog-post-1",
    category: "Category",
    title: "BLOG ARTICLE TITLE",
    description:
      "HT-Solutions provides you Website Designing, Web Development, SEO Services, Graphic Designing, Mobile Application Development.",
    author: "Autor Name",
    readTime: "5min read",
    image: "/blog-banner.webp",
    authorImage: "/author.png",
    keywords: ["#keyword", "#keyword", "#keyword"],
  },
  {
    id: 2,
    slug: "blog-post-2",
    category: "Category",
    title: "BLOG ARTICLE TITLE",
    description:
      "HT-Solutions provides you Website Designing, Web Development, SEO Services, Graphic Designing, Mobile Application Development.",
    author: "Autor Name",
    readTime: "5min read",
    image: "/blog-banner.webp",
    authorImage: "/author.png",
    keywords: ["#keyword", "#keyword", "#keyword"],
  },
  {
    id: 3,
    slug: "blog-post-3",
    category: "Category",
    title: "BLOG ARTICLE TITLE",
    description:
      "HT-Solutions provides you Website Designing, Web Development, SEO Services, Graphic Designing, Mobile Application Development.",
    author: "Autor Name",
    readTime: "5min read",
    image: "/blog-banner.webp",
    authorImage: "/author.png",
    keywords: ["#keyword", "#keyword", "#keyword"],
  },
  {
    id: 4,
    slug: "blog-post-4",
    category: "Category",
    title: "BLOG ARTICLE TITLE",
    description:
      "HT-Solutions provides you Website Designing, Web Development, SEO Services, Graphic Designing, Mobile Application Development.",
    author: "Autor Name",
    readTime: "5min read",
    image: "/blog-banner.webp",
    authorImage: "/author.png",
    keywords: ["#keyword", "#keyword", "#keyword"],
  },
  {
    id: 5,
    slug: "blog-post-5",
    category: "Category",
    title: "BLOG ARTICLE TITLE",
    description:
      "HT-Solutions provides you Website Designing, Web Development, SEO Services, Graphic Designing, Mobile Application Development.",
    author: "Autor Name",
    readTime: "5min read",
    image: "/blog-banner.webp",
    authorImage: "/author.png",
    keywords: ["#keyword", "#keyword", "#keyword"],
  },
  {
    id: 6,
    slug: "blog-post-6",
    category: "Category",
    title: "BLOG ARTICLE TITLE",
    description:
      "HT-Solutions provides you Website Designing, Web Development, SEO Services, Graphic Designing, Mobile Application Development.",
    author: "Autor Name",
    readTime: "5min read",
    image: "/blog-banner.webp",
    authorImage: "/author.png",
    keywords: ["#keyword", "#keyword", "#keyword"],
  },
];

function Blog() {
  return (
    <div className="pb-20 bg-black">
      <Container>
        <div className="relative overflow-hidden rounded-2xl h-auto md:h-[500px] mb-10">
          <div className="absolute inset-0">
            <Image
              src="/blog-banner.webp"
              alt="Blog background"
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <Link href="/blog/slug" className="absolute inset-0 mt-60">
            <div className="w-full md:w-1/2 h-full backdrop-blur-md bg-black/60 p-3 flex flex-col justify-center border-l border-[#00A1A5]/20">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[#00A1A5] text-xs uppercase tracking-wider font-semibold bg-[#00A1A5]/20 px-4 py-1.5 rounded-full border border-[#00A1A5]">
                  Category
                </span>

                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-gray-300 bg-white/10 px-3 py-1.5 rounded-full border border-gray-500/30">
                    #keyword1
                  </span>
                  <span className="text-xs text-gray-300 bg-white/10 px-3 py-1.5 rounded-full border border-gray-500/30">
                    #keyword2
                  </span>
                  <span className="text-xs text-gray-300 bg-white/10 px-3 py-1.5 rounded-full border border-gray-500/30">
                    #keyword3
                  </span>
                </div>
              </div>

              <h2 className="text-white font-primary text-2xl font-bold mb-4 leading-tight">
                BLOG ARTICLE TITLE
              </h2>

              <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed">
                HT-Solutions provides you Website Designing, Web Development,
                SEO Services, Graphic Designing, Mobile Application Development.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/author.png"
                    alt="Author"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[#00A1A5] text-sm font-medium">
                      Autor Name
                    </p>
                    <p className="text-gray-300 text-xs">5min read</p>
                  </div>
                </div>

                <div className="w-12 h-12 bg-[#00A1A5] hover:bg-[#00A1A5]/80 rounded-full flex items-center justify-center transition-all shadow-lg shadow-[#00A1A5]/50">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#00A1A5]/50 transition-all">
              <div className="relative h-[200px] md:h-[250px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[#00A1A5] text-xs uppercase tracking-wider font-semibold bg-[#00A1A5]/20 px-3 py-1 rounded-full border border-[#00A1A5]">
                    {post.category}
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {post.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full border border-gray-700">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-white font-primary text-lg font-bold mb-2 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {post.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[#00A1A5] text-xs font-medium">
                        {post.author}
                      </p>
                      <p className="text-gray-400 text-xs">{post.readTime}</p>
                    </div>
                  </div>

                  <div className="w-10 h-10 bg-[#00A1A5] group-hover:bg-[#00A1A5]/80 rounded-full flex items-center justify-center transition-all">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Blog;
