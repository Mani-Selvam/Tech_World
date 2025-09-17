import techaraLogo from "@assets/Screenshot 2025-09-15 182524 1 1_1758098717538.png";
import sindhuraImage from "@assets/Techara 1_1758098717539.png";
import profileAvatars from "@assets/Group 58_1758098717538.png";
import redCircle from "@assets/Ellipse 17_1758098717538.png";
import purpleCircle from "@assets/Ellipse 19_1758098717538.png";
import { ResponsiveMedia } from "./ResponsiveMedia";

export default function Hero() {
  const openRegistrationForm = () => {
    // Scroll to attendees section and directly show the form
    setTimeout(() => {
      const attendeesSection = document.getElementById('attendees');
      if (attendeesSection) {
        attendeesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Directly set showForm to true in the Attendees component using custom event
        const event = new CustomEvent('openRegistrationForm');
        document.dispatchEvent(event);
      }
    }, 300);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dark Gradient Background with Network Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a0b2e 30%, #4a1a3d 70%, #000000 100%)',
        }}
      />
      

      {/* TechARA Logo - Top Left */}
      <div className="absolute top-8 left-8 z-20">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <ResponsiveMedia
            src={techaraLogo}
            alt="TechARA Logo"
            className="h-10 w-10 object-contain"
            loading="eager"
            maxHeight="40px"
            data-testid="img-techara-logo-hero"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Title - Centered at Top */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight" data-testid="text-main-title">
            India's First All in One
            <br />
            Web3 Academy
          </h1>
        </div>

        {/* Main Layout - Central Circle with Side Elements */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          
          {/* Central Sindhu Circle */}
          <div className="relative z-10">
            {/* Red Gradient Background Circle */}
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full relative">
              <ResponsiveMedia
                src={redCircle}
                alt=""
                className="w-full h-full object-cover rounded-full opacity-80"
                loading="eager"
              />
              
              {/* Sindhu Image Overlay */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl">
                <ResponsiveMedia
                  src={sindhuraImage}
                  alt="Sindhu - Web3 Expert"
                  className="w-full h-full object-cover"
                  loading="eager"
                  data-testid="img-sindhu-hero"
                />
              </div>
            </div>
            
            {/* Sparkle Icons - Top Right of Circle */}
            <div className="absolute -top-4 -right-4 text-yellow-400 z-20">
              <div className="text-2xl animate-pulse">★</div>
              <div className="text-lg ml-6 mt-2 animate-pulse" style={{ animationDelay: '0.5s' }}>★</div>
            </div>
          </div>

          {/* Quote Text Box - Right Side */}
          <div className="absolute top-1/3 right-0 lg:right-8 xl:right-12 max-w-xs z-20 hidden md:block">
            <div className="bg-black/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/10">
              <p className="text-white text-sm leading-relaxed mb-4">
                Building the future, one block at a time - that's the spirit of Web3 Sindhu.
              </p>
              <button 
                onClick={openRegistrationForm}
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-sm w-full"
                data-testid="button-book-demo-hero"
              >
                Book a Demo
              </button>
            </div>
          </div>

          {/* Profile Avatars - Bottom Left */}
          <div className="absolute bottom-0 left-0 lg:left-8 xl:left-12 z-20 hidden md:block">
            <div className="flex items-center gap-3 mb-4">
              <ResponsiveMedia
                src={profileAvatars}
                alt="Profile Avatars"
                className="h-14 w-auto object-contain"
                loading="eager"
                data-testid="img-profile-avatars"
              />
            </div>
            <div className="max-w-xs">
              <h3 className="text-white font-semibold text-lg mb-2">
                Sindhu turns technology into inspiration
              </h3>
              <button 
                className="text-purple-400 hover:text-purple-300 transition-colors underline text-sm font-medium"
                data-testid="button-see-story"
              >
                See Story
              </button>
            </div>
          </div>

          {/* 500+ Reviews Badge - Bottom Right */}
          <div className="absolute bottom-0 right-0 lg:right-8 xl:right-12 z-20 hidden md:block">
            <div className="bg-white rounded-full px-6 py-4 shadow-xl">
              <div className="text-center">
                <div className="text-black font-bold text-xl">500+</div>
                <div className="text-black text-xs">Positive Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content - Below Circle */}
        <div className="md:hidden mt-12 space-y-8">
          {/* Quote for Mobile */}
          <div className="bg-black/80 backdrop-blur-sm rounded-xl p-6 mx-4">
            <p className="text-white text-base leading-relaxed mb-6 text-center">
              Building the future, one block at a time - that's the spirit of Web3 Sindhu.
            </p>
            <button 
              onClick={openRegistrationForm}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg w-full"
              data-testid="button-book-demo-hero-mobile"
            >
              Book a Demo
            </button>
          </div>

          {/* Profile Avatars for Mobile */}
          <div className="text-center px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ResponsiveMedia
                src={profileAvatars}
                alt="Profile Avatars"
                className="h-14 w-auto object-contain"
                loading="eager"
                data-testid="img-profile-avatars-mobile"
              />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Sindhu turns technology into inspiration
            </h3>
            <button 
              className="text-purple-400 hover:text-purple-300 transition-colors underline text-base font-medium"
              data-testid="button-see-story-mobile"
            >
              See Story
            </button>
          </div>

          {/* Reviews Badge for Mobile */}
          <div className="flex justify-center">
            <div className="bg-white rounded-full px-8 py-4 shadow-xl">
              <div className="text-center">
                <div className="text-black font-bold text-xl">500+</div>
                <div className="text-black text-sm">Positive Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purple Circle Accent - Background */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 z-[2]">
        <ResponsiveMedia
          src={purpleCircle}
          alt=""
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
    </section>
  );
}
