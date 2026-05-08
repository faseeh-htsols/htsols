import Main from "@/views/blog-page/main";
import type { BlogPost as MainBlogPost, IRelatedBlog } from "@/views/blog-page/main";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import Script from "next/script";
import {
  fetchCmsBlogBySlug,
  fetchCmsBlogs,
  getBlogDate,
  safeTime,
  type CmsBlogListItem,
} from "@/lib/cms/blog";

const getBlog = cache(async (slug: string) => fetchCmsBlogBySlug(slug));
const getBlogs = cache(async () => fetchCmsBlogs());
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  "https://www.htsol.ca";

function absoluteUrl(value: string | null | undefined, fallback = "/blog-banner.webp") {
  const raw = value?.trim() || fallback;

  try {
    return new URL(raw).toString();
  } catch {
    return new URL(raw.startsWith("/") ? raw : `/${raw}`, SITE_URL).toString();
  }
}

function listItemToRelatedBlog(blog: CmsBlogListItem): IRelatedBlog | null {
  const slug = blog.slug?.trim();
  if (!slug) return null;

  return {
    slug,
    title: blog.title || blog.banner?.title || "Untitled Blog",
    pictureUrl: blog.pictureUrl || blog.banner?.image || "/blog-banner.webp",
    scheduledDate: getBlogDate(blog),
    description: blog.description || blog.banner?.description || undefined,
    tags: blog.banner?.tags ?? undefined,
    authorName: blog.banner?.authorName || blog.author?.name || undefined,
    authorImage:
      blog.banner?.authorImage ||
      blog.author?.pictureUrl ||
      blog.author?.image?.url ||
      undefined,
  };
}

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs
    .map((blog) => blog.slug?.trim())
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlog(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const title = post?.seo?.seoTitle || post?.title || "Blog Post";
  const description = post?.seo?.seoDescription || post?.description || "";
  const canonicalPath = `https://www.htsol.ca/blog/${slug}`;
  const ogImage = absoluteUrl(post.seo?.imageUrl || post.pictureUrl);
  const ogImageAlt = post.seo?.seoImageAlt || title;
  const publishedTime = post.scheduledDate ?? post.publishedAt ?? undefined;
  const authorName = post.author?.name ?? post.authorName ?? undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalPath,
      type: "article",
      publishedTime,
      authors: authorName ? [authorName] : undefined,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: { canonical: canonicalPath },
  };
}

const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getBlog(slug);

  if (!post) notFound();

  // Enrich related blogs: if API provides only minimal fields, fill from list.
  const all = await getBlogs();
  const bySlug = new Map(all.map((b) => [b.slug || "", b]));

  const explicitRelatedBlogs: IRelatedBlog[] = (post.relatedBlogs ?? [])
    .filter((b): b is NonNullable<typeof b> => Boolean(b?.slug))
    .map((b) => {
      const slugKey = b!.slug!;
      const listItem = bySlug.get(slugKey);
      return {
        slug: slugKey,
        title: b?.title || listItem?.title || listItem?.banner?.title || "",
        pictureUrl:
          b?.pictureUrl ||
          listItem?.pictureUrl ||
          listItem?.banner?.image ||
          "",
        scheduledDate:
          b?.scheduledDate ||
          listItem?.scheduledDate ||
          listItem?.banner?.scheduledDate ||
          "",
        description: listItem?.banner?.description ?? undefined,
        tags: listItem?.banner?.tags ?? undefined,
        authorName: listItem?.banner?.authorName ?? undefined,
        authorImage: listItem?.banner?.authorImage ?? undefined,
      };
    })
    .filter((b) => b.slug !== slug);

  const currentTags = new Set(
    (post.blogTags ?? [])
      .map((item) => item.tag.name.toLowerCase())
      .filter(Boolean),
  );

  const relatedSlugs = new Set<string>([
    slug,
    ...explicitRelatedBlogs.map((blog) => blog.slug),
  ]);

  const fallbackCandidates = all
    .map(listItemToRelatedBlog)
    .filter((blog): blog is IRelatedBlog => Boolean(blog))
    .filter((blog) => !relatedSlugs.has(blog.slug))
    .sort(
      (a, b) =>
        safeTime(b.scheduledDate) - safeTime(a.scheduledDate),
    );

  const sameTagFallback = fallbackCandidates.filter((blog) =>
    blog.tags?.some((tag) => currentTags.has(tag.toLowerCase())),
  );

  const fallbackRelatedBlogs = [
    ...sameTagFallback,
    ...fallbackCandidates.filter(
      (blog) => !sameTagFallback.some((sameTag) => sameTag.slug === blog.slug),
    ),
  ].slice(0, Math.max(0, 6 - explicitRelatedBlogs.length));

  const relatedBlogs = [...explicitRelatedBlogs, ...fallbackRelatedBlogs].slice(
    0,
    6,
  );

  const blogTags: MainBlogPost["blogTags"] = (post.blogTags ?? []).map((t) => ({
    id: t.id,
    tag: { id: t.tag.id, name: t.tag.name },
  }));

  const author: MainBlogPost["author"] = {
    name: post.author?.name ?? post.authorName ?? "",
    pictureUrl: post.author?.pictureUrl ?? post.author?.image?.url ?? "",
    bio: post.author?.bio ?? "",
    scheduledDate: post.scheduledDate ?? post.publishedAt ?? "",
  };

  const data: MainBlogPost = {
    title: post.title ?? "",
    description: post.description ?? "",
    pictureUrl: post.pictureUrl ?? "",
    sections: post.sections ?? [],
    author,
    faqs: post.faqs ?? [],
    contentHtml: (post.contentHtml ?? "") as unknown as JSON,
    scheduledDate: post.scheduledDate ?? post.publishedAt ?? "",
    blogTags,
    blogCTAs: post.blogCTAs ?? [],
    relatedBlogs,
  };

  return (
    <>
      {Array.isArray(post.seo?.schemaJson) &&
        (post.seo!.schemaJson as unknown[]).map((schemaData, i) => (
          <Script
            key={i}
            id={`ldjson-${i}`}
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        ))}
      <Main data={data} />
    </>
  );
};

export default BlogPost;
