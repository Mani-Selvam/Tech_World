import { useState } from "react";
import { X } from "lucide-react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const playTrailer = () => {
    setShowVideo(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Background Ship Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://blockchain-life.com/wp-content/themes/cpalife/assets/img/2025/top6_ship_bg.webp" 
          alt="Dubai skyline with blockchain ship" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-3 h-3 bg-primary rounded-full crypto-glow"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '-2s'}}>
        <div className="w-2 h-2 bg-accent rounded-full crypto-glow"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '-4s'}}>
        <div className="w-4 h-4 bg-primary rounded-full crypto-glow"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Event Date and Location */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-accent mb-4" data-testid="text-event-date">
            October 28-29
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground" data-testid="text-event-location">
            • UAE, DUBAI, Festival Arena
          </p>
        </div>

        {/* Main Logo */}
        <div className="mb-8">
          <img 
            src="https://blockchain-life.com/wp-content/themes/cpalife/assets/img/icons3/Logo_forum_white.svg" 
            alt="Blockchain Life Forum Logo" 
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
            className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-lg text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity crypto-glow"
            data-testid="button-buy-tickets-hero"
          >
            Buy tickets
          </button>
          <button 
            className="border-2 border-primary px-8 py-4 rounded-lg text-lg font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            data-testid="button-sponsorship"
          >
            sponsorship
          </button>
        </div>

        {/* Watch Trailer Button */}
        <div className="mb-16">
          <button 
            onClick={playTrailer}
            className="group flex items-center justify-center mx-auto text-accent hover:text-accent/80 transition-colors"
            data-testid="button-watch-trailer"
          >
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-dots"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-dots" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-dots" style={{animationDelay: '0.4s'}}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-dots" style={{animationDelay: '0.6s'}}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-dots" style={{animationDelay: '0.8s'}}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-dots" style={{animationDelay: '1s'}}></div>
              </div>
              <span className="text-xl font-semibold">WATCH TRAILER</span>
            </div>
          </button>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
                data-testid="button-close-video"
              >
                <X size={32} />
              </button>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/t166kTyExjo?autoplay=1"
                  title="The Great Crypto Journey | Blockchain Life 2024-2025"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
