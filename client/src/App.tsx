import { Route, Router, Switch } from "wouter";
import { lazy, Suspense } from "react";
import React from "react";
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
const Academy = lazy(() => import("@/pages/academy"));
const ProtectedDashboard = lazy(
    () => import("@/components/ProtectedDashboard")
);

// Lightweight Loading Component - Optimized for performance
const LoadingSpinner = () => {
    const [isMounted, setIsMounted] = React.useState(false);
    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
            <div className="relative z-10 flex flex-col items-center justify-center p-8">
                <div className="relative mb-8 w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center shadow-2xl">
                    <BookOpen className="w-12 h-12 text-white" />
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                            Techara
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Loading...
                    </p>
                </div>

                <div className="flex space-x-2 mt-8">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-3 h-3 bg-purple-400 rounded-full"
                            style={{
                                animation: isMounted ? `pulse 1.2s ease-in-out infinite` : 'none',
                                animationDelay: `${i * 0.15}s`
                            }}
                        />
                    ))}
                </div>
                <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`}</style>
            </div>
        </div>
    );
};

function AppRouter() {
    return (
        <Router base="/">
            <Suspense fallback={<LoadingSpinner />}>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/enrollment" component={Enrollment} />
                    <Route path="/academy" component={Academy} />
                    <Route path="/dashboard" component={ProtectedDashboard} />
                    <Route path="*" component={NotFound} />
                </Switch>
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
