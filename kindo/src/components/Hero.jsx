import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowDown,
  Sparkles,
  Lightbulb,
  Palette,
  Code2,
  Layers,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import LetterGlitch from "./LetterGlitch";
import Magnet from "./Magnet";
export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const rotatingTexts = [
    { text: "ideas", icon: Lightbulb, color: "text-blue-400" },
    { text: "concepts", icon: Palette, color: "text-blue-400" },
    { text: "designs", icon: Layers, color: "text-blue-400" },
    { text: "codes", icon: Code2, color: "text-blue-400" },
    { text: "ideas", icon: Lightbulb, color: "text-blue-400" },
    { text: "concepts", icon: Palette, color: "text-blue-400" },
    { text: "designs", icon: Layers, color: "text-blue-400" },
    { text: "codes", icon: Code2, color: "text-blue-400" },
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "#", color: "hover:text-gray-400" },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "#",
      color: "hover:text-green-400",
    },
    { icon: Mail, name: "Email", url: "#", color: "hover:text-red-400" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const scrollToContent = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const CurrentIcon = rotatingTexts[currentText].icon;

  return (
    <section
      data-scroll-section
      className="min-h-screen -mt-24 flex items-center justify-center relative overflow-hidden bg-black"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('/images/kindo-profile 2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
     
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          className="order-2 lg:order-1 lg:col-span-6 space-y-8 text-left px-4 sm:px-6 md:px-8 pt-0 md:pt-24 lg:pt-32 "
          data-scroll
          data-scroll-speed="0.8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.3,
          }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl text-white font-light mb-2 sm:mb-3 md:mb-4">
              Hi, I'm{" "} Abdulai {" "}
              <span className="text-blue-400 font-bold">Kindo</span>!
            </h2>
          </motion.div>

          {/* Rotating Text Section */}
          <motion.div
            className="flex flex-wrap items-center space-x-2 sm:space-x-3 md:space-x-4 mb-4 sm:mb-5 md:mb-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
              Shaping
            </span>

            {/* Rotating Text + Icon */}
            <div className="relative h-6 sm:h-8 md:h-14 lg:h-16 overflow-hidden flex items-center">
              <div className="words flex flex-col text-left leading-none will-change-transform">
                {rotatingTexts.map((item, i) => (
                  <div
                    key={i}
                    className={`word flex items-center space-x-2 sm:space-x-3 ${item.color}`}
                  >
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                      {item.text}
                    </span>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Into real projects text */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-6 sm:mb-7 md:mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            into real projects.
          </motion.p>

          {/* Hire Me Button */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 150 }}
          >
            <Magnet strength={0.4}>
              <motion.button
                className="px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 bg-brand-accent text-white rounded-full cursor-pointer border border-white font-bold text-base sm:text-lg shadow-md hover:shadow-lg relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <span className="relative z-10">Hire Me</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </Magnet>
          </motion.div>

           {/* Social Icons */}
          <motion.div
            className="flex justify-start lg:justify-start space-x-4 sm:space-x-5 md:space-x-6 w-full lg:-mr-20"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="relative group"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 1.4 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <div
                    className="
            w-10 h-10
            sm:w-12 sm:h-12
            md:w-14 md:h-14
            bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center
            border border-white/20 shadow-xl group-hover:bg-white/20
            transition-all duration-300
          "
                  >
                    <IconComponent
                      className="
              w-4 h-4
              sm:w-5 sm:h-5
              md:w-6 md:h-6
              text-white group-hover:scale-110 transition-transform duration-300
            "
                    />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-semibold text-xs sm:text-sm shadow-2xl">
                    {social.name}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-white rotate-45"></div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

       {/* Desktop Animation */}
        <motion.div
          className="order-1 lg:order-2 lg:col-span-6 lg:flex justify-center lg:justify-end relative mt-18 lg:mt-0 px-4 mx-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ProfileWithCircularLines />
        </motion.div>
      </div>
    </section>
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
      </motion.svg>

      <img
        src="/images/kindo-profile 2.png"
        alt="Hester Francken"
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white/30 dark:border-gray-700 shadow-2xl z-10"
      />
    </motion.div>
  );
}

