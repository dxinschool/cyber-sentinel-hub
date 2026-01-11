import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Users, Target, Flag, Code2 } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: '4', label: 'Team Members' },
    { icon: Target, value: '10+', label: 'CTFs Completed' },
    { icon: Flag, value: '50+', label: 'Flags Captured' },
    { icon: Code2, value: '∞', label: 'Lines of Code' },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyber-slate/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Terminal Window */}
          <ScrollReveal animation="slide-left">
            <div className="cyber-card overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-cyber-slate/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-primary/80" />
                </div>
                <span className="ml-4 text-xs font-mono text-muted-foreground">about.sh</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-muted-foreground">
                  <span className="text-primary">$</span> cat about.txt
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-4 space-y-4"
                >
                  <p className="text-foreground">
                    <span className="text-secondary">{">>"}</span> We are{' '}
                    <span className="text-primary font-semibold">Sing Yin Jockey Club</span>, 
                    a team of 4 dedicated students from Hong Kong.
                  </p>
                  <p className="text-foreground">
                    <span className="text-secondary">{">>"}</span> Our passion lies in{' '}
                    <span className="text-primary">Information and Communication Technologies (ICT)</span>{' '}
                    and competitive{' '}
                    <span className="text-secondary">Cybersecurity Capture The Flag (CTF)</span>{' '}
                    challenges.
                  </p>
                  <p className="text-foreground">
                    <span className="text-secondary">{">>"}</span> Together, we explore vulnerabilities, 
                    crack codes, and push the boundaries of what's possible in the digital realm.
                  </p>
                </motion.div>
                <div className="mt-6 text-muted-foreground">
                  <span className="text-primary">$</span>{' '}
                  <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div className="space-y-8">
            <ScrollReveal animation="slide-right">
              <div>
                <span className="text-xs font-mono text-primary tracking-widest uppercase">
                  // Who We Are
                </span>
                <h2 className="mt-4 text-4xl md:text-5xl font-mono font-bold">
                  <span className="text-foreground">About </span>
                  <span className="gradient-text">Us</span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Born from a shared love for technology and problem-solving, our team 
                represents the next generation of cybersecurity enthusiasts. We compete, 
                we learn, and we grow together — always ready to tackle the next challenge 
                that comes our way.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" delay={200}>
              <p className="text-muted-foreground leading-relaxed">
                From reverse engineering binaries to exploiting web vulnerabilities, 
                from breaking cryptographic puzzles to forensic analysis — we do it all. 
                Every CTF is an opportunity to learn something new and push our limits further.
              </p>
            </ScrollReveal>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} animation="scale-in" delay={300 + index * 100}>
                  <motion.div
                    whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                    className="p-4 border border-border rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 group"
                  >
                    <stat.icon className="w-5 h-5 text-primary mb-2 group-hover:text-glow-lime transition-all" />
                    <div className="text-2xl font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {stat.label}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
