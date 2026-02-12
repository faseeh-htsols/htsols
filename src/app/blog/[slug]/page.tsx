import Main from "@/views/blog-page/main";
import type { BlogPost as MainBlogPost } from "@/views/blog-page/main";
import type { Metadata } from "next";
import { BLOGS } from "@/constants/blog";
import { notFound } from "next/navigation";
import type { IRelatedBlog } from "@/views/blog-page/main";

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOGS.find((blog) => blog.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const title = post.seo?.seoTitle || post.banner.title || "Blog Post";
  const description =
    post.seo?.seoDescription || post.banner.description || "Blog Description";
  const canonicalPath = `https://www.htsol.ca/blog/${slug}`;

  return {
    title,
    description,
    openGraph: { title, description },
    alternates: { canonical: canonicalPath },
  };
}

const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = BLOGS.find((blog) => blog.slug === slug);

  if (!post) {
    notFound();
  }

  // Transform tags to match the IBlogtags structure
  const blogTags: MainBlogPost["blogTags"] = post.banner.tags.map(
    (tag, index) => ({
      id: index + 1,
      tag: {
        id: index + 1,
        name: tag,
      },
    }),
  );

  // Get all blogs except the current one for related blogs carousel
  const relatedBlogs: IRelatedBlog[] = BLOGS.filter(
    (blog) => blog.slug !== slug,
  ) // Exclude current blog
    .map((blog) => ({
      title: blog.banner.title,
      scheduledDate: blog.banner.scheduledDate,
      pictureUrl: blog.banner.image,
      slug: blog.slug,
    }));

  const data: MainBlogPost = {
    title: post.banner.title,
    description: post.banner.description,
    pictureUrl: post.banner.image,
    sections: post.sections,
    author: post.author,
    faqs: post.faq ?? [],
    contentHtml: {} as JSON,
    scheduledDate: post.banner.scheduledDate,
    blogTags: blogTags,
    blogCTAs: post.blogCTAs ?? [],
    relatedBlogs: relatedBlogs, // All other blogs
  };

  return <Main data={data} />;
};

export default BlogPost;
