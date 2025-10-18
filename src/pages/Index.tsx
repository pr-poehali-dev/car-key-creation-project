import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface CarKey {
  id: number;
  brand: string;
  model: string;
  year: string;
  image: string;
  price: number;
  type: string;
  features: string[];
}

const carKeys: CarKey[] = [
  {
    id: 1,
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: '2020-2024',
    image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/f28c2ca1-aec8-462c-ac5c-a38ffdf6fffe.jpg',
    price: 15000,
    type: 'Смарт-ключ',
    features: ['Бесключевой доступ', 'Дистанционный запуск', 'Складной корпус']
  },
  {
    id: 2,
    brand: 'BMW',
    model: '5 Series',
    year: '2019-2024',
    image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/865631ee-1f90-43a8-b486-1015636470f2.jpg',
    price: 14500,
    type: 'Смарт-ключ',
    features: ['Comfort Access', 'Display Key', 'Перезаряжаемый']
  },
  {
    id: 3,
    brand: 'Toyota',
    model: 'Camry',
    year: '2018-2024',
    image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/d739957d-035d-4440-9473-871cf036ae84.jpg',
    price: 8500,
    type: 'Смарт-ключ',
    features: ['Smart Entry', 'Дистанционный запуск', 'Аварийный ключ']
  },
  {
    id: 4,
    brand: 'Audi',
    model: 'A6',
    year: '2020-2024',
    image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/d739957d-035d-4440-9473-871cf036ae84.jpg',
    price: 16000,
    type: 'Смарт-ключ',
    features: ['Advanced Key', 'Складной корпус', 'Багажник']
  },
  {
    id: 5,
    brand: 'Mercedes-Benz',
    model: 'S-Class',
    year: '2021-2024',
    image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/f28c2ca1-aec8-462c-ac5c-a38ffdf6fffe.jpg',
    price: 18000,
    type: 'Премиум смарт-ключ',
    features: ['Keyless Go', 'Память настроек', 'NFC', 'Премиум отделка']
  },
  {
    id: 6,
    brand: 'BMW',
    model: 'X5',
    year: '2019-2024',
    image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/865631ee-1f90-43a8-b486-1015636470f2.jpg',
    price: 15500,
    type: 'Смарт-ключ',
    features: ['Comfort Access', 'Дистанционный запуск', 'Складной корпус']
  }
];

