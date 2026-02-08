import KAZLogo from "../../assets/images/KAZ.png";
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
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
          
          {/* Icon section - similar to image section in project card */}
          <div className="w-full md:w-[40%] h-[250px] md:h-[350px] relative overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }}
              />
            </div>

            {/* Icon with glow effect */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.15, rotate: 8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div 
                  className="absolute inset-0 blur-3xl opacity-60"
                  style={{ backgroundColor: color }}
                />
                {typeof Icon === "string" ? (
                  <img
                    src={Icon}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover relative z-0"
                  />
                ) : (
                  <Icon className="w-24 h-24 md:w-28 md:h-28 text-white relative z-10 drop-shadow-2xl" />
                )}
            </motion.div>

            {/* Colored overlay */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0.1 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Experience number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Experience {index + 1}
            </div>
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

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
                {title}
              </h3>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 md:mb-6">
                <span className="text-base md:text-lg font-semibold text-cyan-400">
                  {company}
                </span>
                <span className="text-xs md:text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full text-gray-300 w-fit">
                  {period}
                </span>
              </div>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Bottom decorative line */}
            <div className="mt-6 md:mt-8 flex items-center gap-2">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
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
      description: "Contributed as a Student Collaborator and Web Contributor by developing and maintaining the lab’s official website, including a comprehensive student and alumni directory, improving design and layouts",
    },

  ];

  return (
    <>
      <main className="bg-[#161925]" ref={container}>
        {/* Section Title */}
        <div className="flex flex-col items-center space-y-6 pt-28 md:pt-32 pb-12">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-white bg-clip-text text-center leading-tight">
            Where I’ve Worked
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
