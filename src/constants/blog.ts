// constants/blog.ts
export type ICta = {
  id: number;
  imageUrl: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonHref: string;
};

export type IBlogCta = {
  id: number;
  sectionIndex: number;
  cta: ICta;
};

export type ITags = {
  id: number;
  name: string;
};

export type IBlogtags = {
  id: number;
  tag: ITags;
};

export type IRelatedBlog = {
  title: string;
  scheduledDate: string;
  pictureUrl: string;
  slug: string;
};

type Section = {
  heading?: string;
  content: string;
};

interface IFaq {
  question: string;
  answer: string;
}

type Author = {
  name: string;
  pictureUrl: string;
  bio: string;
  scheduledDate: string;
};

export interface BlogPost {
  slug: string;
  banner: {
    title: string;
    image: string;
    description: string;
    authorName: string;
    authorImage: string;
    scheduledDate: string;
    tags: string[];
  };
  sections: Section[];
  blogCTAs?: IBlogCta[];
  faq?: IFaq[];
  author: Author;
  relatedBlogs?: IRelatedBlog[];
  seo?: {
    seoTitle?: string;
    seoDescription?: string;
  };
}

export const BLOGS: BlogPost[] = [
  {
    slug: "how-digital-marketing-helps",
    banner: {
      title: "How Digital Marketing Helps Modern Businesses",
      image: "/blog-banner.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      authorName: "John Doe",
      authorImage: "/author.webp",
      scheduledDate: "2025-01-20",
      tags: ["marketing", "seo", "growth"],
    },
    sections: [
      {
        heading: "Introduction",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.</p>",
      },
      {
        heading: "Why Digital Marketing Matters",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.</p>",
      },
    ],
    blogCTAs: [
      {
        id: 1,
        sectionIndex: 1,
        cta: {
          id: 1,
          imageUrl: "/blog-cta.webp",
          heading: "Need Help With Digital Marketing?",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Talk to our experts today.",
          buttonText: "Get Free Consultation",
          buttonHref: "/contact",
        },
      },
    ],
    faq: [
      {
        question: "Is digital marketing worth it?",
        answer:
          "Yes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        question: "Is digital marketing worth it?",
        answer:
          "Yes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        question: "Is digital marketing worth it?",
        answer:
          "Yes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        question: "Is digital marketing worth it?",
        answer:
          "Yes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    author: {
      name: "Author Details",
    pictureUrl: "/author-avatar.webp",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
      scheduledDate: "2025-01-20",
    },
    relatedBlogs: [
      {
        title: "SEO Best Practices for 2025",
        scheduledDate: "2025-01-15",
        pictureUrl: "/blog-banner.webp",
        slug: "seo-best-practices-2025",
      },
    ],
    seo: {
      seoTitle: "How Digital Marketing Helps Modern Businesses | HT-Solutions",
      seoDescription:
        "Discover how digital marketing can transform your business growth strategy.",
    },
  },
  {
    slug: "seo-best-practices-2025",
    banner: {
      title: "SEO Best Practices for 2025",
      image: "/blog-banner.webp",
      description:
        "A practical checklist for technical SEO, content, and authority building that helps Canadian businesses grow search visibility in 2025.",
      authorName: "John Doe",
      authorImage: "/author.webp",
      scheduledDate: "2025-01-15",
      tags: ["seo", "content", "technical seo"],
    },
    sections: [
      {
        heading: "Introduction",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.</p>",
      },
      {
        heading: "What actually moves rankings in 2025",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.</p>",
      },
    ],
    blogCTAs: [
      {
        id: 1,
        sectionIndex: 1,
        cta: {
          id: 1,
          imageUrl: "/blog-cta.webp",
          heading: "Need Help With Digital Marketing?",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Talk to our experts today.",
          buttonText: "Get Free Consultation",
          buttonHref: "/contact",
        },
      },
    ],
    faq: [
      {
        question: "Is digital marketing worth it?",
        answer:
          "Yes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    author: {
      name: "John Doe",
      pictureUrl: "/author-avatar.webp",
      bio: "John is a digital marketing strategist with 10+ years of experience.",
      scheduledDate: "2025-01-15",
    },
    relatedBlogs: [
      {
        title: "SEO Best Practices for 2025",
        scheduledDate: "2025-01-15",
        pictureUrl: "/blog-banner.webp",
        slug: "seo-best-practices-2025",
      },
    ],
    seo: {
      seoTitle: "SEO Best Practices for 2025 | HT-Solutions",
      seoDescription:
        "A practical checklist for technical SEO, content, and authority building to improve rankings in 2025.",
    },
  },
  {
    slug: "local-seo-canada-checklist",
    banner: {
      title: "Local SEO in Canada: A Simple Checklist That Gets Calls",
      image: "/blog-banner.webp",
      description:
        "A clear, practical local SEO checklist to improve Google Business Profile visibility, rankings, and inbound calls across Canadian cities.",
      authorName: "John Doe",
      authorImage: "/author.webp",
      scheduledDate: "2025-02-05",
      tags: ["local seo", "google business profile", "rankings"],
    },
    sections: [
      {
        heading: "What is local SEO?",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.</p><img src=\"/blog-image.png\" alt=\"Local SEO\" />",
      },
      {
        heading: "The checklist",
        content:
          "<ul><li>Optimize your Google Business Profile</li><li>Build consistent citations</li><li>Create location pages for priority cities</li><li>Collect and respond to reviews</li></ul>",
      },
    ],
    blogCTAs: [
      {
        id: 1,
        sectionIndex: 1,
        cta: {
          id: 1,
          imageUrl: "/blog-cta.webp",
          heading: "Want Local SEO That Produces Leads?",
          paragraph:
            "Get a quick review of your local visibility and a clear plan to improve rankings and calls.",
          buttonText: "Get Free Consultation",
          buttonHref: "/contact",
        },
      },
    ],
    faq: [
      {
        question: "How long does local SEO take to work?",
        answer:
          "Most improvements can be measured within 4 to 12 weeks, depending on competition and how complete your listings and content are.",
      },
    ],
    author: {
      name: "John Doe",
      pictureUrl: "/author-avatar.webp",
      bio: "John is a digital marketing strategist with 10+ years of experience.",
      scheduledDate: "2025-02-05",
    },
    seo: {
      seoTitle: "Local SEO in Canada Checklist | HT-Solutions",
      seoDescription:
        "A practical local SEO checklist for Canadian businesses to improve rankings, visibility, and calls.",
    },
  },
  // Add more blogs here
];