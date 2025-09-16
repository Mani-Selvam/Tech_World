import { useEffect, useState, useMemo } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  delay: number;
  opacity: number;
}

interface AccentBubble {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  delay: number;
}

export default function BubbleAnimation() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  
  // Generate stable accent bubble data once
  const accentBubbles = useMemo<AccentBubble[]>(() => {
    const bubbles: AccentBubble[] = [];
    for (let i = 0; i < 5; i++) {
      bubbles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: Math.random() * 120 + 80,
        height: Math.random() * 120 + 80,
        speed: Math.random() * 30 + 20,
        delay: Math.random() * 15,
      });
    }
    return bubbles;
  }, []);

  useEffect(() => {
    // Create initial bubbles
    const createBubbles = () => {
      const newBubbles: Bubble[] = [];
      const bubbleCount = 15; // Number of bubbles

      for (let i = 0; i < bubbleCount; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100, // Random x position (percentage)
          y: Math.random() * 100, // Random y position (percentage)
          size: Math.random() * 60 + 20, // Size between 20-80px
          speed: Math.random() * 20 + 10, // Animation duration between 10-30s
          delay: Math.random() * 10, // Random delay 0-10s
          opacity: Math.random() * 0.3 + 0.1, // Opacity between 0.1-0.4
        });
      }
      
      setBubbles(newBubbles);
    };

    createBubbles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full animate-bubble"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle, 
              hsla(262, 83%, 58%, ${bubble.opacity}) 0%, 
              hsla(262, 83%, 58%, ${bubble.opacity * 0.5}) 50%, 
              transparent 100%)`,
            boxShadow: `
              0 0 ${bubble.size * 0.5}px hsla(262, 83%, 58%, ${bubble.opacity * 0.8}),
              0 0 ${bubble.size}px hsla(262, 83%, 58%, ${bubble.opacity * 0.4}),
              inset 0 0 ${bubble.size * 0.3}px hsla(262, 83%, 58%, ${bubble.opacity * 0.6})
            `,
            animationDuration: `${bubble.speed}s`,
            animationDelay: `${bubble.delay}s`,
            filter: 'blur(1px)',
          }}
        />
      ))}
      
      {/* Additional larger accent bubbles */}
      {accentBubbles.map((bubble) => (
        <div
          key={`accent-${bubble.id}`}
          className="absolute rounded-full animate-bubble-slow"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.width}px`,
            height: `${bubble.height}px`,
            background: `radial-gradient(circle, 
              hsla(262, 83%, 58%, 0.15) 0%, 
              hsla(262, 83%, 58%, 0.08) 40%, 
              hsla(24, 95%, 53%, 0.05) 70%,
              transparent 100%)`,
            boxShadow: `
              0 0 60px hsla(262, 83%, 58%, 0.2),
              0 0 120px hsla(262, 83%, 58%, 0.1)
            `,
            animationDuration: `${bubble.speed}s`,
            animationDelay: `${bubble.delay}s`,
            filter: 'blur(2px)',
          }}
        />
      ))}
    </div>
  );
}