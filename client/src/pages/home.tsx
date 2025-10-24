import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import PhotoGallery from "@/components/PhotoGallery";
import Features from "@/components/WhyAttend";
import BullRun from "@/components/BullRun";
import Attendees from "@/components/Attendees";
import ExploreCourses from "@/components/WhoAttends";
import OfficialTrailer from "@/components/OfficialTrailer";
import ForumTopics from "@/components/ForumTopics";
import StartupPitch from "@/components/StartupPitch";
import StickyBottomBanner from "@/components/StickyBottomBanner";
import Footer from "@/components/Footer";
import SectionBubbles from "@/components/SectionBubbles";
import { ScrollReveal } from "@/components/ScrollReveal";
import DesignLancerAbout from "@/components/DesignLancerAbout";
import Visitors from "@/components/Visitors";
import CountdownTimer from "@/components/CountdownTimer";

function HomeContent() {
    const scrollToAttendees = () => {
        const attendeesSection = document.getElementById("attendees");
        if (attendeesSection) {
            attendeesSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navigation />

            {/* Hero Section with Bubbles */}
            <div className="relative" id="hero">
                <SectionBubbles count={5} />
                <Hero />
            </div>

            {/* Academy Section - No padding */}
            <ScrollReveal variant="scale-up" duration={1000} delay={100}>
                <section className="relative bg-secondary/30" id="academy">
                    <SectionBubbles count={5} />
                    <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 p-4">
                        <h2 className="text-2xl md:text-5xl lg:text-4xl font-bold leading-tight">
                            <span
                                className="inline-block transition-transform duration-700 delay-300 transform hover:scale-105 p-4"
                                style={{
                                    animation:
                                        "pulseText 2s ease-in-out infinite",
                                }}>
                                The World's Leading All-in-One Web3 Academy
                            </span>
                            <br />
                            <span
                                className="inline-block text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-700 delay-500 transform hover:scale-105"
                                style={{
                                    animation: "gradientMove 4s ease infinite",
                                    backgroundSize: "200% 200%",
                                }}>
                                TechARA
                            </span>
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
                        </h2>
                    </div>
                </section>
            </ScrollReveal>

            {/* Statistics Section - No spacing */}
            <ScrollReveal variant="fade-up" duration={800} delay={100}>
                <div className="relative" id="statistics">
                    <SectionBubbles count={4} />
                    <Statistics />
                </div>
            </ScrollReveal>

            {/* PhotoGallery Section - No spacing */}
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="gallery">
                    <SectionBubbles count={6} />
                    <PhotoGallery />
                </div>
            </ScrollReveal>

            {/* About Section - No spacing */}
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="about">
                    <SectionBubbles count={4} />
                    <DesignLancerAbout />
                </div>
            </ScrollReveal>
            {/* Skills Section - No spacing */}
            <ScrollReveal variant="slide-left" duration={900} delay={150}>
                <div className="relative" id="benefit">
                    <SectionBubbles count={6} />
                    <ForumTopics />
                </div>
            </ScrollReveal>

            {/* Passinate Section - No spacing */}

            <ScrollReveal variant="slide-right" duration={800} delay={100}>
                <div className="relative" id="courses">
                    <SectionBubbles count={5} />
                    <ExploreCourses />
                </div>
            </ScrollReveal>
            {/* Features Section - No spacing */}
            <ScrollReveal variant="slide-left" duration={800} delay={100}>
                <div className="relative" id="features">
                    <SectionBubbles count={4} />
                    <Features />
                </div>
            </ScrollReveal>

            {/* Attendees Section - No spacing */}
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="attendees">
                    <SectionBubbles count={4} />
                    <Attendees />
                </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="timer">
                    <SectionBubbles count={4} />
                    <CountdownTimer />
                </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" duration={800} delay={100}>
                <div className="relative" id="visitors">
                    <SectionBubbles count={5} />
                    <Visitors />
                </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-in" duration={600} delay={100}>
                <Footer />
            </ScrollReveal>
            <StickyBottomBanner />
        </div>
    );
}

export default function Home() {
    return <HomeContent />;
}
