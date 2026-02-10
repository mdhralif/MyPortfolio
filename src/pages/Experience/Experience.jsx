import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import KAZlogo from "../../assets/images/KAZLOGO.png";
const ExperienceCard = [
  {
    title: "Software Engineer Intern",
    company: "KAZ Software",
    period: "29 Sep 2025 - 30 Jan 2026",
    description:"Worked on production web apps, focusing on UI, APIs, and issue resolution with cross-functional teams.",
    src:KAZlogo ,
    link: KAZlogo,
    color: "#f59e0b",
    reportLink: "https://drive.google.com/file/d/1MBG4-G79_cXUBKiTSOmdJGPzV7AtYzWZ/view?usp=sharing",
    certificateLink: "https://drive.google.com/file/d/1DdeOV4q5CSZsYMinkoK4dUqjOGIP5eZw/view?usp=sharing",
  },

];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-[#161925]" ref={container}>
        <section className="text-white w-full bg-[#161925] pb-16 md:pb-40 pt-40 md:pt-8">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-white bg-clip-text text-center leading-tight">
           <span style={{ color: '#2DD4BF' }}>Where</span> I’ve Worked
           </h2>  
     
          {ExperienceCard.map((project, i) => {
            const targetScale = 1; // All cards same size
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                company={project.company}
                period={project.period}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                reportLink={project.reportLink}
                certificateLink={project.certificateLink}
              />
            );
          })}
        </section>
        <SwipeIndicator />
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  company,
  period,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  reportLink,
  certificateLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container pt-16 md:pt-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <div className="flex items-center justify-between mb-2 md:mb-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  {title}
                </h2>
                {/* Mobile Icons - show on mobile only */}
                <div className="flex items-center gap-3 md:hidden">
                  {/* GitHub Link */}
                  <motion.a
                    href={reportLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/30"
                    whileHover={{ 
                      y: -2,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-white transition-colors duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <path d="M14 2v6h6"></path>
                    </motion.svg>
                  </motion.a>

                  {/* Live Link */}
                  <motion.a
                    href={certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/30"
                    whileHover={{ 
                      y: -2,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-white transition-colors duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <rect x="3" y="2" width="14" height="18" rx="2"></rect>
                      <line x1="7" y1="7" x2="13" y2="7"></line>
                      <line x1="7" y1="11" x2="13" y2="11"></line>
                      <circle cx="12" cy="16" r="2"></circle>
                      <path d="M10 18l-1 3"></path>
                      <path d="M14 18l1 3"></path>
                    </motion.svg>
                  </motion.a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 md:mb-6">
                <span className="text-base md:text-lg font-semibold text-orange-400">
                  {company}
                </span>
                <span></span>
                <span className="text-xs md:text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-none text-gray-300 w-fit">
                  {period}
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="hidden md:flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={reportLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  whileHover={{ 
                    y: -3,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white transition-colors duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <path d="M14 2v6h6"></path>
                  </motion.svg>
                  <span
                    className="text-xs md:text-sm font-medium group-hover:text-white transition-colors duration-300"
                    style={{ color }}
                  >
                    Report
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  whileHover={{ 
                    y: -3,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <rect x="2" y="2" width="16" height="20" rx="2"></rect>
                    <line x1="6" y1="8" x2="12" y2="8"></line>
                    <line x1="6" y1="12" x2="12" y2="12"></line>
                    <circle cx="11" cy="18" r="2"></circle>
                    <path d="M9 20l-1 3"></path>
                    <path d="M13 20l1 3"></path>
                  </motion.svg>
                  <span
                    className="text-xs md:text-sm font-medium group-hover:text-white transition-colors duration-300"
                    style={{ color }}
                  >
                    Certificate
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Swipe Indicator Component
function SwipeIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
      style={{ opacity }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      {/* Simple animated arrows */}
      <div className="flex flex-col items-center space-y-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-8 h-8 flex items-center justify-center"
            animate={{
              y: [0, -12, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/80"
            >
              <polyline points="18,15 12,9 6,15"></polyline>
            </svg>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  reportLink: PropTypes.string.isRequired,
  certificateLink: PropTypes.string.isRequired,
};

