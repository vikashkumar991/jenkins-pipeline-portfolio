import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, Database, Cloud, Container, 
  Code, Terminal, Cpu, Network,
  GitBranch, Shield, Zap, Settings,
  ChevronRight, Star, Award
} from 'lucide-react';

const TechMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    const characters = '01';
    const fontSize = 14;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      
      ctx.fillStyle = '#ff6b35';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    }
    
    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
    />
  );
};

const SkillOrb: React.FC<{ skill: any; index: number; isActive: boolean; onClick: () => void }> = ({ 
  skill, index, isActive, onClick 
}) => {
  return (
    <motion.div
      className={`relative cursor-pointer group ${isActive ? 'z-20' : 'z-10'}`}
      style={{
        position: 'absolute',
        left: `${20 + (index % 4) * 20}%`,
        top: `${20 + Math.floor(index / 4) * 25}%`,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Skill Orb */}
      <motion.div
        className={`w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden ${
          isActive ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-white/10'
        }`}
        animate={{
          boxShadow: isActive 
            ? ['0 0 20px rgba(255, 107, 53, 0.5)', '0 0 40px rgba(255, 107, 53, 0.8)', '0 0 20px rgba(255, 107, 53, 0.5)']
            : '0 0 10px rgba(255, 255, 255, 0.1)',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Animated Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-orange-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            background: `conic-gradient(from 0deg, transparent, rgba(255, 107, 53, 0.3), transparent)`,
          }}
        />
        
        {/* Skill Icon */}
        <skill.icon className={`w-8 h-8 z-10 ${isActive ? 'text-white' : 'text-orange-400'}`} />
        
        {/* Skill Level Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="#ff6b35"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 35}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 35 }}
            animate={{ 
              strokeDashoffset: isActive 
                ? 2 * Math.PI * 35 * (1 - skill.level / 100)
                : 2 * Math.PI * 35
            }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
        </svg>
      </motion.div>

      {/* Skill Name */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isActive ? 1 : 0.7, y: 0 }}
      >
        <span className={`text-sm font-medium ${isActive ? 'text-orange-300' : 'text-gray-400'}`}>
          {skill.name}
        </span>
      </motion.div>

      {/* Level Badge */}
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: isActive ? 1 : 0.8 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <span className="text-xs font-bold text-white">{skill.level}</span>
      </motion.div>

      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const skillCategories = [
    {
      title: "Web Development",
      icon: Server,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "PHP", level: 90, icon: Code, description: "Server-side scripting and web development" },
        { name: "Laravel", level: 88, icon: Code, description: "Modern PHP framework for web applications" },
        { name: "WordPress", level: 85, icon: Code, description: "CMS development and customization" },
        { name: "CodeIgniter", level: 82, icon: Zap, description: "Lightweight PHP framework" },
      ]
    },
    {
      title: "Programming & AI",
      icon: Container,
      color: "from-red-500 to-orange-500",
      skills: [
        { name: "Python", level: 90, icon: Code, description: "Versatile programming for automation and AI" },
        { name: "Gen-AI", level: 85, icon: Cpu, description: "Generative AI and machine learning models" },
        { name: "Streamlit", level: 88, icon: Network, description: "Rapid web app development for data science" },
        { name: "Machine Learning", level: 80, icon: Settings, description: "ML algorithms and model development" },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Docker", level: 88, icon: Container, description: "Containerization and orchestration" },
        { name: "Jenkins", level: 85, icon: GitBranch, description: "CI/CD pipeline automation" },
        { name: "Linux", level: 90, icon: Terminal, description: "System administration and scripting" },
        { name: "RHEL9", level: 82, icon: Cpu, description: "Enterprise Linux distribution" },
      ]
    },
    {
      title: "Database & Tools",
      icon: Shield,
      color: "from-orange-600 to-red-600",
      skills: [
        { name: "MySQL", level: 90, icon: Database, description: "Relational database management" },
        { name: "Git", level: 88, icon: GitBranch, description: "Version control and collaboration" },
        { name: "SSH", level: 85, icon: Terminal, description: "Secure remote server management" },
        { name: "REST APIs", level: 87, icon: Network, description: "API design and integration" },
      ]
    }
  ];

  const currentCategory = skillCategories[selectedCategory];
  const currentSkill = currentCategory.skills[activeSkill];

  return (
    <section id="skills" className="relative py-20 overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Tech Matrix Background */}
      <TechMatrix />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">
            Interactive skill constellation - Click to explore each technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Category Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-orange-400" />
              Categories
            </h3>
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setSelectedCategory(index);
                  setActiveSkill(0);
                }}
                className={`w-full p-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                  selectedCategory === index
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`p-2 rounded-lg ${
                  selectedCategory === index ? 'bg-white/20' : 'bg-orange-500/20'
                }`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{category.title}</span>
                <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${
                  selectedCategory === index ? 'rotate-90' : ''
                }`} />
              </motion.button>
            ))}
          </motion.div>

          {/* Skill Constellation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 glassmorphism rounded-2xl border border-orange-500/20"
          >
            <div className="absolute inset-4">
              {currentCategory.skills.map((skill, index) => (
                <SkillOrb
                  key={`${selectedCategory}-${index}`}
                  skill={skill}
                  index={index}
                  isActive={activeSkill === index}
                  onClick={() => setActiveSkill(index)}
                />
              ))}
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {currentCategory.skills.map((_, index) => {
                  if (index === currentCategory.skills.length - 1) return null;
                  const x1 = 20 + (index % 4) * 20;
                  const y1 = 20 + Math.floor(index / 4) * 25;
                  const x2 = 20 + ((index + 1) % 4) * 20;
                  const y2 = 20 + Math.floor((index + 1) / 4) * 25;
                  
                  return (
                    <motion.line
                      key={index}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="rgba(255, 107, 53, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>

          {/* Skill Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${activeSkill}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glassmorphism p-6 rounded-2xl border border-orange-500/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${currentCategory.color}`}>
                    <currentSkill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">{currentSkill.name}</h4>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(currentSkill.level / 20)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                      <span className="text-orange-400 font-bold ml-2">{currentSkill.level}%</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {currentSkill.description}
                </p>
                
                {/* Animated Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Proficiency</span>
                    <span className="text-orange-400">{currentSkill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${currentCategory.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={{ width: `${currentSkill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30 rounded-full"
                        animate={{ x: [-100, 300] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glassmorphism p-4 rounded-xl border border-orange-500/20 text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  {currentCategory.skills.length}
                </div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="glassmorphism p-4 rounded-xl border border-orange-500/20 text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  {Math.round(currentCategory.skills.reduce((acc, skill) => acc + skill.level, 0) / currentCategory.skills.length)}%
                </div>
                <div className="text-sm text-gray-400">Avg. Level</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;