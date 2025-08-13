import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-20">
      <div className="container mx-auto px-6 text-center text-gray-600">
        <p>© 2025 DonateIt. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-green-600 transition">Privacy Policy</a>
          <a href="#" className="hover:text-green-600 transition">Terms</a>
          <a href="#" className="hover:text-green-600 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
