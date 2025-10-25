import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import SectionBubbles from "@/components/SectionBubbles";

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

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

export default function Statistics() {
    return (
        <section className="py-16" id="statistics">
            {/* Academy Section - No padding */}
            <ScrollReveal variant="scale-up" duration={1000} delay={100}>
                <section className="relative bg-secondary/30" id="academy">
                    <SectionBubbles count={5} />
                    <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 p-4">
                        <h2 className="text-2xl md:text-5xl lg:text-4xl font-bold leading-tight">
                            <span
                                className="inline-block transition-transform duration-700 delay-300 transform hover:scale-105 p-4"
                                style={{
                                    animation:
                                        "pulseText 2s ease-in-out infinite",
                                }}>
                                The World's Leading All-in-One Web3 Academy
                            </span>
                            <br />
                            <span
                                className="inline-block text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-700 delay-500 transform hover:scale-105"
                                style={{
                                    animation: "gradientMove 4s ease infinite",
                                    backgroundSize: "200% 200%",
                                }}>
                                TechARA
                            </span>
                            <style>
                                {`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulseText {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}
                            </style>
                        </h2>
                    </div>
                </section>
            </ScrollReveal>
            <br />
            <div className="max-w-7xl mx-auto bg-transparent px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2">
                        <h3
                            className="text-4xl md:text-5xl font-bold text-primary"
                            data-testid="counter-attendees">
                            <Counter end={15000} duration={4000} suffix="+" />
                        </h3>
                        <p className="text-muted-foreground text-lg">
                            attendees
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3
                            className="text-4xl md:text-5xl font-bold text-accent"
                            data-testid="counter-speakers">
                            <Counter end={200} duration={4000} suffix="+" />
                        </h3>
                        <p className="text-muted-foreground text-lg">
                            speakers
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3
                            className="text-4xl md:text-5xl font-bold text-primary"
                            data-testid="counter-countries">
                            <Counter end={130} duration={4000} suffix="+" />
                        </h3>
                        <p className="text-muted-foreground text-lg">
                            countries
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3
                            className="text-4xl md:text-5xl font-bold text-accent"
                            data-testid="counter-booths">
                            <Counter end={200} duration={2000} suffix="+" />
                        </h3>
                        <p className="text-muted-foreground text-lg">Booths</p>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <div className="inline-flex items-center space-x-4 text-muted-foreground">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
                        <span
                            className="text-sm"
                            data-testid="text-established">
                            Established in 2017
                        </span>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
