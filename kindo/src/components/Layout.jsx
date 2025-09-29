import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@components/Navbar";
import PageTransition from "@components/PageTransition";

export default function Layout() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Outlet />
        </motion.div>

        {/* Page transition overlay */}
        <PageTransition title={location.pathname.replace("/", "") || "Home"} />
      </AnimatePresence>
    </div>
  );
}
