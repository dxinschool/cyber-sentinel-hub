import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Trophy, Calendar, MapPin, Award } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  result?: string;
  type: 'ctf' | 'event' | 'award';
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Hong Kong CTF 2026',
    date: 'January 2026',
    location: 'Hong Kong',
    description: 'Participated in the regional cybersecurity competition, tackling challenges in web, crypto, and forensics.',
    result: 'Top 10 Finish',
    type: 'ctf',
  },
  {
    id: 2,
    title: 'CyberSec Summit HK',
    date: 'December 2025',
    location: 'Hong Kong Convention Centre',
    description: 'Attended workshops on emerging threats and network security best practices.',
    type: 'event',
  },
  {
    id: 3,
    title: 'picoCTF 2025',
    date: 'October 2025',
    location: 'Online',
    description: 'Competed in the global CTF competition organized by Carnegie Mellon University.',
    result: 'Top 5% Global',
    type: 'ctf',
  },
  {
    id: 4,
    title: 'ICT Excellence Award',
    date: 'September 2025',
    location: 'Sing Yin Secondary School',
    description: 'Recognized for outstanding achievement and dedication in Information Technology.',
    type: 'award',
  },
  {
    id: 5,
    title: 'HackTheBox University CTF',
    date: 'August 2025',
    location: 'Online',
    description: 'Joined forces with other teams to solve advanced penetration testing challenges.',
    result: 'Bronze Tier',
    type: 'ctf',
  },
];

const getTypeIcon = (type: Achievement['type']) => {
  switch (type) {
    case 'ctf':
      return Trophy;
    case 'event':
      return Calendar;
    case 'award':
      return Award;
    default:
      return Trophy;
  }
};

const getTypeColor = (type: Achievement['type']) => {
  switch (type) {
    case 'ctf':
      return 'primary';
    case 'event':
      return 'secondary';
    case 'award':
      return 'primary';
    default:
      return 'primary';
  }
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyber-slate/10 to-background" />
      
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scaleX: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <span className="text-xs font-mono text-primary tracking-widest uppercase">
              // Our Journey
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-mono font-bold">
              <span className="gradient-text">Achievements</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              A timeline of our competitions, events, and milestones in the 
              world of cybersecurity and ICT.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 hidden md:block" />
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => {
              const Icon = getTypeIcon(achievement.type);
              const colorClass = getTypeColor(achievement.type);
              const isLeft = index % 2 === 0;

              return (
                <ScrollReveal
                  key={achievement.id}
                  animation={isLeft ? 'slide-left' : 'slide-right'}
                  delay={index * 100}
                >
                  <div className={`relative flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                    >
                      <div className={`p-6 rounded-xl border transition-all duration-300 
                        ${colorClass === 'primary' 
                          ? 'border-primary/20 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.2)]' 
                          : 'border-secondary/20 hover:border-secondary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--secondary)/0.2)]'
                        }
                        bg-card/30 backdrop-blur-sm group`}
                      >
                        {/* Date Badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4
                          ${colorClass === 'primary' 
                            ? 'bg-primary/10 text-primary border border-primary/20' 
                            : 'bg-secondary/10 text-secondary border border-secondary/20'
                          }`}
                        >
                          <Calendar className="w-3 h-3" />
                          {achievement.date}
                        </div>

                        {/* Title */}
                        <h3 className={`text-xl font-mono font-bold mb-2 group-hover:text-${colorClass} transition-colors`}>
                          {achievement.title}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 justify-start md:justify-end">
                          <MapPin className="w-3 h-3" />
                          <span>{achievement.location}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>

                        {/* Result Badge */}
                        {achievement.result && (
                          <div className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg font-mono text-sm
                            ${colorClass === 'primary' 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-secondary/20 text-secondary'
                            }`}
                          >
                            <Trophy className="w-4 h-4" />
                            {achievement.result}
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Center Icon - Desktop Only */}
                    <div className="hidden md:flex items-center justify-center relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center
                          ${colorClass === 'primary' 
                            ? 'border-primary bg-primary/20 text-primary' 
                            : 'border-secondary bg-secondary/20 text-secondary'
                          } transition-all duration-300`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* End Marker */}
          <ScrollReveal delay={achievements.length * 100 + 200}>
            <div className="flex justify-center mt-16">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-6 py-3 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm"
              >
                More adventures await...
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
