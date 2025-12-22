import type { Metadata } from "next";
import { Unbounded, Poppins, Jost, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const popins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const open_Sans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["600"],
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
      <body
        className={`${unbounded.variable} ${popins.variable} ${jost.variable} ${open_Sans.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
