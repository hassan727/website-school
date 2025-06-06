
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('بيانات النموذج:', formData);
    
    toast({
      title: "تم إرسال الرسالة بنجاح",
      description: "سنتواصل معكم في أقرب وقت ممكن",
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "العنوان",
      details: "شارع الصفا والمروة، طوابق، فيصل، الجيزة، مصر",
      color: "bg-primary"
    },
    {
      icon: Phone,
      title: "الهاتف",
      details: "01204452332",
      color: "bg-accent"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: "aalgelalwad@gmail.com",
      color: "bg-school-gold"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: "الأحد - الخميس: 7:30 ص - 2:00 م",
      color: "bg-primary/80"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">تواصل معنا</h2>
          <p className="text-xl text-muted-foreground">
            نسعد بتواصلكم معنا، فريقنا جاهز للإجابة على جميع استفساراتكم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6">معلومات التواصل</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-reverse space-x-4">
                    <div className={`w-14 h-14 ${info.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <info.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-primary">{info.title}</h4>
                      <p className="text-muted-foreground text-base">{info.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-primary to-accent text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">ساعات العمل التفصيلية</h4>
                    <div className="space-y-1 text-blue-100">
                      <p>الأحد - الخميس: 7:30 ص - 2:00 م</p>
                      <p>الجمعة - السبت: مغلق</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">أرسل لنا رسالة</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="الاسم الكامل"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="رقم الهاتف"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="اكتب رسالتك هنا..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
                >
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
