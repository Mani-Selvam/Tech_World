export default function StartupPitch() {
  // Speaker data for the hexagonal cards with AI-generated images
  const speakers = [
    {
      image: "/attached_assets/generated_images/Startup_founder_presenting_confidently_0655559c.png",
      alt: "Startup founder presenting confidently at tech conference"
    },
    {
      image: "/attached_assets/generated_images/Female_tech_entrepreneur_speaking_5c26dd22.png", 
      alt: "Female tech entrepreneur speaking at blockchain conference"
    },
    {
      image: "/attached_assets/generated_images/Cryptocurrency_expert_presenting_data_7ad804c8.png",
      alt: "Cryptocurrency expert presenting market data and trends"
    },
    {
      image: "/attached_assets/generated_images/Young_startup_leader_pitching_94675300.png",
      alt: "Young startup leader pitching innovative ideas to investors"
    },
    {
      image: "/attached_assets/generated_images/Senior_executive_discussing_blockchain_3d9ca94d.png",
      alt: "Senior executive discussing blockchain technology solutions"
    },
    {
      image: "/attached_assets/generated_images/Venture_capitalist_at_forum_59f9b7a2.png",
      alt: "International venture capitalist speaking at crypto forum"
    }
  ];

  return (
    <section className="py-20 conference-gradient text-foreground relative overflow-hidden" id="startup-pitch">
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
            <div className="orbit-ring absolute inset-0 flex items-center justify-center">
              {speakers.map((speaker, index) => {
                const angle = index * 60; // 360 / 6 speakers = 60 degrees each
                return (
                  <div
                    key={index}
                    className="orbit-item absolute group"
                    style={{
                      '--angle': `${angle}deg`,
                      '--radius': '12rem'
                    } as React.CSSProperties}
                    data-testid={`orbit-speaker-${index}`}
                  >
                    <div className="card hex-clip w-32 h-32 bg-cover bg-center border-3 border-accent/60 shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-accent/60 hover:border-accent hover:border-4 transition-all duration-500 hover:scale-125 hover:rotate-12 group-hover:brightness-110">
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
                className="hex-clip w-28 h-28 sm:w-32 sm:h-32 bg-cover bg-center border-3 border-accent/60 shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-accent/60 hover:border-accent hover:border-4 transition-all duration-500 hover:scale-110 hover:rotate-6 hover:brightness-110 mx-auto"
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