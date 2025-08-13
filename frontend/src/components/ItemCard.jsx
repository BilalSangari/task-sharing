import React from "react";

export default function ItemCard({ item }) {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-xl transition p-4 max-w-xs mx-auto">
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="rounded-lg mb-3 w-full h-48 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-600 mb-3">{item.description}</p>
      <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
        View Details
      </button>
    </div>
  );
}
