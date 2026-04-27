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
  description?: string | null;
  pictureUrl?: string | null;
  scheduledDate?: string | null;
  publishedDate?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  author?: CmsAuthor | null;
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
    pagination?: CmsPagination | null;
  } | null;
  meta?: {
    pagination?: CmsPagination | null;
  } | null;
  pagination?: CmsPagination | null;
};

type CmsPagination = {
  page?: number | null;
  currentPage?: number | null;
  pageCount?: number | null;
  totalPages?: number | null;
  total?: number | null;
  limit?: number | null;
  pageSize?: number | null;
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

const DEFAULT_CMS_API_URL = "https://cms.htsol.ca/api";
const BLOG_FETCH_LIMIT = 100;

function apiBase() {
  const base = process.env.NEXT_PUBLIC_API_URL || DEFAULT_CMS_API_URL;
  return base.replace(/\/+$/, "");
}

function blogListUrl(page = 1) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(BLOG_FETCH_LIMIT),
  });

  return `${apiBase()}/client/blogs?${params.toString()}`;
}

function paginationFrom(json: CmsBlogListResponse) {
  return json.data?.pagination ?? json.meta?.pagination ?? json.pagination;
}

function pageCountFrom(pagination: CmsPagination | null | undefined) {
  const direct = pagination?.pageCount ?? pagination?.totalPages;
  if (direct && direct > 0) return direct;

  const total = pagination?.total;
  const limit = pagination?.limit ?? pagination?.pageSize ?? BLOG_FETCH_LIMIT;
  if (!total || !limit) return 1;

  return Math.max(1, Math.ceil(total / limit));
}

function uniqueBlogs(blogs: CmsBlogListItem[]) {
  const seen = new Set<string>();

  return blogs.filter((blog) => {
    const key = blog.slug?.trim() || String(blog.id ?? "");
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export async function fetchCmsBlogs(): Promise<CmsBlogListItem[]> {
  try {
    const res = await fetch(blogListUrl(), { cache: "no-store" });
    if (!res.ok) return [];
    const json = (await res.json()) as CmsBlogListResponse;
    const blogs = [...(json?.data?.blogs ?? [])];
    const totalPages = pageCountFrom(paginationFrom(json));

    for (let page = 2; page <= totalPages; page += 1) {
      const pageRes = await fetch(blogListUrl(page), { cache: "no-store" });
      if (!pageRes.ok) break;
      const pageJson = (await pageRes.json()) as CmsBlogListResponse;
      blogs.push(...(pageJson?.data?.blogs ?? []));
    }

    return uniqueBlogs(blogs);
  } catch (error) {
    console.error("[cms] Failed to fetch blogs", error);
    return [];
  }
}

export async function fetchCmsBlogBySlug(
  slug: string,
): Promise<CmsBlogDetail> {
  try {
    const res = await fetch(`${apiBase()}/client/blogs/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = (await res.json()) as CmsBlogDetailResponse;
    return json?.data?.blog ?? null;
  } catch (error) {
    console.error(`[cms] Failed to fetch blog "${slug}"`, error);
    return null;
  }
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

