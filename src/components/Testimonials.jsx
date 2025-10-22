// Testimonials_CinematicParallax.jsx
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";

const GOLD = "#FDC700";

const Testimonials_CinematicParallax = () => {
  const testimonials = [
    {
      quote: "“SoulWhispers helped me reconnect with myself — balance, energy, clarity.”",
      author: "Ayesha R.",
      role: "Karachi",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=60",
    },
    {
      quote: "“GymKey is revolutionizing fitness — my clients stay engaged like never before.”",
      author: "Imran M.",
      role: "Gym Owner, Lahore",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=200&q=60",
    },
    {
      quote: "“Wellnex guided my recovery — it’s not just tech, it’s evolution.”",
      author: "Sana T.",
      role: "Dubai",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
    },
    {
      quote: "“This is the future of fitness and mind-body synergy.”",
      author: "Ahmed K.",
      role: "Islamabad",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=60",
    },
  ];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const xPos = e.clientX - innerWidth / 2;
    const yPos = e.clientY - innerHeight / 2;
    x.set(xPos / 10);
    y.set(yPos / 10);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-32 bg-black text-white perspective-1000"
    >
      {/* Background video or holographic overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-20"
          src="https://cdn.pixabay.com/video/2023/01/12/144499-793634482_tiny.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Floating gold particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FDC700]/40 rounded-full blur-[2px]"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: ["0%", "-30%"], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 8 + Math.random() * 5, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center relative z-10 mb-20"
      >
        <h2 className="text-6xl font-extrabold text-[#FDC700] tracking-tight">
          Voices of Wellnex
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          Reflections of balance, strength, and transformation — powered by Wellnex.
        </p>
      </motion.div>

      {/* Parallax cards */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-8"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 40px ${GOLD}40`,
              borderColor: `${GOLD}`,
            }}
            transition={{ duration: 0.6 }}
            className="relative p-10 bg-zinc-900/40 border border-zinc-800 rounded-3xl backdrop-blur-lg shadow-lg hover:shadow-[#FDC700]/20"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl border border-[#FDC700]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-lg italic text-gray-200 mb-8 z-10 relative leading-relaxed">
              {t.quote}
            </p>
            <div className="flex items-center">
              <img
                src={t.image}
                alt={t.author}
                className="w-14 h-14 rounded-full mr-4 border border-[#FDC700]/60 shadow-[0_0_15px_rgba(253,199,0,0.4)] object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-[#FDC700]">{t.author}</h4>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials_CinematicParallax;
