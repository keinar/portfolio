import { motion } from "framer-motion";
import { Workflow, Terminal, Bug, FileSearch, Cpu, Mail, Camera } from "lucide-react";

// Combine new items (from Prompt 1) + old items (from Step 18)
const featured = [
  {
    icon: <Workflow className="w-10 h-10 text-primary" />,
    title: "Agnostic Automation Center (AAC)",
    desc: "A scalable, microservices-based automation platform built from scratch. It serves as a central execution hub for automated tests, orchestrating distributed execution via Docker and RabbitMQ. Features AI-driven root cause analysis (Gemini).",
    url: "https://github.com/keinar/Playwright-Full-Stack-Framework",
    tech: ["React", "Node.js", "RabbitMQ", "Docker", "Stripe", "Playwright"],
  },
  {
    icon: <Terminal className="w-10 h-10 text-primary" />,
    title: "Playwright Full-Stack Framework",
    desc: "A comprehensive, highly efficient end-to-end testing framework utilizing Playwright. It features seamless integration with GitHub Actions for CI/CD pipelines and generates detailed Allure reports for in-depth test insights.",
    url: "https://github.com/keinar/Photographer-Gallery-Automation",
    tech: ["Playwright", "GitHub Actions", "Allure", "TypeScript"],
  },
  {
    icon: <Camera className="w-10 h-10 text-primary" />,
    title: "Photographer Gallery",
    desc: "Secure Full-Stack MERN application for photographers. Includes JWT authentication, image uploads, and client-specific gallery management.",
    url: "https://github.com/keinar/photographer-gallery",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    icon: <Bug className="w-10 h-10 text-primary" />,
    title: "AI Bug Reporter",
    desc: "AI-powered bug reporter automating issue triage & tracking.",
    url: "https://github.com/keinar/AI-Bug-Reporter",
    tech: ["Python", "AI", "Streamlit"],
  },
  {
    icon: <FileSearch className="w-10 h-10 text-primary" />,
    title: "Pytest RCA Report",
    desc: "AI-powered Root cause analysis tool for Pytest with clear failure insights. Available as a PyPI library.",
    url: "https://github.com/keinar/Pytest-RCA-Report",
    tech: ["Python", "Pytest", "AI", "HTML", "CSS", "JS"],
  },
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: "AI STD Generator",
    desc: "Auto-generate test design docs using AI-driven templates.",
    url: "https://github.com/keinar/AI-STD-Generator",
    tech: ["Python", "AI", "Streamlit"],
  },
  {
    icon: <Mail className="w-10 h-10 text-primary" />,
    title: "Allure Emailer",
    desc: "Send Allure test reports via email. Available as a PyPI library.",
    url: "https://github.com/keinar/allure-emailer",
    tech: ["Python", "Allure", "Email"],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="featured" className="py-24 bg-gradient-to-b from-background to-black/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-16 text-center tracking-tight"
        >
          Featured Work
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10 group-hover:ring-primary/50 text-slate-200">
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6 flex-grow text-sm">
                  {p.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                    View Project <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}