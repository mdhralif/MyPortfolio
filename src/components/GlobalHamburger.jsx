import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function GlobalHamburger({ onContactClick = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <button
        aria-label="Open menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="fixed top-6 right-6 z-50 p-3 md:p-4 rounded-md bg-transparent hover:bg-white/5 transition-colors"
      >
        <svg
          className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white transition-transform ${menuOpen ? "rotate-90" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
          <rect x="4" y="16" width="12" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 bg-[#161825] transform transition-transform duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } z-40 flex flex-col items-start justify-start p-12 md:p-16`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <nav className="max-w-3xl pl-4" onClick={(e) => e.stopPropagation()}>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 hover:text-cyan-400 transition-colors"
          >
            Profile
          </Link>

          <Link
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className="block font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 hover:text-cyan-400 transition-colors"
          >
            Projects
          </Link>

          <Link
            to="/skills"
            onClick={() => setMenuOpen(false)}
            className="block font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 hover:text-cyan-400 transition-colors"
          >
            Skills
          </Link>
          <Link
            to="/achievement"
            onClick={() => setMenuOpen(false)}
            className="block font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 hover:text-cyan-400 transition-colors"
          >
            Achievement
          </Link>
          <Link
            to="/education"
            onClick={() => setMenuOpen(false)}
            className="block font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 hover:text-cyan-400 transition-colors"
          >
            Education
          </Link>

        </nav>

        <div className="absolute right-16 bottom-8">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
              onContactClick();
            }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#08121a] font-extrabold text-lg shadow-lg transition-transform hover:scale-105"
          >
            Reach out
          </button>
        </div>
      </div>
    </>
  );
}

GlobalHamburger.propTypes = {
  onContactClick: PropTypes.func,
};
