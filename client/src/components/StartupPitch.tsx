export default function StartupPitch() {
  // Speaker data for the hexagonal cards
  const speakers = [
    {
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/speaker1.jpg",
      alt: "Speaker presenting blockchain technology"
    },
    {
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/speaker2.jpg", 
      alt: "Startup founder pitching to investors"
    },
    {
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/speaker3.jpg",
      alt: "Cryptocurrency expert discussing market trends"
    },
    {
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/speaker4.jpg",
      alt: "Investment fund manager presenting opportunities"
    },
    {
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/speaker5.jpg",
      alt: "Tech entrepreneur explaining blockchain solutions"
    },
    {
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/speaker6.jpg",
      alt: "Venture capitalist discussing funding"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/20 via-blue-900/40 to-background text-foreground relative overflow-hidden" id="startup-pitch">
      {/* Background overlay for conference branding effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-blue-900/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/10 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-accent font-semibold text-lg mb-2" data-testid="text-startup-pitch-date">
            OCTOBER 29, 12:00
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="heading-startup-pitch">
            STARTUP PITCH
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-startup-pitch-description">
            PRESENT YOUR PROJECT TO INTERNATIONAL CRYPTO/VENTURE FUNDS AND INVESTORS
          </p>
        </div>

        {/* Desktop: Orbital Animation Layout */}
        <div className="hidden md:block">
          <div className="relative mx-auto w-[600px] h-[600px]">
            {/* Rotating Ring Container */}
            <div className="ring absolute inset-0 flex items-center justify-center">
              {speakers.map((speaker, index) => {
                const angle = index * 60; // 360 / 6 speakers = 60 degrees each
                return (
                  <div
                    key={index}
                    className="orbit-item absolute"
                    style={{
                      '--angle': `${angle}deg`,
                      '--radius': '12rem'
                    } as React.CSSProperties}
                    data-testid={`orbit-speaker-${index}`}
                  >
                    <div className="card hex-clip w-32 h-32 bg-cover bg-center border-4 border-accent/50 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:border-accent transition-all duration-300 hover:scale-110">
                      <img
                        src={speaker.image}
                        alt={speaker.alt}
                        className="w-full h-full object-cover hex-clip"
                        data-testid={`img-speaker-orbit-${index}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Grid Layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg mx-auto">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="hex-clip w-28 h-28 sm:w-32 sm:h-32 bg-cover bg-center border-4 border-accent/50 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:border-accent transition-all duration-300 hover:scale-105 mx-auto"
                data-testid={`card-speaker-grid-${index}`}
              >
                <img
                  src={speaker.image}
                  alt={speaker.alt}
                  className="w-full h-full object-cover hex-clip"
                  data-testid={`img-speaker-grid-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}