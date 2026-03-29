import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Screenshots from "@/components/landing/Screenshots";
import PrivacyBanner from "@/components/landing/PrivacyBanner";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c1524] text-white">
      <Nav />
      <Hero />
      <Screenshots />
      <Features />
      <PrivacyBanner />
      <Footer />
    </main>
  );
}
