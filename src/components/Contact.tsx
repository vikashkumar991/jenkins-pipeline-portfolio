import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Globe, Wifi, Server, Database, Cloud } from 'lucide-react';

const ContactNetworkBackground: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    {/* Network Grid */}
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="network-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b35" />
          <stop offset="50%" stopColor="#ff8c42" />
          <stop offset="100%" stopColor="#ffa726" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Network Nodes */}
      {[
        { x: 100, y: 150, size: 8 },
        { x: 300, y: 100, size: 12 },
        { x: 500, y: 200, size: 10 },
        { x: 700, y: 120, size: 14 },
        { x: 900, y: 180, size: 8 },
        { x: 1100, y: 140, size: 10 },
        { x: 150, y: 400, size: 12 },
        { x: 350, y: 350, size: 8 },
        { x: 550, y: 450, size: 16 },
        { x: 750, y: 380, size: 10 },
        { x: 950, y: 420, size: 12 },
        { x: 200, y: 650, size: 10 },
        { x: 400, y: 600, size: 8 },
        { x: 600, y: 700, size: 12 },
        { x: 800, y: 620, size: 14 },
        { x: 1000, y: 680, size: 8 },
      ].map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="url(#network-gradient)"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
          <circle
            cx={node.x}
            cy={node.y}
            r={node.size * 0.6}
            fill="#ffd700"
            opacity="0.8"
            className="animate-ping"
            style={{ animationDelay: `${i * 0.3}s`, animationDuration: '3s' }}
          />
        </g>
      ))}
      
      {/* Network Connections */}
      {[
        { x1: 100, y1: 150, x2: 300, y2: 100 },
        { x1: 300, y1: 100, x2: 500, y2: 200 },
        { x1: 500, y1: 200, x2: 700, y2: 120 },
        { x1: 700, y1: 120, x2: 900, y2: 180 },
        { x1: 900, y1: 180, x2: 1100, y2: 140 },
        { x1: 150, y1: 400, x2: 350, y2: 350 },
        { x1: 350, y1: 350, x2: 550, y2: 450 },
        { x1: 550, y1: 450, x2: 750, y2: 380 },
        { x1: 750, y1: 380, x2: 950, y2: 420 },
        { x1: 200, y1: 650, x2: 400, y2: 600 },
        { x1: 400, y1: 600, x2: 600, y2: 700 },
        { x1: 600, y1: 700, x2: 800, y2: 620 },
        { x1: 800, y1: 620, x2: 1000, y2: 680 },
        // Vertical connections
        { x1: 300, y1: 100, x2: 350, y2: 350 },
        { x1: 500, y1: 200, x2: 550, y2: 450 },
        { x1: 700, y1: 120, x2: 750, y2: 380 },
        { x1: 900, y1: 180, x2: 950, y2: 420 },
        { x1: 350, y1: 350, x2: 400, y2: 600 },
        { x1: 550, y1: 450, x2: 600, y2: 700 },
        { x1: 750, y1: 380, x2: 800, y2: 620 },
      ].map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#network-gradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.6"
          className="animate-network-pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </svg>

    {/* Floating Communication Icons */}
    {[
      { icon: MessageCircle, x: '15%', y: '20%', delay: 0, size: 'w-8 h-8' },
      { icon: Mail, x: '85%', y: '25%', delay: 0.5, size: 'w-7 h-7' },
      { icon: Phone, x: '10%', y: '60%', delay: 1, size: 'w-6 h-6' },
      { icon: Globe, x: '90%', y: '70%', delay: 1.5, size: 'w-8 h-8' },
      { icon: Wifi, x: '20%', y: '80%', delay: 2, size: 'w-6 h-6' },
      { icon: Server, x: '80%', y: '15%', delay: 2.5, size: 'w-7 h-7' },
      { icon: Database, x: '5%', y: '40%', delay: 3, size: 'w-6 h-6' },
      { icon: Cloud, x: '75%', y: '85%', delay: 3.5, size: 'w-8 h-8' },
      { icon: Send, x: '50%', y: '10%', delay: 4, size: 'w-5 h-5' },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: item.x, top: item.y }}
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ 
          opacity: [0, 0.4, 0.7, 0.4],
          scale: [0, 1.2, 1, 1.1],
          rotate: [0, 360],
          y: [0, -15, 0, -8, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: item.delay,
          ease: "easeInOut"
        }}
      >
        <item.icon className={`${item.size} text-orange-400/50`} />
      </motion.div>
    ))}

    {/* Data Packets */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
        style={{
          left: `${10 + (i * 8) % 80}%`,
          top: `${20 + (i * 12) % 60}%`,
        }}
        animate={{
          x: [0, 100, 200, 300, 400],
          y: [0, -20, 20, -10, 0],
          opacity: [0, 1, 1, 1, 0],
          scale: [0.5, 1, 0.8, 1.2, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut"
        }}
      />
    ))}

    <style>{`
      @keyframes network-pulse {
        0%, 100% { 
          stroke-dashoffset: 0; 
          opacity: 0.3; 
        }
        50% { 
          stroke-dashoffset: 20; 
          opacity: 0.8; 
        }
      }
      .animate-network-pulse {
        animation: network-pulse 3s ease-in-out infinite;
      }
    `}</style>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Enhanced Background with Network Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900/10 to-red-900/10"></div>
      
      <ContactNetworkBackground />

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
              <MessageCircle className="w-8 h-8 text-orange-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Get In Touch
            </h2>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Send className="w-8 h-8 text-orange-400" />
            </motion.div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Let's connect and build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glassmorphism p-8 rounded-2xl border border-orange-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 bg-orange-500/20 rounded-full">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-medium">vks200506@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 bg-red-500/20 rounded-full">
                    <Phone className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white font-medium">9915599590</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 bg-yellow-500/20 rounded-full">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white font-medium">Chandigarh, India</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-orange-500/20">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/vikashkumar991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-orange-500/20 rounded-full hover:bg-orange-500/30 transition-all duration-300 border border-orange-500/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/vikash-kumar-singh-784146290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-orange-500/20 rounded-full hover:bg-orange-500/30 transition-all duration-300 border border-orange-500/30"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glassmorphism p-8 rounded-2xl border border-orange-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-orange-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Network Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glassmorphism p-6 rounded-2xl max-w-md mx-auto border border-green-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Wifi className="w-6 h-6 text-green-400" />
              </motion.div>
              <span className="text-green-400 font-semibold">Network Active</span>
            </div>
            <p className="text-gray-400 text-sm">
              All communication channels are online and ready
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;