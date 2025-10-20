import React from "react";
import { motion } from "framer-motion";
import { Brain, Users, Heart, Sparkles } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const About = () => {
  const pillars = [
    {
      icon: Users,
      title: "Unified Health Matrix",
      desc: "Integrating fitness, mind, and diagnostics in one futuristic ecosystem.",
    },
    {
      icon: Brain,
      title: "Adaptive AI",
      desc: "Your wellness journey evolves with every heartbeat and emotion.",
    },
    {
      icon: Heart,
      title: "Empowered Humanity",
      desc: "Technology designed around empathy, not algorithms.",
    },
    {
      icon: Sparkles,
      title: "Boundless Future",
      desc: "Innovating the next decade of digital wellness evolution.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/50 text-gray-800">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating pastel glows */}
      <motion.div
        animate={{ y: [0, -25, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-1/4 top-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute right-1/4 bottom-10 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl"
      />

      {/* Title & description */}
      <div className="relative z-10 text-center mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-500 bg-clip-text text-transparent"
        >
          Redefining Wellness Intelligence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg"
        >
          Wellnex merges physical strength, mental clarity, and AI insight into a
          single evolving ecosystem designed to elevate human potential.
        </motion.p>

        {/* Gym animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-80 h-80 mx-auto mt-16"
        >
          <DotLottieReact
            src="https://lottie.host/f305aee7-a0ce-47e2-a8df-0f9485d2bb03/fUKNT5XhW0.lottie"
            loop
            autoplay
          />
        </motion.div>
      </div>

      {/* Pillars grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 relative z-10">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-lg border border-blue-100 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <pillar.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
            <p className="text-gray-600 text-sm">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
