// src/components/About.jsx
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-dark/90 py-24 px-6 md:px-16 lg:px-32 text-white"
    >
      {/* רקע קל של וקטור או בלור */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-dark/80 pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        {/* Left: Text & bullets */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-accent flex items-center gap-2">
            <Star className="w-8 h-8 animate-pulse" />
            About Me
          </h2>
          <p className="text-lg leading-relaxed max-w-md">
            <span className="font-semibold text-primary">I’m Keinar Elkayam</span>, a QA & Automation Engineer passionate about building  
            <span className="font-semibold"> scalable test frameworks</span>  
            and <span className="font-semibold">rock-solid CI/CD pipelines</span>.
          </p>
          <ul className="space-y-4">
            {[
              "Ship faster with automated end-to-end test coverage",
              "Catch & prevent critical bugs before production",
              "Streamline releases via GitHub Actions & Jenkins",
              "Earn industry recognition (2× National ITCB runner-up)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <span className="text-base opacity-90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Quote card */}
        <motion.blockquote
          className="bg-card/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg flex flex-col justify-center italic text-secondary"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.8 } },
          }}
        >
          “I turn complex testing challenges into elegant automation solutions  
          that delight both users and developers.”
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
