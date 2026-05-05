import type { Metadata } from "next";
import Script from "next/script";
import { Unbounded, Poppins, Jost, Open_Sans, Inter } from "next/font/google";
import "./globals.css";
import DefaultProviders from "@/providers/default-providers";

const gtmId = "GTM-P2JCR47K";
const gaId = "G-G1VLXCBDQW";

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
      <body
        className={`${unbounded.variable} bg-black text-white ${inter.variable} ${popins.variable} ${jost.variable} ${open_Sans.variable} antialiased`}
      >
        {/* <Navbar /> */}
        <DefaultProviders>{children}</DefaultProviders>
        {/* <Footer /> */}
        <Script
          id="htsol-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var loaded = false;
                var loadAnalytics = function() {
                  if (loaded) return;
                  loaded = true;

                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({'gtm.start': new Date().getTime(), event:'gtm.js'});

                  var gtmScript = document.createElement('script');
                  gtmScript.async = true;
                  gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=${gtmId}';
                  document.head.appendChild(gtmScript);

                  function gtag(){window.dataLayer.push(arguments);}
                  window.gtag = window.gtag || gtag;
                  gtag('js', new Date());
                  gtag('config', '${gaId}');

                  var gaScript = document.createElement('script');
                  gaScript.async = true;
                  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=${gaId}';
                  document.head.appendChild(gaScript);
                };

                var schedule = window.requestIdleCallback || function(callback) {
                  return window.setTimeout(callback, 3000);
                };
                schedule(loadAnalytics, { timeout: 6000 });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
