import { motion } from "framer-motion";
import {
    Code,
    Database,
    Cloud,
    Shield,
    Smartphone,
    Blocks,
} from "lucide-react";

export default function ExploreCourses() {
    const courses = [
        {
            title: "Full Stack Web Development",
            description:
                "Master both **frontend and backend** technologies. Build complete web applications with modern frameworks and databases.",
            icon: Code,
            color: "primary",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
        },
        {
            title: "Data Science & Machine Learning",
            description:
                "Learn to **analyze data** and build intelligent systems. Master Python, ML algorithms, and data visualization techniques.",
            icon: Database,
            color: "accent",
            technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
        },
        {
            title: "Cloud Computing (AWS & Azure)",
            description:
                "Deploy and manage **scalable applications** in the cloud. Master cloud architecture and DevOps practices.",
            icon: Cloud,
            color: "primary",
            technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
        },
        {
            title: "Cybersecurity & Ethical Hacking",
            description:
                "Protect systems from **cyber threats**. Learn penetration testing, security analysis, and ethical hacking techniques.",
            icon: Shield,
            color: "accent",
            technologies: ["Kali Linux", "Metasploit", "OWASP", "Wireshark"],
        },
        {
            title: "Mobile App Development",
            description:
                "Build **cross-platform mobile apps** that work on iOS and Android. Create engaging user experiences.",
            icon: Smartphone,
            color: "primary",
            technologies: ["React Native", "Flutter", "Dart", "Firebase"],
        },
        {
            title: "Blockchain Technology & Web3",
            description:
                "Develop **decentralized applications** and smart contracts. Master the future of digital transactions.",
            icon: Blocks,
            color: "accent",
            technologies: ["Solidity", "Ethereum", "Web3.js", "DeFi"],
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
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="py-20 bg-background" id="courses">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        Choose from our comprehensive range of industry-leading
                        courses designed to accelerate your tech career
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}>
                    {courses.map((course, index) => {
                        const IconComponent = course.icon;
                        return (
                            <motion.div
                                key={index}
                                className="gradient-border group cursor-pointer"
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
                                        } group-hover:text-foreground transition-colors duration-300`}
                                        data-testid={`course-title-${index}`}>
                                        {course.title}
                                    </h3>

                                    <p
                                        className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 flex-grow"
                                        dangerouslySetInnerHTML={{
                                            __html: formatDescription(
                                                course.description
                                            ),
                                        }}
                                        data-testid={`course-description-${index}`}
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
