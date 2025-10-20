import React from "react";
import { motion } from "framer-motion";
import { Calendar, Cpu, Activity, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

const WhatsComingNext = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const featureCards = [
    {
      icon: <HeartPulse className="w-7 h-7 text-cyan-400" />,
      title: "Unified Vital Intelligence",
      desc: "All your wellness metrics — heart rate, sleep, activity — visualized through real-time AI dashboards.",
      gradient: "from-blue-600 to-cyan-400",
    },
    {
      icon: <Cpu className="w-7 h-7 text-indigo-400" />,
      title: "Cognitive Wellness AI",
      desc: "An adaptive assistant that understands emotional, mental, and physical states to offer personalized insights.",
      gradient: "from-indigo-500 to-purple-400",
    },
    {
      icon: <Activity className="w-7 h-7 text-emerald-400" />,
      title: "Smart Connected Ecosystem",
      desc: "Wearables, nutrition trackers, and clinics — all connected through the Wellnex Neural Network.",
      gradient: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 bg-[#020617] text-white flex flex-col items-center justify-center">
      {/* 🌌 Animated Nebula Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0f172a_0%,#020617_80%)]"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* 💫 Floating light particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] bg-cyan-300 rounded-full opacity-50"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            y: [Math.random() * window.innerHeight, -50],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* 🔮 Section Title */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          The Future of Wellness
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          We’re building the next-gen <span className="text-cyan-400 font-semibold">Wellnex Platform</span> —  
          where health meets intelligence, and your body data evolves into a living, breathing ecosystem.
        </p>
      </motion.div>

      {/* ⚙️ Feature Cards */}
      <div className="relative z-10 mt-20 grid md:grid-cols-3 gap-10 max-w-6xl px-8">
        {featureCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.3 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59,130,246,0.3)",
            }}
            className={`group relative p-8 rounded-3xl bg-gradient-to-b from-slate-900/70 to-slate-800/50 border border-slate-700 backdrop-blur-xl overflow-hidden`}
          >
            {/* Glow Background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-10 group-hover:opacity-20 transition-all duration-700`}
            />
            {/* Icon */}
            <div className="mb-5">{card.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 🌠 CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mt-16"
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/40 transition-all duration-500"
        >
          Get Early Access
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>

      {/* ⚡ Animated bottom pulse line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
        style={{ originX: 0 }}
      />
    </section>
  );
};

export default WhatsComingNext;
