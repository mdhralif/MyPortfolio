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
        <div className="flex justify-center w-full text-white font-mono tracking-[0.1em] sm:tracking-[0.15em] text-sm sm:text-lg md:text-xl font-bold">
          <div className="flex text-center flex-wrap justify-center">
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

        {/* Loading Bar and Percentage - placed just below the text */}
        <div className="w-full max-w-[200px] sm:max-w-[240px] mt-6 sm:mt-8 flex flex-col items-center">
          <div className="w-full h-5 sm:h-6 border-[1px] border-white/60 p-[2px] mb-2">
            <div 
              className="h-full bg-white transition-all duration-75 ease-out"
              style={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>
          <div className="flex items-center justify-between w-full text-white font-mono tracking-[0.15em] text-[10px] sm:text-xs font-semibold uppercase opacity-80">
            <span>LOADING...</span>
            <span>{Math.round(progress)}%</span>
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
