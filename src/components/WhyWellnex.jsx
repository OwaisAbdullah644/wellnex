import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Bot, Users, Rocket } from "lucide-react";

const WhyWellnex = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const whyPoints = [
    {
      title: "Integrated Wellness",
      desc: "Physical, mental, and emotional health in one ecosystem.",
      icon: <Brain className="w-12 h-12 text-yellow-400" />,
      image: "https://images.pexels.com/photos/247356/pexels-photo-247356.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "AI-Driven Personalization",
      desc: "Smart recommendations tailored to your goals.",
      icon: <Bot className="w-12 h-12 text-yellow-400" />,
      image: "https://images.pexels.com/photos/1596445/pexels-photo-1596445.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Scalable for Providers",
      desc: "From boutique studios to national gym chains.",
      icon: <Users className="w-12 h-12 text-yellow-400" />,
      image: "https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Built for the Future",
      desc: "Cloud-native, mobile-first, and privacy-conscious.",
      icon: <Rocket className="w-12 h-12 text-yellow-400" />,
      image: "https://images.pexels.com/photos/4325478/pexels-photo-4325478.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden px-8 py-20"
    >
      {/* Background image - Dark gym with weights */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/247356/pexels-photo-247356.jpeg')`, // Dark gym weights
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 z-10 relative"
      >
        <h1 className="text-5xl lg:text-6xl font-black text-yellow-400 mb-4 uppercase tracking-wide">
          Why Wellnex?
        </h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
          Discover the pillars that make Wellnex the future of integrated wellness.
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <motion.div
        className="columns-2 lg:columns-4 gap-6 space-y-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
      >
        {whyPoints.map((point, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            custom={i}
            className="break-inside-avoid bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-yellow-500/20 transition-shadow duration-300 border border-yellow-500/20"
          >
            <img
              src={point.image}
              alt={point.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="mb-3">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2 uppercase tracking-wide">
                {point.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyWellnex;