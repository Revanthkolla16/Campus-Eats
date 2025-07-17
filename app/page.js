import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Instructions from "../components/Instructions";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F7]">
      <Navbar />
      <HeroSection />
      <Instructions />
    </main>
  );
}
