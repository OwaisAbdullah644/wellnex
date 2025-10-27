import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import WellnexBackground from "./WellnexBackground";
import { contactDetails } from "./ContactDetailsData";

const ContactDetails = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, [])

  const icons = { Mail, Phone, MapPin };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-[#050505] border-t border-gray-800">
      <WellnexBackground />
      <div className="max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 uppercase tracking-widest text-center"
        >
          Contact Details
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-base sm:text-lg md:text-xl text-center mt-4 max-w-full sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed"
        >
          We're here to collaborate, assist, and innovate — reach out to our team directly.
        </motion.p>
      </div>
      <div className="max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8">
        {contactDetails.map((detail, i) => {
          const Icon = icons[detail.icon] || Mail;
          return (
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
              className="relative border border-gray-800 rounded-2xl bg-[#0b0b0b] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(253,199,0,0.05)]"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-xl bg-[#111] border border-gray-700 mb-4 sm:mb-6">
                <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 uppercase tracking-wide mb-2">
                {detail.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{detail.value}</p>
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-400"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          );
        })}
      </div>
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[500px] md:w-[700px] h-[150px] sm:h-[200px] bg-yellow-500/10 blur-[80px] sm:blur-[120px]"
      />
    </section>
  );
};

export default ContactDetails;