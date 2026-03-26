import type { Metadata } from "next";
import { Unbounded, Poppins, Jost, Open_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DefaultProviders from "@/providers/default-providers";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
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
  verification: {
    google: "TH_L-Ksg9FClpQN94jCRTKe1hBGcT1HI60tlub3V0_M",
  },
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
      <GoogleTagManager gtmId="GTM-P2JCR47K" />
      <body
        className={`${unbounded.variable} bg-black text-white ${inter.variable} ${popins.variable} ${jost.variable} ${open_Sans.variable} antialiased`}
      >
        <GoogleAnalytics gaId="G-G1VLXCBDQW" />
        {/* <Navbar /> */}
        <DefaultProviders>{children}</DefaultProviders>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
