import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Users, TrendingUp, Brain, GraduationCap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Twiine',
      description: 'Co-founder & Frontend Engineer - A matchmaking platform for professional networking that connects like-minded professionals based on interests and goals.',
      icon: Users,
      tags: ['React Native', 'TypeScript', 'Firebase', 'Figma'],
      status: 'In Development',
      color: 'border-primary/20 hover:border-primary/40',
      role: 'Co-founder & Frontend Engineer',
      impact: 'Building the future of professional networking'
    },
    {
      title: 'Crypto Tracker',
      description: 'A real-time cryptocurrency portfolio and watchlist tool with live market data, price alerts, and comprehensive analytics for informed trading decisions.',
      icon: TrendingUp,
      tags: ['React', 'JavaScript', 'REST APIs', 'Chart.js'],
      status: 'Live',
      color: 'border-creative-cyan/20 hover:border-creative-cyan/40',
      role: 'Full-stack Developer',
      impact: 'Helping users track $10M+ in crypto assets'
    },
    {
      title: 'Aura',
      description: 'An AI-powered journaling application that provides personalized insights, mood tracking, and intelligent prompts to enhance mental well-being.',
      icon: Brain,
      tags: ['React', 'TypeScript', 'OpenAI', 'Node.js'],
      status: 'Beta',
      color: 'border-creative-pink/20 hover:border-creative-pink/40',
      role: 'Lead Developer',
      impact: 'Supporting mental health through AI insights'
    },
    {
      title: 'Alunos',
      description: 'A comprehensive platform for student networking and productivity, featuring study groups, project collaboration, and academic resource sharing.',
      icon: GraduationCap,
      tags: ['React', 'Firebase', 'Material-UI', 'PWA'],
      status: 'Live',
      color: 'border-accent/20 hover:border-accent/40',
      role: 'Frontend Developer',
      impact: 'Connecting 500+ students across universities'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-creative bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startup co-founding to side projects, each application represents a passion for solving real problems through technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group ${project.color} transition-all duration-500 hover:shadow-card-custom hover:scale-[1.02] animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-background border group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`
                      ${project.status === 'Live' ? 'border-accent text-accent' : 
                        project.status === 'Beta' ? 'border-creative-yellow text-creative-yellow' : 
                        'border-primary text-primary'}
                    `}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
                <p className="text-sm font-medium text-accent mt-2">{project.impact}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="group-hover:border-primary/30 transition-colors duration-300">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors duration-300">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button variant="accent" size="lg" className="group">
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;