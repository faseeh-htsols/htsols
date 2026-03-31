import Main from "@/views/mississauga/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Web Design Mississauga | Custom Websites | HTSOL Inc.",
  description:
    "Professional web design in Mississauga, ON. HTSOL Inc. builds fast, custom websites for local businesses — SEO-ready, mobile-first, live in under a month. Book a free consultation.",
  alternates: {
    canonical: "https://www.htsol.ca/web-design-mississauga",
  },
};
export default function LocationPage() {
  return (
    <>
      <Main />
    </>
  );
}
