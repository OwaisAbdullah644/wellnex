import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero5 = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-video", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
      gsap.to(textRef.current, {
        y: [0, -20, 20, 0],
        duration: 6,
        repeat: -1,
        ease: "easeInOut",
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, [])

  return (
    <section ref={sectionRef} className="relative min-h-[60vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <video autoPlay loop muted playsInline src="video.mp4" className="absolute inset-0 w-full h-full object-cover hero-video" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-600 uppercase z-10 text-center px-4"
      >
        Rise Beyond Limits
      </motion.div>
    </section>
  );
};

export default Hero5;