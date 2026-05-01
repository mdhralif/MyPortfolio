import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 8 + 2;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // When progress reaches 100, trigger exit animation then hide
  useEffect(() => {
    if (progress >= 100 && !exiting) {
      setExiting(true);
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        // small delay to ensure painting before calling completion
        setTimeout(() => onLoadingComplete(), 100);
      }, 750); // matches the duration of the transition below
      return () => clearTimeout(hideTimer);
    }
    return undefined;
  }, [progress, exiting, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transform transition-all duration-700 ease-in-out ${
        exiting ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
      style={{
        background: '#111828',
        visibility: isVisible ? 'visible' : 'hidden'
      }}
    >
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0" style={{ background: '#111828' }} />

      {/* Animated background particles - subtle gray glow */}
      <div className="absolute inset-0 overflow-hidden" />

      {/* Main loading content */}
      <div className="relative z-10 w-full max-w-2xl px-4 sm:px-8 flex flex-col items-center">
        {/* Smile - positioned exactly where it was above the center */}
        <div className="absolute bottom-full mb-12 sm:mb-20 text-white text-5xl sm:text-6xl font-medium">ツ</div>

        {/* Mobile: 3 large words in same position - one by one appear and disappear */}
        <div className="flex md:hidden flex-col items-center justify-center w-full relative h-20 sm:h-24">
          {['Come', 'On', 'In'].map((word, idx) => {
            const startProgress = idx * 33;
            const endProgress = (idx + 1) * 33;
            const isInRange = progress >= startProgress && progress < endProgress;
            const opacity = isInRange ? (progress - startProgress) / (endProgress - startProgress) : 0;
            
            return (
              <div
                key={idx}
                className="absolute text-white font-bold text-5xl sm:text-6xl text-center"
                style={{
                  opacity: Math.min(opacity, 1),
                  transition: 'opacity 0.4s ease-in-out'
                }}
              >
                {word}
              </div>
            );
          })}
        </div>

        {/* Desktop: Original animated text */}
        <div className="hidden md:flex justify-center w-full text-white font-mono tracking-[0.1em] sm:tracking-[0.15em] text-sm sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          <div className="flex text-center flex-nowrap justify-center whitespace-nowrap">
            {"You're about to see my work !".split("").map((char, index) => {
              const targetLength = 29;
              const isVisibleChar = index < Math.floor((Math.min(progress, 80) / 80) * targetLength);
              return (
                <span key={`id-${index}`} className={`transition-opacity duration-50 ${isVisibleChar ? 'opacity-100' : 'opacity-0'}`}>
                  {char === ' ' ? '\u00A0' : char}
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
