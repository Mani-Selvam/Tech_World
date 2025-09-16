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

function HomeContent() {
  const scrollToAttendees = () => {
    const attendeesSection = document.getElementById('attendees');
    if (attendeesSection) {
      attendeesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section with Bubbles */}
      <div className="relative">
        <SectionBubbles count={5} />
        <Hero />
      </div>
      
      {/* Statistics Section with Bubbles */}
      <div className="relative">
        <SectionBubbles count={4} />
        <Statistics />
      </div>
      
      {/* PhotoGallery Section with Bubbles */}
      <div className="relative">
        <SectionBubbles count={6} />
        <PhotoGallery />
      </div>
      
      {/* Main Title Section with Bubbles */}
      <section className="relative py-16 bg-secondary/30">
        <SectionBubbles count={5} />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The World's Leading Web3 Academy
            </span>
            <br />
            <span className="text-foreground">TechARA Academy</span>
          </h2>
        </div>
      </section>

      {/* Features Section with Bubbles */}
      <div className="relative">
        <SectionBubbles count={4} />
        <Features />
      </div>
      
      {/* BullRun Section with Bubbles */}
      <div className="relative">
        <SectionBubbles count={6} />
        <BullRun />
      </div>
      
      {/* Explore Our Best Courses Section with Bubbles */}
      <div className="relative">
        <SectionBubbles count={5} />
        <ExploreCourses />
      </div>
      
      {/* Attendees Section with Bubbles */}
      <div className="relative">
        <SectionBubbles count={4} />
        <Attendees />
      </div>
      
      {/* OfficialTrailer Section with Bubbles */}
      <div className="relative">
        <SectionBubbles count={5} />
        <OfficialTrailer />
      </div>
      
      {/* ForumTopics Section with Bubbles */}
      <div className="relative">
        <SectionBubbles count={6} />
        <ForumTopics />
      </div>
      
      {/* StartupPitch Section with Bubbles */}
      <div className="relative">
        <SectionBubbles count={4} />
        <StartupPitch />
      </div>
      
      {/* Call to Action Section with Bubbles */}
      <section className="relative py-20 bg-background">
        <SectionBubbles count={5} />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-foreground">Ready to join the </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">15th anniversary?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Don't miss out on the world's leading blockchain and crypto forum. Secure your spot today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              data-testid="button-buy-tickets-cta"
              onClick={scrollToAttendees}
              className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-lg text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity crypto-glow"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyBottomBanner />
    </div>
  );
}

export default function Home() {
  return <HomeContent />;
}
