import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    {
      icon: "Home",
      title: "Частные дома",
      description: "Безопасная очистка крыш частных домов любой сложности",
    },
    {
      icon: "Building2",
      title: "Коммерческие объекты",
      description: "Профессиональное обслуживание торговых и офисных зданий",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Соблюдение всех норм безопасности и страхование работ",
    },
    {
      icon: "Wrench",
      title: "Профессиональное оборудование",
      description: "Современная техника для быстрой и качественной работы",
    },
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/files/92c32a57-510c-4347-84c5-e6844204a4a9.jpg",
      title: "Удаление сосулек",
      description: "Очистка крыши от наледи и сосулек с автовышки",
    },
    {
      image: "https://cdn.poehali.dev/projects/0c6313d7-2b80-4d02-a9b1-8a459f686d8d/files/e2f9ed73-f235-4cdb-b532-ae578c6aa914.jpg",
      title: "Частный дом",
      description: "Комплексная очистка кровли загородного дома",
    },
    {
      image: "https://cdn.poehali.dev/projects/0c6313d7-2b80-4d02-a9b1-8a459f686d8d/files/8e77884c-afd4-473f-ac15-d7eab6446ddc.jpg",
      title: "Коммерческий объект",
      description: "Обслуживание крупного промышленного комплекса",
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Snowflake" className="text-primary" size={32} />
            <span className="text-xl font-bold text-secondary">СнегоЧист СПБ</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="#contacts" className="hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Профессиональная чистка крыш от снега
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Безопасное и качественное удаление снега с крыш любой сложности.
                Работаем с частными домами и коммерческими объектами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать услугу
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Узнать цену
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/files/92c32a57-510c-4347-84c5-e6844204a4a9.jpg"
                alt="Профессиональная очистка крыши"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональное оборудование и опытная команда для решения любых задач
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-4">
            Портфолио работ
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Примеры выполненных проектов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-secondary mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@snegochist.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Ежедневно, 8:00 - 22:00</p>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Snowflake" size={24} />
            <span className="text-xl font-bold">СнегоЧист СПБ</span>
          </div>
          <p className="text-white/80">
            Профессиональная очистка крыш от снега и наледи
          </p>
          <p className="text-white/60 mt-4">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;