// client/src/components/Testimonials.tsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Person1 from "@assets/Review person 1.jpg";
import Person2 from "@assets/Review person 2.jpg";
import Person3 from "@assets/Review person 3.jpg";

const reduceAnimations = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

const testimonials = [
    {
        id: 1,
        name: "Premnath S",
        position: "Lead Blockchain Developer",
        company: "TechCorp Solutions",
        avatar: Person1,
        rating: 5,
        content:
            "⭐ This is the best class I have attended! Everything you explained was so clear and easy to understand. 🙌 Thank you, mam!",
        highlight: "transformed my career",
        color: "from-purple-600 to-pink-600",
    },
    {
        id: 2,
        name: "GandhaMathi S",
        position: "Senior Crypto Analyst",
        company: "DeFi Labs",
        avatar: Person2,
        rating: 5,
        content:
            "🙌 Mam, you explained everything very humbly and clearly. ✅ The tasks were easy to handle, and you provided a lot of useful information. 📚 The sessions over the 5 days were very informative. We really appreciate your guidance. 🙏",
        highlight: "unmatched knowledge",
        color: "from-cyan-600 to-blue-600",
        featured: true,
    },
    {
        id: 3,
        name: "Sathiyasee M",
        position: "NFT Artist & Creator",
        company: "Creative Crypto",
        avatar: Person3,
        rating: 5,
        content:
            "🌟 You created a lot of awareness for us at the right time through this class. 🙌 I am very glad to be your student. Thank you so much, mam! 🙏",
        highlight: "opened up a whole new world",
        color: "from-amber-600 to-orange-600",
    },
];

interface TestimonialSlideProps {
    testimonial: typeof testimonials[0];
    isActive: boolean;
}

const TestimonialSlide = ({ testimonial, isActive }: TestimonialSlideProps) => {
    const isMobileView = reduceAnimations();
    
    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.9,
                zIndex: isActive ? 10 : 1,
            }}
            transition={{ duration: isMobileView ? 0 : 0.5 }}>
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Quote Icon - Smaller on mobile */}
                {isMobileView ? (
                    <div className="absolute top-4 left-4 md:top-10 md:left-10">
                        <Quote className="w-8 h-8 md:w-16 md:h-16 text-white opacity-20" />
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 0.2, rotate: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="absolute top-4 left-4 md:top-10 md:left-10">
                        <Quote className="w-8 h-8 md:w-16 md:h-16 text-white" />
                    </motion.div>
                )}

                {/* Main Content Container - Responsive Layout */}
                <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: isMobileView ? 0 : 0.4, duration: isMobileView ? 0 : 0.8 }}
                        className="relative w-full lg:w-1/2 h-[40vh] md:h-[45vh] lg:h-[55vh] flex items-center justify-center">
                        {/* Decorative Elements - Smaller on mobile - Static on mobile for performance */}
                        <div className={`absolute -top-4 -right-4 md:-top-8 md:-right-8 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-br ${testimonial.color} rounded-full blur-xl md:blur-2xl opacity-30`} />

                        <div className={`absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-14 h-14 md:w-24 md:h-24 bg-gradient-to-br ${testimonial.color} rounded-full blur-lg md:blur-xl opacity-20`} />

                        {/* Profile Image - Responsive */}
                        <motion.div
                            whileHover={isMobileView ? {} : { scale: 1.05, rotate: 2 }}
                            transition={isMobileView ? {} : { type: "spring", stiffness: 300 }}
                            className="relative">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={400}
                                height={500}
                                decoding="async"
                                className="h-[30vh] md:h-[35vh] lg:h-[45vh] w-auto rounded-2xl shadow-2xl object-cover"
                            />

                            {/* Floating Badge - Responsive */}
                            {testimonial.featured && (
                                <motion.div
                                    initial={{ scale: 0, y: 20 }}
                                    animate={{ scale: 1, y: 0 }}
                                    transition={{ delay: 0.8, type: "spring" }}
                                    className="absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-2 py-1 md:px-4 md:py-2 shadow-xl flex items-center space-x-1">
                                        <Star className="w-3 h-3 md:w-4 md:h-4 text-white" />
                                        <span className="text-white font-bold text-xs md:text-sm">
                                            Featured
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="w-full lg:w-1/2 flex flex-col justify-center h-[30vh] md:h-[35vh] lg:h-[45vh] text-center lg:text-left px-4">
                        {/* Rating - Responsive */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex justify-center lg:justify-start mb-3 md:mb-4">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{
                                        delay: 0.8 + i * 0.1,
                                        type: "spring",
                                    }}>
                                    <Star className="w-3 h-3 md:w-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Testimonial Content - Responsive Font Sizes */}
                        <motion.blockquote
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                            className="text-sm md:text-base lg:text-lg font-light text-white mb-3 md:mb-4 leading-relaxed">
                            {testimonial.content
                                .split(testimonial.highlight)
                                .map((part, i) => (
                                    <span key={i}>
                                        {part}
                                        {i <
                                            testimonial.content.split(
                                                testimonial.highlight
                                            ).length -
                                                1 && (
                                            <span
                                                className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r ${testimonial.color}`}>
                                                {testimonial.highlight}
                                            </span>
                                        )}
                                    </span>
                                ))}
                        </motion.blockquote>

                        {/* Author Info - Responsive */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="mb-3 md:mb-4">
                            <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-1">
                                {testimonial.name}
                            </h3>
                        </motion.div>

                        {/* Progress Bar - Responsive */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{
                                duration: 5,
                                ease: "linear",
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                            className={`h-0.5 bg-gradient-to-r ${testimonial.color} rounded-full`}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % testimonials.length
            );
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <section
                ref={containerRef}
                className="relative h-[90vh] bg-black overflow-hidden">
                {/* Animated Background - Responsive */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -50, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl md:blur-2xl lg:blur-3xl opacity-10"
                    />
                    <motion.div
                        animate={{
                            x: [0, -100, 0],
                            y: [0, 50, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl md:blur-2xl lg:blur-3xl opacity-10"
                    />
                </div>

                {/* Section Header - Responsive */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center pt-6 md:pt-8 pb-2 md:pb-4 px-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                        What Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Students
                        </span>{" "}
                        Say
                    </h2>
                    <div className="w-16 md:w-20 lg:w-24 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Testimonial Slides - Responsive Height */}
                <div className="relative h-[calc(90vh-12rem)] md:h-[calc(90vh-10rem)]">
                    <AnimatePresence mode="wait">
                        {testimonials.map(
                            (testimonial, index) =>
                                index === currentIndex && (
                                    <TestimonialSlide
                                        key={testimonial.id}
                                        testimonial={testimonial}
                                        isActive={true}
                                    />
                                )
                        )}
                    </AnimatePresence>
                </div>

                {/* Centered Navigation Controls - Responsive */}
                <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex flex-col items-center justify-center space-y-3 z-20 px-4">
                    {/* Navigation Buttons - Responsive */}
                    <div className="flex items-center space-x-3 md:space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handlePrev}
                            className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </motion.button>

                        {/* Dots Indicator - Responsive */}
                        <div className="flex space-x-1.5 md:space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? "w-6 md:w-8 bg-gradient-to-r from-purple-500 to-pink-500"
                                            : "w-1.5 md:w-2 bg-gray-600"
                                    }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleNext}
                            className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </motion.button>
                    </div>
                </div>
            </section>
        </>
    );
}
