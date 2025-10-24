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
} from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function PassionateEducator() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Particles */}
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

                {/* Gradient Orbs */}
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
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
                        onClick={handleWhatsAppClick}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}>
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

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Column - Video/Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}>
                        <div className="relative group">
                            {/* Main Video Container */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                {/* LinkedIn Video Embed */}
                                <div className="relative aspect-video bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30">
                                    <iframe
                                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7172462144091832320?compact=1"
                                        height="399"
                                        width="100%"
                                        frameborder="0"
                                        allowfullscreen=""
                                        title="Embedded post"
                                        className="w-full h-full"></iframe>
                                </div>
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full shadow-lg"
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

                    {/* Right Column - Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}>
                        {/* Bio Text */}
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

                        {/* CTA Buttons */}
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

                {/* Stats Section */}

                <div>
                    <div className="flex flex-col items-center space-y-4">
                        <Link href="/enrollment">
                            <Button
                                size="lg"
                                className="
    bg-gradient-to-r from-purple-600 to-pink-600 
    hover:from-purple-700 hover:to-pink-700 
    text-white font-semibold 
    px-6 sm:px-8 py-3 rounded-lg 
    transition-all duration-300 transform 
    hover:scale-105 shadow-lg hover:shadow-xl
    w-full sm:w-auto max-w-xs mx-auto
    flex justify-center items-center
  "
                                data-testid="button-enroll-now">
                                <GraduationCap className="w-5 h-5 mr-2" />
                                Enroll Now - Limited Seats
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
