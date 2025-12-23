import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  Code,
  Globe,
  Briefcase,
  Play,
  Pause,
  Clock,
  Github,
  Figma,
  Database,
  Server,
  Smartphone,
  Cpu,
  Layout,
  Zap,
  Terminal,
  Palette,
  Layers,
  Shield,
  Cloud,
  Smartphone as PhoneIcon,
  GitBranch,
  Database as DbIcon,
  Settings,
  Wifi,
} from "lucide-react";
import Footer from "@components/Footer";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [techScrollPosition, setTechScrollPosition] = useState(0);
  const progressInterval = useRef(null);
  const techScrollInterval = useRef(null);

  const projects = [
    {
      number: "01",
      title: "GTCCU Website",
      technologies: "React, Tailwind CSS, JavaScript",
      period: "2023",
      description:
        "GTCCU is committed to empowering our members through innovative financial solutions.",
      fullDescription:
        "Developed a modern, responsive website for Ghana Teacher Co-operative Credit Union using React and Tailwind CSS. The platform showcases their decades of trusted service, featuring tailored savings plans, affordable loans, and financial growth solutions that foster security and prosperity for members.",
      image: "/images/gtccu3.png",
      links: [
        { name: "Live Website", url: "#" },
        { name: "GitHub", url: "#" },
      ],
      features: "Responsive design, member portal integration, loan calculator",
      icons: [Github, Figma],
      accentColor: "#3b82f6",
    },
    {
      number: "02",
      title: "FEEM Website",
      technologies: "React, Tailwind CSS",
      period: "2023",
      description:
        "Advancing Empowerment For Women & Girls through digital presence.",
      fullDescription:
        "Built a dynamic website for Female Empowerment Initiative (FEEM) to amplify their mission of causing positive impact through women empowerment. The platform highlights their educational programs, community initiatives, and advocacy work for both young and old women in society.",
      image: "/images/feem3.png",
      links: [
        { name: "View Project", url: "#" },
        { name: "Case Study", url: "#" },
      ],
      features:
        "Event calendar, donation system, blog platform, user management",
      icons: [Github, Database],
      accentColor: "#8b5cf6",
    },
    {
      number: "03",
      title: "ZongoVation Capital Website",
      technologies: "React, Tailwind CSS, Framer Motion",
      period: "2023",
      description:
        "Islamic finance and investment advisory firm unlocking Africa's infrastructure potential.",
      fullDescription:
        "Created a sophisticated website for ZongoVation Capital Ltd., showcasing their Shariah-compliant, asset-backed financing solutions. The platform connects ethical capital from GCC, Asia, and Africa to sustainable projects through Sukuk (Islamic bonds) and impact investment vehicles.",
      image: "/images/zongo.png",
      links: [
        { name: "Visit Site", url: "#" },
        { name: "Demo", url: "#" },
      ],
      features:
        "Interactive investment tools, multilingual support, animated charts, real-time data",
      icons: [Github, Server],
      accentColor: "#10b981",
    },
    {
      number: "04",
      title: "LegalScholar AI Agent",
      technologies: "React, AI Integration, Tailwind CSS",
      period: "2022",
      description:
        "My first React project - Transforming legal research with AI.",
      fullDescription:
        "Developed an AI-powered legal research assistant platform that helps legal professionals access case law, statutes, and legal precedents efficiently. This project marked my introduction to React development and modern web technologies.",
      image: "/images/legal.png",
      links: [
        { name: "Demo", url: "#" },
        { name: "GitHub", url: "#" },
      ],
      features:
        "AI chat interface, legal database integration, document analysis, search algorithms",
      icons: [Github, Database],
      accentColor: "#857866ff",
    },
    {
      number: "05",
      title: "Digital Madrasah Platform",
      technologies: "React, Firebase, Tailwind CSS",
      period: "2023",
      description: "Bringing Islamic learning into the digital age.",
      fullDescription:
        "Built an educational platform that combines authentic Islamic teachings with modern educational technology. Digital Madrasah offers courses, live classes, and learning resources for students of all ages seeking traditional Islamic knowledge through digital means.",
      image: "/images/digi.png",
      links: [
        { name: "Platform", url: "#" },
        { name: "Documentation", url: "#" },
      ],
      features:
        "Live classes, course management, progress tracking, payment integration, video streaming",
      icons: [Github, Smartphone],
      accentColor: "#0c9f66ff",
    },
    {
      number: "06",
      title: "AboveAbility Healthcare",
      technologies: "HTML, CSS, Bootstrap, JavaScript",
      period: "2022",
      description: "My first multipage website with admin dashboard.",
      fullDescription:
        "Developed a comprehensive healthcare services website with full admin dashboard for Above Ability Health Services. The platform showcases their commitment to providing the finest care and maintaining highest standards of integrity in client service.",
      image: "/images/above.png",
      links: [
        { name: "Website", url: "#" },
        { name: "Admin Demo", url: "#" },
      ],
      features:
        "Admin dashboard, appointment system, service catalog, client portal, analytics",
      icons: [Github, Database],
      accentColor: "#06b6d4",
    },
    {
      number: "07",
      title: "Larry Group Companies",
      technologies: "HTML, CSS, JavaScript",
      period: "2022",
      description: "My first production website for a business client.",
      fullDescription:
        "Created a basic but professional website for Larry Group of Companies, showcasing their diverse operations across three unique sectors. This project focused on clean design, clear messaging, and establishing their brand as a dynamic enterprise rooted in quality and sustainability.",
      image: "/images/larry.png",
      links: [
        { name: "Live Site", url: "#" },
        { name: "Design Files", url: "#" },
      ],
      features:
        "Multi-page navigation, service showcase, contact forms, gallery, testimonials",
      icons: [Github, Figma],
      accentColor: "#8b5cf6",
    },
    {
      number: "08",
      title: "Qwenz.io Crypto Platform",
      technologies: "React, Advanced Features, API Integration",
      period: "2024",
      description: "Crypto trading made simple with advanced features.",
      fullDescription:
        "Developed a cryptocurrency trading platform that makes buying, selling, sending, and receiving crypto assets like Bitcoin, Ethereum, USDT, and Tron easy and secure. The platform offers 24/7 transactions with transparent fees and user-friendly interface.",
      image: "/images/qwenz.png",
      links: [
        { name: "Platform", url: "#" },
        { name: "API Docs", url: "#" },
      ],
      features:
        "Real-time trading, secure transactions, crypto wallet, transaction history, charts",
      icons: [Github, Server],
      accentColor: "#627e74ff",
    },
  ];

  const workExperience = [
    {
      number: "01",
      title: "Frontend Web Developer",
      organization: "Namibra Inc.",
      period: "2024 - Present",
      category: "Full-time - Remote",
      description:
        "Leading digital agency empowering businesses through innovative digital solutions.",
      fullDescription:
        "Working as a Frontend Web Developer at Namibra, specializing in mobile and web development. Collaborating closely with clients to transform technology from a barrier into a catalyst for growth, delivering tailored solutions that drive operational efficiency and long-term success across various digital domains including AI, blockchain, BI, and cybersecurity.",
      image: "/images/namibra.webp",
      links: [
        { name: "Company Website", url: "https://namibra.com" },
        { name: "Portfolio", url: "#" },
      ],
      technologies: "React, Next.js, TypeScript, Tailwind CSS, AI Integration",
      role: "Developing custom software solutions, implementing responsive designs, collaborating with cross-functional teams, code reviews, performance optimization",
      icons: [Github, Server, Smartphone],
      accentColor: "#3b82f6",
    },
    {
      number: "02",
      title: "Web Developer & IT Team Member",
      organization: "Paahibu Space",
      period: "2024 - Present",
      category: "Part-time",
      description:
        "Tech and entrepreneurship development organization focusing on women-led businesses.",
      fullDescription:
        "Part of the IT team at Paahibu Space, providing digital solutions to small businesses and nonprofits led by women. Contributing to educating and empowering the next generation of African female leaders in technology, innovation, and entrepreneurship by equipping them with digital skills to transform community challenges into opportunities in an evolving digital world.",
      image: "/images/paahibu.jpg",
      links: [
        { name: "Organization Site", url: "#" },
        { name: "Initiatives", url: "#" },
      ],
      technologies:
        "Web Development, Digital Solutions, Tech Education, Entrepreneurship, Mentoring",
      role: "Developing web solutions, tech education, mentoring, supporting women-led businesses, workshops, documentation",
      icons: [Github, Database, Smartphone],
      accentColor: "#8b5cf6",
    },
  ];

  const currentItems = activeTab === "projects" ? projects : workExperience;
  const currentItem = currentItems[currentIndex];

  // Technology icons for the sliding section
  const techIcons = [
    { icon: ReactIcon, name: "React", color: "#61DAFB" },
    { icon: Terminal, name: "JS", color: "#F7DF1E" },
    { icon: Cpu, name: "TS", color: "#3178C6" },
    { icon: Layout, name: "Next", color: "#000000" },
    { icon: Zap, name: "Vite", color: "#646CFF" },
    { icon: Palette, name: "Tailwind", color: "#38B2AC" },
    { icon: Layers, name: "Framer", color: "#0055FF" },
    { icon: Shield, name: "Node", color: "#339933" },
    { icon: Cloud, name: "Firebase", color: "#FFCA28" },
    { icon: PhoneIcon, name: "Mobile", color: "#34D399" },
    { icon: GitBranch, name: "Git", color: "#F05032" },
    { icon: DbIcon, name: "MongoDB", color: "#47A248" },
    { icon: Settings, name: "Webpack", color: "#8DD6F9" },
    { icon: Wifi, name: "API", color: "#FF6B6B" },
    { icon: Database, name: "SQL", color: "#4479A1" },
    { icon: Server, name: "Express", color: "#000000" },
    { icon: Smartphone, name: "PWA", color: "#5A0FC8" },
    { icon: Figma, name: "Figma", color: "#F24E1E" },
    { icon: Github, name: "GitHub", color: "#181717" },
    { icon: Globe, name: "Hosting", color: "#4285F4" },
  ];

  // Custom React Icon component
  function ReactIcon(props) {
    return (
      <svg {...props} viewBox="0 0 40 40" fill="currentColor">
        <circle cx="20" cy="20" r="4" fill="#61DAFB" />
        <ellipse
          cx="20"
          cy="20"
          rx="12"
          ry="4"
          stroke="#61DAFB"
          strokeWidth="2"
          fill="none"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="12"
          ry="4"
          stroke="#61DAFB"
          strokeWidth="2"
          fill="none"
          transform="rotate(60 20 20)"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="12"
          ry="4"
          stroke="#61DAFB"
          strokeWidth="2"
          fill="none"
          transform="rotate(120 20 20)"
        />
      </svg>
    );
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextItem();
            return 0;
          }
          return prev + 100 / 20; // 20 seconds total
        });
      }, 1000);
    } else {
      clearInterval(progressInterval.current);
    }

    return () => clearInterval(progressInterval.current);
  }, [isAutoPlaying, currentIndex]);

  // Technology scroll animation
  useEffect(() => {
    techScrollInterval.current = setInterval(() => {
      setTechScrollPosition((prev) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(techScrollInterval.current);
  }, []);

  const nextItem = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % currentItems.length);
  };

  const prevItem = () => {
    setProgress(0);
    setCurrentIndex(
      (prev) => (prev - 1 + currentItems.length) % currentItems.length
    );
  };

  const switchTab = (tab) => {
    setProgress(0);
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  // Calculate scroll offset for tech icons
  const scrollOffset = -techScrollPosition * 2;

  return (
    <main
      className="min-h-screen flex flex-col -mt-24"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Background Image with Theme Overlay */}
      <div
        className="absolute inset-0 z-0 "
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with Toggle */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 pt-20 lg:pt-28"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Development{" "}
            <span style={{ color: currentItem.accentColor || "#3b82f6" }}>
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Showcasing{" "}
            {activeTab === "projects"
              ? "innovative web solutions"
              : "professional growth"}{" "}
            through hands-on experience
          </motion.p>

          {/* Toggle Switch with Count */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div
              className="border rounded-xl p-1 inline-flex backdrop-blur-sm"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--card-bg)",
              }}
            >
              <button
                onClick={() => switchTab("projects")}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "projects" ? "shadow-lg" : "hover:opacity-80"
                }`}
                style={{
                  backgroundColor:
                    activeTab === "projects"
                      ? currentItem.accentColor || "#3b82f6"
                      : "transparent",
                  color:
                    activeTab === "projects" ? "#ffffff" : "var(--text-color)",
                }}
              >
                <Code size={16} />
                <span>Projects ({projects.length})</span>
              </button>
              <button
                onClick={() => switchTab("work")}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "work" ? "shadow-lg" : "hover:opacity-80"
                }`}
                style={{
                  backgroundColor:
                    activeTab === "work"
                      ? currentItem.accentColor || "#3b82f6"
                      : "transparent",
                  color: activeTab === "work" ? "#ffffff" : "var(--text-color)",
                }}
              >
                <Briefcase size={16} />
                <span>Work Experience ({workExperience.length})</span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left: Project Details */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${currentIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Number and Title with Badge */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="text-6xl font-bold"
                      style={{ color: currentItem.accentColor || "#3b82f6" }}
                    >
                      {currentItem.number}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                        {currentItem.title}
                      </h2>

                      {/* Organization for Work Experience */}
                      {activeTab === "work" && (
                        <p
                          className="text-lg font-medium mb-3 flex items-center gap-2"
                          style={{
                            color: currentItem.accentColor || "#3b82f6",
                          }}
                        >
                          <Briefcase size={18} />
                          {currentItem.organization}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Icons Row */}
                  <div className="flex gap-3">
                    {currentItem.icons?.map((Icon, index) => (
                      <div
                        key={index}
                        className="p-2 rounded-lg backdrop-blur-sm border"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          borderColor: "var(--border-color)",
                        }}
                      >
                        <Icon
                          size={20}
                          style={{
                            color: currentItem.accentColor || "#3b82f6",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div
                    className="flex items-center gap-2 text-sm"
                    style={{ opacity: 0.8 }}
                  >
                    <Code size={14} />
                    <span className="font-medium">Stack:</span>
                    <span>{currentItem.technologies}</span>
                  </div>

                  {/* Meta Information */}
                  <div
                    className="flex flex-wrap gap-4 text-sm"
                    style={{ opacity: 0.8 }}
                  >
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span className="font-medium">Duration:</span>
                      <span>{currentItem.period}</span>
                    </div>
                    {activeTab === "work" && (
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span className="font-medium">Type:</span>
                        <span>{currentItem.category}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <div className="relative">
                    <div
                      className="absolute -left-4 top-0 w-1 h-full rounded-full"
                      style={{
                        backgroundColor: currentItem.accentColor || "#3b82f6",
                      }}
                    />
                    <div className="pl-6">
                      <p className="text-lg leading-relaxed">
                        {currentItem.description}
                      </p>
                    </div>
                  </div>

                  <p className="leading-relaxed">
                    {currentItem.fullDescription}
                  </p>
                </div>

                {/* Features or Role Details */}
                <div className="space-y-4">
                  <h3
                    className="text-sm font-semibold uppercase tracking-wide"
                    style={{ color: currentItem.accentColor || "#3b82f6" }}
                  >
                    {activeTab === "projects"
                      ? "Key Features"
                      : "Role & Responsibilities"}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {activeTab === "projects"
                      ? currentItem.features
                      : currentItem.role}
                  </p>
                </div>

                {/* Links */}
                {currentItem.links && currentItem.links.length > 0 && (
                  <div className="space-y-4">
                    <h3
                      className="text-sm font-semibold uppercase tracking-wide"
                      style={{ color: currentItem.accentColor || "#3b82f6" }}
                    >
                      {activeTab === "projects"
                        ? "Project Links"
                        : "Company Links"}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {currentItem.links.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 border rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-medium"
                          style={{
                            color: currentItem.accentColor || "#3b82f6",
                            borderColor: "rgba(59, 130, 246, 0.3)",
                            backgroundColor: "rgba(59, 130, 246, 0.05)",
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} />
                          <span>{link.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation Dots */}
                <div className="flex items-center justify-between pt-6">
                  <div className="flex gap-2">
                    {currentItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setProgress(0);
                          setCurrentIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex ? "w-8" : "hover:opacity-70"
                        }`}
                        style={{
                          backgroundColor:
                            index === currentIndex
                              ? currentItem.accentColor || "#3b82f6"
                              : "var(--border-color)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Image with Navigation - Full screen on mobile */}
          <motion.div
            className="lg:w-1/2 relative w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              {/* Image Container - Full screen on mobile */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border w-full"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                  height: "calc(100vh - 900px)", // Full screen height on mobile
                  minHeight: "500px",
                }}
              >
                {/* Placeholder Image with Gradient */}
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Project Image */}
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="absolute inset-0 w-full h-full object-position"
                  />

                  {/* Overlay for readability */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(
      135deg,
      ${currentItem.accentColor || "#3b82f6"}30 0%,
      rgba(0,0,0,0.4) 100%
    )`,
                    }}
                  />

                  {/* Animated Rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[1, 2, 3].map((ring) => (
                      <div
                        key={ring}
                        className="absolute rounded-full border"
                        style={{
                          width: `${150 + ring * 30}px`,
                          height: `${150 + ring * 30}px`,
                          borderColor: `${
                            currentItem.accentColor || "#3b82f6"
                          }${10 + ring * 10}`,
                          borderWidth: "1px",
                          animation: `pulse ${3 + ring}s ease-in-out infinite`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows - Hide on mobile for full-screen experience */}
                <button
                  onClick={prevItem}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group backdrop-blur-lg sm:flex"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                    borderWidth: "2px",
                  }}
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </button>

                <button
                  onClick={nextItem}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group backdrop-blur-lg sm:flex"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                    borderWidth: "2px",
                  }}
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </button>

                {/* Progress Bar at Bottom Edge */}
                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <motion.div
                    className="h-full rounded-r-full"
                    style={{
                      backgroundColor: currentItem.accentColor || "#3b82f6",
                      width: `${progress}%`,
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </div>

                {/* Counter with Timer - Compact on mobile */}
                <div
                  className="absolute bottom-4 left-4 px-3 py-2 rounded-xl text-sm backdrop-blur-lg flex items-center gap-2"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                    borderWidth: "1px",
                  }}
                >
                  <span className="font-bold">{currentItem.number}</span>
                  <span className="opacity-60">/</span>
                  <span>{currentItems.length}</span>
                  <div
                    className="w-px h-4 mx-2 opacity-30 hidden sm:block"
                    style={{ backgroundColor: "var(--text-color)" }}
                  />
                </div>

                {/* Tab Indicator */}
               

                {/* Mobile Navigation Dots - Bottom center */}
                <div className="absolute bottom-4 right-4 flex gap-2 sm:hidden">
                  {currentItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setProgress(0);
                        setCurrentIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "w-4" : "hover:opacity-70"
                      }`}
                      style={{
                        backgroundColor:
                          index === currentIndex
                            ? currentItem.accentColor || "#3b82f6"
                            : "var(--border-color)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Circular Icon Slider Section */}
        <motion.div
          className="mt-16 lg:mt-20 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3
            className="text-lg font-semibold mb-8 text-center"
            style={{ opacity: 0.9 }}
          >
            Technologies Mastered
          </h3>

          {/* Sliding Container */}
          <div className="relative h-40 overflow-hidden">
            {/* First Row - Sliding from right to left */}
            <motion.div
              className="absolute top-0 left-0 flex gap-6"
              style={{ x: scrollOffset }}
              animate={{ x: scrollOffset }}
              transition={{ type: "linear", duration: 0.8 }}
            >
              {[...techIcons, ...techIcons].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center w-20 h-20 rounded-full backdrop-blur-lg border-2 shadow-xl"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                    minWidth: "80px",
                  }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: tech.color,
                    boxShadow: `0 0 20px ${tech.color}40`,
                  }}
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-1">
                    <tech.icon size={24} color={tech.color} />
                  </div>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--text-color)" }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Second Row - Sliding from left to right (reverse) */}
            <motion.div
              className="absolute top-16 left-0 flex gap-6"
              style={{ x: -scrollOffset }}
              animate={{ x: -scrollOffset }}
              transition={{ type: "linear", duration: 0.5 }}
            >
              {[...techIcons.reverse(), ...techIcons.reverse()].map(
                (tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center w-20 h-20 rounded-full backdrop-blur-lg border-2 shadow-xl"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border-color)",
                      minWidth: "80px",
                    }}
                    whileHover={{
                      scale: 1.1,
                      borderColor: tech.color,
                      boxShadow: `0 0 20px ${tech.color}40`,
                    }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center mb-1">
                      <tech.icon size={24} color={tech.color} />
                    </div>
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--text-color)" }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Gradient overlays for fade effect */}
            <div
              className="absolute left-0 top-0 w-20 h-full z-10"
              style={{
                background:
                  "linear-gradient(90deg, var(--bg-color) 0%, transparent 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 w-20 h-full z-10"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, var(--bg-color) 100%)",
              }}
            />
          </div>

          {/* Animated Loading Dots Indicator */}
<div className="flex justify-center items-center gap-3 mt-6">
  <div className="flex gap-1.5 items-center">
    {[1, 2, 3].map((dot) => (
      <div
        key={dot}
        className="w-2 h-2 rounded-full"
        style={{
          backgroundColor: "var(--text-color)",
          animation: `bounce-dots 1.5s ease-in-out infinite ${dot * 0.2}s`,
          opacity: 0.4
        }}
      />
    ))}
  </div>
  <span className="text-xs" style={{ opacity: 0.7 }}>
    Continuously expanding technology stack
  </span>
</div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>

      {/* Add CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.02);
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .project-image-container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 0;
            margin: 0;
            z-index: 40;
          }

          .content-area {
            margin-top: calc(100vh - 200px);
          }
        }
      `}</style>
    </main>
  );
}
