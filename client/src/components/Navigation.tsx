import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ResponsiveMedia } from "./ResponsiveMedia";
import techaraLogo from "@/assets/techara-logo.png";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navigationItems = [
        { id: "hero", title: "Home" },
        { id: "features", title: "Features" },
        { id: "courses", title: "Courses" },
        { id: "attendees", title: "Attendees" },
        { id: "benefit", title: "Benefit" },
        { id: "testimonial", title: "Testimonial" }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    const openRegistrationForm = () => {
        setIsOpen(false);
        setTimeout(() => {
            const attendeesSection = document.getElementById("attendees");
            if (attendeesSection) {
                attendeesSection.scrollIntoView({ behavior: "smooth" });
                // Trigger the registration form in attendees component
                const registerButton = document.querySelector(
                    '[data-testid="button-register-countdown"]'
                ) as HTMLButtonElement;
                if (registerButton) {
                    registerButton.click();
                }
            }
        }, 100);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <ResponsiveMedia
                                src={techaraLogo}
                                alt="TechARA Logo"
                                className="h-8 w-auto object-contain"
                                loading="eager"
                                maxHeight="32px"
                                data-testid="nav-logo"
                            />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {navigationItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-foreground hover:text-primary transition-colors text-sm"
                                data-testid={`nav-${item.id}`}>
                                {item.title}
                            </button>
                        ))}
                        <button
                            onClick={openRegistrationForm}
                            className="bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-lg text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm"
                            data-testid="button-buy-tickets-nav">
                            Register Now
                        </button>
                    </div>

                    {/* Medium Screen Menu */}
                    <div className="hidden md:flex lg:hidden items-center space-x-2">
                        {navigationItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-foreground hover:text-primary transition-colors text-xs"
                                data-testid={`nav-${item.id}-md`}>
                                {item.title}
                            </button>
                        ))}
                        <button
                            onClick={openRegistrationForm}
                            className="bg-gradient-to-r from-primary to-accent px-3 py-2 rounded-lg text-primary-foreground font-medium hover:opacity-90 transition-opacity text-xs"
                            data-testid="button-buy-tickets-nav-md">
                            Register
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary"
                            data-testid="button-mobile-menu">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/90 backdrop-blur-md border-t border-border">
                            <div className="grid grid-cols-2 gap-2">
                                {navigationItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm rounded-lg hover:bg-secondary/30"
                                        data-testid={`nav-${item.id}-mobile`}>
                                        {item.title}
                                    </button>
                                ))}
                            </div>
                            <div className="pt-2 border-t border-border/50">
                                <button
                                    onClick={openRegistrationForm}
                                    className="block w-full text-center px-3 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-lg"
                                    data-testid="button-buy-tickets-mobile">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
