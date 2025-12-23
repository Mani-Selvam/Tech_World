import { useEffect, useRef, useState } from 'react';

interface Bubble {
  x: number;
  y: number;
  radius: number;
  velocityY: number;
  velocityX: number;
  opacity: number;
}

export default function BubbleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLCPComplete, setIsLCPComplete] = useState(false);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Mobile|Android|iPhone/.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detect LCP completion using PerformanceObserver
  useEffect(() => {
    if (isMobile) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          // Delay start by 200ms after LCP for smooth transition
          setTimeout(() => setIsLCPComplete(true), 200);
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // Fallback: if LCP doesn't trigger in 3 seconds, start anyway
    const timeout = setTimeout(() => setIsLCPComplete(true), 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [isMobile]);

  // Initialize and animate bubbles
  useEffect(() => {
    if (!isLCPComplete || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize 10 bubbles
    const initializeBubbles = () => {
      bubblesRef.current = [];
      for (let i = 0; i < 10; i++) {
        bubblesRef.current.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 50, // Start below screen
          radius: Math.random() * 25 + 15, // 15-40px
          velocityY: -(Math.random() * 0.8 + 0.4), // Upward movement
          velocityX: (Math.random() - 0.5) * 0.4, // Slight horizontal drift
          opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7
        });
      }
    };

    initializeBubbles();

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'transparent';
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw bubbles
      bubblesRef.current.forEach((bubble) => {
        // Update position
        bubble.x += bubble.velocityX;
        bubble.y += bubble.velocityY;

        // Reset bubble when it goes off screen
        if (bubble.y + bubble.radius < 0) {
          bubble.y = canvas.height + bubble.radius;
          bubble.x = Math.random() * canvas.width;
        }

        // Draw bubble with purple color, no blur, no shadow
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);

        // Simple radial gradient (no blur needed, canvas renders smoothly)
        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.radius * 0.3,
          bubble.y - bubble.radius * 0.3,
          0,
          bubble.x,
          bubble.y,
          bubble.radius
        );
        gradient.addColorStop(0, `hsla(262, 83%, 58%, ${bubble.opacity})`);
        gradient.addColorStop(0.6, `hsla(262, 83%, 58%, ${bubble.opacity * 0.4})`);
        gradient.addColorStop(1, `hsla(262, 83%, 58%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isLCPComplete, isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  // Only show canvas after LCP
  if (!isLCPComplete) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        display: 'block',
        background: 'transparent',
      }}
    />
  );
}
