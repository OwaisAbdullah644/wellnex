import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "“SoulWhispers helped me find calm in chaos. It’s like therapy in my pocket.”",
      author: "Ayesha R.",
      role: "Karachi",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=60",
    },
    {
      quote: "“GymKey has transformed how I manage my gym. My members love the convenience.”",
      author: "Imran M.",
      role: "Gym Owner, Lahore",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=200&q=60",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-white to-gray-100 text-gray-800">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
          Voices of Wellnex
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
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
            className="relative bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-gray-400/30 p-10 transition-all duration-500"
          >
            <motion.p className="text-xl italic text-gray-700 mb-8 relative z-10 leading-relaxed">
              {t.quote}
            </motion.p>

            <div className="flex items-center relative z-10">
              <motion.img
                src={t.image}
                alt={t.author}
                className="w-14 h-14 rounded-full mr-4 object-cover shadow-md border border-gray-300"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{t.author}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-400 to-gray-200" />
    </section>
  );
};

export default Testimonials;
