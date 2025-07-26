import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, TrendingUp, Brain, GraduationCap } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

const Projects = () => {
  const githubLink = 'https://github.com/TheCoderSingh';

  const projects = [
    {
      title: 'Twiine',
      description: 'Build authentic professional connections, grow in your career and share your experiences.',
      icon: Users,
      tags: ['React Native', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
      status: 'In Development',
      color: 'border-primary/20 hover:border-primary/40',
      role: 'Co-founder & Frontend Engineer',
      impact: 'Building the future of professional networking',
      live: 'https://twiine.framer.website/'
    },
    {
      title: 'Crypto Tracker',
      description: 'A real-time cryptocurrency watchlist tool with live market data, price changes, and comprehensive analytics for informed trading decisions.',
      icon: TrendingUp,
      tags: ['React', 'JavaScript', 'REST APIs', 'Chart.js', 'MySQL'],
      status: 'Live',
      color: 'border-creative-cyan/20 hover:border-creative-cyan/40',
      role: 'Full-stack Developer',
      impact: 'Helping users track crypto assets',
      code: 'https://github.com/TheCoderSingh/crypto-tracker',
      live: 'https://crypto.thecodersingh.com/'
    },
    {
      title: 'Aura',
      description: 'Aura helps you make informed travel decisions by providing real-time air quality updates for your destination. It tells you whether it’s safe to travel and offers personalized precautions.',
      icon: Brain,
      tags: ['React', 'JavaScript', 'MySQL', 'Node.js', 'Express'],
      status: 'Live',
      color: 'border-creative-pink/20 hover:border-creative-pink/40',
      role: 'Lead Developer',
      impact: 'Helping plan trips with air quality insights',
      code: 'https://github.com/TheCoderSingh/aura',
      live: 'https://aura.thecodersingh.com/'
    },
    {
      title: 'Alunos',
      description: 'Alunos enhances homestay experiences by streamlining management for Canadian companies and making communication between hosts, students, and coordinators seamless.',
      icon: GraduationCap,
      tags: ['Vue.js', 'Laravel', 'Quasar', 'GraphQL'],
      status: 'Live',
      color: 'border-accent/20 hover:border-accent/40',
      role: 'Backend Developer',
      impact: 'Streamlining Homestay Management and Communication',
      code: 'https://github.com/TheCoderSingh/alunos-website',
      live: 'https://alunos.thecodersingh.com/'
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
                        'border-creative-yellow text-creative-yellow'}
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
                    {project.code && (
                      <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors duration-300" onClick={() => window.open(project.code, '_blank')}>
                        <SiGithub className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    
                    <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors duration-300" onClick={() => window.open(project.live, '_blank')}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button variant="accent" size="lg" className="group" onClick={() => window.open(githubLink, '_blank')}>
            <SiGithub className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;