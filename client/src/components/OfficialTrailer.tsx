export default function OfficialTrailer() {
  return (
    <section className="py-20 bg-secondary/50 relative overflow-hidden" id="trailer">
      {/* Background Graphics */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://blockchain-life.com/wp-content/themes/cpalife/assets/img/asia24/trailer_bg1.webp" 
          alt="Blockchain Life official trailer background with crypto graphics" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            watch official trailer
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/t166kTyExjo"
              title="The Great Crypto Journey | Blockchain Life 2024-2025"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
              data-testid="iframe-official-trailer"
            />
          </div>

          {/* Quote */}
          <div className="text-center mt-8">
            <blockquote 
              className="text-lg md:text-xl text-muted-foreground italic"
              data-testid="text-quote"
            >
              "Wow!! Never saw a Web3 event with a video trailer like that, definitely a unique twist..."
            </blockquote>
            <cite 
              className="text-sm text-accent mt-2 block"
              data-testid="text-quote-author"
            >
              (с) Scott Page, ex-Pink Floyd
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
