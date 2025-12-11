import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const skills = [
    "Креативность",
    "Стратегическое мышление",
    "Коммуникация",
    "Лидерство",
    "Аналитика",
    "Инновации"
  ];

  const facts = [
    {
      icon: "Sparkles",
      title: "Страсть к творчеству",
      description: "Люблю создавать что-то новое и находить нестандартные решения"
    },
    {
      icon: "Target",
      title: "Ориентация на результат",
      description: "Каждый проект довожу до идеального завершения"
    },
    {
      icon: "Users",
      title: "Командная работа",
      description: "Эффективно работаю в команде и вдохновляю других"
    },
    {
      icon: "TrendingUp",
      title: "Постоянное развитие",
      description: "Всегда учусь новому и совершенствую свои навыки"
    }
  ];

  const socialLinks = [
    { icon: "Github", label: "GitHub", url: "#", color: "hover:text-[#333]" },
    { icon: "Linkedin", label: "LinkedIn", url: "#", color: "hover:text-[#0077B5]" },
    { icon: "Twitter", label: "Twitter", url: "#", color: "hover:text-[#1DA1F2]" },
    { icon: "Mail", label: "Email", url: "#", color: "hover:text-accent" },
    { icon: "Globe", label: "Веб-сайт", url: "#", color: "hover:text-primary" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50 to-pink-50 font-open-sans">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        <section className="mb-16 animate-fade-in">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <div className="relative h-48 bg-gradient-to-r from-primary via-secondary to-accent">
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            
            <div className="relative px-8 pb-8">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-20">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/projects/3ef8ee43-5fee-4147-9749-6e57283a701a/files/4a7687a6-aff3-413b-9b56-918fb6919c7a.jpg"
                    alt="Профиль" 
                    className="w-40 h-40 rounded-3xl object-cover border-6 border-white shadow-xl ring-4 ring-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="Sparkles" size={24} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    ДЖЕЙК
                  </h1>
                  <p className="text-xl text-muted-foreground font-medium mb-4">
                    Творческий профессионал • Инноватор • Лидер
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-4 py-1.5 text-sm font-medium">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16 animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <Icon name="User" size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-montserrat font-bold text-foreground">О личности</h2>
          </div>
          
          <Card className="p-8 mb-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Я креативный и целеустремлённый профессионал, который любит превращать идеи в реальность. 
              Мой подход сочетает стратегическое мышление с вниманием к деталям, что позволяет достигать 
              выдающихся результатов в каждом проекте.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Верю в силу инноваций и постоянного развития. Каждый день стремлюсь стать лучше, 
              узнать что-то новое и применить это на практике для создания значимых результатов.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <Card 
                key={fact.title}
                className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                style={{ 
                  animationDelay: `${0.3 + index * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon name={fact.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">
                      {fact.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 mt-8 shadow-lg border-0 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
            <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4">Ключевые навыки</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  className="bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 px-4 py-2 text-base font-medium shadow-md hover:shadow-lg cursor-default"
                  style={{ 
                    animationDelay: `${0.5 + index * 0.05}s`,
                    animationFillMode: 'backwards'
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </section>

        <section className="animate-slide-in-right" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg">
              <Icon name="MessageCircle" size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-montserrat font-bold text-foreground">Контакты</h2>
          </div>
          
          <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Буду рад общению и новым возможностям для сотрудничества!
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={link.label}
                  variant="outline"
                  size="lg"
                  className="group relative overflow-hidden border-2 hover:border-primary hover:shadow-lg transition-all duration-300 h-auto py-4"
                  style={{ 
                    animationDelay: `${0.6 + index * 0.1}s`,
                    animationFillMode: 'backwards'
                  }}
                  asChild
                >
                  <a href={link.url} className="flex flex-col items-center gap-2">
                    <Icon name={link.icon} size={28} className={`transition-colors duration-300 ${link.color}`} />
                    <span className="font-medium text-sm">{link.label}</span>
                  </a>
                </Button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row justify-center gap-6 text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <Icon name="Phone" size={20} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <Icon name="Mail" size={20} />
                  <span>email@example.com</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <Icon name="MapPin" size={20} />
                  <span>Город, Страна</span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <footer className="mt-16 text-center text-muted-foreground">
          <p className="text-sm">© 2024 Все права защищены</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;