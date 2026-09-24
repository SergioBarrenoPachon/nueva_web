import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TheCraftPinned from "@/components/TheCraftPinned";
import HorizontalGallery from "@/components/HorizontalGallery";
import BentoCatalog from "@/components/BentoCatalog";
import StoreLocatorMadrid from "@/components/StoreLocatorMadrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090b] text-[#f4f5f7] overflow-hidden selection:bg-[#2b4cde] selection:text-white">
      {/* Header and Floating Navigation */}
      <Navbar />

      {/* 1. Cinematic Hero Section with Scroll Scale Expansion */}
      <HeroSection />

      {/* 2. The Craft / El Taller: Pinned Section Layer Dissection */}
      <TheCraftPinned />

      {/* 3. Horizontal Scroll Gallery: Artistic Techniques & Disciplines */}
      <HorizontalGallery />

      {/* 4. Luxury Bento Grid Catalog with Live Filtering and Fast Add-to-Cart */}
      <BentoCatalog />

      {/* 5. Madrid Traditional Heritage & Avant-garde Store Locator */}
      <StoreLocatorMadrid />

      {/* 6. Editorial Footer with Authentic Store Data and Partner Logos */}
      <Footer />
    </main>
  );
}
