import { useState } from 'react';
import { Send, Lock, Shield, FileText, User, Code, Briefcase, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  
  const handleAccess = () => {
    if (accessCode === '1234') {
      setAccessGranted(true);
      toast({
        title: "ДОСТУП РАЗРЕШЕН",
        description: "Уровень допуска: Конфиденциально. Данные расшифрованы.",
        variant: "default",
      });
    } else {
      toast({
        title: "ДОСТУП ЗАПРЕЩЕН",
        description: "Неверный код доступа. Попытка зарегистрирована.",
        variant: "destructive",
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "СООБЩЕНИЕ ОТПРАВЛЕНО",
      description: "Ваше сообщение зашифровано и отправлено объекту. Ожидайте ответа по защищенному каналу.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  if (!accessGranted) {
    return (
      <div className="min-h-screen bg-[#121212] text-green-500 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#1a1a1a] border border-green-500 rounded-md p-8 shadow-lg shadow-green-500/20">
          <div className="text-center mb-6">
            <Shield className="h-16 w-16 mx-auto mb-4 text-green-500" />
            <h1 className="text-2xl font-mono font-bold mb-2">ЗАСЕКРЕЧЕНО</h1>
            <p className="text-sm opacity-70 font-mono">УРОВЕНЬ ДОСТУПА: КОНФИДЕНЦИАЛЬНО</p>
          </div>
          
          <div className="space-y-4 font-mono">
            <p className="text-xs opacity-70 animate-pulse">ВВЕДИТЕ КОД ДОСТУПА ДЛЯ РАСШИФРОВКИ ДАННЫХ</p>
            <Input
              type="password"
              placeholder="*****"
              className="bg-[#0f0f0f] border-green-500 text-green-500 font-mono"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
            />
            <Button 
              className="w-full bg-green-800 hover:bg-green-700 text-green-300 font-mono"
              onClick={handleAccess}
            >
              <Lock className="mr-2 h-4 w-4" />
              ЗАПРОСИТЬ ДОСТУП
            </Button>
            <p className="text-xs text-center opacity-50 mt-6">
              НЕСАНКЦИОНИРОВАННЫЙ ДОСТУП ПРЕСЛЕДУЕТСЯ ПО ЗАКОНУ
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-green-500">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-green-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-mono font-bold flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            <span className="hidden sm:inline">ДОСЬЕ: </span>ОБЪЕКТ <span className="animate-pulse">████</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {[
              {name: 'ЛИЧНОСТЬ', icon: User, href: '#личность'},
              {name: 'СПОСОБНОСТИ', icon: Code, href: '#способности'},
              {name: 'ОПЕРАЦИИ', icon: Briefcase, href: '#операции'},
              {name: 'СВЯЗЬ', icon: Mail, href: '#связь'}
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-green-400 hover:text-green-300 transition-colors flex items-center font-mono text-sm"
              >
                <item.icon className="mr-1 h-3 w-3" /> {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="sm" className="text-green-500 hover:text-green-400">
              <Lock className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Герой-секция */}
      <section className="py-20 md:py-32 px-4 border-b border-green-500/20 bg-[url('https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center bg-blend-overlay bg-[#0a0a0a]">
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-1 border border-green-500 rounded-full text-xs mb-6 font-mono">
            <span className="animate-pulse mr-2">●</span> СТРОГО КОНФИДЕНЦИАЛЬНО
          </div>
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 glitch-text">
            ОБЪЕКТ <span className="text-red-500">[ДАННЫЕ УДАЛЕНЫ]</span>
          </h1>
          <p className="text-lg md:text-xl text-green-400/80 max-w-2xl mx-auto mb-8 font-mono leading-relaxed">
            <span className="line-through">████████████████</span> ОПЕРАТИВНИК ВЫСШЕГО РАНГА <span className="line-through">███████</span> СПЕЦИАЛИЗАЦИЯ: РАЗРАБОТКА <span className="line-through">███████████</span>
          </p>
          <Button className="bg-green-800 hover:bg-green-700 text-green-300 border border-green-500 px-8 py-6 rounded-md text-lg font-mono">
            <FileText className="mr-2 h-5 w-5" /> ЗАПРОСИТЬ ДОСЬЕ
          </Button>
        </div>
      </section>

      {/* Личность */}
      <section id="личность" className="py-20 bg-[#0f0f0f] border-b border-green-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-16">
            <div className="h-px flex-grow bg-green-500/30"></div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold px-4 text-center">ЛИЧНОСТЬ</h2>
            <div className="h-px flex-grow bg-green-500/30"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative mx-auto">
                <div className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-green-500 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-50"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <User className="h-20 w-20 mx-auto mb-2 text-green-500/50" />
                      <div className="font-mono text-xs">ИЗОБРАЖЕНИЕ ЗАСЕКРЕЧЕНО</div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 p-2 bg-green-900/50 font-mono text-xs flex justify-between">
                    <span>ID: ████</span>
                    <span className="animate-pulse">REC</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#0f0f0f] border border-green-500 px-4 py-2 font-mono text-xs">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    <span>СТАТУС: АКТИВЕН</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="border border-green-500/30 bg-black/30 p-6 font-mono">
                <div className="uppercase text-xs text-green-400 mb-4 flex items-center">
                  <span className="mr-2">Досье</span>
                  <div className="h-px flex-grow bg-green-500/30"></div>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex">
                    <div className="w-1/3 opacity-70">ИМЯ:</div>
                    <div className="w-2/3">[<span className="line-through">ДАННЫЕ УДАЛЕНЫ</span>]</div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 opacity-70">ВОЗРАСТ:</div>
                    <div className="w-2/3">██ лет</div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 opacity-70">ЗВАНИЕ:</div>
                    <div className="w-2/3">СТАРШИЙ [<span className="line-through">████</span>]</div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 opacity-70">ДОСЬЕ:</div>
                    <div className="w-2/3 leading-relaxed">
                      Объект является ценным оперативником с опытом в [<span className="line-through">████████</span>]. 
                      Специализируется на разработке [<span className="line-through">█████</span>] и внедрении 
                      [<span className="line-through">████████</span>]. Прошел подготовку по программе 
                      [<span className="line-through">█████████</span>] в [<span className="line-through">████</span>] году.
                    </div>
                  </div>
                </div>
                <div className="mt-6 border-t border-green-500/30 pt-6 flex justify-between items-center">
                  <span className="text-xs opacity-50">Последнее обновление: ██.██.20██</span>
                  <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-900/50 text-xs">
                    ПОЛНОЕ ДОСЬЕ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Способности */}
      <section id="способности" className="py-20 bg-[#121212] border-b border-green-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-16">
            <div className="h-px flex-grow bg-green-500/30"></div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold px-4 text-center">СПОСОБНОСТИ</h2>
            <div className="h-px flex-grow bg-green-500/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ФРОНТЕНД [ЗВАНИЕ: ЭКСПЕРТ]",
                description: "Создание надежных пользовательских интерфейсов с использованием передовых технологий и методов шифрования.",
                skills: ["React", "TypeScript", "Next.js", "WebGL"],
                level: 95
              },
              {
                title: "БЭКЕНД [ЗВАНИЕ: СПЕЦИАЛИСТ]",
                description: "Разработка защищенных серверных систем с многоуровневой аутентификацией и шифрованием данных.",
                skills: ["Node.js", "Python", "GraphQL", "Криптография"],
                level: 80
              },
              {
                title: "БЕЗОПАСНОСТЬ [ЗВАНИЕ: МАСТЕР]",
                description: "Проектирование и анализ систем безопасности с защитой от проникновения и методами обнаружения угроз.",
                skills: ["Пентест", "Цифровая криминалистика", "Защита данных", "Шифрование"],
                level: 90
              }
            ].map((skill, index) => (
              <div key={index} className="bg-[#0f0f0f] border border-green-500/30 p-6 hover:border-green-500 transition-all duration-300">
                <div className="mb-6">
                  <div className="h-1 bg-green-900 relative mb-1">
                    <div className="absolute top-0 left-0 h-full bg-green-500" style={{width: `${skill.level}%`}}></div>
                  </div>
                  <div className="flex justify-between text-xs font-mono opacity-70">
                    <span>УРОВЕНЬ ДОСТУПА: {skill.level}</span>
                    <span>100</span>
                  </div>
                </div>
                <h3 className="text-lg font-mono font-semibold mb-4 text-green-400">{skill.title}</h3>
                <p className="text-green-500/70 mb-6 text-sm font-mono leading-relaxed">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-mono">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Операции */}
      <section id="операции" className="py-20 bg-[#0f0f0f] border-b border-green-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-16">
            <div className="h-px flex-grow bg-green-500/30"></div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold px-4 text-center">ОПЕРАЦИИ</h2>
            <div className="h-px flex-grow bg-green-500/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ОПЕРАЦИЯ 'ЦИФРОВОЙ ЩЕПОТ'",
                description: "Разработка и внедрение системы безопасности для [ДАННЫЕ УДАЛЕНЫ] с уровнем защиты класса А.",
                image: "https://images.unsplash.com/photo-1614064548237-096d72c758b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                status: "ЗАВЕРШЕНО",
                date: "██.██.20██",
                clearance: "ВЫСШИЙ"
              },
              {
                title: "ОПЕРАЦИЯ 'КРАСНЫЙ КОД'",
                description: "Создание алгоритма распознавания [ДАННЫЕ УДАЛЕНЫ] для идентификации [ДАННЫЕ УДАЛЕНЫ].",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                status: "В ПРОЦЕССЕ",
                date: "██.██.20██",
                clearance: "ТАЙНО"
              },
              {
                title: "ОПЕРАЦИЯ 'ПРИЗРАК'",
                description: "Внедрение [ДАННЫЕ УДАЛЕНЫ] в сеть [ДАННЫЕ УДАЛЕНЫ] для получения данных о [ДАННЫЕ УДАЛЕНЫ].",
                image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                status: "ЗАСЕКРЕЧЕНО",
                date: "██.██.20██",
                clearance: "СОВЕРШЕННО СЕКРЕТНО"
              }
            ].map((project, index) => (
              <div key={index} className="bg-[#0a0a0a] border border-green-500/30 overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${project.image})`}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  <div className="absolute top-0 left-0 right-0 p-2 flex justify-between items-center">
                    <span className="text-xs font-mono bg-green-900/80 px-2 py-1">{project.clearance}</span>
                    <span className="text-xs font-mono flex items-center">
                      {project.status === "В ПРОЦЕССЕ" && (
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                      )}
                      {project.status === "ЗАВЕРШЕНО" && (
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      )}
                      {project.status === "ЗАСЕКРЕЧЕНО" && (
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                      )}
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 font-mono text-xs">
                    <div className="flex justify-between">
                      <span>ДАТА: {project.date}</span>
                      <span>ID: {(index + 1).toString().padStart(3, '0')}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-mono font-semibold mb-2 text-green-400">{project.title}</h3>
                  <p className="text-green-500/70 mb-4 text-sm font-mono">{project.description}</p>
                  <Button variant="outline" className="w-full border-green-500/30 text-green-500 hover:bg-green-900/30 text-xs font-mono group-hover:border-green-500">
                    ЗАПРОСИТЬ ДОСТУП К МАТЕРИАЛАМ
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Связь */}
      <section id="связь" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-16">
            <div className="h-px flex-grow bg-green-500/30"></div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold px-4 text-center">СВЯЗЬ</h2>
            <div className="h-px flex-grow bg-green-500/30"></div>
          </div>
          <div className="max-w-2xl mx-auto bg-[#0a0a0a] border border-green-500/30 p-8">
            <div className="uppercase text-xs text-green-400 mb-4 font-mono flex items-center">
              <span className="mr-2">ЗАЩИЩЕННЫЙ КАНАЛ</span>
              <div className="h-px flex-grow bg-green-500/30"></div>
              <span className="ml-2 animate-pulse">АКТИВЕН</span>
            </div>
            <p className="text-green-500/70 mb-8 text-sm font-mono text-center">
              Для связи с объектом используйте шифрованную форму связи. Ваше сообщение будет передано с использованием протокола [ДАННЫЕ УДАЛЕНЫ].
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 font-mono">
              <div>
                <label htmlFor="name" className="block text-xs text-green-400 mb-1">
                  КОДОВОЕ ИМЯ
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ВВЕДИТЕ КОДОВОЕ ИМЯ"
                  required
                  className="w-full bg-[#0f0f0f] border-green-500/30 text-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-green-400 mb-1">
                  КАНАЛ СВЯЗИ
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ВВЕДИТЕ ЗАЩИЩЕННЫЙ EMAIL"
                  required
                  className="w-full bg-[#0f0f0f] border-green-500/30 text-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-green-400 mb-1">
                  СООБЩЕНИЕ
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="ВВЕДИТЕ ЗАШИФРОВАННОЕ СООБЩЕНИЕ"
                  required
                  className="w-full bg-[#0f0f0f] border-green-500/30 text-green-500 focus:border-green-500 min-h-[120px]"
                />
              </div>
              <div className="flex items-center text-xs opacity-70 mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span>ВСЕ СООБЩЕНИЯ ШИФРУЮТСЯ ПО ПРОТОКОЛУ [ДАННЫЕ УДАЛЕНЫ]</span>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-green-800 hover:bg-green-700 text-green-300 border border-green-500/50"
              >
                <Send className="mr-2 h-4 w-4" /> ОТПРАВИТЬ СООБЩЕНИЕ
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-[#0a0a0a] text-green-500/70 py-12 border-t border-green-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-mono font-bold mb-4 md:mb-0 flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              <span>ЗАСЕКРЕЧЕНО</span>
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0 font-mono text-xs">
              {[
                {name: 'ЛИЧНОСТЬ', href: '#личность'},
                {name: 'СПОСОБНОСТИ', href: '#способности'},
                {name: 'ОПЕРАЦИИ', href: '#операции'},
                {name: 'СВЯЗЬ', href: '#связь'}
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="hover:text-green-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="text-xs font-mono opacity-50">
              ДОКУМЕНТ: █████████-A • УРОВЕНЬ ДОПУСКА: СЕКРЕТНО
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
