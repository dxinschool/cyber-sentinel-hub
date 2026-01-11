import { motion } from 'framer-motion';
import { ChevronDown, Shield, Terminal } from 'lucide-react';
import MatrixRain from './MatrixRain';
import TypingText from './TypingText';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 z-[1]" />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-4 mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border border-primary/50 rounded-lg flex items-center justify-center"
          >
            <Shield className="w-6 h-6 text-primary" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border border-secondary/50 rounded-lg flex items-center justify-center"
          >
            <Terminal className="w-6 h-6 text-secondary" />
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold mb-6">
            <span className="text-primary text-glow-lime-strong">Sing Yin</span>
            <br />
            <span className="text-secondary text-glow-blue">Jockey Club</span>
          </h1>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-48 h-[2px] mx-auto mb-8 bg-gradient-to-r from-transparent via-primary to-transparent"
        />

        {/* Tagline with Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-muted-foreground">
            <TypingText 
              text="Securing the Future, One Flag at a Time." 
              delay={1200}
              speed={60}
            />
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          onClick={scrollToAbout}
          className="group relative px-8 py-4 font-mono text-lg overflow-hidden rounded-lg border border-primary/50 bg-primary/10 hover:bg-primary/20 transition-all duration-300"
        >
          <span className="relative z-10 text-primary group-hover:text-glow-lime transition-all duration-300">
            {">"} Explore_
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </motion.button>

        {/* Tech Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="mt-12 flex justify-center gap-3"
        >
          {['CTF', 'ICT', 'INFOSEC'].map((tag, index) => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs font-mono border border-muted-foreground/30 rounded text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-300"
              style={{ animationDelay: `${2 + index * 0.1}s` }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs font-mono">scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 z-10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-secondary/30 z-10" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-secondary/30 z-10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 z-10" />
    </section>
  );
};

export default HeroSection;
