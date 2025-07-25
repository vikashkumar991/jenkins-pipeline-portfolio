import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Coffee } from 'lucide-react';
import { FaDocker, FaAws } from 'react-icons/fa';
import { SiKubernetes, SiJenkins, SiTerraform } from 'react-icons/si';

const devOpsIcons = [
  { icon: FaDocker, color: '#ff6b35', label: 'Docker' },
  { icon: SiKubernetes, color: '#ff8c42', label: 'Kubernetes' },
  { icon: FaAws, color: '#ffa726', label: 'AWS' },
  { icon: SiJenkins, color: '#ff7043', label: 'Jenkins' },
  { icon: SiTerraform, color: '#ff5722', label: 'Terraform' },
];

const PipelineEffect: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    {/* Horizontal Pipeline */}
    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 animate-pulse"></div>
    </div>
    
    {/* Vertical Pipeline */}
    <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-30">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-red-500 animate-pulse"></div>
    </div>
    
    {/* Pipeline Nodes */}
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute w-4 h-4 bg-orange-500 rounded-full animate-pulse"
        style={{
          left: `${20 + i * 12}%`,
          top: '50%',
          transform: 'translateY(-50%)',
          animationDelay: `${i * 0.3}s`,
        }}
      />
    ))}
  </div>
);

const OrbitDevOps: React.FC = () => (
  <div className="relative w-80 h-80 mx-auto mb-8">
    {/* Orbit Circles */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      <circle 
        cx="160" 
        cy="160" 
        r="120" 
        fill="none" 
        stroke="#ff6b35" 
        strokeDasharray="4 8" 
        strokeWidth="2" 
        opacity="0.6"
      />
      <circle 
        cx="160" 
        cy="160" 
        r="90" 
        fill="none" 
        stroke="#ff8c42" 
        strokeDasharray="2 6" 
        strokeWidth="1" 
        opacity="0.4"
      />
    </svg>
    
    {/* Orbiting Icons */}
    <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
      {devOpsIcons.map((item, i) => {
        const angle = (2 * Math.PI * i) / devOpsIcons.length;
        const radius = 120;
        const x = 160 + radius * Math.cos(angle) - 16;
        const y = 160 + radius * Math.sin(angle) - 16;
        return (
          <span
            key={item.label}
            className="absolute animate-orbit"
            style={{
              left: x,
              top: y,
              animationDelay: `${i * 0.5}s`,
              width: 32,
              height: 32,
            }}
          >
            <item.icon size={32} color={item.color} title={item.label} />
          </span>
        );
      })}
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateY(0); }
          100% { transform: rotate(360deg) translateY(0); }
        }
        .animate-orbit {
          animation: orbit 10s linear infinite;
          transform-origin: 0 0;
        }
      `}</style>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>

      {/* Pipeline Effect */}
      <PipelineEffect />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar/Image with DevOps Orbit */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="relative w-80 h-80 mx-auto mb-8">
              <OrbitDevOps />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-1 animate-pulse">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                  <User className="w-32 h-32 text-orange-400" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <Coffee className="w-8 h-8 text-black" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glassmorphism p-8 rounded-2xl border border-orange-500/20"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-orange-400" />
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a passionate DevOps and Backend Developer with a strong foundation in automation, 
                cloud infrastructure, and scalable backend systems. My expertise lies in bridging the 
                gap between development and operations, creating seamless CI/CD pipelines and robust 
                backend architectures.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                With extensive experience in containerization, orchestration, and cloud platforms, 
                I specialize in building resilient, scalable, and efficient infrastructure solutions. 
                I believe in automation-first approaches and love solving complex problems with elegant solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-orange-500/20 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="text-orange-300 font-semibold mb-2">Focus Areas</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• DevOps & CI/CD</li>
                    <li>• Backend Development</li>
                    <li>• Cloud Infrastructure</li>
                  </ul>
                </div>
                <div className="bg-red-500/20 p-4 rounded-lg border border-red-500/30">
                  <h4 className="text-red-300 font-semibold mb-2">Passion</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Automation</li>
                    <li>• Problem Solving</li>
                    <li>• Innovation</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;