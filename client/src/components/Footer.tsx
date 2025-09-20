// client/src/components/Footer.tsx
import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import techaraLogo from "@/assets/techara-logo.png"; // Adjust path if needed

export default function Footer() {
    return (
        <footer className="bg-secondary/80 py-16" id="contact">
            {/* Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Enroll Now CTA Section */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}

                    <div className="space-y-4 gap-10">
                        <div className="w-[200px] h-[80px] flex justify-center items-center gap-1">
                            <img
                                src={techaraLogo}
                                alt="Tech ARA Logo"
                                className="w-[200px] h-[200px] object-contain"
                            />
                        </div>
                        <p className="text-muted-foreground">
                            The world's leading blockchain, crypto & Web3 forum.
                        </p>
                    </div>

                    {/* Event Info */}
                    <div className="space-y-4 p-12">
                        <h3 className="font-semibold text-foreground ">
                            Event Info
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li data-testid="footer-event-date">Web3_Sindhu</li>
                            <li data-testid="footer-event-location">
                                TechARA Academy
                            </li>
                        </ul>
                    </div>

                    {/* Logo Section */}

                    {/* Contact Info */}
                    <div className="space-y-4 p-12">
                        <h3 className="font-semibold text-foreground">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li data-testid="footer-email">info@techara.in</li>
                            <li data-testid="footer-social">
                                Follow us on social media
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
                    <p data-testid="footer-copyright">
                        &copy; 2025 TechAra. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
