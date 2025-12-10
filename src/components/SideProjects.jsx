import { motion } from "framer-motion";

const side = [
    {
    title: "Nearby Shelter",
    desc: "Geolocation-based web app that guides you to the nearest shelters with interactive maps and real-time updates.",
    url: "https://github.com/keinar/NearbyShelter",
    tech: ["TypeScript", "React Native", "Node.js", "Google Maps API"],
  },
    {
    title: "Lancerr",
    desc: "Full-stack Fiverr-clone with vendor profiles, gig listings etc.",
    url: "https://github.com/keinar/Lancerr",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
  },
];

export default function SideProjects() {
  return (
    <section className="py-16 bg-bg/80">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">
          Other Creations
        </h3>
        <div className="flex flex-col md:flex-row gap-6 hide-scrollbar overflow-auto">
        {side.map((p, i) => (
          <motion.div
            key={p.title}
            className="flex-1 bg-glass backdrop-blur-lg border border-white/20 p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-primary mb-2">
              {p.title}
            </h4>
            <p className="text-sm opacity-90 mb-3">{p.desc}</p>
            <div className="flex gap-2 flex-wrap mb-3">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-1 rounded-full border border-primary text-primary font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
            {/* GitHub link */}
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm underline mr-4"
            >
              View on GitHub →
            </a>
            <br />
            {/* Live link, only if exists */}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 text-sm underline font-semibold"
              >
                View Live →
              </a>
            )}
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
