import Marquee from "react-fast-marquee";
import {
  FaPython,
  FaReact,
  FaDocker,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3,
  FaSass,
  FaTheaterMasks,
  FaRobot,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGithubactions,
  SiPostman,
  SiSelenium,
  SiMongodb,
  SiMysql,
  SiSonarqube,
  SiJavascript,
  SiExpress,
  SiFlask,
  SiPytest,
  SiCypress,
  SiRabbitmq,
  SiOpenai,
  SiFramer,
  SiTailwindcss,
} from "react-icons/si";
import { GiAnt } from "react-icons/gi";
import { VscCopilot } from "react-icons/vsc";

const categories = [
  {
    title: "Frontend",
    direction: "left",
    color: "text-green-400",
    items: [
      { icon: <SiTypescript size={24} />, name: "TypeScript" },
      { icon: <SiJavascript size={24} />, name: "JavaScript" },
      { icon: <FaHtml5 size={24} />, name: "HTML5" },
      { icon: <FaCss3 size={24} />, name: "CSS3" },
      { icon: <FaSass size={24} />, name: "SCSS" },
      { icon: <FaReact size={24} />, name: "React" },
      { icon: <SiTailwindcss size={24} />, name: "Tailwind" },
      { icon: <SiFramer size={24} />, name: "Framer Motion" },
    ],
  },
  {
    title: "Backend",
    direction: "right",
    color: "text-cyan-400",
    items: [
      { icon: <FaPython size={24} />, name: "Python" },
      { icon: <FaNodeJs size={24} />, name: "Node.js" },
      { icon: <SiExpress size={24} />, name: "Express.js" },
      { icon: <SiFlask size={24} />, name: "Flask" },
    ],
  },
  {
    title: "Testing & DevOps",
    direction: "left",
    color: "text-yellow-400",
    items: [
      { icon: <SiSelenium size={24} />, name: "Selenium" },
      { icon: <SiPytest size={24} />, name: "Pytest" },
      { icon: <SiPostman size={24} />, name: "Postman" },
      { icon: <GiAnt size={24} />, name: "Locust" },
      { icon: <FaTheaterMasks size={24} />, name: "Playwright" },
      { icon: <FaDocker size={24} />, name: "Docker" },
      { icon: <SiGithubactions size={24} />, name: "GitHub Actions" },
      { icon: <SiSonarqube size={24} />, name: "SonarQube" },
      { icon: <SiRabbitmq size={24} />, name: "RabbitMQ" },
      { icon: <FaGitAlt size={24} />, name: "Git" },
    ],
  },
  {
    title: "Databases",
    direction: "right",
    color: "text-pink-300",
    items: [
      { icon: <SiMysql size={24} />, name: "MySQL" },
      { icon: <SiMongodb size={24} />, name: "MongoDB" },
      { icon: <FaDatabase size={24} />, name: "SQL Server" },
    ],
  },
  {
    title: "AI & Tools",
    direction: "left",
    color: "text-purple-400",
    items: [
      { icon: <SiOpenai size={24} />, name: "Claude Code" }, // Using OpenAI icon as placeholder or find strict match if available
      { icon: <FaRobot size={24} />, name: "Antigravity" },
      { icon: <VscCopilot size={24} />, name: "Copilot" },
      // Added based on user request: "Claude Code", "Antigravity", "copilot"
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-24 bg-background text-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-16 text-center tracking-tight">
          Tech Stack
        </h2>

        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <div key={cat.title} className="space-y-6">
              <h3
                className={`text-xl font-semibold text-center tracking-wide ${cat.color} uppercase opacity-80`}
              >
                {cat.title}
              </h3>

              <div className="max-w-full mx-auto overflow-hidden">
                <Marquee
                  direction={cat.direction}
                  gradient={true}
                  gradientColor={[9, 9, 11]} // Matches zinc-950 background
                  speed={30 + idx * 5}
                  pauseOnHover
                  className="py-4 overflow-y-visible hide-scrollbar"
                >
                  <div className="px-4 flex gap-6 sm:gap-10 pr-6 sm:pr-10">
                    {cat.items.map((tech, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center gap-3 min-w-[100px] h-[100px] bg-zinc-900/50 border border-white/5 rounded-2xl shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300 group cursor-default backdrop-blur-sm"
                      >
                        <span className={`${cat.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-md`}>
                          {tech.icon}
                        </span>
                        <span className="text-xs text-slate-300 font-medium group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}