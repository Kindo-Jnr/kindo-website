import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Instagram,
  X,
} from "lucide-react";
import Magnet from "./Magnet"; 


export default function Navbar({ scrollY = 0 }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const location = useLocation();

  const isScrolled = scrollY > 15;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "WhatsApp", icon: MessageCircle, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
  ];

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMobileMenuOpen]);

  const magneticSpring = {
    type: "spring",
    stiffness: 800,
    damping: 15,
    mass: 0.5,
  };

  const ultraMagneticSpring = {
    type: "spring",
    stiffness: 1000,
    damping: 10,
    mass: 0.3,
  };

  const dotSpring = {
    type: "spring",
    stiffness: 600,
    damping: 12,
    mass: 0.4,
  };

  return (
    <>
      {/* Main Desktop Navbar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.nav
            className="hidden lg:flex fixed top-0 left-0 right-0 z-50 py-6"
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={magneticSpring}
          >
            <div className="container mx-auto px-8 flex justify-between items-center">
              {/* Logo Area */}
              <motion.div
                className="flex items-center"
                onHoverStart={() => setIsLogoHovered(true)}
                onHoverEnd={() => setIsLogoHovered(false)}
              >
                <Magnet>
                  
                  <Link to="/" className="relative overflow-hidden block group">
                    <div className="h-8 flex items-center relative w-64">
                      <motion.div
                        className="absolute inset-0"
                        initial={false}
                        animate={{
                          x: isLogoHovered ? -150 : 0,
                          opacity: isLogoHovered ? 0 : 1,
                        }}
                        transition={ultraMagneticSpring}
                      >
                       
                        <span className="text-white font-mono text-lg whitespace-nowrap">
                          @ Code by Kindo
                        </span>
                      
                      </motion.div>

                      <motion.div
                        className="absolute inset-0"
                        initial={false}
                        animate={{
                          x: isLogoHovered ? 0 : 150,
                          opacity: isLogoHovered ? 1 : 0,
                        }}
                        transition={ultraMagneticSpring}
                      >
                        <span className="text-white font-mono text-lg whitespace-nowrap">
                          @ Dev. Abdulai Kindo
                        </span>
                      </motion.div>
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent"
                      animate={{ width: isLogoHovered ? "100%" : "0%" }}
                      transition={magneticSpring}
                    />
                  </Link>
                </Magnet>
              </motion.div>

              {/* Navigation Links */}
              <div className="flex items-center space-x-12">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    className="relative"
                    onHoverStart={() => setHoveredLink(link.path)}
                    onHoverEnd={() => setHoveredLink(null)}
                  >
                    
                      <Link
                        to={link.path}
                        className={`relative font-medium text-sm uppercase tracking-widest px-4 py-3 ${
                          location.pathname === link.path
                            ? "text-brand-accent"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        <motion.span
                          className="relative z-10 inline-block"
                          whileHover={{
                            y: -8,
                            scale: 1.3,
                            rotate: Math.random() > 0.5 ? -3 : 3,
                          }}
                          whileTap={{ scale: 0.8, y: 2 }}
                          transition={ultraMagneticSpring}
                        >
                          {link.label}
                        </motion.span>

                        {/* Dot */}
                        <motion.div
                          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-brand-accent rounded-full shadow-2xl shadow-brand-accent/60 z-20"
                          initial={{ scale: 0, y: 10 }}
                          animate={{
                            scale:
                              location.pathname === link.path ||
                              hoveredLink === link.path
                                ? 1
                                : 0,
                            y:
                              location.pathname === link.path ||
                              hoveredLink === link.path
                                ? 0
                                : 10,
                          }}
                          whileHover={{ scale: 1.6, y: -2 }}
                          transition={dotSpring}
                        />
                      </Link>
                   
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Burger Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="hidden lg:flex fixed top-6 right-8 z-50"
            initial={{ scale: 0, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: -50 }}
            transition={ultraMagneticSpring}
          >
            <Magnet>
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/30 shadow-2xl flex items-center justify-center cursor-pointer group"
                whileHover={{
                  scale: 1.3,
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderColor: "rgba(255,255,255,0.6)",
                  y: -6,
                  rotate: 180,
                }}
                whileTap={{ scale: 0.7, y: 4 }}
                transition={ultraMagneticSpring}
              >
                <motion.div
                  className="absolute inset-0 bg-brand-accent/40 rounded-full blur-xl"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 1 }}
                  transition={magneticSpring}
                />
                <motion.div
                  className="w-6 h-6 flex flex-col justify-center items-center relative"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  transition={ultraMagneticSpring}
                >
                  <motion.span
                    className="w-6 h-0.5 bg-white absolute"
                    variants={{
                      closed: { rotate: 0, y: -6 },
                      open: { rotate: 45, y: 0 },
                    }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-white absolute"
                    variants={{
                      closed: { opacity: 1, scale: 1 },
                      open: { opacity: 0, scale: 0 },
                    }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-white absolute"
                    variants={{
                      closed: { rotate: 0, y: 6 },
                      open: { rotate: -45, y: 0 },
                    }}
                  />
                </motion.div>
              </motion.button>
            </Magnet>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Burger Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40 lg:block hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              transition={magneticSpring}
            />

            <motion.div
              className="fixed right-0 top-0 bottom-0 w-1/3 min-w-[400px] bg-gray-900/95 backdrop-blur-3xl z-50 lg:block hidden overflow-hidden border-l-2 border-white/30 shadow-3xl"
              initial={{ clipPath: "circle(0% at 100% 50%)", x: 100 }}
              animate={{ clipPath: "circle(150% at 100% 50%)", x: 0 }}
              exit={{ clipPath: "circle(0% at 100% 50%)", x: 100 }}
              transition={ultraMagneticSpring}
            >
              <div className="h-full flex flex-col p-8">
                <motion.div
                  className="text-gray-400 text-xs uppercase tracking-widest mb-8 font-mono"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={ultraMagneticSpring}
                >
                  Navigation Menu
                </motion.div>

                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="self-end w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/30 flex items-center justify-center absolute top-8 right-8 group"
                  whileHover={{ scale: 1.4, rotate: 360, y: -4 }}
                  whileTap={{ scale: 0.6 }}
                  transition={ultraMagneticSpring}
                >
                  <X className="text-white w-6 h-6" />
                </motion.button>

                <nav className="flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      className="relative py-6 group"
                      initial={{ x: 100, opacity: 0, scale: 0.5 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.15,
                        ...ultraMagneticSpring,
                      }}
                    >
                      <Magnet>
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center text-2xl font-bold transition-all duration-300 group ${
                            location.pathname === link.path
                              ? "text-brand-accent"
                              : "text-gray-300 hover:text-white"
                          }`}
                        >
                          <motion.div
                            className={`w-4 h-4 rounded-full mr-6 ${
                              location.pathname === link.path
                                ? "bg-brand-accent shadow-2xl shadow-brand-accent/60"
                                : "bg-gray-500"
                            }`}
                            whileHover={{
                              scale: 2,
                              rotate: 180,
                            }}
                            transition={ultraMagneticSpring}
                          />
                          <motion.span
                            className="relative"
                            whileHover={{ x: 20, scale: 1.2, y: -4 }}
                            transition={ultraMagneticSpring}
                          >
                            {link.label}
                          </motion.span>
                        </Link>
                      </Magnet>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  className="border-t-2 border-white/20 pt-8"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={ultraMagneticSpring}
                >
                  <p className="text-gray-400 text-sm uppercase tracking-widest mb-8 font-mono text-center">
                    Connect With Me
                  </p>

                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <Magnet key={social.name}>
                          <motion.a
                            href={social.url}
                            className="relative w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/30 flex items-center justify-center group shadow-2xl"
                            whileHover={{
                              scale: 1.8,
                              y: -8,
                              rotate: 360,
                              backgroundColor:
                                "rgba(255, 255, 255, 0.4)",
                            }}
                            whileTap={{ scale: 0.6 }}
                            transition={ultraMagneticSpring}
                            initial={{
                              scale: 0,
                              y: 50,
                              rotate: -360,
                            }}
                            animate={{ scale: 1, y: 0, rotate: 0 }}
                            transition={{
                              delay: 0.8 + index * 0.2,
                              ...ultraMagneticSpring,
                            }}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                            <motion.div
                              className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 text-sm px-4 py-2 rounded-xl font-bold shadow-2xl"
                              initial={{ scale: 0, y: 20 }}
                              whileHover={{ scale: 1, y: 0 }}
                              transition={ultraMagneticSpring}
                            >
                              {social.name}
                              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-3 h-3 bg-white rotate-45"></div>
                            </motion.div>
                          </motion.a>
                        </Magnet>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
