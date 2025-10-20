import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-blue-50 to-teal-50 overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute -top-40 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-teal-300/30 to-blue-200/20 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/40 to-cyan-100/30 rounded-full blur-[180px]"
      />

      <div className="relative max-w-2xl mx-auto px-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-700 via-teal-600 to-cyan-500 bg-clip-text text-transparent mb-14"
        >
          Send Us a Message
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-8 space-y-6"
        >
          {["name", "email"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : "text"}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                required
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <label
                className="absolute left-4 top-2.5 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                {field === "email" ? "Your Email" : "Your Name"}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <label className="absolute left-4 top-2.5 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Your Message
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-teal-500 text-white flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all"
          >
            <Send className="w-5 h-5" />
            {sent ? "Message Sent!" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
