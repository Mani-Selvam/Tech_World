import sindhuraImage from "@assets/Techara 1_1758098717539.png";
import profileAvatars from "@assets/Group 58_1758098717538.png";
import redCircle from "@assets/Ellipse 17_1758099227458.png";
import { ResponsiveMedia } from "./ResponsiveMedia";
import { useEffect, useState } from "react";
import SectionBubbles from "./SectionBubbles";
import techaraLogo from "@/assets/techara-logo.png";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animations after component mounts
        setIsVisible(true);
    }, []);

    const openRegistrationForm = () => {
        // Scroll to attendees section and directly show the form
        setTimeout(() => {
            const attendeesSection = document.getElementById("attendees");
            if (attendeesSection) {
                attendeesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });

                // Directly set showForm to true in the Attendees component using custom event
                const event = new CustomEvent("openRegistrationForm");
                document.dispatchEvent(event);
            }
        }, 300);
    };

    return (
        <section className="relative min-h-screen pt-20 overflow-hidden">
            {/* Black Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "#000000",
                }}
            />

            {/* Animated Bubbles */}
            <SectionBubbles count={5} className="z-[1]" />

            {/* Tech ARA Logo - Left Side on desktop, centered on mobile */}
            <div
                className={`absolute top-[80px] md:left-8 left-1/2 transform-gpu md:transform-none -translate-x-1/1 md:translate-x-0 z-20 transition-all duration-1000 ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                }`}>
                <img
                    src={techaraLogo}
                    alt="Tech ARA Logo"
                    className="w-50 h-60 object-contain hover:scale-110 transition-transform duration-300 mt-12 mb-1"
                />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full h-full">
                <div className="text-center pt-4 pb-8 px-4">
                    <h1
                        className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto transition-all duration-1000 transform ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                        data-testid="text-main-title"
                        style={{ animation: "float 3s ease-in-out infinite" }}>
                        <span
                            className="inline-block transition-transform duration-700 delay-300 transform hover:scale-105"
                            style={{
                                animation: "pulseText 2s ease-in-out infinite",
                            }}>
                            India's First All in One
                        </span>
                        <br />
                        <span
                            className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-700 delay-500 transform hover:scale-105"
                            style={{
                                animation: "gradientMove 4s ease infinite",
                                backgroundSize: "200% 200%",
                            }}>
                            Web3 Academy
                        </span>

                        {/* Inline keyframes */}
                        <style>
                            {`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulseText {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}
                        </style>
                    </h1>
                </div>

                {/* Main Layout - Desktop */}
                <div className="hidden md:block relative">
                    <div className="flex items-center justify-center min-h-[450px] relative">
                        {/* Central Sindhu Circle */}
                        <div className="relative">
                            {/* Red Circle Background */}
                            <div
                                className={`w-[380px] h-[340px] md:w-[400px] md:h-[400px] lg:w-[430px] lg:h-[420px] xl:w-[450px] xl:h-[450px]    rounded-full relative mx-auto -translate-x-20 -translate-y-10 transition-all duration-1000 transform  ${
                                    isVisible
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-90"
                                }`}>
                                <ResponsiveMedia
                                    src={redCircle}
                                    alt=""
                                    className="w-full h-full object-cover animate-pulse-slow"
                                    loading="eager"
                                />

                                {/* Sindhu Image - Positioned in center of red circle */}
                                <div
                                    className={`absolute top-[50px] left-[10px] right-[50px] bottom-[50px] lg:top-[60px] lg:left-[60px] lg:right-[60px] lg:bottom-[60px] rounded-full overflow-hidden translate-x-20 transition-all duration-1000 delay-300 transform ${
                                        isVisible
                                            ? "opacity-100 rotate-0"
                                            : "opacity-0 rotate-12"
                                    }`}>
                                    <ResponsiveMedia
                                        src={sindhuraImage}
                                        alt="Sindhu - Web3 Expert"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        loading="eager"
                                        data-testid="img-sindhu-hero"
                                    />
                                </div>
                            </div>

                            {/* Sparkle Icons - Top Right of Circle */}
                            <div
                                className={`absolute -top-4 -right-80 text-yellow-400 transition-all duration-1000 delay-700 ${
                                    isVisible ? "opacity-100" : "opacity-0"
                                }`}>
                                <div className="text-2xl mb-2 animate-bounce">
                                    ✨
                                </div>
                                <div className="text-lg ml-8 animate-ping">
                                    ✨
                                </div>
                            </div>
                        </div>

                        {/* Quote Text Box - Right Side */}
                        <div
                            className={`absolute top-1/1 -translate-y-1/2  right-20 w-80 max-w-sm transition-all duration-1000 transform ${
                                isVisible
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-20"
                            }`}>
                            <div className="backdrop-blur-sm rounded-2xl p-6 bg-gradient-to-br from-purple-900/30 to-black/50 hover:from-purple-800/40 hover:to-black/60 transition-all duration-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                <p className="text-white text-sm leading-relaxed mb-4">
                                    Building the future, one block at a time -
                                    that's the spirit of Web3_Sindhu.
                                </p>
                                <button
                                    onClick={openRegistrationForm}
                                    className="bg-white text-black px-1 py-2 rounded-full font-semibold hover:bg-purple-100 hover:scale-105 transition-all duration-300 shadow-lg w-full"
                                    data-testid="button-book-demo-hero">
                                    Book a Demo
                                </button>
                            </div>
                        </div>

                        {/* Profile Avatars - Bottom Left */}
                        <div
                            className={`absolute bottom-0 left-4 lg:left-8 xl:left-16 transition-all duration-1000 delay-500 transform ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                            }`}>
                            <div className="flex items-center gap-3 mb-4">
                                <ResponsiveMedia
                                    src={profileAvatars}
                                    alt="Profile Avatars"
                                    className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
                                    loading="eager"
                                    data-testid="img-profile-avatars"
                                />
                            </div>
                            <div className="max-w-xs mb-8">
                                <h3 className="text-white font-semibold text-base mb-2">
                                    Sindhu turns technology into inspiration
                                </h3>
                                <a
                                    href="https://www.instagram.com/web3_sindhu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-400 hover:text-purple-300 transition-colors underline text-sm cursor-pointer"
                                    data-testid="button-see-story">
                                    See Story
                                </a>
                            </div>
                        </div>

                        {/* 500+ Reviews Badge - Bottom Right */}
                        <div
                            className={`absolute bottom-10 right-4 lg:right-8 xl:right-56 transition-all duration-1000 delay-700 transform ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                            }`}>
                            <div className="bg-white rounded-full px-6 py-3 shadow-xl hover:shadow-purple-500/20 hover:scale-110 transition-all duration-300">
                                <div className="text-center">
                                    <div className="text-black font-bold text-lg">
                                        500+
                                    </div>
                                    <div className="text-black text-xs">
                                        Positive Reviews
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden px-4">
                    {/* Central Sindhu Circle for Mobile */}
                    <div className="flex justify-center mt-10 mb-10">
                        <div
                            className={`relative w-72 h-72 sm:w-80 sm:h-80 transition-all duration-1000 transform -translate-x-10 ${
                                isVisible
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-90"
                            }`}>
                            <ResponsiveMedia
                                src={redCircle}
                                alt=""
                                className="w-full h-full object-cover animate-pulse-slow"
                                loading="eager"
                            />

                            {/* Sindhu Image for Mobile */}
                            <div
                                className={`absolute top-18 left-12 right-12 bottom-12 rounded-full overflow-hidden transition-all translate-x-10 duration-1000 delay-300 transform ${
                                    isVisible
                                        ? "opacity-100 rotate-0"
                                        : "opacity-0 rotate-12"
                                }`}>
                                <ResponsiveMedia
                                    src={sindhuraImage}
                                    alt="Sindhu - Web3 Expert"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    loading="eager"
                                    data-testid="img-sindhu-hero-mobile"
                                />
                            </div>

                            {/* Sparkle for Mobile */}
                            <div className="absolute -top-2 -right-2 text-yellow-400">
                                <div className="text-xl">★</div>
                            </div>
                        </div>
                    </div>

                    {/* Quote Section for Mobile */}
                    <div
                        className={`bg-black/90 backdrop-blur-sm rounded-2xl p-6 mb-8 mx-2 bg-gradient-to-br from-purple-900/30 to-black/50 transition-all duration-1000 transform ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        } shadow-[0_0_15px_rgba(168,85,247,0.3)]`}>
                        <p className="text-white text-base leading-relaxed mb-6 text-center">
                            Building the future, one block at a time - that's
                            the spirit of Web3_Sindhu.
                        </p>
                        <button
                            onClick={openRegistrationForm}
                            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-purple-100 hover:scale-105 transition-all duration-300 shadow-lg w-full"
                            data-testid="button-book-demo-hero-mobile">
                            Book a Demo
                        </button>
                    </div>

                    {/* Profile Avatars for Mobile */}
                    <div
                        className={`text-center mb-24 transition-all duration-1000 delay-500 transform ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <ResponsiveMedia
                                src={profileAvatars}
                                alt="Profile Avatars"
                                className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
                                loading="eager"
                                data-testid="img-profile-avatars-mobile"
                            />
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">
                            Sindhu turns technology into inspiration
                        </h3>
                        <a
                            href="https://www.instagram.com/web3_sindhu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 transition-colors underline text-sm cursor-pointer"
                            data-testid="button-see-story">
                            See Story
                        </a>
                    </div>

                    {/* Reviews Badge for Mobile */}
                    <div
                        className={`flex justify-center pb-16 transition-all duration-1000 delay-700 transform ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}>
                        <div className="bg-white rounded-full px-8 py-4 shadow-xl hover:shadow-purple-500/20 hover:scale-110 transition-all duration-300">
                            <div className="text-center">
                                <div className="text-black font-bold text-xl">
                                    500+
                                </div>
                                <div className="text-black text-sm">
                                    Positive Reviews
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
