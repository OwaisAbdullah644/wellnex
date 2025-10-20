import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => (
  <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-white via-green-50 to-gray-100 overflow-hidden text-gray-900">
    <motion.div
      className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.2),transparent_70%)]"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 10, repeat: Infinity }}
    />

    {/* Text */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex-1 z-10 px-8 md:px-16 text-center md:text-left"
    >
      <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-500 mb-6">
        Mind. Body. Balance.
      </h1>
      <p className="text-gray-700 text-lg max-w-lg">
        The intersection of health and technology — experience wellness that adapts to you.
      </p>
      <div className="mt-8 flex gap-4 justify-center md:justify-start">
        <button className="px-10 py-4 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700">
          Get Started
        </button>
        <button className="px-10 py-4 border border-green-500 text-green-600 rounded-full font-semibold hover:bg-green-50">
          Learn More
        </button>
      </div>
    </motion.div>

    {/* Animation */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex-1 z-10 flex justify-center"
    >
      <div className="w-[380px] h-[380px] bg-green-50 rounded-full border border-green-200 shadow-[0_0_100px_rgba(74,222,128,0.4)] flex items-center justify-center">
        <DotLottieReact
          src="https://lottie.host/605bd79e-0bb9-459a-802c-046f08bac07c/JYgSXP3vEh.lottie"
          loop
          autoplay
          style={{ width: "90%", height: "90%" }}
        />
      </div>
    </motion.div>
  </section>
);

export default Hero;
