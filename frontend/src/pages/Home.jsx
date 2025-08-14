import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedItems from "../components/FeaturedItems";
import Footer from "../components/Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[#eeeeee] dark:bg-[#313841] transition-colors">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <FeaturedItems />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
