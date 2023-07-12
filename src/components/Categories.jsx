import React from "react";
import { motion } from "framer-motion";

const Categories = ({ title, paragraph, button }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.1 }}
      className="flex items-center flex-col gap-4 bg-white p-8 rounded-xl shadow-md"
    >
      <div className="text-xl font-bold text-Teal">{title}</div>
      <div className="text-gray text-sm">{paragraph}</div>
      <a href="" className="text-sm bg-Teal rounded-lg px-2 py-2 text-white">
        {button}
      </a>
    </motion.div>
  );
};

export default Categories;
