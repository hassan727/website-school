
import { Card, CardContent } from '@/components/ui/card';
import { Users, GraduationCap, Trophy, Calendar } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '+1000',
      label: 'طالب وطالبة',
      color: 'bg-primary'
    },
    {
      icon: GraduationCap,
      number: '+100',
      label: 'معلم ومعلمة',
      color: 'bg-accent'
    },
    {
      icon: Trophy,
      number: '+5',
      label: 'جوائز وتميز',
      color: 'bg-school-gold'
    },
    {
      icon: Calendar,
      number: '+5',
      label: 'سنوات خبرة',
      color: 'bg-primary'
    }
  ];

  return (
    <section id="stats" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">إحصائياتنا</h2>
          <p className="text-xl text-blue-100">أرقام تعكس تميزنا ونجاحنا في مسيرة التعليم</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-hover bg-white/10 backdrop-blur-sm border-white/20 animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-6 text-center text-white">
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 animate-fade-in">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">فصول دراسية</h3>
              <div className="flex items-center justify-between">
                <span className="text-6xl font-bold text-yellow-300">100+</span>
                <div className="text-right text-blue-100">
                  <p>فصل دراسي مجهز</p>
                  <p>بأحدث التقنيات</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">التميز الأكاديمي</h3>
              <div className="flex items-center justify-between">
                <span className="text-6xl font-bold text-green-300">A+</span>
                <div className="text-right text-blue-100">
                  <p>معدل التفوق</p>
                  <p>في الامتحانات</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
