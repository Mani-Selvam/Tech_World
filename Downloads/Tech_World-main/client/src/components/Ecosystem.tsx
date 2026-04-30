import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coins, TrendingUp, Zap, Palette, Users, Code2, ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface EcosystemCategory {
    id: string;
    title: string;
    icon: any;
    description: string;
    gradient: string;
    glowColor: string;
    features: string[];
    hoverBg: string;
}

const ecosystemCategories: EcosystemCategory[] = [
    {
        id: "crypto",
        title: "Crypto",
        icon: Coins,
        description: "Digital Currency Mastery",
        gradient: "from-yellow-400 to-orange-400",
        glowColor: "shadow-yellow-500/50",
        hoverBg: "hover:from-yellow-500/20 hover:to-orange-500/20",
        features: [
            "Exchanges (CEX & DEX)",
            "Trading Strategies",
            "Wallet Security",
            "Market Analysis",
        ],
    },
    {
        id: "defi",
        title: "DeFi",
        icon: TrendingUp,
        description: "Decentralized Finance",
        gradient: "from-green-400 to-emerald-400",
        glowColor: "shadow-green-500/50",
        hoverBg: "hover:from-green-500/20 hover:to-emerald-500/20",
        features: [
            "Lending & Borrowing",
            "Liquidity Pools",
            "Staking Rewards",
            "Yield Farming",
        ],
    },
    {
        id: "dapps",
        title: "DApps",
        icon: Zap,
        description: "Decentralized Applications",
        gradient: "from-blue-400 to-cyan-400",
        glowColor: "shadow-blue-500/50",
        hoverBg: "hover:from-blue-500/20 hover:to-cyan-500/20",
        features: [
            "Frontend Development",
            "Backend Integration",
            "Smart Contracts",
            "Testnet Deployment",
        ],
    },
    {
        id: "nfts",
        title: "NFTs",
        icon: Palette,
        description: "Digital Art & Collectibles",
        gradient: "from-pink-400 to-rose-400",
        glowColor: "shadow-pink-500/50",
        hoverBg: "hover:from-pink-500/20 hover:to-rose-500/20",
        features: [
            "NFT Marketplace",
            "Art Minting",
            "Collections",
            "Royalty Setup",
        ],
    },
    {
        id: "metaverse",
        title: "Metaverse",
        icon: Users,
        description: "Virtual World Experience",
        gradient: "from-purple-400 to-violet-400",
        glowColor: "shadow-purple-500/50",
        hoverBg: "hover:from-purple-500/20 hover:to-violet-500/20",
        features: [
            "VR Environments",
            "Digital Land",
            "Avatar Creation",
            "Virtual Assets",
        ],
    },
    {
        id: "smartcontracts",
        title: "Smart Contracts",
        icon: Code2,
        description: "Blockchain Programming",
        gradient: "from-indigo-400 to-blue-400",
        glowColor: "shadow-indigo-500/50",
        hoverBg: "hover:from-indigo-500/20 hover:to-blue-500/20",
        features: [
            "Solidity Programming",
            "Contract Deployment",
            "Security Audits",
            "Real-World Use Cases",
        ],
    },
];

