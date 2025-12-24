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
                        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
                        <div className="absolute top-1/2 right-20 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl" />
                    </motion.div>
                )}

                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Side - Deferred Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-10">
                            {/* Accent Line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={animationsEnabled ? { width: 120 } : { width: 120 }}
                                transition={animationsEnabled ? { duration: 0.8, delay: 0.05 } : { duration: 0 }}
                                className="h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full"
                            />

                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={animationsEnabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                                transition={animationsEnabled ? { duration: 0.6, delay: 0.1 } : { duration: 0 }}
                                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-600/20 border border-purple-400/50 backdrop-blur-md shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                                {animationsEnabled && (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 3, repeat: Infinity }}>
                                        <Zap className="w-4 h-4 text-purple-300" />
                                    </motion.div>
                                ) || <Zap className="w-4 h-4 text-purple-300" />}
                                <span className="text-xs font-bold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text uppercase tracking-widest">
                                    TECHARA ACADEMY
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={animationsEnabled ? { duration: 0.8, delay: 0.2 } : { duration: 0 }}
                                className="space-y-6">
                                <h1 className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
                                    <span className="block text-white mb-3">Master Blockchain</span>
                                    <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent pb-3">
                                        In 3 Months
                                    </span>
                                    <span className="block text-gray-300 text-xl sm:text-2xl font-medium">Learn from industry pioneers</span>
                                </h1>
                                <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed font-medium opacity-90">
                                    India's first all-in-one blockchain academy with live projects, real-world applications, and certified instruction from Web3 experts
                                </p>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={animationsEnabled ? { duration: 0.8, delay: 0.3 } : { duration: 0 }}
                                className="flex flex-col sm:flex-row gap-4 pt-4">
                                <motion.button
                                    onClick={handleWorkshopClick}
                                    whileHover={animationsEnabled ? { scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" } : {}}
                                    whileTap={animationsEnabled ? { scale: 0.95 } : {}}
                                    className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-purple-600 to-purple-700 hover:shadow-2xl transition-all duration-300 shadow-lg text-center">
                                    Enroll in Workshop
                                </motion.button>
                                <motion.button
                                    onClick={handleConsultationClick}
                                    whileHover={animationsEnabled ? { scale: 1.05, borderColor: "#60a5fa", backgroundColor: "rgba(30, 58, 138, 0.4)" } : {}}
                                    whileTap={animationsEnabled ? { scale: 0.95 } : {}}
                                    className="px-8 py-4 rounded-xl font-bold text-gray-100 border-2 border-gray-500 hover:border-blue-400 hover:bg-blue-950/30 transition-all duration-300 backdrop-blur-sm text-center">
                                    Book Consultation
                                </motion.button>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={animationsEnabled ? { opacity: 1 } : { opacity: 1 }}
                                transition={animationsEnabled ? { duration: 0.8, delay: 0.4 } : { duration: 0 }}
                                className="grid grid-cols-3 gap-4 pt-12 border-t border-gray-700/50">
                                {stats.map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={animationsEnabled ? { scale: 1.08, y: -5 } : {}}
                                        className="p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-700/30 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="p-2 rounded-lg bg-purple-600/30">
                                                <stat.icon className="w-4 h-4 text-purple-300" />
                                            </div>
                                            <span className="text-3xl font-black text-white">{stat.number}</span>
                                        </div>
                                        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Image Gallery */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={animationsEnabled ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                            transition={animationsEnabled ? { duration: 0.8, delay: 0.3, ease: "easeOut" } : { duration: 0 }}
                            className="relative h-full min-h-96 lg:min-h-screen flex items-center justify-center hidden lg:flex">
                            <div className="relative w-full h-96 md:h-full">
                                {/* Metaverse Card - Top Left */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={animationsEnabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                                    transition={animationsEnabled ? { duration: 0.6, delay: 0.35 } : { duration: 0 }}
                                    whileHover={animationsEnabled ? { scale: 1.08, zIndex: 50 } : {}}
                                    className="absolute top-8 left-8 w-40 h-40 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 cursor-pointer transition-all duration-300">
                                    <ResponsiveMedia 
                                        src={imgMetaverse} 
                                        alt="Metaverse" 
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                        width={160}
                                        height={160}
                                        sizes="(max-width: 1024px) 128px, 160px"
                                    />
                                    <Label text="Metaverse" />
                                </motion.div>

                                {/* Bitcoin - Center Right */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={animationsEnabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                                    transition={animationsEnabled ? { duration: 0.6, delay: 0.4 } : { duration: 0 }}
                                    whileHover={animationsEnabled ? { scale: 1.08, zIndex: 50 } : {}}
                                    className="absolute top-16 right-4 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border border-yellow-500/30 cursor-pointer transition-all duration-300">
                                    <ResponsiveMedia 
                                        src={imgClass} 
                                        alt="Blockchain" 
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                        width={192}
                                        height={256}
                                        sizes="(max-width: 1024px) 144px, 192px"
                                    />
                                    <Label text="Blockchain" />
                                </motion.div>

                                {/* Crypto - Center Left */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={animationsEnabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                                    transition={animationsEnabled ? { duration: 0.6, delay: 0.45 } : { duration: 0 }}
                                    whileHover={animationsEnabled ? { scale: 1.08, zIndex: 50 } : {}}
                                    className="absolute top-56 left-12 w-44 h-44 rounded-2xl overflow-hidden shadow-2xl border border-yellow-600/30 cursor-pointer transition-all duration-300">
                                    <ResponsiveMedia 
                                        src={imgDev} 
                                        alt="Crypto" 
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                        width={176}
                                        height={176}
                                        sizes="(max-width: 1024px) 132px, 176px"
                                    />
                                    <Label text="Crypto" />
                                </motion.div>

                                {/* Team Learning - Bottom Left */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={animationsEnabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                                    transition={animationsEnabled ? { duration: 0.6, delay: 0.5 } : { duration: 0 }}
                                    whileHover={animationsEnabled ? { scale: 1.08, zIndex: 50 } : {}}
                                    className="absolute bottom-12 left-0 w-44 h-44 rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30 cursor-pointer transition-all duration-300">
                                    <ResponsiveMedia 
                                        src={imgTeam} 
                                        alt="Team Learning" 
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                        width={176}
                                        height={176}
                                        sizes="(max-width: 1024px) 132px, 176px"
                                    />
                                    <Label text="Team Learning" />
                                </motion.div>

                                {/* Web3 Dev - Bottom Right */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={animationsEnabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                                    transition={animationsEnabled ? { duration: 0.6, delay: 0.55 } : { duration: 0 }}
                                    whileHover={animationsEnabled ? { scale: 1.08, zIndex: 50 } : {}}
                                    className="absolute bottom-0 right-8 w-44 h-56 rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30 cursor-pointer transition-all duration-300">
                                    <ResponsiveMedia 
                                        src={imgCode} 
                                        alt="Web3 Dev" 
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                        width={176}
                                        height={224}
                                        sizes="(max-width: 1024px) 132px, 176px"
                                    />
                                    <Label text="Web3 Dev" />
                                </motion.div>
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
