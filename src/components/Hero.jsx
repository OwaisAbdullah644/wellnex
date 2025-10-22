import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero5 = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for video background
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

      // Text bounce animation
      gsap.to(textRef.current, {
        y: [0, -20, 20, 0],
        duration: 6,
        repeat: -1,
        ease: "easeInOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <video autoPlay loop muted playsInline src="video.mp4" className="absolute inset-0 w-full h-full object-cover hero-video" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div ref={textRef} className="text-[8vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-600 uppercase z-10">
        Rise Beyond Limits
      </div>
    </section>
  );
};

export default Hero5;