import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-10"
      >
        <div className="relative w-52 h-52 md:w-64 md:h-64 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full animate-spin-slow opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={profile}
            alt="Keinar Elkayam"
            className="w-full h-full rounded-full object-cover relative z-10 p-1 bg-background"
          />
        </div>
      </motion.div>

      <motion.div
        className="text-center space-y-6 relative z-10 max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Keinar</span>
        </h1>

        <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />

        <h2 className="text-2xl md:text-3xl font-medium text-slate-300">
          QA Automation Engineer & Full-Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Over 5 years of experience specializing in complex <span className="text-primary font-medium">test automation</span>, <span className="text-primary font-medium">infrastructure</span>, and <span className="text-secondary font-medium">full-stack development</span>. Passionate about Python, advanced data structures, and building robust, scalable applications.
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="#featured"
            className="group px-8 py-4 bg-primary hover:bg-primary/90 text-background font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            View Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full backdrop-blur-sm border border-white/10 transition-colors flex items-center justify-center gap-2"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
