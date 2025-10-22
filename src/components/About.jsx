import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const spineRef = useRef(null);
  const frameRef = useRef(null);
  const titleRef = useRef(null);
  const featureRefs = useRef([]);
  const particleRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(spineRef.current, {
        opacity: [0.2, 1, 0.2],
        duration: 3,
        repeat: -1,
      });
      gsap.to(frameRef.current, {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
      gsap.to(".feature-section", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
      gsap.to(titleRef.current, {
        y: [0, -10, 0],
        duration: 4,
        repeat: -1,
        ease: "easeInOut",
      });
      featureRefs.current.forEach((ref, i) => {
        gsap.from(ref, {
          opacity: 0,
          x: 40,
          duration: 0.6,
          delay: i * 0.3,
          scrollTrigger: { trigger: ref, start: "top 90%" },
        });
        ref.addEventListener("mouseenter", () =>
          gsap.to(ref, { scale: 1.02, x: 8, duration: 0.3 })
        );
        ref.addEventListener("mouseleave", () =>
          gsap.to(ref, { scale: 1, x: 0, duration: 0.3 })
        );
      });
      particleRefs.current.forEach((ref, i) => {
        gsap.to(ref, {
          y: ["0%", "-40%"],
          opacity: [0.2, 0.8, 0.2],
          duration: 6 + Math.random() * 4,
          repeat: -1,
          delay: Math.random() * 5,
          ease: "power1.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative flex flex-col md:flex-row min-h-screen bg-black text-white overflow-hidden" style={{ willChange: "transform" }}>
      <div ref={spineRef} className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#FDC700] to-transparent" />
      <div ref={frameRef} className="absolute inset-[3%] rounded-[40px] border border-[#FDC700]/40" style={{ boxShadow: `0 0 40px #FDC70040, inset 0 0 20px #FDC70020` }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#FDC70015,transparent_70%),radial-gradient(circle_at_70%_70%,#FDC70010,transparent_80%)]" />
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#FDC70010] to-transparent relative z-10 feature-section">
        <h1 ref={titleRef} className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#FDC700] to-[#ffc801] bg-clip-text text-transparent tracking-tight">
          Wellnex Core
        </h1>
      </div>
      <div className="flex-1 flex flex-col justify-center px-12 md:px-16 space-y-8 relative z-10 feature-section">
        {["AI-Driven Workouts", "Precision Mind-Body Mapping", "Golden Era Recovery", "Next-Gen Wellness Tracking"].map((t, i) => (
          <div key={i} ref={(el) => (featureRefs.current[i] = el)} className="border-l-4 border-[#FDC700] pl-6">
            <h3 className="text-2xl font-bold mb-2">{t}</h3>
            <p className="text-gray-400 text-sm max-w-md">Experience a fusion of strength, data, and emotional flow.</p>
          </div>
        ))}
      </div>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (particleRefs.current[i] = el)}
          className="absolute w-2 h-2 bg-[#FDC700]/60 rounded-full blur-sm"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, opacity: 0.4 }}
        />
      ))}
    </section>
  );
};

export default About;