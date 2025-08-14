import React from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-[#ea9216] text-white">
      <h1 className="text-2xl font-bold">DonateIt</h1>
      <div className="flex items-center gap-4">
        <a href="#" className="hover:text-[#eeeeee] transition">Home</a>
        <a href="#" className="hover:text-[#eeeeee] transition">Browse</a>
        <a href="#" className="hover:text-[#eeeeee] transition">About</a>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-[#3a4750] hover:bg-[#313841] transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
