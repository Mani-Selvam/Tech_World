// Import the AI-generated speaker images
import speaker1 from '@assets/generated_images/Startup_founder_presenting_confidently_0655559c.png';
import speaker2 from '@assets/generated_images/Female_tech_entrepreneur_speaking_5c26dd22.png';
import speaker3 from '@assets/generated_images/Cryptocurrency_expert_presenting_data_7ad804c8.png';
import speaker4 from '@assets/generated_images/Young_startup_leader_pitching_94675300.png';
import speaker5 from '@assets/generated_images/Senior_executive_discussing_blockchain_3d9ca94d.png';
import speaker6 from '@assets/generated_images/Venture_capitalist_at_forum_59f9b7a2.png';

export default function StartupPitch() {
  // Speaker data for the hexagonal cards with AI-generated images
  const speakers = [
    {
      image: speaker1,
      alt: "Startup founder presenting confidently at tech conference"
    },
    {
      image: speaker2, 
      alt: "Female tech entrepreneur speaking at blockchain conference"
    },
    {
      image: speaker3,
      alt: "Cryptocurrency expert presenting market data and trends"
    },
    {
      image: speaker4,
      alt: "Young startup leader pitching innovative ideas to investors"
    },
    {
      image: speaker5,
      alt: "Senior executive discussing blockchain technology solutions"
    },
    {
      image: speaker6,
      alt: "International venture capitalist speaking at crypto forum"
    }
  ];

  const topSpeakers = speakers.slice(0, 3);
  const bottomSpeakers = speakers.slice(3, 6);

  return (
    <section className="py-20 bg-[#0A1733] text-white relative" id="startup-pitch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: Orbital Container */}
        <div className="hidden md:block">
          <div className="relative mx-auto w-[600px] h-[600px] flex items-center justify-center">
          
          {/* Center Text */}
          <div className="absolute text-center z-10">
            <h3 className="text-[#F59E0B] font-semibold text-lg mb-2" data-testid="text-startup-pitch-date">
              OCTOBER 29, 12:00
            </h3>
            <h2 className="text-4xl md:text-6xl font-bold text-white" data-testid="heading-startup-pitch">
              STARTUP PITCH
            </h2>
          </div>

          {/* Orbiting Images */}
          <div className="orbit-container absolute inset-0">
            {speakers.map((speaker, index) => {
              const angle = index * 60; // 360 / 6 speakers = 60 degrees each
              return (
                <div
                  key={index}
                  className="orbit-item absolute"
                  style={{
                    '--angle': `${angle}deg`,
                    '--radius': '250px'
                  } as React.CSSProperties}
                  data-testid={`orbit-speaker-${index}`}
                >
                  <div className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-4 border-[#F59E0B] shadow-lg overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.alt}
                      className="w-full h-full object-cover"
                      data-testid={`img-speaker-orbit-${index}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </div>

        {/* Mobile: Simple Grid */}
        <div className="md:hidden">
          {/* Center Text */}
          <div className="text-center mb-8">
            <h3 className="text-[#F59E0B] font-semibold text-lg mb-2" data-testid="text-startup-pitch-date-mobile">
              OCTOBER 29, 12:00
            </h3>
            <h2 className="text-3xl font-bold text-white" data-testid="heading-startup-pitch-mobile">
              STARTUP PITCH
            </h2>
          </div>
          
          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="rounded-full w-20 h-20 border-4 border-[#F59E0B] shadow-lg overflow-hidden mx-auto"
                data-testid={`img-speaker-mobile-${index}`}
              >
                <img
                  src={speaker.image}
                  alt={speaker.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}