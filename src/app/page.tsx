import Main from "@/views/home/main";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "HTSOL Digital Marketing Agency | Web Design & Growth",
  description:
    "Canadian digital partner for web design, UI/UX, CGI, AI SEO, and performance marketing - helping businesses build, improve, and scale online.",
  alternates: {
    canonical: "https://www.htsol.ca",
  },
};
export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}
