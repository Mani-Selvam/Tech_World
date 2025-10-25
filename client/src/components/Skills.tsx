"use client";

import {
    Cpu,
    Briefcase,
    GraduationCap,
    Code,
    Mic,
    BookOpen,
    Users,
    Megaphone,
    ClipboardCheck,
    Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const benefits = [
    {
        name: "Blockchain Technology",
        description:
            "In-depth understanding of decentralized systems, consensus algorithms, and blockchain architecture.",
        icon: Cpu,
        color: "text-slate-500",
        value: "95%",
    },
    {
        name: "Fintech Innovation",
        description:
            "Designing and implementing financial technology solutions powered by blockchain and automation.",
        icon: Briefcase,
        color: "text-orange-400",
        value: "90%",
    },
    {
        name: "Crypto & Web3 Education",
        description:
            "Empowering students and entrepreneurs with real-world Web3, DeFi, and NFT knowledge.",
        icon: GraduationCap,
        color: "text-green-400",
        value: "92%",
    },
    {
        name: "Smart Contract Development (Solidity)",
        description:
            "Building secure and efficient smart contracts on Ethereum and EVM-compatible chains.",
        icon: Code,
        color: "text-purple-400",
        value: "85%",
    },
    {
        name: "Public Speaking & Training Delivery",
        description:
            "Dynamic speaker experienced in simplifying complex blockchain concepts for diverse audiences.",
        icon: Mic,
        color: "text-red-400",
        value: "98%",
    },
    {
        name: "Curriculum Design & Mentorship",
        description:
            "Developing structured blockchain and fintech learning paths with continuous mentorship.",
        icon: BookOpen,
        color: "text-indigo-400",
        value: "95%",
    },

    {
        name: "Leadership & Team Building",
        description:
            "Leading multidisciplinary teams and fostering innovation in blockchain education and projects.",
        icon: Users,
        color: "text-yellow-400",
        value: "93%",
    },
    {
        name: "Digital Marketing for Web3",
        description:
            "Strategizing Web3 brand visibility through community building, social media, and token engagement.",
        icon: Megaphone,
        color: "text-pink-400",
        value: "88%",
    },
    {
        name: "Project Management",
        description:
            "Managing blockchain-based projects from ideation to deployment with agile methodologies.",
        icon: ClipboardCheck,
        color: "text-teal-400",
        value: "90%",
    },
    {
        name: "Women Empowerment in Tech",
        description:
            "Advocating inclusivity and empowering women to lead in blockchain and fintech domains.",
        icon: BookOpen,
        color: "text-rose-500",
        value: "100%",
    },
];

// Progress Bar Component
// Progress Bar Component with Loading Animation
const ProgressBar = ({
    value,
    color,
    isVisible,
}: {
    value: string;
    color: string;
    isVisible: boolean;
}) => {
    const [width, setWidth] = useState(0);
    const numericValue = parseInt(value.replace(/\D/g, ""));

    useEffect(() => {
        if (isVisible) {
            // Reset width to 0 when component becomes visible
            setWidth(0);

            // Start animation after a short delay
            const timer = setTimeout(() => {
                const duration = 1000; // Animation duration in ms
                const startTime = Date.now();

                const animateWidth = () => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    setWidth(progress * numericValue);

                    if (progress < 1) {
                        requestAnimationFrame(animateWidth);
                    }
                };

                requestAnimationFrame(animateWidth);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [isVisible, numericValue]);

    return (
        // Replace this section in your code:
        <div
            className={`w-full ${styles.progressHeight} bg-gray-700 rounded-full overflow-hidden`}>
            <motion.div
                className={`h-full ${benefit.color.replace(
                    "text-",
                    "bg-"
                )} rounded-full origin-left`}
                initial={{ scaleX: 0 }}
                whileInView={{
                    // ONLY use this line. Remove the width line.
                    scaleX: benefit.numericValue / 100,
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.2,
                    ease: "easeOut",
                }}
                viewport={{ once: true }}
            />
        </div>
    );
};

// Value Display Component
const ValueDisplay = ({
    value,
    color,
    isVisible,
}: {
    value: string;
    color: string;
    isVisible: boolean;
}) => {
    const [displayValue, setDisplayValue] = useState(0);
    const numericValue = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/[0-9]/g, "");

    useEffect(() => {
        if (isVisible) {
            const duration = 2000;
            const steps = 30;
            const increment = numericValue / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                }
                setDisplayValue(Math.floor(current));
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isVisible, numericValue]);

    return (
        <div className="flex items-center justify-center mt-3">
            <span className={`text-2xl font-bold ${color}`}>
                {displayValue}
                {suffix}
            </span>
        </div>
    );
};

// Floating particles for background
const FloatingParticles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/20 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 40 - 20, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}
        </div>
    );
};

