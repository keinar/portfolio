import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "top", label: "Home" },
    { id: "featured", label: "Work" },
    { id: "tech", label: "Stack" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 flex justify-center z-50">
        {/* Desktop Navbar */}
        <motion.nav
          className={`hidden md:flex pointer-events-auto px-8 py-4 rounded-full border transition-all duration-500 ${scrolled
              ? "bg-zinc-900/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50"
              : "bg-transparent border-transparent"
            }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <ul className="flex items-center gap-12">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-xl font-medium text-slate-400 hover:text-white transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden absolute right-6 pointer-events-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-full text-white shadow-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl flex flex-col items-center justify-center pointer-events-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-8 text-center bg-zinc-950/50">
              {links.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-slate-300 hover:text-white hover:text-primary transition-colors block py-2"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
