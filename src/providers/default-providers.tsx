"use client";

import useLenisScroll from "@/hooks/use-lenis-scroll";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const DefaultProviders = ({ children }: { children: React.ReactNode }) => {
  useLenisScroll();
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultProviders;
