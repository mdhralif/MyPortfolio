import ProfileImage from "@/assets/images/Alif_.png";
import iutLogo from "@/assets/images/iutlogo.jpg";
import KAZlogo from "@/assets/images/KAZLOGO.png";
import { FaFacebook, FaLinkedin, FaGithub, FaFileDownload, FaCalendarAlt, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const iconColor = "#ffffff";

  return (
    <main className="bg-[#161825] text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-white bg-clip-text leading-tight">
            <span style={{ color: '#2DD4BF' }}>About</span> Me
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 items-center">
          {/* Left: image card with offset background and social icons */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute left-0 top-12 w-80 h-96 bg-[#1c1f2e] opacity-95 transform -translate-x-8 lg:-translate-x-16 " />

            <div className="relative z-10 bg-transparent p-6">
              <div className="w-64 h-80 bg-[#0f1223] shadow-2xl overflow-hidden">
                <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover" />
              </div>

              <div className="mt-6 flex gap-4 text-gray-300 relative -left-6 lg:-left-12">
                <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-transparent hover:bg-white/10">
                  <FaFacebook className="text-white w-5 h-5 md:w-6 md:h-6" />
                </a>

                <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-transparent hover:bg-white/10">
                  <FaLinkedin className="text-white w-5 h-5 md:w-6 md:h-6" />
                </a>

                <a href="#" aria-label="GitHub" className="p-2 rounded-full bg-transparent hover:bg-white/10">
                  <FaGithub className="text-white w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: large heading and paragraphs */}
          <div className="py-6">
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              <span style={{ color: '#2DD4BF' }}>Me,</span> MD H R ALIF
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-6 text-justify">
              Need a web developer who actually enjoys building cool stuff? I’m Md Hasibur Rahman Alif, and I specialize in creating fast, modern, and user friendly web applications. From full-stack platforms to AI-powered tools, I love turning ideas into clean, functional products that people enjoy using. If you have a vision, I’m ready to help you bring it to life.
            </p>

            {/* CV Download */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s justify-start">
                              <a
                                href="https://drive.google.com/uc?export=download&id=1vg9YRsNnimnVixbsyHrKLEDVDEvGTgmK"
                                download="MD_H_R_ALIF_CV.pdf"
                                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-none bg-white text-[#18181a] font-extrabold text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                              >
                                <FaFileDownload className="text-xl transform transition-all duration-300 " /> 
                                <span>Download CV</span>
                              </a>
            
                            </div>


            
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          <span>Education</span>
        </h3>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1c1f2e] p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-28 h-28 overflow-hidden bg-white flex items-center justify-center p-1">
              <img 
                src={iutLogo} 
                alt="IUT Logo"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-2">B.Sc. in Software Engineering</h4>
              <p className="text-[#2DD4BF] font-medium mb-2">Islamic University of Technology (IUT)</p>
              
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>August 2022 - Present</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaAward className="w-4 h-4" />
                  <span>CGPA: 3.87</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {["OOP", "Data Structures", "Algorithms", "Web Development", "AI/ML", "Database", "Networking"].map((skill, index) => (
                  <div key={index} className="min-w-[72px] h-10 flex items-center justify-center bg-[#0f1223]  text-white rounded-none text-sm font-medium px-2">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          <span>Experience</span>
        </h3>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1c1f2e] p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-28 h-28 overflow-hidden bg-white flex items-center justify-center p-1">
              <img 
                src={KAZlogo} 
                alt="KAZ Software Logo"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-2">Software Engineer Intern</h4>
              <p className="text-[#2DD4BF] font-medium mb-2">KAZ Software</p>
              
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>Sep 2025 - Jan 2026</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">Developed web apps, designed UI, integrated APIs & done some bug fixing.</p>
              
              <div className="flex gap-3">
                <motion.a
                  href="https://drive.google.com/file/d/1MBG4-G79_cXUBKiTSOmdJGPzV7AtYzWZ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={iconColor}
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
                    style={{ color: iconColor }}
                  >
                    Report
                  </span>
                </motion.a>

                <motion.a
                  href="https://drive.google.com/file/d/1DdeOV4q5CSZsYMinkoK4dUqjOGIP5eZw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={iconColor}
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
                    style={{ color: iconColor }}
                  >
                    Certificate
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
