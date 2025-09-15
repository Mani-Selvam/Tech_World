import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToAttendees = () => {
    const attendeesSection = document.getElementById('attendees');
    if (attendeesSection) {
      attendeesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const openRegistrationForm = () => {
    setIsOpen(false);
    setTimeout(() => {
      const attendeesSection = document.getElementById('attendees');
      if (attendeesSection) {
        attendeesSection.scrollIntoView({ behavior: 'smooth' });
        // Trigger the registration form in attendees component
        const registerButton = document.querySelector('[data-testid="button-register-countdown"]') as HTMLButtonElement;
        if (registerButton) {
          registerButton.click();
        }
      }
    }, 100);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TechAra
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={scrollToAttendees}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-tickets"
            >
              Tickets
            </button>
            <button 
              onClick={() => scrollToSection('speakers')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-speakers"
            >
              Speakers
            </button>
            <button 
              onClick={() => scrollToSection('sponsors')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-sponsors"
            >
              Sponsors
            </button>
            <button 
              onClick={openRegistrationForm}
              className="bg-gradient-to-r from-primary to-accent px-6 py-2 rounded-lg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              data-testid="button-buy-tickets-nav"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/90 backdrop-blur-md">
              <button 
                onClick={scrollToAttendees}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="nav-tickets-mobile"
              >
                Tickets
              </button>
              <button 
                onClick={() => scrollToSection('speakers')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="nav-speakers-mobile"
              >
                Speakers
              </button>
              <button 
                onClick={() => scrollToSection('sponsors')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="nav-sponsors-mobile"
              >
                Sponsors
              </button>
              <button 
                onClick={openRegistrationForm}
                className="block w-full text-left px-3 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-lg"
                data-testid="button-buy-tickets-mobile"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
