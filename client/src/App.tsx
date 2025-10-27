import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BubbleAnimation from "@/components/BubbleAnimation";

const Home = lazy(() => import("@/pages/home"));
const NotFound = lazy(() => import("@/pages/not-found"));
const Enrollment = lazy(() => import("@/pages/enrollment"));
const ProtectedDashboard = lazy(() => import("@/components/ProtectedDashboard"));

function Router() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-white">Loading...</div></div>}>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/enrollment" component={Enrollment} />
                <Route path="/dashboard" component={ProtectedDashboard} />
                <Route component={NotFound} />
            </Switch>
        </Suspense>
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
                        <Router />
                        {/* <ProtectedDashboard /> */}
                    </div>
                </div>
            </TooltipProvider>
        </QueryClientProvider>
    );
}

export default App;
