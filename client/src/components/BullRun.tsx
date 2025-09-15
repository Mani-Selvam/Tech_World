export default function BullRun() {
  const strategies = [
    {
      number: 1,
      text: "Explore buying/selling strategies. When to buy and sell assets during a Bull Run?",
      color: "accent"
    },
    {
      number: 2,
      text: "Find out which coins are expected to show maximum growth in the near future, according to leading experts",
      color: "primary"
    },
    {
      number: 3,
      text: "Get advice from global industry leaders who earned huge profits on previous Bull Runs",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="bullrun">
      {/* Background Graphics */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://blockchain-life.com/wp-content/themes/cpalife/assets/img/asia24/bullrun_coins_d.webp" 
          alt="Cryptocurrency coins floating background" 
          className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" data-testid="text-bullrun-title">
              <span className="text-foreground">The peak of </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Bull Run</span>
              <span className="text-foreground"> is yet to come. Join to earn the maximum</span>
            </h2>

            <div className="space-y-6">
              {strategies.map((strategy) => (
                <div key={strategy.number} className="flex items-start space-x-4">
                  <div 
                    className={`flex-shrink-0 w-8 h-8 ${strategy.color === 'accent' ? 'bg-accent text-background' : 'bg-primary text-primary-foreground'} rounded-full flex items-center justify-center font-bold`}
                    data-testid={`strategy-number-${strategy.number}`}
                  >
                    {strategy.number}
                  </div>
                  <p 
                    className="text-muted-foreground"
                    data-testid={`strategy-text-${strategy.number}`}
                  >
                    {strategy.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:text-center">
            <img 
              src="https://blockchain-life.com/wp-content/themes/cpalife/assets/img/asia24/bullrun_bg_m2.webp" 
              alt="Bull Run crypto market visualization" 
              className="w-full max-w-md mx-auto"
              data-testid="img-bullrun-visualization"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
