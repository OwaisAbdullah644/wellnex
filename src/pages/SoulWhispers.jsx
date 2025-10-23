import React from "react";
import { motion } from "framer-motion";
import WellnexBackground from "../components/WellnexBackground";
import { Brain, Play, Calendar, User } from "lucide-react";

const SoulWhispers = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-yellow-400" />,
      title: "Mood Journaling with AI Insights",
      desc: "Track your emotions and get personalized recommendations to build resilience and mental clarity.",
    },
    {
      icon: <Play className="w-8 h-8 text-yellow-400" />,
      title: "Guided Meditations",
      desc: "Access a curated library of sessions from quick breaths to deep reflections designed to calm your mind.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-yellow-400" />,
      title: "Seamless Booking & Check-In",
      desc: "Book sessions with your wellness coach or therapist in just a few taps.",
    },
    {
      icon: <User className="w-8 h-8 text-yellow-400" />,
      title: "Telehealth & Diagnostics",
      desc: "Connect with trusted wellness professionals anytime, anywhere.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white">
      {/* Shared Wellnex animated background */}
      <WellnexBackground particleCount={10} />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center py-40 max-w-4xl mx-auto px-6"
      >
        <motion.h1
          className="text-6xl md:text-6xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 uppercase tracking-wide mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          SoulWhispers
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Reconnect with your inner calm through guided meditations, AI-powered
          mood journaling, and personalized wellness insights.
        </motion.p>

        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg"
          >
            Download on App Store
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-400 font-semibold"
          >
            Google Play
          </motion.a>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="relative z-10 py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 uppercase mb-16">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="p-8 rounded-3xl bg-[#0f0f0f]/60 border border-yellow-500/10 backdrop-blur-lg hover:border-yellow-500/40 transition-all duration-300"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{f.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center py-24"
      >
        <p className="text-2xl italic text-gray-300 max-w-2xl mx-auto mb-4">
          “SoulWhispers helped me find calm in chaos. It’s like therapy in my pocket.”
        </p>
        <h4 className="text-yellow-400 font-semibold">— Ayesha R., Karachi</h4>
      </motion.div>
    </section>
  );
};

export default SoulWhispers;
