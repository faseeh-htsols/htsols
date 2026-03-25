import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.cms.dentopia.marketing",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/seo",
        destination: "/",
        permanent: true,
      },
      {
        source: "/_next/image",
        has: [
          {
            type: "query",
            key: "url",
            value: ".*kaybees-(2|3|logo)\\.webp",
          },
        ],
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
