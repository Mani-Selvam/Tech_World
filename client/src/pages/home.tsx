import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import PhotoGallery from "@/components/PhotoGallery";
import Features from "@/components/Features";
import Attendees from "@/components/Attendees";
import Skills from "@/components/Skills";
import StickyBottomBanner from "@/components/StickyBottomBanner";
import Footer from "@/components/Footer";
import SectionBubbles from "@/components/SectionBubbles";
import { ScrollReveal } from "@/components/ScrollReveal";
import DesignLancerAbout from "@/components/DesignLancerAbout";
import Visitors from "@/components/Visitors";
import CountdownTimer from "@/components/CountdownTimer";
import Whatwedo from "@/components/Whatwedo";
import Testimonials from "@/components/Testimonials";
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
                    <Skills />
                </div>
            </ScrollReveal>

            {/* Passinate Section - No spacing */}
            <ScrollReveal variant="slide-right" duration={800} delay={100}>
                <div className="relative" id="courses">
                    <SectionBubbles count={5} />
                    <Whatwedo />
                </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" duration={800} delay={100}>
                <div className="relative" id="visitors">
                    <SectionBubbles count={5} />
                    <Visitors />
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
            {/* Attendees Section - No spacing */}
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="attendees">
                    <SectionBubbles count={4} />
                    <Testimonials />
                </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="timer">
                    <SectionBubbles count={4} />
                    <CountdownTimer />
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
