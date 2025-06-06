import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, Users, GraduationCap, Heart } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "أ/ سارة محمد أحمد",
      role: "ولية أمر طالبة في الصف السادس الابتدائي",
      rating: 5,
      text: "ابنتي في المدرسة منذ 4 سنوات والتطور الذي لاحظته عليها مذهل. المعلمين متفانين جداً والإدارة متعاونة. النظافة ممتازة والأنشطة متنوعة. أنصح بشدة!",
      category: "parent"
    },
    {
      name: "م/ أحمد حسني علي",
      role: "ولي أمر طالب في الصف الثالث الإعدادي",
      rating: 5,
      text: "المدرسة فعلاً استثمار ممتاز لمستقبل الأطفال. ابني أصبح أكثر ثقة بنفسه وتحسنت درجاته بشكل ملحوظ. الملاعب والمعامل رائعة والرسوم معقولة مقارنة بالخدمة.",
      category: "parent"
    },
    {
      name: "د/ فاطمة عبدالله",
      role: "ولية أمر توأم في الصف الرابع الابتدائي",
      rating: 5,
      text: "اختارت المدرسة لأطفالي التوأم وكان القرار الأفضل في حياتي. الاهتمام الفردي بكل طفل، البرامج التعليمية المتطورة، والخصم للأشقاء ساعدني كثيراً. المدرسة أصبحت بيتهم الثاني.",
      category: "parent"
    },
    {
      name: "أ/ محمود طارق",
      role: "ولي أمر طالبة في الصف الخامس الابتدائي",
      rating: 5,
      text: "المدرسة تهتم بالجانب الأكاديمي والشخصي للطفل. ابنتي تعلمت الكثير من الأنشطة الرياضية والثقافية وتحسن مستواها في الإنجليزية بشكل كبير. الباص آمن ومريح.",
      category: "parent"
    },
    {
      name: "أ/ هند محمد صالح",
      role: "ولية أمر طالب في الصف الثاني الإعدادي",
      rating: 5,
      text: "ابني في الإعدادي وأصبح أكثر تنظيماً واعتماداً على النفس. المعلمين يهتمون بالتحضير للمرحلة التالية ويهيئون الطلاب لها. النتائج ممتازة والمستوى عالي جداً.",
      category: "parent"
    },
    {
      name: "أ/ عمرو سمير",
      role: "ولي أمر طالبين في الابتدائي والإعدادي",
      rating: 5,
      text: "المدرسة بتاعة أطفالي بقت زي البيت. الإدارة بتتعامل معانا كأننا عيلة واحدة. المرونة في السداد ساعدتني كتير والجودة عالية جداً. أطفالي بيحبوا المدرسة وبيستنوا الصبح عشان يروحوا.",
      category: "parent"
    },
    {
      name: "د/ نهال أحمد فؤاد",
      role: "ولية أمر طالبة في الصف الأول الإعدادي",
      rating: 5,
      text: "كطبيبة، أقدر جداً الاهتمام بالصحة النفسية والجسدية للطلاب في المدرسة. العيادة مجهزة والطبيب موجود دايماً. النظافة على أعلى مستوى والإجراءات الوقائية ممتازة.",
      category: "parent"
    },
    {
      name: "يوسف محمد علي",
      role: "طالب في الصف الثالث الإعدادي",
      rating: 5,
      text: "أحب مدرستي جداً! المعلمين بيشرحوا بطريقة حلوة ومفهومة، والملاعب رائعة. بحب لعب كرة القدم وبقيت أفضل في الرياضيات والعلوم. أصدقائي كلهم بيحبوا المدرسة زيي.",
      category: "student"
    },
    {
      name: "مريم أحمد حسن",
      role: "طالبة في الصف السادس الابتدائي",
      rating: 5,
      text: "مدرستي أحلى مدرسة في العالم! مس اللغة الإنجليزية بتخلينا نحب المادة، والمكتبة فيها كتب كتيرة حلوة. بحب حصة الرسم والموسيقى، والأنشطة ممتعة جداً.",
      category: "student"
    },
    {
      name: "عبدالرحمن طارق محمد",
      role: "طالب في الصف الثاني الإعدادي",
      rating: 5,
      text: "المدرسة ساعدتني أكون شخص أفضل. معمل الكيمياء والفيزياء مجهزين بأحدث الأجهزة، والمعلمين بيدونا وقت كافي للأسئلة. حاصل على مراكز متقدمة في المسابقات العلمية بفضل التحضير الممتاز.",
      category: "student"
    },
    {
      name: "نور محمود أحمد",
      role: "طالبة في الصف الخامس الابتدائي",
      rating: 5,
      text: "أحب أوي إني بروح مدرستي كل يوم. المعلمين بيهتموا بينا وبيساعدونا في أي مشكلة. الفصول نضيفة والأنشطة الرياضية ممتعة. بحب أوقات الفسحة لأن فيها أنشطة كتيرة ومسلية.",
      category: "student"
    },
    {
      name: "محمد عمر سليم",
      role: "طالب في الصف الثالث الإعدادي",
      rating: 5,
      text: "آخر سنة ليا في المرحلة الإعدادية وحزين إني هسيب زملائي. 4 سنين من أحلى سنين حياتي في المدرسة. المدرسة علمتني الانضباط والمسؤولية. كل المعلمين بيدعموني للوصول للمرحلة التالية. شكراً لكل القائمين على المدرسة.",
      category: "student"
    },
    {
      name: "أ/ ليلى فؤاد حامد",
      role: "ولية أمر طالبة في الصف الأول الابتدائي",
      rating: 5,
      text: "ابنتي في أول سنة دراسة وكنت قلقانة عليها جداً. لكن المدرسة استقبلتها بحب كبير والمعلمات صبورات معاها. بقت تحب المدرسة وبتحكيلي عن يومها بفرحة. الحمد لله على الاختيار ده.",
      category: "parent"
    },
    {
      name: "أ/ ياسمين محمد رضا",
      role: "ولية أمر طالب في الصف الثاني الإعدادي",
      rating: 5,
      text: "ابني كان خجول جداً وما بيحبش المشاركة. المدرسة شجعته وخلته يشارك في الأنشطة المختلفة. دلوقتي بقى واثق في نفسه ومتفوق في دراسته. المعلمين فعلاً بيهتموا بشخصية الطفل مش بس الدرجات.",
      category: "parent"
    },
    {
      name: "م/ تامر عبدالعزيز",
      role: "ولي أمر طالب في الصف الأول الإعدادي",
      rating: 5,
      text: "أطفالي اتخرجوا من المرحلة الابتدائية وابني الأصغر لسه في الإعدادي. الفرق بين أطفالي واللي في مدارس تانية واضح في الأخلاق والعلم. المدرسة بتربي قبل ما تعلم. أنا فخور إني اخترت المدرسة دي.",
      category: "parent"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const parentTestimonials = testimonials.filter(t => t.category === 'parent');
  const studentTestimonials = testimonials.filter(t => t.category === 'student');

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            ماذا يقول عنا أولياء الأمور والطلاب؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            آراء وتجارب حقيقية من عائلات وطلاب مدرسة الجيل الواعد تعكس مستوى الخدمة والجودة التي نقدمها
          </p>
        </div>

        {/* Parents Testimonials */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-12 animate-fade-in">
            <div className="flex items-center bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-full shadow-lg">
              <Users className="w-8 h-8 text-white ml-3" />
              <h3 className="text-2xl font-bold text-white">تعليقات أولياء الأمور</h3>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parentTestimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover animate-fade-in bg-gradient-to-br from-white to-blue-50/50 shadow-lg border border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary ml-3" />
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-primary mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary">
                      <Heart className="w-3 h-3 ml-1" />
                      ولي أمر
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Students Testimonials */}
        <div>
          <div className="flex items-center justify-center mb-12 animate-fade-in">
            <div className="flex items-center bg-gradient-to-r from-accent to-school-gold px-8 py-4 rounded-full shadow-lg">
              <GraduationCap className="w-8 h-8 text-white ml-3" />
              <h3 className="text-2xl font-bold text-white">تعليقات الطلاب</h3>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentTestimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover animate-fade-in bg-gradient-to-br from-white to-green-50/50 shadow-lg border border-accent/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-6 h-6 text-accent ml-2" />
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-accent mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <Badge variant="secondary" className="mt-2 bg-accent/10 text-accent">
                      <GraduationCap className="w-3 h-3 ml-1" />
                      طالب
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 animate-fade-in">
          <Card className="bg-gradient-to-r from-primary to-accent shadow-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                إحصائيات الرضا عن مدرستنا
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-blue-100">نسبة رضا أولياء الأمور</div>
                </div>
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">96%</div>
                  <div className="text-blue-100">نسبة رضا الطلاب</div>
                </div>
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">تعليق إيجابي</div>
                </div>
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">4.9/5</div>
                  <div className="text-blue-100">متوسط التقييم</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
