import { Code, Heart, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Product & Code',
      description: 'Passionate about building user-centric products with clean, efficient code',
      color: 'text-primary'
    },
    {
      icon: Heart,
      title: 'Human Connection', 
      description: 'Believes technology should bring people together and create meaningful connections',
      color: 'text-creative-pink'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Dedicated to fostering inclusive tech communities and knowledge sharing',
      color: 'text-accent'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a software engineer with a deep love for building products that matter. 
            Currently co-founding Twiine, a matchmaking platform for professional networking, 
            while nurturing the tech community through Ctrl+Alt+Meet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div className="space-y-6 animate-slide-in">
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Based in Vancouver, I combine technical expertise with a genuine passion for human connection. 
                My journey in tech started with curiosity about how digital experiences can bridge gaps between people.
              </p>
              <p>
                As a co-founder and frontend engineer at <span className="text-primary font-semibold">Twiine</span>, 
                I'm building the future of professional networking. But what truly drives me is community - 
                that's why I founded <span className="text-accent font-semibold">Ctrl+Alt+Meet</span>, 
                bringing developers and creatives together through weekly coffee chats across cities.
              </p>
              <p>
                When I'm not coding or organizing meetups, you'll find me exploring Vancouver's coffee scene, 
                contributing to open source projects, or planning the next community event that'll spark 
                meaningful conversations and collaborations.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6 animate-fade-in">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title}
                className="flex items-start space-x-4 p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card-custom group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`p-3 rounded-lg bg-background border ${highlight.color} group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;