import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@components/Navbar";
import MobileNav from "@components/MobileNav";
import PageTransition from "@components/PageTransition";
import { useState, useEffect, useRef } from "react";

export default function Layout() {
  const location = useLocation();
  const [showPageTransition, setShowPageTransition] = useState(false);
  const [previousPath, setPreviousPath] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);

  useEffect(() => {
    // Dynamically import Locomotive Scroll
    const initLocomotive = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      locoScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
        lerp: 0.08,
        multiplier: 1.2,
        getDirection: true,
        getSpeed: true,
        class: "is-reveal",
      });

      // Listen to scroll updates
      locoScrollRef.current.on("scroll", (args) => {
        setScrollY(args.scroll.y);
      });

      // Update on route change
      locoScrollRef.current.on("call", (value, way, obj) => {
        if (value === "update") {
          locoScrollRef.current.update();
        }
      });
    };

    initLocomotive();

    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
      }
    };
  }, []);

  // Update Locomotive Scroll on route change
  useEffect(() => {
    if (locoScrollRef.current) {
      setTimeout(() => {
        locoScrollRef.current.update();
      }, 100);
    }
  }, [location.pathname]);

  // Handle page transitions
  useEffect(() => {
    if (previousPath && previousPath !== location.pathname) {
      setShowPageTransition(true);
      setTimeout(() => {
        setShowPageTransition(false);
        if (locoScrollRef.current) {
          locoScrollRef.current.update();
        }
      }, 800);
    }
    setPreviousPath(location.pathname);
  }, [location.pathname, previousPath]);

  return (
    <div className="relative">
      {/* Navigation Components */}
      <Navbar scrollY={scrollY} />
      <MobileNav scrollY={scrollY} />

      {/* Locomotive Scroll Container */}
      <div
        ref={scrollRef}
        data-scroll-container
        className="overflow-hidden will-change-transform"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            data-scroll-section
            className="pt-20 lg:pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page Transition Overlay */}
      <AnimatePresence>
        {showPageTransition && (
          <PageTransition title={location.pathname.replace("/", "") || "Home"} />
        )}
      </AnimatePresence>
    </div>
  );
}