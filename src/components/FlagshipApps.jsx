import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EnergyPath = ({ delay = 0, color = "#00FFD1", path }) => (
  <motion.path
    d={path}
    stroke={color}
    strokeWidth="6"
    fill="none"
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{
      duration: 3,
      delay,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror"
    }}
  />
);

const FloatingOrb = ({ delay, color, x, y }) => (
  <motion.div
    className="absolute rounded-full blur-2xl opacity-40"
    style={{
      background: color,
      width: "80px",
      height: "80px",
      left: x,
      top: y,
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.7, 0.4],
      y: [0, -20, 0],
    }}
    transition={{
      delay,
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const FlagshipApps = () => {
  const { ref, inView } = useInView({ once: true, amount: 0.3 });
  const controls = useAnimation();
  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#030712] text-white"
    >
      {/* Ambient gradient light */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001f1f] via-[#090e1a] to-[#051f29]" />

      {/* Floating energy orbs */}
      <FloatingOrb color="#00e6a8" delay={0} x="20%" y="10%" />
      <FloatingOrb color="#c084fc" delay={1} x="70%" y="60%" />
      <FloatingOrb color="#22d3ee" delay={2} x="50%" y="80%" />

      {/* SVG glowing energy flow */}
      <svg
        viewBox="0 0 800 400"
        className="absolute w-[160%] max-w-none opacity-80"
      >
        <defs>
          <motion.linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffe0" />
            <stop offset="50%" stopColor="#00b4ff" />
            <stop offset="100%" stopColor="#a855f7" />
          </motion.linearGradient>
        </defs>

        {/* Left flow */}
        <EnergyPath
          path="M 100 300 C 250 250, 300 150, 400 200"
          color="url(#grad1)"
          delay={0}
        />
        {/* Right flow */}
        <EnergyPath
          path="M 700 300 C 550 250, 500 150, 400 200"
          color="url(#grad1)"
          delay={1}
        />
        {/* Merge pulse */}
        <motion.circle
          cx="400"
          cy="200"
          r="12"
          fill="#00ffe0"
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Text overlay */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-teal-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Wellnex Systems
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Experience the fusion of technology and wellness.  
          The energy that powers <span className="text-teal-400 font-semibold">SoulWhispers</span> &{" "}
          <span className="text-violet-400 font-semibold">GymKey</span> flows together here.
        </p>

        <motion.div
          className="mt-10 flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.a
            href="#apps"
            whileHover={{ scale: 1.1 }}
            className="px-8 py-4 bg-gradient-to-r from-teal-500 via-cyan-400 to-violet-400 text-black font-bold rounded-full shadow-lg hover:shadow-cyan-300/40"
          >
            Explore Apps
          </motion.a>
          <motion.a
            href="#join"
            whileHover={{ scale: 1.1 }}
            className="px-8 py-4 border border-teal-400 text-teal-300 rounded-full font-semibold hover:bg-teal-500/10"
          >
            Join Us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FlagshipApps;
  