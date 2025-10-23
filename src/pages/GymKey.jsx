import React from "react";
import { motion } from "framer-motion";
import WellnexBackground from "../components/WellnexBackground";
import { Dumbbell, Users, Calendar, BarChart3 } from "lucide-react";

const GymKey = () => {
  const features = [
    {
      icon: <Dumbbell className="w-8 h-8 text-yellow-400" />,
      title: "Workout Tracking",
      desc: "Log sessions, analyze performance, and visualize progress with precision AI insights.",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Seamless Check-in",
      desc: "Access any partner gym instantly with one tap—no keys, no cards, pure convenience.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-yellow-400" />,
      title: "Realtime Schedules",
      desc: "Stay in sync with trainers, book classes, and never miss your workout rhythm.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: "Owner Tools",
      desc: "Simplify gym operations and member engagement with smart, data-driven tools.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* 🔥 Shared Wellnex animated background */}
      <WellnexBackground particleCount={10} />

      {/* 🏋️‍♂️ Parallax background image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover opacity-30"
        style={{
          backgroundImage:
            "url('gym.jpg')",
        }}
      ></div>

      {/* 🦾 Hero Section */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 uppercase tracking-wide mb-6"
        >
          GymKey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Your digital passport to fitness freedom—track workouts, unlock gyms,
          and experience a new era of connected health.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg"
          >
            Explore Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-400 font-semibold"
          >
            Download App
          </motion.a>
        </div>
      </div>

      {/* 🧠 Features Section */}
      <div className="relative z-10 py-32 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-yellow-400 uppercase mb-20"
        >
          Key Features
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl border border-gray-800 bg-[#0a0a0a]/70 hover:border-yellow-400/40 transition-all duration-300 group backdrop-blur-md"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-[#111] border border-gray-700 group-hover:border-yellow-400 transition">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>

              {/* underline animation */}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-400"
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🧘 Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center py-32"
      >
        <p className="text-2xl italic text-gray-300 max-w-2xl mx-auto mb-4">
          “GymKey has transformed how I manage my gym. My members love the convenience.”
        </p>
        <h4 className="text-yellow-400 font-semibold">
          — Imran M., Gym Owner, Lahore
        </h4>
      </motion.div>
    </section>
  );
};

export default GymKey;
