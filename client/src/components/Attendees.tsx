export default function Attendees() {
  const demographics = [
    { percentage: "67%", category: "Investors/Funds", color: "primary" },
    { percentage: "34%", category: "Crypto traders", color: "accent" },
    { percentage: "31%", category: "Entrepreneurs", color: "primary" },
    { percentage: "30%", category: "Developers", color: "accent" },
    { percentage: "29%", category: "Miners", color: "primary" },
    { percentage: "26%", category: "Service providers", color: "accent" },
    { percentage: "24%", category: "Startups", color: "primary" },
    { percentage: "4%", category: "Others", color: "accent" }
  ];

  const regions = [
    { name: "NORTH AMERICA", percentage: "18%", color: "primary" },
    { name: "EUROPE", percentage: "37%", color: "accent" },
    { name: "ASIA", percentage: "37%", color: "primary" },
    { name: "AFRICA", percentage: "3%", color: "accent" },
    { name: "South America", percentage: "3%", color: "primary" },
    { name: "Australia", percentage: "2%", color: "accent" }
  ];

  const countries = [
    { name: "UAE", flag: "https://blockchain-life.com/wp-content/uploads/2025/03/f1.png" },
    { name: "Russia", flag: "https://blockchain-life.com/wp-content/uploads/2025/03/f2.png" },
    { name: "USA", flag: "https://blockchain-life.com/wp-content/uploads/2025/03/f3.png" },
    { name: "UK", flag: "https://blockchain-life.com/wp-content/uploads/2025/03/f5.png" },
    { name: "Germany", flag: "https://blockchain-life.com/wp-content/uploads/2025/03/f4.png" },
    { name: "Spain", flag: "https://blockchain-life.com/wp-content/uploads/2025/03/flag_of_spain_svg_1.webp" },
    { name: "China", flag: "https://blockchain-life.com/wp-content/uploads/2025/03/f7.png" },
    { name: "Ukraine", flag: "https://blockchain-life.com/wp-content/uploads/2025/03/flag_of_ukraine_svg_1.webp" },
    { name: "Kazakhstan", flag: "https://blockchain-life.com/wp-content/uploads/2025/06/Kazahstan.png" },
    { name: "Canada", flag: "https://blockchain-life.com/wp-content/uploads/2025/03/f8.png" }
  ];

  return (
    <section className="py-20 bg-secondary/30" id="attendees">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Attendees</h2>
        </div>

        {/* Attendee Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {demographics.map((demo, index) => (
            <div key={index} className="text-center space-y-2">
              <h3 
                className={`text-3xl font-bold ${demo.color === 'primary' ? 'text-primary' : 'text-accent'}`}
                data-testid={`attendee-percentage-${index}`}
              >
                {demo.percentage}
              </h3>
              <p className="text-muted-foreground" data-testid={`attendee-category-${index}`}>
                {demo.category}
              </p>
            </div>
          ))}
        </div>

        {/* World Map and Regional Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {regions.map((region, index) => (
              <div key={index} className="flex justify-between items-center">
                <span 
                  className="text-foreground font-medium"
                  data-testid={`region-name-${index}`}
                >
                  {region.name}
                </span>
                <span 
                  className={`font-bold ${region.color === 'primary' ? 'text-primary' : 'text-accent'}`}
                  data-testid={`region-percentage-${index}`}
                >
                  {region.percentage}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <img 
              src="https://blockchain-life.com/wp-content/themes/cpalife/assets/img/asia1/attendees_map.svg" 
              alt="World map showing attendees distribution by region" 
              className="w-full max-w-lg mx-auto"
              data-testid="img-world-map"
            />
          </div>
        </div>

        {/* Top 10 Countries */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Top 10 countries-attendees:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="flex items-center space-x-3">
                <img 
                  src={country.flag} 
                  alt={`${country.name} flag`} 
                  className="w-8 h-6 object-cover rounded"
                  data-testid={`country-flag-${index}`}
                />
                <span 
                  className="text-foreground"
                  data-testid={`country-name-${index}`}
                >
                  {country.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            *Data is based on the customers survey while tickets purchasing. Attendees can choose several options.
          </p>
        </div>
      </div>
    </section>
  );
}
