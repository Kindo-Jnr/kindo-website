import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@components/Navbar";
import MobileNav from "@components/MobileNav";
import PageTransition from "@components/PageTransition";
import { useState, useEffect } from "react";

export default function Layout() {
  const location = useLocation();
  const [showPageTransition, setShowPageTransition] = useState(false);
  const [previousPath, setPreviousPath] = useState("");

  useEffect(() => {
    // Only show page transition when path actually changes (not on initial load)
    if (previousPath && previousPath !== location.pathname) {
      setShowPageTransition(true);
      const timer = setTimeout(() => setShowPageTransition(false), 1000);
      return () => clearTimeout(timer);
    }
    setPreviousPath(location.pathname);
  }, [location.pathname, previousPath]);

  return (
    <div>
      {/* Desktop Navigation */}
      <Navbar />
      
      {/* Mobile Navigation */}
      <MobileNav />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="pt-20 lg:pt-24" // Adjusted padding for both mobile and desktop
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      {/* Page transition overlay - only show during route changes */}
      <AnimatePresence>
        {showPageTransition && (
          <PageTransition title={location.pathname.replace("/", "") || "Home"} />
        )}
      </AnimatePresence>
    </div>
  );
}