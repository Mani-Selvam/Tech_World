// import { motion } from "framer-motion";

// export default function Features() {
//   const features = [
//     {
//       icon: "✅",
//       title: "Industry-Recognized Certificates",
//       description: "Get certified with credentials recognized across the blockchain and crypto industry",
//       color: "primary"
//     },
//     {
//       icon: "📚",
//       title: "Beginner to Advanced Level Training",
//       description: "Structured learning path from basics to expert level with progressive skill building",
//       color: "accent"
//     },
//     {
//       icon: "👨‍🏫",
//       title: "Expert Mentors & Real-Time Guidance",
//       description: "Learn directly from industry experts with personalized mentorship and live support",
//       color: "primary"
//     },
//     {
//       icon: "💻",
//       title: "Hands-On Projects & Case Studies",
//       description: "Build real-world projects and analyze actual blockchain case studies",
//       color: "accent"
//     },
//     {
//       icon: "🌐",
//       title: "Placement Assistance & Career Support",
//       description: "Comprehensive career services including job placement and interview preparation",
//       color: "primary"
//     },
//     {
//       icon: "⏱️",
//       title: "Flexible Learning Options",
//       description: "Choose from online, offline, or hybrid learning modes that fit your schedule",
//       color: "accent"
//     },
//     {
//       icon: "🧑‍🤝‍🧑",
//       title: "Community & Peer Learning Support",
//       description: "Join a vibrant community of learners and professionals for collaborative growth",
//       color: "primary"
//     },
//     {
//       icon: "🚀",
//       title: "Latest Tools & Technology Stack",
//       description: "Master cutting-edge blockchain tools and the most current technology frameworks",
//       color: "accent"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       scale: 0.9
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section className="py-20 bg-background" id="features">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={titleVariants}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Features
//             </span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Discover what makes our academy the premier destination for blockchain education
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           variants={containerVariants}
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className="gradient-border group cursor-pointer"
//               variants={cardVariants}
//               whileHover={{
//                 scale: 1.05,
//                 transition: { duration: 0.2 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <div className="gradient-border-content p-6 space-y-4 h-full flex flex-col">
//                 <motion.div
//                   className="text-4xl mb-2"
//                   whileHover={{
//                     scale: 1.2,
//                     rotate: [0, -10, 10, -10, 0],
//                     transition: { duration: 0.5 }
//                   }}
//                 >
//                   {feature.icon}
//                 </motion.div>
//                 <h3
//                   className={`text-xl font-bold ${feature.color === 'primary' ? 'text-primary' : 'text-accent'} group-hover:text-foreground transition-colors duration-300`}
//                   data-testid={`feature-title-${index}`}
//                 >
//                   {feature.title}
//                 </h3>
//                 <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 flex-grow" data-testid={`feature-description-${index}`}>
//                   {feature.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function Features() {
    const features = [
        {
            icon: "⚡",
            title: "Core Highlights",
            description:
                "India’s first all-in-one Web3 Academy with blockchain, crypto, NFT & coding under one roof. 70% practical training led by IIT & MSME-certified experts.",
            color: "primary",
        },
        {
            icon: "🎯",
            title: "Student-Centric",
            description:
                "Free weekly workshops, real-world project internships, master certifications, and 100% placement support with 1-to-1 mentorship.",
            color: "accent",
        },
        {
            icon: "💼",
            title: "Industry Connect",
            description:
                "Corporate & college collaborations, expert trainers with 10+ years combined experience, and globally recognized certifications with internship letters.",
            color: "primary",
        },
        {
            icon: "💻",
            title: "Learning Experience",
            description:
                "Hybrid online + offline classes, capstone projects, live blockchain demos, and an interactive peer community with gamified learning.",
            color: "accent",
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
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="py-20 bg-background" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={titleVariants}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span
                            className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                            style={{
                                backgroundSize: "300% 300%",
                                animation:
                                    "gradientMove 6s ease infinite, float 3s ease-in-out infinite",
                                display: "inline-block",
                            }}>
                            Features
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Why learners choose our Web3 Academy
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="gradient-border group cursor-pointer"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.98 }}>
                            <div className="gradient-border-content p-6 space-y-4 h-full flex flex-col">
                                {/* Icon */}
                                <motion.div
                                    className="text-4xl mb-2"
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: [0, -10, 10, -10, 0],
                                        transition: { duration: 0.5 },
                                    }}>
                                    {feature.icon}
                                </motion.div>
                                {/* Title */}
                                <h3
                                    className={`text-xl font-bold ${
                                        feature.color === "primary"
                                            ? "text-primary"
                                            : "text-accent"
                                    } group-hover:text-foreground transition-colors duration-300`}>
                                    {feature.title}
                                </h3>
                                {/* Description */}
                                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 flex-grow">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
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
