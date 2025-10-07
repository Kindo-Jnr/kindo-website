import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContent = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      data-scroll-section 
      className="min-h-screen -mt-24 flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/kindo-profile 2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated Overlay Elements */}
      <div className="absolute inset-0">
        {/* Floating code elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            {['<>', '{}', '();', '=>', '[]', '/*', '*/', '==='][i % 8]}
          </motion.div>
        ))}
        
     
      </div>

      {/* Main Content */}
      <div className="relative  z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Animated Sparkle Icon */}
        <motion.div
          className="flex justify-center mb-8"
          data-scroll
          data-scroll-speed="0.5"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        >
          <div className="relative">
            <Sparkles className="w-10 h-10 text-brand-accent" />
            <motion.div
              className="absolute inset-0 bg-brand-accent rounded-full blur-lg"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
          data-scroll
          data-scroll-speed="0.8"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-white via-brand-accent to-white bg-clip-text text-transparent">
            Kindo
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed font-light"
          data-scroll
          data-scroll-speed="0.6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.5 }}
        >
          Creative <span className="text-brand-accent font-semibold">Developer</span> &{' '}
          <span className="text-brand-accent font-semibold">Designer</span>
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          data-scroll
          data-scroll-speed="0.5"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.6 }}
        >
          Crafting digital experiences that blend innovative design with cutting-edge technology
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-sm md:text-base text-gray-400 uppercase tracking-widest mb-12 font-mono"
          data-scroll
          data-scroll-speed="0.4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.8 }}
        >
          Full-Stack Developer • UI/UX Designer • Problem Solver
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          data-scroll
          data-scroll-speed="0.3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 1 }}
        >
          <motion.button
            className="px-8 py-4 bg-brand-accent text-white rounded-full font-semibold text-lg hover:bg-brand-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          className="group flex flex-col items-center text-gray-300 hover:text-brand-accent transition-colors duration-300"
          data-scroll
          data-scroll-speed="0.2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm uppercase tracking-widest mb-2 group-hover:translate-y-1 transition-transform duration-300">
            Discover More
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>

     
    </section>
  );
}