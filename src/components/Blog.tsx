import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, User, FileText, Edit3, Bookmark, Hash, Coffee, Lightbulb, Code2, Zap } from 'lucide-react';

const EnhancedBlogBackground: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    {/* Floating Blog Icons */}
    {[
      { icon: BookOpen, x: '10%', y: '15%', delay: 0, size: 'w-8 h-8' },
      { icon: FileText, x: '85%', y: '20%', delay: 0.5, size: 'w-6 h-6' },
      { icon: Edit3, x: '15%', y: '70%', delay: 1, size: 'w-7 h-7' },
      { icon: Bookmark, x: '90%', y: '75%', delay: 1.5, size: 'w-5 h-5' },
      { icon: Hash, x: '5%', y: '45%', delay: 2, size: 'w-6 h-6' },
      { icon: Coffee, x: '80%', y: '50%', delay: 2.5, size: 'w-7 h-7' },
      { icon: Lightbulb, x: '25%', y: '25%', delay: 3, size: 'w-6 h-6' },
      { icon: Code2, x: '75%', y: '85%', delay: 3.5, size: 'w-8 h-8' },
      { icon: Zap, x: '50%', y: '10%', delay: 4, size: 'w-5 h-5' },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: item.x, top: item.y }}
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ 
          opacity: [0, 0.3, 0.6, 0.3],
          scale: [0, 1.2, 1, 1.1],
          rotate: [0, 360],
          y: [0, -20, 0, -10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: item.delay,
          ease: "easeInOut"
        }}
      >
        <item.icon className={`${item.size} text-orange-400/40`} />
      </motion.div>
    ))}

    {/* Animated Writing Lines */}
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="writing-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#ff6b35" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      
      {/* Writing Lines */}
      {[...Array(12)].map((_, i) => (
        <g key={i}>
          <line
            x1="100"
            y1={100 + i * 50}
            x2="1100"
            y2={100 + i * 50}
            stroke="url(#writing-gradient)"
            strokeWidth="2"
            strokeDasharray="20,10"
            className="animate-writing-line"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
          {/* Margin line */}
          <line
            x1="150"
            y1="50"
            x2="150"
            y2="750"
            stroke="#ff8c42"
            strokeWidth="1"
            opacity="0.3"
          />
        </g>
      ))}
      
      {/* Paper holes */}
      {[...Array(8)].map((_, i) => (
        <circle
          key={i}
          cx="80"
          cy={120 + i * 80}
          r="8"
          fill="#ff6b35"
          opacity="0.2"
        />
      ))}
    </svg>

    {/* Floating Paper Sheets */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${20 + i * 15}%`,
          top: `${10 + (i % 3) * 25}%`,
          width: '60px',
          height: '80px',
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6 + i,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20 backdrop-blur-sm">
          {/* Paper lines */}
          {[...Array(6)].map((_, lineIndex) => (
            <div
              key={lineIndex}
              className="w-4/5 h-0.5 bg-orange-400/20 ml-2"
              style={{ marginTop: lineIndex === 0 ? '8px' : '6px' }}
            />
          ))}
        </div>
      </motion.div>
    ))}

    <style>{`
      @keyframes writing-line {
        0% { stroke-dashoffset: 1000; opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { stroke-dashoffset: 0; opacity: 0; }
      }
      .animate-writing-line {
        animation: writing-line 8s ease-in-out infinite;
      }
    `}</style>
  </div>
);

const EnhancedFloatingBubbles: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
    {[...Array(25)].map((_, i) => (
      <div
        key={i}
        className="floating-bubble enhanced-bubble"
        style={{
          left: `${(i * 4) % 100}%`,
          animationDelay: `${(i * 0.4) % 10}s`,
          animationDuration: `${10 + (i % 6) * 2}s`,
          top: `${Math.random() * 100}%`,
        }}
      >
        <div 
          className="bubble-inner enhanced-bubble-inner"
          style={{
            width: 15 + (i % 4) * 10,
            height: 15 + (i % 4) * 10,
          }}
        />
      </div>
    ))}
    <style>{`
      .floating-bubble {
        position: absolute;
        bottom: -50px;
        animation: bubble-float linear infinite;
        z-index: 25;
      }
      
      .bubble-inner {
        background: radial-gradient(circle at 30% 30%, 
          rgba(255, 107, 53, 0.4), 
          rgba(255, 140, 66, 0.3), 
          rgba(255, 165, 102, 0.2),
          rgba(255, 215, 0, 0.1),
          transparent
        );
        border-radius: 50%;
        filter: blur(0.5px);
        opacity: 0.7;
      }
      
      .enhanced-bubble-inner {
        box-shadow: 
          0 0 15px rgba(255, 140, 66, 0.4),
          0 0 30px rgba(255, 107, 53, 0.3),
          0 0 45px rgba(255, 69, 0, 0.2),
          inset 0 0 10px rgba(255, 215, 0, 0.1);
        animation: bubble-glow 3s ease-in-out infinite alternate;
      }
      
      @keyframes bubble-glow {
        0% { 
          box-shadow: 
            0 0 15px rgba(255, 140, 66, 0.4),
            0 0 30px rgba(255, 107, 53, 0.3),
            0 0 45px rgba(255, 69, 0, 0.2);
        }
        100% { 
          box-shadow: 
            0 0 25px rgba(255, 140, 66, 0.6),
            0 0 50px rgba(255, 107, 53, 0.5),
            0 0 75px rgba(255, 69, 0, 0.4);
        }
      }
      
      @keyframes bubble-float {
        0% { 
          transform: translateY(0) translateX(0) scale(0.3); 
          opacity: 0; 
        }
        10% { 
          opacity: 0.7; 
          transform: translateY(-80px) translateX(3px) scale(0.5);
        }
        20% { 
          opacity: 0.8; 
          transform: translateY(-160px) translateX(8px) scale(0.7);
        }
        80% { 
          opacity: 0.6; 
          transform: translateY(-60vh) translateX(25px) scale(1.0);
        }
        95% { 
          opacity: 0.3; 
          transform: translateY(-80vh) translateX(35px) scale(1.1);
        }
        100% { 
          transform: translateY(-90vh) translateX(40px) scale(1.3); 
          opacity: 0; 
        }
      }
      
      .enhanced-bubble {
        animation: bubble-float linear infinite, bubble-sway 8s ease-in-out infinite;
      }
      
      @keyframes bubble-sway {
        0%, 100% { 
          transform: translateX(0) rotate(0deg); 
        }
        25% { 
          transform: translateX(10px) rotate(3deg); 
        }
        50% { 
          transform: translateX(20px) rotate(0deg); 
        }
        75% { 
          transform: translateX(10px) rotate(-3deg); 
        }
      }
    `}</style>
  </div>
);

const Blog = () => {
  const blogPosts = [
    {
      title: "How I Built My Own DevOps Lab",
      excerpt: "Setting up a complete DevOps environment from scratch using Docker, Kubernetes, and CI/CD pipelines.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "DevOps",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Linux Commands You Should Know",
      excerpt: "Essential Linux commands that every developer and system administrator should master for daily operations.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Linux",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Scaling Node.js Applications",
      excerpt: "Best practices for scaling Node.js applications in production environments with real-world examples.",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Backend",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Kubernetes Security Best Practices",
      excerpt: "A comprehensive guide to securing your Kubernetes clusters and following security best practices.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Security",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Infrastructure as Code with Terraform",
      excerpt: "Learn how to manage cloud infrastructure using Terraform and follow IaC best practices.",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "Infrastructure",
      color: "from-red-600 to-orange-600"
    },
    {
      title: "Building Resilient Microservices",
      excerpt: "Design patterns and strategies for building fault-tolerant microservices architecture.",
      date: "2023-12-15",
      readTime: "11 min read",
      category: "Architecture",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="blog" className="relative py-20 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900/10 to-red-900/10"></div>
      
      <EnhancedBlogBackground />
      <EnhancedFloatingBubbles />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <BookOpen className="w-8 h-8 text-orange-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Blog & Articles
            </h2>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Edit3 className="w-8 h-8 text-orange-400" />
            </motion.div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Sharing knowledge and experiences from the tech world
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 border border-orange-500/20 backdrop-blur-sm"
              whileHover={{ y: -10 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.color} text-white shadow-lg`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-orange-500/20">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <User className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  
                  <motion.button
                    className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glassmorphism p-8 rounded-2xl max-w-2xl mx-auto border border-orange-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Lightbulb className="w-8 h-8 text-yellow-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">
                Want to stay updated?
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Subscribe to my newsletter for the latest articles on DevOps, Backend Development, and Cloud Technologies.
            </p>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;