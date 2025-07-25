import { Heart, Code, Coffee } from 'lucide-react';
import jsLogo from '@/assets/js-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 border-t border-border bg-muted/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={scrollToTop}
            >
              <img 
                src={jsLogo} 
                alt="JS Logo" 
                className="w-8 h-8 group-hover:animate-glow-pulse transition-all duration-300" 
              />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Jaskaran Singh
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building meaningful connections through code and community. 
              Always excited to collaborate on projects that make a difference.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-creative-pink animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-primary" />
              <span>in Vancouver</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Coffee className="w-5 h-5 mr-2 text-creative-orange" />
              Ctrl+Alt+Meet
            </h3>
            <p className="text-muted-foreground mb-4">
              Join our weekly coffee chats and connect with amazing developers and creatives.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📍 Vancouver, Toronto, Montreal</p>
              <p>☕ Weekly meetups</p>
              <p>🌟 200+ community members</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Jaskaran Singh. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <span className="hidden md:inline">•</span>
            <button 
              onClick={scrollToTop}
              className="hover:text-primary transition-colors duration-300"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;