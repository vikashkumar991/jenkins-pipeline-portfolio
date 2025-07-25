import React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroLoader from './components/IntroLoader';
import CursorFollower from './components/CursorFollower';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import MemeSection from './components/MemeSection';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Handle initial loading
  useEffect(() => {
    // Ensure loader shows for at least 2 seconds
    const minLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Check if all resources are loaded
    const handleLoad = () => {
      // Wait for minimum load time before allowing completion
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(minLoadTime);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Show loader if still loading or if intro is showing
  const shouldShowLoader = isLoading || showIntro;

  return (
    <>
      <AnimatePresence mode="wait">
        {shouldShowLoader && (
          <IntroLoader 
            key="intro-loader"
            onComplete={handleIntroComplete} 
            isOnline={isOnline}
            isInitialLoad={isLoading}
          />
        )}
      </AnimatePresence>
      
      {!shouldShowLoader && (
        <div className="min-h-screen bg-black text-white">
          <CursorFollower />
          <Navbar />
          <Hero />
          <QuoteSection />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <MemeSection />
          <Blog />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;