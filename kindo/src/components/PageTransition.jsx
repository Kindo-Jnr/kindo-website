import { motion } from "framer-motion";


export default function PageTransition({ title }) {
   
  return (
    <motion.div
      className="fixed inset-0 bg-black z-40 flex items-center justify-center"
      initial={{ 
        clipPath: "circle(0% at 50% 100%)"
      }}
      animate={{ 
        clipPath: "circle(150% at 50% 100%)"
      }}
      exit={{ 
        clipPath: "circle(0% at 50% 0%)"
      }}
      transition={{ 
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 0.8
      }}
    >
      <motion.h1
        className="text-5xl font-bold text-white"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 120,
          damping: 10,
          delay: 0.2
        }}
        
      >
        {title}
      </motion.h1>
    </motion.div>
  );
}