import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

// Import all images
import soulaceImg from "@/assets/images/soulace.png";
import nexmeetImg from "@/assets/images/nexmeet.png";
import blingoImg from "@/assets/images/blingo.png";
import nexbookImg from "@/assets/images/nexbook.png";
import nextalkImg from "@/assets/images/nextalk.png";
import iutWebImg from "@/assets/images/iut_web.png";
import pixelforgeImg from "@/assets/images/pixelforge.png";
import fluppyImg from "@/assets/images/fluppy.png";

const projects = [
  {
    title: "NexMeet",
    description:
      "Designed and developed a video conferencing platform with real-time meeting features, scheduling options, and session recording",
    src: nexmeetImg,
    link: nexmeetImg,
    color: "#8f89ff",
    githubLink: "https://github.com/mdhralif/nexmeet",
    liveLink: "https://alif-nexmeet.vercel.app",
  },
  {
    title: "SoulAce",
    description:
      "Built a mental health platform offering AI-powered journalism, personalized well being tools, real-time mental health assessment and personalized recommendations.",
    src: soulaceImg,
    link: soulaceImg,
    color: "#5196fd",
    githubLink: "https://github.com/mdhralif/Blingo",
    liveLink: "https://soulace.onrender.com/",
  },
  {
    title: "Blingo",
    description:
      "Built an AI-driven text editor that translates Banglish into proper Bangla using Groq API and LLaMA 3.3 with custom prompt engineering.",
    src: blingoImg,
    link: blingoImg,
    color: "#fff",
    githubLink: "https://github.com/mdhralif/Blingo",
    liveLink: "https://blingo.onrender.com/",
  },
  {
    title: "Nexbook",
    description:
      "A prototype of Facebook, Nexbook is a social networking platform that enables users to React, post, and follow in a virtual community",
    src: nexbookImg,
    link: nexbookImg,
    color: "#ed649e",
    githubLink: "https://github.com/mdhralif/Nexbook",
    liveLink: "https://drive.google.com/file/d/10t3EwYO7p8HiJYq49aEG4ZjP7Y4uVac4/view?usp=sharing",
  },
  {
    title: "IUT website Demo Prototyping",
    description:
      "A prototype of the Islamic University of Technology (IUT) website using basic HTML, CSS, and JavaScript",
    src: iutWebImg,
    link: iutWebImg,
    color: "#fff",
    githubLink: "https://github.com/mdhralif",
    liveLink: "https://drive.google.com/file/d/1AD-3NzOo-DUug4-E801I4hanOdGLkNSd/view?usp=sharing",
  },
  {
    title: "NexTalk",
    description:
      "Nextalk is a real-time conversation web app designed to facilitate instant messaging and seamless communication between users.",
    src: nextalkImg,
    link: nextalkImg,
    color: "#fff",
    githubLink: "https://github.com/mdhralif/Realtime_Chat_Application",
    liveLink: "https://drive.google.com/file/d/1GaoliAKVd3J9IDk97kINaRAaMSNF5kUx/view?usp=sharing",
  },

  {
    title: "PixelForge",
    description:
      "Pixelforge is a Minecraft-inspired prototype that simulates a block-based world with crafting and building mechanics,focused on creating a detailed map of the Islamic University of Technology (IUT).",
    src: pixelforgeImg,
    link: pixelforgeImg,
    color: "#fff",
    githubLink: "https://github.com/mdhralif",
    liveLink: "https://drive.google.com/file/d/1SKGoVzAZgH5KBLp6EEodw4J9MyL5iFRx/view?usp=sharing",
  },
  {
    title: "Flappy Bird",
    description:
      "A clone of the classic Flappy Bird game, built using Unity & scripting with C#, featuring responsive controls and dynamic gameplay.",
    src: fluppyImg,
    link: fluppyImg,
    color: "#fff",
    githubLink: "https://github.com/mdhralif/Fluppy_Bird",
    liveLink: "https://drive.google.com/file/d/1UAgQtEz32a5xWLXzvf5yd3ghycyVUYvg/view?usp=sharing",
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
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950 pb-16 md:pb-24">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.02; // Reduced scaling factor
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>

        {/* Swipe from Bottom to Top Indicator */}
        <SwipeIndicator />
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
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

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
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

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
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
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </motion.svg>
                  <span
                    className="text-xs md:text-sm font-medium group-hover:text-white transition-colors duration-300"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </motion.svg>
                  <span
                    className="text-xs md:text-sm font-medium group-hover:text-white transition-colors duration-300"
                    style={{ color }}
                  >
                    Live
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
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
      style={{ opacity }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <div className="flex flex-col items-center gap-3">
        {/* Animated arrows */}
        <div className="flex flex-col items-center space-y-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-6 h-6 flex items-center justify-center"
              animate={{
                y: [0, -8, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/70"
              >
                <polyline points="18,15 12,9 6,15"></polyline>
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Text hint */}
        <motion.div
          className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <p className="text-white/80 text-sm font-medium">
            Swipe up to explore projects
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
