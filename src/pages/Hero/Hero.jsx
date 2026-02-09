import { useEffect } from "react";
import SparklesText from "@/components/ui/sparkles-text";
import { FaGithub, FaArrowRight, FaEnvelope } from "react-icons/fa";
import PropTypes from "prop-types";
import AnimatedGrid from "@/components/AnimatedGrid";

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

              {/* Name section */}
              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-4xl sm:text-7xl lg:text-7xl font-bold leading-tight">
                  <SparklesText
                    text="Hello,"
                    showSparkles={false}
                    className="text-4xl sm:text-7xl lg:text-7xl font-bold text-[#2DD4BF] inline-block mr-2"
                  />
                  <span className="relative inline-block">
                    <span className="">I&apos;m</span>
                    <span className="font-extrabold text-white"> MD H R ALIF</span>
                  </span>
                </h1>
              </div>

             

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s justify-center">
                {/* View Projects Button */}
                <a
                  href="https://github.com/mdhralif"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 ">
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      <FaGithub className="text-lg" />
                      <span>My Github</span>
                      <FaArrowRight className="transform transition-all duration-300 group-hover:translate-x-1" />
                    </span>
                  </span>
                </a>

                {/* Contact Button */}
                <button
                  onClick={onContactClick}
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 ]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 ">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium ">
                      <FaEnvelope className="transform transition-all duration-300 group-hover:rotate-12" /> 
                      <span>Let&apos;s Connect</span>
                    </span>
                  </span>
                </button>
              </div>

              {/* Floating badges */}
              <div className="hidden lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
              </div>
              <div className="hidden lg:block absolute right-10 top-20 animate-float">
                
              </div>
              <div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
                
              </div>
            </div>
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
