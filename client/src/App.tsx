import { Route, Router, Switch } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BubbleAnimation from "@/components/BubbleAnimation";
import { motion } from "framer-motion";
import { Loader2, Sparkles, Zap, BookOpen } from "lucide-react";

const Home = lazy(() => import("@/pages/home"));
const NotFound = lazy(() => import("@/pages/not-found"));
const Enrollment = lazy(() => import("@/pages/enrollment"));
const ProtectedDashboard = lazy(
    () => import("@/components/ProtectedDashboard")
);

// Enhanced Loading Component
const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
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

            {/* Loading Content */}
            <div className="relative z-10 flex flex-col items-center justify-center p-8">
                {/* Logo/Icon Container */}
                <motion.div
                    className="relative mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    <motion.div
                        className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center shadow-2xl"
                        animate={{
                            rotate: [0, 10, 0, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}>
                        <BookOpen className="w-12 h-12 text-white" />
                    </motion.div>

                    {/* Orbiting Elements */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}>
                        {[0, 120, 240].map((angle) => (
                            <motion.div
                                key={angle}
                                className="absolute w-4 h-4 bg-purple-400 rounded-full"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: `rotate(${angle}deg) translateX(40px)`,
                                    transformOrigin: "0 0",
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                            Techara
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Loading your blockchain education experience...
                    </p>
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                    className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-8"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "16rem", opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 2,
                            delay: 0.5,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>

                {/* Loading Icons */}
                <motion.div
                    className="flex space-x-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 0,
                        }}>
                        <Zap className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 0.5,
                        }}>
                        <Sparkles className="w-6 h-6 text-purple-400" />
                    </motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 1,
                        }}>
                        <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
                    </motion.div>
                </motion.div>

                {/* Loading Dots */}
                <motion.div
                    className="flex space-x-2 mt-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}>
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-purple-400 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

function AppRouter() {
    return (
        <Router base="/">
            <Suspense fallback={<LoadingSpinner />}>
                <Route path="/" component={Home} />
                <Route path="/enrollment" component={Enrollment} />
                <Route path="/dashboard" component={ProtectedDashboard} />
                <Route path="*" component={NotFound} />
            </Suspense>
        </Router>
    );
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <div className="relative">
                    <BubbleAnimation />
                    <div className="relative z-10">
                        <Toaster />
                        <AppRouter />
                        {/* <ProtectedDashboard /> */}
                    </div>
                </div>
            </TooltipProvider>
        </QueryClientProvider>
    );
}

export default App;
