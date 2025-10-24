// src/components/AttendeesDemographics.jsx
import {
    TrendingUp,
    BarChart3,
    Users,
    Code,
    Pickaxe,
    Settings,
    Rocket,
    MoreHorizontal,
    Sparkles,
    ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AttendeesDemographics() {
    const demographics = [
        {
            percentage: "83%",
            category: "Crypto traders",
            color: "from-purple-500 to-pink-500",
            icon: BarChart3,
            image: "https://blockchain-life.com/wp-content/uploads/2023/11/traders.jpg",
            description: "Professional traders and investors",
        },
        {
            percentage: "80%",
            category: "Students",
            color: "from-blue-500 to-cyan-500",
            icon: Pickaxe,
            image: "https://blockchain-life.com/wp-content/uploads/2023/11/miners.jpg",
            description: "University and college students",
        },
        {
            percentage: "70%",
            category: "Developers",
            color: "from-green-500 to-emerald-500",
            icon: Code,
            image: "https://blockchain-life.com/wp-content/uploads/2023/11/developers.jpg",
            description: "Software developers and engineers",
        },
        {
            percentage: "67%",
            category: "Investors/Funds",
            color: "from-orange-500 to-red-500",
            icon: TrendingUp,
            image: "https://blockchain-life.com/wp-content/uploads/2023/11/investors.jpg",
            description: "Institutional and retail investors",
        },
        {
            percentage: "47%",
            category: "Entrepreneurs",
            color: "from-indigo-500 to-purple-500",
            icon: Users,
            image: "https://blockchain-life.com/wp-content/uploads/2023/11/entrepreneurs.jpg",
            description: "Business owners and founders",
        },
        {
            percentage: "24%",
            category: "Startups",
            color: "from-pink-500 to-rose-500",
            icon: Rocket,
            image: "https://blockchain-life.com/wp-content/uploads/2023/11/startups.jpg",
            description: "Early-stage companies",
        },
        {
            percentage: "26%",
            category: "Service providers",
            color: "from-cyan-500 to-blue-500",
            icon: Settings,
            image: "https://blockchain-life.com/wp-content/uploads/2023/11/services.jpg",
            description: "Consultants and service companies",
        },
        {
            percentage: "4%",
            category: "Others",
            color: "from-gray-500 to-slate-500",
            icon: MoreHorizontal,
            image: "https://blockchain-life.com/wp-content/uploads/2023/11/others.jpg",
            description: "Various other professionals",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <div className="relative py-16">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            </div>

            {/* Main Container with Left and Right Gaps */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">
                            Who Attends
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Our Community
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A diverse group of professionals passionate about Web3
                        technology
                    </p>
                </div>

                {/* Attendee Categories */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}>
                    {demographics.map((demo, index) => {
                        const IconComponent = demo.icon;
                        return (
                            <motion.div
                                key={index}
                                className="group relative"
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 },
                                }}>
                                {/* Card Glow Effect */}
                                <div
                                    className={`absolute -inset-1 bg-gradient-to-r ${demo.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>

                                {/* Card Content */}
                                <div className="relative h-full bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col overflow-hidden">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-5">
                                        <div
                                            className={`w-full h-full bg-gradient-to-br ${demo.color}`}></div>
                                    </div>

                                    {/* Progress Ring */}
                                    <div className="relative mb-4 flex justify-center">
                                        <div className="relative w-20 h-20">
                                            <svg className="w-20 h-20 transform -rotate-90">
                                                <circle
                                                    cx="40"
                                                    cy="40"
                                                    r="36"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    fill="none"
                                                    className="text-slate-700"
                                                />
                                                <circle
                                                    cx="40"
                                                    cy="40"
                                                    r="36"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    fill="none"
                                                    strokeDasharray={`${
                                                        parseInt(
                                                            demo.percentage
                                                        ) * 2.26
                                                    } 226`}
                                                    className={`text-transparent bg-gradient-to-r ${demo.color} bg-clip-text`}
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-2xl font-bold text-white">
                                                    {demo.percentage}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="relative flex justify-center mb-4">
                                        <div
                                            className={`p-3 rounded-xl bg-gradient-to-r ${demo.color} p-0.5`}>
                                            <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Category */}
                                    <h3 className="text-lg font-bold text-white text-center mb-2">
                                        {demo.category}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm text-center mb-4 flex-grow">
                                        {demo.description}
                                    </p>

                                    {/* Trend Indicator */}
                                    <div className="flex items-center justify-center text-green-400 text-sm">
                                        <ArrowUp className="w-4 h-4 mr-1" />
                                        <span>Growing segment</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