export default function Ecosystem() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);
    const [direction, setDirection] = useState(0);
    const [expandedDesktop, setExpandedDesktop] = useState<string | null>("crypto");
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    // Auto-rotate carousel every 6 seconds (MOBILE ONLY)
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setIsExpanded(false);
            
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % ecosystemCategories.length);
                setIsExpanded(true);
            }, 300);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setDirection(1);
        setIsExpanded(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % ecosystemCategories.length);
            setIsExpanded(true);
        }, 300);
    };

    const handlePrev = () => {
        setDirection(-1);
        setIsExpanded(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + ecosystemCategories.length) % ecosystemCategories.length);
            setIsExpanded(true);
        }, 300);
    };

    const goToIndex = (index: number) => {
        setIsExpanded(false);
        setDirection(index > currentIndex ? 1 : -1);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsExpanded(true);
        }, 300);
    };

    const currentCategory = ecosystemCategories[currentIndex];
    const Icon = currentCategory.icon;

    return (
        <section className="relative py-12 md:py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(135deg, #0a0e27 0%, #1a1a3e 25%, #2d1b4e 50%, #1a1a3e 75%, #0a0e27 100%)",
                    }}
                />
                <motion.div
                    className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-orange-500/10 rounded-full blur-3xl"
                    animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl"
                    animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, delay: 2 }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-3xl -translate-x-1/2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                        <span className="bg-gradient-to-r from-yellow-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                            Blockchain Ecosystem
                        </span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                        Master every layer of Web3 technology across 6 core categories
                    </p>
                </motion.div>

                {/* ============ MOBILE LAYOUT (KEEP AS IS) ============ */}
                <div className="sm:hidden">
                    {/* Carousel Container - Mobile */}
                    <div className="relative w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                                className="w-full"
                            >
                                {/* Card */}
                                <motion.div
                                    className={`relative rounded-2xl border border-white/10 backdrop-blur-xl p-6 transition-all duration-500 group overflow-hidden`}
                                    style={{
                                        boxShadow: `0 0 30px var(--shadow-color), 0 20px 40px rgba(0,0,0,0.3)`,
                                    }}
                                >
                                    {/* Animated Background Orbs */}
                                    <motion.div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${currentCategory.gradient} opacity-5`}
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon and Title Row */}
                                        <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/20">
                                            <div>
                                                <motion.div
                                                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                                                    transition={{ duration: 3, repeat: Infinity }}
                                                    className="mb-4 inline-block"
                                                >
                                                    <div
                                                        className={`p-3 rounded-2xl bg-gradient-to-br ${currentCategory.gradient} shadow-lg transition-all duration-300`}
                                                    >
                                                        <Icon className="w-8 h-8 text-white" />
                                                    </div>
                                                </motion.div>

                                                <motion.h3
                                                    key={`title-${currentIndex}`}
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="text-2xl font-bold text-white"
                                                >
                                                    {currentCategory.title}
                                                </motion.h3>
                                            </div>

                                            {/* Indicator Dots */}
                                            <div className="flex gap-2">
                                                {ecosystemCategories.map((_, idx) => (
                                                    <motion.button
                                                        key={idx}
                                                        onClick={() => goToIndex(idx)}
                                                        className={`rounded-full transition-all ${
                                                            idx === currentIndex
                                                                ? "w-8 h-3"
                                                                : "w-3 h-3 hover:w-4"
                                                        }`}
                                                        style={{
                                                            background: idx === currentIndex 
                                                                ? `linear-gradient(to right, ${currentCategory.gradient})`
                                                                : 'rgba(255,255,255,0.2)',
                                                        }}
                                                        whileHover={{ scale: 1.2 }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <motion.p
                                            key={`desc-${currentIndex}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                            className="text-lg text-gray-300 mb-6"
                                        >
                                            {currentCategory.description}
                                        </motion.p>

                                        {/* Features List - Auto Expanded */}
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: isExpanded ? "auto" : 0,
                                                opacity: isExpanded ? 1 : 0,
                                                marginBottom: isExpanded ? 24 : 0,
                                            }}
                                            transition={{ duration: 0.4 }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="space-y-3">
                                                {currentCategory.features.map((feature, fidx) => (
                                                    <motion.li
                                                        key={fidx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            delay: isExpanded ? fidx * 0.08 : 0,
                                                            duration: 0.4,
                                                        }}
                                                        className="flex items-start gap-3 text-sm text-gray-200"
                                                    >
                                                        <motion.span
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{
                                                                delay: isExpanded ? fidx * 0.08 : 0,
                                                            }}
                                                            className={`text-lg font-bold text-white mt-0.5 rounded-full w-6 h-6 flex items-center justify-center bg-gradient-to-r ${currentCategory.gradient} flex-shrink-0`}
                                                        >
                                                            ✓
                                                        </motion.span>
                                                        <span>{feature}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons - Mobile */}
                        <div className="flex gap-3 justify-center mt-6">
                            <motion.button
                                onClick={handlePrev}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                onClick={handleNext}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Swipe Gesture Indicator - Mobile Only */}
                        <motion.div
                            className="text-center mt-6 text-xs text-gray-400"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Swipe or tap arrows to explore
                        </motion.div>
                    </div>
                </div>

                {/* ============ TABLET & DESKTOP LAYOUT (NEW PREMIUM DESIGN) ============ */}
                <div className="hidden sm:block">
                    {/* 3-Column Grid with Enhanced Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                        {ecosystemCategories.map((category, idx) => {
                            const CatIcon = category.icon;
                            const isExpanded = expandedDesktop === category.id;
                            const isHovered = hoveredCard === category.id;

                            return (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: idx * 0.12,
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                    onMouseEnter={() => setHoveredCard(category.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className="group h-full"
                                >
                                    <motion.div
                                        onClick={() => setExpandedDesktop(isExpanded ? null : category.id)}
                                        className="relative h-full rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-500"
                                        animate={{
                                            boxShadow: isHovered
                                                ? `0 0 40px rgba(${category.gradient.includes('yellow') ? '255, 193, 7' : category.gradient.includes('green') ? '74, 222, 128' : category.gradient.includes('blue') ? '59, 130, 246' : category.gradient.includes('pink') ? '244, 114, 182' : category.gradient.includes('purple') ? '168, 85, 247' : '99, 102, 241'}, 0.6), 0 25px 50px rgba(0,0,0,0.3)`
                                                : `0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(${category.gradient.includes('yellow') ? '255, 193, 7' : category.gradient.includes('green') ? '74, 222, 128' : category.gradient.includes('blue') ? '59, 130, 246' : category.gradient.includes('pink') ? '244, 114, 182' : category.gradient.includes('purple') ? '168, 85, 247' : '99, 102, 241'}, 0.2)`,
                        }}
                    >
                        {/* Gradient Background Animations */}
                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                            animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        <div className="relative z-10 p-8 h-full flex flex-col">
                            {/* Icon with Animation */}
                            <motion.div
                                animate={isHovered ? { scale: 1.15, rotate: 8 } : { scale: 1, rotate: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mb-6 inline-block"
                            >
                                <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                                    <CatIcon className="w-8 h-8 text-white" />
                                </div>
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                animate={isHovered ? { scale: 1.05 } : {}}
                                className="text-2xl md:text-3xl font-bold text-white mb-2"
                            >
                                {category.title}
                            </motion.h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm md:text-base mb-6 flex-grow">
                                {category.description}
                            </p>

                            {/* Features - Expandable */}
                            <motion.div
                                initial={false}
                                animate={{
                                    height: isExpanded ? "auto" : "0",
                                    opacity: isExpanded ? 1 : 0,
                                    marginBottom: isExpanded ? 16 : 0,
                                }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden"
                            >
                                <ul className="space-y-2 mb-4 pb-4 border-t border-white/10">
                                    {category.features.map((feature, fidx) => (
                                        <motion.li
                                            key={fidx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: isExpanded ? fidx * 0.06 : 0,
                                                duration: 0.3,
                                            }}
                                            className="flex items-start gap-2 text-xs md:text-sm text-gray-300"
                                        >
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className={`text-xs font-bold text-white rounded-full w-5 h-5 flex items-center justify-center bg-gradient-to-r ${category.gradient} flex-shrink-0 mt-0.5`}
                                            >
                                                ✓
                                            </motion.span>
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Expand Button */}
                            <motion.button
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                className={`w-full px-4 py-2 rounded-lg bg-gradient-to-r ${category.gradient} text-white font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg text-sm`}
                            >
                                {isExpanded ? "Show Less" : "Explore"}
                                <ChevronDown className="w-4 h-4" />
                            </motion.button>
                        </div>

                        {/* Border Gradient Glow */}
                        <motion.div
                            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`}
                            style={{ filter: "blur(20px)" }}
                        />
                    </motion.div>
                </motion.div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center"
                    >
                        <p className="text-gray-300 text-sm md:text-base mb-6">
                            Ready to master all 6 categories? Join TechARA Academy today!
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-xl md:rounded-2xl flex items-center justify-center gap-2 mx-auto transition-all shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
                        >
                            Start Learning
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
