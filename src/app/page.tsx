import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
    </main>
  );
}
