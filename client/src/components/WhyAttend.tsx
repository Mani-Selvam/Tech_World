export default function WhyAttend() {
  const benefits = [
    {
      title: "2 days save a year of work",
      description: "The quality of connections and insights saves you a year of hard work",
      color: "primary"
    },
    {
      title: "Tips to earn more",
      description: "Find out about the strategies of earning on the hottest crypto trends of this autumn from the stage and behind the scenes",
      color: "accent"
    },
    {
      title: "Founders of crypto companies",
      description: "Meet the owners/top management of the most promising companies and coins",
      color: "primary"
    },
    {
      title: "Global crypto community",
      description: "The forum will bring together over 15,000 prominent figures from 130 countries",
      color: "accent"
    },
    {
      title: "Insider information first-hand",
      description: "Gain exclusive insights before they hit the mainstream from the leaders of the industry",
      color: "primary"
    },
    {
      title: "The largest crypto expo",
      description: "Interact with the most groundbreaking teams and explore their products at 200+ booths",
      color: "accent"
    },
    {
      title: "The World Crypto Capital 2025",
      description: "Dubai and UAE are leading crypto regulators with the best legal landscape to grow a project",
      color: "primary"
    },
    {
      title: "Full Week of side events",
      description: "The forum is to gather 100+ side events from October 24 to November 2",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background" id="why-attend">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why attend
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="gradient-border">
              <div className="gradient-border-content p-6 space-y-4">
                <h3 
                  className={`text-xl font-bold ${benefit.color === 'primary' ? 'text-primary' : 'text-accent'}`}
                  data-testid={`benefit-title-${index}`}
                >
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
