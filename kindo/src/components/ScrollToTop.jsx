import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      const showPosition = 300;
      const scrolled = document.documentElement.scrollTop;
      
      setIsVisible(scrolled > showPosition);
      
      // Calculate scroll progress for circle fill
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const progress = (scrolled / maxScroll) * 100;
      
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const magneticScrollToTop = () => {
    // First, create a slight upward bounce before scrolling to top
    const startPosition = window.scrollY;
    const bounceDistance = Math.min(200, startPosition * 0.3); // Bounce up 10% of current position or max 100px
    
    const bounceAnimation = () => {
      const bounceDuration = 300;
      let startTime = null;

      const animateBounce = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / bounceDuration, 1);
        
        // Ease out bounce
        const bounceProgress = 1 - Math.pow(1 - progress, 3);
        const currentScroll = startPosition - (bounceDistance * bounceProgress);
        
        window.scrollTo(0, currentScroll);
        
        if (timeElapsed < bounceDuration) {
          requestAnimationFrame(animateBounce);
        } else {
          // After bounce, start the main scroll to top
          startMainScroll();
        }
      };

      requestAnimationFrame(animateBounce);
    };

    const startMainScroll = () => {
      const currentPosition = window.scrollY;
      const targetPosition = 0;
      const distance = targetPosition - currentPosition;
      const duration = 800; // ms
      let startTime = null;

      // Magnetic easing function
      const magneticEase = (t) => {
        return t < 0.5 
          ? 4 * t * t * t 
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animateScroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const easeProgress = magneticEase(progress);
        
        window.scrollTo(0, currentPosition + distance * easeProgress);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    // Start with the bounce animation
    bounceAnimation();
  };

  // Calculate circle stroke properties
  const circleRadius = 49;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (scrollProgress / 100) * circleCircumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full shadow-2xl backdrop-blur-sm border cursor-pointer group"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
          }}
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          whileHover={{
            scale: 1.1,
            y: -2,
            transition: { type: "spring", stiffness: 500, damping: 15 }
          }}
          whileTap={{ scale: 0.9 }}
          onClick={magneticScrollToTop}
        >
          {/* Circular Progress Background */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <svg 
              className="w-full h-full transform -rotate-90" 
              viewBox="0 0 100 100"
            >
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r={circleRadius}
                stroke="var(--border-color)"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
              {/* Progress Circle */}
              <motion.circle
                cx="50"
                cy="50"
                r={circleRadius}
                stroke="var(--text-color)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ strokeDashoffset: circleCircumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.1 }}
                style={{
                  strokeDasharray: circleCircumference,
                }}
              />
            </svg>
          </div>

          {/* Arrow Icon */}
          <motion.div
            className="relative z-10 flex items-center justify-center w-full h-full"
            animate={{ 
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowUp 
              className="w-5 h-5" 
              style={{ color: "var(--text-color)" }}
            />
          </motion.div>

          {/* Magnetic Pull Effect on Hover */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100"
            style={{ borderColor: "var(--text-color)" }}
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.2,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10,
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8
              }
            }}
          />

          {/* Tooltip */}
          <motion.div
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-semibold text-sm shadow-2xl"
            style={{
              backgroundColor: "var(--tooltip-bg)",
              color: "var(--tooltip-text)",
            }}
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            Scroll to Top
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 rotate-45"
              style={{ backgroundColor: "var(--tooltip-bg)" }}
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}