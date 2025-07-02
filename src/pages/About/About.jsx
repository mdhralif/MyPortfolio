import HeroImg from "@/assets/images/profile.jpg";
import SparklesText from "@/components/ui/sparkles-text";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";

export default function About() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h1 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            <SparklesText text="Here I'm" showSparkles={false} />  
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <div className="pt-0 lg:pt-6">
             
                {/* Desktop-only creative floating elements */}
                <div className="hidden lg:block lg:mt-8 relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-gray-800/50 max-w-full">
                  {/* ...existing code... */}
                  {/* Floating geometric shapes */}
                  <div className="absolute inset-0">
                    {/* Large floating circle */}
                    <div className="absolute top-8 right-12 w-20 h-20 bg-gradient-to-br from-teal-500/20 to-teal-600/30 rounded-full animate-pulse blur-sm"></div>
                    
                    {/* Medium floating squares */}
                    <div className="absolute top-20 left-8 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/30 rotate-45 animate-bounce" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-16 right-20 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rotate-12 animate-bounce" style={{animationDelay: '2s'}}></div>
                    
                    {/* Small floating dots */}
                    <div className="absolute top-32 left-20 w-4 h-4 bg-orange-400/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-32 left-12 w-3 h-3 bg-green-400/40 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
                    <div className="absolute top-12 left-32 w-2 h-2 bg-pink-400/40 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
                  </div>
                  
                  {/* Central content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
                    <div className="mb-6">
                      <div className="text-4xl mb-4">👨‍💻</div>
                      <h3 className="text-2xl font-bold text-white mb-2">Web Developer</h3>
                      <p className="text-gray-400 text-sm max-w-xs">
                        Building digital experiences with passion.
                      </p>
                    </div>
                    
                    {/* Animated text elements */}
                    {/* <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 opacity-80">
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                        <span className="text-gray-300">Turning ideas into reality</span>
                      </div>
                      <div className="flex items-center space-x-2 opacity-80" style={{animationDelay: '1s'}}>
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                        <span className="text-gray-300">Learning something new everyday</span>
                      </div>
                      <div className="flex items-center space-x-2 opacity-80" style={{animationDelay: '2s'}}>
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                        <span className="text-gray-300">Crafting beautiful interfaces</span>
                      </div>
                    </div> */}
                  </div>
                  
                  {/* Gradient overlay for depth */}
                  
                </div>
                
                {/* Let's Connect Button */}
                <div className="mt-0 lg:mt-8">
                  <button 
                    onClick={handleContactClick}
                    className="group relative w-full px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25"
                  >
                    <span className="relative z-10">Let&apos;s Connect</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
    </>
  );
}
