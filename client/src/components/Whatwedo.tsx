import { motion } from "framer-motion";
import {
    GraduationCap,
    BookOpen,
    Briefcase,
    Building2,
    Globe,
    School,
    UserCheck,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function ExploreCourses() {
    const [screenSize, setScreenSize] = useState<
        "mobile" | "tablet" | "desktop"
    >("desktop");
    const [activeCourseIndex, setActiveCourseIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [particles, setParticles] = useState<
        Array<{ id: number; x: number; y: number }>
    >([]);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const courses = [
        {
            title: "Master Blockchain Certification",
            description: "60-hour advanced hands-on program",
            icon: GraduationCap,
            color: "primary",
        },
        {
            title: "Blockchain & Fintech Education",
            description: "From basics to expert level",
            icon: BookOpen,
            color: "accent",
        },
        {
            title: "Internships & Live Projects",
            description: "Real-world blockchain experience",
            icon: Briefcase,
            color: "secondary",
        },
        {
            title: "Corporate & College Training",
            description: "Customized programs for institutions",
            icon: Building2,
            color: "tertiary",
        },
        {
            title: "Web3 Awareness Programs",
            description: "Free workshops to spread knowledge",
            icon: Globe,
            color: "primary",
        },
        {
            title: "University Curriculum Development",
            description: "Full academic blockchain setup",
            icon: School,
            color: "accent",
        },
        {
            title: "1-to-1 Mentorship",
            description: "Personalized career guidance",
            icon: UserCheck,
            color: "secondary",
        },
    ];

    // Minimum swipe distance in pixels
    const minSwipeDistance = 50;

    // Check screen size
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize("mobile");
            } else if (width < 1024) {
                setScreenSize("tablet");
            } else {
                setScreenSize("desktop");
            }
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Auto-rotate through courses
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [activeCourseIndex]);

    // Generate particles around the icon
    useEffect(() => {
        const newParticles = Array.from({ length: 12 }, (_, i) => ({
            id: Date.now() + i,
            x: Math.random() * 360,
            y: Math.random() * 360,
        }));
        setParticles(newParticles);
    }, [activeCourseIndex]);

    // Function to get color classes based on color type
    const getColorClasses = (colorType: string) => {
        switch (colorType) {
            case "primary":
                return {
                    text: "text-indigo-500",
                    glow: "rgba(99, 102, 241, 0.6)",
                    particle: "rgba(99, 102, 241, 0.3)",
                };
            case "accent":
                return {
                    text: "text-pink-500",
                    glow: "rgba(236, 72, 153, 0.6)",
                    particle: "rgba(236, 72, 153, 0.3)",
                };
            case "secondary":
                return {
                    text: "text-green-500",
                    glow: "rgba(34, 197, 94, 0.6)",
                    particle: "rgba(34, 197, 94, 0.3)",
                };
            case "tertiary":
                return {
                    text: "text-amber-500",
                    glow: "rgba(251, 146, 60, 0.6)",
                    particle: "rgba(251, 146, 60, 0.3)",
                };
            default:
                return {
                    text: "text-purple-500",
                    glow: "rgba(147, 51, 234, 0.6)",
                    particle: "rgba(147, 51, 234, 0.3)",
                };
        }
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveCourseIndex(
                (prev) => (prev - 1 + courses.length) % courses.length
            );
            setIsTransitioning(false);
        }, 300);
    };

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveCourseIndex((prev) => (prev + 1) % courses.length);
            setIsTransitioning(false);
        }, 300);
    };

    const handleDotClick = (index: number) => {
        if (isTransitioning || index === activeCourseIndex) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveCourseIndex(index);
            setIsTransitioning(false);
        }, 300);
    };

    // Touch event handlers for swipe functionality
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        }
        if (isRightSwipe) {
            handlePrev();
        }
    };

    // Determine dimensions based on screen size
    const getDimensions = () => {
        if (screenSize === "mobile") {
            return {
                iconSize: 80,
                titleSize: "text-xl",
                descriptionSize: "text-base",
            };
        } else if (screenSize === "tablet") {
            return {
                iconSize: 120,
                titleSize: "text-2xl",
                descriptionSize: "text-lg",
            };
        } else {
            return {
                iconSize: 160,
                titleSize: "text-3xl",
                descriptionSize: "text-xl",
            };
        }
    };

    const { iconSize, titleSize, descriptionSize } = getDimensions();
    const currentCourse = courses[activeCourseIndex];
    const colors = getColorClasses(currentCourse.color);
    const IconComponent = currentCourse.icon;

    return (
        <section
            ref={sectionRef}
            className="py-20 bg-background relative overflow-hidden min-h-screen"
            style={{ height: "90vh" }}
            id="courses">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Dynamic Gradient Background */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${colors.glow} 0%, transparent 50%)`,
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Floating Geometric Shapes */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute border"
                        style={{
                            width: `${Math.random() * 80 + 40}px`,
                            height: `${Math.random() * 80 + 40}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            borderColor: colors.particle,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            clipPath:
                                i % 3 === 0
                                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                                    : i % 3 === 1
                                    ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                                    : "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                        }}
                        animate={{
                            rotate: [0, 360],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 15 + i * 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}

                {/* Animated Lines */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute h-px"
                        style={{
                            width: `${Math.random() * 200 + 100}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `linear-gradient(90deg, transparent, ${colors.particle}, transparent)`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                        animate={{
                            x: [0, 50, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 5 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col">
                {/* Title */}
                <motion.div
                    className="text-center mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                        <span
                            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                            style={{
                                backgroundSize: "300% 300%",
                                animation: "gradientMove 6s ease infinite",
                                display: "inline-block",
                            }}>
                            What We Do
                        </span>
                        <style>
                            {`
              @keyframes gradientMove {
                0% { background-position: 0% 0%; }
                25% { background-position: 100% 0%; }
                50% { background-position: 100% 100%; }
                75% { background-position: 0% 100%; }
                100% { background-position: 0% 0%; }
              }
            `}
                        </style>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Transforming Learners into Leaders of the Web3
                        Revolution.
                    </p>
                </motion.div>

                {/* Single Course Display with Effects */}
                <div
                    className="flex-grow flex items-center justify-center relative"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}>
                    {/* Navigation Buttons */}
                    {screenSize !== "mobile" && (
                        <>
                            <motion.button
                                className="absolute left-0 z-20 p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handlePrev}>
                                <ChevronLeft size={24} />
                            </motion.button>
                            <motion.button
                                className="absolute right-0 z-20 p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleNext}>
                                <ChevronRight size={24} />
                            </motion.button>
                        </>
                    )}

                    {/* Course Content with Effects */}
                    <motion.div
                        key={activeCourseIndex}
                        className="flex flex-col items-center justify-center text-center relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}>
                        {/* Orbiting Particles */}
                        {particles.map((particle, i) => (
                            <motion.div
                                key={particle.id}
                                className="absolute w-2 h-2 rounded-full"
                                style={{
                                    backgroundColor: colors.particle,
                                    boxShadow: `0 0 10px ${colors.glow}`,
                                    transformOrigin: `${iconSize / 2}px center`,
                                    transform: `rotate(${
                                        particle.x
                                    }deg) translateX(${iconSize + 30}px)`,
                                }}
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.2,
                                }}
                            />
                        ))}

                        {/* Icon with Glow Effect */}
                        <motion.div
                            className="relative flex items-center justify-center mb-8"
                            style={{
                                width: `${iconSize}px`,
                                height: `${iconSize}px`,
                            }}
                            animate={{
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}>
                            {/* Glow Ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: `conic-gradient(from 0deg, transparent, ${colors.glow}, transparent)`,
                                    filter: "blur(2px)",
                                }}
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            {/* Inner Glow */}
                            <motion.div
                                className="absolute inset-2 rounded-full"
                                style={{
                                    background: `radial-gradient(circle, ${colors.glow}, transparent)`,
                                    filter: "blur(8px)",
                                }}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Icon */}
                            <IconComponent
                                size={iconSize / 2}
                                className={`${colors.text} relative z-10`}
                                style={{
                                    filter: `drop-shadow(0 0 20px ${colors.glow})`,
                                }}
                            />
                        </motion.div>

                        {/* Title with Animated Underline */}
                        <div className="relative mb-4">
                            <motion.h3
                                className={`font-bold ${titleSize} ${colors.text}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                style={{
                                    textShadow: `0 0 20px ${colors.glow}`,
                                }}>
                                {currentCourse.title}
                            </motion.h3>

                            {/* Animated Underline */}
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-0.5"
                                style={{
                                    background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)`,
                                }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            />
                        </div>

                        {/* Description with Typewriter Effect */}
                        <motion.p
                            className={`${descriptionSize} text-muted-foreground max-w-2xl`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}>
                            {currentCourse.description}
                        </motion.p>

                        {/* Floating Dots */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={`dot-${i}`}
                                className="absolute w-1 h-1 rounded-full"
                                style={{
                                    backgroundColor: colors.particle,
                                    top: `${20 + Math.random() * 60}%`,
                                    left: `${10 + Math.random() * 80}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 2 + i * 0.3,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Carousel Indicators with Pulse Effect */}
                <div className="flex justify-center mt-8 space-x-2">
                    {courses.map((_, index) => (
                        <motion.button
                            key={index}
                            className={`h-2 rounded-full transition-all ${
                                index === activeCourseIndex
                                    ? screenSize === "mobile"
                                        ? "w-8"
                                        : "w-12"
                                    : "w-2 bg-gray-400"
                            }`}
                            style={{
                                background:
                                    index === activeCourseIndex
                                        ? `linear-gradient(90deg, ${colors.glow}, ${colors.particle})`
                                        : "",
                            }}
                            onClick={() => handleDotClick(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            animate={{
                                opacity:
                                    index === activeCourseIndex
                                        ? [1, 0.7, 1]
                                        : 0.4,
                            }}
                            transition={{
                                duration: 2,
                                repeat:
                                    index === activeCourseIndex ? Infinity : 0,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
