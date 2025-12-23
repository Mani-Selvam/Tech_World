import React, { useState, useEffect, useRef } from "react";
import sindhura from "@assets/Tech.jpg";
import { ResponsiveMedia } from "./ResponsiveMedia";
import { motion } from "framer-motion";
import {
    Award,
    BookOpen,
    Users,
    Zap,
    Sparkles,
    TrendingUp,
    CheckCircle,
    Star,
    ArrowRight,
    BarChart3,
    Target,
    Trophy,
    Lightbulb,
} from "lucide-react";

type StatItem = {
    label: string;
    value: string;
    icon: React.ReactNode;
    description: string;
};

export default function AboutSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeStat, setActiveStat] = useState<number | null>(null);

    // Animation states for the dynamic text
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isTextVisible, setIsTextVisible] = useState(true);

    // Scroll animation states
    const [topSectionVisible, setTopSectionVisible] = useState(false);
    const [statsSectionVisible, setStatsSectionVisible] = useState(false);
    const [animatedStats, setAnimatedStats] = useState<boolean[]>([
        false,
        false,
        false,
    ]);

    // Counter states for stats
    const [counters, setCounters] = useState<number[]>([0, 0, 0]);
    const [countersComplete, setCountersComplete] = useState<boolean[]>([
        false,
        false,
        false,
    ]);

    // Refs for intersection observer
    const topSectionRef = useRef<HTMLDivElement>(null);
    const statsSectionRef = useRef<HTMLDivElement>(null);

    const roles = [
        "Indian",
        "Entrepreneur",
        "Web3 Passionator",
        "Blockchain Speaker",
        "Crypto Consultant",
        "NFT Consultant",
        "Blockchain Developer",
    ];

    const stats: StatItem[] = [
        {
            label: "Learners Mentored",
            value: "10000+",
            icon: <Users className="w-6 h-6" />,
            description:
                "Students and professionals guided through their Web3 journey",
        },
        {
            label: "Years in IT",
            value: "10+",
            icon: <Award className="w-6 h-6" />,
            description: "Of experience in technology and innovation",
        },
        {
            label: "Fintech & Blockchain",
            value: "6+ years",
            icon: <TrendingUp className="w-6 h-6" />,
            description:
                "Specialized expertise in blockchain and financial technology",
        },
    ];

    // Extract numeric values for counter animation
    const getNumericValue = (value: string): number => {
        const match = value.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    };

    const getSuffix = (value: string): string => {
        const match = value.match(/\D+/);
        return match ? match[0] : "";
    };

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Fade in/fade out effect for dynamic text
    useEffect(() => {
        const interval = setInterval(() => {
            setIsTextVisible(false);

            setTimeout(() => {
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                setIsTextVisible(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [roles.length]);

    // Counter animation for stats
    useEffect(() => {
        if (statsSectionVisible) {
            stats.forEach((stat, index) => {
                const targetValue = getNumericValue(stat.value);

                // Reset counter when section becomes visible
                setCounters((prev) => {
                    const newCounters = [...prev];
                    newCounters[index] = 0;
                    return newCounters;
                });

                setCountersComplete((prev) => {
                    const newComplete = [...prev];
                    newComplete[index] = false;
                    return newComplete;
                });

                // Start counter animation with delay
                setTimeout(() => {
                    let currentCount = 0;

                    // Different increment speeds based on target value
                    let increment, intervalTime;
                    if (targetValue >= 1000) {
                        // For large numbers like 10000
                        increment = Math.ceil(targetValue / 50);
                        intervalTime = 30;
                    } else if (targetValue >= 10) {
                        // For medium numbers like 10
                        increment = 1;
                        intervalTime = 100;
                    } else {
                        // For small numbers like 6
                        increment = 1;
                        intervalTime = 200;
                    }

                    const counterInterval = setInterval(() => {
                        currentCount += increment;
                        if (currentCount >= targetValue) {
                            currentCount = targetValue;
                            clearInterval(counterInterval);

                            // Mark this counter as complete
                            setCountersComplete((prev) => {
                                const newComplete = [...prev];
                                newComplete[index] = true;
                                return newComplete;
                            });
                        }

                        setCounters((prev) => {
                            const newCounters = [...prev];
                            newCounters[index] = currentCount;
                            return newCounters;
                        });
                    }, intervalTime);
                }, index * 300); // Stagger the start of each counter
            });
        }
    }, [statsSectionVisible]);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: "0px 0px -100px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === topSectionRef.current) {
                        setTopSectionVisible(true);
                    }
                    if (entry.target === statsSectionRef.current) {
                        setStatsSectionVisible(true);
                        // Trigger stats animation with delays
                        stats.forEach((_, index) => {
                            setTimeout(() => {
                                setAnimatedStats((prev) => {
                                    const newStats = [...prev];
                                    newStats[index] = true;
                                    return newStats;
                                });
                            }, index * 200);
                        });
                    }
                }
            });
        }, observerOptions);

        if (topSectionRef.current) {
            observer.observe(topSectionRef.current);
        }
        if (statsSectionRef.current) {
            observer.observe(statsSectionRef.current);
        }

        return () => {
            if (topSectionRef.current) {
                observer.unobserve(topSectionRef.current);
            }
            if (statsSectionRef.current) {
                observer.unobserve(statsSectionRef.current);
            }
        };
    }, []);

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white min-h-screen">
            {/* Animated Background Elements */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Floating orbs with parallax effect */}
                <div
                    className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/20 blur-3xl animate-pulse"
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${
                            mousePosition.y * 0.02
                        }px)`,
                    }}
                />
                <div
                    className="absolute top-10 right-0 h-72 w-72 rounded-full bg-gradient-to-r from-indigo-500/30 to-blue-500/20 blur-3xl animate-pulse"
                    style={{
                        transform: `translate(${mousePosition.x * -0.02}px, ${
                            mousePosition.y * -0.02
                        }px)`,
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute bottom-0 left-1/3 h-40 w-40 rotate-45 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 animate-spin"
                    style={{
                        transform: `translate(${mousePosition.x * 0.01}px, ${
                            mousePosition.y * 0.01
                        }px) rotate(45deg)`,
                        animationDuration: "20s",
                    }}
                />

                {/* Animated grid pattern using CSS */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50" />
            </div>

            {/* Main Content */}
            <div
                ref={topSectionRef}
                className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 transition-all duration-1000 ${
                    topSectionVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                }`}>
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">
                            About Me
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}>
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Meet Your Mentor
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}>
                        Transforming complex blockchain concepts into accessible
                        knowledge
                    </motion.p>
                </div>

                {/* Main Content Grid - Photo first on mobile/tablet, info first on desktop */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image (first on mobile/tablet, second on desktop) */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}>
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20"></div>

                            {/* Image Container */}
                            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30">
                                <ResponsiveMedia
                                    src={sindhura}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                                    loading="lazy"
                                    alt="Sindhu - Web3 Expert"
                                    className="w-full h-auto object-cover"
                                    data-testid="img-sindhu-hero"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full shadow-lg"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                }}>
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                                    <span className="font-semibold">
                                        Top Rated
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: 1,
                                }}>
                                <div className="flex items-center gap-2">
                                    <Award className="w-4 h-4" />
                                    <span className="font-semibold">
                                        Expert Certified
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content (second on mobile/tablet, first on desktop) */}
                    <motion.div
                        className="space-y-6 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}>
                        {/* Dynamic Role Text */}
                        <div className="mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                                I Am An{" "}
                                <span
                                    className={`inline-block min-h-[1.2em] transition-all duration-500 ${
                                        isTextVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 -translate-y-4"
                                    }`}
                                    style={{
                                        background:
                                            "linear-gradient(to right, #ec4899, #8b5cf6)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        color: "transparent",
                                    }}>
                                    {roles[currentRoleIndex]}
                                </span>
                            </h2>

                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                                <p className="text-lg text-gray-300">
                                    Empowering Minds. Elevating Futures.
                                    Building India's Web3 Generation.
                                </p>
                            </div>
                        </div>

                        {/* Bio Text */}
                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed">
                                I'm{" "}
                                <span className="text-purple-400 font-semibold">
                                    M. Sindhu Harisakthi
                                </span>{" "}
                                — Blockchain & Fintech Educator, Founder of{" "}
                                <span className="text-purple-400 font-semibold">
                                    Techara Academy
                                </span>
                                , and a lifelong believer in the power of
                                transformation through technology.
                            </p>

                            <p className="text-gray-300 leading-relaxed">
                                With over{" "}
                                <span className="text-purple-400 font-semibold">
                                    10 years in IT
                                </span>{" "}
                                and{" "}
                                <span className="text-purple-400 font-semibold">
                                    6+ years in Fintech & Blockchain education
                                </span>
                                , I help learners and entrepreneurs turn complex
                                technologies into simple, life-changing
                                opportunities. As an{" "}
                                <span className="text-purple-400 font-semibold">
                                    IIT Kanpur PG Blockchain Certified
                                </span>{" "}
                                and{" "}
                                <span className="text-purple-400 font-semibold">
                                    MSME-Certified Trainer
                                </span>
                                , I've mentored thousands to bridge the gap
                                between knowledge and innovation.
                            </p>

                            <p className="text-gray-300 leading-relaxed">
                                Passion drives me — to educate, empower, and
                                elevate India's Web3 generation. Through
                                Techara, I make Blockchain and Fintech education
                                accessible, practical, and transformational for
                                everyone — from students to entrepreneurs. The
                                future belongs to those who{" "}
                                <span className="text-purple-400 font-semibold">
                                    learn, unlearn, and lead with purpose
                                </span>
                                .
                            </p>
                        </div>

                        {/* Achievement Badges */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            <div className="flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2">
                                <CheckCircle className="w-4 h-4 text-purple-400" />
                                <span className="text-sm text-purple-300">
                                    IIT Kanpur Certified
                                </span>
                            </div>
                            <div className="flex items-center gap-2 bg-pink-500/10 backdrop-blur-sm border border-pink-500/30 rounded-full px-4 py-2">
                                <CheckCircle className="w-4 h-4 text-pink-400" />
                                <span className="text-sm text-pink-300">
                                    MSME Trainer
                                </span>
                            </div>
                            <div className="flex items-center gap-2 bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/30 rounded-full px-4 py-2">
                                <CheckCircle className="w-4 h-4 text-indigo-400" />
                                <span className="text-sm text-indigo-300">
                                    10+ Years Experience
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Completely Redesigned Impact & Achievements Section */}
            <div
                ref={statsSectionRef}
                className={`relative border-t border-white/10 backdrop-blur-sm bg-gradient-to-b from-transparent to-slate-950/50 transition-all duration-1000 ${
                    statsSectionVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                }`}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <motion.h3
                            className="text-2xl md:text-3xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}>
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                Impact & Achievements
                            </span>
                        </motion.h3>
                    </div>

                    {/* Single Row Layout - No Scroll */}
                    <div className="grid grid-cols-3 gap-2 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}>
                                {/* Responsive Card */}
                                <div className=" p-3 md:p-6 h-full">
                                    {/* Icon - Smaller on mobile */}
                                    <div className="flex justify-center mb-2 md:mb-4">
                                        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                                            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                                                <div className="text-purple-400 text-lg md:text-2xl">
                                                    {stat.icon}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Value - Responsive font size */}
                                    <div className="text-1xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 md:mb-2">
                                        {animatedStats[index] ? (
                                            <span className="inline-block">
                                                {counters[index]}
                                                {countersComplete[index] &&
                                                    getSuffix(stat.value)}
                                            </span>
                                        ) : (
                                            <span className="inline-block">
                                                0
                                            </span>
                                        )}
                                    </div>

                                    {/* Label - Responsive text size */}
                                    <div className="text-gray-300 font-medium text-xs md:text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Footer Gradient Accent */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-purple-500/10 to-transparent animate-pulse" />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
