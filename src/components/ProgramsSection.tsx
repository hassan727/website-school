
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Microscope, 
  Globe, 
  Palette, 
  Music, 
  Computer,
  Heart,
  Users,
  Target,
  Star
} from 'lucide-react';

const ProgramsSection = () => {
  const academicPrograms = [
    {
      title: "البرنامج الأكاديمي الأساسي",
      description: "منهج متكامل يغطي جميع المواد الأساسية بطرق تعليمية حديثة",
      icon: BookOpen,
      features: ["اللغة العربية", "الرياضيات", "العلوم", "الدراسات الاجتماعية", "التربية الدينية"]
    },
    {
      title: "برنامج اللغات",
      description: "تعليم اللغة الإنجليزية بطرق تفاعلية مع التركيز على المحادثة",
      icon: Globe,
      features: ["معمل لغات متطور", "محادثة يومية", "أنشطة تفاعلية", "مسابقات لغوية", "معلمين متخصصين"]
    },
    {
      title: "برنامج العلوم والتكنولوجيا",
      description: "تطبيق عملي للمفاهيم العلمية في معامل مجهزة بأحدث الأجهزة",
      icon: Microscope,
      features: ["تجارب عملية", "مشاريع علمية", "معارض العلوم", "روبوتيكس أساسي", "برمجة للأطفال"]
    },
    {
      title: "برنامج الحاسوب",
      description: "تعليم أساسيات الحاسوب والبرمجة البسيطة للطلاب",
      icon: Computer,
      features: ["أساسيات الحاسوب", "برامج Office", "الإنترنت الآمن", "البرمجة المرئية", "التصميم البسيط"]
    }
  ];

  const activities = [
    {
      category: "الأنشطة الفنية",
      icon: Palette,
      color: "bg-pink-500",
      items: ["الرسم والتلوين", "الأشغال اليدوية", "النحت البسيط", "فن الديكوباج", "المعارض الفنية"]
    },
    {
      category: "الأنشطة الموسيقية",
      icon: Music,
      color: "bg-purple-500",
      items: ["تعلم الآلات البسيطة", "الكورال المدرسي", "الإيقاع والنشيد", "العروض الموسيقية", "المسابقات الغنائية"]
    },
    {
      category: "الأنشطة الرياضية",
      icon: Target,
      color: "bg-green-500",
      items: ["كرة القدم", "التمارين البدنية", "الجري والأنشطة الحركية", "المسابقات الرياضية", "برامج اللياقة للأطفال"]
    },
    {
      category: "الأنشطة الاجتماعية",
      icon: Users,
      color: "bg-blue-500",
      items: ["الرحلات التعليمية", "زيارات ميدانية", "أنشطة خدمة المجتمع", "الاحتفالات والمناسبات", "ورش العمل التفاعلية"]
    }
  ];

  const specialPrograms = [
    {
      title: "برنامج التفوق الأكاديمي",
      description: "برنامج خاص للطلاب المتفوقين لتنمية قدراتهم الأكاديمية",
      icon: Star,
      benefits: ["مناهج إضافية متقدمة", "مسابقات علمية", "ورش تطويرية", "إرشاد أكاديمي"]
    },
    {
      title: "برنامج الدعم الأكاديمي",
      description: "برنامج لمساعدة الطلاب الذين يحتاجون دعم إضافي في الدراسة",
      icon: Heart,
      benefits: ["حصص تقوية مجانية", "متابعة فردية", "خطط تعليمية مخصصة", "تواصل مع الأهل"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            البرامج والأنشطة التعليمية
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            نقدم برامج تعليمية شاملة ومتنوعة تهدف إلى تطوير شخصية الطالب أكاديمياً واجتماعياً وثقافياً
          </p>
        </div>

        {/* Academic Programs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">البرامج الأكاديمية</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicPrograms.map((program, index) => (
              <Card key={index} className="card-hover animate-fade-in bg-white shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full ml-2"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">الأنشطة اللاصفية</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="card-hover animate-fade-in bg-white shadow-lg">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${activity.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <activity.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">{activity.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {activity.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full ml-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Programs */}
        <div>
          <h3 className="text-3xl font-bold text-center text-primary mb-12">البرامج الخاصة</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialPrograms.map((program, index) => (
              <Card key={index} className="card-hover animate-fade-in bg-gradient-to-br from-white to-blue-50 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <program.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {program.benefits.map((benefit, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              اكتشف البرنامج المناسب لطفلك
            </h3>
            <p className="text-blue-100 mb-6">
              احجز موعد لمقابلة المرشد الأكاديمي لاختيار البرنامج الأنسب لطفلك
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-3 bg-white text-primary font-semibold">
              📞 01204452332
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
