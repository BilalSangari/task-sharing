import React from "react";
import { motion } from "framer-motion";

const items = [
  { id: 1, name: "Winter Jacket", img: "https://via.placeholder.com/200" },
  { id: 2, name: "Bicycle", img: "https://via.placeholder.com/200" },
  { id: 3, name: "Laptop", img: "https://via.placeholder.com/200" },
];

const FeaturedItems = () => {
  return (
    <section className="p-8 bg-white dark:bg-[#3a4750] transition-colors">
      <h3 className="text-2xl font-bold text-center mb-6 text-[#3a4750] dark:text-[#ea9216]">
        Featured Donations
      </h3>
      <div className="flex gap-6 justify-center flex-wrap">
        {items.map((item) => (
          <motion.div
            key={item.id}
            drag
            dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
            className="p-4 bg-[#eeeeee] dark:bg-[#313841] rounded-lg shadow-md cursor-grab"
          >
            <img src={item.img} alt={item.name} className="rounded-md mb-2" />
            <p className="text-center font-medium text-[#3a4750] dark:text-gray-200">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
