
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Trophy, 
  Users, 
  GraduationCap, 
  Heart, 
  DollarSign,
  Calendar,
  Gift,
  Microscope,
  Computer,
  Gamepad2,
  Music,
  Palette,
  BookOpen,
  Shield,
  Clock
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      category: "البنية التحتية والمرافق",
      icon: Building2,
      color: "bg-primary",
      items: [
        "مبنى حديث على مساحة 5000 متر مربع",
        "فصول دراسية واسعة ومجهزة بأحدث التقنيات التعليمية",
        "مكتبة ضخمة تحتوي على أكثر من 10,000 كتاب ومرجع",
        "عيادة طبية مجهزة بطبيب مقيم وممرضة",
        "أنظمة أمان متطورة وكاميرات مراقبة في جميع الأنحاء",
        "ساحات وملاعب واسعة ومجهزة للأنشطة الرياضية"
      ]
    },
    {
      category: "المعامل والتقنيات",
      icon: Microscope,
      color: "bg-accent",
      items: [
        "3 معامل علوم مجهزة بأحدث الأجهزة العلمية",
        "معملي حاسوب بـ 80 جهاز كمبيوتر حديث",
        "معمل لغات متطور للتدريب على المحادثة",
        "سبورات ذكية تفاعلية في جميع الفصول",
        "شبكة إنترنت فائقة السرعة مع واي فاي مجاني",
        "نظام صوتي متطور في جميع القاعات"
      ]
    },
    {
      category: "الملاعب والأنشطة الرياضية",
      icon: Gamepad2,
      color: "bg-school-gold",
      items: [
        "ملعبين كبيرين متعددي الاستخدام",
        "صالحين لكرة القدم وجميع الأنشطة الرياضية",
        "مساحات واسعة للجري والتمارين البدنية",
        "معدات رياضية متنوعة وحديثة",
        "أنشطة رياضية منتظمة لجميع المراحل",
        "برامج تدريبية متخصصة للطلاب الموهوبين"
      ]
    },
    {
      category: "جودة التعليم والمناهج",
      icon: GraduationCap,
      color: "bg-primary/80",
      items: [
        "مناهج معتمدة من وزارة التربية والتعليم المصرية",
        "برامج تعليمية متطورة للمرحلتين الابتدائية والإعدادية",
        "نسبة معلم لطالب 1:15 لضمان الاهتمام الفردي",
        "برامج تقوية مجانية للطلاب المحتاجين",
        "ورش عمل تطويرية مستمرة للمعلمين",
        "نظام تقييم شامل ومستمر للطلاب"
      ]
    },
    {
      category: "الإدارة والخدمات",
      icon: Users,
      color: "bg-accent/80",
      items: [
        "إدارة متخصصة وذات خبرة طويلة في التعليم",
        "نظام إلكتروني متطور لمتابعة الطلاب",
        "خدمة نقل آمنة ومريحة بأسطول حديث",
        "خدمة استشارات نفسية وتربوية",
        "تواصل مستمر مع أولياء الأمور",
        "أنشطة متنوعة ورحلات تعليمية وترفيهية"
      ]
    },
    {
      category: "الرسوم والتسهيلات المالية",
      icon: DollarSign,
      color: "bg-school-gold/80",
      items: [
        "رسوم تنافسية مقارنة بالمستوى المقدم",
        "خطط سداد مرنة (شهرية، ربع سنوية، نصف سنوية)",
        "خصومات للأشقاء",
        "منح دراسية للطلاب المتفوقين والمحتاجين",
        "إعفاءات جزئية لأبناء المعلمين والموظفين",
        "بدون رسوم خفية أو إضافية مفاجئة"
      ]
    }
  ];

  const achievements = [
    { icon: Trophy, number: "50+", text: "جائزة وتكريم" },
    { icon: Users, number: "1000+", text: "طالب وطالبة" },
    { icon: GraduationCap, number: "100+", text: "معلم ومعلمة" },
    { icon: Calendar, number: "5+", text: "سنة خبرة" },
    { icon: Building2, number: "50+", text: "فصل دراسي" },
    { icon: Microscope, number: "10+", text: "معمل متخصص" }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            لماذا تختار مدرسة الجيل الواعد الخاصة؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            نحن لا نقدم مجرد تعليم، بل نبني مستقبل أطفالكم بأسس قوية ومتينة من خلال بيئة تعليمية متكاملة ومتطورة للمرحلتين الابتدائية والإعدادية
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16 animate-fade-in">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center card-hover bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.text}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover animate-fade-in bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-primary font-bold">{feature.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm leading-relaxed">
                      <div className="w-2 h-2 bg-accent rounded-full ml-3 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              انضم إلى عائلة الجيل الواعد اليوم!
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              احجز موعد لزيارة المدرسة واكتشف بنفسك لماذا نحن الخيار الأفضل لمستقبل طفلك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-white text-primary font-semibold">
                <Clock className="w-5 h-5 ml-2" />
                مواعيد الزيارة: الأحد - الخميس 7:30 ص - 2:00 م
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
