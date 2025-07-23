import AnimatedGradient from "./components/AnimatedGradient";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import SideProjects from "./components/SideProjects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative overflow-x-hidden min-h-screen font-sans bg-bg">
      <AnimatedGradient />
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <SideProjects />
      <TechStack />
      <Contact />
    </div>
  );
}
