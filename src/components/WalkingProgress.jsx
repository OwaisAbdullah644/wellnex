import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();  // Get scroll progress (0 to 1)

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 z-50 bg-black origin-left"  // Fixed top bar, gray background
      style={{ scaleX: scrollYProgress }}  // Scales from 0 to 1 as you scroll
    >
      <motion.div
        className="absolute inset-0 h-full bg-gradient-to-r from-teal to-sage"  // Gradient fill matching theme
        style={{ scaleX: scrollYProgress }}
      />
    </motion.div>
  );
};

export default ProgressBar;