import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HT-Solutions | Web Design & Digital Marketing Agency",
  description:
    "HT-Solutions provides Website Designing, Web Development, SEO Services, Graphic Designing, Mobile Application Development, Video Production, Voice Over, Digital Marketing and Network Solutions in Lahore, Pakistan.",
  keywords: [
    "web design",
    "web development",
    "SEO",
    "digital marketing",
    "graphic design",
    "mobile app development",
    "Lahore",
    "Pakistan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
