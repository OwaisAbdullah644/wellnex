import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } };
  const staggerChildren = { initial: 'hidden', whileInView: 'visible', variants: { visible: { transition: { staggerChildren: 0.2 } } }, viewport: { once: true } };

  const testimonials = [
    {
      quote: '“SoulWhispers helped me find calm in chaos. It’s like therapy in my pocket.”',
      author: 'Ayesha R., Karachi',
      image: 'https://via.placeholder.com/50x50?text=AR'
    },
    {
      quote: '“GymKey has transformed how I manage my gym. My members love the convenience.”',
      author: 'Imran M., Gym Owner, Lahore',
      image: 'https://via.placeholder.com/50x50?text=IM'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center mb-12 text-navy">
          Testimonials
        </motion.h2>
        <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerChildren}>
          {testimonials.map((testimonial, i) => (
            <motion.div key={i} variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl italic text-gray-700">
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author.split(',')[0]} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-navy">{testimonial.author.split(',')[0]}</h4>
                  <p className="text-sm text-gray-500">{testimonial.author.split(',')[1]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;