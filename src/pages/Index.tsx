import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F6F7] to-[#eee]">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-[#403E43]">Портфолио</div>
          <div className="hidden md:flex space-x-6">
            {['О себе', 'Навыки', 'Проекты', 'Контакты'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[#8A898C] hover:text-[#1EAEDB] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <Button className="md:hidden" variant="ghost" size="sm">
            Меню
          </Button>
        </div>
      </nav>

      {/* Герой-секция */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#221F26] mb-6">
            Привет, я <span className="text-[#9b87f5]">Имя Фамилия</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8A898C] max-w-2xl mx-auto mb-8">
            Опытный разработчик, который превращает идеи в красивые и функциональные веб-приложения
          </p>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 rounded-md text-lg">
            Связаться со мной
          </Button>
        </div>
      </section>

      {/* О себе */}
      <section id="о себе" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#221F26]">О себе</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#9b87f5]">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Моё фото" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-2xl font-semibold mb-4 text-[#221F26]">Имя Фамилия</h3>
              <p className="text-[#8A898C] mb-4">
                Я веб-разработчик с более чем 5-летним опытом создания современных веб-приложений.
                Специализируюсь на фронтенд-разработке и создании пользовательских интерфейсов, которые 
                не только красивы, но и функциональны.
              </p>
              <p className="text-[#8A898C] mb-6">
                Мой подход к разработке сочетает техническую экспертизу с вниманием к деталям дизайна,
                что позволяет создавать продукты, которые выделяются на фоне конкурентов.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                  Скачать резюме
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Навыки */}
      <section id="навыки" className="py-20 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#221F26]">Навыки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Разработка",
                description: "Создание адаптивных и интерактивных пользовательских интерфейсов с использованием современных технологий.",
                skills: ["React", "TypeScript", "HTML/CSS", "Tailwind"]
              },
              {
                title: "UI/UX Дизайн",
                description: "Разработка интуитивно понятных интерфейсов с фокусом на опыт пользователя и современные тренды дизайна.",
                skills: ["Figma", "Adobe XD", "Прототипирование", "Анимации"]
              },
              {
                title: "Backend Разработка",
                description: "Создание надежных и масштабируемых серверных решений для веб-приложений.",
                skills: ["Node.js", "Express", "MongoDB", "REST API"]
              }
            ].map((skill, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-[#221F26]">{skill.title}</h3>
                <p className="text-[#8A898C] mb-6">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#E5DEFF] text-[#7E69AB] rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Проекты */}
      <section id="проекты" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#221F26]">Проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Интернет-магазин",
                description: "Полнофункциональный интернет-магазин с каталогом товаров, корзиной и оформлением заказа.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["React", "Redux", "Node.js"]
              },
              {
                title: "Мобильное приложение",
                description: "Приложение для отслеживания фитнес-активности с интеграцией с носимыми устройствами.",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["React Native", "Firebase", "UX/UI"]
              },
              {
                title: "Корпоративный сайт",
                description: "Современный корпоративный сайт с адаптивным дизайном и системой управления контентом.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tags: ["WordPress", "CSS", "JavaScript"]
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#221F26]">{project.title}</h3>
                  <p className="text-[#8A898C] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-[#F1F0FB] text-[#6E59A5] rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                    Подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="контакты" className="py-20 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#221F26]">Контакты</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-[#8A898C] mb-8 text-center">
              Есть проект или предложение? Не стесняйтесь обращаться ко мне с помощью этой формы.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#403E43] mb-1">
                  Имя
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#403E43] mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#403E43] mb-1">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ваше сообщение"
                  required
                  className="w-full min-h-[120px]"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              >
                <Send className="mr-2 h-4 w-4" /> Отправить
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-[#221F26] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">Портфолио</div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              {['О себе', 'Навыки', 'Проекты', 'Контакты'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
