import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BubbleAnimation from "@/components/BubbleAnimation";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Enrollment from "@/pages/enrollment";
import ProtectedDashboard from "@/components/ProtectedDashboard";

function Router() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/enrollment" component={Enrollment} />
            <Route path="/dashboard" component={ProtectedDashboard} />
            <Route component={NotFound} />
        </Switch>
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
