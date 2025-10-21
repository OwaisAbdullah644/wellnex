import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Dumbbell, Users, Calendar, BarChart3 } from "lucide-react";

// eslint-disable-next-line react-refresh/only-export-components
const TiltCard = ({ children, index = 0 }) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useTransform(mx, [-50, 50], [8, -8]);
  const rotateX = useTransform(my, [-50, 50], [-8, 8]);
  const shadowY = useTransform(my, [-50, 50], [8, -8]);

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
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative"
    >
      <div className="relative z-10">{children}</div>
      <motion.div
        style={{ y: shadowY }}
        className="absolute -inset-x-4 -bottom-6 h-8 rounded-xl bg-gradient-to-r from-gray-400/10 to-gray-500/10 blur-2xl z-0"
      />
    </motion.div>
  );
};

const FeaturesA_Interactive = ({ title, items }) => {
  const icons = { Dumbbell, Users, Calendar, BarChart3 };

  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden text-gray-800">
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500"
        >
          {title}
        </motion.h2>

        <div className="lg:flex lg:items-center lg:gap-10">
          <div className="lg:w-1/3 mb-10 lg:mb-0 flex justify-center">
            <div className="w-72 h-72 rounded-2xl p-3 bg-white backdrop-blur-md border border-gray-200 shadow-xl">
              <DotLottieReact
                src="https://lottie.host/2baac37f-2ecd-4749-97a5-37423bc91221/SRKX1QdLlE.lottie"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>

          <div className="lg:flex-1 grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => {
              const Icon = icons[item.icon] || Dumbbell;
              return (
                <TiltCard key={i} index={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ scale: 1.01 }}
                    className="relative p-6 rounded-3xl bg-white/90 border border-gray-200 shadow-md hover:shadow-gray-300 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr from-gray-700 to-gray-500">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-gray-800 font-semibold">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.desc}
                        </p>
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