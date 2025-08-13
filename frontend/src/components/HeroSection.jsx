import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-28 px-6">
      <div className="container mx-auto text-center md:text-left md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-6">Donate What You Don’t Need, Help Someone in Need</h1>
          <p className="mb-8 text-xl max-w-xl">
            Give your unused items a new life by connecting with people who need them for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
              Browse Items
            </button>
            <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-green-600 transition">
              Create Listing
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img src="/images/hero-donation.png" alt="Donation Illustration" className="w-96" />
        </div>
      </div>
    </section>
  );
}
