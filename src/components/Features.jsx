// FeaturesA_Interactive.jsx
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Dumbbell, Users, Calendar, BarChart3 } from "lucide-react";

const TiltCard = ({ children, index = 0 }) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useTransform(mx, [-50, 50], [12, -12]);
  const rotateX = useTransform(my, [-50, 50], [-12, 12]);
  const shadowY = useTransform(my, [-50, 50], [12, -12]);

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        mx.set(x);
        my.set(y);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      className="relative"
    >
      <div className="relative z-10">{children}</div>
      <motion.div style={{ y: shadowY }} className="absolute -inset-x-4 -bottom-6 h-8 rounded-xl bg-gradient-to-r from-blue-200/10 to-teal-200/10 blur-2xl z-0" />
    </motion.div>
  );
};

const FeaturesA_Interactive = ({ title, items }) => {
  const icons = { Dumbbell, Users, Calendar, BarChart3 };

  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-blue-50 to-teal-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2 initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.7 }} className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-teal-600 to-cyan-500">
          {title}
        </motion.h2>

        <div className="lg:flex lg:items-center lg:gap-10">
          <div className="lg:w-1/3 mb-10 lg:mb-0 flex justify-center">
            <div className="w-72 h-72 rounded-2xl p-3 bg-white/70 backdrop-blur-md shadow-xl">
              <DotLottieReact src="https://lottie.host/2baac37f-2ecd-4749-97a5-37423bc91221/SRKX1QdLlE.lottie" loop autoplay className="w-full h-full" />
            </div>
          </div>

          <div className="lg:flex-1 grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => {
              const Icon = icons[item.icon] || Dumbbell;
              return (
                <TiltCard key={i} index={i}>
                  <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:i*0.06 }} whileHover={{ scale:1.03 }} className="relative p-6 rounded-3xl bg-white/85 border border-white/40 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr from-blue-400 to-teal-400">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-gray-800 font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesA_Interactive;
