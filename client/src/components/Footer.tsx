export default function Footer() {
  const quickLinks = [
    { name: "Tickets", href: "#tickets" },
    { name: "Speakers", href: "#speakers" },
    { name: "Sponsors", href: "#sponsors" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/80 py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blockchain Life
            </div>
            <p className="text-muted-foreground">
              The world's leading blockchain, crypto & Web3 forum.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Event Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li data-testid="footer-event-date">October 28-29, 2025</li>
              <li data-testid="footer-event-location">Dubai, UAE</li>
              <li data-testid="footer-event-venue">Festival Arena</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li data-testid="footer-email">info@blockchain-life.com</li>
              <li data-testid="footer-social">Follow us on social media</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p data-testid="footer-copyright">
            &copy; 2025 Blockchain Life. All rights reserved. Established in 2017.
          </p>
        </div>
      </div>
    </footer>
  );
}
