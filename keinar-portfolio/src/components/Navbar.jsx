export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-6 md:gap-10 bg-glass backdrop-blur-md px-8 py-2 rounded-full border border-white/20">
      {[
        { id: "top", label: "Home" },
        { id: "about", label: "About" },
        { id: "featured", label: "Work" },
        { id: "tech", label: "Stack" },
        { id: "contact", label: "Contact" },
      ].map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="text-sm md:text-base font-medium text-white/80 hover:text-white transition"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
