import techaraLogo from "@/assets/techara-logo.png";
import sindhuraImage from "@assets/Desktop a- 4_1758097850181.png";
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

  // Sample profile avatars for the left side
  const profileAvatars = [
    { id: 1, avatar: "👩‍💼" },
    { id: 2, avatar: "👨‍💻" },
    { id: 3, avatar: "👩‍🎓" },
    { id: 4, avatar: "👨‍🔬" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a0b2e 40%, #4a1a3d 80%, #000000 100%)',
        }}
      />
      
      {/* Network Grid Pattern */}
      <div 
        className="absolute inset-0 z-[1] opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* TechARA Logo - Top Left */}
      <div className="absolute top-8 left-8 z-20">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight" data-testid="text-main-title">
              India's First All in One
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Web3 Academy
              </span>
            </h1>

            {/* Profile Avatars Section - Bottom Left */}
            <div className="mb-8 lg:mb-12">
              <div className="flex justify-center lg:justify-start items-center gap-2 mb-4">
                {profileAvatars.map((profile) => (
                  <div 
                    key={profile.id}
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-lg"
                  >
                    {profile.avatar}
                  </div>
                ))}
              </div>
              <div className="text-left max-w-xs">
                <h3 className="text-white font-semibold text-lg mb-2">
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
          </div>

          {/* Right Side - Sindhu Image and Elements */}
          <div className="relative flex items-center justify-center">
            {/* Central Circle Image of Sindhu */}
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <ResponsiveMedia
                  src={sindhuraImage}
                  alt="Sindhu - Web3 Expert"
                  className="w-full h-full object-cover"
                  loading="eager"
                  maxHeight="384px"
                  data-testid="img-sindhu-hero"
                />
              </div>
              
              {/* Floating Elements around Sindhu */}
              
              {/* Sparkle Icons - Top Right */}
              <div className="absolute -top-4 -right-4 text-yellow-400">
                <div className="text-2xl">✨</div>
                <div className="text-lg ml-4 mt-2">✨</div>
              </div>
              
              {/* Inspirational Quote - Right Side */}
              <div className="absolute top-1/2 -right-20 lg:-right-32 transform -translate-y-1/2 max-w-xs">
                <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
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
              
              {/* 500+ Reviews Badge - Bottom Right */}
              <div className="absolute -bottom-4 -right-12 lg:-right-20">
                <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                  <div className="text-center">
                    <div className="text-black font-bold text-lg">500+</div>
                    <div className="text-black text-xs">Positive Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-32 right-20 w-6 h-6 bg-pink-500 rotate-45 opacity-40" />
      <div className="absolute top-1/2 left-10 w-3 h-3 bg-blue-400 rounded-full opacity-50" />
    </section>
  );
}
