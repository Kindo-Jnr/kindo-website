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
  const [scrollY, setScrollY] = useState(0);

  // Native scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Handle page transitions
  useEffect(() => {
    if (previousPath && previousPath !== location.pathname) {
      setShowPageTransition(true);
      setTimeout(() => {
        setShowPageTransition(false);
      }, 800);
    }
    setPreviousPath(location.pathname);
  }, [location.pathname, previousPath]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollY={scrollY} />
      <MobileNav scrollY={scrollY} />

      {/* Simple main content area */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="w-full pt-24 lg:pt-24"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {showPageTransition && (
          <PageTransition title={location.pathname.replace("/", "") || "Home"} />
        )}
      </AnimatePresence>
    </div>
  );
}