import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  Instagram, 
  X, 
  Home,
  User,
  FolderOpen,
  Mail
} from 'lucide-react';
import Typewritertext from "./Typewritertext"; 
import ThemeToggle from "./ThemeToggle"; // Make sure to import ThemeToggle

export default function MobileNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/contact', label: 'Contact', icon: Mail }
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
      {/* Main Mobile Navbar - Hides on scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.nav
            className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-transparent py-6"
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ color: "var(--text-color)" }}
          >
            <div className="container mx-auto px-6 flex justify-between items-center">
              {/* Left Side - Code by Kindo */}
              <Link to="/" className="flex items-center">
                <Typewritertext text="@ Code by Kindo" speed={200} delay={2500} />
              </Link>

              {/* Right Side - Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative px-4 py-2 rounded-full font-medium text-sm uppercase tracking-widest  backdrop-blur-xl border border-white/10"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderColor: "rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={magneticSpring}
                style={{ color: "var(--text-color)" }}
              >
                .Menu
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Burger Nav for Mobile - Only appears when scrolled */}
      <AnimatePresence>
        {isScrolled && !isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-4 right-4 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={magneticSpring}
          >
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className="relative w-12 h-12 rounded-full text-black bg-white/20 backdrop-blur-md shadow-lg flex items-center justify-center border border-white/20"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={magneticSpring}
            >
              <motion.div
                className="w-6 h-6 flex flex-col justify-center items-center relative"
                animate="closed"
              >
                <motion.span
                  className="w-6 h-0.5 bg-black absolute"
                  variants={{
                    closed: { rotate: 0, y: -4 },
                    open: { rotate: 45, y: 0 }
                  }}
                  transition={magneticSpring}
                />
                <motion.span
                  className="w-6 h-0.5 bg-black absolute"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={magneticSpring}
                />
                <motion.span
                  className="w-6 h-0.5 bg-black absolute"
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

      {/* Mobile Menu Overlay - Full Width with Glassy Background */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Full Width Menu - Glassy Dark Background */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-gray-900/80 backdrop-blur-xl z-50 overflow-hidden"
              initial={{ clipPath: "circle(0% at 100% 0%)" }}
              animate={{ clipPath: "circle(150% at 100% 0%)" }}
              exit={{ clipPath: "circle(0% at 100% 0%)" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="h-full flex flex-col p-6">
                {/* Header with Close Button */}
                <div className="flex justify-between items-center mb-12">
                  <motion.div
                    className="text-gray-400 text-xs uppercase tracking-widest"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Navigation
                  </motion.div>
                  
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 border border-white/10 backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    transition={magneticSpring}
                  >
                    <X className="text-white w-5 h-5" />
                  </motion.button>
                </div>

                {/* Navigation Links with Icons */}
                <nav className="flex-1">
                  {navLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    const isActive = location.pathname === link.path;
                    
                    return (
                      <motion.div
                        key={link.path}
                        className="relative py-5 border-b border-white/10 last:border-b-0"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center text-xl font-medium transition-colors duration-200 group ${
                            isActive 
                              ? 'text-blue-500' 
                              : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          {/* Active dot - Blue when active */}
                          <motion.div
                            className={`w-3 h-3 rounded-full mr-4 ${
                              isActive 
                                ? 'bg-blue-500' 
                                : 'bg-transparent'
                            }`}
                            layoutId="mobileActiveDot"
                            transition={magneticSpring}
                          />
                          
                          {/* Navigation Icon - Blue when active */}
                          <motion.div
                            className="mr-4"
                            whileHover={{ scale: 1.1 }}
                            transition={magneticSpring}
                          >
                            <IconComponent className={`w-6 h-6 ${
                              isActive 
                                ? 'text-blue-500' 
                                : 'text-gray-400 group-hover:text-white'
                            }`} />
                          </motion.div>
                          
                          <motion.span
                            className="relative"
                            whileHover={{ x: 10 }}
                            transition={magneticSpring}
                          >
                            {link.label}
                          </motion.span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Theme Toggle Section */}
                <motion.div
                  className="border-t border-white/10 pt-6 pb-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-gray-400 text-sm uppercase tracking-widest mb-4 text-center">
                    Theme
                  </p>
                  <div className="flex justify-center">
                    <div onClick={() => setIsMobileMenuOpen(false)}>
                      <ThemeToggle />
                    </div>
                  </div>
                </motion.div>

                {/* Social Links Section */}
                <motion.div
                  className="border-t border-white/10 pt-6 pb-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-gray-400 text-sm uppercase tracking-widest mb-6 text-center">
                    Connect With Me
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          className="relative w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group hover:bg-white/20 border border-white/10 backdrop-blur-sm"
                          whileHover={{ 
                            scale: 1.2,
                          }}
                          transition={magneticSpring}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                        >
                          <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white" />
                          
                          {/* Tooltip */}
                          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 text-xs px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap font-medium">
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