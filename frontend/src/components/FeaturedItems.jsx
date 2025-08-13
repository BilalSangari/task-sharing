import React from "react";
import ItemCard from "./ItemCard";

const mockItems = [
  {
    id: 1,
    title: "Winter Jacket",
    description: "Almost new, size M",
    imageUrl: "/images/jacket.jpg",
  },
  {
    id: 2,
    title: "Used Laptop",
    description: "Works fine, 8GB RAM",
    imageUrl: "/images/laptop.jpg",
  },
  {
    id: 3,
    title: "Books Set",
    description: "A collection of novels",
    imageUrl: "/images/books.jpg",
  },
  {
    id: 4,
    title: "Bicycle",
    description: "Good condition, city bike",
    imageUrl: "/images/bike.jpg",
  },
];

export default function FeaturedItems() {
  return (
    <section id="browse" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Featured Donations</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {mockItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
