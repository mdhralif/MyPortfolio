import ProfileImage from "@/assets/images/Alif_.png";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import { FaFacebook, FaLinkedin, FaGithub,FaFileDownload } from "react-icons/fa";

export default function About() {
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
            <div className="absolute left-0 top-12 w-80 h-96 bg-[#1c1f2e] opacity-95 transform -translate-x-8 lg:-translate-x-16 border border-white/5" />

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
                              <button
                                onClick={() => window.open("https://drive.google.com/file/d/1vg9YRsNnimnVixbsyHrKLEDVDEvGTgmK/view?usp=sharing", "_blank")}
                                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-none bg-white text-[#18181a] font-extrabold text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                              >
                                <FaFileDownload className="text-xl transform transition-all duration-300 group-hover:rotate-12" /> 
                                <span>Download CV</span>
                              </button>
            
                            </div>


            
          </div>
        </div>
      </section>

      {/* Education and Experience sections */}
      <section>
        <Education />
      </section>

      <section>
        <Experience />
      </section>
    </main>
  );
}
