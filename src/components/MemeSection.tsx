import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Coffee, Code, Zap } from 'lucide-react';

const FloatingEmojis: React.FC = () => {
  const emojis = [
    '😂', '🤣', '😹', '😆', '😄', '😅', '😁', '😜', '😹', '😆', '😹', '😂'
  ];
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {emojis.map((emoji, i) => (
        <span
          key={i}
          className="absolute text-5xl md:text-6xl select-none animate-emoji-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 4}s`,
            opacity: 0.18 + Math.random() * 0.18,
            filter: 'blur(0.5px) drop-shadow(0 2px 8px #f43f5e) drop-shadow(0 0 8px #fbbf24)', // pink-500 and yellow-400
          }}
        >
          {emoji}
        </span>
      ))}
      <style>{`
        @keyframes emoji-float {
          0% { transform: translateY(0) scale(1) rotate(0deg); }
          50% { transform: translateY(-40px) scale(1.1) rotate(10deg); }
          100% { transform: translateY(0) scale(1) rotate(-10deg); }
        }
        .animate-emoji-float {
          animation: emoji-float linear infinite;
        }
      `}</style>
    </div>
  );
};

const MemeSection = () => {
  const memes = [
    {
      text: "Mujhe code chhod kar koi aur kaam mat dena... 😤👨‍💻",
      subtitle: "When someone asks me to do non-technical work",
      icon: Code,
      color: "from-yellow-500 to-orange-500"
    },
    {
      text: "DevOps hu bhai, time nahi hota chill karne ka... 🤯🧯",
      subtitle: "Every DevOps engineer's life story",
      icon: Zap,
      color: "from-blue-500 to-purple-500"
    },
    {
      text: "Coffee + Code = Life... Baaki sab jhooth hai! ☕️💻",
      subtitle: "The ultimate truth of a developer's existence",
      icon: Coffee,
      color: "from-green-500 to-teal-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="memes" className="relative py-20 overflow-hidden">
      <FloatingEmojis />
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Smile className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Developer Humor
            </h2>
            <Smile className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Because every developer needs a good laugh! 😄
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {memes.map((meme, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${meme.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <meme.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <motion.div
                    className="space-y-4"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-bold text-white leading-relaxed">
                      {meme.text}
                    </h3>
                    
                    <p className="text-gray-400 text-sm italic">
                      {meme.subtitle}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-yellow-300 text-sm font-medium">
                      *Every developer ever* 😅
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bonus Hindi Tech Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism p-8 rounded-2xl max-w-4xl mx-auto border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              "Debugging is like being a detective in a crime movie where you are also the murderer" 🔍💻
            </h3>
            <p className="text-gray-400 italic">
              - Every developer debugging their own code at 2 AM
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MemeSection;