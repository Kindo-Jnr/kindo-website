import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Palette,
  Smartphone,
  Zap,
  Globe,
  BookOpen,
  Users,
  Star,
  CheckCircle,
  Clock,
  Mail,
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Rocket,
  Target,
  Search,
  Layers,
  Cpu,
  Wrench,
  Cloud,
  Shield,
} from "lucide-react";
import Magnet from "@components/Magnet";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import CountUp from "react-countup";

export default function About() {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:text-gray-400",
      bgColor: "bg-gray-500/20",
      description: "Check out my code",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400",
      bgColor: "bg-blue-500/20",
      description: "Professional profile",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "hover:text-sky-400",
      bgColor: "bg-sky-500/20",
      description: "Latest updates",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/yourphonenumber",
      color: "hover:text-green-400",
      bgColor: "bg-green-500/20",
      description: "Let's chat",
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:your.email@example.com",
      color: "hover:text-red-400",
      bgColor: "bg-red-500/20",
      description: "Send me an email",
    },
    {
      icon: Globe,
      name: "Portfolio",
      url: "https://yourportfolio.com",
      color: "hover:text-purple-400",
      bgColor: "bg-purple-500/20",
      description: "View my work",
    },
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding project requirements, goals, and user needs",
      fullDescription:
        "This phase involves comprehensive requirement gathering, user research, and creating detailed project documentation. I work closely with clients to define scope, timeline, and success metrics.",
      icon: Search,
      color: "from-blue-500 to-cyan-600",
      features: [
        "Requirement Analysis",
        "User Research",
        "Project Planning",
        "Timeline Creation",
      ],
      buttonText: "Start Your Project",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating intuitive, user-centered interface designs",
      fullDescription:
        "Designing wireframes, prototypes, and final UI mockups using modern design tools. Focusing on user experience, accessibility, and visual aesthetics to create engaging interfaces.",
      icon: Palette,
      color: "from-purple-500 to-pink-600",
      features: ["Wireframing", "Prototyping", "Visual Design", "User Testing"],
      buttonText: "View Design Portfolio",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Building robust, scalable web applications with modern technologies",
      fullDescription:
        "Implementing designs into functional, responsive web applications using React, Tailwind CSS, and other modern frameworks. Writing clean, maintainable code with best practices.",
      icon: Code2,
      color: "from-green-500 to-emerald-600",
      features: [
        "Frontend Development",
        "Responsive Design",
        "Performance Optimization",
        "Code Quality",
      ],
      buttonText: "See My Work",
    },
    {
      step: "04",
      title: "Testing",
      description:
        "Ensuring quality, performance, and cross-browser compatibility",
      fullDescription:
        "Rigorous testing including unit tests, integration tests, and user acceptance testing. Performance optimization, bug fixing, and ensuring accessibility standards are met.",
      icon: Shield,
      color: "from-yellow-500 to-amber-600",
      features: [
        "Unit Testing",
        "Integration Testing",
        "Performance Testing",
        "Bug Fixing",
      ],
      buttonText: "Quality Assurance",
    },
    {
      step: "05",
      title: "Deployment",
      description:
        "Launching applications with reliable hosting and monitoring",
      fullDescription:
        "Setting up hosting, CI/CD pipelines, and deploying applications to production environments. Implementing monitoring, analytics, and ensuring smooth launch transitions.",
      icon: Cloud,
      color: "from-indigo-500 to-blue-600",
      features: [
        "Hosting Setup",
        "CI/CD Pipeline",
        "Domain Configuration",
        "Launch Monitoring",
      ],
      buttonText: "Deployment Services",
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description:
        "Providing ongoing support, updates, and feature enhancements",
      fullDescription:
        "Offering continuous support, regular updates, security patches, and feature enhancements. Monitoring performance, analytics, and providing technical support.",
      icon: Wrench,
      color: "from-red-500 to-orange-600",
      features: [
        "Technical Support",
        "Regular Updates",
        "Security Patches",
        "Feature Enhancements",
      ],
      buttonText: "Get Support",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Started Web Development",
      description:
        "Began my journey into frontend development with HTML, CSS, and JavaScript",
      icon: Rocket,
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
    },
    {
      year: "2024",
      title: "Started React & Next.js",
      description:
        "Built applications with React ecosystem and modern frameworks",
      icon: Code2,
      color: "text-green-500",
      bgColor: "bg-green-500/20",
    },
    {
      year: "2024",
      title: "Freelance Projects",
      description:
        "Started working with clients and delivering production-ready applications",
      icon: Briefcase,
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
    },
    {
      year: "2025",
      title: "Advanced Animations",
      description:
        "Mastered Framer Motion and advanced CSS animations for better UX",
      icon: Award,
      color: "text-green-500",
      bgColor: "bg-green-500/20",
    },
    {
      year: "2026",
      title: "Spline & 3D development",
      description: "Expanding into Spline and 3D development",
      icon: GraduationCap,
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
    },
    {
      year: "2026",
      title: "Full-Stack Expansion",
      description:
        "Expanding into backend technologies and full-stack development",
      icon: GraduationCap,
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
    },
  ];
 // Add this near your other useEffect hooks
