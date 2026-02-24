import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const loadingMessages = [
  'Let\'s',
  'Explore'
];

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(loadingMessages[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 8 + 2;
        
        // Update loading text based on progress (map progress to messages)
        const idx = Math.min(
          loadingMessages.length - 1,
          Math.floor(newProgress / (100 / loadingMessages.length))
        );
        setLoadingText(loadingMessages[idx]);

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
      background: '#161825',
      visibility: isVisible ? 'visible' : 'hidden'
    }}>
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0" style={{background: '#161825'}}></div>
      
      {/* Animated background particles - subtle gray glow */}
      <div className="absolute inset-0 overflow-hidden">
        
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center space-y-8 px-8">
        
       

        {/* Loading section */}
        <div className="space-y-6">
          
          {/* Loading text */}
          <div className="min-h-[2rem] flex items-center justify-center">
            <span className="text-gray-300 text-5xl font-extrabold">
              {loadingText}
            </span>
          </div>
          
        </div>

        {/* Loading dots */}
        <div className="flex justify-center items-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white rounded-full"
              style={{
                animation: `bounce 1.4s ease-in-out infinite`,
                animationDelay: `${i * 0.16}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

LoadingScreen.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};

export default LoadingScreen;
