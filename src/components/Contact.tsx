import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@jaskaransingh.dev',
      color: 'text-primary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vancouver, BC, Canada',
      color: 'text-accent'
    },
    {
      icon: Phone,
      label: 'Available for',
      value: 'Coffee chats & collaborations',
      color: 'text-creative-orange'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jaskaransingh', label: 'GitHub', color: 'hover:text-foreground' },
    { icon: Linkedin, href: 'https://linkedin.com/in/jaskaransingh-dev', label: 'LinkedIn', color: 'hover:text-primary' },
    { icon: Twitter, href: 'https://twitter.com/jaskarandev', label: 'Twitter', color: 'hover:text-accent' }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-hero bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Always excited to discuss new projects, creative ideas, or opportunities to collaborate. 
            Drop me a message or let's grab coffee!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-slide-in border-border/50 hover:border-primary/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
              <CardDescription>
                I'll get back to you within 24 hours. Looking forward to hearing from you!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="transition-all duration-300 focus:shadow-glow"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    className="min-h-32 transition-all duration-300 focus:shadow-glow"
                    required
                  />
                </div>
                <Button type="submit" variant="creative" size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-300 group"
                  style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
                >
                  <div className="p-3 rounded-lg bg-background border group-hover:scale-110 transition-transform duration-300">
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Find Me Online</CardTitle>
                <CardDescription>
                  Connect with me on social platforms or check out my work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={social.label}
                      variant="ghost"
                      className={`justify-start ${social.color} transition-all duration-300 hover:scale-105`}
                      style={{ animationDelay: `${0.6 + (index * 0.1)}s` }}
                    >
                      <social.icon className="w-5 h-5 mr-3" />
                      {social.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resume */}
            <Card className="bg-gradient-accent/10 border-accent/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Resume</h3>
                <p className="text-muted-foreground mb-4">
                  Want to know more about my professional experience?
                </p>
                <Button variant="accent" size="lg" className="w-full">
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;