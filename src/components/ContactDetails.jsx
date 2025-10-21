import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactDetails = () => {
  const details = [
    { icon: Mail, title: "Email", value: "info@wellnexsystems.com" },
    { icon: Phone, title: "Phone", value: "+92 300 1234567" },
    { icon: MapPin, title: "Location", value: "Karachi, Pakistan" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Background glow */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-gray-200/40 to-gray-400/30 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-300/30 to-gray-400/20 rounded-full blur-[180px]"
      />

      {/* Title */}
      <div className="relative max-w-6xl mx-auto px-6 text-center mb-16 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500"
        >
          Contact Details
        </motion.h2>
      </div>

      {/* Details grid */}
      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {details.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-lg p-8 text-center hover:shadow-2xl transition-all"
            >
              <div className="relative mx-auto mb-5 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-gray-700 to-gray-500 shadow-md">
                <detail.icon className="w-8 h-8 text-white" />
                <motion.span
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl bg-white/20 blur-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {detail.title}
              </h3>
              <p className="text-gray-600">{detail.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactDetails;
