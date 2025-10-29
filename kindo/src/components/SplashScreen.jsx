import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [show, setShow] = useState(true);

  const greetings = [
    { text: "Hello", language: "" },
    { text: "Hola", language: "" },
    { text: "Bonjour", language: "" },
    { text: "Ciao", language: "" },
    { text: "Hallo", language: "" },
    { text: "こんにちは", language: "" },
    { text: "你好", language: "" },
    { text: "Welcome", language: "" },
  ];

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 250);

    const closeTimer = setTimeout(() => {
      setShow(false);
    }, greetings.length * 185 + 500);

    return () => {
      clearInterval(greetingInterval);
      clearTimeout(closeTimer);
    };
  }, [greetings.length]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ 
            clipPath: "circle(100% at 50% 50%)",
            y: 0 
          }}
          exit={{
            clipPath: "circle(100% at 50% -35%)",
            y: "-100vh",
            transition: {
              type: "spring",
              stiffness: 60,
              damping: 25,
              mass: 1.1,
              bounce: 2.4
            }
          }}
          onAnimationComplete={onFinish}
        >
          {/* Background elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500 rounded-full"
              animate={{
                scale: [1, 3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>

          {/* Main content */}
          <div className="text-center">
            <motion.div
              key={currentGreeting}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15 
              }}
              className="mb-4"
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-white mb-2"
              
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
              >
                {greetings[currentGreeting].text}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.1 }}
                className="text-sm md:text-base text-gray-400 uppercase tracking-widest"
              >
                {greetings[currentGreeting].language}
              </motion.p>
            </motion.div>

            {/* Loading portfolio text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1 }}
              className="text-xs text-gray-500 mt-12 uppercase tracking-widest"
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}