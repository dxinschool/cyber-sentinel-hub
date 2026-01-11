import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8';
      case 'fade-in':
        return isVisible ? 'animate-fade-in' : 'opacity-0';
      case 'scale-in':
        return isVisible ? 'animate-scale-in' : 'opacity-0 scale-95';
      case 'slide-left':
        return isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-12';
      case 'slide-right':
        return isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-12';
      default:
        return isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
