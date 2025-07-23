import { motion } from "framer-motion";
import { Bug, FileSearch, Cpu } from "lucide-react";

const featured = [
  {
    icon: <Bug className="w-8 h-8 text-primary" />,
    title: "AI Bug Reporter",
    desc: "AI-powered bug reporter automating issue triage & tracking.",
    url: "https://github.com/keinar/AI-Bug-Reporter",
    tech: ["Python", "AI", "Streamlit"],
  },
  {
    icon: <FileSearch className="w-8 h-8 text-primary" />,
    title: "Pytest RCA Report",
    desc: "AI-powered Root cause analysis tool for Pytest with clear failure insights.",
    url: "https://github.com/keinar/Pytest-RCA-Report",
    tech: ["Python", "Pytest", "AI", "HTML" ,"CSS", "JS"],
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "AI STD Generator",
    desc: "Auto-generate test design docs using AI-driven templates.",
    url: "https://github.com/keinar/AI-STD-Generator",
    tech: ["Python", "AI", "Streamlit"],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="featured" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-12 text-center">
          Featured Work
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              className="group bg-glass backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {p.icon}
                <h3 className="text-xl font-semibold group-hover:text-primary transition">
                  {p.title}
                </h3>
              </div>
              <p className="text-sm opacity-90 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border border-primary text-primary font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-primary font-medium">View on GitHub →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
