import { useMemo } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  delay: number;
  opacity: number;
}

interface SectionBubblesProps {
  count?: number; // Number of bubbles (4-6)
  className?: string;
}

export default function SectionBubbles({ count = 5, className = "" }: SectionBubblesProps) {
  // Generate stable bubble data once
  const bubbles = useMemo<Bubble[]>(() => {
    const newBubbles: Bubble[] = [];
    
    for (let i = 0; i < count; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * 90 + 5, // Random x position (5% to 95%)
        y: Math.random() * 80 + 10, // Random y position (10% to 90%)
        size: Math.random() * 30 + 20, // Size between 20-50px
        speed: Math.random() * 10 + 15, // Animation speed (15-25s)
        delay: Math.random() * 8, // Random delay 0-8s
        opacity: Math.random() * 0.4 + 0.2, // Opacity (0.2-0.6)
      });
    }
    
    return newBubbles;
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full animate-bounce"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle, 
              hsla(262, 83%, 58%, ${bubble.opacity}) 0%, 
              hsla(262, 83%, 58%, ${bubble.opacity * 0.7}) 30%, 
              hsla(262, 83%, 58%, ${bubble.opacity * 0.3}) 70%, 
              transparent 100%)`,
            boxShadow: `
              0 0 ${bubble.size * 0.6}px hsla(262, 83%, 58%, ${bubble.opacity}),
              0 0 ${bubble.size * 1.2}px hsla(262, 83%, 58%, ${bubble.opacity * 0.5})
            `,
            animationDuration: `${bubble.speed}s`,
            animationDelay: `${bubble.delay}s`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  );
}