import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const GOLD = "#FDC700";

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".bg-video-parallax", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 bg-black text-white perspective-1000"
      style={{ willChange: "transform" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="bg-video-parallax absolute w-full h-full object-cover opacity-20"
          src="https://cdn.pixabay.com/video/2023/01/12/144499-793634482_tiny.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FDC700]/40 rounded-full blur-[2px]"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: ["0%", "-30%"], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 8 + Math.random() * 5, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 mb-20"
      >
        <h2 className="text-6xl font-extrabold text-[#FDC700] tracking-tight">
          Voices of Wellnex
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          Reflections of balance, strength, and transformation — powered by Wellnex.
        </p>
      </motion.div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-8">
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
            transition={{ duration: 0.5 }}
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
      </div>
    </section>
  );
};

export default Testimonials;