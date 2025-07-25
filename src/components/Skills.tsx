import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'bg-primary' },
        { name: 'React Native', level: 90, color: 'bg-secondary' },
        { name: 'TypeScript', level: 92, color: 'bg-accent' },
        { name: 'JavaScript', level: 95, color: 'bg-creative-yellow' },
        { name: 'HTML/CSS', level: 90, color: 'bg-creative-orange' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-creative-cyan' }
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-accent' },
        { name: 'Firebase', level: 88, color: 'bg-creative-orange' },
        { name: 'Git/GitHub', level: 90, color: 'bg-primary' },
        { name: 'REST APIs', level: 87, color: 'bg-secondary' },
        { name: 'MongoDB', level: 80, color: 'bg-creative-pink' },
        { name: 'Figma', level: 85, color: 'bg-creative-cyan' }
      ]
    }
  ];

  const certifications = [
    'AWS Certified Developer',
    'Google Analytics Certified',
    'Agile & Scrum Methodologies'
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit honed through years of building scalable applications and leading development teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="space-y-6 animate-slide-in"
              style={{ animationDelay: `${categoryIndex * 0.3}s` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-primary rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group"
                    style={{ animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105 origin-left`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1) + 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <h3 className="text-xl font-semibold mb-6 text-foreground">Certifications & Methodologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={cert}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${1 + (index * 0.1)}s` }}
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;