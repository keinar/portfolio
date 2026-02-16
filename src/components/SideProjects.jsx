import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const side = [
  {
    title: "Web Development Solutions",
    desc: "Designed and deployed custom business platforms focusing on high performance and SEO. Examples include Nirosta Lotem and Sod Ha'Otiyot.",
    // url: "https://digital-solution.co.il", // Assuming this, or keep generic if no single link
    tech: ["Reaction", "SEO", "Performance", "UI/UX"],
  },
  {
    title: "Timed Access Pass",
    desc: "An official, custom-built WordPress plugin approved and hosted on the WordPress.org directory. Manages time-restricted content access.",
    url: "https://wordpress.org/plugins/timed-access-pass/", // Verify URL if possible, defaulting to likely structure
    tech: ["PHP", "WordPress", "Plugin Dev"],
  },
  {
    title: "Peak Masters",
    desc: "Developed a complete custom Roblox game from the ground up, featuring custom Lua scripting, 3D modeling, and game mechanics.",
    // url: "https://www.roblox.com/games/...", // Placeholder or remove if not available
    tech: ["Lua", "Roblox Studio", "Game Design"],
  },
];

export default function SideProjects() {
  return (
    <section className="py-20 bg-background relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-slate-200 mb-12 text-center">
          Side Projects & Freelance
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {side.map((p, i) => (
            <motion.div
              key={p.title}
              className="flex flex-col bg-zinc-900/30 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-primary/30 hover:bg-zinc-900/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono font-medium px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
