import { useState } from "react";
import { X } from "lucide-react";

export default function SpeakersVideo() {
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    setShowVideo(true);
  };

  return (
    <section className="py-20 bg-secondary/50" id="speakers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            LEADERS OF THE INDUSTRY INVITE
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Video Thumbnail */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary cursor-pointer" onClick={playVideo}>
            <img 
              src="https://blockchain-life.com/wp-content/uploads/2025/06/1920h872.webp" 
              alt="Blockchain industry leaders invitation video" 
              className="w-full h-full object-cover"
              data-testid="img-speakers-video-thumbnail"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                className="group"
                data-testid="button-play-speakers-video"
              >
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse-dots group-hover:scale-110 transition-transform"></div>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse-dots group-hover:scale-110 transition-transform" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse-dots group-hover:scale-110 transition-transform" style={{animationDelay: '0.4s'}}></div>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse-dots group-hover:scale-110 transition-transform" style={{animationDelay: '0.6s'}}></div>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse-dots group-hover:scale-110 transition-transform" style={{animationDelay: '0.8s'}}></div>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse-dots group-hover:scale-110 transition-transform" style={{animationDelay: '1s'}}></div>
                </div>
              </button>
            </div>
          </div>

          {/* Video Modal */}
          {showVideo && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
              <div className="relative max-w-4xl w-full">
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
                  data-testid="button-close-speakers-video"
                >
                  <X size={32} />
                </button>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/IXaQWShVT0o?autoplay=1"
                    title="Speakers Invite | Blockchain Life 2025"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
