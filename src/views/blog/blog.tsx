import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import type { CmsBlogListItem } from "@/lib/cms/blog";

type BlogProps = {
  posts: CmsBlogListItem[];
};

function Blog({ posts }: BlogProps) {
  const featured = posts[0];
  const rest = posts.slice(1);
  return (
    <div className="pb-10 bg-tertiary">
      <Container>
        {featured?.slug && (
          <div className="relative overflow-hidden rounded-2xl h-auto md:h-[500px] mb-10">
            <div className="absolute inset-0">
              <img
                src={
                  featured.pictureUrl ||
                  featured.banner?.image ||
                  "/blog-banner.webp"
                }
                alt={featured.title || featured.banner?.title || "Blog"}
                className="w-full h-full object-cover"
              />
            </div>
            <Link
              href={`/blog/${featured.slug}`}
              className="absolute inset-0 mt-60"
            >
              <div className="w-full md:w-[70%] h-full backdrop-blur-md bg-black/60 p-3 flex flex-col justify-center border-l border-[#00A1A5]/20">
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* <span className="text-white text-xs uppercase tracking-wider font-semibold bg-linear-to-r from-[#00A1A5]/50 to-[#00A1A5] px-4 py-1.5 rounded-full ">
                    Category
                  </span> */}

                  <div className="flex flex-wrap gap-2">
                    {(featured.banner?.tags ?? [])
                      .slice(0, 3)
                      .map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs text-gray-300 bg-white/10 px-3 py-1.5 rounded-full border border-gray-500/30"
                        >
                          #{tag}
                        </span>
                      ))}
                  </div>
                </div>

                <h2 className="text-white font-primary text-2xl font-bold mb-4 leading-tight">
                  {featured.title || featured.banner?.title}
                </h2>

                <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed">
                  {featured.description ?? featured.banner?.description ?? ""}
                </p>

                <div className="flex items-center justify-between">
                  {(featured.banner?.authorName &&
                    featured.banner?.authorImage) ||
                  (featured.author?.name &&
                    (featured.author?.pictureUrl ||
                      featured.author?.image?.url)) ? (
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          featured.banner?.authorImage ??
                          featured.author?.pictureUrl ??
                          featured.author?.image?.url ??
                          ""
                        }
                        alt={
                          featured.banner?.authorName ??
                          featured.author?.name ??
                          "Author"
                        }
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[#00A1A5] text-sm font-medium">
                          {featured.banner?.authorName ?? featured.author?.name}
                        </p>
                        <p className="text-gray-300 text-xs">
                          {new Date(
                            featured.banner?.scheduledDate ??
                              featured.scheduledDate ??
                              0,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}

                  <div className="w-12 h-12 bg-[#00A1A5] hover:bg-[#00A1A5]/80 rounded-full flex items-center justify-center transition-all shadow-lg shadow-[#00A1A5]/50">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
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
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link
              key={post.id || post.slug || post.title || ""}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden transition-all"
            >
              <div className="relative h-[200px] md:h-[250px] overflow-hidden">
                <img
                  src={
                    post.pictureUrl || post.banner?.image || "/blog-banner.webp"
                  }
                  alt={post.title || post.banner?.title || "Blog"}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-white text-xs uppercase tracking-wider font-semibold bg-linear-to-r from-[#00A1A5]/50 to-[#00A1A5] px-4 py-1.5 rounded-full ">
                    Category
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {(post.banner?.tags ?? []).slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full border border-gray-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-white font-primary text-lg font-bold mb-2 leading-tight">
                  {post.title || post.banner?.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {post.description ?? post.banner?.description ?? ""}
                </p>

                <div className="flex items-center justify-between">
                  {(post.banner?.authorName && post.banner?.authorImage) ||
                  (post.author?.name &&
                    (post.author?.pictureUrl || post.author?.image?.url)) ? (
                    <div className="flex items-center gap-2">
                      <img
                        src={
                          post.banner?.authorImage ??
                          post.author?.pictureUrl ??
                          post.author?.image?.url ??
                          ""
                        }
                        alt={
                          post.banner?.authorName ??
                          post.author?.name ??
                          "Author"
                        }
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[#00A1A5] text-xs font-medium">
                          {post.banner?.authorName ?? post.author?.name}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {new Date(
                            post.banner?.scheduledDate ??
                              post.scheduledDate ??
                              0,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}

                  <div className="w-10 h-10 bg-[#00A1A5] group-hover:bg-[#00A1A5]/80 rounded-full flex items-center justify-center transition-all">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
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
