import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import SectionBubbles from "@/components/SectionBubbles";
import { ScrollReveal } from "@/components/ScrollReveal";
import StickyBottomBanner from "@/components/StickyBottomBanner";
import Footer from "@/components/Footer";

const PhotoGallery = lazy(() => import("@/components/PhotoGallery"));
const DesignLancerAbout = lazy(() => import("@/components/DesignLancerAbout"));
const Skills = lazy(() => import("@/components/Skills"));
const Whatwedo = lazy(() => import("@/components/Whatwedo"));
const Visitors = lazy(() => import("@/components/Visitors"));
const Features = lazy(() => import("@/components/Features"));
const Attendees = lazy(() => import("@/components/Attendees"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const CountdownTimer = lazy(() => import("@/components/CountdownTimer"));
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

            {/* Statistics Section - No spacing - Eagerly loaded for above-the-fold */}
            <ScrollReveal variant="fade-up" duration={800} delay={100}>
                <div className="relative" id="statistics">
                    <SectionBubbles count={4} />
                    <Statistics />
                </div>
            </ScrollReveal>

            {/* PhotoGallery Section - Lazy loaded with preserved anchor */}
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="gallery">
                    <SectionBubbles count={6} />
                    <Suspense fallback={<div className="h-64" />}>
                        <PhotoGallery />
                    </Suspense>
                </div>
            </ScrollReveal>

            {/* About Section - Lazy loaded with preserved anchor */}
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="about">
                    <SectionBubbles count={4} />
                    <Suspense fallback={<div className="h-96" />}>
                        <DesignLancerAbout />
                    </Suspense>
                </div>
            </ScrollReveal>

            {/* Skills Section - Lazy loaded with preserved anchor */}
            <ScrollReveal variant="slide-left" duration={900} delay={150}>
                <div className="relative" id="benefit">
                    <SectionBubbles count={6} />
                    <Suspense fallback={<div className="h-96" />}>
                        <Skills />
                    </Suspense>
                </div>
            </ScrollReveal>

            {/* Services Section - Lazy loaded with preserved anchor */}
            <ScrollReveal variant="slide-right" duration={800} delay={100}>
                <div className="relative" id="courses">
                    <SectionBubbles count={5} />
                    <Suspense fallback={<div className="h-96" />}>
                        <Whatwedo />
                    </Suspense>
                </div>
            </ScrollReveal>

            {/* Visitors Section - Lazy loaded with preserved anchor */}
            <ScrollReveal variant="slide-right" duration={800} delay={100}>
                <div className="relative" id="visitors">
                    <SectionBubbles count={5} />
                    <Suspense fallback={<div className="h-96" />}>
                        <Visitors />
                    </Suspense>
                </div>
            </ScrollReveal>

            {/* Features Section - Lazy loaded with preserved anchor */}
            <ScrollReveal variant="slide-left" duration={800} delay={100}>
                <div className="relative" id="features">
                    <SectionBubbles count={4} />
                    <Suspense fallback={<div className="h-80" />}>
                        <Features />
                    </Suspense>
                </div>
            </ScrollReveal>

            {/* Attendees Section - Lazy loaded with preserved anchor */}
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="attendees">
                    <SectionBubbles count={4} />
                    <Suspense fallback={<div className="h-96" />}>
                        <Attendees />
                    </Suspense>
                </div>
            </ScrollReveal>

            {/* Testimonials Section - Lazy loaded with preserved anchor */}
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="testimonials">
                    <SectionBubbles count={4} />
                    <Suspense fallback={<div className="h-96" />}>
                        <Testimonials />
                    </Suspense>
                </div>
            </ScrollReveal>
            
            {/* Countdown Timer - Lazy loaded with preserved anchor */}
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="timer">
                    <SectionBubbles count={4} />
                    <Suspense fallback={<div className="h-96" />}>
                        <CountdownTimer onRegisterClick={scrollToAttendees} />
                    </Suspense>
                </div>
            </ScrollReveal>

            {/* Footer - Eagerly loaded */}
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
