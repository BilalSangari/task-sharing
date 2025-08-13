import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedItems from "../components/FeaturedItems";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedItems />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
