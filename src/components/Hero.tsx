import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';

const FloatingBlobImage: React.FC = () => {
  return (
    <div className="mx-auto mb-8 flex justify-center relative">
      {/* Floating Particles around Profile */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div 
              className="particle-glow"
              style={{
                width: 8 + Math.random() * 12,
                height: 8 + Math.random() * 12,
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="orbital-ring ring-1"></div>
        <div className="orbital-ring ring-2"></div>
        <div className="orbital-ring ring-3"></div>
      </div>
      
      <div className="relative w-56 h-56 md:w-72 md:h-72 z-10">
        {/* Enhanced Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/30 to-red-500/30 blur-2xl animate-pulse"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
      <svg
        viewBox="0 0 300 300"
        className="absolute w-full h-full animate-blob z-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e42" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blob-gradient)"
          d="M60.1,-67.2C76.2,-54.2,85.7,-32.1,83.7,-12.2C81.7,7.7,68.2,25.4,54.1,39.7C40,54,25.3,65,7.2,70.2C-10.9,75.4,-31.4,74.7,-48.2,64.2C-65,53.7,-78.1,33.4,-77.2,14.7C-76.3,-4,-61.4,-21.1,-46.2,-34.2C-31.1,-47.3,-15.5,-56.4,4.2,-60.2C23.9,-64,47.8,-62.2,60.1,-67.2Z"
          transform="translate(150 150) scale(1.1)"
        >
          <animate attributeName="d" dur="8s" repeatCount="indefinite"
            values="M60.1,-67.2C76.2,-54.2,85.7,-32.1,83.7,-12.2C81.7,7.7,68.2,25.4,54.1,39.7C40,54,25.3,65,7.2,70.2C-10.9,75.4,-31.4,74.7,-48.2,64.2C-65,53.7,-78.1,33.4,-77.2,14.7C-76.3,-4,-61.4,-21.1,-46.2,-34.2C-31.1,-47.3,-15.5,-56.4,4.2,-60.2C23.9,-64,47.8,-62.2,60.1,-67.2Z;
            M54.1,-61.2C67.2,-49.2,72.7,-28.1,71.2,-8.7C69.7,10.7,61.2,28.4,48.1,41.7C35,55,17.5,64,0.2,63.8C-17.1,63.6,-34.2,54.2,-48.2,41.2C-62.2,28.1,-73.1,11.5,-72.2,-5.2C-71.3,-21.9,-58.7,-38.7,-43.7,-50.7C-28.7,-62.7,-11.4,-69.9,7.2,-72.2C25.8,-74.5,51.6,-72.2,54.1,-61.2Z;
            M60.1,-67.2C76.2,-54.2,85.7,-32.1,83.7,-12.2C81.7,7.7,68.2,25.4,54.1,39.7C40,54,25.3,65,7.2,70.2C-10.9,75.4,-31.4,74.7,-48.2,64.2C-65,53.7,-78.1,33.4,-77.2,14.7C-76.3,-4,-61.4,-21.1,-46.2,-34.2C-31.1,-47.3,-15.5,-56.4,4.2,-60.2C23.9,-64,47.8,-62.2,60.1,-67.2Z"
          />
        </path>
      </svg>
      <img
        src={profileImg}
        alt="Profile"
        className="absolute w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-2xl left-1/2 top-1/2 z-30 hover:scale-105 transition-transform duration-500"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { icon: '💻', delay: '0s', x: '10%', y: '20%' },
          { icon: '🚀', delay: '1s', x: '80%', y: '30%' },
          { icon: '⚡', delay: '2s', x: '15%', y: '70%' },
          { icon: '🔥', delay: '0.5s', x: '85%', y: '75%' },
          { icon: '🛠️', delay: '1.5s', x: '50%', y: '10%' },
          { icon: '🌟', delay: '2.5s', x: '50%', y: '90%' },
        ].map((item, i) => (
          <div
            key={i}
            className="floating-icon"
            style={{
              left: item.x,
              top: item.y,
              animationDelay: item.delay,
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
    <style>{`
      .floating-particle {
        position: absolute;
        animation: particle-float infinite ease-in-out;
      }
      
      .particle-glow {
        background: radial-gradient(circle, 
          rgba(255, 215, 0, 0.8) 0%, 
          rgba(255, 140, 66, 0.6) 50%, 
          rgba(255, 69, 0, 0.4) 100%
        );
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(255, 140, 66, 0.8);
        filter: blur(1px);
      }
      
      .orbital-ring {
        position: absolute;
        border: 2px solid transparent;
        border-radius: 50%;
        animation: orbit-rotate 20s linear infinite;
      }
      
      .ring-1 {
        width: 280px;
        height: 280px;
        border-top-color: rgba(255, 140, 66, 0.3);
        border-right-color: rgba(255, 140, 66, 0.1);
      }
      
      .ring-2 {
        width: 320px;
        height: 320px;
        border-bottom-color: rgba(255, 69, 0, 0.3);
        border-left-color: rgba(255, 69, 0, 0.1);
        animation-direction: reverse;
        animation-duration: 25s;
      }
      
      .ring-3 {
        width: 360px;
        height: 360px;
        border-top-color: rgba(255, 215, 0, 0.2);
        border-bottom-color: rgba(255, 215, 0, 0.1);
        animation-duration: 30s;
      }
      
      .animate-blob {
        animation: blob-float 6s ease-in-out infinite alternate;
      }
      
      @keyframes blob-float {
        0% { transform: scale(1) translateY(0px); }
        50% { transform: scale(1.05) translateY(-16px); }
        100% { transform: scale(1) translateY(0px); }
      }
    `}</style>
  </div>
  );
};

const EnhancedFireBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Enhanced Fire Particles */}
    <div className="fire-container">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="fire-particle enhanced-fire"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            height: `${15 + Math.random() * 25}px`,
            width: `${3 + Math.random() * 2}px`,
          }}
        />
      ))}
    </div>
    
    <style>{`
      .enhanced-fire {
        box-shadow: 
          0 0 10px rgba(255, 140, 66, 0.8),
          0 0 20px rgba(255, 69, 0, 0.6),
          0 0 30px rgba(255, 215, 0, 0.4);
        filter: blur(0.5px);
      }
      
      .enhanced-fire::before {
        content: '';
        position: absolute;
        inset: 0;
        background: inherit;
        filter: blur(2px);
        opacity: 0.7;
      }
    `}</style>
  </div>
);

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fire Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20">
        <EnhancedFireBackground />
      </div>
      
      <FloatingBlobImage />
      
      {/* Glass Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism p-8 rounded-2xl"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vikash Kumar Singh
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-orange-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            DevOps & Backend Developer
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Automating the Future of Backend Infrastructure
          </motion.p>

          {/* Hindi Meme Text */}
          <motion.div
            className="mb-8 p-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg border border-orange-500/30"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-yellow-300 text-lg font-medium">
              "Ruk ja bhai... backend deploy ho raha hai 💻🔥"
            </p>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.a
              href="https://drive.google.com/file/d/1mL-aFfKzR1ANtA7oMEAX89_DWThrKfQM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </div>
            </motion.a>
            
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/vikashkumar991"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vikash-kumar-singh-784146290"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="mailto:vks200506@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-orange-300" />
      </motion.div>
    </section>
  );
};

export default Hero;