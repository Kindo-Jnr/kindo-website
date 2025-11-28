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
} from "lucide-react";
import Magnet from "@components/Magnet";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import CountUp from "react-countup";

export default function About() {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const skills = {
    frontend: [
      { name: "React", level: 73 },
      { name: "JavaScript", level: 63 },
      { name: "TypeScript", level: 55 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Next.js", level: 68 },
      { name: "HTML5/CSS3", level: 89 },
    ],
    tools: [
      { name: "Git & GitHub", level: 80 },
      { name: "Framer Motion", level: 65 },
      { name: "Figma", level: 70 },
      { name: "Webpack/Vite", level: 65 },
      { name: "Jest/Cypress", level: 60 },
      { name: "Node.js", level: 65 },
    ],
  };

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
      title: "Full-Stack Expansion",
      description:
        "Expanding into backend technologies and full-stack development",
      icon: GraduationCap,
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the timeline is visible from top to bottom
      const timelineTop = timelineRect.top;
      const timelineBottom = timelineRect.bottom;
      const timelineHeight = timelineRect.height;

      // Calculate progress from 0 to 1 based on scroll position
      let progress = 0;

      if (timelineTop < windowHeight) {
        // When timeline enters viewport from top
        const visibleHeight = windowHeight - timelineTop;
        progress = visibleHeight / (windowHeight + timelineHeight);
      }

      if (timelineBottom < windowHeight) {
        // When timeline is completely in viewport
        progress = timelineBottom / (windowHeight + timelineHeight);
      }

      if (timelineTop < 0) {
        // When timeline is scrolling up
        const scrolledPast = Math.abs(timelineTop);
        progress = scrolledPast / (windowHeight + timelineHeight);
      }

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial calculation
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
      <div className="relative w-full max-w-7xl mx-auto px-6 flex-1 py-25">
        {/* Header Section */}
        <motion.section
          className="text-center mb-20"
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
            About <span className="text-blue-700">Me</span>
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-3 text-xl sm:text-2xl font-light opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span>Passionate Frontend Developer</span>
          </motion.div>
        </motion.section>

        {/* Profile & Bio Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 -mt-20 lg:mt-0">
          {/* Profile Image with Animation */}
          <motion.div
            className="lg:col-span-5 flex justify-center relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ProfileWithCircularLines />

            {/* Glassy Name Background */}
            <motion.div
              className="absolute -bottom-15 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-8 py-4 shadow-md">
                <h3 className="text-xl font-bold text-center whitespace-nowrap animate-pulse">
                  Abubakari Abdulai Kindo
                </h3>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-blue-900/20 -z-10" />
              </div>
            </motion.div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="p-8 rounded-3xl backdrop-blur-sm border shadow-lg"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h2
                className="text-xl lg:text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Building{" "}
                <span className="text-blue-700">Digital Experiences</span> That
                Matter
              </motion.h2>

              <div className="space-y-4 text-md lg:text-lg leading-relaxed opacity-90">
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

              {/* CTA Button */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Magnet strength={0.4}>
                  <motion.a
                    href="/projects"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-full cursor-pointer border font-bold text-lg shadow-lg hover:shadow-xl overflow-hidden group"
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

                    {/* Circular Fill Animation */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 rounded-full bg-blue-700 group-hover:w-[300%] group-hover:h-[300%] transition-all duration-800 ease-out"
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
          className="mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's <span className="text-blue-700">Connect</span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
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
                        w-8 h-8 mb-2
                        group-hover:scale-110 transition-transform duration-300
                        ${social.color}
                      `}
                    />
                    <span
                      className="text-sm font-medium text-center"
                      style={{ color: "var(--text-color)" }}
                    >
                      {social.name}
                    </span>
                  </div>

                  {/* Tooltip */}
                  <div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-semibold text-sm shadow-2xl z-30"
                    style={{
                      backgroundColor: "var(--tooltip-bg)",
                      color: "var(--tooltip-text)",
                    }}
                  >
                    {social.description}
                    <div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 rotate-45"
                      style={{ backgroundColor: "var(--tooltip-bg)" }}
                    ></div>
                  </div>

                  {/* External Link Indicator */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <ExternalLink className="w-3 h-3 text-white" />
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Technical <span className="text-blue-700">Expertise</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Frontend Skills */}
              <motion.div
                className="p-8 rounded-3xl backdrop-blur-sm border shadow-2xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <Code2 className="w-7 h-7 text-blue-600" />
                  <h3 className="text-2xl font-bold">Frontend Development</h3>
                </div>
                <div className="space-y-4">
                  {skills.frontend.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between text-sm font-medium">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <motion.div
                          className="h-full bg-blue-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Technologies */}
              <motion.div
                className="p-8 rounded-3xl backdrop-blur-sm border shadow-2xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <Zap className="w-7 h-7 text-blue-600" />
                  <h3 className="text-2xl font-bold">Tools & Technologies</h3>
                </div>
                <div className="space-y-4">
                  {skills.tools.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between text-sm font-medium">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <motion.div
                          className="h-full bg-green-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        {/* Timeline Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          ref={timelineRef}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Development <span className="text-blue-700">Journey</span>
            </motion.h2>

            <div className="relative">
              

              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  const milestoneProgress = (index + 1) / milestones.length;
                  const isActive = scrollProgress >= milestoneProgress - 0.2;

                  return (
                    <motion.div
                      key={index}
                      className="relative flex items-start gap-8"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <motion.div
                          className="w-12 h-12 rounded-full flex items-center justify-center border-2 shadow-lg relative"
                          style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: isActive
                              ? milestone.color.replace("text-", "border-")
                              : "var(--border-color)",
                          }}
                          animate={{
                            scale: isActive ? [1, 1.1, 1] : 1,
                            boxShadow: isActive
                              ? `0 0 20px ${milestone.color
                                  .replace("text-", "")
                                  .replace("-500", "-500/50")}`
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
                            className={`w-6 h-6 ${milestone.color}`}
                          />

                          {/* Active Ring */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-full border-2"
                              style={{
                                borderColor: milestone.color.replace(
                                  "text-",
                                  "border-"
                                ),
                              }}
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

                      {/* Milestone Content */}
                      <motion.div
                        className="flex-1 p-6 rounded-2xl backdrop-blur-sm border shadow-lg"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          borderColor: isActive
                            ? milestone.color.replace("text-", "border-")
                            : "var(--border-color)",
                        }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        animate={{
                          boxShadow: isActive
                            ? `0 20px 25px -5px ${milestone.color
                                .replace("text-", "")
                                .replace(
                                  "-500",
                                  "-500/20"
                                )}, 0 10px 10px -5px ${milestone.color
                                .replace("text-", "")
                                .replace("-500", "-500/10")}`
                            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <span
                            className="text-2xl font-bold px-3 py-1 rounded-full"
                            style={{ backgroundColor: milestone.bgColor }}
                          >
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-bold">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-lg opacity-80 leading-relaxed">
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
