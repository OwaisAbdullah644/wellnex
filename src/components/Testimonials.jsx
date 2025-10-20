import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "“SoulWhispers helped me find calm in chaos. It’s like therapy in my pocket.”",
      author: "Ayesha R.",
      role: "Karachi",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=60",
    },
    {
      quote: "“GymKey has transformed how I manage my gym. My members love the convenience.”",
      author: "Imran M.",
      role: "Gym Owner, Lahore",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=200&q=60",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-[#f8fafc] via-[#eef6ff] to-[#e0f2fe]">
      {/* 🌊 Animated Background Wave */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(147,197,253,0.3),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(191,219,254,0.25),transparent_80%)]"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Floating Particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[6px] h-[6px] rounded-full bg-blue-300/50 blur-[2px]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [Math.random() * window.innerHeight, -50],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
          Voices of Wellnex
        </h2>
        <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          Real experiences from people transforming their health and lives with Wellnex.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.3 }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-xl hover:shadow-blue-100/50 p-10 transition-all duration-500"
          >
            {/* Floating Gradient Accent */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 blur-3xl opacity-40"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.p
              className="text-xl italic text-slate-700 mb-8 relative z-10 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {t.quote}
            </motion.p>

            <div className="flex items-center relative z-10">
              <motion.img
                src={t.image}
                alt={t.author}
                className="w-14 h-14 rounded-full mr-4 object-cover shadow-md"
                whileHover={{ rotate: 5, scale: 1.05 }}
              />
              <div>
                <h4 className="text-lg font-semibold text-slate-800">{t.author}</h4>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Glowing Line Divider */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        style={{ originX: 0 }}
      />
    </section>
  );
};

export default Testimonials;
