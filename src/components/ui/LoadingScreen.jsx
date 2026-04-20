import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 8 + 2;

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            // Reduced delay to prevent white flash
            setTimeout(() => {
              onLoadingComplete();
            }, 100);
          }, 300);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
      progress >= 100 ? 'opacity-0' : 'opacity-100'
    }`}
    style={{
      background: '#111828',
      visibility: isVisible ? 'visible' : 'hidden'
    }}>
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0" style={{background: '#111828'}}></div>
      
      {/* Animated background particles - subtle gray glow */}
      <div className="absolute inset-0 overflow-hidden">
        
      </div>

      {/* Main loading content */}
      <div className="relative z-10 w-full max-w-2xl px-4 sm:px-8 flex flex-col items-center">
        
        {/* Smile - positioned exactly where it was above the center */}
        <div className="absolute bottom-full mb-12 sm:mb-20 text-white text-5xl sm:text-6xl font-medium">
          ツ
        </div>

        {/* Text - naturally placed in the exact center (where the bar used to be), with increased size */}
        <div className="flex justify-center w-full text-white font-mono tracking-[0.1em] sm:tracking-[0.15em] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          <div className="flex text-center flex-nowrap justify-center whitespace-nowrap">
            {"You're about to see my work !".split("").map((char, index) => {
              const targetLength = 29;
              const isVisible = index < Math.floor((Math.min(progress, 80) / 80) * targetLength);
              return (
                <span 
                  key={`id-${index}`}
                  className={`transition-opacity duration-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
};

LoadingScreen.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};

export default LoadingScreen;
