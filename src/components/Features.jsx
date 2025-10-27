import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Dumbbell, Users, Calendar, BarChart3 } from "lucide-react";
import TiltCard from "./TiltCard";
import { featureItems } from "./featuresData";

const FeaturesA_Interactive = ({ title }) => {
  const icons = { Dumbbell, Users, Calendar, BarChart3 };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, [])

  return (
    <section className="relative py-12 sm:py-20 md:py-28 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden text-gray-800">
      <div className="relative max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500"
        >
          {title}
        </motion.h2>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 xl:gap-10">
          <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
            <div className="w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-2xl p-2 sm:p-3 bg-white backdrop-blur-md border border-gray-200 shadow-xl">
              <DotLottieReact
                src="https://lottie.host/2baac37f-2ecd-4749-97a5-37423bc91221/SRKX1QdLlE.lottie"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {featureItems.map((item, i) => {
              const Icon = icons[item.icon] || Dumbbell;
              return (
                <TiltCard key={i} index={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ scale: 1.01 }}
                    className="relative p-4 sm:p-6 rounded-3xl bg-white/90 border border-gray-200 shadow-md hover:shadow-gray-300 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr from-gray-700 to-gray-500">
                        <Icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
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