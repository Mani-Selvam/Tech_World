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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
    >
      {/* TechARA Logo at Top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <ResponsiveMedia
          src={techaraLogo}
          alt="TechARA Logo"
          className="h-16 md:h-20 lg:h-24 object-contain"
          loading="eager"
          maxHeight="96px"
          data-testid="img-techara-logo-hero"
        />
      </div>

      {/* Modern Geometric Background Elements with proper colors */}
      <div className="absolute inset-0 z-0 hero-bg">
        {/* Large Purple Circle - Top Right */}
        <div 
          className="geometric-shape absolute top-20 right-16 lg:right-32 w-48 h-48 lg:w-64 lg:h-64 opacity-60"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(139, 92, 246, 0.1))',
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: opacity * 0.6
          }}
        ></div>
        
        {/* Medium Orange Circle - Top Left */}
        <div 
          className="geometric-shape absolute top-40 left-8 lg:left-20 w-24 h-24 lg:w-32 lg:h-32 opacity-50"
          style={{
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.4), rgba(249, 115, 22, 0.2))',
            transform: `translateY(${scrollY * -0.05}px)`,
            opacity: opacity * 0.5
          }}
        ></div>
        
        {/* Small Purple Circle - Bottom Left */}
        <div 
          className="geometric-shape absolute bottom-32 left-8 lg:left-16 w-12 h-12 lg:w-16 lg:h-16 opacity-70"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6), rgba(139, 92, 246, 0.2))',
            transform: `translateY(${scrollY * 0.08}px)`,
            opacity: opacity * 0.7
          }}
        ></div>
        
        {/* Triangle Shape - Right Side (Hidden on mobile) */}
        <div 
          className="absolute top-1/3 right-8 lg:right-16 hidden md:block"
          style={{
            transform: `translateY(${scrollY * -0.03}px)`,
            opacity: opacity * 0.4
          }}
        >
          <div className="geometric-shape triangle"></div>
        </div>
        
        {/* Square Shape - Bottom Right (Hidden on mobile) */}
        <div 
          className="geometric-shape square absolute bottom-20 right-12 lg:right-24 w-8 h-8 lg:w-12 lg:h-12 opacity-50 hidden md:block"
          style={{
            transform: `translateY(${scrollY * 0.12}px)`,
            opacity: opacity * 0.5
          }}
        ></div>
      </div>
      
      {/* Person Photo - Optimized for Mobile */}
      <div className="absolute right-4 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 z-5">
        <div className="relative">
          <ResponsiveMedia
            src={personPhoto}
            alt="TechAra Person"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-full modern-glow border-2 border-primary/20"
            loading="eager"
            maxHeight="384px"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: opacity * 0.95
            }}
          />
          {/* Purple overlay geometric shape on person */}
          <div 
            className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 rounded-full opacity-60"
            style={{
              background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.7), rgba(139, 92, 246, 0.3))',
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
