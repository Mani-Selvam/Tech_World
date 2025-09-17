import sindhuraImage from "@assets/Techara 1_1758098717539.png";
import profileAvatars from "@assets/Group 58_1758098717538.png";
import redCircle from "@assets/Ellipse 17_1758099227458.png";
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

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full">
        
        {/* Main Title - Centered */}
        <div className="text-center pt-8 pb-12 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-5xl mx-auto" data-testid="text-main-title">
            India's First All in One
            <br />
            Web3 Academy
          </h1>
        </div>

        {/* Main Layout - Desktop */}
        <div className="hidden md:block relative">
          <div className="flex items-center justify-center min-h-[500px] relative">
            
            {/* Central Sindhu Circle */}
            <div className="relative">
              {/* Red Circle Background */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full relative mx-auto">
                <ResponsiveMedia
                  src={redCircle}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                {/* Sindhu Image - Positioned in center of red circle */}
                <div className="absolute top-16 left-16 right-16 bottom-16 lg:top-20 lg:left-20 lg:right-20 lg:bottom-20 rounded-full overflow-hidden">
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
              <div className="absolute -top-4 -right-4 text-yellow-400">
                <div className="text-2xl mb-2">★</div>
                <div className="text-lg ml-4">★</div>
              </div>
            </div>

            {/* Quote Text Box - Right Side */}
            <div className="absolute top-1/3 right-4 lg:right-8 xl:right-16 w-80 max-w-sm">
              <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10">
                <p className="text-white text-sm leading-relaxed mb-4">
                  Building the future, one block at a time - that's the spirit of Web3 Sindhu.
                </p>
                <button 
                  onClick={openRegistrationForm}
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg w-full"
                  data-testid="button-book-demo-hero"
                >
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Profile Avatars - Bottom Left */}
            <div className="absolute bottom-0 left-4 lg:left-8 xl:left-16">
              <div className="flex items-center gap-3 mb-4">
                <ResponsiveMedia
                  src={profileAvatars}
                  alt="Profile Avatars"
                  className="h-12 w-auto object-contain"
                  loading="eager"
                  data-testid="img-profile-avatars"
                />
              </div>
              <div className="max-w-xs">
                <h3 className="text-white font-semibold text-base mb-2">
                  Sindhu turns technology into inspiration
                </h3>
                <button 
                  className="text-purple-400 hover:text-purple-300 transition-colors underline text-sm"
                  data-testid="button-see-story"
                >
                  See Story
                </button>
              </div>
            </div>

            {/* 500+ Reviews Badge - Bottom Right */}
            <div className="absolute bottom-0 right-4 lg:right-8 xl:right-16">
              <div className="bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-center">
                  <div className="text-black font-bold text-lg">500+</div>
                  <div className="text-black text-xs">Positive Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden px-4">
          {/* Central Sindhu Circle for Mobile */}
          <div className="flex justify-center mb-8">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <ResponsiveMedia
                src={redCircle}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
              />
              
              {/* Sindhu Image for Mobile */}
              <div className="absolute top-12 left-12 right-12 bottom-12 rounded-full overflow-hidden">
                <ResponsiveMedia
                  src={sindhuraImage}
                  alt="Sindhu - Web3 Expert"
                  className="w-full h-full object-cover"
                  loading="eager"
                  data-testid="img-sindhu-hero-mobile"
                />
              </div>
              
              {/* Sparkle for Mobile */}
              <div className="absolute -top-2 -right-2 text-yellow-400">
                <div className="text-xl">★</div>
              </div>
            </div>
          </div>

          {/* Quote Section for Mobile */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 mb-8 mx-2">
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
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ResponsiveMedia
                src={profileAvatars}
                alt="Profile Avatars"
                className="h-12 w-auto object-contain"
                loading="eager"
                data-testid="img-profile-avatars-mobile"
              />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Sindhu turns technology into inspiration
            </h3>
            <button 
              className="text-purple-400 hover:text-purple-300 transition-colors underline text-base"
              data-testid="button-see-story-mobile"
            >
              See Story
            </button>
          </div>

          {/* Reviews Badge for Mobile */}
          <div className="flex justify-center pb-8">
            <div className="bg-white rounded-full px-8 py-4 shadow-xl">
              <div className="text-center">
                <div className="text-black font-bold text-xl">500+</div>
                <div className="text-black text-sm">Positive Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
