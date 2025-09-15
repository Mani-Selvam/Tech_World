import { 
  TrendingUp, 
  BarChart3, 
  Users, 
  Code, 
  Pickaxe, 
  Settings, 
  Rocket, 
  MoreHorizontal 
} from "lucide-react";

export default function Attendees() {
  const demographics = [
    { 
      percentage: "67%", 
      category: "Investors/Funds", 
      color: "primary",
      icon: TrendingUp,
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/investors.jpg"
    },
    { 
      percentage: "34%", 
      category: "Crypto traders", 
      color: "accent",
      icon: BarChart3,
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/traders.jpg"
    },
    { 
      percentage: "31%", 
      category: "Entrepreneurs", 
      color: "primary",
      icon: Users,
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/entrepreneurs.jpg"
    },
    { 
      percentage: "30%", 
      category: "Developers", 
      color: "accent",
      icon: Code,
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/developers.jpg"
    },
    { 
      percentage: "29%", 
      category: "Miners", 
      color: "primary",
      icon: Pickaxe,
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/miners.jpg"
    },
    { 
      percentage: "26%", 
      category: "Service providers", 
      color: "accent",
      icon: Settings,
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/services.jpg"
    },
    { 
      percentage: "24%", 
      category: "Startups", 
      color: "primary",
      icon: Rocket,
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/startups.jpg"
    },
    { 
      percentage: "4%", 
      category: "Others", 
      color: "accent",
      icon: MoreHorizontal,
      image: "https://blockchain-life.com/wp-content/uploads/2023/11/others.jpg"
    }
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
    <section className="py-20 bg-secondary/30 relative overflow-hidden" id="attendees">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Attendees</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Attendee Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {demographics.map((demo, index) => {
            const IconComponent = demo.icon;
            return (
              <div key={index} className="group relative">
                {/* Background Card */}
                <div className="relative bg-card/50 border border-border/50 rounded-xl p-6 text-center space-y-4 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-accent"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative flex justify-center">
                    <div className={`p-3 rounded-lg ${demo.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} group-hover:scale-110 transition-transform`}>
                      <IconComponent 
                        className={`w-8 h-8 ${demo.color === 'primary' ? 'text-primary' : 'text-accent'}`}
                      />
                    </div>
                  </div>
                  
                  {/* Percentage */}
                  <h3 
                    className={`text-3xl font-bold ${demo.color === 'primary' ? 'text-primary' : 'text-accent'} relative`}
                    data-testid={`attendee-percentage-${index}`}
                  >
                    {demo.percentage}
                  </h3>
                  
                  {/* Category */}
                  <p className="text-muted-foreground font-medium relative" data-testid={`attendee-category-${index}`}>
                    {demo.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* World Map and Regional Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">Regional Distribution</h3>
            {regions.map((region, index) => (
              <div key={index} className="bg-card/30 border border-border/30 rounded-lg p-4 hover:border-primary/30 transition-colors">
                <div className="flex justify-between items-center">
                  <span 
                    className="text-foreground font-medium"
                    data-testid={`region-name-${index}`}
                  >
                    {region.name}
                  </span>
                  <span 
                    className={`font-bold text-lg ${region.color === 'primary' ? 'text-primary' : 'text-accent'}`}
                    data-testid={`region-percentage-${index}`}
                  >
                    {region.percentage}
                  </span>
                </div>
                {/* Progress bar */}
                <div className="mt-2 w-full bg-secondary/50 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${region.color === 'primary' ? 'bg-gradient-to-r from-primary to-primary/80' : 'bg-gradient-to-r from-accent to-accent/80'}`}
                    style={{ width: region.percentage }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <img 
                src="https://blockchain-life.com/wp-content/themes/cpalife/assets/img/asia1/attendees_map.svg" 
                alt="World map showing attendees distribution by region" 
                className="w-full max-w-lg mx-auto relative z-10 p-6 bg-card/20 rounded-2xl border border-border/30"
                data-testid="img-world-map"
              />
            </div>
          </div>
        </div>

        {/* Top 10 Countries */}
        <div className="bg-card/20 border border-border/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Top 10 countries-attendees:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="group">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-card/30 border border-border/20 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 hover:shadow-md">
                  <div className="relative">
                    <img 
                      src={country.flag} 
                      alt={`${country.name} flag`} 
                      className="w-8 h-6 object-cover rounded shadow-sm group-hover:scale-110 transition-transform"
                      data-testid={`country-flag-${index}`}
                    />
                  </div>
                  <span 
                    className="text-foreground font-medium group-hover:text-primary transition-colors"
                    data-testid={`country-name-${index}`}
                  >
                    {country.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6 text-center opacity-70">
            *Data is based on the customers survey while tickets purchasing. Attendees can choose several options.
          </p>
        </div>
      </div>
    </section>
  );
}
