import { useEffect, useState } from "react";
import { FiMenu, FiX, FiActivity } from "react-icons/fi";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#transformations", label: "Transformations" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shrinks header when scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-extrabold text-lg tracking-tight"
        >
          <FiActivity className="text-[#ff3b30]" aria-hidden />
          <span>GYM TRAINER</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-white/80 hover:text-white text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e]"
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary text-sm">
            Book Free Session
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded hover:bg-white/10 active:scale-95 transition"
          onClick={() => setOpen(true)}
        >
          <FiMenu size={18} /> {/* Smaller icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/85 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="p-4">
            <button
              aria-label="Close menu"
              className="p-2 rounded hover:bg-white/10 active:scale-95 transition"
              onClick={() => setOpen(false)}
            >
              <FiX size={18} /> {/* Smaller X icon */}
            </button>

            <ul className="mt-6 space-y-4">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg py-2 text-white/90 hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full"
                >
                  Book Free Session
                </a>
              </li>

            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
