import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Send } from "lucide-react";
import WellnexBackground from "./WellnexBackground";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const controls = useAnimation();
  const dividerControls = useAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  // Timeline data
  const timelineData = [
    {
      year: "2020",
      title: "The Spark",
      event:
        "Wellnex Systems was founded to merge technology and human wellness into one connected experience.",
    },
    {
      year: "2021",
      title: "SoulWhispers Launch",
      event:
        "SoulWhispers redefined emotional wellness with AI-powered mood tracking and mindfulness tools.",
    },
    {
      year: "2022",
      title: "GymKey Expansion",
      event:
        "GymKey connected users to gyms nationwide, introducing smart access and fitness analytics.",
    },
    {
      year: "2023",
      title: "Unified Wellnex Platform",
      event:
        "The first integrated dashboard combining fitness, nutrition, and mental health data.",
    },
    {
      year: "2025",
      title: "Next Horizon",
      event:
        "Introducing wearables, diagnostics, and corporate wellness — building the future of wellbeing.",
    },
  ];

  // Animate timeline line
  useEffect(() => {
    controls.start({
      height: "100%",
      transition: { duration: 2, ease: "easeInOut" },
    });
  }, [controls]);

  // Animate center divider line
  useEffect(() => {
    dividerControls.start({
      height: "100%",
      transition: { duration: 2, ease: "easeInOut" },
    });
  }, [dividerControls]);

  return (
    <section className="relative py-28 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
      <WellnexBackground />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-20 px-6 relative">
        
        {/* ===== Left: Timeline ===== */}
        <div className="relative flex flex-col w-full md:w-1/2">
          <h2 className="relative z-10 text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 uppercase tracking-wider">
            The Wellnex Journey
          </h2>

          {/* Internal timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={controls}
            className="absolute left-[1.5rem] top-20 w-[2px] bg-gradient-to-b from-yellow-400 via-orange-500 to-yellow-600 shadow-[0_0_15px_rgba(255,215,0,0.4)] z-0"
          ></motion.div>

          {/* Timeline Items */}
          <div className="relative pl-12 space-y-12 z-10">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex flex-col"
              >
                <div className="absolute -left-7 top-1.5 z-10">
                  <motion.div
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      boxShadow: [
                        "0 0 0 rgba(255,215,0,0.0)",
                        "0 0 15px rgba(255,215,0,0.6)",
                        "0 0 0 rgba(255,215,0,0.0)",
                      ],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-yellow-300"
                  />
                </div>

                <div className="ml-4">
                  <h3 className="text-yellow-400 font-bold text-lg">
                    {item.year} — {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== Center Animated Divider Line ===== */}
        <motion.div
          initial={{ height: 0 }}
          animate={dividerControls}
          className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-yellow-400 via-orange-500 to-yellow-600 shadow-[0_0_25px_rgba(255,215,0,0.4)]"
          style={{ transform: "translateX(-50%)" }}
        ></motion.div>

        {/* ===== Right: Contact Form ===== */}
        <div className="flex justify-end w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-md mx-auto"
          >
            <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-600 uppercase mb-10">
              Connect With Us
            </h2>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-transparent backdrop-blur-xl border border-yellow-500/20 shadow-2xl rounded-3xl p-8 space-y-6"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-800 p-3 text-white bg-black/40 focus:outline-0 focus:border-yellow-400 rounded-md"
                placeholder="Enter Your Name"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-gray-800 p-3 text-white bg-black/40 focus:outline-0 focus:border-yellow-400 rounded-md"
                placeholder="Enter Your Email"
              />

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border border-gray-800 p-3 text-white bg-black/40 focus:outline-0 focus:border-yellow-400 rounded-md"
                placeholder="Enter Your Message"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-yellow-300 to-orange-600 uppercase flex items-center justify-center gap-2 shadow-md hover:shadow-yellow-400/50 transition-all"
              >
                <Send className="w-5 h-5" />
                {sent ? "Message Sent!" : "Send Message"}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
