"use client";

import useLenisScroll from "@/hooks/use-lenis-scroll";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LandingNavbar from "@/views/dental-marketing/navbar";
import LandingFooter from "@/views/dental-marketing/footer";
import { usePathname } from "next/navigation";

const DefaultProviders = ({ children }: { children: React.ReactNode }) => {
  useLenisScroll();

  const pathname = usePathname();

  const isLandingPage = pathname === "/dental-marketing";

  return (
    <>
      {isLandingPage ? <LandingNavbar /> : <Navbar />}
      <main>{children}</main>
      {isLandingPage ? <LandingFooter /> : <Footer />}
    </>
  );
};

export default DefaultProviders;
