import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-green-600">DonateIt</div>
        <nav>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><a href="#browse" className="hover:text-green-600 transition">Browse Items</a></li>
            <li><a href="#how-it-works" className="hover:text-green-600 transition">How It Works</a></li>
            <li><a href="#about" className="hover:text-green-600 transition">About</a></li>
            <li><a href="#login" className="hover:text-green-600 transition">Login/Signup</a></li>
          </ul>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-2 py-4 px-6 text-gray-700 font-medium">
            <li><a href="#browse" className="hover:text-green-600 transition">Browse Items</a></li>
            <li><a href="#how-it-works" className="hover:text-green-600 transition">How It Works</a></li>
            <li><a href="#about" className="hover:text-green-600 transition">About</a></li>
            <li><a href="#login" className="hover:text-green-600 transition">Login/Signup</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
