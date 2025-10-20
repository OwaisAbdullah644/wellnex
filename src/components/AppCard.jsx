import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Play, Dumbbell, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const AppCard = ({
  title,
  subtitle,
  description,
  features,
  ctaText,
  ctaLink,
  gradient,
  icon,
  imageUrl
}) => {
  const { ref, inView } = useInView({ once: true, amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const Icon = icon === 'Play' ? Play : Dumbbell;

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className="group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl border border-white/20 overflow-hidden max-w-sm mx-auto transition-all duration-500"
    >
      {/* Image Section */}
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-48 overflow-hidden"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => (e.target.style.display = 'none')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      )}

      {/* Gradient Header */}
      <div className={`bg-gradient-to-r ${gradient} p-8 text-center text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <motion.div
          whileHover={{
            rotate: [0, 3, -3, 0],
            scale: 1.1,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="relative z-10 w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/50 transition-all duration-300 backdrop-blur-sm"
        >
          <Icon className="w-10 h-10 text-white drop-shadow-lg" />
        </motion.div>
        <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-2 relative z-10 drop-shadow-md">
          {title}
        </motion.h3>
        <motion.p variants={itemVariants} className="text-blue-50/90 font-semibold relative z-10">
          {subtitle}
        </motion.p>
      </div>

      {/* Card Body */}
      <motion.div variants={containerVariants} className="p-8 relative" initial="hidden" animate="visible">
        <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed mb-8 text-base">
          {description}
        </motion.p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, j) => (
            <motion.li
              key={j}
              variants={itemVariants}
              className="flex items-start group/feature"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-1.5 mr-4 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + j * 0.1, type: 'spring' }}
              />
              <span className="text-gray-600 text-sm font-medium">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.02 }} className="relative">
          <Link
            to={ctaLink}
            className="relative w-full bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 text-white py-4 rounded-2xl font-bold text-center hover:from-blue-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl overflow-hidden"
          >
            <span>{ctaText}</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AppCard;
