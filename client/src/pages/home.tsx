import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import PhotoGallery from "@/components/PhotoGallery";
import WhyAttend from "@/components/WhyAttend";
import SpeakersVideo from "@/components/SpeakersVideo";
import BullRun from "@/components/BullRun";
import Attendees from "@/components/Attendees";
import WhoAttends from "@/components/WhoAttends";
import OfficialTrailer from "@/components/OfficialTrailer";
import ForumTopics from "@/components/ForumTopics";
import StickyBottomBanner from "@/components/StickyBottomBanner";
import Footer from "@/components/Footer";

function HomeContent() {
  const scrollToAttendees = () => {
    const attendeesSection = document.getElementById('attendees');
    if (attendeesSection) {
      attendeesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Statistics />
      <PhotoGallery />
      
      {/* Main Title Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The World's Leading Blockchain, Crypto & Web3 Forum
            </span>
            <br />
            <span className="text-foreground">hosted in Dubai, UAE</span>
          </h2>
        </div>
      </section>

      <WhyAttend />
      <SpeakersVideo />
      <BullRun />
      <WhoAttends />
      <Attendees />
      <OfficialTrailer />
      <ForumTopics />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
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
              Buy Tickets Now
            </button>
            <button 
              data-testid="button-become-sponsor"
              className="border-2 border-primary px-8 py-4 rounded-lg text-lg font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Become a Sponsor
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
