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

            {/* Statistics Section with Bubbles */}
            <ScrollReveal variant="fade-up" duration={800} delay={100}>
                <div className="relative" id="statistics">
                    <SectionBubbles count={4} />
                    <Statistics />
                </div>
            </ScrollReveal>

            {/* PhotoGallery Section with Bubbles */}
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="gallery">
                    <SectionBubbles count={6} />
                    <PhotoGallery />
                </div>
            </ScrollReveal>

            {/* Main Title Section with Bubbles */}
            <ScrollReveal variant="scale-up" duration={1000} delay={100}>
                <section
                    className="relative py-16 bg-secondary/30"
                    id="academy">
                    <SectionBubbles count={5} />
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                The World's Leading All-in-One
                            </span>
                            <br />
                            <span className="text-foreground text-4xl">
                                Web3 Academy TechARA
                            </span>
                        </h2>
                    </div>
                </section>
            </ScrollReveal>

            {/* Features Section with Bubbles */}
            <ScrollReveal variant="slide-left" duration={800} delay={100}>
                <div className="relative" id="features">
                    <SectionBubbles count={4} />
                    <Features />
                </div>
            </ScrollReveal>
            {/* Attendees Section with Bubbles */}
            <ScrollReveal variant="fade-up" duration={800} delay={200}>
                <div className="relative" id="attendees">
                    <SectionBubbles count={4} />
                    <Attendees />
                </div>
            </ScrollReveal>

            {/* BullRun Section with Bubbles */}
            <ScrollReveal variant="fade-up" duration={900} delay={150}>
                <div className="relative" id="bullrun">
                    <SectionBubbles count={6} />
                    <BullRun />
                </div>
            </ScrollReveal>

            {/* Explore Our Best Courses Section with Bubbles */}
            <ScrollReveal variant="slide-right" duration={800} delay={100}>
                <div className="relative" id="courses">
                    <SectionBubbles count={5} />
                    <ExploreCourses />
                </div>
            </ScrollReveal>

            {/* OfficialTrailer Section with Bubbles */}
            {/* <ScrollReveal variant="scale-up" duration={1000} delay={100}>
        <div className="relative" id="trailer">
          <SectionBubbles count={5} />
          <OfficialTrailer />
        </div>
      </ScrollReveal> */}

            {/* Benefit Section with Bubbles */}
            <ScrollReveal variant="slide-left" duration={900} delay={150}>
                <div className="relative" id="benefit">
                    <SectionBubbles count={6} />
                    <ForumTopics />
                </div>
            </ScrollReveal>

            {/* Testimonial Section with Bubbles */}
            <ScrollReveal variant="fade-up" duration={800} delay={100}>
                <div className="relative" id="testimonial">
                    <SectionBubbles count={4} />
                    <StartupPitch />
                </div>
            </ScrollReveal>

            {/* Call to Action Section with Bubbles */}
            {/* <ScrollReveal variant="scale-up" duration={1000} delay={200}>
                <section className="relative py-20 bg-background">
                    <SectionBubbles count={5} />
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            <span className="text-foreground">
                                Ready to join the{" "}
                            </span>
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Web3 Academy
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12">
                            Don't miss out on the world's leading blockchain and
                            crypto forum. Secure your spot today!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button
                                data-testid="button-buy-tickets-cta"
                                onClick={scrollToAttendees}
                                className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-lg text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity crypto-glow">
                                Register Now
                            </button>
                        </div>
                    </div>
                </section>
            </ScrollReveal> */}

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
