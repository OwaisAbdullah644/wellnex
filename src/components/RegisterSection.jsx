// src/components/RegisterSectionFitness.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import anime from "animejs";

const THEME = {
  accent: "#FDC700",
  bg: "#000000",
};

function DraggableWrapper({ children, className = "", style = {} }) {
  const wrapperRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    const handle = handleRef.current;
    if (!el || !handle) return;

    let dragging = false;
    let startX = 0, startY = 0, origX = 0, origY = 0;

    const getTransformXY = () => {
      try {
        const st = getComputedStyle(el);
        const tf = st.transform === "none" ? "" : st.transform;
        const matrix = new DOMMatrixReadOnly(tf);
        return { x: matrix.m41 || 0, y: matrix.m42 || 0 };
      } catch {
        return { x: 0, y: 0 };
      }
    };

    const onPointerDown = (ev) => {
      ev.preventDefault();
      dragging = true;
      handle.setPointerCapture?.(ev.pointerId);
      const orig = getTransformXY();
      startX = ev.clientX;
      startY = ev.clientY;
      origX = orig.x;
      origY = orig.y;
      el.style.zIndex = 9999;
      el.style.transition = "none";
    };

    const onPointerMove = (ev) => {
      if (!dragging) return;
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      el.style.transform = `translate(${origX + dx}px, ${origY + dy}px)`;
    };

    const onPointerUp = (ev) => {
      if (!dragging) return;
      dragging = false;
      try {
        handle.releasePointerCapture?.(ev.pointerId);
      } catch {}
      el.style.zIndex = "";
      el.style.transition = "transform 0.4s ease-out";
      anime({
        targets: el,
        scale: [1.04, 1],
        duration: 600,
        easing: "easeOutElastic(1, .6)",
      });
    };

    handle.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      handle.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`relative ${className}`} style={style}>
      <div
        ref={handleRef}
        className="drag-handle absolute -top-2 -left-2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/80 cursor-grab hover:bg-white/20"
      >
        ≡
      </div>
      {children}
    </div>
  );
}

export default function RegisterSectionFitness() {
  const [preview, setPreview] = useState(null);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [success, setSuccess] = useState(false);

  const onPick = () => {
    document.getElementById("fitness-file")?.click();
  };

  const onFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setPreview(e.target.result);
        setIsHorizontal(img.naturalWidth > img.naturalHeight);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    anime({
      targets: ".submit-button",
      scale: [1, 1.05, 1],
      duration: 600,
      easing: "easeOutElastic(1, .6)",
    });
    setTimeout(() => setSuccess(false), 1500);
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${THEME.bg} 0%, rgba(253, 199, 0, 0.05) 50%, ${THEME.bg} 100%)` 
      }}
    >
      <div
        className="flex rounded-3xl shadow-2xl"
        style={{
          border: "1px solid rgba(255,215,0,0.04)",
          backgroundColor: "#000000b0",
          backdropFilter: "blur(10px)",
          width: 520,
          height: 400,
        }}
      >
        <DraggableWrapper
          className="w-44 flex flex-col items-center justify-center relative border-r border-[#FDC700]/10"
          style={{
            background: "linear-gradient(180deg, rgba(253,199,0,0.08), rgba(0,0,0,0.1))",
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            {preview ? (
              <img
                src={preview}
                alt="User upload"
                className="w-full h-full opacity-90"
                style={{ objectFit: isHorizontal ? "contain" : "cover" }}
              />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80"
                alt="default"
                className="w-full h-full object-cover opacity-40"
              />
            )}
          </div>
          <div className="z-10 flex flex-col items-center justify-center text-center">
            <div
              style={{ color: THEME.accent }}
              className="text-3xl font-extrabold mb-1 drop-shadow"
            >
              Register
            </div>
            <button
              type="button"
              onClick={onPick}
              className="mt-2 px-3 py-1 text-xs rounded-md bg-black/60 border border-[#FDC700]/20 text-[#FDC700] hover:bg-[#FDC700]/10 transition"
            >
              Upload Image
            </button>
          </div>
        </DraggableWrapper>

        <DraggableWrapper className="p-6 flex-1 bg-black/40">
          <h3 style={{ color: THEME.accent }} className="text-xl font-bold mb-3">
            Join the Team
          </h3>
          <form onSubmit={onSubmit} className="space-y-3">
            <input
              placeholder="Full name"
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#FDC700]/10 placeholder-[#aaaaaa] text-white outline-none"
            />
            <input
              placeholder="Email"
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#FDC700]/10 placeholder-[#aaaaaa] text-white outline-none"
            />
            <input
              placeholder="Create password"
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#FDC700]/10 placeholder-[#aaaaaa] text-white outline-none"
            />

            <button
              type="submit"
              className="submit-button w-full py-3 rounded-xl font-bold mt-2"
              style={{ background: THEME.accent, color: "#000" }}
            >
              Start Free
            </button>
          </form>
        </DraggableWrapper>
      </div>

      <input
        id="fitness-file"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onFile(e.target.files?.[0])}
      />

      {success && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [0.8, 1.1, 0.9] }}
          transition={{ duration: 1 }}
        >
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: `${THEME.accent}22`,
              filter: "blur(40px)",
            }}
          />
        </motion.div>
      )}
    </div>
  );
}