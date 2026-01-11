import { motion } from 'framer-motion';
import { Github, Instagram, Mail, Terminal, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      color: 'hover:text-primary hover:border-primary/50',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com',
      color: 'hover:text-pink-400 hover:border-pink-400/50',
    },
  ];

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-background to-background" />
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Matrix Effect - Subtle */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(var(--primary)) 2px,
            hsl(var(--primary)) 3px
          )`,
          backgroundSize: '100% 4px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-mono font-bold">
                <span className="text-primary">Sing Yin</span>{' '}
                <span className="text-secondary">JC</span>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              Securing the Future, One Flag at a Time
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 mb-12"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl border border-border bg-card/30 backdrop-blur-sm 
                  text-muted-foreground transition-all duration-300 ${social.color}
                  hover:bg-card/50 hover:shadow-lg`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}

            {/* Contact Button */}
            <motion.a
              href="mailto:contact@singyin-jc.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-4 rounded-xl border border-primary/30 
                bg-primary/10 text-primary font-mono text-sm hover:bg-primary/20 
                hover:border-primary/50 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </motion.a>
          </motion.div>

          {/* Divider */}
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-4"
          >
            {/* Copyright */}
            <p className="text-sm text-muted-foreground font-mono">
              © {currentYear} Sing Yin Jockey Club. All rights reserved.
            </p>

            {/* Made with love */}
            <p className="text-xs text-muted-foreground/60 flex items-center justify-center gap-1">
              Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-3 h-3 text-destructive inline" />
              </motion.span>{' '}
              in Hong Kong
            </p>

            {/* ASCII Art Touch */}
            <div className="pt-4 text-[10px] font-mono text-muted-foreground/40 leading-tight">
              <pre className="inline-block">
{`   _____ __  __    _   _  ______
  / ____|  \\/  |  | | | |/ ____/
 | (___ | \\  / |  | | | | |     
  \\___ \\| |\\/| |  | | | | |     
  ____) | |  | |  | |_| | |____ 
 |_____/|_|  |_|   \\___/ \\_____|`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute bottom-4 left-4 text-xs font-mono text-muted-foreground/30">
        v1.0.0
      </div>
      <div className="absolute bottom-4 right-4 text-xs font-mono text-muted-foreground/30">
        HK_2026
      </div>
    </footer>
  );
};

export default Footer;
