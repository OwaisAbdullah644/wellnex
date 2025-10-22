import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative flex flex-col md:flex-row min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#FDC700] to-transparent" />
      <div className="absolute inset-[3%] rounded-[40px] border border-[#FDC700]/40" style={{ boxShadow: `0 0 40px #FDC70040, inset 0 0 20px #FDC70020` }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#FDC70015,transparent_70%),radial-gradient(circle_at_70%_70%,#FDC70010,transparent_80%)]" />
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#FDC70010] to-transparent relative z-10">
        <motion.h1 
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#FDC700] to-[#ffc801] bg-clip-text text-transparent tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Wellnex Core
        </motion.h1>
      </div>
      <div className="flex-1 flex flex-col justify-center px-12 md:px-16 space-y-8 relative z-10">
        {["AI-Driven Workouts", "Precision Mind-Body Mapping", "Golden Era Recovery", "Next-Gen Wellness Tracking"].map((t, i) => (
          <motion.div 
            key={i} 
            className="border-l-4 border-[#FDC700] pl-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, x: 8 }}
          >
            <h3 className="text-2xl font-bold mb-2">{t}</h3>
            <p className="text-gray-400 text-sm max-w-md">Experience a fusion of strength, data, and emotional flow.</p>
          </motion.div>
        ))}
      </div>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#FDC700]/60 rounded-full blur-sm"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, opacity: 0.4 }}
        />
      ))}
    </section>
  );
};

export default About;