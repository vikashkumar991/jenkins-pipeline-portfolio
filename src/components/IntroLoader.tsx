import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Database, Server, Cloud, Terminal, Wifi, WifiOff, RefreshCw } from 'lucide-react';
import profileImg from '../assets/profile.png';

const TechOrbit: React.FC = () => {
  const techIcons = [
    { icon: Code, delay: 0, color: '#ff6b35' },
    { icon: Cpu, delay: 0.5, color: '#ff8c42' },
    { icon: Database, delay: 1, color: '#ffa726' },
    { icon: Server, delay: 1.5, color: '#ff7043' },
    { icon: Cloud, delay: 2, color: '#ff5722' },
    { icon: Terminal, delay: 2.5, color: '#ff6b35' },
  ];

  return (
    <div className="relative w-80 h-80 mx-auto mb-12">
      {/* Orbital Rings - Behind everything */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 320 320">
          <circle
            cx="160"
            cy="160"
            r="140"
            fill="none"
            stroke="rgba(255, 107, 53, 0.3)"
            strokeWidth="2"
            strokeDasharray="4 8"
            className="animate-spin"
            style={{ animationDuration: '20s' }}
          />
          <circle
            cx="160"
            cy="160"
            r="160"
            fill="none"
            stroke="rgba(255, 140, 66, 0.2)"
            strokeWidth="2"
            strokeDasharray="2 6"
            className="animate-spin"
            style={{ animationDuration: '30s', animationDirection: 'reverse' }}
          />
        </svg>
      </div>

      {/* Orbiting Tech Icons - Middle layer */}
      {techIcons.map((tech, index) => {
        const angle = (2 * Math.PI * index) / techIcons.length;
        const radius = 140;
        
        return (
          <motion.div
            key={index}
            className="absolute w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg z-10"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: -32,
              marginTop: -32,
            }}
            animate={{
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: tech.delay,
            }}
          >
            <tech.icon className="w-8 h-8" style={{ color: tech.color }} />
          </motion.div>
        );
      })}

      {/* Central Core - Front layer */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center overflow-hidden border-4 border-orange-400 shadow-2xl"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 20px rgba(255, 107, 53, 0.5)',
              '0 0 40px rgba(255, 107, 53, 0.8)',
              '0 0 20px rgba(255, 107, 53, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
            style={{ 
              filter: 'brightness(1.1) contrast(1.1)',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const DataStream: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 bg-gradient-to-b from-transparent via-orange-400 to-transparent"
        style={{
          left: `${Math.random() * 100}%`,
          height: `${50 + Math.random() * 100}px`,
        }}
        animate={{
          y: [-100, window.innerHeight + 100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const ConnectivityStatus: React.FC<{ isOnline: boolean }> = ({ isOnline }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`flex items-center gap-2 px-4 py-2 rounded-full ${
      isOnline 
        ? 'bg-green-500/20 border border-green-500/30' 
        : 'bg-red-500/20 border border-red-500/30'
    }`}
  >
    {isOnline ? (
      <>
        <Wifi className="w-4 h-4 text-green-400" />
        <span className="text-green-400 text-sm">Connected</span>
      </>
    ) : (
      <>
        <WifiOff className="w-4 h-4 text-red-400" />
        <span className="text-red-400 text-sm">No Internet Connection</span>
      </>
    )}
  </motion.div>
);

interface IntroLoaderProps {
  onComplete: () => void;
  isOnline: boolean;
  isInitialLoad: boolean;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete, isOnline, isInitialLoad }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showRetry, setShowRetry] = useState(false);

  const phases = [
    "Initializing Systems...",
    "Loading Technologies...",
    "Connecting Networks...",
    "Preparing Experience...",
    "Almost Ready..."
  ];

  const offlinePhases = [
    "Checking Connection...",
    "Connection Lost...",
    "Working Offline...",
    "Ready to Continue..."
  ];

  const currentPhases = isOnline ? phases : offlinePhases;

  useEffect(() => {
    if (!isOnline) {
      // If offline, show retry option after 3 seconds
      const retryTimer = setTimeout(() => {
        setShowRetry(true);
      }, 3000);
      return () => clearTimeout(retryTimer);
    }

    // Normal loading progression
    const timer = setInterval(() => {
      setProgress(prev => {
        const increment = isInitialLoad ? 1.5 : 3; // Slower on initial load
        const newProgress = prev + increment;
        
        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * currentPhases.length);
        setCurrentPhase(Math.min(phaseIndex, currentPhases.length - 1));
        
        if (newProgress >= 100) {
          setTimeout(() => {
            onComplete();
          }, 500);
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete, isOnline, isInitialLoad, currentPhases.length]);

  const handleRetry = () => {
    window.location.reload();
  };

  const handleContinueOffline = () => {
    setProgress(100);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Data Stream Background */}
      <DataStream />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-grid-pattern"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Tech Orbit Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        >
          <TechOrbit />
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Vikash Kumar Singh
            </span>
          </h1>
          <p className="text-xl text-gray-300">DevOps & Backend Developer</p>
        </motion.div>

        {/* Connectivity Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mb-8"
        >
          <ConnectivityStatus isOnline={isOnline} />
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          {!showRetry ? (
            <>
              {/* Progress Bar */}
              <div className="relative mb-6">
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-orange-500/30">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full relative"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  >
                    {/* Animated Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse opacity-75"></div>
                    {/* Moving Highlight */}
                    <motion.div
                      className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
                      animate={{ x: [-32, 400] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>
                
                {/* Progress Percentage */}
                <div className="flex justify-between items-center mt-3">
                  <span className="text-orange-400 font-bold text-lg">
                    {Math.round(progress)}%
                  </span>
                  <span className="text-gray-400 text-sm">
                    {isOnline ? 'Loading Experience' : 'Offline Mode'}
                  </span>
                </div>
              </div>

              {/* Current Phase */}
              <motion.div
                key={currentPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <p className="text-gray-300 text-lg font-medium mb-4">
                  {currentPhases[currentPhase]}
                </p>
                
                {/* Loading Dots */}
                <div className="flex justify-center space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-orange-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            /* Offline Options */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="p-6 bg-red-500/10 rounded-2xl border border-red-500/20">
                <WifiOff className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Connection Issue</h3>
                <p className="text-gray-300 mb-6">
                  Unable to establish internet connection. You can continue offline or retry.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={handleRetry}
                    className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RefreshCw className="w-4 h-4" />
                    Retry Connection
                  </motion.button>
                  
                  <motion.button
                    onClick={handleContinueOffline}
                    className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Continue Offline
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-xs text-gray-500 space-y-1"
        >
          <p>Optimizing performance and user experience...</p>
          <p>Establishing secure connections...</p>
        </motion.div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </motion.div>
  );
};

export default IntroLoader;