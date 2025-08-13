import React from "react";

const steps = [
  {
    title: "List Your Item",
    description: "Quickly create a listing for the item you want to donate.",
    icon: "📝",
  },
  {
    title: "Find Someone in Need",
    description: "Your item is visible to people who really need it.",
    icon: "🔍",
  },
  {
    title: "Deliver & Confirm",
    description: "Coordinate safely and confirm successful donation.",
    icon: "🎁",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex-1">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
