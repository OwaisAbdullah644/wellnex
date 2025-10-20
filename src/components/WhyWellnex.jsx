import React from "react";
import { motion } from "framer-motion";
import { Users, Brain, Shield, Cloud } from "lucide-react";

const WhyWellnex = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const pillars = [
    {
      icon: Users,
      title: "Integrated Wellness",
      desc: "Physical, mental, and emotional health united in one ecosystem.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Brain,
      title: "AI-Driven Personalization",
      desc: "Smart, adaptive insights tailored precisely to you.",
      color: "from-indigo-500 to-purple-400",
    },
    {
      icon: Shield,
      title: "Scalable for Providers",
      desc: "From boutique studios to national wellness platforms.",
      color: "from-emerald-500 to-teal-400",
    },
    {
      icon: Cloud,
      title: "Built for the Future",
      desc: "Cloud-native, privacy-first, and built to scale globally.",
      color: "from-sky-500 to-blue-400",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-[#f0faff] to-[#e0f2fe] text-slate-900">
      {/* Subtle glowing orbs for ambient depth */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-[100px]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/30 rounded-full blur-[120px]"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
          Why Wellnex?
        </h2>
        <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          Discover how Wellnex is redefining wellness through intelligence, design, and technology.
        </p>
      </motion.div>

      {/* Pillars Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="group relative bg-white/80 backdrop-blur-xl border border-slate-100 shadow-lg hover:shadow-blue-200/40 rounded-3xl p-8 text-center transition-all duration-500"
          >
            {/* Icon Glow Ring */}
            <div
              className={`relative mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r ${pillar.color} shadow-inner shadow-slate-100`}
            >
              <div className="absolute inset-0 blur-2xl opacity-60 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
              <pillar.icon className="w-10 h-10 text-white z-10 drop-shadow-md" />
            </div>

            {/* Title & Desc */}
            <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
              {pillar.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>

            {/* Glow line animation on hover */}
            <motion.div
              className={`absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100`}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              style={{ originX: 0 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyWellnex;
