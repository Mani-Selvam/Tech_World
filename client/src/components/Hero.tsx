import techaraLogo from "@/assets/techara-logo.png";
import hudGif from "@assets/download_1758039224106.gif";
import personPhoto from "@assets/Techara_1758039233159.png";
import { useState, useEffect } from "react";

export default function Hero() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate opacity based on scroll position
      const maxScroll = 400; // Adjust this value to control fade distance
      const newOpacity = Math.max(0, 1 - currentScrollY / maxScroll);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#000' }}
    >
      {/* Futuristic HUD Background Animation */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img 
          src={hudGif}
          alt="Futuristic HUD Circle Animation" 
          className="w-auto h-auto max-w-none opacity-80"
          style={{
            transform: `scale(${1 + scrollY * 0.0005})`,
            opacity: opacity * 0.8
          }}
        />
      </div>
      
      {/* Person Photo in Center */}
      <div className="absolute inset-0 z-5 flex items-center justify-center">
        <img 
          src={personPhoto}
          alt="TechAra Person" 
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(${1 - scrollY * 0.0003})`,
            opacity: opacity * 0.9
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
          transform: `translateY(${scrollY * -0.15}px)`,
          opacity: opacity * 0.7
        }}
      >
        <div className="w-2 h-2 bg-blue-300 rounded-full crypto-glow"></div>
      </div>
      <div 
        className="absolute bottom-40 left-20 animate-float" 
        style={{
          animationDelay: '-4s',
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: opacity * 0.9
        }}
      >
        <div className="w-4 h-4 bg-cyan-300 rounded-full crypto-glow"></div>
      </div>

      <div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: opacity
        }}
      >
        {/* Event Date and Location */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-accent mb-4" data-testid="text-event-date">
            Web3_Sindhu
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground" data-testid="text-event-location">
            • TechARA Academy
          </p>
        </div>

        {/* Main Logo */}
        <div className="mb-8">
          <img 
            src={techaraLogo} 
            alt="TechAra Logo" 
            className="h-20 md:h-32 mx-auto mb-6"
            data-testid="img-main-logo"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-main-title">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            15th anniversary Forum
          </span>
          <br />
          <span className="text-foreground">on Web3 and crypto</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={openRegistrationForm}
            className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-lg text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity crypto-glow"
            data-testid="button-buy-tickets-hero"
          >
            Register Now
          </button>
        </div>


      </div>
    </section>
  );
}
