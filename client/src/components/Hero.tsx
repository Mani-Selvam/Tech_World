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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#000' }}
    >
      {/* Optimized Background Animation - Right Side Only */}
      <div className="absolute right-0 top-0 bottom-0 z-0 flex items-center justify-center lg:w-1/2 w-full">
        <ResponsiveMedia
          src={hudGif}
          alt="Futuristic HUD Circle Animation"
          className="w-auto h-auto max-w-screen-lg opacity-60"
          loading="eager"
          maxHeight="100vh"
          style={{
            transform: `scale(${1 + scrollY * 0.0003})`,
            opacity: opacity * 0.6
          }}
        />
      </div>
      
      {/* Person Photo - Right Side for Large Screens */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 z-5 hidden lg:block">
        <ResponsiveMedia
          src={personPhoto}
          alt="TechAra Person"
          className="w-64 h-64 xl:w-80 xl:h-80 object-cover rounded-full shadow-2xl"
          loading="eager"
          maxHeight="320px"
          style={{
            transform: `translateY(${scrollY * 0.2}px) scale(${1 - scrollY * 0.0002})`,
            opacity: opacity * 0.8
          }}
        />
      </div>
      
      {/* Enhanced Floating Elements */}
      <div 
        className="absolute top-20 left-10 animate-float"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: opacity * 0.8
        }}
      >
        <div className="w-3 h-3 bg-cyan-400 rounded-full crypto-glow"></div>
      </div>
      <div 
        className="absolute top-40 right-20 animate-float" 
        style={{
          animationDelay: '-2s',
          transform: `translateY(${scrollY * -0.1}px)`,
          opacity: opacity * 0.7
        }}
      >
        <div className="w-2 h-2 bg-blue-300 rounded-full crypto-glow"></div>
      </div>
      <div 
        className="absolute bottom-40 left-20 animate-float" 
        style={{
          animationDelay: '-4s',
          transform: `translateY(${scrollY * 0.15}px)`,
          opacity: opacity * 0.9
        }}
      >
        <div className="w-4 h-4 bg-cyan-300 rounded-full crypto-glow"></div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center">
          {/* Left Content - Logo and Text */}
          <div 
            className="px-4 sm:px-6 lg:px-12 xl:px-16 text-center lg:text-left"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: opacity
            }}
          >
            {/* Web3_Sindhu Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-4" data-testid="text-event-date">
              Web3_Sindhu
            </h2>
            
            {/* TechARA Academy */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8" data-testid="text-event-location">
              • TechARA Academy
            </p>

            {/* TechARA Logo */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <ResponsiveMedia
                src={techaraLogo}
                alt="TechARA Logo"
                className="h-16 md:h-24 lg:h-32 object-contain"
                loading="eager"
                maxHeight="128px"
                data-testid="img-main-logo"
              />
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight" data-testid="text-main-title">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                15th anniversary Forum
              </span>
              <br />
              <span className="text-foreground">on Web3 and crypto</span>
            </h1>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={openRegistrationForm}
                className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-lg text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity crypto-glow"
                data-testid="button-buy-tickets-hero"
              >
                Register Now
              </button>
            </div>
          </div>

          {/* Right Content - Visual Space for Large Screens */}
          <div className="hidden lg:block relative">
            {/* Person Photo for Mobile - Center */}
            <div className="lg:hidden flex justify-center mt-12">
              <ResponsiveMedia
                src={personPhoto}
                alt="TechAra Person"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl"
                loading="eager"
                maxHeight="256px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
