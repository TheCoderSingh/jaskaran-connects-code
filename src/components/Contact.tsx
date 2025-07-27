import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter, FiX } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvzkjkv");

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'thecodersingh@gmail.com',
      color: 'text-primary',
      href: 'mailto:thecodersingh@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vancouver, Canada',
      color: 'text-accent'
    },
    {
      icon: Phone,
      label: 'Available for',
      value: 'Job opportunties, projects, collaborations, or coffee  ☕',
      color: 'text-creative-orange'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/TheCoderSingh', label: 'GitHub', color: 'hover:text-foreground' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/thecodersingh/', label: 'LinkedIn', color: 'hover:text-foreground' },
    { icon: FaXTwitter, href: 'https://x.com/TheCoderSingh', label: 'X', color: 'hover:text-foreground' }
  ];

    const resumeLink = 'https://drive.google.com/file/d/10aYW7LgLUKZ9gMHFTHKg3g7mWT6zz1Cl';

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
                Whether it’s a new idea or just a hello, I’d love to hear from you. Let’s start a conversation over coffee or code.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {state.succeeded ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Thank you!</h3>
                  <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                    I’ve received your message and will get back to you soon. Looking forward to connecting!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" type="text" required placeholder="Your name" />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" required placeholder="What would you like to discuss?" />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" required placeholder="What’s on your mind?" className="min-h-32" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <Button type="submit" variant="creative" size="lg" className="w-full group" disabled={state.submitting}>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                info.label === 'Email' && info.href ? (
                  <a
                    key={info.label}
                    href={info.href}
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
                  </a>
                ) : (
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
                )
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
                      onClick={() => window.open(social.href, '_blank')}
                      aria-label={social.label}
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
                <Button variant="accent" size="lg" className="w-full" onClick={() => window.open(resumeLink, '_blank')}>
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