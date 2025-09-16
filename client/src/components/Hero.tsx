import techaraLogo from "@/assets/techara-logo.png";
import hudGif from "@assets/download_1758039224106.gif";
import personPhoto from "@assets/Techara_1758039233159.png";
import { useState, useEffect } from "react";
import { ResponsiveMedia } from "./ResponsiveMedia";

export default function Hero() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          
          // Calculate opacity based on scroll position (throttled)
          const maxScroll = 400;
          const newOpacity = Math.max(0, 1 - currentScrollY / maxScroll);
          setOpacity(newOpacity);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAttendees = () => {
    const attendeesSection = document.getElementById('attendees');
    if (attendeesSection) {
      attendeesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openRegistrationForm = () => {
    setShowRegistrationForm(true);
    // Scroll to attendees section to trigger the form
    setTimeout(() => {
      const attendeesSection = document.getElementById('attendees');
      if (attendeesSection) {
        attendeesSection.scrollIntoView({ behavior: 'smooth' });
        // Trigger the registration form in attendees component
        const registerButton = document.querySelector('[data-testid="button-register-countdown"]') as HTMLButtonElement;
        if (registerButton) {
          registerButton.click();
        }
      }
    }, 100);
  };


  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Modern Geometric Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Large Yellow Circle - Top Right */}
        <div 
          className="geometric-shape absolute top-20 right-32 w-64 h-64 opacity-80"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 0, 0.3), rgba(255, 255, 0, 0.1))',
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: opacity * 0.8
          }}
        ></div>
        
        {/* Medium Green Circle - Top Left */}
        <div 
          className="geometric-shape absolute top-40 left-20 w-32 h-32 opacity-70"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 0, 0.4), rgba(0, 255, 0, 0.2))',
            transform: `translateY(${scrollY * -0.05}px)`,
            opacity: opacity * 0.7
          }}
        ></div>
        
        {/* Small Yellow Circle - Bottom Left */}
        <div 
          className="geometric-shape absolute bottom-32 left-16 w-16 h-16 opacity-90"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 0, 0.8), rgba(255, 255, 0, 0.3))',
            transform: `translateY(${scrollY * 0.08}px)`,
            opacity: opacity * 0.9
          }}
        ></div>
        
        {/* Triangle Shape - Right Side */}
        <div 
          className="absolute top-1/3 right-16"
          style={{
            transform: `translateY(${scrollY * -0.03}px)`,
            opacity: opacity * 0.6
          }}
        >
          <div className="geometric-shape triangle"></div>
        </div>
        
        {/* Square Shape - Bottom Right */}
        <div 
          className="geometric-shape square absolute bottom-20 right-24 w-12 h-12 opacity-75"
          style={{
            transform: `translateY(${scrollY * 0.12}px)`,
            opacity: opacity * 0.75
          }}
        ></div>
      </div>
      
      {/* Person Photo - Right Side with Modern Overlay */}
      <div className="absolute right-8 lg:right-20 top-1/2 transform -translate-y-1/2 z-5">
        <div className="relative">
          <ResponsiveMedia
            src={personPhoto}
            alt="TechAra Person"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-full modern-glow"
            loading="eager"
            maxHeight="384px"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: opacity * 0.9
            }}
          />
          {/* Yellow overlay geometric shape on person */}
          <div 
            className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-80"
            style={{
              background: 'linear-gradient(45deg, rgba(255, 255, 0, 0.7), rgba(255, 255, 0, 0.3))',
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          ></div>
        </div>
      </div>

      {/* Main Content - Left Side */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-3/5">
          <div 
            className="text-left"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              opacity: opacity
            }}
          >
            {/* Web3_Sindhu Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mb-2" data-testid="text-event-date">
              Web3_Sindhu
            </h2>
            
            {/* TechARA Academy */}
            <p className="text-lg md:text-xl text-muted-foreground mb-6" data-testid="text-event-location">
              • TechARA Academy
            </p>

            {/* Main Title - Large and Bold */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight" data-testid="text-main-title">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                15th anniversary
              </span>
              <br />
              <span className="text-foreground">Forum on</span>
              <br />
              <span className="text-foreground">Web3 and crypto</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              TechARA Academy hosts the 15th anniversary Forum on Web3 and crypto, bringing together industry leaders and innovators.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openRegistrationForm}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 crypto-glow"
                data-testid="button-buy-tickets-hero"
              >
                Get Started
              </button>
              <button 
                onClick={scrollToAttendees}
                className="text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:text-primary transition-colors duration-300 flex items-center gap-2"
                data-testid="button-learn-more-hero"
              >
                Learn More
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
