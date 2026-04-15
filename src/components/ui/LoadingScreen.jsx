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
      <div className="relative z-10 w-full max-w-xs sm:max-w-sm px-8 flex flex-col items-center">
        
        {/* Progress bar border */}
        <div className="w-full h-5 sm:h-6 border-[1px] border-white/60 p-[2px] mb-4">
          {/* Progress fill */}
          <div 
            className="h-full bg-white transition-all duration-100 ease-out"
            style={{ width: `${Math.min(100, Math.round(progress))}%` }}
          />
        </div>

        {/* Text underneath */}
        <div className="flex items-center justify-center gap-4 text-white font-mono tracking-[0.2em] text-xs sm:text-sm font-semibold uppercase mt-1">
          <span>LOADING</span>
          <span>{Math.round(progress)}%</span>
        </div>
        
      </div>
    </div>
  );
};

LoadingScreen.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};

export default LoadingScreen;
