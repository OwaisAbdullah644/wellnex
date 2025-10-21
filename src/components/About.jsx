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
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,213,219,0.3)_0%,rgba(255,255,255,0)_80%)]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {particles}

      <div className="relative z-10 text-center mb-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent"
        >
          Redefining Wellness Intelligence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          Wellnex merges physical strength, mental clarity, and AI insight into a
          single evolving ecosystem designed to elevate human potential.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-80 h-80 mx-auto mt-16 rounded-full bg-white backdrop-blur-xl border border-gray-200 shadow-[0_0_40px_rgba(156,163,175,0.2)] overflow-hidden"
        >
          <DotLottieReact
            src="https://lottie.host/f305aee7-a0ce-47e2-a8df-0f9485d2bb03/fUKNT5XhW0.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 relative z-10">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              y: -3,
              boxShadow: "0 10px 30px rgba(156,163,175,0.15)",
            }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-lg border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <pillar.icon className="w-12 h-12 text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
            <p className="text-gray-600 text-sm">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;