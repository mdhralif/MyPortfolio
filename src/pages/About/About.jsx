
import PropTypes from "prop-types";

export default function About({ onContactClick }) {
  return (
    <>
      <section id="about" className="py-16 md:py-32 pt-24 md:pt-32 pb-32 md:pb-40 text-white bg-[#04081A] min-h-screen">
        
          
          <div className="grid gap-2 grid-cols-1 md:gap-12 lg:gap-24">
            
             
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
                  
                                      
                    
      
                  
                  
                
                
                {/* Let's Connect Button */}
                <div className="mt-2 lg:mt-8">
                  <button 
                    onClick={onContactClick}
                    className="w-full px-6 py-3 bg-white text-gray-900 font-medium rounded-lg transition-all duration-200 border-2 border-white hover:bg-gray-900 hover:text-white hover:border-gray-700 shadow-sm"
                  >
                    Let&apos;s Connect
                  </button>
                </div>
              </div>
            </div>

      </section>
      
      {/* Contact Modal moved to Hero */}
    </>
  );
}

About.propTypes = {
  onContactClick: PropTypes.func,
};

About.defaultProps = {
  onContactClick: () => {},
};
