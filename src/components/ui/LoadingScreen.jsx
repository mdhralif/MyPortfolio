import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SparklesText from './sparkles-text';

const loadingMessages = [
  // 'Initializing',
  // 'Loading assets',
  // 'Preparing content', 
  // 'Almost ready',
  // 'Welcome!'
  'Welcome',
  'To',
  'My',
  'Portfolio',
];

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Welcome');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 8 + 2;
        
        // Update loading text based on progress
        if (newProgress >= 20 && newProgress < 40) {
          setLoadingText(loadingMessages[1]);
        } else if (newProgress >= 40 && newProgress < 70) {
          setLoadingText(loadingMessages[2]);
        } else if (newProgress >= 70 && newProgress < 95) {
          setLoadingText(loadingMessages[3]);
        } else if (newProgress >= 95) {
          setLoadingText(loadingMessages[4]);
        }

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
      background: '#020617',
      // Ensure it stays visible until completely faded out
      visibility: isVisible ? 'visible' : 'hidden'
    }}>
      
      {/* Grid Background - matching your portfolio */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className="absolute inset-0"
          >
            <pattern
              id="loadingGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="40"
                height="40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                className="opacity-40"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#loadingGrid)" />
          </svg>
        </div>
      </div>
      
      {/* Animated background particles - subtle blue/teal glow */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Glowing orbs like your portfolio */}
        {/* <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div> */}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center space-y-8 px-8">
        
        {/* Logo/Brand */}
        {/* <div className="space-y-4">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
              mdhr@lif <b style={{ color: 'aqua' }}>.</b>
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-teal-400/20 rounded-lg blur opacity-75"></div>
          </div>
          
          <div className="w-24 h-1 bg-gray-700/50 mx-auto rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: '60%' }}
            ></div>
          </div>
          
          <p className="text-gray-400 text-xl font-light">
            Portfolio
          </p>
        </div> */}

        {/* Loading section */}
        <div className="space-y-6">
          
          {/* Loading text */}
          <div className="min-h-[2rem] flex items-center justify-center">
            <span className="text-gray-300 text-5xl font-extrabold">
              {loadingText}
            </span>
          </div>
          
          {/* Progress bar */}
          {/* <div className="w-80 max-w-full mx-auto space-y-3">
            <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">
                {Math.round(progress)}%
              </span>
              <span className="text-gray-500 text-xs">
                Loading...
              </span>
            </div>
          </div> */}
        </div>

        {/* Loading dots */}
        <div className="flex justify-center items-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-400/60 rounded-full"
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
