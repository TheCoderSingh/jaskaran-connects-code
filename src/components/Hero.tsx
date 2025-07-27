import { Button } from '@/components/ui/button';
import { ArrowDown, Mail } from 'lucide-react';
import jaskaranPhoto from '@/assets/jaskaran-photo.png';
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
import { FiLinkedin } from "react-icons/fi";


const Hero = () => {
  const socialLinks = [
    { icon: SiGithub, href: 'https://github.com/TheCoderSingh', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/thecodersingh/', label: 'LinkedIn' },
    { icon: SiX, href: 'https://x.com/TheCoderSingh', label: 'X' },
    { icon: Mail, href: 'mailto:thecodersingh@gmail.com', label: 'Email' },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Hey, I'm </span>
                <span className="bg-gradient-hero bg-clip-text text-transparent animate-infinite animate-pulse">
                  Jaskaran
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Software Engineer & Community Builder crafting meaningful digital experiences from Vancouver 🇨🇦
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-secondary/10 border border-primary/20 rounded-full text-secondary text-sm">
                  Cofounder & Frontend Engineer @ Twiine
                </span>
                <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm">
                  Founder @ Ctrl+Alt+Meet
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="creative" size="lg" className="animate-float" onClick={scrollToProjects}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform duration-300"
                  onClick={() => window.open(social.href, '_blank')}
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-card-custom hover:shadow-creative transition-all duration-500 hover:scale-105">
                <img 
                  src={jaskaranPhoto} 
                  alt="Jaskaran Singh" 
                  className="w-full object-contain"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-creative-orange rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-creative-cyan rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-creative-pink rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToAbout}
            className="hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;