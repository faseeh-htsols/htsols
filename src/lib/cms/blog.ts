export type CmsImage = { url?: string | null } | null | undefined;

export type CmsAuthor =
  | {
      name?: string | null;
      bio?: string | null;
      pictureUrl?: string | null;
      image?: CmsImage;
    }
  | null
  | undefined;

export type CmsBlogListItem = {
  id?: number | null;
  title?: string | null;
  slug?: string | null;
  pictureUrl?: string | null;
  scheduledDate?: string | null;
  publishedDate?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  banner?: {
    title?: string | null;
    image?: string | null;
    description?: string | null;
    authorName?: string | null;
    authorImage?: string | null;
    scheduledDate?: string | null;
    tags?: string[] | null;
  } | null;
};

export type CmsBlogListResponse = {
  data?: {
    blogs?: CmsBlogListItem[] | null;
  } | null;
};

export type CmsTag = { id: number; name: string };
export type CmsBlogTag = { id: number; tag: CmsTag };

export type CmsFaq = { question: string; answer: string };
export type CmsSection = { heading?: string; content: string };

export type CmsRelatedBlog = {
  title?: string | null;
  scheduledDate?: string | null;
  pictureUrl?: string | null;
  slug?: string | null;
} | null;

export type CmsCta = {
  id: number;
  imageUrl: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonHref: string;
};

export type CmsBlogCta = {
  id: number;
  sectionIndex: number;
  cta: CmsCta;
};

export type CmsBlogDetail = {
  title?: string | null;
  description?: string | null;
  contentHtml?: string | null;
  pictureUrl?: string | null;
  scheduledDate?: string | null;
  publishedAt?: string | null;
  sections?: CmsSection[] | null;
  blogCTAs?: CmsBlogCta[] | null;
  faqs?: CmsFaq[] | null;
  blogTags?: CmsBlogTag[] | null;
  author?: CmsAuthor;
  authorName?: string | null;
  relatedBlogs?: CmsRelatedBlog[] | null;
  seo?: {
    seoTitle?: string | null;
    seoDescription?: string | null;
    schemaJson?: unknown;
  } | null;
} | null;

export type CmsBlogDetailResponse = {
  data?: {
    blog?: CmsBlogDetail;
  } | null;
};

function apiBase() {
  const base = process.env.NEXT_PUBLIC_API_URL;
  if (!base) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not set. Expected https://cms.htsol.ca/api",
    );
  }
  return base.replace(/\/+$/, "");
}

export async function fetchCmsBlogs(): Promise<CmsBlogListItem[]> {
  const res = await fetch(`${apiBase()}/client/blogs`, { cache: "no-store" });
  if (!res.ok) return [];
  const json = (await res.json()) as CmsBlogListResponse;
  return json?.data?.blogs ?? [];
}

export async function fetchCmsBlogBySlug(
  slug: string,
): Promise<CmsBlogDetail> {
  const res = await fetch(`${apiBase()}/client/blogs/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const json = (await res.json()) as CmsBlogDetailResponse;
  return json?.data?.blog ?? null;
}

export function getBlogDate(
  post:
    | Pick<
        CmsBlogListItem,
        "scheduledDate" | "publishedDate" | "createdAt" | "updatedAt"
      >
    | null
    | undefined,
) {
  return (
    post?.scheduledDate ||
    post?.publishedDate ||
    post?.createdAt ||
    post?.updatedAt ||
    ""
  );
}

export function safeTime(value: string | null | undefined) {
  const time = new Date(value || 0).getTime();
  return Number.isNaN(time) ? 0 : time;
}

