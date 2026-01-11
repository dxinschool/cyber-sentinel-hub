import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { User, Shield, Code, Search, Lock } from 'lucide-react';

interface TeamMember {
  name: string;
  specialty: string;
  description: string;
  icon: typeof User;
  accentColor: 'primary' | 'secondary';
}

const teamMembers: TeamMember[] = [
  {
    name: 'Member One',
    specialty: 'Reverse Engineering',
    description: 'Breaking binaries and uncovering hidden secrets in compiled code.',
    icon: Code,
    accentColor: 'primary',
  },
  {
    name: 'Member Two',
    specialty: 'Web Exploitation',
    description: 'Finding and exploiting vulnerabilities in web applications.',
    icon: Search,
    accentColor: 'secondary',
  },
  {
    name: 'Member Three',
    specialty: 'Cryptography',
    description: 'Cracking codes and breaking encryption algorithms.',
    icon: Lock,
    accentColor: 'primary',
  },
  {
    name: 'Member Four',
    specialty: 'Forensics',
    description: 'Analyzing digital evidence and recovering hidden data.',
    icon: Shield,
    accentColor: 'secondary',
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyber-dark to-background" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <span className="text-xs font-mono text-secondary tracking-widest uppercase">
              // Meet The Crew
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-mono font-bold">
              <span className="text-foreground">The </span>
              <span className="gradient-text">Team</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Four passionate individuals united by a common goal — to excel in 
              cybersecurity and make our mark in the CTF community.
            </p>
          </ScrollReveal>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <ScrollReveal
              key={member.name}
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={index * 150}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative p-8 rounded-xl border transition-all duration-500 
                  ${member.accentColor === 'primary' 
                    ? 'border-primary/20 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]' 
                    : 'border-secondary/20 hover:border-secondary/50 hover:shadow-[0_0_40px_-10px_hsl(var(--secondary)/0.3)]'
                  }
                  bg-card/30 backdrop-blur-sm hover:bg-card/50`}
                >
                  {/* Glowing Corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 
                    ${member.accentColor === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} 
                    blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                  />

                  <div className="relative flex gap-6">
                    {/* Avatar Placeholder */}
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        className={`w-20 h-20 rounded-xl border-2 flex items-center justify-center
                          ${member.accentColor === 'primary' 
                            ? 'border-primary/30 bg-primary/10' 
                            : 'border-secondary/30 bg-secondary/10'
                          } transition-all duration-300 group-hover:border-opacity-60`}
                      >
                        <member.icon className={`w-8 h-8 
                          ${member.accentColor === 'primary' ? 'text-primary' : 'text-secondary'}`} 
                        />
                      </motion.div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <div className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-mono 
                        ${member.accentColor === 'primary' 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-secondary/20 text-secondary border border-secondary/30'
                        }`}
                      >
                        {member.specialty}
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className={`absolute bottom-0 left-0 right-0 h-[2px] origin-left
                      ${member.accentColor === 'primary' 
                        ? 'bg-gradient-to-r from-primary to-primary/0' 
                        : 'bg-gradient-to-r from-secondary to-secondary/0'
                      }`}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Text */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <p className="text-sm font-mono text-muted-foreground">
              <span className="text-primary">{">"}</span> Ready to collaborate and conquer 
              <span className="text-secondary"> {"<"}</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TeamSection;
