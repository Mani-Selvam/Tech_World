import { 
  TrendingUp, 
  BarChart3, 
  Users, 
  Code, 
  Pickaxe, 
  Settings, 
  Rocket, 
  MoreHorizontal,
  Clock,
  User,
  Mail,
  Phone,
  Building2,
  CheckCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Registration form schema
const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  companyName: z.string().optional()
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function Attendees() {
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Registration form state
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      companyName: ""
    }
  });

  useEffect(() => {
    // Set target date for countdown (30 days from now)
    const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Submit registration data to backend
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.details || result.message || 'Registration failed');
      }

      // Registration successful
      setIsSubmitting(false);
      setShowForm(false);
      setShowThankYou(true);
      
      // Get WhatsApp number from environment variable
      const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+919345791995";
      const message = `Hi! I just registered for Blockchain Life conference. My details: Name: ${data.name}, Email: ${data.email}. Looking forward to the event!`;
      
      // Open WhatsApp with pre-filled message
      setTimeout(() => {
        const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      }, 2000);

    } catch (error) {
      console.error('Registration error:', error);
      setIsSubmitting(false);
      
      // Show error message to user
      alert(error instanceof Error ? error.message : 'Registration failed. Please try again.');
    }
  };

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

        {/* Countdown Timer Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Event Starts In</h3>
            <p className="text-muted-foreground text-lg">Don't miss out on TechAra Academy</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-border/30 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Days */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-xl p-6 mb-2">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-6 h-6 text-primary mr-2" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1" data-testid="countdown-days">
                      {timeLeft.days.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Days</div>
                </div>
                
                {/* Hours */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm border border-accent/30 rounded-xl p-6 mb-2">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-6 h-6 text-accent mr-2" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-1" data-testid="countdown-hours">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Hours</div>
                </div>
                
                {/* Minutes */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-xl p-6 mb-2">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-6 h-6 text-primary mr-2" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1" data-testid="countdown-minutes">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Minutes</div>
                </div>
                
                {/* Seconds */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm border border-accent/30 rounded-xl p-6 mb-2">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-6 h-6 text-accent mr-2" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-1" data-testid="countdown-seconds">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Seconds</div>
                </div>
              </div>
              
              {/* Register Button */}
              <div className="text-center mt-8">
                <button 
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-lg text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity crypto-glow" 
                  data-testid="button-register-countdown"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-background border border-border rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Register for TechAra Academy</h3>
                <p className="text-muted-foreground">Fill in your details to register</p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Name *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field} 
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="Enter your email address" 
                            {...field} 
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Mobile Number *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="Enter your mobile number" 
                            {...field} 
                            data-testid="input-mobile"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          Company Name (Optional)
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your company name" 
                            {...field} 
                            data-testid="input-company"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowForm(false)}
                      className="flex-1"
                      data-testid="button-cancel"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground"
                      data-testid="button-submit"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        )}

        {/* Thank You Modal */}
        {showThankYou && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-background border border-border rounded-2xl p-8 max-w-md w-full text-center">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-4">
                  Your registration has been received successfully.
                </p>
                <p className="text-sm text-muted-foreground">
                  You will be redirected to WhatsApp to complete your registration process.
                </p>
              </div>
              
              <Button
                onClick={() => setShowThankYou(false)}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground"
                data-testid="button-close-thanks"
              >
                Close
              </Button>
            </div>
          </div>
        )}

        {/* Attendees Section Title */}
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
