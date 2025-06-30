import { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, );

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/experience",
    },
    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/education",
    },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        {/* <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500"> */}
        <div className="p-[0px] md:rounded-full bg-gradient-to-r">
          <nav className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-3 md:px-6 py-3.5">
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <Link to="/" className="text-white font-bold text-3xl">αℓιƒ <b style={{color: 'aqua'}}>.</b></Link>
                            {/* <Link to="/" className="text-gray-300 font-mono text-xs leading-none hover:text-gray-200 transition-colors">
                <pre className="select-none whitespace-pre">
{`█▀▀█ █░░ ▀░█▀▀
█▄▄█ █░░ █ █▀▀
▀░░▀ ▀▀▀ ▀ ▀░░  `}<span className="text-cyan-400">▀</span>
                </pre>
              </Link> */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <FaTimes className="text-3xl transform transition-transform duration-300" />
                ) : (
                  <FaBars className="text-3xl transition-transform duration-300" />
                )}
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-2xl font-medium
                      transition-all duration-300 flex items-center gap-2
                      hover:bg-white/10 
                      ${
                        activeLink === id
                          ? "bg-white/15 text-white"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base ${
                        activeLink === id ? "scale-110" : ""
                      }`}
                    />
                    <span className="inline">{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );

}

