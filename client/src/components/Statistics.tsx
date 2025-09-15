import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration: number;
  suffix: string;
}

function Counter({ end, duration, suffix }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Statistics() {
  return (
    <section className="py-16 bg-secondary/50" id="statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-primary" data-testid="counter-attendees">
              <Counter end={15000} duration={2000} suffix="+" />
            </h3>
            <p className="text-muted-foreground text-lg">attendees</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-accent" data-testid="counter-speakers">
              <Counter end={200} duration={2000} suffix="+" />
            </h3>
            <p className="text-muted-foreground text-lg">speakers</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-primary" data-testid="counter-countries">
              <Counter end={130} duration={2000} suffix="+" />
            </h3>
            <p className="text-muted-foreground text-lg">countries</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-accent" data-testid="counter-booths">
              <Counter end={200} duration={2000} suffix="+" />
            </h3>
            <p className="text-muted-foreground text-lg">Booths</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-muted-foreground">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-sm" data-testid="text-established">Established in 2017</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
