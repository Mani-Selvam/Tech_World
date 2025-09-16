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
    for (let i = 0; i < 8; i++) {
      bubbles.push({
        id: i,
        x: (i * 12.5) + (Math.random() * 10), // Spread across width with some randomness
        y: -80 - (Math.random() * 120), // Start below screen (-80 to -200px)
        width: Math.random() * 80 + 40,
        height: Math.random() * 80 + 40,
        speed: Math.random() * 20 + 15,
        delay: Math.random() * 8,
      });
    }
    return bubbles;
  }, []);

  useEffect(() => {
    // Create initial bubbles
    const createBubbles = () => {
      const newBubbles: Bubble[] = [];
      const bubbleCount = 25; // More bubbles for better coverage

      for (let i = 0; i < bubbleCount; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 95, // Random x position across screen width
          y: -50 - (Math.random() * 100), // Start below screen (-50 to -150px)
          size: Math.random() * 50 + 15, // Size between 15-65px
          speed: Math.random() * 15 + 8, // Faster animation (8-23s)
          delay: Math.random() * 12, // Random delay 0-12s
          opacity: Math.random() * 0.6 + 0.3, // Higher opacity (0.3-0.9)
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
            bottom: `${bubble.y}px`, // Start from below screen
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle, 
              hsla(262, 83%, 58%, ${bubble.opacity}) 0%, 
              hsla(262, 83%, 58%, ${bubble.opacity * 0.7}) 30%, 
              hsla(262, 83%, 58%, ${bubble.opacity * 0.3}) 70%, 
              transparent 100%)`,
            boxShadow: `
              0 0 ${bubble.size * 0.8}px hsla(262, 83%, 58%, ${bubble.opacity}),
              0 0 ${bubble.size * 1.5}px hsla(262, 83%, 58%, ${bubble.opacity * 0.6}),
              0 0 ${bubble.size * 2}px hsla(262, 83%, 58%, ${bubble.opacity * 0.3})
            `,
            animationDuration: `${bubble.speed}s`,
            animationDelay: `${bubble.delay}s`,
            filter: 'blur(0.5px)',
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
            bottom: `${bubble.y}px`, // Start from below screen
            width: `${bubble.width}px`,
            height: `${bubble.height}px`,
            background: `radial-gradient(circle, 
              hsla(262, 83%, 58%, 0.4) 0%, 
              hsla(262, 83%, 58%, 0.2) 30%, 
              hsla(24, 95%, 53%, 0.15) 60%,
              transparent 100%)`,
            boxShadow: `
              0 0 ${bubble.width}px hsla(262, 83%, 58%, 0.4),
              0 0 ${bubble.width * 1.5}px hsla(262, 83%, 58%, 0.2),
              0 0 ${bubble.width * 2}px hsla(24, 95%, 53%, 0.1)
            `,
            animationDuration: `${bubble.speed}s`,
            animationDelay: `${bubble.delay}s`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
}