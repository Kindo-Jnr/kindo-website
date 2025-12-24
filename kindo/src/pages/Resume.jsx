import PageTransition from '@components/PageTransition'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Footer from "../components/Footer";
import { 
  Code2, Palette, Cpu, Layers, Database, Smartphone,
  Briefcase, GraduationCap, Award, Settings, 
  Mail, Download, MapPin, ChevronRight,
  Globe, Shield, Zap, GitBranch, Terminal, Users,
  Monitor, Smartphone as PhoneIcon, Rocket, Server
} from 'lucide-react'

export default function Resume() {
  const [activeSection, setActiveSection] = useState('services')

  const sections = [
    { id: 'services', icon: Monitor, title: 'Services', description: 'Web development services offered' },
    { id: 'experience', icon: Briefcase, title: 'Experience', description: 'Development work history' },
    { id: 'skills', icon: Settings, title: 'Skills', description: 'Technical & Professional expertise' },
    { id: 'education', icon: GraduationCap, title: 'Education', description: 'Technical background' },
    { id: 'certifications', icon: Award, title: 'Certifications', description: 'Technical credentials' }
  ]

  const services = [
    {
      name: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces with React, Next.js, and modern JavaScript',
      icon: Monitor,
      color: '#3B82F6',
      features: ['React/Next.js Applications', 'Interactive UI Components', 'State Management', 'API Integration']
    },
    {
      name: 'Responsive Web Design',
      description: 'Creating beautiful, mobile-first designs that work flawlessly across all devices',
      icon: PhoneIcon,
      color: '#8B5CF6',
      features: ['Mobile-First Design', 'Cross-Browser Compatibility', 'Performance Optimization', 'Accessibility']
    },
    {
      name: 'UI/UX Implementation',
      description: 'Translating design prototypes into functional, user-friendly web interfaces',
      icon: Palette,
      color: '#EC4899',
      features: ['Design to Code', 'Animation & Interactions', 'User Experience', 'Design Systems']
    },
    {
      name: 'Performance Optimization',
      description: 'Optimizing websites for speed, SEO, and optimal user experience',
      icon: Rocket,
      color: '#10B981',
      features: ['Lighthouse Optimization', 'SEO Best Practices', 'Bundle Size Reduction', 'Caching Strategies']
    },
    {
      name: 'Full-Stack Development',
      description: 'Building complete web applications with frontend and backend integration',
      icon: Server,
      color: '#F59E0B',
      features: ['API Development', 'Database Integration', 'Authentication Systems', 'Deployment']
    }
  ]

  const technicalSkills = [
    { name: 'React', level: 70, color: '#3a59d1', icon: Code2 },
    { name: 'JavaScript', level: 73, color: '#3d90d7', icon: Cpu },
    { name: 'Tailwind CSS', level: 88, color: '#4ecdc4', icon: Palette },
    { name: 'UI/UX Design', level: 85, color: '#bf9264', icon: Layers },
    { name: 'Responsive Design', level: 92, color: '#4ECDC4', icon: Smartphone },
    { name: 'Git & DevOps', level: 80, color: '#F1502F', icon: GitBranch },
    { name: 'Performance', level: 87, color: '#9B59B6', icon: Zap },
    { name: 'Accessibility', level: 82, color: '#3498DB', icon: Shield },
  ]

  const professionalSkills = [
    { name: 'Problem Solving', level: 94 },
    { name: 'Communication', level: 88 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Project Management', level: 85 },
    { name: 'Adaptability', level: 92 },
    { name: 'Attention to Detail', level: 96 },
  ]

  const experiences = [
    {
      company: 'Freelance Web Developer',
      role: 'Frontend Developer',
      period: '2024 - Present',
      location: 'Remote',
      type: 'Contract',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      highlights: [
        'Built responsive web applications with modern React ecosystem',
        'Implemented complex animations and interactive UI components',
        'Optimized website performance and accessibility standards',
        'Collaborated with clients to translate requirements into technical solutions'
      ]
    },
    {
      company: 'Personal Projects',
      role: 'Full-Stack Developer',
      period: '2023 - Present',
      location: 'Remote',
      type: 'Self-Learning',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase'],
      highlights: [
        'Developed portfolio websites with modern design patterns',
        'Built full-stack applications with authentication and databases',
        'Implemented responsive designs across all device sizes',
        'Mastered modern frontend development tools and workflows'
      ]
    }
  ]

  const education = [
    {
      institution: 'Self-Taught Developer',
      degree: 'Frontend Development',
      period: '2023 - Present',
      description: 'Continuous learning through online courses, documentation, and practical projects'
    },
    {
      institution: 'YouTube & Online Platforms',
      degree: 'Web Technologies',
      period: 'Ongoing',
      description: 'Learning React, JavaScript, CSS, and modern web development tools'
    }
  ]

  const certifications = [
    {
      issuer: 'FreeCodeCamp',
      name: 'Responsive Web Design',
      issued: '2024',
      link: 'https://freecodecamp.org'
    },
    {
      issuer: 'YouTube Learning',
      name: 'React & Modern JavaScript',
      issued: 'Ongoing',
      link: '#'
    }
  ]

  return (
   
      <main
        data-scroll-section
        className="min-h-screen flex flex-col justify-between -mt-24"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}
      >
        {/* Background Image with Theme Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(var(--bg-gradient), var(--bg-gradient)), url('/images/kindo-profile 2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            opacity: 0.7,
          }}
        />

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 py-20 mt-15">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left: Navigation Links */}
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-32">
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h1 className="text-3xl lg:text-4xl font-bold mb-3">
                    My <span className="text-blue-500">Expertise</span>
                  </h1>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mb-4"></div>
                  <p className="text-sm leading-relaxed opacity-80">
                    Frontend developer specializing in React, Next.js, and modern web technologies. Building fast, accessible, and beautiful web experiences.
                  </p>
                </motion.div>

                {/* Navigation Links */}
                <div className="space-y-3 mb-8">
                  {sections.map((section, index) => {
                    const Icon = section.icon
                    return (
                      <motion.button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-300 cursor-pointer backdrop-blur-sm border ${
                          activeSection === section.id
                            ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-blue-500/30 shadow-lg'
                            : 'border-gray-200/30 dark:border-gray-700/30 hover:bg-white/5 dark:hover:bg-black/5'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <div className={`p-2.5 rounded-lg ${
                          activeSection === section.id 
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                            : 'bg-gray-100/50 dark:bg-gray-800/50'
                        }`}>
                          <Icon size={18} />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{section.title}</div>
                          <div className="text-xs opacity-70 mt-0.5">{section.description}</div>
                        </div>
                        <ChevronRight size={16} className={`transition-transform duration-300 ${
                          activeSection === section.id ? 'translate-x-1' : 'opacity-50'
                        }`} />
                      </motion.button>
                    )
                  })}
                </div>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <motion.a
                    href="/contact"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail size={16} />
                    <span>Contact Me</span>
                  </motion.a>
                  
                  <motion.a
                    href="/resume.pdf"
                    download
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm border backdrop-blur-sm"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border-color)",
                    }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={16} />
                    <span>Resume</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Content Section */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Services Section - NEW FIRST SECTION */}
              {activeSection === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="space-y-6">
                    {/* Services Header */}
                    <div className="rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-sm border"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                          <Monitor size={24} className="text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl lg:text-2xl font-bold">Web Development Services</h2>
                          <p className="text-sm opacity-70 mt-1">Professional services I offer to bring your ideas to life</p>
                        </div>
                      </div>

                      <p className="text-sm opacity-80 mb-6">
                        I specialize in creating modern, performant web applications using cutting-edge technologies. 
                        From concept to deployment, I ensure your project meets the highest standards of quality and user experience.
                      </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                          <motion.div
                            key={service.name}
                            className="rounded-2xl p-6 shadow-xl backdrop-blur-sm group hover:shadow-2xl transition-all duration-300"
                            style={{
                              backgroundColor: "var(--card-bg)",
                     
                             
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                          >
                            <div className="flex items-start gap-4 mb-4">
                              <div className="p-3 rounded-xl" style={{ backgroundColor: `${service.color}20` }}>
                                <Icon size={24} style={{ color: service.color }} />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                                <p className="text-sm opacity-80">{service.description}</p>
                              </div>
                            </div>

                            {/* Service Features */}
                            <div className="space-y-2">
                              {service.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: service.color }}></div>
                                  <span className="text-sm opacity-90">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* Service CTA */}
                            <motion.div
                              className="mt-6 pt-4 border-t"
                              style={{ borderColor: "var(--border-color)" }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 + index * 0.1 }}
                            >
                              <motion.a
                                href="/contact"
                                className="inline-flex items-center gap-1 text-sm font-medium"
                                style={{ color: service.color }}
                                whileHover={{ x: 5 }}
                              >
                                Discuss this service <ChevronRight size={14} />
                              </motion.a>
                            </motion.div>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Services Availability */}
                    <div className="rounded-2xl p-6 shadow-xl backdrop-blur-sm border"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-500 mb-2">Flexible</div>
                          <div className="text-sm opacity-80">Project-based or hourly rates</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-500 mb-2">Remote</div>
                          <div className="text-sm opacity-80">Available worldwide</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-500 mb-2">24h Response</div>
                          <div className="text-sm opacity-80">Quick project discussions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Experience Section */}
              {activeSection === 'experience' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-sm border"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
                        <Briefcase size={24} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold">Experience</h2>
                        <p className="text-sm opacity-70 mt-1">Web development journey & professional work</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {experiences.map((exp, index) => (
                        <motion.div
                          key={index}
                          className="rounded-xl p-5 border group hover:shadow-lg transition-all duration-300"
                          style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                          }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                                <h3 className="font-bold text-lg">{exp.role}</h3>
                              </div>
                              <p className="text-blue-500 dark:text-blue-400 font-medium">{exp.company}</p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-600 dark:text-purple-400">
                                {exp.period}
                              </span>
                              <span className="px-3 py-1 text-xs rounded-full border"
                                style={{
                                  backgroundColor: "var(--card-bg)",
                                  borderColor: "var(--border-color)",
                                }}
                              >
                                {exp.type}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm opacity-80 mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 text-xs rounded-lg border backdrop-blur-sm"
                                style={{
                                  backgroundColor: "var(--card-bg)",
                                  borderColor: "var(--border-color)",
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start gap-2 text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 mt-1.5 flex-shrink-0"></div>
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Skills Section */}
              {activeSection === 'skills' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="space-y-8">
                    {/* Technical Skills with Pie Charts */}
                    <div className="rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-sm border"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                          <Code2 size={24} className="text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl lg:text-2xl font-bold">Technical Skills</h2>
                          <p className="text-sm opacity-70 mt-1">Frontend technologies & frameworks expertise</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
                          {technicalSkills.slice(0, 4).map((skill, index) => {
                            const Icon = skill.icon
                            return (
                              <motion.div
                                key={skill.name}
                                className="relative group"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <div className="relative w-20 h-20 mx-auto mb-3">
                                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                    <circle cx="18" cy="18" r="16" fill="none" 
                                      className="opacity-20"
                                      style={{ stroke: skill.color }}
                                      strokeWidth="2"
                                    />
                                    <motion.circle
                                      cx="18" cy="18" r="16" fill="none"
                                      style={{ stroke: skill.color }}
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      initial={{ strokeDasharray: '0 100' }}
                                      animate={{ strokeDasharray: `${skill.level} 100` }}
                                      transition={{ duration: 1.5, delay: index * 0.1 }}
                                    />
                                  </svg>
                                  
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="p-2.5 rounded-full backdrop-blur-sm"
                                      style={{ backgroundColor: `${skill.color}20` }}
                                    >
                                      <Icon size={20} style={{ color: skill.color }} />
                                    </div>
                                  </div>
                                  
                                  <div className="absolute mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md text-xs font-bold"
                                    style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                                  >
                                    {skill.level}%
                                  </div>
                                </div>
                                
                                <div className="text-center mt-9">
                                  <h3 className="text-sm font-semibold">{skill.name}</h3>
                                  
                                </div>
                              </motion.div>
                            )
                          })}
                        </div>

                        <div className="space-y-4">
                          {technicalSkills.slice(4).map((skill, index) => {
                            const Icon = skill.icon
                            return (
                              <motion.div
                                key={skill.name}
                                className="flex items-center justify-between p-3 rounded-xl backdrop-blur-sm border"
                                style={{
                                  backgroundColor: "var(--card-bg)",
                                  borderColor: "var(--border-color)",
                                }}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${skill.color}20` }}>
                                    <Icon size={18} style={{ color: skill.color }} />
                                  </div>
                                  <span className="font-medium text-sm">{skill.name}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="w-20 h-2 rounded-full overflow-hidden bg-gray-200/30 dark:bg-gray-700/30">
                                    <motion.div 
                                      className="h-full rounded-full"
                                      style={{ backgroundColor: skill.color }}
                                      initial={{ width: 0 }}
                                      animate={{ width: `${skill.level}%` }}
                                      transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                                    />
                                  </div>
                                  <span className="text-sm font-bold w-10 text-right" style={{ color: skill.color }}>
                                    {skill.level}%
                                  </span>
                                </div>
                              </motion.div>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Professional Skills */}
                    <div className="rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-sm border"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600">
                          <Users size={24} className="text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl lg:text-2xl font-bold">Professional Skills</h2>
                          <p className="text-sm opacity-70 mt-1">Soft skills & professional competencies</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {professionalSkills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            className="p-4 rounded-xl backdrop-blur-sm border group hover:shadow-lg transition-all duration-300"
                            style={{
                              backgroundColor: "var(--card-bg)",
                              borderColor: "var(--border-color)",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            whileHover={{ scale: 1.03, y: -3 }}
                          >
                            <div className="flex justify-between items-start mb-3">
                              <h3 className="font-semibold text-sm">{skill.name}</h3>
                              <span className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-600 dark:text-green-400">
                                {skill.level}%
                              </span>
                            </div>
                            
                            <div className="relative h-2 rounded-full overflow-hidden bg-gray-200/30 dark:bg-gray-700/30">
                              <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                              />
                            </div>
                            
                            <div className="flex justify-between mt-3">
                              {[0, 25, 50, 75, 100].map((percent) => (
                                <div key={percent} className="flex flex-col items-center">
                                  <div className={`w-1 h-1 rounded-full ${
                                    skill.level >= percent ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'
                                  }`} />
                                  <span className="text-[10px] opacity-50 mt-1">{percent}%</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Education Section */}
              {activeSection === 'education' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-sm border"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600">
                        <GraduationCap size={24} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold">Education</h2>
                        <p className="text-sm opacity-70 mt-1">Technical learning & skill development</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <motion.div
                          key={index}
                          className="rounded-xl p-5 border group hover:shadow-lg transition-all duration-300"
                          style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                          }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500/20 to-indigo-600/20">
                              <GraduationCap size={20} className="text-indigo-500" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-lg mb-1">{edu.institution}</h3>
                              <p className="text-indigo-500 dark:text-indigo-400 font-medium mb-2">{edu.degree}</p>
                              <p className="text-sm opacity-70 mb-2">{edu.period}</p>
                              <p className="text-sm opacity-90">{edu.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Certifications Section */}
              {activeSection === 'certifications' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-sm border"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600">
                        <Award size={24} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold">Certifications</h2>
                        <p className="text-sm opacity-70 mt-1">Technical credentials & online learning</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          className="rounded-xl p-5 border group hover:shadow-lg transition-all duration-300"
                          style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                          }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ scale: 1.03, y: -3 }}
                        >
                          <div className="flex items-start gap-4 mb-3">
                            <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500/20 to-pink-600/20">
                              <Award size={20} className="text-pink-500" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg mb-1">{cert.issuer}</h3>
                              <p className="text-pink-500 dark:text-pink-400 font-medium">{cert.name}</p>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm opacity-70">Issued {cert.issued}</span>
                            <motion.a
                              href={cert.link}
                              className="text-sm text-blue-500 hover:text-blue-600 font-medium flex items-center gap-1"
                              whileHover={{ x: 5 }}
                            >
                              View <ChevronRight size={14} />
                            </motion.a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
        {/* Footer Section */}
              <Footer />
      </main>
  
  )
}