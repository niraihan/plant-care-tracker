import React from "react";
import useTitle from "../hook/useTitle";
import { motion } from "framer-motion";

const AboutPage = () => {
  useTitle("PlantCare | About Us");

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Page Heading with animation */}
      <motion.h1
        className="text-4xl font-bold text-green-600 mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Us
      </motion.h1>

      {/* Intro Paragraph */}
      <motion.p
        className="text-lg text-gray-700 leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="font-semibold text-green-700">PlantCare Tracker</span>! 🌱 <br />
        We are passionate about helping plant lovers manage and take care of their green friends efficiently.
        Our goal is to provide a smart, simple, and clean way to organize your plant collection, track watering schedules,
        and grow your indoor jungle with confidence.
      </motion.p>

      {/* Features Section with stagger animation */}
      <motion.div
        className="mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-2xl font-semibold text-green-500 mb-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          What we offer:
        </motion.h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {[
            "Track your plant care routine",
            "Log watering, sunlight, and repotting dates",
            "Maintain your collection digitally",
            "Get reminders and plant care tips",
          ].map((feature, i) => (
            <motion.li
              key={i}
              className="text-lg"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default AboutPage;
