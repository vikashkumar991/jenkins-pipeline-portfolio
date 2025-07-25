import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';

const MapEffect: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    {/* Map Grid Lines */}
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
      {/* Horizontal Lines */}
      {[...Array(20)].map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 50}
          x2="1000"
          y2={i * 50}
          stroke="#ff6b35"
          strokeWidth="1"
          strokeDasharray="5,5"
          opacity="0.3"
        />
      ))}
      {/* Vertical Lines */}
      {[...Array(20)].map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 50}
          y1="0"
          x2={i * 50}
          y2="1000"
          stroke="#ff8c42"
          strokeWidth="1"
          strokeDasharray="5,5"
          opacity="0.3"
        />
      ))}
      {/* Map Markers */}
      {[...Array(8)].map((_, i) => (
        <circle
          key={`marker-${i}`}
          cx={100 + i * 120}
          cy={200 + (i % 3) * 200}
          r="8"
          fill="#ff6b35"
          opacity="0.6"
          className="animate-pulse"
        />
      ))}
    </svg>
    
    {/* Animated Map Paths */}
    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000">
      <path
        d="M100,200 Q300,100 500,200 T900,300"
        stroke="#ff6b35"
        strokeWidth="3"
        fill="none"
        strokeDasharray="10,5"
        className="animate-map-path"
      />
      <path
        d="M200,400 Q400,300 600,400 T800,500"
        stroke="#ff8c42"
        strokeWidth="3"
        fill="none"
        strokeDasharray="10,5"
        className="animate-map-path"
        style={{ animationDelay: '1s' }}
      />
    </svg>
    
    <style>{`
      @keyframes map-path {
        0% { stroke-dashoffset: 100; }
        100% { stroke-dashoffset: 0; }
      }
      .animate-map-path {
        animation: map-path 4s linear infinite;
      }
    `}</style>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "WordPress Developer",
      company: "Avaptech Solutions",
      location: "Mohali, India",
      period: "2023 - 2024",
      responsibilities: [
        "Developed custom WordPress themes and plugins for client websites",
        "Optimized website performance and implemented SEO best practices",
        "Collaborated with design team to create responsive web solutions",
        "Maintained and updated existing WordPress installations"
      ],
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS"]
    },
    {
      title: "Backend Developer",
      company: "TCA Company",
      location: "Ludhiana, India",
      period: "2022 - 2023",
      responsibilities: [
        "Built robust backend systems using PHP and Laravel framework",
        "Developed RESTful APIs and integrated third-party services",
        "Implemented CodeIgniter framework for rapid development",
        "Optimized database queries and improved application performance"
      ],
      technologies: ["PHP", "Laravel", "CodeIgniter", "MySQL", "REST APIs"]
    },
    {
      title: "Backend Developer",
      company: "Duke Infosys",
      location: "Chandigarh Sector 45, India",
      period: "2021 - 2022",
      responsibilities: [
        "Specialized in Laravel framework development and architecture",
        "Created scalable web applications with clean code practices",
        "Implemented authentication and authorization systems",
        "Collaborated with frontend team for seamless integration"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Git", "MVC Architecture"]
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>
      
      <MapEffect />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Building robust systems and scaling infrastructure across diverse environments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-500 to-red-500"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    className="glassmorphism p-6 rounded-2xl hover:scale-105 transition-all duration-300 border border-orange-500/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-500/20 rounded-full">
                        <Briefcase className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-orange-300 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4 text-gray-300 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-300 text-sm flex items-start gap-2">
                          <Award className="w-3 h-3 text-orange-400 mt-1 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-orange-500/20 rounded-full text-xs text-orange-300 hover:bg-orange-500/30 transition-colors border border-orange-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;