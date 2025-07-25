import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Lightbulb, Brain, Target } from 'lucide-react';

const FloatingQuotes: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-orange-500/10"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          delay: Math.random() * 5,
        }}
      >
        <Quote className="w-12 h-12" />
      </motion.div>
    ))}
  </div>
);

const QuoteSection = () => {
  const quoteWords = [
    "Technology", "changes.", "All", "the", "time.", "Our", "knowledge", "is", "our", "value.",
    "We", "have", "to", "keep", "up", "with", "the", "latest", "technology", "changes", "and", "updates.",
    "So,", "let's", "understand", "instead", "of", "memorizing,", "let's", "see", "instead", "of", "hearing,",
    "let's", "learn", "instead", "of", "ignoring,", "let's", "demonstrate", "instead", "of", "assuming."
  ];

  const keyWords = ['Technology', 'knowledge', 'value', 'understand', 'learn', 'demonstrate'];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-red-900/10 to-yellow-900/10"></div>
      
      <FloatingQuotes />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Philosophy
              </h2>
            </motion.div>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>

          {/* Main Quote */}
          <div className="glassmorphism p-8 md:p-12 rounded-3xl border border-orange-500/20 mb-12">
            <div className="relative">
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
              >
                <Quote className="w-8 h-8 text-white" />
              </motion.div>

              {/* Animated Quote Text */}
              <motion.div 
                className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-light pl-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {quoteWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.6 + index * 0.05,
                      duration: 0.4
                    }}
                    className={`inline-block mr-3 ${
                      keyWords.some(key => word.toLowerCase().includes(key.toLowerCase()))
                        ? 'text-orange-400 font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent'
                        : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              {/* Attribution */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="text-right mt-8 pl-8"
              >
                <p className="text-gray-400 italic text-lg">
                  - Philosophy of Continuous Learning
                </p>
              </motion.div>
            </div>
          </div>

          {/* Key Principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Brain,
                title: "Understand vs Memorize",
                description: "Deep comprehension over rote learning",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Target,
                title: "See vs Hear",
                description: "Visual learning and hands-on experience",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: Lightbulb,
                title: "Demonstrate vs Assume",
                description: "Practical application over theoretical assumptions",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-300 border border-orange-500/20 group"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${principle.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                  {principle.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
          >
            <div className="glassmorphism p-8 rounded-2xl max-w-2xl mx-auto border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's apply these principles to create innovative solutions together.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Connect</span>
                <Target className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;