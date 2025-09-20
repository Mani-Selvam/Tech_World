"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Handshake,
    Award,
    Users,
    Briefcase,
    DollarSign,
    Wrench,
    Network,
    Laptop,
    Rocket,
    TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    {
        name: "Hands-On Learning",
        description:
            "Work on real blockchain projects, smart contracts, DeFi apps, and NFTs.",
        icon: Wrench,
        color: "text-blue-400",
    },
    {
        name: "Industry Certification",
        description:
            "Earn Techara Academy certificates to boost career and freelancing credibility.",
        icon: Award,
        color: "text-orange-400",
    },
    {
        name: "Expert Mentorship",
        description:
            "Guidance from experienced blockchain, crypto & NFT trainers.",
        icon: Users,
        color: "text-blue-500",
    },
    {
        name: "Career Support",
        description:
            "100% placement assistance, internships, and freelance opportunities.",
        icon: Briefcase,
        color: "text-orange-500",
    },
    {
        name: "Investment Skills",
        description:
            "Learn crypto trading, DeFi protocols, staking & risk management.",
        icon: DollarSign,
        color: "text-green-500",
    },
    {
        name: "Exclusive Tools",
        description:
            "Access coding platforms, trading simulators & NFT marketplaces.",
        icon: Laptop,
        color: "text-purple-400",
    },
    {
        name: "Community Access",
        description:
            "Join a peer network of developers, traders & NFT creators.",
        icon: Network,
        color: "text-blue-400",
    },
    {
        name: "Flexible Learning",
        description:
            "Online + offline classes with self-paced or live options.",
        icon: Handshake,
        color: "text-orange-400",
    },
    {
        name: "Entrepreneurship",
        description:
            "Launch NFT projects, crypto startups & blockchain businesses.",
        icon: Rocket,
        color: "text-red-500",
    },
    {
        name: "Financial Growth",
        description:
            "Gain high-demand Web3 skills and global career opportunities.",
        icon: TrendingUp,
        color: "text-green-500",
    },
];

// Motion Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
        scale: 1,
        rotate: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Benefits() {
    return (
        <section className="py-20 bg-background" id="benefits">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span
                            className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                            style={{
                                backgroundSize: "300% 300%",
                                animation:
                                    "gradientMove 6s ease infinite, float 3s ease-in-out infinite",
                                display: "inline-block",
                            }}>
                            Benefits
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Why learning Blockchain & Crypto with Techara gives you
                        the edge
                    </p>
                </motion.div>

                {/* Benefit Cards with flex wrap to auto-center last row */}
                <motion.div
                    className="flex flex-wrap justify-center gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}>
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="flex justify-center">
                                <Card className="group bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer h-full w-[250px]">
                                    <CardContent className="p-8 text-center flex flex-col items-center h-full">
                                        {/* Icon */}
                                        <motion.div
                                            className="mb-6 flex justify-center"
                                            variants={iconVariants}
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: [0, -10, 10, -10, 0],
                                                transition: { duration: 0.5 },
                                            }}>
                                            <div className="p-4 rounded-2xl bg-secondary/30 group-hover:bg-secondary/50 transition-colors">
                                                <IconComponent
                                                    className={`w-8 h-8 ${benefit.color} group-hover:scale-110 transition-transform`}
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {benefit.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-grow">
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
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
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
            </style>
        </section>
    );
}
