import { NextResponse } from "next/server";

export const revalidate = 1800;

const RAPID_HOST = "fresh-linkedin-scraper-api.p.rapidapi.com";
const BASE = `https://${RAPID_HOST}`;
const PROFILE_CACHE_SEC = 86_400;
const POSTS_CACHE_SEC = 1800;
const POST_LIMIT = 4;

/**
 * RapidAPI expects the public vanity slug (?username=), not a display name.
 * Accepts `mfaseehullah` or a full profile URL.
 */
function linkedinVanitySlug(input: string): string {
  const s = input.trim().replace(/^@/, "");
  if (!s) return "";

  const lower = s.toLowerCase();
  if (lower.includes("linkedin.com")) {
    try {
      const withProto = /^https?:\/\//i.test(s) ? s : `https://${s}`;
      const u = new URL(withProto);
      const segments = u.pathname.split("/").filter(Boolean);
      const inIdx = segments.findIndex((x) => x.toLowerCase() === "in");
      if (inIdx !== -1 && segments[inIdx + 1]) {
        return decodeURIComponent(segments[inIdx + 1])
          .replace(/\/$/, "")
          .replace(/[?#].*$/, "");
      }
    } catch {
      /* fall through */
    }
    const m = s.match(/linkedin\.com\/in\/([^/?#]+)/i);
    if (m?.[1]) return decodeURIComponent(m[1]);
  }

  const parts = s.split("/").filter(Boolean);
  const last = parts[parts.length - 1] ?? s;
  return last.replace(/[?#].*$/, "");
}

function rapidHeaders(apiKey: string) {
  return {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": RAPID_HOST,
  } as const;
}

function pickString(...vals: unknown[]): string {
  for (const v of vals) {
    if (typeof v === "string" && v.length > 0) return v;
  }
  return "";
}

function pickNumber(...vals: unknown[]): number {
  for (const v of vals) {
    if (typeof v === "number" && !Number.isNaN(v)) return v;
    if (typeof v === "string") {
      const n = Number(v);
      if (!Number.isNaN(n)) return n;
    }
  }
  return 0;
}

/** Member URN in this API looks like `ACoAAA...` (see OpenAPI examples). */
function looksLikeMemberUrn(s: string): boolean {
  return /^ACo[A-Za-z0-9_-]{10,}$/.test(s);
}

/** Pull member id from plain URN or strings like `urn:li:fsd_profile:ACoAAA...`. */
function memberUrnFromString(s: string): string {
  const t = s.trim();
  if (looksLikeMemberUrn(t)) return t;
  const m = t.match(/ACo[A-Za-z0-9_-]{10,}/);
  return m?.[0] ?? "";
}

/** Breadth-first search for a member URN string inside profile JSON. */
function findMemberUrnInProfile(root: unknown): string {
  if (!root || typeof root !== "object") return "";
  const queue: unknown[] = [root];
  let depth = 0;
  const maxDepth = 8;
  while (queue.length && depth < maxDepth) {
    const levelSize = queue.length;
    depth += 1;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node === null || node === undefined) continue;
      if (typeof node === "string") {
        const id = memberUrnFromString(node);
        if (id) return id;
        continue;
      }
      if (typeof node !== "object") continue;
      for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
        if ((k === "urn" || k === "entityUrn" || k === "objectUrn") && typeof v === "string") {
          const id = memberUrnFromString(v);
          if (id) return id;
        }
        if (typeof v === "string") {
          const id = memberUrnFromString(v);
          if (id) return id;
        }
        if (v && typeof v === "object") queue.push(v);
      }
    }
  }
  return "";
}

type RapidJson = Record<string, unknown>;

function isRapidExplicitFailure(body: unknown): boolean {
  return (
    typeof body === "object" &&
    body !== null &&
    (body as RapidJson).success === false
  );
}

/** User-safe message from RapidAPI body (quota, plan, invalid username, etc.). */
function rapidMessage(body: unknown): string {
  if (!body || typeof body !== "object") return "";
  const b = body as RapidJson;
  if (typeof b.message === "string" && b.message.trim()) return b.message.trim();
  const err = b.error;
  if (typeof err === "string" && err.trim()) return err.trim();
  return "";
}

function extractProfileUrn(body: unknown): string {
  if (!body || typeof body !== "object") return "";
  const j = body as RapidJson;
  const data = j.data as Record<string, unknown> | undefined;
  const nestedProfile = data?.profile as Record<string, unknown> | undefined;
  for (const raw of [
    data?.urn,
    nestedProfile?.urn,
    data?.entityUrn,
    nestedProfile?.entityUrn,
    data?.objectUrn,
    j.urn,
  ]) {
    if (typeof raw === "string") {
      const id = memberUrnFromString(raw);
      if (id) return id;
      if (raw.length >= 10 && !/\s/.test(raw)) return raw;
    }
  }
  return findMemberUrnInProfile(data ?? j);
}

function normalizePost(raw: Record<string, unknown>) {
  const content = raw.content as Record<string, unknown> | undefined;
  const images = content?.images as Array<{ url?: string }> | undefined;
  const article = content?.article as Record<string, unknown> | undefined;
  const articleImage = article?.image as Array<{ url?: string }> | undefined;

  return {
    id: pickString(raw.urn, raw.id, String(Math.random())),
    text: pickString(raw.text, raw.commentary),
    publishedAt: pickString(raw.published_at, raw.created_at) || null,
    url: pickString(raw.url, raw.post_url) || null,
    likes: pickNumber(raw.likes_count, raw.num_likes),
    comments: pickNumber(raw.comments_count, raw.num_comments),
    reposts: pickNumber(raw.reposts_count, raw.num_reposts),
    image: pickString(images?.[0]?.url, raw.image) || null,
    article:
      article && typeof article.title === "string"
        ? {
            title: article.title as string,
            url: pickString(article.article_url, article.url) || "#",
            image: articleImage?.[0]?.url
              ? String(articleImage[0].url)
              : null,
          }
        : null,
  };
}

export async function GET() {
  const apiKey = process.env.RAPIDAPI_KEY;
  const rawUsername = process.env.LINKEDIN_USERNAME;
  const username = rawUsername ? linkedinVanitySlug(rawUsername) : "";

  if (!apiKey || !username) {
    return NextResponse.json(
      { error: "Server misconfiguration", posts: [] },
      { status: 500 },
    );
  }

  try {
    /** Documented params: `username` + `page` (avoid undocumented `count`). */
    const postsByUsernameUrl = `${BASE}/api/v1/user/posts?username=${encodeURIComponent(username)}&page=1`;
    const postsTry = await fetch(postsByUsernameUrl, {
      headers: rapidHeaders(apiKey),
      next: { revalidate: POSTS_CACHE_SEC },
    });
    const postsTryBody = (await postsTry.json()) as RapidJson;

    if (
      postsTry.ok &&
      !isRapidExplicitFailure(postsTryBody) &&
      Array.isArray(postsTryBody.data)
    ) {
      const rawList = postsTryBody.data as Record<string, unknown>[];
      return NextResponse.json({
        posts: rawList.slice(0, POST_LIMIT).map((p) => normalizePost(p)),
        fetchedAt: new Date().toISOString(),
      });
    }

    console.error(
      "[linkedin-posts] posts by username",
      postsTry.status,
      postsTryBody?.success,
    );

    const profileRes = await fetch(
      `${BASE}/api/v1/user/profile?username=${encodeURIComponent(username)}`,
      {
        headers: rapidHeaders(apiKey),
        next: { revalidate: PROFILE_CACHE_SEC },
      },
    );

    const profileJson = (await profileRes.json()) as unknown;

    if (!profileRes.ok) {
      console.error("[linkedin-posts] profile HTTP", profileRes.status);
      return NextResponse.json(
        { error: "Unable to load profile", posts: [] },
        { status: 502 },
      );
    }

    // HTTP 200 may still include `success: false` while carrying `data` — extract URN anyway.
    const urn = extractProfileUrn(profileJson);
    if (!urn) {
      const failed = isRapidExplicitFailure(profileJson);
      const upstream = rapidMessage(profileJson);
      console.error("[linkedin-posts] profile missing URN", {
        failed,
        upstream: upstream || undefined,
      });
      const fallback = failed
        ? "Unable to load profile"
        : "Profile URN not found";
      return NextResponse.json(
        {
          error: upstream || fallback,
          posts: [],
        },
        { status: 502 },
      );
    }

    const postsRes = await fetch(
      `${BASE}/api/v1/user/posts?urn=${encodeURIComponent(urn)}&page=1`,
      {
        headers: rapidHeaders(apiKey),
        next: { revalidate: POSTS_CACHE_SEC },
      },
    );

    const postsJson = (await postsRes.json()) as RapidJson;

    if (!postsRes.ok || isRapidExplicitFailure(postsJson)) {
      const upstream = rapidMessage(postsJson);
      console.error("[linkedin-posts] posts", postsRes.status, {
        success: postsJson?.success,
        message: upstream || undefined,
      });
      return NextResponse.json(
        {
          error: upstream || "Unable to load posts",
          posts: [],
        },
        { status: 502 },
      );
    }

    if (!Array.isArray(postsJson.data)) {
      console.error("[linkedin-posts] posts payload has no data array");
      return NextResponse.json(
        { error: "Unable to load posts", posts: [] },
        { status: 502 },
      );
    }

    const rawList = postsJson.data as Record<string, unknown>[];
    return NextResponse.json({
      posts: rawList.slice(0, POST_LIMIT).map((p) => normalizePost(p)),
      fetchedAt: new Date().toISOString(),
    });
  } catch (e) {
    console.error("[linkedin-posts]", e);
    return NextResponse.json(
      { error: "Failed to fetch posts", posts: [] },
      { status: 500 },
    );
  }
}