useEffect(() => {
  let animationFrameId;
  let isActive = true;
  let fixedStartTime = null;
  let isFixed = false;

  // ========== EASY CONTROLS ==========
  const appearOffset = 50;    // Appears when section top is 150px from viewport top
  const disappearOffset = 150; // Disappears when timeline bottom is 100px from viewport bottom
  const scrollBuffer = 300;    // Extra scroll after timeline before disappearing
  const fixedTop = '8rem';     // Fixed position from top
  const fixedRight = 'calc(5% + 1rem)'; // Fixed position from right
  const fixedWidth = 'calc(40% - 2rem)'; // Fixed width
  const animationDuration = 300; // Animation duration in ms
  // ===================================

  const handleParallaxScroll = () => {
    if (!isActive) return;
    
    const rightSide = document.getElementById('parallax-right-side');
    const processSection = document.querySelector('section.mb-16.lg\\:mb-20.overflow-hidden.relative');
    
    if (!rightSide || !processSection) return;
    
    const sectionRect = processSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionTop = sectionRect.top;
    const sectionBottom = sectionRect.bottom;
    
    // Get timeline container
    const timelineContainer = processSection.querySelector('.relative');
    const timelineRect = timelineContainer ? timelineContainer.getBoundingClientRect() : null;
    const timelineBottom = timelineRect ? timelineRect.bottom : 0;
    
    // Easy control calculations
    const shouldAppear = sectionTop <= appearOffset;
    const shouldDisappear = timelineBottom <= (windowHeight - disappearOffset) || 
                           (sectionBottom - scrollBuffer) <= 0;
    
    // Section is in view
    if (sectionTop < windowHeight && sectionBottom > 0) {
      if (shouldAppear && !shouldDisappear) {
        // Should be visible and fixed
        if (!isFixed) {
          isFixed = true;
          fixedStartTime = Date.now();
        }
        
        // Calculate animation progress
        const timeSinceFixed = isFixed ? Date.now() - fixedStartTime : 0;
        const animationProgress = Math.min(1, timeSinceFixed / animationDuration);
        
        // Apply fixed positioning
        rightSide.style.position = 'fixed';
        rightSide.style.top = fixedTop;
        rightSide.style.right = fixedRight;
        rightSide.style.width = fixedWidth;
        rightSide.style.zIndex = '20';
        
        // Animate appearance
        rightSide.style.opacity = String(animationProgress);
        rightSide.style.transform = `translateX(${100 - (animationProgress * 100)}px)`;
        rightSide.style.transition = 'opacity 0.3s ease, transform 0.5s ease';
        
      } else if (shouldDisappear) {
        // Should disappear (timeline ended or section ending)
        isFixed = false;
        rightSide.style.position = 'absolute';
        rightSide.style.top = 'auto';
        rightSide.style.bottom = '0';
        rightSide.style.right = '0';
        rightSide.style.width = '100%';
        rightSide.style.opacity = '1';
        rightSide.style.transform = 'translateX(0)';
        rightSide.style.transition = 'all 0.5s ease';
        
      } else {
        // Should not be visible yet (before appear point)
        isFixed = false;
        fixedStartTime = null;
        rightSide.style.position = 'absolute';
        rightSide.style.top = '0';
        rightSide.style.right = '0';
        rightSide.style.width = '100%';
        rightSide.style.opacity = '0';
        rightSide.style.transform = 'translateX(100px)';
      }
      
    } else if (sectionTop > windowHeight) {
      // Section not in view yet (below viewport)
      isFixed = false;
      fixedStartTime = null;
      rightSide.style.position = 'absolute';
      rightSide.style.top = '0';
      rightSide.style.right = '0';
      rightSide.style.width = '100%';
      rightSide.style.opacity = '0';
      rightSide.style.transform = 'translateX(100px)';
      
    } else if (sectionBottom < 0) {
      // Section completely scrolled past
      isFixed = false;
      fixedStartTime = null;
      rightSide.style.position = 'absolute';
      rightSide.style.top = 'auto';
      rightSide.style.bottom = '0';
      rightSide.style.right = '0';
      rightSide.style.width = '100%';
      rightSide.style.opacity = '1';
      rightSide.style.transform = 'translateX(0)';
    }
  };

  const scrollHandler = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    animationFrameId = requestAnimationFrame(handleParallaxScroll);
  };

  // Initial setup
  const init = () => {
    const rightSide = document.getElementById('parallax-right-side');
    if (rightSide) {
      rightSide.style.position = 'absolute';
      rightSide.style.top = '0';
      rightSide.style.right = '0';
      rightSide.style.width = '100%';
      rightSide.style.opacity = '0';
      rightSide.style.transform = 'translateX(100px)';
    }
    
    setTimeout(() => handleParallaxScroll(), 100);
  };

  init();
  
  window.addEventListener('scroll', scrollHandler, { passive: true });
  window.addEventListener('resize', scrollHandler, { passive: true });

  return () => {
    isActive = false;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    window.removeEventListener('scroll', scrollHandler);
    window.removeEventListener('resize', scrollHandler);
  };
}, []);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const timelineTop = timelineRect.top;
      const timelineBottom = timelineRect.bottom;
      const timelineHeight = timelineRect.height;

      let progress = 0;

      if (timelineTop < windowHeight) {
        const visibleHeight = windowHeight - timelineTop;
        progress = visibleHeight / (windowHeight + timelineHeight);
      }

      if (timelineBottom < windowHeight) {
        progress = timelineBottom / (windowHeight + timelineHeight);
      }

      if (timelineTop < 0) {
        const scrolledPast = Math.abs(timelineTop);
        progress = scrolledPast / (windowHeight + timelineHeight);
      }

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleSocialClick = (url, event) => {
    event.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const currentProcess = developmentProcess[activeProcessIndex];

  return (
    <main
      data-scroll-section
      className="min-h-screen flex flex-col justify-between -mt-24 overflow-x-hidden relative"
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
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 py-20">
        {/* Header Section */}
        <motion.section
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-3 text-xl sm:text-2xl font-light opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span>Passionate Frontend Developer</span>
          </motion.div>
        </motion.section>

        {/* Profile & Bio Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          <motion.div
            className="lg:col-span-5 flex justify-center relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ProfileWithCircularLines />

            {/* Glassy Name Background */}
            <motion.div
              className="absolute -bottom-12 lg:-bottom-16 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700/30 rounded-2xl px-6 py-3 lg:px-8 lg:py-4 shadow-lg">
                <h3 className="text-lg lg:text-xl font-bold text-center whitespace-nowrap">
                  Abubakari Abdulai Kindo
                </h3>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-blue-900/20 -z-10" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="p-6 lg:p-8 rounded-3xl backdrop-blur-sm border shadow-lg"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h2
                className="text-2xl lg:text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Building{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Digital Experiences
                </span>{" "}
                That Matter
              </motion.h2>

              <div className="space-y-4 text-base lg:text-lg leading-relaxed opacity-90">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  I'm a passionate <strong>Frontend Developer</strong>{" "}
                  specializing in{" "}
                  <strong>
                    React, JavaScript, and modern web technologies
                  </strong>
                  . I believe in creating digital experiences that are not just
                  functional, but delightful to use.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  With expertise in{" "}
                  <strong>
                    React, Tailwind CSS, JavaScript, TypeScript, and Next.js
                  </strong>
                  , I craft responsive, performant web applications that provide
                  seamless user experiences across all devices.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  My approach combines technical excellence with creative
                  problem-solving. Whether it's building complex state
                  management systems, optimizing performance, or creating
                  pixel-perfect UIs, I thrive on turning ideas into reality
                  through clean, maintainable code.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Magnet strength={0.4}>
                  <motion.a
                    href="/projects"
                    className="flex items-center justify-center gap-3 px-6 lg:px-8 py-3 lg:py-4 rounded-full cursor-pointer border font-bold text-base lg:text-lg shadow-lg hover:shadow-xl overflow-hidden group"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border-color)",
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <span className="relative z-10">View My Work</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 rounded-full bg-blue-600 group-hover:w-[300%] group-hover:h-[300%] transition-all duration-800 ease-out"
                      style={{ zIndex: 0 }}
                    />
                  </motion.a>
                </Magnet>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Social Links Section */}
        <motion.section
          className="mb-16 lg:mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's{" "}
            <span className="text-blue-600 dark:text-blue-400">Connect</span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 max-w-5xl mx-auto">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  onClick={(e) => handleSocialClick(social.url, e)}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <div
                    className={`
                      w-full aspect-square rounded-2xl flex flex-col items-center justify-center
                      border shadow-lg group-hover:shadow-xl
                      transition-all duration-300 backdrop-blur-sm
                      ${social.bgColor}
                    `}
                    style={{
                      borderColor: "var(--border-color)",
                    }}
                  >
                    <IconComponent
                      className={`
                        w-6 h-6 lg:w-8 lg:h-8 mb-2
                        group-hover:scale-110 transition-transform duration-300
                        ${social.color}
                      `}
                    />
                    <span
                      className="text-xs lg:text-sm font-medium text-center"
                      style={{ color: "var(--text-color)" }}
                    >
                      {social.name}
                    </span>
                  </div>

                  <div
                    className="absolute -top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-semibold text-xs lg:text-sm shadow-2xl z-30"
                    style={{
                      backgroundColor: "var(--tooltip-bg)",
                      color: "var(--tooltip-text)",
                    }}
                  >
                    {social.description}
                    <div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 rotate-45"
                      style={{ backgroundColor: "var(--tooltip-bg)" }}
                    />
                  </div>

                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <ExternalLink className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        </motion.section>

        {/* Development Process Section (Replaced Technical Expertise) */}
        <motion.section
          className="mb-16 lg:mb-20 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium">
                  My Development Process
                </span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
                Building with{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Precision
                </span>
              </h2>

              <p className="text-lg lg:text-xl opacity-80 max-w-2xl mx-auto">
                A structured approach to delivering exceptional web solutions
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Timeline Section - Left Side */}
              <div className="relative">
                {/* Timeline Line - Fixed for all 6 steps */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, var(--border-color) 0%, transparent 100%)",
                      opacity: 0.3,
                    }}
                  />
                  {/* Active progress line */}
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"
                    style={{
                      height: `${
                        ((activeProcessIndex + 1) / developmentProcess.length) *
                        100
                      }%`,
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </div>

                {/* Timeline Items */}
                <div className="space-y-6">
                  {developmentProcess.map((process, index) => {
                    const IconComponent = process.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        onHoverStart={() => setActiveProcessIndex(index)}
                        onClick={() => setActiveProcessIndex(index)}
                        className={`relative group cursor-pointer ${
                          activeProcessIndex === index
                            ? "scale-[1.02]"
                            : "scale-100"
                        } transition-transform duration-300`}
                      >
                        {/* Timeline Dot */}
                        <div
                          className={`absolute left-8 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                            activeProcessIndex === index
                              ? "bg-blue-600 border-blue-600 scale-125"
                              : "bg-transparent border-gray-400"
                          } transition-all duration-300 z-10`}
                        />

                        {/* Content Card */}
                        <div
                          className={`ml-16 backdrop-blur-xl border rounded-2xl p-5 lg:p-6 transition-all duration-300 ${
                            activeProcessIndex === index
                              ? "border-blue-500/50 bg-white/10 dark:bg-black/10"
                              : "border-gray-300/30 dark:border-gray-700/30 bg-white/5 dark:bg-black/5"
                          } hover:bg-white/10 dark:hover:bg-black/10`}
                        >
                          {/* Step and Icon */}
                          <div className="flex items-center gap-4 mb-4">
                            <div
                              className={`p-2 rounded-xl bg-gradient-to-r ${process.color}`}
                            >
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              {process.step}
                            </span>
                            <div
                              className="flex-1 h-px opacity-20"
                              style={{ backgroundColor: "var(--text-color)" }}
                            />
                            <ArrowRight
                              className={`w-4 h-4 text-blue-600 dark:text-blue-400 transition-transform duration-300 ${
                                activeProcessIndex === index
                                  ? "translate-x-1"
                                  : "translate-x-0"
                              }`}
                            />
                          </div>

                          {/* Title and Description */}
                          <h3 className="text-xl font-bold mb-2">
                            {process.title}
                          </h3>
                          <p className="opacity-80 text-sm leading-relaxed mb-4">
                            {process.description}
                          </p>

                          {/* Features */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {process.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-xs rounded-full"
                                style={{
                                  backgroundColor: "var(--card-bg)",
                                  color: "var(--text-color)",
                                  borderColor: "var(--border-color)",
                                  borderWidth: "1px",
                                }}
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          {/* Progress Indicator */}
                          {activeProcessIndex === index && (
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 2 }}
                              className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-3"
                            />
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Active Process Details - JavaScript-controlled parallax */}
              <div className="lg:relative hidden lg:block">
                {/* This is the container that will track position */}
                <div
                  id="parallax-right-side"
                  className="lg:absolute lg:top-0 lg:w-full transition-all duration-500 ease-out"
                  style={{
                    opacity: 0,
                    transform: "translateX(100px)",
                  }}
                >
                  <motion.div
                    key={activeProcessIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-3xl overflow-hidden"
                  >
                    {/* Process Visualization */}
                    <div
                      className="aspect-square rounded-3xl flex items-center justify-center p-4 sm:p-6 lg:p-8"
                      style={{
                        background: `linear-gradient(135deg, var(--card-bg) 0%, var(--bg-color) 100%)`,
                        borderColor: "var(--border-color)",
                        borderWidth: "1px",
                      }}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center text-center px-2 sm:px-4">
                        <div
                          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center mb-4 sm:mb-6"
                          style={{
                            background: `linear-gradient(135deg, ${currentProcess.color
                              .split(" ")
                              .join(", ")})`,
                          }}
                        >
                          <currentProcess.icon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
                          {currentProcess.title}
                        </h3>
                        <p className="opacity-80 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                          {currentProcess.fullDescription}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 w-full max-w-md">
                          {currentProcess.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="p-2 sm:p-3 rounded-lg text-center"
                              style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                borderWidth: "1px",
                              }}
                            >
                              <span className="text-xs sm:text-sm font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <Magnet
                          strength={0.3}
                          className="w-full max-w-xs sm:max-w-sm"
                        >
                          <motion.a
                            href="/contact"
                            className="relative flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 rounded-full cursor-pointer border font-bold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl overflow-hidden w-full group"
                            style={{
                              backgroundColor: "var(--card-bg)",
                              borderColor: "var(--border-color)",
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {/* Button content */}
                            <div className="relative z-20 flex items-center justify-center gap-2 w-full">
                              <span className="truncate">
                                {currentProcess.buttonText}
                              </span>
                              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>

                            {/* Hover background */}
                            <div className="absolute inset-0 rounded-full overflow-hidden z-10">
                              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </motion.a>
                        </Magnet>
                      </div>
                    </div>

                    {/* Step Counter */}
                    <div
                      className="absolute top-4 right-4 px-3 py-2 rounded-xl text-sm backdrop-blur-lg flex items-center gap-2 z-30"
                      style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                        borderWidth: "1px",
                      }}
                    >
                      <span className="font-bold">
                        Step {currentProcess.step}
                      </span>
                      <span className="opacity-60">/</span>
                      <span>06</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        {/* Timeline Section */}
        <motion.section
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          ref={timelineRef}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Development{" "}
              <span className="text-blue-600 dark:text-blue-400">Journey</span>
            </motion.h2>

            <div className="relative">
              {/* Animated Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 transform -translate-x-1/2 z-0 overflow-hidden">
                {/* Background Line */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: "var(--border-color)",
                    opacity: 0.3,
                  }}
                />
                {/* Animated Progress Line */}
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"
                  style={{
                    height: `${scrollProgress * 100}%`,
                  }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                />
              </div>

              {/* Milestones */}
              <div className="space-y-8 lg:space-y-12">
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  const milestoneProgress = (index + 1) / milestones.length;
                  const isActive = scrollProgress >= milestoneProgress - 0.2;

                  return (
                    <motion.div
                      key={index}
                      className="relative flex items-start gap-6 lg:gap-8"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Timeline Dot with Pulse Animation */}
                      <div className="relative z-10 flex-shrink-0">
                        <motion.div
                          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border-2 shadow-lg relative"
                          style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: isActive
                              ? "rgb(59, 130, 246)"
                              : "var(--border-color)",
                          }}
                          animate={{
                            scale: isActive ? [1, 1.1, 1] : 1,
                            boxShadow: isActive
                              ? "0 0 20px rgba(59, 130, 246, 0.5)"
                              : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          }}
                          transition={{
                            scale: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                            boxShadow: { duration: 0.3 },
                          }}
                        >
                          <IconComponent
                            className={`w-5 h-5 lg:w-6 lg:h-6 ${milestone.color}`}
                          />

                          {/* Active Ring */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-full border-2"
                              style={{ borderColor: "rgb(59, 130, 246)" }}
                              initial={{ scale: 1, opacity: 1 }}
                              animate={{ scale: 1.5, opacity: 0 }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                              }}
                            />
                          )}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <motion.div
                        className="flex-1 p-4 lg:p-6 rounded-2xl backdrop-blur-sm border shadow-lg"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          borderColor: isActive
                            ? "rgb(59, 130, 246)"
                            : "var(--border-color)",
                        }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        animate={{
                          boxShadow: isActive
                            ? "0 20px 25px -5px rgba(59, 130, 246, 0.2), 0 10px 10px -5px rgba(59, 130, 246, 0.1)"
                            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="flex items-center gap-3 lg:gap-4 mb-3">
                          <span
                            className="text-xl lg:text-2xl font-bold px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: milestone.bgColor,
                            }}
                          >
                            {milestone.year}
                          </span>
                          <h3 className="text-lg lg:text-xl font-bold">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-base lg:text-lg opacity-80 leading-relaxed">
                          {milestone.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}

/* ---------- Circular Profile Animation ---------- */
function ProfileWithCircularLines() {
  return (
    <motion.div
      className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] flex items-center justify-center overflow-hidden"
      whileHover={{ rotate: 0 }}
    >
      <motion.svg
        viewBox="0 0 300 300"
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        whileHover={{
          rotate: -360,
          transition: { repeat: Infinity, duration: 15, ease: "linear" },
        }}
      >
        {/* Arcs */}
        <circle
          cx="150"
          cy="150"
          r="130"
          stroke="rgba(59,130,246,0.8)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="120 150"
          strokeLinecap="round"
        />
        <circle
          cx="150"
          cy="150"
          r="130"
          stroke="rgba(59,130,246,0.4)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="80 190"
          strokeLinecap="round"
          transform="rotate(120 150 150)"
        />
        <circle
          cx="150"
          cy="150"
          r="130"
          stroke="rgba(59,130,246,0.6)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="60 220"
          strokeLinecap="round"
          transform="rotate(240 150 150)"
        />
        <circle
          cx="150"
          cy="150"
          r="130"
          stroke="rgba(59,130,246,0.7)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="30 220"
          strokeLinecap="round"
          transform="rotate(240 150 150)"
        />
        <circle
          cx="150"
          cy="150"
          r="130"
          stroke="rgba(59,130,246,0.8)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10 220"
          strokeLinecap="round"
          transform="rotate(240 150 150)"
        />
      </motion.svg>

      <img
        src="/images/kindo-profile2.PNG"
        alt="Abdulai Kindo"
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 shadow-4xl z-10"
        style={{
          borderColor: "var(--border-color)",
          backgroundColor: "var(--card-bg)",
        }}
      />
    </motion.div>
  );
}
