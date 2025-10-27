import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { aboutFeatures } from "./aboutData";

const About = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, [])
  return (
    <section className="relative flex flex-col min-h-screen bg-black text-white overflow-hidden py-8 sm:py-12 md:py-16">
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#FDC700] to-transparent" />
      <div className="absolute inset-[2%] sm:inset-[3%] rounded-[20px] sm:rounded-[40px] border border-[#FDC700]/40" style={{ boxShadow: `0 0 20px #FDC70040, inset 0 0 10px #FDC70020` }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at Yazan: 30%_30%,#FDC70015,transparent_70%),radial-gradient(circle_at_70%_70%,#FDC70010,transparent_80%)]" />
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#FDC70010] to-transparent relative z-10 px-4 sm:px-6 md:px-12">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#FDC700] to-[#ffc801] bg-clip-text text-transparent tracking-tight text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Wellnex Core
        </motion.h1>
      </div>
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 space-y-6 sm:space-y-8 relative z-10">
        {aboutFeatures.map((feature, i) => (
          <motion.div 
            key={i} 
            className="border-l-4 border-[#FDC700] pl-4 sm:pl-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, x: 8 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{feature.name}</h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-full sm:max-w-md">{feature.description}</p>
          </motion.div>
        ))}
      </div>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-[#FDC700]/60 rounded-full blur-sm"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, opacity: 0.4 }}
        />
      ))}
    </section>
  );
};

export default About;