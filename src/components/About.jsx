// src/components/About.jsx
import { motion } from "framer-motion";
import { CheckCircle, Terminal, Code, Cpu } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-zinc-900/50 py-24 px-6 md:px-16 lg:px-32 text-white border-y border-white/5"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text & content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 bg-primary/10 rounded-lg text-primary">
              <Terminal size={24} />
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              About Me
            </h2>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
            <p>
              I am a <span className="text-white font-semibold">QA Automation Engineer & Full-Stack Developer</span> with over 5 years of experience building robust, scalable solutions.
            </p>
            <p>
              My expertise lies in architecting complex test automation frameworks, optimizing CI/CD pipelines, and developing full-stack applications that solve real-world problems. I thrive at the intersection of quality assurance and software development, using tools like Python, Playwright, and React to deliver excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {[
              "Automated End-to-End Testing",
              "CI/CD Pipeline Optimization",
              "Full-Stack Web Development",
              "Performance & Load Testing",
              "Cloud Infrastructure (Docker/AWS)",
              "Test Strategy & Planning",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-slate-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Visual Element / Stats */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10" />

          <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                <Code size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Engineering Mindset</h3>
                <p className="text-slate-400 text-sm">
                  Focus on clean code, maintainability, and scalable architecture in both tests and applications.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                <Cpu size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Automation First</h3>
                <p className="text-slate-400 text-sm">
                  Believer in automating repetitive tasks to enable teams to focus on high-value innovation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
