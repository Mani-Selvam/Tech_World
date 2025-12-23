import { useEffect, useState, lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Users, TrendingUp } from "lucide-react";
import { useAnimationDefer } from "@/hooks/useAnimationDefer";
import { ResponsiveMedia } from "@/components/ResponsiveMedia";

const Ecosystem = lazy(() => import("@/components/Ecosystem"));
const Career = lazy(() => import("@/components/Career"));
const CertificationPrograms = lazy(() => import("@/components/CertificationPrograms"));
const CryptoDigitalAssetProgram = lazy(() => import("@/components/CryptoDigitalAssetProgram"));

import imgClass from "@assets/academy-class.png";
import imgDev from "@assets/academy-dev.png";
import imgTeam from "@assets/academy-team.png";
import imgMetaverse from "@assets/metaverse-concept.png";
import imgCode from "@assets/academy-code.png";

export default function Academy() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const animationsEnabled = useAnimationDefer(1500);

    const carouselImages = [
        { src: imgClass, label: "Blockchain" },
        { src: imgDev, label: "Smart Contracts" },
        { src: imgTeam, label: "Team Learning" },
        { src: imgMetaverse, label: "Metaverse" },
        { src: imgCode, label: "Web3 Dev" },
    ];

    useEffect(() => {
        if (!animationsEnabled || window.innerWidth < 768) return;
        const interval = setInterval(() => {
            setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [animationsEnabled]);

    const handleWorkshopClick = () => {
        const whatsappNumber = "+919345791995";
        const whatsappMessage = `Hi 👋 I'm interested in joining the 1-Day Blockchain Workshop for Rs.1999/-! Please share more details. 🚀`;
        const url = `https://wa.me/${whatsappNumber.replace(/\s/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, "_blank");
    };

    const handleConsultationClick = () => {
        const whatsappNumber = "+919345791995";
        const whatsappMessage = `Hi 👋 I'd like to book a 1-to-1 Crypto Consultation. What are the available slots? 💼`;
        const url = `https://wa.me/${whatsappNumber.replace(/\s/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, "_blank");
    };

    const stats = [
        { icon: Users, number: "5000+", label: "Active Students" },
        { icon: TrendingUp, number: "95%", label: "Success Rate" },
        { icon: Zap, number: "4.5K", label: "Tutors" },
    ];

    const Label = ({ text }: { text: string }) => (
        <div className="absolute bottom-1 left-1 px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-medium bg-gradient-to-r from-purple-600/70 to-blue-600/70 text-white shadow-[0_0_8px_rgba(139,92,246,0.8)] backdrop-blur-md border border-white/10">
            {text}
        </div>
    );

    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center">
                {/* Deferred Animated Background */}
                {animationsEnabled && (
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 2 }}>
                        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-xl" />
                        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-xl" />
                        <div className="absolute top-1/2 right-20 w-64 h-64 bg-cyan-600/10 rounded-full blur-xl" />
                    </motion.div>
                )}

                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Deferred Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8">
                            {/* Accent Line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={animationsEnabled ? { width: 80 } : { width: 80 }}
                                transition={animationsEnabled ? { duration: 0.8, delay: 0.05 } : { duration: 0 }}
                                className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full"
                            />

                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={animationsEnabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                                transition={animationsEnabled ? { duration: 0.6, delay: 0.1 } : { duration: 0 }}
                                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-600/20 border border-purple-400/50 backdrop-blur-md shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                                {animationsEnabled && (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 3, repeat: Infinity }}>
                                        <Zap className="w-5 h-5 text-purple-300" />
                                    </motion.div>
                                ) || <Zap className="w-5 h-5 text-purple-300" />}
                                <span className="text-sm font-bold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text uppercase tracking-widest">
                                    TECHARA - CHAINLEARN
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={animationsEnabled ? { duration: 0.8, delay: 0.2 } : { duration: 0 }}
                                className="space-y-6">
                                <h1 className="text-4xl sm:text-5xl lg:text-4xl font-black leading-tight tracking-tight">
                                    <span className="block text-white mb-2">India's first</span>
                                    <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent pb-2">
                                        All-in-One
                                    </span>
                                    <span className="block text-white">Blockchain Academy</span>
                                </h1>
                                <p className="text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed font-medium">
                                    Learn from industry experts with live projects, real-world applications, and become a certified blockchain developer in just 3 months
                                </p>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={animationsEnabled ? { duration: 0.8, delay: 0.3 } : { duration: 0 }}
                                className="flex flex-wrap gap-4">
                                <motion.button
                                    onClick={handleWorkshopClick}
                                    whileHover={animationsEnabled ? { scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" } : {}}
                                    whileTap={animationsEnabled ? { scale: 0.95 } : {}}
                                    className="px-8 py-4 rounded-lg font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:shadow-2xl transition-all duration-300">
                                    1-Day Blockchain
                                </motion.button>
                                <motion.button
                                    onClick={handleConsultationClick}
                                    whileHover={animationsEnabled ? { scale: 1.05, borderColor: "#60a5fa" } : {}}
                                    whileTap={animationsEnabled ? { scale: 0.95 } : {}}
                                    className="px-8 py-4 rounded-lg font-bold text-gray-200 border-2 border-gray-600 hover:border-blue-400 hover:bg-blue-950/30 transition-all duration-300 backdrop-blur-sm">
                                    Get Consultation
                                </motion.button>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={animationsEnabled ? { opacity: 1 } : { opacity: 1 }}
                                transition={animationsEnabled ? { duration: 0.8, delay: 0.4 } : { duration: 0 }}
                                className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700/50">
                                {stats.map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={animationsEnabled ? { scale: 1.05, y: -5 } : {}}
                                        className="p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                                        <div className="flex items-center gap-2 mb-2">
                                            <stat.icon className="w-5 h-5 text-purple-400" />
                                            <span className="text-2xl font-black text-white">{stat.number}</span>
                                        </div>
                                        <span className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Image Gallery */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={animationsEnabled ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                            transition={animationsEnabled ? { duration: 0.8, delay: 0.3, ease: "easeOut" } : { duration: 0 }}
                            className="relative h-full min-h-96 lg:min-h-screen flex items-center justify-center">
                            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-square">
                                {/* Outer Glow */}
                                {animationsEnabled && (
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/30 to-cyan-600/30 blur-xl"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    />
                                )}

                                {/* Floating Images */}
                                {animationsEnabled && (
                                    <>
                                        <motion.div
                                            className="absolute top-2 right-2 w-28 sm:w-36 md:w-40 h-32 sm:h-44 md:h-48 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20"
                                            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                                            <ResponsiveMedia 
                                                src={imgClass} 
                                                alt="Blockchain" 
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                                decoding="async"
                                                width={160}
                                                height={192}
                                                sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 160px"
                                            />
                                            <Label text="Blockchain" />
                                        </motion.div>

                                        <motion.div
                                            className="absolute top-14 left-2 w-32 sm:w-40 md:w-48 h-28 sm:h-40 md:h-44 rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20"
                                            animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                                            <ResponsiveMedia 
                                                src={imgMetaverse} 
                                                alt="Metaverse" 
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                                decoding="async"
                                                width={192}
                                                height={176}
                                                sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                                            />
                                            <Label text="Metaverse" />
                                        </motion.div>

                                        <motion.div
                                            className="absolute bottom-4 left-2 w-32 sm:w-40 md:w-48 h-28 sm:h-40 md:h-44 rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20"
                                            animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                                            <ResponsiveMedia 
                                                src={imgTeam} 
                                                alt="Team Learning" 
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                                decoding="async"
                                                width={192}
                                                height={176}
                                                sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                                            />
                                            <Label text="Team Learning" />
                                        </motion.div>

                                        <motion.div
                                            className="absolute bottom-6 right-2 w-32 sm:w-40 md:w-48 h-28 sm:h-40 md:h-44 rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20"
                                            animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                                            <ResponsiveMedia 
                                                src={imgCode} 
                                                alt="Web3 Dev" 
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                                decoding="async"
                                                width={192}
                                                height={176}
                                                sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                                            />
                                            <Label text="Web3 Dev" />
                                        </motion.div>
                                    </>
                                )}

                                {/* Center Carousel */}
                                <AnimatePresence>
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center"
                                        key={carouselIndex}
                                        initial={animationsEnabled ? { scale: 0.8, opacity: 0 } : {}}
                                        animate={animationsEnabled ? { scale: 1, opacity: 1 } : {}}
                                        exit={animationsEnabled ? { scale: 0.8, opacity: 0 } : {}}
                                        transition={animationsEnabled ? { duration: 0.6, ease: "easeInOut" } : {}}>
                                        <motion.div
                                            className="w-40 sm:w-52 md:w-56 h-52 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30 relative"
                                            animate={animationsEnabled ? { scale: [1, 1.05, 1] } : {}}
                                            transition={animationsEnabled ? { duration: 3.8, ease: "easeInOut" } : {}}>
                                            <ResponsiveMedia
                                                src={carouselImages[carouselIndex].src}
                                                alt={carouselImages[carouselIndex].label}
                                                className="w-full h-full object-cover"
                                                loading="eager"
                                                decoding="async"
                                                fetchpriority="high"
                                                width={224}
                                                height={288}
                                                sizes="(max-width: 640px) 160px, (max-width: 1024px) 208px, 224px"
                                            />
                                            <Label text={carouselImages[carouselIndex].label} />
                                        </motion.div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Lazy Loaded Sections */}
            <Suspense fallback={<div className="h-96" />}>
                <Ecosystem />
            </Suspense>
            <Suspense fallback={<div className="h-96" />}>
                <Career />
            </Suspense>
            <Suspense fallback={<div className="h-96" />}>
                <CertificationPrograms />
            </Suspense>
            <Suspense fallback={<div className="h-96" />}>
                <CryptoDigitalAssetProgram />
            </Suspense>

            <Footer />
        </>
    );
}
