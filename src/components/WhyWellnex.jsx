import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Bot, Users, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhyWellnex = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.1, once: false });

  const whyPoints = [
    {
      title: "Integrated Wellness",
      desc: "Physical, mental, and emotional harmony in one.",
      icon: <Brain className="w-12 h-12 text-[#FDC700]" />,
      media: "mental.jpg",
    },
    {
      title: "AI-Driven Personalization",
      desc: "Tailored insights for your wellness journey.",
      icon: <Bot className="w-12 h-12 text-[#FDC700]" />,
      media: "aiman.jpg",
    },
    {
      title: "Scalable for Providers",
      desc: "Fits all from small studios to large chains.",
      icon: <Users className="w-12 h-12 text-[#FDC700]" />,
      media: "pro.jpg",
    },
    {
      title: "Built for the Future",
      desc: "Cutting-edge, secure, and mobile-ready.",
      icon: <Rocket className="w-12 h-12 text-[#FDC700]" />,
      media: "fut.jpg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for background image
      gsap.to(".bg-parallax", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-parallax"
        style={{ backgroundImage: `url('why.jpg')`, backgroundAttachment: "fixed" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50 z-0" />
      <div className="relative z-10 text-center mb-16 max-w-2xl mx-auto">
        <motion.h1 
          className="text-5xl lg:text-6xl font-extrabold text-[#FDC700] uppercase tracking-wider"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Wellnex?
        </motion.h1>
        <motion.p 
          className="text-gray-300 text-xl mt-4 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Explore the core strengths driving Wellnex’s wellness revolution.
        </motion.p>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {whyPoints.map((point, i) => (
          <motion.div
            key={i}
            className="bg-black/70 backdrop-blur-sm rounded-xl p-8 border border-[#FDC700]/20 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            style={{ minHeight: "400px" }} // Increased card height for bigger size
          >
            <div className="flex items-center mb-6">
              {point.icon}
              <h3 className="text-xl font-bold text-[#FDC700] ml-3 uppercase tracking-wide">
                {point.title}
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {point.desc}
            </p>
            <div className="relative w-full h-48 overflow-hidden rounded-lg flex items-center justify-center">
              <img
                src={point.media}
                alt={point.title}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyWellnex;