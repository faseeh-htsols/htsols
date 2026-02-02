import type { Metadata } from "next";
import { Unbounded, Poppins, Jost, Open_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DefaultProviders from "@/providers/default-providers";

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
const inter = Inter({
  variable: "--font-inter",
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
  icons: {
    icon: [
      {
        url: "/htsol-ball-favicon.svg",
        href: "/htsol-ball-favicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable} bg-black text-white ${inter.variable} ${popins.variable} ${jost.variable} ${open_Sans.variable} antialiased`}
      >
        {/* <Navbar /> */}
        <DefaultProviders>{children}</DefaultProviders>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
