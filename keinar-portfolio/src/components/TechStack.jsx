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
} from "react-icons/si";
import { GiAnt } from "react-icons/gi";

const categories = [
  {
    title: "Frontend",
    direction: "left",
    color: "text-green-400",
    items: [
      { icon: <SiTypescript size={22} />, name: "TypeScript" },
      { icon: <SiJavascript size={22} />, name: "JavaScript (ES6+)" },
      { icon: <FaHtml5 size={22} />, name: "HTML5" },
      { icon: <FaCss3 size={22} />, name: "CSS3" },
      { icon: <FaSass size={22} />, name: "SCSS" },
      { icon: <FaReact size={22} />, name: "React" },
    ],
  },
  {
    title: "Backend",
    direction: "right",
    color: "text-cyan-400",
    items: [
      { icon: <FaPython size={22} />, name: "Python" },
      { icon: <FaNodeJs size={22} />, name: "Node.js" },
      { icon: <SiExpress size={22} />, name: "Express.js" },
      { icon: <SiFlask size={22} />, name: "Flask" },
    ],
  },
  {
    title: "Testing",
    direction: "left",
    color: "text-yellow-400",
    items: [
      { icon: <SiSelenium size={22} />, name: "Selenium" },
      { icon: <SiPytest size={22} />, name: "Pytest" },
      { icon: <SiPostman size={22} />, name: "Postman" },
      { icon: <GiAnt size={22} />, name: "Locust" },
      { icon: <FaTheaterMasks size={22} />, name: "Playwright" },
    ],
  },
  {
    title: "DevOps & CI/CD",
    direction: "right",
    color: "text-purple-300",
    items: [
      { icon: <FaDocker size={22} />, name: "Docker" },
      { icon: <SiGithubactions size={22} />, name: "GitHub Actions" },
      { icon: <SiSonarqube size={22} />, name: "SonarQube" },
      { icon: <FaGitAlt size={22} />, name: "Git" },
    ],
  },
  {
    title: "Databases",
    direction: "left",
    color: "text-pink-300",
    items: [
      { icon: <SiMysql size={22} />, name: "MySQL" },
      { icon: <SiMongodb size={22} />, name: "MongoDB" },
      { icon: <FaDatabase size={22} />, name: "SQL Server" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 bg-background text-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-400 mb-16 text-center">
          Tech Stack
        </h2>

        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.title} className="space-y-4">
              <h3
                className={`text-xl font-semibold text-center tracking-wide ${cat.color}`}
              >
                {cat.title}
              </h3>

              <div className="max-w-[700px] mx-auto">
                <Marquee
                  direction={cat.direction}
                  gradient={false}
                  speed={20}
                  pauseOnHover
                >
                  <div className="px-4 sm:px-6">
                    <div className="flex gap-6">
                      {cat.items.map((tech, i) => (
                        <div
                          key={i}
                          className="min-w-[120px] flex justify-center items-center gap-2 bg-zinc-800 px-4 py-2 rounded-xl shadow-md hover:shadow-xl transition-all border border-zinc-700"
                        >
                          <span className={`${cat.color}`}>{tech.icon}</span>
                          <span className="text-sm text-white font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
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
