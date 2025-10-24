import { motion } from "framer-motion";
import {
    Zap,
    Target,
    Briefcase,
    Code,
    Sparkles,
    ArrowRight,
} from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Core Highlights",
            description:
                "India's first all-in-one Web3 Academy with blockchain, crypto, NFT & coding under one roof. 70% practical training led by IIT & MSME-certified experts.",
            color: "from-purple-500 to-pink-500",
            bgPattern: "dots",
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Student-Centric",
            description:
                "Free weekly workshops, real-world project internships, master certifications, and 100% placement support with 1-to-1 mentorship.",
            color: "from-blue-500 to-cyan-500",
            bgPattern: "grid",
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Industry Connect",
            description:
                "Corporate & college collaborations, expert trainers with 10+ years combined experience, and globally recognized certifications with internship letters.",
            color: "from-green-500 to-emerald-500",
            bgPattern: "zigzag",
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "Learning Experience",
            description:
                "Hybrid online + offline classes, capstone projects, live blockchain demos, and an interactive peer community with gamified learning.",
            color: "from-orange-500 to-red-500",
            bgPattern: "waves",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, rotateY: -15 },
        visible: {
            opacity: 1,
            y: 0,
            rotateY: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const bgPatterns = {
        dots: (
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg">
                <pattern
                    id="dots"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse">
                    <circle
                        cx="10"
                        cy="10"
                        r="1"
                        fill="currentColor"
                        fillOpacity="0.1"
                    />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
        ),
        grid: (
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg">
                <pattern
                    id="grid"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse">
                    <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeOpacity="0.1"
                    />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        ),
        zigzag: (
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg">
                <pattern
                    id="zigzag"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse">
                    <path
                        d="M0,20 L10,10 L20,20 L30,10 L40,20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeOpacity="0.1"
                    />
                </pattern>
                <rect width="100%" height="100%" fill="url(#zigzag)" />
            </svg>
        ),
        waves: (
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg">
                <pattern
                    id="waves"
                    x="0"
                    y="0"
                    width="100"
                    height="20"
                    patternUnits="userSpaceOnUse">
                    <path
                        d="M0,10 Q25,0 50,10 T100,10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeOpacity="0.1"
                    />
                </pattern>
                <rect width="100%" height="100%" fill="url(#waves)" />
            </svg>
        ),
    };

    const handleExploreFeatures = () => {
        window.open("https://techara.in/", "_blank");
    };

    return (
        <section
            className="py-20 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden"
            id="features">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={titleVariants}>
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">
                            What Makes Us Special
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Academy Features
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Why learners choose our Web3 Academy
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}>
                            {/* Card Glow Effect */}
                            <div
                                className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>

                            {/* Card Content */}
                            <div className="relative h-full bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 text-white opacity-5">
                                    {bgPatterns[feature.bgPattern]}
                                </div>

                                {/* Icon Container */}
                                <div
                                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-0.5 mb-6`}>
                                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                                        <div className={`text-white`}>
                                            {feature.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}>
                    <motion.button
                        onClick={handleExploreFeatures}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <span className="text-white font-medium">
                            Explore all features
                        </span>
                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
