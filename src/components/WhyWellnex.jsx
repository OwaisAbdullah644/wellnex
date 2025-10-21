import React from "react";
import { motion } from "framer-motion";
import { Users, Brain, Shield, Cloud } from "lucide-react";

const WhyWellnex = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const pillars = [
    {
      icon: Users,
      title: "Integrated Wellness",
      desc: "Physical, mental, and emotional health united in one ecosystem.",
    },
    {
      icon: Brain,
      title: "AI-Driven Personalization",
      desc: "Smart, adaptive insights tailored precisely to you.",
    },
    {
      icon: Shield,
      title: "Scalable for Providers",
      desc: "From boutique studios to national wellness platforms.",
    },
    {
      icon: Cloud,
      title: "Built for the Future",
      desc: "Cloud-native, privacy-first, and built to scale globally.",
    },
  ];

  const particles = [...Array(6)].map((_, i) => (
    <motion.span
      key={i}
      className="absolute w-2 h-2 bg-gray-400/20 rounded-full blur-[1px]"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ));

  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,213,219,0.3)_0%,rgba(255,255,255,0)_80%)]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {particles}

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20 px-6"
      >
        <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
          Why Wellnex?
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          Discover how Wellnex is redefining wellness through intelligence, design, and simplicity.
        </p>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              y: -5,
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(156,163,175,0.15)",
            }}
            className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 shadow-md hover:shadow-lg rounded-3xl p-8 text-center transition-all duration-300 overflow-hidden"
          >
            <motion.div
              className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-gray-800 text-white shadow-inner shadow-gray-200"
              whileHover={{
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            >
              <pillar.icon className="w-10 h-10 z-10" />
            </motion.div>

            <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors">
              {pillar.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>

            <motion.div
              className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-800 opacity-0 group-hover:opacity-100"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyWellnex;