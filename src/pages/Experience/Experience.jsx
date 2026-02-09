import KAZLogo from "../../assets/images/kazLOGO.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  color = "#06b6d4",
  index = 0,
  progress,
  range,
  targetScale,
  reportLink,
  certificateLink,
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-start justify-center sticky top-16 md:top-20"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-2vh + ${index * 12}px)`,
        }}
        className="relative h-auto w-[90%] md:w-[85%] lg:w-[70%] origin-top"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design - similar to project card */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Icon section - similar to image section in project card */}
          <div className="w-full md:w-[40%] h-[300px] md:h-[450px] lg:h-[500px] relative overflow-hidden flex items-center justify-center">
            {/* Image fills width; height auto so the panel fits the image */}
            <motion.div
              className="relative z-10 w-full h-full flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {typeof Icon === "string" ? (
                <img
                  src={Icon}
                  alt={title}
                  className="block w-full h-full object-cover"
                />
              ) : (
                <Icon className="w-24 h-24 md:w-28 md:h-28 text-white relative z-10 drop-shadow-2xl" />
              )}
            </motion.div>
          </div>

          {/* Content section - 60% on desktop */}
          <div className="w-full md:w-[60%] p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-zinc-900/50">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <div className="flex items-center justify-between mb-2 md:mb-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  {title}
                </h3>

                {/* Mobile action icons */}
                <div className="flex items-center gap-3 md:hidden">
                  <motion.a
                    href={reportLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/30"
                    whileHover={{ y: -2, scale: 1.05, transition: { type: "spring", stiffness: 400 } }}
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
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <path d="M14 2v6h6"></path>
                    </motion.svg>
                  </motion.a>

                  <motion.a
                    href={certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/30"
                    whileHover={{ y: -2, scale: 1.05, transition: { type: "spring", stiffness: 400 } }}
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
                      <circle cx="12" cy="8" r="4"></circle>
                      <path d="M8 22v-4l4-2 4 2v4"></path>
                    </motion.svg>
                  </motion.a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 md:mb-6">
                <span className="text-base md:text-lg font-semibold text-orange-400">
                  {company}
                </span>
                <span className="text-xs md:text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-none text-gray-300 w-fit">
                  {period}
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>

              <div className="mt-4 md:mt-auto pt-4">
                <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

                <div className="hidden md:flex items-center gap-4">
                  <motion.a
                    href={reportLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -3, scale: 1.05, transition: { type: "spring", stiffness: 400 } }}
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
                    <span className="text-xs md:text-sm font-medium group-hover:text-white transition-colors duration-300" style={{ color }}>
                      View Report
                    </span>
                  </motion.a>

                  <motion.a
                    href={certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -3, scale: 1.05, transition: { type: "spring", stiffness: 400 } }}
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
                      <circle cx="12" cy="8" r="4"></circle>
                      <path d="M8 22v-4l4-2 4 2v4"></path>
                    </motion.svg>
                    <span className="text-xs md:text-sm font-medium group-hover:text-white transition-colors duration-300" style={{ color }}>
                      Certificate
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]).isRequired,
  color: PropTypes.string,
  index: PropTypes.number,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  reportLink: PropTypes.string.isRequired,
  certificateLink: PropTypes.string.isRequired,
};

const ExperienceSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const experiences = [
    {
      icon: KAZLogo,
      title: "Software Engineer Intern",
      company: "KAZ Software Ltd.",
      period: "29 Sep 2025 - 30 Jan 2026",
      color: "#06b6d4",
      description: "Worked on production-level web applications, contributing to UI development, API integration, and bug fixing while collaborating closely with cross-functional teams in a real-world software engineering environment.",
      reportLink: "#",
      certificateLink: "#",
    },

  ];

  return (
    <>
      <main className="bg-[#161925]" ref={container}>
        {/* Section Title */}
        <div className="flex flex-col items-center space-y-6 pt-28 md:pt-8 pb-16">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-white bg-clip-text text-center leading-tight">
            <span style={{ color: '#2DD4BF' }}>Where</span> I’ve Worked
          </h2>
        </div>

        {/* Stacking Experience Cards */}
        <section className="text-white w-full bg-[#161925] pb-12 md:pb-20">
          {experiences.map((exp, i) => {
            const targetScale = 1;
            return (
              <ExperienceCard
                key={i}
                {...exp}
                index={i}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};

export default ExperienceSection;
