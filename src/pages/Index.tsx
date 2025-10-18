import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

type CarKey = {
  id: number;
  brand: string;
  model: string;
  year: string;
  type: string;
  price: number;
  image: string;
  features: string[];
  inStock: boolean;
};

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
};

const Index = () => {
  const [activeSection, setActiveSection] = useState<'catalog' | 'about' | 'blog' | 'contacts' | 'account'>('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const carKeys: CarKey[] = [
    {
      id: 1,
      brand: 'Mercedes-Benz',
      model: 'E-Class W213',
      year: '2016-2023',
      type: 'Смарт-ключ',
      price: 15000,
      image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/f28c2ca1-aec8-462c-ac5c-a38ffdf6fffe.jpg',
      features: ['Бесключевой доступ', 'Дистанционный запуск', 'Складной ключ', 'Чип транспондер'],
      inStock: true
    },
    {
      id: 2,
      brand: 'BMW',
      model: '5 Series G30',
      year: '2017-2023',
      type: 'Смарт-ключ',
      price: 18000,
      image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/865631ee-1f90-43a8-b486-1015636470f2.jpg',
      features: ['Display Key', 'Комфортный доступ', 'Дистанционная парковка', 'ЖК-дисплей'],
      inStock: true
    },
    {
      id: 3,
      brand: 'Audi',
      model: 'A6 C8',
      year: '2018-2023',
      type: 'Смарт-ключ',
      price: 16500,
      image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/d739957d-035d-4440-9473-871cf036ae84.jpg',
      features: ['Keyless Entry', 'Складной механизм', 'Аварийный ключ', 'Иммобилайзер'],
      inStock: true
    },
    {
      id: 4,
      brand: 'Toyota',
      model: 'Camry XV70',
      year: '2017-2023',
      type: 'Смарт-ключ',
      price: 8500,
      image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/d739957d-035d-4440-9473-871cf036ae84.jpg',
      features: ['Smart Entry', 'Push Start', 'Аварийный ключ', 'Противоугонная система'],
      inStock: true
    },
    {
      id: 5,
      brand: 'Lexus',
      model: 'RX 350',
      year: '2015-2022',
      type: 'Смарт-ключ',
      price: 12000,
      image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/f28c2ca1-aec8-462c-ac5c-a38ffdf6fffe.jpg',
      features: ['Smart Access', 'Кнопка запуска', 'Металлический корпус', 'Водонепроницаемость'],
      inStock: true
    },
    {
      id: 6,
      brand: 'Volkswagen',
      model: 'Passat B8',
      year: '2014-2023',
      type: 'Складной ключ',
      price: 7500,
      image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/865631ee-1f90-43a8-b486-1015636470f2.jpg',
      features: ['Складной механизм', 'Дистанционное управление', 'Чип-ключ', 'Прочный корпус'],
      inStock: true
    },
    {
      id: 7,
      brand: 'Hyundai',
      model: 'Sonata DN8',
      year: '2019-2023',
      type: 'Смарт-ключ',
      price: 6500,
      image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/d739957d-035d-4440-9473-871cf036ae84.jpg',
      features: ['Smart Key', 'Бесключевой запуск', 'Складной ключ', 'LED индикация'],
      inStock: false
    },
    {
      id: 8,
      brand: 'Kia',
      model: 'K5',
      year: '2020-2023',
      type: 'Смарт-ключ',
      price: 6000,
      image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/f28c2ca1-aec8-462c-ac5c-a38ffdf6fffe.jpg',
      features: ['UVO Connect', 'Дистанционный старт', 'Тревожная кнопка', 'Стильный дизайн'],
      inStock: true
    },
    {
      id: 9,
      brand: 'Porsche',
      model: 'Cayenne',
      year: '2018-2023',
      type: 'Смарт-ключ',
      price: 25000,
      image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/865631ee-1f90-43a8-b486-1015636470f2.jpg',
      features: ['Премиум дизайн', 'Keyless Go', 'Металлический корпус', 'Эксклюзивный стиль'],
      inStock: true
    },
    {
      id: 10,
      brand: 'Tesla',
      model: 'Model 3',
      year: '2017-2023',
      type: 'Карта-ключ',
      price: 5000,
      image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/d739957d-035d-4440-9473-871cf036ae84.jpg',
      features: ['NFC технология', 'Минималистичный дизайн', 'Водонепроницаемость', 'Мобильный ключ'],
      inStock: true
    },
    {
      id: 11,
      brand: 'Land Rover',
      model: 'Range Rover',
      year: '2018-2023',
      type: 'Смарт-ключ',
      price: 22000,
      image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/f28c2ca1-aec8-462c-ac5c-a38ffdf6fffe.jpg',
      features: ['Activity Key', 'Премиум качество', 'Водостойкий браслет', 'Keyless Entry'],
      inStock: true
    },
    {
      id: 12,
      brand: 'Mazda',
      model: 'CX-5',
      year: '2017-2023',
      type: 'Смарт-ключ',
      price: 7000,
      image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/865631ee-1f90-43a8-b486-1015636470f2.jpg',
      features: ['Advanced Keyless', 'Эргономичный дизайн', 'Push Start', 'Надёжная защита'],
      inStock: true
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Как выбрать надёжный автомобильный ключ',
      excerpt: 'Подробное руководство по выбору качественного смарт-ключа для вашего автомобиля. Разбираем основные критерии.',
      date: '15 октября 2024',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      category: 'Руководства'
    },
    {
      id: 2,
      title: 'Технологии смарт-ключей: что нужно знать',
      excerpt: 'Обзор современных технологий в автомобильных ключах: от простых чипов до систем бесключевого доступа.',
      date: '12 октября 2024',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      category: 'Технологии'
    },
    {
      id: 3,
      title: 'Потеряли ключ? Пошаговая инструкция',
      excerpt: 'Что делать, если вы потеряли автомобильный ключ. Подробная инструкция по восстановлению доступа к авто.',
      date: '8 октября 2024',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      category: 'Полезные советы'
    },
    {
      id: 4,
      title: 'Сравнение ключей для премиум-автомобилей',
      excerpt: 'Детальное сравнение смарт-ключей для Mercedes, BMW, Audi и других премиальных марок.',
      date: '5 октября 2024',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
      category: 'Обзоры'
    },
    {
      id: 5,
      title: 'Уход и эксплуатация автомобильных ключей',
      excerpt: 'Как правильно ухаживать за смарт-ключом, чтобы он служил долгие годы. Советы экспертов.',
      date: '1 октября 2024',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      category: 'Полезные советы'
    },
    {
      id: 6,
      title: 'Защита от угона: роль современных ключей',
      excerpt: 'Как смарт-ключи помогают защитить автомобиль от угона. Обзор систем безопасности.',
      date: '28 сентября 2024',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      category: 'Безопасность'
    }
  ];

  const brands = ['all', ...Array.from(new Set(carKeys.map(key => key.brand)))];
  const years = ['all', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014'];

  const filteredKeys = carKeys.filter(key => {
    const matchesSearch = key.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         key.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || key.brand === selectedBrand;
    const matchesYear = selectedYear === 'all' || key.year.includes(selectedYear);
    return matchesSearch && matchesBrand && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Icon name="Key" className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">KeyMaster</h1>
                <p className="text-xs text-gray-500">Автомобильные ключи</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => setActiveSection('catalog')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'catalog' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                О нас
              </button>
              <button
                onClick={() => setActiveSection('blog')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'blog' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                Блог
              </button>
              <button
                onClick={() => setActiveSection('contacts')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                Контакты
              </button>
              <button
                onClick={() => setActiveSection('account')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'account' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                <Icon name="User" size={18} className="inline mr-1" />
                Личный кабинет
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {activeSection === 'catalog' && (
        <>
          <section className="bg-gradient-to-br from-primary/10 to-orange-100 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Изготовление автомобильных ключей
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Профессиональное изготовление смарт-ключей для всех марок автомобилей.
                Гарантия качества, быстрая доставка по России.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить нам
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Каталог ключей
                </Button>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-medium mb-6 text-gray-800">Каталог автомобильных ключей</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    placeholder="Поиск по марке или модели..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-gray-300"
                  />
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Марка автомобиля" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все марки</SelectItem>
                      {brands.filter(b => b !== 'all').map(brand => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Год выпуска" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все годы</SelectItem>
                      {years.filter(y => y !== 'all').map(year => (
                        <SelectItem key={year} value={year}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6 text-sm text-gray-600">
                Найдено товаров: <span className="font-medium">{filteredKeys.length}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredKeys.map((key) => (
                  <Card key={key.id} className="group overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-all">
                    <div className="aspect-square overflow-hidden bg-gray-50 relative">
                      <img
                        src={key.image}
                        alt={`${key.brand} ${key.model}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {!key.inStock && (
                        <div className="absolute top-2 right-2">
                          <Badge variant="destructive" className="text-xs">Под заказ</Badge>
                        </div>
                      )}
                      {key.inStock && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-green-500 text-white text-xs">В наличии</Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <CardTitle className="text-base font-medium text-gray-800 mb-1">
                            {key.brand}
                          </CardTitle>
                          <CardDescription className="text-sm">{key.model}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {key.type}
                        </Badge>
                        <span className="text-sm text-gray-500">{key.year}</span>
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
                      <div className="border-t border-gray-100 pt-4 mt-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs text-gray-500">Цена:</span>
                          <span className="text-2xl font-bold text-primary">
                            {key.price.toLocaleString()} ₽
                          </span>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-medium mb-8 text-center text-gray-800">Почему выбирают нас</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="text-center border-gray-200">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Award" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-medium text-gray-800 mb-2">Гарантия качества</h3>
                    <p className="text-sm text-gray-600">12 месяцев гарантии на все ключи</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-gray-200">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Clock" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-medium text-gray-800 mb-2">Быстрое изготовление</h3>
                    <p className="text-sm text-gray-600">Готовность за 1-3 рабочих дня</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-gray-200">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Truck" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-medium text-gray-800 mb-2">Доставка по России</h3>
                    <p className="text-sm text-gray-600">Бесплатная доставка от 10 000 ₽</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-gray-200">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Shield" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-medium text-gray-800 mb-2">Оригинальные детали</h3>
                    <p className="text-sm text-gray-600">Только сертифицированные компоненты</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'about' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">О компании KeyMaster</h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" 
                  alt="Офис KeyMaster"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop" 
                  alt="Команда"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            <Card className="border-gray-200 mb-8">
              <CardContent className="pt-6 space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">KeyMaster</strong> — ведущая компания по изготовлению автомобильных ключей с опытом работы более 10 лет на российском рынке.
                </p>
                <p className="leading-relaxed">
                  Мы специализируемся на производстве смарт-ключей, чипов и пультов для всех марок автомобилей. Наша команда профессионалов использует только современное оборудование и оригинальные комплектующие.
                </p>
                <p className="leading-relaxed">
                  За годы работы мы изготовили более 50 000 автомобильных ключей для клиентов по всей России. Наши специалисты постоянно повышают квалификацию и следят за новейшими технологиями в автомобильной индустрии.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-medium mb-6 text-gray-800">Наши преимущества</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                    Профессионализм
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Сертифицированные специалисты с опытом работы от 5 лет. Регулярное обучение новым технологиям.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                    Современное оборудование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Используем передовое оборудование от ведущих мировых производителей для программирования и изготовления ключей.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                    Оригинальные комплектующие
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Работаем только с сертифицированными поставщиками оригинальных запчастей и компонентов.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                    Гарантия качества
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Предоставляем официальную гарантию 12 месяцев на все изготовленные ключи и выполненные работы.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4 text-gray-800">Наша миссия</h3>
                <p className="text-gray-700 leading-relaxed">
                  Мы стремимся сделать процесс изготовления автомобильных ключей максимально простым, быстрым и доступным для каждого автовладельца. Наша цель — обеспечить безопасность и комфорт наших клиентов через качественные продукты и профессиональный сервис.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'blog' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Блог</h1>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Полезные статьи об автомобильных ключах, технологиях, советы по эксплуатации и обзоры новинок.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden border-gray-200 hover:shadow-lg transition-all">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl font-medium text-gray-800 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Контакты</h1>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-medium mb-6 text-gray-800">Свяжитесь с нами</h2>
                
                <div className="space-y-6">
                  <Card className="border-gray-200">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800 mb-1">Телефон</h3>
                          <p className="text-gray-600">+7 (495) 123-45-67</p>
                          <p className="text-sm text-gray-500">Пн-Пт: 9:00 - 20:00, Сб-Вс: 10:00 - 18:00</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800 mb-1">Email</h3>
                          <p className="text-gray-600">info@keymaster.ru</p>
                          <p className="text-sm text-gray-500">Ответим в течение 24 часов</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="MapPin" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800 mb-1">Адрес</h3>
                          <p className="text-gray-600">г. Москва, ул. Автомобильная, д. 123</p>
                          <p className="text-sm text-gray-500">Офис и производство</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="MessageCircle" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800 mb-1">Мессенджеры</h3>
                          <div className="flex gap-3 mt-2">
                            <Button size="sm" variant="outline" className="border-primary text-primary">
                              WhatsApp
                            </Button>
                            <Button size="sm" variant="outline" className="border-primary text-primary">
                              Telegram
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-2xl">Напишите нам</CardTitle>
                    <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Ваше имя</label>
                        <Input placeholder="Иван Иванов" className="border-gray-300" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Телефон</label>
                        <Input placeholder="+7 (999) 123-45-67" className="border-gray-300" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                        <Input type="email" placeholder="ivan@example.com" className="border-gray-300" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Сообщение</label>
                        <textarea
                          className="w-full min-h-[120px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Расскажите, чем мы можем помочь..."
                        />
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'account' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {!isLoggedIn ? (
              <div className="max-w-md mx-auto">
                <Card className="border-gray-200">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="User" size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Вход в личный кабинет</CardTitle>
                    <CardDescription>Войдите, чтобы управлять заказами и профилем</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="login" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="login">Вход</TabsTrigger>
                        <TabsTrigger value="register">Регистрация</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="login">
                        <form className="space-y-4">
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                            <Input type="email" placeholder="your@email.com" className="border-gray-300" />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Пароль</label>
                            <Input type="password" placeholder="••••••••" className="border-gray-300" />
                          </div>
                          <Button 
                            type="button"
                            className="w-full bg-primary hover:bg-primary/90"
                            onClick={() => setIsLoggedIn(true)}
                          >
                            Войти
                          </Button>
                          <Button type="button" variant="link" className="w-full text-sm text-gray-600">
                            Забыли пароль?
                          </Button>
                        </form>
                      </TabsContent>
                      
                      <TabsContent value="register">
                        <form className="space-y-4">
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Имя</label>
                            <Input placeholder="Иван Иванов" className="border-gray-300" />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                            <Input type="email" placeholder="your@email.com" className="border-gray-300" />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Телефон</label>
                            <Input placeholder="+7 (999) 123-45-67" className="border-gray-300" />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Пароль</label>
                            <Input type="password" placeholder="••••••••" className="border-gray-300" />
                          </div>
                          <Button 
                            type="button"
                            className="w-full bg-primary hover:bg-primary/90"
                            onClick={() => setIsLoggedIn(true)}
                          >
                            Зарегистрироваться
                          </Button>
                        </form>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-3xl font-bold text-gray-800">Личный кабинет</h1>
                  <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
                    <Icon name="LogOut" size={18} className="mr-2" />
                    Выйти
                  </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-gray-200">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">0</div>
                      <p className="text-sm text-gray-600">Активных заказов</p>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-200">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">0</div>
                      <p className="text-sm text-gray-600">Завершённых заказов</p>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-200">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">0 ₽</div>
                      <p className="text-sm text-gray-600">Бонусы</p>
                    </CardContent>
                  </Card>
                </div>

                <Tabs defaultValue="orders" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="orders">Мои заказы</TabsTrigger>
                    <TabsTrigger value="profile">Профиль</TabsTrigger>
                    <TabsTrigger value="addresses">Адреса доставки</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="orders">
                    <Card className="border-gray-200">
                      <CardHeader>
                        <CardTitle>История заказов</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-12">
                          <Icon name="Package" size={48} className="text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-500">У вас пока нет заказов</p>
                          <Button 
                            className="mt-4 bg-primary hover:bg-primary/90"
                            onClick={() => setActiveSection('catalog')}
                          >
                            Перейти в каталог
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="profile">
                    <Card className="border-gray-200">
                      <CardHeader>
                        <CardTitle>Личная информация</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-gray-700 mb-2 block">Имя</label>
                              <Input defaultValue="Иван" className="border-gray-300" />
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-700 mb-2 block">Фамилия</label>
                              <Input defaultValue="Иванов" className="border-gray-300" />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                            <Input type="email" defaultValue="ivan@example.com" className="border-gray-300" />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Телефон</label>
                            <Input defaultValue="+7 (999) 123-45-67" className="border-gray-300" />
                          </div>
                          <Button className="bg-primary hover:bg-primary/90">
                            Сохранить изменения
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="addresses">
                    <Card className="border-gray-200">
                      <CardHeader>
                        <CardTitle>Адреса доставки</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-12">
                          <Icon name="MapPin" size={48} className="text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-500 mb-4">У вас нет сохранённых адресов</p>
                          <Button className="bg-primary hover:bg-primary/90">
                            <Icon name="Plus" size={18} className="mr-2" />
                            Добавить адрес
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            )}
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
