import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">نبذة عن مدرستنا</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مدرسة الجيل الواعد الخاصة، منارة تعليمية تسعى لإعداد جيل مبدع ومتميز
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000"
              alt="بيئة تعليمية متميزة في مدرسة الجيل الواعد"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-primary">رؤيتنا</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              أن نكون مؤسسة تعليمية رائدة في إعداد جيل مبدع ومتميز، قادر على المساهمة الفعالة في بناء المجتمع وتحقيق التنمية المستدامة.
            </p>
            
            <h3 className="text-3xl font-bold text-primary mt-8">رسالتنا</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              تقديم تعليم متميز يركز على تنمية شخصية الطالب المتكاملة من خلال بيئة تعليمية محفزة ومناهج حديثة وكادر تعليمي مؤهل.
            </p>
          </div>
        </div>

        {/* Leadership Section - محسّن */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">قيادة المدرسة</h3>
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in justify-center items-center text-center">
            <Card className="card-hover text-center bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-2">وليد طه</h4>
                <p className="text-lg font-semibold text-accent mb-3">رئيس مجلس الإدارة</p>
                <p className="text-muted-foreground">يقود المدرسة برؤية طموحة نحو التميز التعليمي والابتكار</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center bg-gradient-to-br from-school-gold/5 to-school-gold/10 border border-school-gold/20">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-school-gold to-school-gold/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Calendar className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-2">أ/ محمد النجار</h4>
                <p className="text-lg font-semibold text-accent mb-3">مدير المدرسة</p>
                <p className="text-muted-foreground">يدير العمليات اليومية ويضمن جودة التعليم والخدمات المقدمة</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
