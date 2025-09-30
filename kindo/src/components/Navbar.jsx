import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, MessageCircle, Instagram, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'WhatsApp', icon: MessageCircle, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const magneticSpring = {
    type: "spring",
    stiffness: 400,
    damping: 15
  };

  return (
    <>
      {/* Main Desktop Navbar */}
      <motion.nav
        className={`hidden lg:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg -translate-y-full' 
            : 'bg-transparent py-6 translate-y-0'
        }`}
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? -100 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-8 flex justify-between items-center">
          {/* Logo Area - Text Slide Effect */}
          <motion.div
            className="flex items-center"
            onHoverStart={() => setIsLogoHovered(true)}
            onHoverEnd={() => setIsLogoHovered(false)}
          >
            <Link to="/" className="relative overflow-hidden block">
              <div className="h-8 flex items-center relative w-64">
                {/* First text - slides out left */}
                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    x: isLogoHovered ? -150 : 0,
                    opacity: isLogoHovered ? 0 : 1
                  }}
                  transition={magneticSpring}
                >
                  <span className="text-gray-800 font-mono text-lg whitespace-nowrap">
                    @ Code by Kindo
                  </span>
                </motion.div>
                
                {/* Second text - slides in from right */}
                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    x: isLogoHovered ? 0 : 150,
                    opacity: isLogoHovered ? 1 : 0
                  }}
                  transition={magneticSpring}
                >
                  <span className="text-gray-800 font-mono text-lg whitespace-nowrap">
                    @ Dev. Abdulai Kindo
                  </span>
                </motion.div>
              </div>
            </Link>
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
                  className={`relative font-medium text-sm uppercase tracking-widest transition-colors duration-200 ${
                    location.pathname === link.path 
                      ? 'text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ 
                      y: -2,
                      transition: magneticSpring
                    }}
                  >
                    {link.label}
                  </motion.span>
                  
                  {(location.pathname === link.path || hoveredLink === link.path) && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full"
                      initial={{ scale: 0, x: "-50%" }}
                      animate={{ scale: 1 }}
                      transition={magneticSpring}
                      layoutId="activeDot"
                    />
                  )}
                  
                  {hoveredLink === link.path && (
                    <motion.div
                      className="absolute inset-0 bg-gray-100 rounded-lg -mx-2 -my-1"
                      layoutId="magneticBg"
                      transition={magneticSpring}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Burger Nav Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="hidden lg:flex fixed top-6 right-8 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={magneticSpring}
          >
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-12 h-12 rounded-full bg-gray-900/90 backdrop-blur-md shadow-lg flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(17, 24, 39, 0.95)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={magneticSpring}
            >
              <motion.div
                className="w-6 h-6 flex flex-col justify-center items-center relative"
                animate={isMobileMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="w-6 h-0.5 bg-white absolute"
                  variants={{
                    closed: { rotate: 0, y: -4 },
                    open: { rotate: 45, y: 0 }
                  }}
                  transition={magneticSpring}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white absolute"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={magneticSpring}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white absolute"
                  variants={{
                    closed: { rotate: 0, y: 4 },
                    open: { rotate: -45, y: 0 }
                  }}
                  transition={magneticSpring}
                />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Burger Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:block hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-1/3 min-w-[400px] bg-gray-900/95 backdrop-blur-xl z-50 lg:block hidden overflow-hidden border-l border-gray-700"
              initial={{ clipPath: "circle(0% at 100% 50%)" }}
              animate={{ clipPath: "circle(150% at 100% 50%)" }}
              exit={{ clipPath: "circle(0% at 100% 50%)" }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
            >
              <div className="h-full flex flex-col p-8">
                <motion.div
                  className="text-gray-500 text-xs uppercase tracking-widest mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Navigation
                </motion.div>

                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="self-end w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-12 hover:bg-gray-700 absolute top-8 right-8"
                  whileHover={{ scale: 1.1 }}
                  transition={magneticSpring}
                >
                  <X className="text-white w-5 h-5" />
                </motion.button>

                <nav className="flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      className="relative py-4"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center text-lg font-medium transition-colors duration-200 group ${
                          location.pathname === link.path 
                            ? 'text-white' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {location.pathname === link.path && (
                          <motion.div
                            className="w-2 h-2 bg-white rounded-full mr-4"
                            layoutId="burgerActiveDot"
                            transition={magneticSpring}
                          />
                        )}
                        <motion.span
                          className="relative"
                          whileHover={{ x: 10 }}
                          transition={magneticSpring}
                        >
                          {link.label}
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  className="border-t border-gray-700 pt-8"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">
                    Connect With Me
                  </p>
                  
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          className="relative w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group hover:bg-gray-700"
                          whileHover={{ scale: 1.2 }}
                          transition={magneticSpring}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                        >
                          <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-white" />
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap font-medium">
                            {social.name}
                          </div>
                        </motion.a>
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
