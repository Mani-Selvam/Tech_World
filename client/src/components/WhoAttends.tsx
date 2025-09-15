export default function WhoAttends() {
  const attendeeCategories = [
    {
      title: "Funds & Investors",
      description: "Get acquainted with the industry's **most promising** projects at the expo and during **Startup Pitch**. Learn about the latest projects with the biggest ROI potential in 2025-2026.",
      image: "https://blockchain-life.com/wp-content/cache/thumb/70/a52bcbdd5da8170_600x360.png",
      alt: "Cryptocurrency funds and investors at networking event",
      color: "primary"
    },
    {
      title: "Startups",
      description: "Find out how to **create and develop** a crypto startup. If you have one - present it at **Startup Pitch** to **investors & funds**.",
      image: "https://blockchain-life.com/wp-content/cache/thumb/2a/fcfbe42fe74352a_600x360.png",
      alt: "Blockchain startup founders presenting their projects",
      color: "accent"
    },
    {
      title: "Miners",
      description: "Find out **all the ways of earning** by mining in 2025-2026. Meet international mining companies, check out **the newest equipment** at the expo and get **special offers** on equipment or services.",
      image: "https://blockchain-life.com/wp-content/cache/thumb/2a/a51a7364639492a_600x360.png",
      alt: "Cryptocurrency mining equipment and operations display",
      color: "primary"
    },
    {
      title: "Traders",
      description: "Learn about the most effective **trading strategies** for 2025-2026. Meet professional traders and representatives of top exchanges from all over the world.",
      image: "https://blockchain-life.com/wp-content/cache/thumb/a7/29573e6071f0ea7_600x360.png",
      alt: "Cryptocurrency traders analyzing market data and charts",
      color: "accent"
    },
    {
      title: "Business owners",
      description: "Learn **how to earn** money by investing in cryptocurrencies and blockchain projects.",
      image: "https://blockchain-life.com/wp-content/cache/thumb/cd/81d6ff06c94eacd_600x360.png",
      alt: "Business owners discussing cryptocurrency investment strategies",
      color: "primary"
    },
    {
      title: "Blockchain developers",
      description: "Discover **recent solutions** for blockchain development. Are you an individual developer? Find **employers**. Already have a team? Find **clients**.",
      image: "https://blockchain-life.com/wp-content/cache/thumb/4a/5dbe94732bbbd4a_600x360.png",
      alt: "Blockchain developers coding and collaborating on projects",
      color: "accent"
    },
    {
      title: "Government officials",
      description: "Be prepared for the upcoming changes in world crypto regulation: get **insider information** **from the politicians** at the Forum.",
      image: "https://blockchain-life.com/wp-content/cache/thumb/e1/238a9e03b6a4fe1_600x360.png",
      alt: "Government officials discussing cryptocurrency regulation policies",
      color: "primary"
    },
    {
      title: "Newcomers",
      description: "Start your crypto journey and dive into the global crypto community. This is the **perfect first step** of a great journey.",
      image: "https://blockchain-life.com/wp-content/cache/thumb/a9/6dc89ab8d2eb3a9_600x360.png",
      alt: "Newcomers learning about cryptocurrency and blockchain basics",
      color: "accent"
    },
    {
      title: "World's crypto industry",
      description: "Meet **CEOs** of international companies and set up new partnerships. Discover **trends** **for the next bullrun** and **ways of earning** money.",
      image: "https://blockchain-life.com/wp-content/cache/thumb/f3/897aa1e68cdedf3_600x360.png",
      alt: "Global cryptocurrency industry leaders at international conference",
      color: "primary"
    }
  ];

  const formatDescription = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <section className="py-20 bg-background" id="who-attends">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Who attends</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attendeeCategories.map((category, index) => (
            <div key={index} className="gradient-border">
              <div className="gradient-border-content p-6 space-y-4">
                <img 
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-48 object-cover rounded-lg"
                  data-testid={`who-attends-image-${index}`}
                />
                <h3 
                  className={`text-xl font-bold ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}
                  data-testid={`who-attends-title-${index}`}
                >
                  {category.title}
                </h3>
                <p 
                  className="text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: formatDescription(category.description) }}
                  data-testid={`who-attends-description-${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
