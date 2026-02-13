import { useEffect } from "react";
import SparklesText from "@/components/ui/sparkles-text";
import { FaGithub, FaLinkedin, FaFacebook, FaPaperPlane, FaFileDownload } from "react-icons/fa";
import PropTypes from "prop-types";
import AnimatedGrid from "@/components/AnimatedGrid";

import ProfileImage from "@/assets/images/profile.jpg";
export default function Hero({ onContactClick }) {


  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = ` 
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Apply extra padding for 1366x768 resolution
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      if (style.parentNode) document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <>
      <main className="bg-[#1C1F2E] text-white min-h-screen">
        <section
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <div className="absolute inset-0"></div>
          <AnimatedGrid />


          {/* Main content container */}
          <div
            className="container mx-auto flex flex-col items-center justify-center relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28"
            style={{
              paddingTop:
                typeof window !== "undefined" &&
                window.innerWidth >= 1360 &&
                window.innerWidth <= 1370 &&
                window.innerHeight >= 760 &&
                window.innerHeight <= 775
                  ? "12rem"
                  : "",
            }}
          >
            {/* Left column - Text content */}
            <div className="w-full max-w-4xl mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative text-center">
              
              <div className="relative mt-20 p-10 bg-[#161825] rounded-2xl">
                {/* Profile Image */}
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                  <div className="w-40 h-40 rounded-full overflow-hidden bg-[#1C1F2E]">
                    <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Name section */}
                <div className="relative mb-6 sm:mb-8 mt-12">
                  <h1 className="text-4xl sm:text-7xl lg:text-7xl font-bold leading-tight">
                    <SparklesText
                      text="It's me, "
                      showSparkles={false}
                      className="text-4xl sm:text-7xl lg:text-7xl font-bold text-[#2DD4BF] inline-block mr-2"
                    />
                    <span className="relative inline-block">
                      <span className="font-extrabold text-white"> MD H R ALIF</span>
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-lg sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Software Engineer | Full Stack Developer
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s justify-center">
                  <button
                    onClick={onContactClick}
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#18181a] text-white font-extrabold text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <FaPaperPlane className="text-xl transform transition-all duration-300 group-hover:rotate-12" /> 
                    <span>Reach Me</span>
                  </button>

                  <a
                    href="https://drive.google.com/file/d/1vg9ZRsNnimnVixbsyHrKLEDVDEvGTgmK/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#18181a] text-white font-extrabold text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <FaFileDownload className="text-xl transform transition-all duration-300 group-hover:-translate-y-1" /> 
                    <span>My CV</span>
                  </a>

                  {/* GitHub CTA removed (now available in bottom-left icons) */}
                </div>
              </div>



            </div>
          </div>

          {/* Bottom-left social icons */}
          <div className="absolute left-6 bottom-6 z-30 flex flex-col gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-[#161825] hover:bg-[#2DD4BF] transition-colors shadow-lg"
              title="GitHub"
            >
              <FaGithub className="text-white w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-[#161825] hover:bg-[#2DD4BF] transition-colors shadow-lg"
              title="LinkedIn"
            >
              <FaLinkedin className="text-white w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-[#161825] hover:bg-[#2DD4BF] transition-colors shadow-lg"
              title="Facebook"
            >
              <FaFacebook className="text-white w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

Hero.propTypes = {
  onContactClick: PropTypes.func,
};

Hero.defaultProps = {
  onContactClick: () => {},
};
