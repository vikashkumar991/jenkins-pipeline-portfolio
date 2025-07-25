import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Zap, Code, Server, Terminal, Bot, Globe, Container, Cpu, Brain, Monitor, Play, Eye, Filter, Grid, List } from 'lucide-react';

const ProjectCard: React.FC<{ project: any; index: number; viewMode: 'grid' | 'list' }> = ({ 
  project, index, viewMode 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="glassmorphism p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start gap-6">
          {/* Project Icon */}
          <motion.div
            className={`p-4 rounded-xl bg-gradient-to-r ${project.color} flex-shrink-0`}
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <project.icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Project Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-2 ml-4">
                <motion.a
                  href={project.demo}
                  className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                {project.github && (
                  <motion.a
                    href={project.github}
                    className="p-2 bg-white/10 rounded-lg text-white hover:bg-orange-500/20 transition-all duration-300 border border-orange-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </div>
            
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string, techIndex: number) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1 bg-orange-500/20 rounded-full text-xs text-orange-300 border border-orange-500/30"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 107, 53, 0.3)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative glassmorphism rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Floating Icon */}
      <motion.div
        className="absolute top-4 right-4 z-10"
        animate={{ 
          y: isHovered ? -10 : 0,
          rotate: isHovered ? 360 : 0 
        }}
        transition={{ duration: 0.8 }}
      >
        <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} shadow-lg`}>
          <project.icon className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <motion.h3 
          className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors"
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-300 text-sm mb-4 leading-relaxed"
          animate={{ opacity: isHovered ? 0.8 : 1 }}
        >
          {project.description}
        </motion.p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string, techIndex: number) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 bg-orange-500/20 rounded-full text-xs text-orange-300 border border-orange-500/30"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 107, 53, 0.3)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <motion.div 
          className="flex gap-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={project.demo}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-4 h-4" />
            Demo
          </motion.a>
          {project.github && (
            <motion.a
              href={project.github}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm hover:bg-orange-500/20 transition-all duration-300 border border-orange-500/30 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Hover Effect Lines */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState('all');

  const allProjects = [
    {
      title: "Multi-tool AI Platform",
      description: "A comprehensive multi-tool platform with text generation, Dockerfile creation, remote Linux command execution, social media messaging, and remote Docker management.",
      tech: ["Python", "Streamlit", "Docker", "Gen-AI", "Linux"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_devops-ai-geminiai-activity-7345924663073492992-2Vk6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: "https://github.com/vikashkumar991/summer-intership-linux-world-2025/blob/main/GenAi-Prompt-MasterClass/streamlit_multitool.py",
      icon: Bot,
      color: "from-purple-500 to-pink-500",
      category: "ai"
    },
    {
      title: "Flask CI/CD Pipeline",
      description: "Automated CI/CD pipeline using Jenkins for Flask application deployment with Docker containerization and port mapping on RHEL9.",
      tech: ["Python", "Jenkins", "Docker", "Flask", "RHEL9"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_docker-flask-devops-activity-7348102565567336448-e5D5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: "https://github.com/vikashkumar991/jenkins-first-pipeline.git",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      category: "devops"
    },
    {
      title: "HTTPD Web Server",
      description: "Dockerized Apache HTTPD web server hosting a simple portfolio website with container orchestration on RHEL9.",
      tech: ["Docker", "HTTPD", "RHEL9", "Apache", "HTML/CSS"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_devops-docker-webserver-activity-7345564078792155137-2UYi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: null,
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      category: "web"
    },
    {
      title: "Docker-in-Docker (DinD)",
      description: "Python-based Docker management menu system running inside Docker containers with Docker-in-Docker capabilities for nested containerization.",
      tech: ["Docker", "Linux", "Python", "RHEL", "Container Management"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_docker-devops-python-activity-7345543468414353409-Sy4i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: null,
      icon: Container,
      color: "from-orange-500 to-red-500",
      category: "devops"
    },
    {
      title: "AI Code Generator",
      description: "Intelligent code generation tool powered by generative AI and Gradio interface for creating remaining code snippets and completing projects.",
      tech: ["Gen-AI", "Python", "Gradio", "LLM", "Prompt Engineering"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_genai-googlegemini-python-activity-7345405301245755392-bc5e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: "https://github.com/vikashkumar991/summer-intership-linux-world-2025/blob/main/GenAi-Prompt-MasterClass/code-editor.py",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      category: "ai"
    },
    {
      title: "AI Project Manager",
      description: "Smart project management tool providing AI-powered suggestions and advice for project planning and execution using generative AI.",
      tech: ["Python", "Gen-AI", "Gradio", "LLM", "Project Management"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_ai-gemini-python-activity-7345191774480408576-hJ2K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: "https://github.com/vikashkumar991/summer-intership-linux-world-2025/blob/main/GenAi-Prompt-MasterClass/Untitled.ipynb",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      category: "ai"
    },
    {
      title: "Remote Docker Manager",
      description: "Streamlit-based tool for remote Docker container management via SSH connections, providing full Docker lifecycle control from anywhere.",
      tech: ["Python", "SSH", "Docker", "Streamlit", "Remote Management"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_linuxworld-vimaldagasir-devops-activity-7345163489528659969-CXvE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: "https://github.com/vikashkumar991/summer-intership-linux-world-2025/blob/main/python-projects-all/docker_streamlit.py",
      icon: Monitor,
      color: "from-teal-500 to-blue-500",
      category: "devops"
    },
    {
      title: "Productivity Predictor",
      description: "Machine learning model for predicting productivity issues in office environments with real-time analysis and recommendations.",
      tech: ["Python", "Machine Learning", "Streamlit", "Data Analysis", "Predictive Modeling"],
      demo: "https://www.linkedin.com/posts/vikash-kumar-singh-784146290_machinelearning-streamlit-python-activity-7345183462372360192-YKe-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ__NQBUPzDFDFyMk0fmXMLcHOnSbPc6k0",
      github: "https://github.com/vikashkumar991/summer-intership-linux-world-2025/blob/main/python-projects-all/streamlit-job-productivity.py",
      icon: Cpu,
      color: "from-pink-500 to-rose-500",
      category: "ai"
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: allProjects.length },
    { id: 'ai', label: 'AI & ML', count: allProjects.filter(p => p.category === 'ai').length },
    { id: 'devops', label: 'DevOps', count: allProjects.filter(p => p.category === 'devops').length },
    { id: 'web', label: 'Web Dev', count: allProjects.filter(p => p.category === 'web').length },
  ];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technology and creative problem-solving
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  {category.label}
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                    {category.count}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-white/10 rounded-full p-1">
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full transition-all duration-300 ${
                viewMode === 'grid' ? 'bg-orange-500 text-white' : 'text-gray-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Grid className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-full transition-all duration-300 ${
                viewMode === 'list' ? 'bg-orange-500 text-white' : 'text-gray-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <List className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${viewMode}-${filter}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={
              viewMode === 'grid'
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }
          >
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${viewMode}`}
                project={project}
                index={index}
                viewMode={viewMode}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More/Show Less */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowMore(!showMore)}
              className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <span>{showMore ? 'Show Less' : 'Load More Projects'}</span>
                <motion.div
                  animate={{ rotate: showMore ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Eye className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Projects', value: allProjects.length, icon: Code },
            { label: 'Technologies', value: '15+', icon: Cpu },
            { label: 'Live Demos', value: allProjects.filter(p => p.demo !== '#').length, icon: Globe },
            { label: 'Open Source', value: allProjects.filter(p => p.github).length, icon: Github },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-6 rounded-2xl text-center border border-orange-500/20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;