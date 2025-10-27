import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6 max-w-lg"
      >
        <div className="flex justify-center mb-4">
          <Clock size={50} className="text-yellow-400 animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Something Exciting is Coming!
        </h1>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          We’re working hard behind the scenes to upgrade our website.  
          We’ll be back shortly — better than ever.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-gray-500">
            Thank you for your patience and support 💛
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
