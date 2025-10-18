import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface Order {
  id: number;
  date: string;
  carBrand: string;
  carModel: string;
  keyType: string;
  status: 'completed' | 'processing' | 'pending';
  price: number;
  image: string;
}

const orders: Order[] = [
  {
    id: 1001,
    date: '15.10.2024',
    carBrand: 'Mercedes-Benz',
    carModel: 'E-Class',
    keyType: 'Смарт-ключ',
    status: 'completed',
    price: 15000,
    image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/f28c2ca1-aec8-462c-ac5c-a38ffdf6fffe.jpg'
  },
  {
    id: 1002,
    date: '12.10.2024',
    carBrand: 'BMW',
    carModel: '5 Series',
    keyType: 'Смарт-ключ',
    status: 'processing',
    price: 14500,
    image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/865631ee-1f90-43a8-b486-1015636470f2.jpg'
  },
  {
    id: 1003,
    date: '08.10.2024',
    carBrand: 'Toyota',
    carModel: 'Camry',
    keyType: 'Смарт-ключ',
    status: 'completed',
    price: 8500,
    image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/d739957d-035d-4440-9473-871cf036ae84.jpg'
  },
  {
    id: 1004,
    date: '05.10.2024',
    carBrand: 'Audi',
    carModel: 'A6',
    keyType: 'Смарт-ключ',
    status: 'completed',
    price: 16000,
    image: 'https://cdn.poehali.dev/projects/b4421fd2-648b-4ab2-ac6c-293cfd1281a5/files/d739957d-035d-4440-9473-871cf036ae84.jpg'
  }
];

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');

  const getStatusBadge = (status: Order['status']) => {
    const statusConfig = {
      completed: { label: 'Выполнен', className: 'bg-green-500/10 text-green-500 border-green-500/20' },
      processing: { label: 'В обработке', className: 'bg-primary/10 text-primary border-primary/20' },
      pending: { label: 'Ожидает', className: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' }
    };
    
    const config = statusConfig[status];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const totalOrders = orders.length;
  const totalSpent = orders.reduce((sum, order) => sum + order.price, 0);
  const completedOrders = orders.filter(o => o.status === 'completed').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 animate-fade-in cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-glow">
                <Icon name="Key" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                KeyMaster
              </span>
            </button>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="hidden md:flex"
              >
                <Icon name="Home" className="mr-2" size={20} />
                Главная
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-slide-up">
            <h1 className="text-4xl font-heading font-bold mb-2">Личный кабинет</h1>
            <p className="text-muted-foreground">Управляйте своим профилем и заказами</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="ShoppingBag" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-heading">{totalOrders}</div>
                    <div className="text-sm text-muted-foreground">Всего заказов</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-heading">{completedOrders}</div>
                    <div className="text-sm text-muted-foreground">Выполнено</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Wallet" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-heading">{totalSpent.toLocaleString()} ₽</div>
                    <div className="text-sm text-muted-foreground">Потрачено</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-fade-in">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2 bg-muted/50">
              <TabsTrigger value="orders" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="Package" className="mr-2" size={18} />
                Заказы
              </TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="User" className="mr-2" size={18} />
                Профиль
              </TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="mt-6">
              <div className="space-y-4">
                {orders.map((order, index) => (
                  <Card 
                    key={order.id} 
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all animate-fade-in overflow-hidden"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 flex-shrink-0">
                          <img 
                            src={order.image} 
                            alt={`${order.carBrand} ${order.carModel}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 space-y-3">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-heading font-semibold">
                                  {order.carBrand} {order.carModel}
                                </h3>
                                {getStatusBadge(order.status)}
                              </div>
                              <p className="text-muted-foreground">{order.keyType}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold font-heading text-primary">
                                {order.price.toLocaleString()} ₽
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Icon name="Calendar" size={16} />
                              <span>{order.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Hash" size={16} />
                              <span>Заказ #{order.id}</span>
                            </div>
                          </div>

                          <div className="flex gap-2 pt-2">
                            <Button variant="outline" size="sm" className="hover:bg-accent/50">
                              <Icon name="FileText" className="mr-2" size={16} />
                              Детали
                            </Button>
                            {order.status === 'completed' && (
                              <Button variant="outline" size="sm" className="hover:bg-accent/50">
                                <Icon name="RefreshCw" className="mr-2" size={16} />
                                Повторить
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="profile" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm lg:col-span-1 animate-fade-in">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <Avatar className="w-32 h-32 border-4 border-primary/20">
                        <AvatarImage src="" />
                        <AvatarFallback className="text-4xl font-heading bg-gradient-to-br from-primary to-secondary text-white">
                          ИП
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="text-2xl font-heading font-bold mb-1">Иван Петров</h2>
                        <p className="text-muted-foreground">ivan.petrov@email.com</p>
                      </div>
                      <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                        Премиум клиент
                      </Badge>
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                        <Icon name="Camera" className="mr-2" size={18} />
                        Изменить фото
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-card/50 backdrop-blur-sm lg:col-span-2 animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <CardHeader>
                    <CardTitle className="font-heading">Личная информация</CardTitle>
                    <CardDescription>Обновите данные вашего профиля</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Имя</Label>
                        <Input 
                          id="firstName" 
                          defaultValue="Иван" 
                          className="bg-background/50 border-border/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Фамилия</Label>
                        <Input 
                          id="lastName" 
                          defaultValue="Петров" 
                          className="bg-background/50 border-border/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        defaultValue="ivan.petrov@email.com" 
                        className="bg-background/50 border-border/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        defaultValue="+7 (999) 123-45-67" 
                        className="bg-background/50 border-border/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Адрес</Label>
                      <Input 
                        id="address" 
                        defaultValue="г. Москва, ул. Примерная, д. 10" 
                        className="bg-background/50 border-border/50"
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                        <Icon name="Save" className="mr-2" size={18} />
                        Сохранить изменения
                      </Button>
                      <Button variant="outline">
                        Отменить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm mt-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <CardHeader>
                  <CardTitle className="font-heading">Безопасность</CardTitle>
                  <CardDescription>Управление паролем и настройками безопасности</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Текущий пароль</Label>
                    <Input 
                      id="currentPassword" 
                      type="password" 
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Новый пароль</Label>
                      <Input 
                        id="newPassword" 
                        type="password" 
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                      <Input 
                        id="confirmPassword" 
                        type="password" 
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    <Icon name="Lock" className="mr-2" size={18} />
                    Обновить пароль
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