const Index = () => {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('catalog');

  const brands = ['all', ...Array.from(new Set(carKeys.map(key => key.brand)))];

  const filteredKeys = carKeys.filter(key => {
    const matchesBrand = selectedBrand === 'all' || key.brand === selectedBrand;
    const matchesSearch = key.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         key.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border bg-white sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 animate-fade-in">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Icon name="Key" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-heading font-bold text-gray-800">
                KeyMaster
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setActiveSection('catalog')}
                className={`font-medium transition-colors hover:text-primary ${activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`font-medium transition-colors hover:text-primary ${activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                О нас
              </button>
              <button
                onClick={() => setActiveSection('blog')}
                className={`font-medium transition-colors hover:text-primary ${activeSection === 'blog' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Блог
              </button>
              <button
                onClick={() => setActiveSection('contacts')}
                className={`font-medium transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Контакты
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Icon name="Search" size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/profile')}
              >
                <Icon name="User" size={20} />
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm">
                Консультация
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {activeSection === 'catalog' && (
        <>
          <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4 text-gray-800">
                  Изготовление автомобильных ключей
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Профессиональное изготовление и программирование ключей с чипом для всех марок автомобилей
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm">
                    <Icon name="Phone" className="mr-2" size={20} />
                    +7 (495) 123-45-67
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-sm">
                    Заказать звонок
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                <Card className="border border-gray-200 bg-white hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Clock" className="text-primary" size={28} />
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Быстрое изготовление</h3>
                    <p className="text-gray-600 text-sm">От 30 минут до 2 часов</p>
                  </CardContent>
                </Card>
                <Card className="border border-gray-200 bg-white hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Shield" className="text-primary" size={28} />
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Гарантия качества</h3>
                    <p className="text-gray-600 text-sm">Оригинальные чипы и комплектующие</p>
                  </CardContent>
                </Card>
                <Card className="border border-gray-200 bg-white hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="MapPin" className="text-primary" size={28} />
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Выезд на место</h3>
                    <p className="text-gray-600 text-sm">Работаем по всей Москве</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-heading font-medium mb-6 text-gray-800">Каталог автомобильных ключей</h2>
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      placeholder="Поиск по марке или модели..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="border-gray-300 rounded-sm"
                    />
                  </div>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger className="w-full md:w-[200px] border-gray-300 rounded-sm">
                      <SelectValue placeholder="Марка" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все марки</SelectItem>
                      {brands.filter(b => b !== 'all').map(brand => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredKeys.map((key) => (
                  <Card 
                    key={key.id} 
                    className="group overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-all"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-50">
                      <img 
                        src={key.image} 
                        alt={`${key.brand} ${key.model}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base font-medium text-gray-800 mb-1">{key.brand} {key.model}</CardTitle>
                      <CardDescription className="text-sm text-gray-500">{key.year}</CardDescription>
                      <div className="mt-3">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {key.price.toLocaleString()} ₽
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {key.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="space-y-1 mb-4">
                        {key.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                            <Icon name="Check" size={14} className="text-primary flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm text-sm">
                        Подробнее
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'about' && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl font-heading font-bold mb-8 text-center animate-slide-up">О нас</h1>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in">
              <CardContent className="pt-6 space-y-6 text-lg">
                <p>
                  <strong className="text-primary">KeyMaster</strong> — ведущая компания по изготовлению автомобильных ключей с опытом работы более 10 лет.
                </p>
                <p>
                  Мы специализируемся на производстве смарт-ключей, чипов и пультов для всех марок автомобилей. Наша команда профессионалов использует только современное оборудование и оригинальные комплектующие.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                    <div className="text-muted-foreground">лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-muted-foreground">довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-muted-foreground">моделей авто</div>
                  </div>
                </div>
                <p>
                  Мы гарантируем качество всех наших изделий и предоставляем официальную гарантию на все виды работ.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'blog' && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-5xl font-heading font-bold mb-12 text-center animate-slide-up">Блог</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Как выбрать смарт-ключ для автомобиля',
                  date: '15 октября 2024',
                  excerpt: 'Полное руководство по выбору правильного типа ключа для вашего автомобиля...'
                },
                {
                  title: 'Программирование чипов: что нужно знать',
                  date: '10 октября 2024',
                  excerpt: 'Разбираемся в технологии программирования автомобильных чипов...'
                },
                {
                  title: 'ТОП-5 проблем с автомобильными ключами',
                  date: '5 октября 2024',
                  excerpt: 'Самые частые неисправности и способы их решения...'
                }
              ].map((post, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-primary/10 text-primary border-primary/20">{post.date}</Badge>
                    <CardTitle className="font-heading">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Читать далее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl font-heading font-bold mb-12 text-center animate-slide-up">Контакты</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in">
                <CardHeader>
                  <CardTitle className="font-heading">Свяжитесь с нами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">info@keymaster.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in" style={{animationDelay: '0.1s'}}>
                <CardHeader>
                  <CardTitle className="font-heading">Форма обратной связи</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Ваше имя" className="bg-background/50 border-border/50" />
                    <Input type="tel" placeholder="Телефон" className="bg-background/50 border-border/50" />
                    <Input type="email" placeholder="Email" className="bg-background/50 border-border/50" />
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Icon name="Key" className="text-white" size={18} />
                </div>
                <span className="text-lg font-heading font-medium text-gray-800">KeyMaster</span>
              </div>
              <p className="text-sm text-gray-600">
                Профессиональное изготовление автомобильных ключей
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-gray-800">Каталог</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-primary cursor-pointer">Mercedes-Benz</li>
                <li className="hover:text-primary cursor-pointer">BMW</li>
                <li className="hover:text-primary cursor-pointer">Audi</li>
                <li className="hover:text-primary cursor-pointer">Toyota</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-gray-800">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-primary cursor-pointer">О компании</li>
                <li className="hover:text-primary cursor-pointer">Доставка и оплата</li>
                <li className="hover:text-primary cursor-pointer">Гарантии</li>
                <li className="hover:text-primary cursor-pointer">Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-gray-800">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={14} className="text-primary" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} className="text-primary" />
                  info@keymaster.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={14} className="text-primary" />
                  г. Москва
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
            <p>&copy; 2024 KeyMaster. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;