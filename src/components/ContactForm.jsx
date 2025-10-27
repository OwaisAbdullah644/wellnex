import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Send } from "lucide-react";
import { z } from "zod";
import WellnexBackground from "./WellnexBackground";
import { timelineData } from "./ContactFormData";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const controls = useAnimation();
  const dividerControls = useAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const formattedErrors = result.error.flatten().fieldErrors;
      setErrors(formattedErrors);
      return;
    }
    setErrors({});
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, [])

  useEffect(() => {
    controls.start({
      height: "100%",
      transition: { duration: 2, ease: "easeInOut" },
    });
    dividerControls.start({
      height: "100%",
      transition: { duration: 2, ease: "easeInOut" },
    });
  }, [controls, dividerControls]);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
      <WellnexBackground />
      <div className="max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-8 relative">
        <div className="relative flex flex-col w-full md:w-1/2">
          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 uppercase tracking-wider">
            The Wellnex Journey
          </h2>
          <motion.div
            initial={{ height: 0 }}
            animate={controls}
            className="absolute left-[1.5rem] top-16 sm:top-20 w-[2px] bg-gradient-to-b from-yellow-400 via-orange-500 to-yellow-600 shadow-[0_0_15px_rgba(255,215,0,0.4)] z-0"
          ></motion.div>
          <div className="relative pl-10 sm:pl-12 space-y-8 sm:space-y-12 z-10">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex flex-col"
              >
                <div className="absolute -left-6 sm:-left-7 top-1.5 z-10">
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
                  <h3 className="text-yellow-400 font-bold text-base sm:text-lg">
                    {item.year} — {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-full sm:max-w-md">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={dividerControls}
          className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-yellow-400 via-orange-500 to-yellow-600 shadow-[0_0_25px_rgba(255,215,0,0.4)]"
          style={{ transform: "translateX(-50%)" }}
        ></motion.div>
        <div className="flex justify-end w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[90vw] sm:max-w-md mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-600 uppercase mb-8 sm:mb-10">
              Connect With Us
            </h2>
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-transparent backdrop-blur-xl border border-yellow-500/20 shadow-2xl rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-gray-800 p-2 sm:p-3 text-white bg-black/40 focus:outline-0 focus:border-yellow-400 rounded-md text-sm sm:text-base"
                  placeholder="Enter Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name[0]}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-800 p-2 sm:p-3 text-white bg-black/40 focus:outline-0 focus:border-yellow-400 rounded-md text-sm sm:text-base"
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email[0]}</p>
                )}
              </div>
              <div>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border border-gray-800 p-2 sm:p-3 text-white bg-black/40 focus:outline-0 focus:border-yellow-400 rounded-md text-sm sm:text-base"
                  placeholder="Enter Your Message"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message[0]}</p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-2 sm:py-3 rounded-lg font-semibold bg-gradient-to-r from-yellow-300 to-orange-600 uppercase flex items-center justify-center gap-2 shadow-md hover:shadow-yellow-400/50 transition-all text-sm sm:text-base"
              >
                <Send className="w-4 sm:w-5 h-4 sm:h-5" />
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