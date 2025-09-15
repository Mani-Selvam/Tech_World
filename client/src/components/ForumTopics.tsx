import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  DollarSign, 
  TrendingUp, 
  Blocks, 
  BarChart3, 
  Pickaxe, 
  Rocket, 
  Code, 
  Image, 
  Gamepad2,
  Brain,
  Network
} from "lucide-react";

const topics = [
  { name: "Web3", icon: Globe, color: "text-blue-400" },
  { name: "Cryptocurrencies", icon: DollarSign, color: "text-orange-400" },
  { name: "Investments", icon: TrendingUp, color: "text-orange-500" },
  { name: "Blockchain", icon: Blocks, color: "text-blue-500" },
  { name: "Trading", icon: BarChart3, color: "text-orange-400" },
  { name: "Mining", icon: Pickaxe, color: "text-blue-400" },
  { name: "Startups", icon: Rocket, color: "text-orange-500" },
  { name: "Development", icon: Code, color: "text-blue-500" },
  { name: "NFT", icon: Image, color: "text-blue-400" },
  { name: "Metaverse", icon: Network, color: "text-blue-500" },
  { name: "AI", icon: Brain, color: "text-blue-400" },
  { name: "GameFi", icon: Gamepad2, color: "text-blue-500" }
];

export default function ForumTopics() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Forum </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">topics</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <Card 
                key={index} 
                className="group bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-2xl bg-secondary/30 group-hover:bg-secondary/50 transition-colors">
                      <IconComponent 
                        className={`w-8 h-8 ${topic.color} group-hover:scale-110 transition-transform`}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {topic.name}
                  </h3>
                  <p className="text-sm text-accent font-medium tracking-wider uppercase">
                    SUBTOPICS
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}