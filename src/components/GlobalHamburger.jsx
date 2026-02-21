import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function GlobalHamburger({ onContactClick = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Hide on scroll down, show on scroll up; keep visible when menu is open
  useEffect(() => {
    const SHOW_NEAR_TOP = 120; // px from top where controls can reveal when scrolling up
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const onScroll = () => {
      const current = window.scrollY;

      // keep visible while menu is open
      if (menuOpen) {
        setVisible(true);
      } else if (current <= 10) {
        // at very top -> show
        setVisible(true);
      } else if (current > lastScrollY) {
        // scrolling down -> hide
        setVisible(false);
      } else {
        // scrolling up -> only reveal when near the top
        if (current <= SHOW_NEAR_TOP) setVisible(true);
        else setVisible(false);
      }

      lastScrollY = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <>
      <button
        aria-label="Open menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className={`fixed top-6 right-6 z-50 p-3 md:p-4 rounded-md bg-transparent transition-transform transition-opacity duration-300 ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        }`}
      >
        <svg
          className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-transform ${menuOpen ? "rotate-90 text-[#2DD4BF]" : "text-white"}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
          <rect x="4" y="16" width="12" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>

      <motion.div
        className={`fixed inset-0 bg-[#161825] transform z-40 flex flex-col items-start justify-start p-12 md:p-16`}
        animate={menuOpen ? { translateY: 0 } : { translateY: "-100%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        {/* stagger container for menu items */}
        <motion.nav
          className="max-w-3xl pl-4 mt-12 md:mt-16 lg:mt-20"
          onClick={(e) => e.stopPropagation()}
          initial="hidden"
          animate={menuOpen ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2,0.8,0.2,1] } } }}>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 hover:text-[#2DD4BF] transition-colors"
            >
              Home
            </Link>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2,0.8,0.2,1] } } }}>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 hover:text-[#2DD4BF] transition-colors"
            >
              About
            </Link>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2,0.8,0.2,1] } } }}>
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="block font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 hover:text-[#2DD4BF] transition-colors"
            >
              My Projects
            </Link>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2,0.8,0.2,1] } } }}>
            <Link
              to="/skills"
              onClick={() => setMenuOpen(false)}
              className="block font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 hover:text-[#2DD4BF] transition-colors"
            >
              Skills
            </Link>
          </motion.div>

        </motion.nav>

        <div className="absolute right-6 md:right-16 bottom-8">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
              onContactClick();
            }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-12 md:py-6 bg-white text-[#08121a] font-extrabold text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 10 }}
            animate={menuOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.2,0.8,0.2,1] }}
          >
            <FaEnvelope className="text-xl transform transition-all duration-300 group-hover:rotate-12" /> 
            Let&apos;s Talk
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}

GlobalHamburger.propTypes = {
  onContactClick: PropTypes.func,
};
