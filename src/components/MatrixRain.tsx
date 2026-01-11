import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  className?: string;
}

const MatrixRain = ({ className = '' }: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - mix of katakana, numbers, and symbols
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]|/\\@#$%^&*';
    const charArray = chars.split('');
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array of drop positions
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Color variations for depth
    const getColor = (y: number, height: number) => {
      const ratio = y / height;
      if (ratio < 0.1) return 'rgba(57, 255, 20, 1)'; // Brightest at top
      if (ratio < 0.3) return 'rgba(57, 255, 20, 0.9)';
      if (ratio < 0.5) return 'rgba(57, 255, 20, 0.7)';
      if (ratio < 0.7) return 'rgba(0, 212, 255, 0.5)'; // Transition to blue
      return 'rgba(0, 212, 255, 0.3)';
    };

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Fira Code', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading character is brightest
        ctx.fillStyle = 'rgba(57, 255, 20, 1)';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#39FF14';
        ctx.fillText(char, x, y);

        // Trail characters with varying opacity
        ctx.shadowBlur = 0;
        for (let j = 1; j < 20; j++) {
          const trailY = y - j * fontSize;
          if (trailY > 0) {
            const opacity = 1 - (j / 20);
            const trailChar = charArray[Math.floor(Math.random() * charArray.length)];
            
            if (j < 5) {
              ctx.fillStyle = `rgba(57, 255, 20, ${opacity * 0.8})`;
            } else if (j < 10) {
              ctx.fillStyle = `rgba(0, 212, 255, ${opacity * 0.6})`;
            } else {
              ctx.fillStyle = `rgba(0, 212, 255, ${opacity * 0.3})`;
            }
            ctx.fillText(trailChar, x, trailY);
          }
        }

        // Reset drop when it reaches bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i] += 0.5 + Math.random() * 0.5;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default MatrixRain;
