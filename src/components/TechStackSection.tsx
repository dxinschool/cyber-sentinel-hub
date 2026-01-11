import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface TechTool {
  name: string;
  icon: string;
  category: string;
}

const techStack: TechTool[] = [
  { name: 'Python', icon: '🐍', category: 'Language' },
  { name: 'Kali Linux', icon: '🐉', category: 'OS' },
  { name: 'Wireshark', icon: '🦈', category: 'Network' },
  { name: 'Docker', icon: '🐳', category: 'Container' },
  { name: 'Ghidra', icon: '👻', category: 'Reverse' },
  { name: 'Burp Suite', icon: '🔥', category: 'Web' },
  { name: 'IDA Pro', icon: '💎', category: 'Reverse' },
  { name: 'Metasploit', icon: '⚔️', category: 'Exploit' },
  { name: 'Nmap', icon: '🗺️', category: 'Recon' },
  { name: 'John the Ripper', icon: '🔓', category: 'Crypto' },
  { name: 'Hashcat', icon: '🐱', category: 'Crypto' },
  { name: 'Git', icon: '📦', category: 'Version' },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyber-dark to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-xs font-mono text-secondary tracking-widest uppercase">
              // Our Arsenal
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-mono font-bold">
              <span className="text-foreground">Tech </span>
              <span className="gradient-text">Stack</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              The tools and technologies we use to hunt vulnerabilities, 
              crack puzzles, and capture flags.
            </p>
          </ScrollReveal>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {techStack.map((tool, index) => (
            <ScrollReveal
              key={tool.name}
              animation="scale-in"
              delay={index * 50}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="p-4 rounded-xl border border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm 
                  hover:bg-card/50 transition-all duration-300 text-center cursor-pointer
                  hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]"
                >
                  {/* Icon */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.2,
                      ease: "easeInOut" 
                    }}
                    className="text-3xl mb-2"
                  >
                    {tool.icon}
                  </motion.div>

                  {/* Name */}
                  <h4 className="text-sm font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </h4>

                  {/* Category */}
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    {tool.category}
                  </span>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Text */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <p className="text-sm font-mono text-muted-foreground">
              <span className="text-primary">{"$ "}</span>
              echo "Always learning, always evolving"
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
              />
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TechStackSection;
