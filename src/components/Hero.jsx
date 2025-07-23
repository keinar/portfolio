// src/components/Hero.jsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-32 bg-bg text-center space-y-10"
    >

            {/* תמונה אישית */}
      <motion.img
        src={profile}
        alt="Keinar Elkayam"
        className="w-60 h-60 md:w-58 md:h-58 rounded-full ring-4 ring-primary object-cover mt-3"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      />

      {/* כותרת ראשית עם gradient */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-3xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block text-white">I’m</span>{" "}
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary py-2">
          Keinar Elkayam
        </span>
      </motion.h1>

      {/* קו אדום דק תחת הכותרת */}
      <motion.div
        className="w-24 h-1 bg-secondary rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      {/* תת־כותרת מודגשת */}
      <motion.p
        className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed tracking-wide"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <span className="font-semibold uppercase">QA & Automation Engineer</span>{" "}
        optimizing test workflows to <span className="text-primary">eliminate errors</span>{" "}
        and <span className="text-secondary">accelerate releases</span> with
        rock-solid CI/CD.
      </motion.p>

      {/* CTA עם אייקון חץ */}
      <motion.a
        href="#featured"
        className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg font-semibold rounded-full hover:scale-105 transition"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        See My Work <ArrowRight className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
