import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

const WhatsComingNext = () => {
  const sectionRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 45, hours: 12, minutes: 30, seconds: 0 });
  const { ref: inViewRef, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  const ref = (node) => {
    sectionRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from(".hero-desc", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from(".feature-card", {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".feature-grid", start: "top 75%" },
      });
      gsap.from(".cta-button", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".cta-section", start: "top 80%" },
      });
      gsap.to(".bg-parallax-coming", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      const cards = document.querySelectorAll(".feature-card");
      cards.forEach((card) => {
        const hoverTl = gsap.to(card, {
          scale: 1.03,
          duration: 0.3,
          paused: true,
        });
        card.addEventListener("mouseenter", () => hoverTl.play());
        card.addEventListener("mouseleave", () => hoverTl.reverse());
      });
      const btn = document.querySelector(".cta-button");
      const ctaHover = gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        paused: true,
      });
      btn?.addEventListener("mouseenter", () => ctaHover.play());
      btn?.addEventListener("mouseleave", () => ctaHover.reverse());
    }, sectionRef);

    return () => ctx.revert();
  }, [inView]);

  const features = [
    {
      title: "Mindful Wearables",
      desc: "Track your peace with smart devices.",
      media: "mindful.mp4",
    },
    {
      title: "Balanced Nutrition",
      desc: "Personalized plans for inner harmony.",
      media: "balanced.mp4",
    },
    {
      title: "Community Wellness",
      desc: "Connect and grow together.",
      media: "community.mp4",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-16"
      style={{ willChange: "transform" }}
    >
      <div 
        className="bg-parallax-coming absolute inset-0"
        style={{
          backgroundImage: `url('yoga.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
        <h1 className="hero-title text-5xl lg:text-6xl font-bold text-[#FDC700] uppercase tracking-wide leading-tight">
          What’s Next in Wellness
        </h1>
        <p className="hero-desc text-gray-300 text-lg lg:text-xl mt-4 leading-relaxed">
          Elevate your journey with Wellnex—where mindfulness meets modern technology.
        </p>
      </div>
      <div className="feature-grid max-w-3xl mx-auto grid grid-cols-1 gap-8 z-10 mb-16">
        {features.map((feature, i) => (
          <div
            key={i}
            className="feature-card bg-black/80 rounded-xl p-6 text-center border border-[#FDC700]/20 overflow-hidden"
          >
            <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden mb-4">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src={feature.media}
              >
                <source src={feature.media} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <h3 className="text-xl font-semibold text-[#FDC700] uppercase tracking-wide">
              {feature.title}
            </h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="cta-section text-center z-10">
        <button className="cta-button px-10 py-3 bg-[#FDC700] text-black rounded-lg font-medium text-lg uppercase tracking-wide shadow-md">
          Join the Journey
        </button>
      </div>
    </section>
  );
};

export default WhatsComingNext;