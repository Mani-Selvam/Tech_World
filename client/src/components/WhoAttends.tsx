import { motion } from "framer-motion";
import { Blocks, Bitcoin, Code, Image } from "lucide-react";

export default function ExploreCourses() {
    const courses = [
        {
            title: "Blockchain Courses",
            description:
                "Master the core concepts, history, and real-world power of blockchain. Advance to building scalable networks and enterprise-grade solutions.",
            icon: Blocks,
            color: "primary",
            technologies: ["Foundations", "Architecture", "Enterprise Scaling"],
        },
        {
            title: "Crypto Courses",
            description:
                "Learn crypto basics, market analysis, and advanced wealth-building strategies with DeFi, DAOs, and Tokenomics.",
            icon: Bitcoin,
            color: "accent",
            technologies: [
                "Investing",
                "Trading",
                "DeFi",
                "DAOs",
                "Tokenomics",
            ],
        },
        {
            title: "Blockchain Coding Courses",
            description:
                "Begin coding smart contracts, then progress to building decentralized applications with full-stack Web3 skills.",
            icon: Code,
            color: "primary",
            technologies: [
                "Solidity",
                "Smart Contracts",
                "DApps",
                "Full-Stack Web3",
            ],
        },
        {
            title: "NFT Courses",
            description:
                "From minting your first NFT to launching utility-based collections and building thriving communities.",
            icon: Image,
            color: "accent",
            technologies: [
                "Minting",
                "NFT Collections",
                "Utilities",
                "Community Building",
            ],
        },
    ];

    const formatDescription = (text: string) => {
        return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
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

    return (
        <section className="py-20 bg-background" id="courses">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={titleVariants}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span
                            className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                            style={{
                                backgroundSize: "300% 300%",
                                animation:
                                    "gradientMove 6s ease infinite, float 3s ease-in-out infinite",
                                display: "inline-block",
                            }}>
                            Explore Our Best Courses
                        </span>
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
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Choose from our comprehensive range of blockchain,
                        crypto, coding, and NFT programs — designed to
                        accelerate your tech career.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}>
                    {courses.map((course, index) => {
                        const IconComponent = course.icon;
                        // Center the 4th card under a 3-col grid
                        const cardClass =
                            courses.length === 4 && index === 3
                                ? "gradient-border group cursor-pointer col-span-1 lg:col-span-1 lg:col-start-2 mx-auto"
                                : "gradient-border group cursor-pointer";
                        return (
                            <motion.div
                                key={index}
                                className={cardClass}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{ scale: 0.95 }}>
                                <div className="gradient-border-content p-6 space-y-4 h-full flex flex-col">
                                    <motion.div
                                        className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${
                                            course.color === "primary"
                                                ? "bg-primary/10 text-primary"
                                                : "bg-accent/10 text-accent"
                                        }`}
                                        variants={iconVariants}
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: [0, -5, 5, -5, 0],
                                            transition: { duration: 0.5 },
                                        }}>
                                        <IconComponent size={32} />
                                    </motion.div>

                                    <h3
                                        className={`text-xl font-bold ${
                                            course.color === "primary"
                                                ? "text-primary"
                                                : "text-accent"
                                        } group-hover:text-foreground transition-colors duration-300`}>
                                        {course.title}
                                    </h3>

                                    <p
                                        className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 flex-grow"
                                        dangerouslySetInnerHTML={{
                                            __html: formatDescription(
                                                course.description
                                            ),
                                        }}
                                    />

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {course.technologies.map(
                                            (tech, techIndex) => (
                                                <motion.span
                                                    key={techIndex}
                                                    className={`text-xs px-2 py-1 rounded-full ${
                                                        course.color ===
                                                        "primary"
                                                            ? "bg-primary/20 text-primary"
                                                            : "bg-accent/20 text-accent"
                                                    }`}
                                                    whileHover={{ scale: 1.1 }}
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    transition={{
                                                        delay: 0.1 * techIndex,
                                                    }}>
                                                    {tech}
                                                </motion.span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
