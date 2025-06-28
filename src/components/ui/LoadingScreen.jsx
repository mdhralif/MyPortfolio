import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [codeLines, setCodeLines] = useState([]);
  const [currentPhase, setCurrentPhase] = useState(0);

  const codeSnippets = [
    "const developer = new Developer();",
    "developer.initialize();",
    "Loading skills.js...",
    "Importing projects.jsx...",
    "Rendering portfolio...",
    "Optimizing performance...",
    "Building dreams with code...",
    "Portfolio ready!"
  ];

  const phases = [
    "BOOTING",
    "LOADING",
    "COMPILING", 
    "READY"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1.2;
        
        // Update phase based on progress
        if (newProgress >= 25 && currentPhase === 0) setCurrentPhase(1);
        if (newProgress >= 50 && currentPhase === 1) setCurrentPhase(2);
        if (newProgress >= 85 && currentPhase === 2) setCurrentPhase(3);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onLoadingComplete, currentPhase]);

  // Simulate code typing effect
  useEffect(() => {
    const codeInterval = setInterval(() => {
      setCodeLines(prev => {
        if (prev.length < codeSnippets.length) {
          return [...prev, codeSnippets[prev.length]];
        }
        return prev;
      });
    }, 600);

    return () => clearInterval(codeInterval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 0.95,
          rotateX: 10,
          filter: "blur(8px)"
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-black overflow-hidden font-mono"
      >
        {/* Matrix-style background */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-500/20 text-xs"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -20,
                opacity: 0
              }}
              animate={{
                y: window.innerHeight + 20,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
            >
              {Math.random().toString(36).substring(2, 15)}
            </motion.div>
          ))}
        </div>

        {/* Terminal window */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="w-full max-w-4xl bg-gray-900/95 backdrop-blur-md rounded-lg overflow-hidden border border-gray-700 shadow-2xl"
          >
            {/* Terminal header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-400 text-sm">mdhralif@portfolio:~$</span>
              </div>
              <div className="text-gray-400 text-sm">
                {phases[currentPhase]}
              </div>
            </div>

            {/* Terminal content */}
            <div className="p-6 h-96 bg-black/90 relative overflow-hidden">
              {/* ASCII Art Logo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-6"
              >
                <motion.pre 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 text-sm leading-tight font-bold"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                    filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))"
                  }}
                >
{`
 ░█████╗░██╗░░░░░██╗███████╗
 ██╔══██╗██║░░░░░██║██╔════╝
 ███████║██║░░░░░██║█████╗░░
 ██╔══██║██║░░░░░██║██╔══╝░░
 ██║░░██║███████╗██║██║░░░░░
 ╚═╝░░╚═╝╚══════╝╚═╝╚═╝░░░░░
                              
`}
                </motion.pre>
              </motion.div>

              {/* Code lines with typing effect */}
              <div className="space-y-2">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-green-400">$</span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "auto" }}
                      className="text-white overflow-hidden whitespace-nowrap"
                    >
                      {line}
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-green-400"
                    >
                      |
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Progress section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="space-y-3">
                  {/* Status */}
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400">Status:</span>
                    <motion.span
                      key={currentPhase}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-yellow-400 font-bold"
                    >
                      [{phases[currentPhase]}]
                    </motion.span>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Progress:</span>
                      <span className="text-cyan-400">{Math.floor(progress)}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Binary loading animation */}
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">Loading:</span>
                    <div className="flex space-x-1">
                      {[...Array(20)].map((_, i) => (
                        <motion.span
                          key={i}
                          animate={{ 
                            opacity: [0.3, 1, 0.3],
                            color: ["#10b981", "#06b6d4", "#3b82f6"]
                          }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            repeat: Infinity
                          }}
                          className="text-xs"
                        >
                          {Math.random() > 0.5 ? '1' : '0'}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Glitch effect overlay */}
        <motion.div
          className="absolute inset-0 bg-cyan-500/5"
          animate={{
            opacity: [0, 0.1, 0],
            x: [0, -2, 2, 0]
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 1
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
