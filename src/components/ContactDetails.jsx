import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import WellnexBackground from "./WellnexBackground";

const ContactDetails = () => {
  const details = [
    { icon: Mail, title: "Email", value: "info@wellnexsystems.com" },
    { icon: Phone, title: "Phone", value: "+92 300 1234567" },
    { icon: MapPin, title: "Location", value: "Karachi, Pakistan" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative py-28 bg-[#050505] border-t border-gray-800">
      <WellnexBackground />
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-yellow-400 uppercase tracking-widest text-center"
        >
          Contact Details
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg text-center mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          We're here to collaborate, assist, and innovate — reach out to our team directly.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {details.map((detail, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i}
            whileHover={{
              y: -6,
              borderColor: "#FDC700",
              transition: { duration: 0.2 },
            }}
            className="relative border border-gray-800 rounded-2xl bg-[#0b0b0b] p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(253,199,0,0.05)]"
          >
            {/* Icon Container */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#111] border border-gray-700 mb-6">
              <detail.icon className="w-6 h-6 text-yellow-400" />
            </div>

            {/* Text */}
            <h3 className="text-xl font-semibold text-yellow-400 uppercase tracking-wide mb-2">
              {detail.title}
            </h3>
            <p className="text-gray-300 text-sm">{detail.value}</p>

            {/* Subtle Underline */}
            <motion.div
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-400"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Subtle Motion Accent */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-yellow-500/10 blur-[120px]"
      />
    </section>
  );
};

export default ContactDetails;
