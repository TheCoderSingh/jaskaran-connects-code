import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Users, Calendar, MapPin, Heart, MessageCircle } from 'lucide-react';

const Community = () => {
  const stats = [
    { label: 'Weekly Coffee Chats', value: '15+', icon: Coffee },
    { label: 'Community Members', value: '200+', icon: Users },
    { label: 'Cities Connected', value: '5', icon: MapPin },
    { label: 'Connections Made', value: '500+', icon: Heart }
  ];

  const features = [
    {
      icon: Coffee,
      title: 'Weekly Coffee Chats',
      description: 'Every week, we organize intimate coffee meetups where developers and creatives can connect over shared interests.',
      color: 'text-creative-orange'
    },
    {
      icon: MessageCircle,
      title: 'Idea Sharing',
      description: 'A welcoming space for brainstorming, getting feedback on projects, and collaborative problem-solving.',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Cross-City Network',
      description: 'Connecting tech professionals across Vancouver, Toronto, Montreal, and expanding to more cities.',
      color: 'text-accent'
    },
    {
      icon: Calendar,
      title: 'Regular Events',
      description: 'From coding workshops to design thinking sessions, we host events that bring the community together.',
      color: 'text-creative-cyan'
    }
  ];

  return (
    <section id="community" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ctrl+Alt+<span className="bg-gradient-creative bg-clip-text text-transparent">Meet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building authentic connections in the tech community, one coffee chat at a time. 
            What started as a simple idea has grown into a movement that brings developers and creatives together across cities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="text-center group hover:shadow-card-custom transition-all duration-300 hover:scale-105 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-card-custom transition-all duration-300 hover:scale-[1.02] animate-slide-in border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-background border group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Highlight */}
        <Card className="bg-gradient-accent/10 border-accent/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <CardContent className="p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Technology should bring people together, not isolate them."
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ctrl+Alt+Meet started with a simple belief: the best ideas come from conversations over coffee. 
                We've created a space where introverts feel welcome, ideas are celebrated, and authentic 
                connections flourish naturally.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="lg" className="group">
                  <Coffee className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Join Our Next Meetup
                </Button>
                <Button variant="outline" size="lg">
                  <Users className="w-5 h-5 mr-2" />
                  Community Guidelines
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Interested in bringing Ctrl+Alt+Meet to your city?
          </p>
          <Button variant="creative" size="lg" className="animate-glow-pulse">
            Let's Start a Chapter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;