import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';

const TechCircuit: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
      {/* Circuit Lines */}
      <g stroke="#ff6b35" strokeWidth="2" fill="none">
        <path d="M50,100 L200,100 L200,200 L350,200" className="animate-circuit" />
        <path d="M350,200 L500,200 L500,300 L650,300" className="animate-circuit" style={{ animationDelay: '0.5s' }} />
        <path d="M650,300 L800,300 L800,400 L950,400" className="animate-circuit" style={{ animationDelay: '1s' }} />
        <path d="M100,500 L250,500 L250,600 L400,600" className="animate-circuit" style={{ animationDelay: '1.5s' }} />
        <path d="M400,600 L550,600 L550,700 L700,700" className="animate-circuit" style={{ animationDelay: '2s' }} />
      </g>
      
      {/* Circuit Nodes */}
      {[
        { x: 200, y: 100 }, { x: 350, y: 200 }, { x: 500, y: 300 },
        { x: 650, y: 300 }, { x: 800, y: 400 }, { x: 250, y: 500 },
        { x: 400, y: 600 }, { x: 550, y: 700 }
      ].map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="6"
          fill="#ff8c42"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
      
      {/* Microchips */}
      {[
        { x: 180, y: 80 }, { x: 330, y: 180 }, { x: 630, y: 280 },
        { x: 230, y: 480 }, { x: 530, y: 680 }
      ].map((chip, i) => (
        <rect
          key={i}
          x={chip.x}
          y={chip.y}
          width="40"
          height="40"
          fill="none"
          stroke="#ff6b35"
          strokeWidth="2"
          rx="4"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </svg>
    
    <style>{`
      @keyframes circuit {
        0% { stroke-dasharray: 0, 1000; }
        50% { stroke-dasharray: 500, 500; }
        100% { stroke-dasharray: 1000, 0; }
      }
      .animate-circuit {
        animation: circuit 3s ease-in-out infinite;
      }
    `}</style>
  </div>
);

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/vikashkumar991', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vikash-kumar-singh-784146290', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vks200506@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:9915599590', label: 'Phone' },
  ];

  return (
    <footer className="relative bg-gray-900 py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>

      <TechCircuit />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Vikash Kumar Singh
                </span>
              </h3>
              <p className="text-gray-400 mb-4">
                DevOps & Backend Developer passionate about building scalable infrastructure 
                and automating complex systems.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-2 transform inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <p className="text-gray-400 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  vks200506@gmail.com
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 9915599590
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="p-3 bg-orange-500/20 rounded-full hover:bg-orange-500/30 transition-all duration-300 group border border-orange-500/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-orange-500/20 pt-8">
          {/* Hindi Goodbye Meme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-6"
          >
            <div className="glassmorphism p-6 rounded-2xl max-w-2xl mx-auto border border-orange-500/20">
              <h3 className="text-xl font-bold text-orange-300 mb-2">
                "Alvida dosto! Code karte raho, bugs se darte raho! 👨‍💻🔥"
              </h3>
              <p className="text-gray-400 text-sm italic">
                - Every developer's farewell message
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-gray-400 flex items-center justify-center gap-2 mb-2">
              Made with <Heart className="w-4 h-4 text-orange-500 animate-pulse" /> by Vikash
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 Vikash Kumar Singh. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;