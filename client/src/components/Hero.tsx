import sindhuraImage from "@assets/Techara 1_1758098365301.png";
import profileAvatars from "@assets/Group 58_1758098365301.png";
import redCircle from "@assets/Ellipse 17_1758098365301.png";
import purpleCircle from "@assets/Ellipse 19_1758098365301.png";
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
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Dark Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a0b2e 30%, #4a1a3d 70%, #000000 100%)',
        }}
      />
      
      {/* Red Circle Background Element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 opacity-40">
        <ResponsiveMedia
          src={redCircle}
          alt=""
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
      
      {/* Purple Circle Background Element */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <ResponsiveMedia
          src={purpleCircle}
          alt=""
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Side Content */}
          <div className="text-left space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4" data-testid="text-main-title">
                India's First All in One
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                  Web3 Academy
                </span>
              </h1>
            </div>

            {/* Profile Avatars Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <ResponsiveMedia
                  src={profileAvatars}
                  alt="Profile Avatars"
                  className="h-16 w-auto object-contain"
                  loading="eager"
                  data-testid="img-profile-avatars"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">
                  Sindhu turns technology into inspiration
                </h3>
                <button 
                  className="text-purple-400 hover:text-purple-300 transition-colors underline text-base font-medium"
                  data-testid="button-see-story"
                >
                  See Story
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Sindhu Image Circle with Overlay */}
          <div className="relative flex items-center justify-center">
            {/* Main Circle Container */}
            <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px]">
              
              {/* Background Gradient Circle */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #ff4444 0%, #cc0000 50%, #000000 100%)',
                }}
              />
              
              {/* Sindhu Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden">
                <ResponsiveMedia
                  src={sindhuraImage}
                  alt="Sindhu - Web3 Expert"
                  className="w-full h-full object-cover"
                  loading="eager"
                  data-testid="img-sindhu-hero"
                />
              </div>
              
              {/* Text Overlay on Circle */}
              <div className="absolute top-8 left-8 right-8 text-center">
                <h2 className="text-white font-bold text-lg leading-tight">
                  India's First All in One<br />
                  Web3 Academy
                </h2>
              </div>
              
              {/* Quote Overlay */}
              <div className="absolute bottom-16 left-8 right-8">
                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p className="text-white text-sm leading-relaxed">
                    Building the future, one block at a time - that's the spirit of Web3 Sindhu.
                  </p>
                </div>
              </div>
              
              {/* Book a Demo Button */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <button 
                  onClick={openRegistrationForm}
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  data-testid="button-book-demo-hero"
                >
                  Book a Demo
                </button>
              </div>
              
              {/* 500+ Reviews Badge */}
              <div className="absolute -bottom-4 -right-8">
                <div className="bg-white rounded-full px-6 py-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-black font-bold text-xl">500+</div>
                    <div className="text-black text-xs">Positive Reviews</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sparkle Icons */}
            <div className="absolute top-8 right-8 text-yellow-400">
              <div className="text-3xl animate-pulse">✨</div>
            </div>
            <div className="absolute top-16 right-16 text-yellow-400">
              <div className="text-xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
            </div>
            
            {/* Geometric Decorations */}
            <div className="absolute bottom-8 left-8 w-4 h-4 bg-purple-500 rotate-45 opacity-60" />
            <div className="absolute top-1/3 -right-4 w-6 h-6 bg-orange-500 rounded-full opacity-50" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex justify-between items-center px-8 py-4">
          <div className="text-red-500 font-bold text-sm tracking-wider">
            HIGH DEMAND
          </div>
          <button 
            onClick={openRegistrationForm}
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300"
            data-testid="button-register-bottom"
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </section>
  );
}