// Background lines component with responsive sizing
const BackgroundLines = () => {
    const [lineCount, setLineCount] = useState(10);

    useEffect(() => {
        const updateLineCount = () => {
            if (window.innerWidth < 640) {
                setLineCount(5); // Fewer lines on mobile
            } else if (window.innerWidth < 1024) {
                setLineCount(7); // Medium lines on tablet
            } else {
                setLineCount(10); // More lines on desktop
            }
        };

        updateLineCount();
        window.addEventListener("resize", updateLineCount);
        return () => window.removeEventListener("resize", updateLineCount);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(lineCount)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                    style={{
                        width: `${Math.random() * 40 + 60}%`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        transform: `rotate(${Math.random() * 180}deg)`,
                    }}
                    animate={{
                        opacity: [0, 0.5, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}
        </div>
    );
};

export default function Benefits() {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(
        new Array(benefits.length).fill(false)
    );
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const [autoShowIndex, setAutoShowIndex] = useState<number | null>(null);
    const [autoHideIndex, setAutoHideIndex] = useState<number | null>(null);
    const [isInAutoSequence, setIsInAutoSequence] = useState(false);
    const [screenSize, setScreenSize] = useState<
        "mobile" | "tablet" | "desktop"
    >("desktop");
    const [isSectionActive, setIsSectionActive] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const autoSequenceRef = useRef<NodeJS.Timeout | null>(null);
    const restartTimerRef = useRef<NodeJS.Timeout | null>(null);
    const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Check screen size on mount and when window resizes
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
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

    // Listen for navigation events to stop auto-sequence
    useEffect(() => {
        const handleNavigation = () => {
            // Clear all timeouts when navigation occurs
            if (autoSequenceRef.current) {
                clearTimeout(autoSequenceRef.current);
                autoSequenceRef.current = null;
            }
            if (restartTimerRef.current) {
                clearTimeout(restartTimerRef.current);
                restartTimerRef.current = null;
            }
            if (navigationTimeoutRef.current) {
                clearTimeout(navigationTimeoutRef.current);
                navigationTimeoutRef.current = null;
            }

            // Reset auto sequence state
            setAutoShowIndex(null);
            setAutoHideIndex(null);
            setIsInAutoSequence(false);
            setIsSectionActive(false);
        };

        // Listen for navigation clicks
        const navLinks = document.querySelectorAll('[data-testid^="nav-"]');
        navLinks.forEach((link) => {
            link.addEventListener("click", handleNavigation);
        });

        return () => {
            navLinks.forEach((link) => {
                link.removeEventListener("click", handleNavigation);
            });
        };
    }, []);

    // Start automatic sequence when section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isSectionActive) {
                        setIsSectionActive(true);
                        setVisibleItems(new Array(benefits.length).fill(true));

                        // Add a small delay before starting the auto-sequence
                        navigationTimeoutRef.current = setTimeout(() => {
                            startAutoSequence();
                        }, 500);
                    } else if (!entry.isIntersecting && isSectionActive) {
                        // Stop auto sequence when section is not visible
                        setIsSectionActive(false);
                        if (autoSequenceRef.current) {
                            clearTimeout(autoSequenceRef.current);
                            autoSequenceRef.current = null;
                        }
                        if (restartTimerRef.current) {
                            clearTimeout(restartTimerRef.current);
                            restartTimerRef.current = null;
                        }
                        if (navigationTimeoutRef.current) {
                            clearTimeout(navigationTimeoutRef.current);
                            navigationTimeoutRef.current = null;
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            if (autoSequenceRef.current) {
                clearTimeout(autoSequenceRef.current);
            }
            if (restartTimerRef.current) {
                clearTimeout(restartTimerRef.current);
            }
            if (navigationTimeoutRef.current) {
                clearTimeout(navigationTimeoutRef.current);
            }
        };
    }, [isSectionActive]);

    // Start automatic sequence to show/hide text
    const startAutoSequence = () => {
        if (!isSectionActive) return;

        setIsInAutoSequence(true);
        let currentIndex = 0;

        // Show sequence
        const showNext = () => {
            if (!isSectionActive) return;

            if (currentIndex < benefits.length) {
                setAutoShowIndex(currentIndex);
                currentIndex++;
                autoSequenceRef.current = setTimeout(showNext, 800);
            } else {
                // Start hide sequence after showing all
                currentIndex = 0;
                autoSequenceRef.current = setTimeout(startHideSequence, 1000);
            }
        };

        // Hide sequence
        const startHideSequence = () => {
            if (!isSectionActive) return;

            if (currentIndex < benefits.length) {
                setAutoHideIndex(currentIndex);
                currentIndex++;
                autoSequenceRef.current = setTimeout(startHideSequence, 800);
            } else {
                // Reset auto sequence state
                setAutoShowIndex(null);
                setAutoHideIndex(null);
                setIsInAutoSequence(false);

                // Set timer to restart after 15 seconds if still active
                if (isSectionActive) {
                    restartTimerRef.current = setTimeout(() => {
                        if (isSectionActive) {
                            startAutoSequence();
                        }
                    }, 15000);
                }
            }
        };

        // Start the show sequence
        showNext();
    };

    // Get responsive styles based on screen size
    const getResponsiveStyles = () => {
        if (screenSize === "mobile") {
            return {
                timelineLeft: "left-8",
                timelineWidth: "w-0.5",
                dotSize: "w-4 h-4",
                iconSize: "w-10 h-10",
                marginLeft: "ml-16",
                titleSize: "text-sm",
                descriptionSize: "text-xs",
                progressHeight: "h-1.5",
                containerPadding: "px-4 py-8",
            };
        } else if (screenSize === "tablet") {
            return {
                timelineLeft: "left-12",
                timelineWidth: "w-0.5",
                dotSize: "w-5 h-5",
                iconSize: "w-12 h-12",
                marginLeft: "ml-20",
                titleSize: "text-base",
                descriptionSize: "text-sm",
                progressHeight: "h-2",
                containerPadding: "px-6 py-10",
            };
        } else {
            return {
                timelineLeft: "left-16",
                timelineWidth: "w-1",
                dotSize: "w-6 h-6",
                iconSize: "w-14 h-14",
                marginLeft: "ml-24",
                titleSize: "text-lg",
                descriptionSize: "text-base",
                progressHeight: "h-2.5",
                containerPadding: "px-8 py-12",
            };
        }
    };

    const styles = getResponsiveStyles();

    return (
        <section
            ref={sectionRef}
            className="py-12 md:py-20 bg-background relative overflow-hidden"
            id="benefits">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
            <FloatingParticles />
            <BackgroundLines />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title */}
                <motion.div
                    className="text-center mb-8 md:mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                        <motion.span
                            className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                            style={{
                                backgroundSize: "300% 300%",
                                animation: "gradientMove 6s ease infinite",
                                display: "inline-block",
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}>
                            Skills
                        </motion.span>
                    </h2>
                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}>
                        Transform Skills into the Future — The Techara Way 🚀
                    </motion.p>
                </motion.div>

                {/* Timeline Design for All Devices */}
                <div className={`relative ${styles.containerPadding}`}>
                    {/* Timeline line */}
                    <div
                        className={`absolute ${styles.timelineLeft} top-0 bottom-0 ${styles.timelineWidth} bg-gradient-to-b from-primary/50 via-primary/20 to-accent/50`}></div>

                    {/* Timeline items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;

                            // Determine if this item should show text in auto sequence
                            const shouldShowAuto =
                                autoShowIndex !== null &&
                                index <= autoShowIndex;
                            const shouldHideAuto =
                                autoHideIndex !== null &&
                                index <= autoHideIndex;
                            const showText = shouldShowAuto && !shouldHideAuto;

                            // Alternate sides for desktop view
                            const isRightSide =
                                index % 2 === 1 && screenSize !== "mobile";
                            // First, resolve the CSS variables
                            const primaryColor = getComputedStyle(
                                document.documentElement
                            )
                                .getPropertyValue("--primary")
                                .trim(); // e.g., "59, 130, 246"

                            const backgroundColor = getComputedStyle(
                                document.documentElement
                            )
                                .getPropertyValue("--background")
                                .trim(); // e.g., "9, 9, 11"
                            return (
                                <motion.div
                                    key={index}
                                    className={`relative ${
                                        isRightSide ? "md:pl-0 md:pr-16" : ""
                                    } ${
                                        !isRightSide ? "md:pr-0 md:pl-16" : ""
                                    }`}
                                    initial={{
                                        opacity: 0,
                                        x: isRightSide ? 50 : -50,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        type: "spring",
                                    }}
                                    viewport={{ once: true }}>
                                    {/* Timeline dot */}
                                    <motion.div
                                        className={`absolute ${
                                            isRightSide
                                                ? "md:right-6"
                                                : "md:left-6"
                                        } ${
                                            screenSize === "mobile"
                                                ? "left-6"
                                                : ""
                                        } ${
                                            styles.dotSize
                                        } rounded-full bg-background border-2 ${
                                            showText
                                                ? "border-primary"
                                                : "border-border"
                                        } z-10`}
                                        animate={{
                                            scale: showText ? [1, 1.3, 1] : 1,
                                            backgroundColor: showText
                                                ? `rgba(${primaryColor}, 0.2)` // ✅ resolved color
                                                : `rgb(${backgroundColor})`, // ✅ resolved color
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            scale: {
                                                repeat: showText ? Infinity : 0,
                                                duration: 1.5,
                                            },
                                        }}
                                    />

                                    {/* Content */}
                                    <div
                                        className={`${
                                            isRightSide ? "md:text-right" : ""
                                        } ${
                                            screenSize === "mobile"
                                                ? styles.marginLeft
                                                : ""
                                        }`}>
                                        <div
                                            className={`flex ${
                                                isRightSide
                                                    ? "md:justify-end"
                                                    : ""
                                            } items-center mb-3 md:mb-4`}>
                                            <motion.div
                                                className={`${
                                                    styles.iconSize
                                                } rounded-full bg-secondary/30 flex items-center justify-center ${
                                                    isRightSide
                                                        ? "md:order-2 md:ml-3"
                                                        : "md:mr-3"
                                                } ${
                                                    screenSize === "mobile"
                                                        ? "mr-3"
                                                        : ""
                                                } ${
                                                    showText
                                                        ? "ring-2 ring-primary/50"
                                                        : ""
                                                }`}
                                                animate={{
                                                    rotate: showText
                                                        ? [0, -5, 5, -5, 0]
                                                        : 0,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    rotate: {
                                                        repeat: showText
                                                            ? Infinity
                                                            : 0,
                                                        duration: 0.5,
                                                    },
                                                }}>
                                                <IconComponent
                                                    className={`${
                                                        screenSize === "mobile"
                                                            ? "w-5 h-5"
                                                            : screenSize ===
                                                              "tablet"
                                                            ? "w-6 h-6"
                                                            : "w-7 h-7"
                                                    } ${benefit.color}`}
                                                />
                                            </motion.div>
                                            <h3
                                                className={`${styles.titleSize} font-semibold ${benefit.color}`}>
                                                {benefit.name}
                                            </h3>
                                        </div>

                                        {/* Progress indicator */}
                                        <div
                                            className={`mb-3 md:mb-4 ${
                                                isRightSide
                                                    ? "md:ml-auto md:max-w-md"
                                                    : ""
                                            }`}>
                                            <div className="flex justify-between items-center mb-1">
                                                <span
                                                    className={`${
                                                        screenSize === "mobile"
                                                            ? "text-xs"
                                                            : "text-sm"
                                                    } text-muted-foreground`}>
                                                    Proficiency
                                                </span>
                                                <span
                                                    className={`${
                                                        screenSize === "mobile"
                                                            ? "text-xs"
                                                            : "text-sm"
                                                    } font-bold ${
                                                        benefit.color
                                                    }`}>
                                                    {benefit.value}
                                                </span>
                                            </div>
                                            <div
                                                className={`w-full ${styles.progressHeight} bg-gray-700 rounded-full overflow-hidden`}>
                                                <motion.div
                                                    className={`h-full ${benefit.color.replace(
                                                        "text-",
                                                        "bg-"
                                                    )} rounded-full`}
                                                    initial={{ width: 0 }}
                                                    whileInView={{
                                                        width: benefit.value,
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        delay: 0.2,
                                                    }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </div>

                                        {/* Brief description that appears on auto sequence */}
                                        <AnimatePresence>
                                            {showText && (
                                                <motion.p
                                                    className={`${
                                                        styles.descriptionSize
                                                    } text-muted-foreground ${
                                                        isRightSide
                                                            ? "md:ml-auto md:max-w-md"
                                                            : ""
                                                    }`}
                                                    initial={{
                                                        opacity: 0,
                                                        height: 0,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        height: "auto",
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        height: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                    }}>
                                                    {benefit.description.substring(
                                                        0,
                                                        screenSize === "mobile"
                                                            ? 80
                                                            : screenSize ===
                                                              "tablet"
                                                            ? 120
                                                            : 150
                                                    )}
                                                    ...
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Gradient + Float Animation */}
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
        </section>
    );
}
