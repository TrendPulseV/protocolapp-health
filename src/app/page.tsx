import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Screenshots from "@/components/landing/Screenshots";
import Differentiators from "@/components/landing/Differentiators";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import PrivacyBanner from "@/components/landing/PrivacyBanner";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c1524] text-white">
      <Nav />
      <Hero />
      <Screenshots />
      <Differentiators />
      <Features />
      <Pricing />
      <PrivacyBanner />
      <Footer />
    </main>
  );
}
