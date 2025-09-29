import { motion } from "framer-motion";

export default function PageTransition({ title }) {
  return (
    <motion.div
      className="fixed inset-0 bg-brand-dark flex items-center justify-center z-40"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-4xl font-bold text-brand-accent">{title}</h1>
    </motion.div>
  );
}
