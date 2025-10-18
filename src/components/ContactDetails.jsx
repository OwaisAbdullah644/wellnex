import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactDetails = () => {
  const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } };
  const staggerChildren = { initial: 'hidden', whileInView: 'visible', variants: { visible: { transition: { staggerChildren: 0.2 } } }, viewport: { once: true } };

  const details = [
    { icon: Mail, title: 'Email', value: 'info@wellnexsystems.com' },
    { icon: Phone, title: 'Phone', value: '+92 300 1234567' }, // Placeholder; update as needed
    { icon: MapPin, title: 'Location', value: 'Karachi, Pakistan' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div className="grid md:grid-cols-3 gap-8 text-center" variants={staggerChildren}>
          {details.map((detail, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <detail.icon className="w-12 h-12 mx-auto mb-4 text-teal" />
              <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
              <p className="text-gray-600">{detail.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactDetails;