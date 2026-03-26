import type { MetadataRoute } from "next";
import { fetchCmsBlogs } from "@/lib/cms/blog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  "https://www.htsol.ca";

const staticPaths = [
  "",
  "/about-us",
  "/blog",
  "/ceo",
  "/contact-us",
  "/cto",
  "/dental-marketing",
  "/services",
  "/services/cgi",
  "/services/digital-marketing",
  "/services/seo-services",
  "/services/website-development",
  "/web-portfolio",
] as const;

function lastModFromBlog(b: {
  updatedAt?: string | null;
  publishedDate?: string | null;
  scheduledDate?: string | null;
}): Date {
  const raw = b.updatedAt ?? b.publishedDate ?? b.scheduledDate ?? null;
  if (!raw) return new Date();
  const d = new Date(raw);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogs = await fetchCmsBlogs();
    blogEntries = blogs
      .map((b) => ({ slug: b.slug?.trim(), blog: b }))
      .filter((x): x is { slug: string; blog: (typeof blogs)[0] } =>
        Boolean(x.slug),
      )
      .map(({ slug, blog }) => ({
        url: `${siteUrl}/blog/${slug}`,
        lastModified: lastModFromBlog(blog),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
  } catch {
    // CMS unavailable (e.g. missing env at build): still emit static URLs
  }

  return [...staticEntries, ...blogEntries];
}
