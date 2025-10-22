import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Bot, Users, Rocket } from "lucide-react";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

const WhyWellnex = () => {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const ref = (node) => {
    sectionRef.current = node;
    inViewRef(node);
  };

  const whyPoints = [
    {
      title: "Integrated Wellness",
      desc: "Physical, mental, and emotional harmony in one.",
      icon: <Brain className="w-12 h-12 text-[#FDC700]" />,
      media: "mindful.mp4",
    },
    {
      title: "AI-Driven Personalization",
      desc: "Tailored insights for your wellness journey.",
      icon: <Bot className="w-12 h-12 text-[#FDC700]" />,
      media: "balanced.mp4",
    },
    {
      title: "Scalable for Providers",
      desc: "Fits all from small studios to large chains.",
      icon: <Users className="w-12 h-12 text-[#FDC700]" />,
      media: "community.mp4",
    },
    {
      title: "Built for the Future",
      desc: "Cutting-edge, secure, and mobile-ready.",
      icon: <Rocket className="w-12 h-12 text-[#FDC700]" />,
      media: "future.mp4",
    },
  ];

  useEffect(() => {
    if (inView) {
      videoRefs.current.forEach((video) => {
        if (video) video.play();
      });
    } else {
      videoRefs.current.forEach((video) => {
        if (video) video.pause();
      });
    }
  }, [inView]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from(".hero-desc", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.to(".bg-parallax", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      const cards = gsap.utils.toArray(".point-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          x: 200,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".points-container",
            start: "top 70%",
          },
        });
      });
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () =>
          gsap.to(card, { scale: 1.05, duration: 0.3 })
        );
        card.addEventListener("mouseleave", () =>
          gsap.to(card, { scale: 1, duration: 0.3 })
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-20"
      style={{ perspective: "1000px", willChange: "transform" }}
    >
      <div
        className="bg-parallax absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url('yoga.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50 z-0" />
      <div className="relative z-10 text-center mb-16 max-w-2xl mx-auto">
        <h1 className="hero-title text-5xl lg:text-6xl font-extrabold text-[#FDC700] uppercase tracking-wider">
          Why Choose Wellnex?
        </h1>
        <p className="hero-desc text-gray-300 text-xl mt-4 leading-relaxed">
          Explore the core strengths driving Wellnex’s wellness revolution.
        </p>
      </div>
      <div className="points-container relative z-10 flex justify-center items-center h-[60vh]">
        {whyPoints.map((point, i) => (
          <div
            key={i}
            className="point-card absolute bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-[#FDC700]/20 shadow-lg"
            style={{
              transform: `rotate(${i * 90}deg) translateY(250px) rotate(${-i * 90}deg)`,
              width: "300px",
            }}
          >
            <div className="flex items-center mb-4">
              {point.icon}
              <h3 className="text-xl font-bold text-[#FDC700] ml-3 uppercase tracking-wide">
                {point.title}
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {point.desc}
            </p>
            <div className="relative w-full h-32 overflow-hidden rounded-lg">
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
                src={point.media}
              >
                <source src={point.media} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWellnex;