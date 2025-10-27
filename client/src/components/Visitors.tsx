import { motion } from "framer-motion";
import {
    MessageCircle,
    Play,
    Award,
    Users,
    BookOpen,
    TrendingUp,
    ChevronRight,
    Star,
    Zap,
    Globe,
    Maximize2,
    Minimize2,
} from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

export default function PassionateEducator() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoContainerRef = useRef<HTMLDivElement>(null);

    const whatsappNumber = "+918056880222";
    const whatsappMessage = ` Hi Sindhu 👋  I'm really interested in learning about Blockchain and Crypto! 💻✨ I'd love to know more about your upcoming session and how I can join your Free workshop, Internship, or Master Courses. 🚀`;

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${whatsappNumber.replace(
            /\s/g,
            ""
        )}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, "_blank");
    };

    const handleViewCourses = () => {
        window.open("https://techara.in/", "_blank");
    };

    // ✅ Fullscreen handler (like YouTube)
    const handleFullscreen = () => {
        const container = videoContainerRef.current;
        if (!container) return;

        if (!isFullscreen) {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if ((container as any).webkitRequestFullscreen) {
                (container as any).webkitRequestFullscreen();
            } else if ((container as any).msRequestFullscreen) {
                (container as any).msRequestFullscreen();
            }

            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock("landscape").catch(() => {});
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if ((document as any).webkitExitFullscreen) {
                (document as any).webkitExitFullscreen();
            } else if ((document as any).msExitFullscreen) {
                (document as any).msExitFullscreen();
            }

            if (screen.orientation && screen.orientation.unlock) {
                screen.orientation.unlock();
            }
        }
    };

    // ✅ Detect fullscreen change and update state
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        document.addEventListener(
            "webkitfullscreenchange",
            handleFullscreenChange
        );
        document.addEventListener("msfullscreenchange", handleFullscreenChange);

        return () => {
            document.removeEventListener(
                "fullscreenchange",
                handleFullscreenChange
            );
            document.removeEventListener(
                "webkitfullscreenchange",
                handleFullscreenChange
            );
            document.removeEventListener(
                "msfullscreenchange",
                handleFullscreenChange
            );
        };
    }, []);

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}>
                    <motion.button
                        className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleWhatsAppClick}>
                        <Zap className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">
                            Meet Your Mentor
                        </span>
                    </motion.button>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                            Passionate Blockchain
                        </span>
                        <br />
                        <span className="text-white">Educator</span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Transforming complex blockchain concepts into accessible
                        knowledge, empowering the next generation of Web3
                        innovators and leaders.
                    </p>
                </motion.div>

                {/* Video + Info */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* ✅ Left Column with fullscreen video */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}>
                        <div ref={videoContainerRef} className="relative group">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <div className="relative aspect-video bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30">
                                    <iframe
                                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7172462144091832320?compact=1"
                                        height="399"
                                        width="100%"
                                        frameBorder="0"
                                        allowFullScreen
                                        title="Embedded post"
                                        className="w-full h-full"></iframe>
                                </div>
                                {/* ✅ Fullscreen toggle button over video */}
                                <button
                                    onClick={handleFullscreen}
                                    className="absolute bottom-3 right-3 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition">
                                    {isFullscreen ? (
                                        <Minimize2 className="w-5 h-5" />
                                    ) : (
                                        <Maximize2 className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                With over 6+ years of experience in blockchain
                                technology and education, I've dedicated my
                                career to demystifying the world of Web3 and
                                making it accessible to everyone.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                My mission is to bridge the gap between complex
                                blockchain concepts and practical applications,
                                helping students and professionals alike to
                                thrive in the decentralized economy.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <motion.button
                                onClick={handleWhatsAppClick}
                                className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <MessageCircle className="w-5 h-5 relative z-10" />
                                <span className="relative z-10">
                                    Chat on WhatsApp
                                </span>
                                <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                onClick={handleViewCourses}
                                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-3"
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(147, 51, 234, 0.2)",
                                }}
                                whileTap={{ scale: 0.98 }}>
                                <BookOpen className="w-5 h-5" />
                                <span>View Courses</span>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section unchanged */}
                <div className="flex flex-col items-center space-y-4">
                    <motion.div
                        className="relative w-full max-w-md"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}>
                        <Link href="/enrollment">
                            <Button
                                size="lg"
                                className="
                                    bg-gradient-to-r from-purple-600 to-pink-600 
                                    hover:from-purple-700 hover:to-pink-700 
                                    text-white font-bold 
                                    px-10 py-6 rounded-xl 
                                    transition-all duration-300 transform 
                                    hover:scale-105 shadow-xl hover:shadow-2xl
                                    w-full
                                    flex justify-center items-center
                                    text-lg
                                "
                                data-testid="button-enroll-now">
                                <GraduationCap className="w-6 h-6 mr-3" />
                                Enroll Now - Limited Seats
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
