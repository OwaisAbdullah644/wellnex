import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with EmailJS or backend API
    alert('Message sent! Thanks for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <motion.form {...fadeInUp} onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-teal text-white py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-sage transition"
          >
            <Send className="mr-2 w-5 h-5" /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;